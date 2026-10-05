import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Patient Reviews | Body1MD Primary Care & Wellness',
  description: 'Read what patients are saying about their experience with Body1MD Primary Care & Wellness in Austin, TX. We value your feedback and strive to provide exceptional direct primary care.',
  alternates: { canonical: '/reviews' },
  openGraph: {
    title: 'Patient Reviews | Body1MD Primary Care & Wellness',
    description: 'Read what patients are saying about their experience with Body1MD Primary Care & Wellness in Austin, TX. We value your feedback and strive to provide exceptional direct primary care.',
    url: 'https://body1md.com/reviews',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patient Reviews | Body1MD Primary Care & Wellness',
    description: 'Read what patients are saying about their experience with Body1MD Primary Care & Wellness in Austin, TX. We value your feedback and strive to provide exceptional direct primary care.',
    images: ['/og-image.png']
  }
}

export default function ReviewsPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl font-light mb-6">
            Patient Reviews
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Your feedback helps us continually improve the care and experience we provide to every patient.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mb-4">
            We'd Love Your Feedback
          </h2>
          <p className="text-lg text-[var(--color-muted)] mb-8 leading-relaxed">
            As a growing practice, we're building our community one patient at a time. If you've experienced our care, we would be honored if you'd share your thoughts with us. Your honest feedback helps us serve you and future patients better.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] text-white px-8 py-4 rounded-md font-medium hover:bg-[var(--color-accent-dark)] transition-colors"
          >
            Contact Us
          </Link>
          {/* TODO(optimize): drop in real Google/Healthgrades reviews here once available */}
        </div>
      </section>

      <section className="bg-[var(--color-primary)] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-3xl text-white mb-4">
            Ready to Experience Primary Care Reimagined?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join Body1MD and discover what healthcare feels like when your doctor actually has time for you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-md font-medium hover:bg-[var(--color-cream)] transition-colors"
            >
              Schedule Your Consultation
            </Link>
            <Link
              href="/about"
              className="inline-block bg-transparent text-white border-2 border-white px-8 py-4 rounded-md font-medium hover:bg-white/10 transition-colors"
            >
              Learn About Membership
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}