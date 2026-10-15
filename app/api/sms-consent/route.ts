import { NextRequest, NextResponse } from 'next/server'
import { deliver, toE164, NotConfiguredError } from '@/lib/deliver'

// Records an SMS opt-in and delivers it to the practice.
//
// This is the endpoint behind the A2P 10DLC Opt-In URL (/patient-form-sms) that a carrier
// reviewer loads. What matters for the campaign — and for a TCPA complaint later — is not that a
// message was sent, but that we can show the exact sentence the patient agreed to, snapshotted
// when they agreed, plus when, from where and from what device.
//
// The page this replaced was a visible "no GHL form ID was supplied" placeholder, so there was
// no opt-in mechanism at all and the campaign could not be submitted.
//
// With STUDIO_INGEST_URL and STUDIO_INGEST_TOKEN set, each record is filed on the practice's
// Studio board as a website message, with the consent flags and sentences in its details.
// ⚠️ Studio does not yet treat that card as permission to text (it writes nothing to its SMS
// consent store), so the record is evidence, not an opt-in Studio will act on.
//
// Cross-origin: only the origins in SMS_CONSENT_ALLOWED_ORIGINS get CORS headers. Because the POST
// must be JSON (anything else gets 415), a page on any other origin cannot file an opt-in through a
// visitor's browser. Same-origin posts from this site need no CORS. Ported from gables-pain.

export const runtime = 'nodejs'

const MIN_SUBMIT_MS = 1500
const OFFICE_PHONE = '(505) 645-5451'

const ALLOWED_ORIGINS = new Set(
  (process.env.SMS_CONSENT_ALLOWED_ORIGINS ||
    'https://body1md.com,https://www.body1md.com')
    .split(',')
    .map((o) => o.trim())
    // 'null' would open this to sandboxed iframes and file:// pages; '*' is not a wildcard here.
    .filter((o) => o && o !== 'null' && o !== '*'),
)

// Vary: Origin on every answer, allowed or not, so a cache can never hand one origin's
// headers to another.
function corsHeaders(request: NextRequest): Record<string, string> {
  const origin = request.headers.get('origin')
  if (!origin || !ALLOWED_ORIGINS.has(origin)) return { Vary: 'Origin' }
  return { 'Access-Control-Allow-Origin': origin, Vary: 'Origin' }
}

function reply(request: NextRequest, body: Record<string, unknown>, status: number) {
  return NextResponse.json(body, { status, headers: corsHeaders(request) })
}

const clip = (v: unknown, n: number) => String(v ?? '').trim().slice(0, n)

// The browser's preflight for the JSON POST from the Webflow page.
export function OPTIONS(request: NextRequest) {
  const headers: Record<string, string> = { ...corsHeaders(request), Allow: 'OPTIONS, POST' }
  if (headers['Access-Control-Allow-Origin']) {
    headers['Access-Control-Allow-Methods'] = 'POST, OPTIONS'
    headers['Access-Control-Allow-Headers'] = 'Content-Type'
    headers['Access-Control-Max-Age'] = '600'
  }
  return new NextResponse(null, { status: 204, headers })
}

export async function POST(request: NextRequest) {
  // JSON only: see the cross-origin note at the top of this file.
  if (!(request.headers.get('content-type') || '').toLowerCase().startsWith('application/json')) {
    return reply(request, { error: 'Invalid request' }, 415)
  }
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return reply(request, { error: 'Invalid request' }, 400)
  }
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return reply(request, { error: 'Invalid request' }, 400)
  }

  // Honeypot — see components/site/ContactForm.tsx for why the name matters.
  if (typeof body.hp_leave_blank === 'string' && body.hp_leave_blank.trim()) {
    console.warn('[sms-consent] honeypot triggered, dropped')
    return reply(request, { success: true }, 200)
  }
  if (typeof body.timeElapsedMs !== 'number' || body.timeElapsedMs < MIN_SUBMIT_MS) {
    console.warn(`[sms-consent] bad or missing timing (${body.timeElapsedMs}), dropped`)
    return reply(request, { success: true }, 200)
  }

  const name = clip(body.name, 120)
  const phone = toE164(clip(body.phone, 40))
  const ticked = (v: unknown) => v === true || v === 'true' || v === 'on'
  const nonMarketing = ticked(body.consentNonMarketing)
  const marketing = ticked(body.consentMarketing)
  // The browser sends back the sentence it actually displayed for each ticked box, and we store
  // THAT rather than re-reading our own constant — so a record always reflects what this patient
  // really saw. 500, not more: Studio keeps each extra field clipped to 500 characters.
  const nonMarketingText = nonMarketing ? clip(body.consentNonMarketingText, 500) : ''
  const marketingText = marketing ? clip(body.consentMarketingText, 500) : ''

  if (!name) {
    return reply(request, { error: 'Please enter your name.' }, 400)
  }
  if (!phone) {
    return reply(request, { error: 'Please enter a valid mobile number.' }, 400)
  }
  // Both boxes are optional, so ticking neither is a valid submission — it records the contact
  // with no permission to text. A tick WITHOUT its sentence is not: a consent we cannot quote is
  // not evidence. The real form always sends both, so only a hand-built request lands here.
  if ((nonMarketing && !nonMarketingText) || (marketing && !marketingText)) {
    return reply(
      request,
      { error: `We could not record your sign-up. Please call ${OFFICE_PHONE}.` },
      400,
    )
  }

  const payload: Record<string, unknown> = {
    name,
    phone,
    email: clip(body.email, 200) || undefined,
    // An explicit "No" rather than a missing field, so whoever reads the record cannot take a
    // box the patient left empty as one they forgot to report.
    consent_non_marketing: nonMarketing ? 'Yes' : 'No',
    consent_non_marketing_text: nonMarketingText || undefined,
    consent_marketing: marketing ? 'Yes' : 'No',
    consent_marketing_text: marketingText || undefined,
    submitted_at: new Date().toISOString(),
    // Vercel sets x-forwarded-for; the first entry is the client.
    ip: (request.headers.get('x-forwarded-for') || '').split(',')[0].trim() || undefined,
    user_agent: clip(request.headers.get('user-agent'), 400) || undefined,
    page_path: clip(body.pagePath, 300) || '/patient-form-sms',
    site: 'body1md.com',
  }

  try {
    await deliver('sms_consent', payload)
  } catch (error) {
    if (error instanceof NotConfiguredError) {
      // 🔴 Do NOT answer 200 here. An opt-in we did not record is worse than a failed one: the
      // practice would believe it may text this person and have no evidence it was permitted.
      console.error('[sms-consent] no delivery sink configured; opt-in NOT recorded')
    } else {
      console.error('[sms-consent] delivery failed:', error)
    }
    return reply(
      request,
      { error: `We could not record your sign-up. Please call our office at ${OFFICE_PHONE}.` },
      503,
    )
  }

  return reply(
    request,
    {
      success: true,
      message:
        nonMarketing || marketing
          ? 'You are signed up. Reply STOP to any message to opt out.'
          : 'We have your details. You did not tick either box, so we will not text you.',
    },
    200,
  )
}
