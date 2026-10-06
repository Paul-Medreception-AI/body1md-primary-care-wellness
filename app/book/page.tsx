import type { Metadata } from 'next'
import BookingFlow from '@/components/booking/BookingFlow'
import { SITE } from '@/lib/site'

const TITLE = 'Book a Visit | Body1MD Direct Primary Care, Albuquerque'
const DESC = 'Book a visit with Dr. Andrew Hemmen at Body1MD in Los Ranchos de Albuquerque. Choose a day and time, tell us the reason for your visit, and Body1MD confirms it with you. No login needed.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: '/book' },
  openGraph: { title: TITLE, description: DESC, url: 'https://body1md.com/book', siteName: 'Body1MD Primary Care & Wellness', type: 'website', images: [{ url: '/images/office-reception.jpg' }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: ['/images/office-reception.jpg'] },
}

// The booking flow. Its two posts go to /api/book, which files them on Body1MD's MedReception
// Studio board; the times come from /api/book/slots. See components/booking/BookingFlow.tsx.
export default function BookPage() {
  const address = `${SITE.street}, ${SITE.city}, ${SITE.region} ${SITE.postal}`
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-10 pb-24 sm:pt-14 sm:pb-28 text-center">
          <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-teal)] font-semibold mb-3">Body1MD, Los Ranchos de Albuquerque</p>
          <h1 className="font-cormorant text-4xl sm:text-6xl font-light leading-tight">Book a visit with Dr. Hemmen</h1>
          <p className="text-white/85 mt-3 text-lg">Five quick steps. No account or login needed.</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] pb-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 -mt-16 sm:-mt-20">
          <BookingFlow phone={SITE.phone} phoneHref={SITE.phoneHref} address={address} />
          <p className="mt-6 text-center text-sm text-[var(--color-muted)]">
            Prefer to talk to someone? Call <a href={SITE.phoneHref} className="font-semibold text-[var(--color-primary)] underline underline-offset-2">{SITE.phone}</a>, Monday to Friday 8am to 5pm.
          </p>
        </div>
      </section>
    </>
  )
}
