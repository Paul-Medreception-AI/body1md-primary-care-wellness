import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Body1MD Primary Care & Wellness | Direct Primary Care in Austin',
  description: 'Learn about Body1MD\'s Direct Primary Care model that prioritizes the doctor-patient relationship over insurance paperwork. Experience unhurried visits and personalized care in Austin, TX.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Body1MD Primary Care & Wellness | Direct Primary Care in Austin',
    description: 'Learn about Body1MD\'s Direct Primary Care model that prioritizes the doctor-patient relationship over insurance paperwork. Experience unhurried visits and personalized care in Austin, TX.',
    url: 'https://body1md.com/about',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Body1MD Primary Care & Wellness | Direct Primary Care in Austin',
    description: 'Learn about Body1MD\'s Direct Primary Care model that prioritizes the doctor-patient relationship over insurance paperwork. Experience unhurried visits and personalized care in Austin, TX.',
    images: ['/og-image.png']
  }
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white">About</span>
          </nav>
          <h1 className="font-cormorant text-6xl font-light leading-tight max-w-4xl">
            Healthcare Built Around You, Not Insurance Companies
          </h1>
          <p className="text-xl text-white/80 mt-4 max-w-3xl">
            Discover how our Direct Primary Care model puts the doctor-patient relationship first
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 lg:pr-12 space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
              <p>
                Body1MD Primary Care & Wellness was founded on a simple belief: the doctor-patient relationship should be the foundation of healthcare, not an afterthought squeezed between insurance paperwork. Our Direct Primary Care model eliminates the middleman, allowing us to spend real time with you, listen to your concerns, and develop truly personalized care plans. We limit our patient panel size so you always get the attention you deserve.
              </p>
              <p>
                In a traditional primary care practice, doctors are pressured to see 25-30 patients per day, leaving just minutes for each appointment. At Body1MD, we take a different approach. Our membership-based model means we work for you, not insurance companies. You'll enjoy unhurried visits, same-day or next-day appointments when you're sick, and direct access to your physician via phone, text, or email. This is how primary care was meant to be.
              </p>
              <p>
                Whether you need preventive care, management of chronic conditions, or treatment for acute illnesses, we provide comprehensive primary care services. We coordinate with specialists when needed, help you navigate the healthcare system, and serve as your trusted medical partner. Our goal is simple: keep you healthy, catch problems early, and provide exceptional care without the frustration of traditional medical practices.
              </p>
            </div>

            <aside className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] animate-fade-up">
                <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-primary)] mb-6">
                  Our Credentials
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Board-Certified Primary Care Physicians</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Members of the Direct Primary Care Coalition</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Decades of Combined Clinical Experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Commitment to Continuing Medical Education</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Evidence-Based, Patient-Centered Care</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Serving the Austin Community</span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-primary)] text-center mb-16">
            Our Approach
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 border border-[var(--color-border)] animate-fade-up hover:shadow-lg transition-shadow">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-primary)] mb-4">
                Time & Accessibility
              </h3>
              <p className="text-[var(--color-ink)] leading-relaxed">
                We limit our patient panels so you receive unhurried visits that last as long as needed. With same-day appointments and 24/7 access to your doctor, you're never left waiting or wondering.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 border border-[var(--color-border)] animate-fade-up hover:shadow-lg transition-shadow">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-primary)] mb-4">
                Personalized Care
              </h3>
              <p className="text-[var(--color-ink)] leading-relaxed">
                Your health is unique, and your care should be too. We develop customized treatment plans based on your individual needs, goals, and lifestyle rather than one-size-fits-all protocols.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 border border-[var(--color-border)] animate-fade-up hover:shadow-lg transition-shadow">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-primary)] mb-4">
                Prevention First
              </h3>
              <p className="text-[var(--color-ink)] leading-relaxed">
                We focus on keeping you healthy through proactive screenings, lifestyle counseling, and early intervention. Preventing illness is always better than treating it after the fact.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience primary care the way it should be. Schedule your consultation today and discover the Body1MD difference.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-full transition-colors"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </>
  )
}