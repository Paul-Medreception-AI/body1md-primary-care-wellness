'use client'

import { useRef, useState } from 'react'

// The /contact form. Delivered to Body1MD's MedReception Studio board by /api/contact.
//
// WORKS BEFORE HYDRATION. The <form> carries method="post" action="/api/contact", so a click
// before the JavaScript arrives (or with it off) is a native POST: the fields travel in the
// request BODY and never in a URL, and the route answers with a plain thank-you or error page.
// Once hydrated, onSubmit takes over, posts JSON, and keeps everything on this page.
//
// Inputs are uncontrolled on purpose: whatever the patient typed before hydration survives it,
// and a failed send leaves every field exactly as it was.

const ENDPOINT = '/api/contact'
const SUCCESS_TEXT = 'Thanks, we received your message. Body1MD will call or email you back.'

const FIELD =
  'border border-[var(--color-border)] rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none transition-shadow bg-white text-[var(--color-ink)]'
const LABEL = 'block text-sm font-semibold text-[var(--color-ink)] mb-2'

type Status =
  | { kind: 'idle' }
  | { kind: 'sending' }
  | { kind: 'sent' }
  | { kind: 'invalid'; message: string }
  | { kind: 'failed' }

export default function ContactForm({ phone, phoneHref, pagePath = '/contact' }: {
  phone: string
  phoneHref: string
  pagePath?: string
}) {
  const [status, setStatus] = useState<Status>({ kind: 'idle' })
  const doneRef = useRef<HTMLDivElement>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status.kind === 'sending') return
    const fd = new FormData(e.currentTarget)
    const get = (k: string) => String(fd.get(k) ?? '')

    if (!get('phone').trim() && !get('email').trim()) {
      setStatus({ kind: 'invalid', message: 'Please enter a phone number or an email address so we can reply.' })
      return
    }

    setStatus({ kind: 'sending' })
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: get('name'),
          phone: get('phone'),
          email: get('email'),
          message: get('message'),
          page_path: get('page_path'),
          hp_leave_blank: get('hp_leave_blank'),
        }),
      })
      const out = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string; message?: string }
      if (res.ok && out.ok === true) {
        setStatus({ kind: 'sent' })
        requestAnimationFrame(() => doneRef.current?.focus())
        const w = window as unknown as { gtag?: (...args: unknown[]) => void }
        w.gtag?.('event', 'contact_form_submit', { page_path: pagePath })
        return
      }
      if (out.error === 'invalid' && out.message) setStatus({ kind: 'invalid', message: out.message })
      else setStatus({ kind: 'failed' })
    } catch {
      setStatus({ kind: 'failed' })
    }
  }

  if (status.kind === 'sent') {
    return (
      <div
        ref={doneRef}
        tabIndex={-1}
        role="status"
        className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-light)] p-8 text-center focus:outline-none"
      >
        <p className="font-cormorant text-3xl text-[var(--color-primary)] mb-2">Message received</p>
        <p className="text-[var(--color-ink)]">{SUCCESS_TEXT}</p>
        <p className="text-sm text-[var(--color-muted)] mt-4">If you are having a medical emergency, call 911.</p>
      </div>
    )
  }

  const sending = status.kind === 'sending'

  return (
    <form method="post" action={ENDPOINT} onSubmit={onSubmit} className="space-y-5">
      <div>
        <label htmlFor="ct-name" className={LABEL}>
          Full name <span aria-hidden="true">*</span>
        </label>
        <input type="text" id="ct-name" name="name" required maxLength={120} autoComplete="name" className={FIELD} />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="ct-phone" className={LABEL}>Phone</label>
          <input type="tel" id="ct-phone" name="phone" maxLength={40} autoComplete="tel" inputMode="tel" aria-describedby="ct-reach" className={FIELD} />
        </div>
        <div>
          <label htmlFor="ct-email" className={LABEL}>Email</label>
          <input type="email" id="ct-email" name="email" maxLength={254} autoComplete="email" aria-describedby="ct-reach" className={FIELD} />
        </div>
      </div>
      <p id="ct-reach" className="-mt-2 text-xs text-[var(--color-muted)]">
        Please give us a phone number or an email address so we can reply.
      </p>
      <div>
        <label htmlFor="ct-message" className={LABEL}>Message</label>
        <textarea id="ct-message" name="message" rows={4} maxLength={2000} aria-describedby="ct-medical" className={FIELD} />
        <p id="ct-medical" className="mt-2 text-xs text-[var(--color-muted)]">Please do not include detailed medical information.</p>
      </div>

      <input type="hidden" name="page_path" value={pagePath} />

      {/* Honeypot: off screen, skipped by keyboard and screen readers, ignored by password managers. */}
      <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
        <label htmlFor="ct-hp">Leave this empty</label>
        <input type="text" id="ct-hp" name="hp_leave_blank" tabIndex={-1} autoComplete="off" data-1p-ignore data-lpignore="true" data-bwignore />
      </div>

      {(status.kind === 'invalid' || status.kind === 'failed') && (
        <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {status.kind === 'invalid' ? (
            <>{status.message} You can also call us at <a href={phoneHref} className="font-semibold underline">{phone}</a>.</>
          ) : (
            <>We could not send your message. Please call us at <a href={phoneHref} className="font-semibold underline">{phone}</a>.</>
          )}
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="w-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] disabled:opacity-60 text-white py-4 rounded-xl font-semibold transition-colors"
      >
        {sending ? 'Sending...' : 'Send message'}
      </button>
    </form>
  )
}
