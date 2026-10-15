'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { SMS_CONSENT_MARKETING_TEXT, SMS_CONSENT_NON_MARKETING_TEXT } from '@/lib/sms-consent'

const FIELD =
  'border border-[var(--color-border)] rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none transition-shadow bg-white text-[var(--color-ink)]'
const LABEL = 'block text-sm font-semibold text-[var(--color-ink)] mb-2'

const OFFICE_PHONE = '(505) 645-5451'

type Status =
  | { kind: 'idle' }
  | { kind: 'sending' }
  | { kind: 'sent'; message: string }
  | { kind: 'error'; message: string }

export default function SmsConsentForm() {
  const mountedAt = useRef<number>(0)
  const [status, setStatus] = useState<Status>({ kind: 'idle' })

  useEffect(() => {
    mountedAt.current = Date.now()
  }, [])

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const { consent_non_marketing, consent_marketing, ...data } = Object.fromEntries(
      new FormData(form).entries(),
    ) as Record<string, string>
    const nonMarketing = consent_non_marketing === 'on'
    const marketing = consent_marketing === 'on'
    setStatus({ kind: 'sending' })
    try {
      const res = await fetch('/api/sms-consent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          // Send back the sentence actually rendered on this page for each box ticked, so the
          // stored record is what this person really saw rather than whatever the constant says
          // at read time. An unticked box sends no sentence: nothing was agreed to.
          consentNonMarketing: nonMarketing,
          consentNonMarketingText: nonMarketing ? SMS_CONSENT_NON_MARKETING_TEXT : undefined,
          consentMarketing: marketing,
          consentMarketingText: marketing ? SMS_CONSENT_MARKETING_TEXT : undefined,
          pagePath: window.location.pathname,
          timeElapsedMs: Date.now() - mountedAt.current,
        }),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok) {
        setStatus({
          kind: 'error',
          message: json.error || `We could not record your sign-up. Please call ${OFFICE_PHONE}.`,
        })
        return
      }
      form.reset()
      setStatus({ kind: 'sent', message: json.message || 'Thank you, we have your details.' })
    } catch {
      setStatus({
        kind: 'error',
        message: `We could not record your sign-up. Please call ${OFFICE_PHONE}.`,
      })
    }
  }

  if (status.kind === 'sent') {
    return (
      <div
        role="status"
        className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-light)] p-8 text-center"
      >
        <p className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">Thank you</p>
        <p className="text-[var(--color-muted)]">{status.message}</p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <label htmlFor="sms-name" className={LABEL}>
          Full name <span aria-hidden="true">*</span>
        </label>
        <input type="text" id="sms-name" name="name" required autoComplete="name" className={FIELD} />
      </div>

      <div>
        <label htmlFor="sms-phone" className={LABEL}>
          Mobile number <span aria-hidden="true">*</span>
        </label>
        <input
          type="tel"
          id="sms-phone"
          name="phone"
          required
          autoComplete="tel"
          inputMode="tel"
          placeholder="(505) 555-0123"
          className={FIELD}
        />
      </div>

      <div>
        <label htmlFor="sms-email" className={LABEL}>
          Email <span className="font-normal text-[var(--color-muted)]">(optional)</span>
        </label>
        <input type="email" id="sms-email" name="email" autoComplete="email" className={FIELD} />
      </div>

      {/* Each consent sentence is rendered in full next to its checkbox — a carrier reviewer
          checks that the wording is visible at the point of agreement, not buried in a link.
          🔴 Neither box is `required` or pre-checked, and the form submits with both empty:
          carriers refuse a form that forces consent (code 803). */}
      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-cream)] p-5 space-y-5">
        <label htmlFor="sms-consent-non-marketing" className="flex gap-3 items-start cursor-pointer">
          <input
            type="checkbox"
            id="sms-consent-non-marketing"
            name="consent_non_marketing"
            className="mt-1 w-5 h-5 shrink-0 accent-[var(--color-primary)]"
          />
          <span className="text-sm text-[var(--color-ink)] leading-relaxed">
            {SMS_CONSENT_NON_MARKETING_TEXT}
          </span>
        </label>
        <label htmlFor="sms-consent-marketing" className="flex gap-3 items-start cursor-pointer">
          <input
            type="checkbox"
            id="sms-consent-marketing"
            name="consent_marketing"
            className="mt-1 w-5 h-5 shrink-0 accent-[var(--color-primary)]"
          />
          <span className="text-sm text-[var(--color-ink)] leading-relaxed">
            {SMS_CONSENT_MARKETING_TEXT}
          </span>
        </label>
        <p className="text-sm text-[var(--color-muted)] leading-relaxed">
          {/* Body1MD's filed message flow (C96TDDL) quotes this line, inside the form, below the boxes. */}
          I agree to the{' '}
          <Link href="/terms-sms" className="text-[var(--color-accent)] underline">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="/privacy-sms" className="text-[var(--color-accent)] underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>

      {/* Honeypot — the name must not resemble a real field, or Chrome autofill fills it for
          real people and their submission is silently dropped. */}
      <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
        <label htmlFor="sms-hp">Leave this empty</label>
        <input
          type="text"
          id="sms-hp"
          name="hp_leave_blank"
          tabIndex={-1}
          autoComplete="off"
          data-1p-ignore
          data-lpignore="true"
          data-bwignore
        />
      </div>

      {status.kind === 'error' && (
        <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {status.message}
        </p>
      )}

      <button
        type="submit"
        disabled={status.kind === 'sending'}
        className="w-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] disabled:opacity-60 text-white py-4 rounded-xl font-semibold transition-colors"
      >
        {status.kind === 'sending' ? 'Sending…' : 'Submit'}
      </button>
    </form>
  )
}
