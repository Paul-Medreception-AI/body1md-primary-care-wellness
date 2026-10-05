import { deliver, NotConfiguredError, toE164 } from '@/lib/deliver'
import { SITE } from '@/lib/site'

// The /contact form, filed on Body1MD's MedReception Studio board as a "Website message" card.
//
// TWO CALLERS, ONE RULE SET:
//  1. The hydrated form posts JSON (fetch) and gets JSON back; the form stays on screen with
//     everything the patient typed if it fails.
//  2. The same <form> has method="post" action="/api/contact", so a click before hydration (or
//     with JavaScript off) is a native urlencoded POST. Field values travel in the BODY, never in
//     a URL. That caller gets a small HTML page back: the thank-you, or the error with the phone
//     number and the form refilled with what they typed.
//
// NEVER a 500 page: every path, including an unexpected exception, answers with our own JSON or
// HTML. NEVER logs the body or any field (a message can hold health information); logs carry
// an outcome code only.

export const runtime = 'nodejs'
// deliver() can take two Studio attempts of up to 9s each; give it room so the platform never
// cuts the function off and shows the patient its own error page.
export const maxDuration = 30

const LIMIT = { name: 120, phone: 40, email: 254, message: 2000, path: 200, body: 20_000 }
const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)*\.[A-Za-z]{2,}$/
const PATH_RE = /^\/[A-Za-z0-9\-_/]*$/
const SUCCESS_TEXT = 'Thanks, we received your message. Body1MD will call or email you back.'

type Fields = { name: string; phone: string; email: string; message: string; page_path: string; hp_leave_blank: string }
type Outcome =
  | { kind: 'sent' }
  | Invalid
  | { kind: 'failed' }

// Control characters out; newlines and tabs kept only where a person could have typed them.
const oneLine = (v: string) => v.replace(/[\u0000-\u001f\u007f]+/g, ' ').replace(/\s+/g, ' ').trim()
const multiLine = (v: string) =>
  v.replace(/\r\n?/g, '\n').replace(/[\u0000-\u0008\u000b-\u001f\u007f]/g, '').replace(/\n{4,}/g, '\n\n\n').trim()

function readFields(get: (k: string) => unknown): Fields {
  const s = (k: string) => {
    const v = get(k)
    return typeof v === 'string' ? v : ''
  }
  return {
    name: s('name'),
    phone: s('phone'),
    email: s('email'),
    message: s('message'),
    page_path: s('page_path'),
    hp_leave_blank: s('hp_leave_blank'),
  }
}

type Invalid = { kind: 'invalid'; code: string; message: string }

function validate(f: Fields): { kind: 'valid'; payload: Record<string, unknown> } | Invalid {
  const name = oneLine(f.name)
  const phoneRaw = oneLine(f.phone)
  const email = oneLine(f.email)
  const message = multiLine(f.message)

  if (!name) return { kind: 'invalid', code: 'missing_name', message: 'Please enter your name.' }
  if (name.length > LIMIT.name) return { kind: 'invalid', code: 'name_too_long', message: `Please shorten your name to ${LIMIT.name} characters or fewer.` }
  if (phoneRaw.length > LIMIT.phone) return { kind: 'invalid', code: 'bad_phone', message: 'Please check the phone number, including the area code.' }
  if (email.length > LIMIT.email) return { kind: 'invalid', code: 'bad_email', message: 'Please check the email address.' }
  if (message.length > LIMIT.message) return { kind: 'invalid', code: 'message_too_long', message: `Please shorten your message to ${LIMIT.message.toLocaleString('en-US')} characters or fewer.` }
  if (!phoneRaw && !email) {
    return { kind: 'invalid', code: 'missing_contact', message: 'Please enter a phone number or an email address so we can reply.' }
  }
  const phone = phoneRaw ? toE164(phoneRaw) : undefined
  if (phoneRaw && !phone) return { kind: 'invalid', code: 'bad_phone', message: 'Please check the phone number, including the area code.' }
  if (email && !EMAIL_RE.test(email)) return { kind: 'invalid', code: 'bad_email', message: 'Please check the email address.' }

  const path = f.page_path.trim()
  return {
    kind: 'valid',
    payload: {
      name,
      phone,
      email: email || undefined,
      message: message || undefined,
      page_path: path.length <= LIMIT.path && PATH_RE.test(path) ? path : '/contact',
      site: 'body1md.com',
    },
  }
}

