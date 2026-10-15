import type { Metadata } from 'next'
import Link from 'next/link'
import SmsConsentForm from '@/components/SmsConsentForm'
import { SITE } from '@/lib/site'

const TITLE = 'Text Message Sign-Up | Body1MD'
const DESCRIPTION = 'Opt in to text messages from Body1MD in Los Ranchos de Albuquerque, NM about your appointments and your care.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/patient-form-sms' },
  openGraph: { title: TITLE, description: DESCRIPTION, url: 'https://body1md.com/patient-form-sms', siteName: SITE.name, type: 'website' },
  // Indexable: this is the Opt-In URL submitted with the A2P 10DLC campaign and carrier
  // reviewers must be able to load it. Stated explicitly so a future blanket noindex on
  // form pages cannot take this one with it.
  robots: { index: true, follow: true },
}

// The A2P 10DLC consent page, in the format carriers approved for Gables Pain (campaign CIJGQ83,
// MNO_PROVISIONED 2026-09-24): the form is ON this page, not in a frame (an iframe opt-in got
// Encompass's first campaign rejected: the reviewer saw no form), two separate optional boxes,
// neither pre-checked, and the disclosures in the page text as well as beside the boxes.
// It posts to /api/sms-consent, which files the record on Body1MD's Studio board
// with the exact sentence agreed to, the time, the IP and the device.
//
// What this replaced: a visible "[A2P opt-in form not configured]" placeholder waiting for a
// GoHighLevel form ID, while campaign C96TDDL (approved 2026-10-06) described this form. This
// practice texts through Studio (Telnyx), not GoHighLevel.

export default function PatientFormSmsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-16 lg:py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-cormorant text-4xl sm:text-5xl font-light mb-4">Text Message Sign-Up</h1>
          <p className="text-lg text-white/90 leading-relaxed">
            Body1MD (Body1MD LLC) can text you about your appointments and your care.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[var(--color-ink)] leading-relaxed mb-8">
            Enter your name and mobile number below, tick the box for each kind of text message
            you would like to receive, and press <strong>Submit</strong>. Both boxes are optional.
            If you leave them empty, we will not text you. Consent to receive text messages is not
            a condition of receiving care. To send us a question instead, use our{' '}
            <Link href="/contact" className="text-[var(--color-accent)] underline">
              contact page
            </Link>
            .
          </p>

          <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 sm:p-8">
            <SmsConsentForm />
          </div>

          <div className="mt-10 text-sm text-[var(--color-muted)] leading-relaxed space-y-3">
            <h2 className="font-cormorant text-2xl text-[var(--color-ink)]">About our text messages</h2>
            <p>
              If you tick the first box, Body1MD LLC may text you about your
              appointments, services, or account, such as appointment reminders, confirmations,
              care instructions, and account notifications. If you tick the second box, we may
              also text you marketing and promotional messages, such as special offers. Message
              frequency varies. Message and data rates may apply.
            </p>
            <p>
              Reply <strong>STOP</strong> to any message to opt out at any time, or reply{' '}
              <strong>HELP</strong> for help. You may also call us at{' '}
              <a href={SITE.phoneHref} className="text-[var(--color-accent)] underline">
                {SITE.phone}
              </a>
              .
            </p>
            <p>
              Body1MD LLC <strong>does not share</strong> mobile opt-in information or consent with
              third parties or affiliates for their marketing purposes. Carriers are not liable for
              delayed or undelivered messages. See our{' '}
              <Link href="/terms-sms" className="text-[var(--color-accent)] underline">
                SMS Terms &amp; Conditions
              </Link>{' '}
              and{' '}
              <Link href="/privacy-sms" className="text-[var(--color-accent)] underline">
                Privacy Policy
              </Link>
              .
            </p>
            <p>
              Please do not send medical details by text. Text messaging is not a secure channel
              for protected health information, and messages may not be read right away. If this
              is an emergency, call 911.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
