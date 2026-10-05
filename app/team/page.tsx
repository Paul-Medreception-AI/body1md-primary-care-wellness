import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Meet Our Team | Body1MD Primary Care & Wellness',
  description: 'Meet the dedicated physicians and staff at Body1MD Primary Care & Wellness in Austin, TX. Our board-certified providers deliver personalized concierge medicine.',
  alternates: { canonical: '/team' },
  openGraph: {
    title: 'Meet Our Team | Body1MD Primary Care & Wellness',
    description: 'Meet the dedicated physicians and staff at Body1MD Primary Care & Wellness in Austin, TX. Our board-certified providers deliver personalized concierge medicine.',
    url: 'https://body1md.com/team',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meet Our Team | Body1MD Primary Care & Wellness',
    description: 'Meet the dedicated physicians and staff at Body1MD Primary Care & Wellness in Austin, TX. Our board-certified providers deliver personalized concierge medicine.',
    images: ['/og-image.png'],
  },
}

export default function TeamPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-6xl font-light mb-6">Meet Our Team</h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Our dedicated providers and staff are committed to delivering personalized, unhurried care that puts your health and wellness first.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-16">
            Our Providers &amp; Staff
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* TODO(optimize): replace with real provider bios + headshots once supplied */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-sm hover:shadow-lg transition-shadow animate-fade-up">
              <div className="relative bg-[var(--color-light)] h-72 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="w-20 h-20 stroke-[var(--color-primary)] opacity-40"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">
                  Our Provider Team
                </h3>
                <p className="text-sm text-[var(--color-primary)] font-semibold uppercase tracking-wide mb-3">
                  Physicians &amp; Staff
                </p>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Full provider profiles are coming soon. Please call to learn more about our team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-ink)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-5xl font-light mb-6">
            Ready to Meet Your Care Team?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Schedule your consultation today and experience the difference of personalized primary care in Austin, TX.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Schedule Your Consultation
            </Link>
            <Link
              href="/services"
              className="inline-block bg-transparent hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-full border-2 border-white/30 transition-colors"
            >
              Learn About Membership
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}