async function handle(f: Fields): Promise<Outcome> {
  // Honeypot: invisible to people, filled by bots. Answer as if it worked, deliver nothing.
  if (f.hp_leave_blank.trim()) {
    console.warn('[contact] honeypot filled, dropped')
    return { kind: 'sent' }
  }
  const v = validate(f)
  if (v.kind === 'invalid') {
    console.warn(`[contact] rejected: ${v.code}`)
    return v
  }
  try {
    await deliver('web_form', v.payload)
  } catch (err) {
    if (err instanceof NotConfiguredError) console.error('[contact] NOT delivered: STUDIO_INGEST_TOKEN is not set')
    else console.error(`[contact] NOT delivered: ${err instanceof Error ? err.message : 'unknown error'}`)
    return { kind: 'failed' }
  }
  console.info('[contact] delivered to studio (web_form)')
  return { kind: 'sent' }
}

// ── JSON caller (the hydrated form) ──────────────────────────────────────────────────────

function json(body: Record<string, unknown>, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
  })
}

function jsonFor(o: Outcome): Response {
  if (o.kind === 'sent') return json({ ok: true }, 200)
  if (o.kind === 'invalid') return json({ ok: false, error: 'invalid', field: o.code, message: o.message }, 400)
  return json({ ok: false, error: 'unavailable', message: 'We could not send your message.' }, 503)
}

// ── HTML caller (native form POST, before hydration or without JavaScript) ────────────────

const esc = (v: string) =>
  v.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')

function htmlPage(title: string, inner: string, status: number): Response {
  const doc = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow"><title>${esc(title)} | Body1MD</title>
<style>
body{margin:0;background:#F7F8F5;color:#06152E;font:16px/1.6 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}
main{max-width:640px;margin:0 auto;padding:48px 16px}
.card{background:#fff;border:1px solid #D5E6F1;border-radius:16px;padding:32px}
.brand{font-size:13px;letter-spacing:.12em;text-transform:uppercase;color:#55606F;margin:0 0 8px}
h1{font-family:Georgia,"Times New Roman",serif;font-weight:500;font-size:30px;color:#0B2D64;margin:0 0 16px;line-height:1.2}
a{color:#0B2D64}
.alert{background:#FEF2F2;border:1px solid #FECACA;color:#991B1B;border-radius:12px;padding:12px 16px}
label{display:block;font-weight:600;font-size:14px;margin:16px 0 6px}
input,textarea{box-sizing:border-box;width:100%;border:1px solid #D5E6F1;border-radius:12px;padding:12px 14px;font:inherit;color:inherit;background:#fff}
.hp{position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden}
.btn{display:inline-block;background:#E76F25;color:#fff;border:0;border-radius:12px;padding:14px 24px;font:inherit;font-weight:600;text-decoration:none;cursor:pointer;margin-top:20px}
.small{font-size:13px;color:#55606F}
</style></head>
<body><main><div class="card"><p class="brand">Body1MD</p>${inner}</div></main></body></html>`
  return new Response(doc, {
    status,
    headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex' },
  })
}

function htmlFor(o: Outcome, f: Fields): Response {
  if (o.kind === 'sent') {
    return htmlPage('Message received', `
<h1>Message received</h1>
<p role="status">${esc(SUCCESS_TEXT)}</p>
<p class="small">If you are having a medical emergency, call 911.</p>
<a class="btn" href="/">Back to the Body1MD website</a>`, 200)
  }

  const reason = o.kind === 'invalid'
    ? `${esc(o.message)} You can also call us at <a href="${esc(SITE.phoneHref)}">${esc(SITE.phone)}</a>.`
    : `We could not send your message. Please call us at <a href="${esc(SITE.phoneHref)}">${esc(SITE.phone)}</a>.`
  // The form comes back refilled with exactly what they typed, so nothing is lost.
  return htmlPage('Message not sent', `
<h1>Your message was not sent</h1>
<p class="alert" role="alert">${reason}</p>
<form method="post" action="/api/contact">
<label for="ct-name">Full name *</label>
<input id="ct-name" name="name" type="text" required maxlength="${LIMIT.name}" autocomplete="name" value="${esc(f.name)}">
<label for="ct-phone">Phone</label>
<input id="ct-phone" name="phone" type="tel" maxlength="${LIMIT.phone}" autocomplete="tel" value="${esc(f.phone)}">
<label for="ct-email">Email</label>
<input id="ct-email" name="email" type="email" maxlength="${LIMIT.email}" autocomplete="email" value="${esc(f.email)}">
<p class="small">Please give us a phone number or an email address so we can reply.</p>
<label for="ct-message">Message</label>
<textarea id="ct-message" name="message" rows="5" maxlength="${LIMIT.message}">${esc(f.message)}</textarea>
<p class="small">Please do not include detailed medical information.</p>
<input type="hidden" name="page_path" value="${esc(f.page_path || '/contact')}">
<div class="hp" aria-hidden="true"><label for="ct-hp">Leave this empty</label><input id="ct-hp" name="hp_leave_blank" type="text" tabindex="-1" autocomplete="off"></div>
<button class="btn" type="submit">Send message</button>
</form>`, o.kind === 'invalid' ? 400 : 503)
}

// ── entry point ──────────────────────────────────────────────────────────────────────────

export async function POST(request: Request): Promise<Response> {
  const type = (request.headers.get('content-type') || '').toLowerCase()
  const wantsJson = type.includes('application/json')
  const empty = readFields(() => '')
  // Outside the try, so even an unexpected failure can hand back what was already parsed.
  let fields: Fields = empty
  try {
    const declared = Number(request.headers.get('content-length') || 0)
    if (declared > LIMIT.body) {
      console.warn('[contact] rejected: body_too_large')
      const o: Outcome = { kind: 'invalid', code: 'body_too_large', message: 'Your message is too long to send.' }
      return wantsJson ? jsonFor(o) : htmlFor(o, empty)
    }

    if (wantsJson) {
      const text = await request.text()
      if (text.length > LIMIT.body) return jsonFor({ kind: 'invalid', code: 'body_too_large', message: 'Your message is too long to send.' })
      let body: unknown
      try {
        body = JSON.parse(text)
      } catch {
        console.warn('[contact] rejected: bad_json')
        return json({ ok: false, error: 'invalid', field: 'bad_json', message: 'Please try again.' }, 400)
      }
      if (!body || typeof body !== 'object' || Array.isArray(body)) {
        console.warn('[contact] rejected: bad_json')
        return json({ ok: false, error: 'invalid', field: 'bad_json', message: 'Please try again.' }, 400)
      }
      const obj = body as Record<string, unknown>
      fields = readFields((k) => obj[k])
    } else if (type.includes('multipart/form-data')) {
      const fd = await request.formData()
      fields = readFields((k) => fd.get(k))
    } else {
      // application/x-www-form-urlencoded: what a <form method="post"> sends by default.
      const text = await request.text()
      if (text.length > LIMIT.body) {
        console.warn('[contact] rejected: body_too_large')
        return htmlFor({ kind: 'invalid', code: 'body_too_large', message: 'Your message is too long to send.' }, empty)
      }
      const params = new URLSearchParams(text)
      fields = readFields((k) => params.get(k))
    }

    const outcome = await handle(fields)
    return wantsJson ? jsonFor(outcome) : htmlFor(outcome, fields)
  } catch (err) {
    // Anything unexpected still gets our own answer with the phone number, never a 500 page.
    console.error(`[contact] unexpected error: ${err instanceof Error ? err.name : 'unknown'}`)
    return wantsJson ? jsonFor({ kind: 'failed' }) : htmlFor({ kind: 'failed' }, fields)
  }
}
