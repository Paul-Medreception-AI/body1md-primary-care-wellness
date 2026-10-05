import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Services | Body1MD Primary Care & Wellness',
  description: 'Comprehensive primary care services in Austin, TX including annual wellness exams, chronic disease management, acute illness care, preventive care, telemedicine visits, and in-office procedures.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Our Services | Body1MD Primary Care & Wellness',
    description: 'Comprehensive primary care services in Austin, TX including annual wellness exams, chronic disease management, acute illness care, preventive care, telemedicine visits, and in-office procedures.',
    url: 'https://body1md.com/services',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services | Body1MD Primary Care & Wellness',
    description: 'Comprehensive primary care services in Austin, TX including annual wellness exams, chronic disease management, acute illness care, preventive care, telemedicine visits, and in-office procedures.',
    images: ['/og-image.png'],
  },
}

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-white/60 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span>Services</span>
          </div>
          <h1 className="font-cormorant text-6xl font-light">Our Services</h1>
          <p className="text-xl text-white/80 max-w-xl mx-auto mt-4">
            Comprehensive primary care designed to keep you healthy, from preventive wellness to chronic disease management and same-day acute care.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-4 text-[var(--color-ink)]">
            Comprehensive Care for Every Need
          </h2>
          <p className="text-[var(--color-muted)] text-center mb-16 max-w-2xl mx-auto">
            Our direct primary care model gives you access to a full range of services, all included in your simple monthly membership.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-up group">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-5">
                Annual Wellness Exams
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Comprehensive physical examinations with time to discuss your health goals and concerns. We focus on prevention, early detection, and personalized wellness strategies tailored to your unique needs.
              </p>
              <span className="block mt-6 text-[var(--color-primary)] font-semibold text-sm group-hover:underline">
                Learn More →
              </span>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-up group">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-5">
                Chronic Disease Management
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Expert care for diabetes, hypertension, heart disease, and other ongoing conditions. Our continuous monitoring and personalized treatment plans help you stay healthy and avoid complications.
              </p>
              <span className="block mt-6 text-[var(--color-primary)] font-semibold text-sm group-hover:underline">
                Learn More →
              </span>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-up group">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-5">
                Acute Illness Care
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Same-day treatment for sudden illnesses like infections, injuries, and urgent health concerns. Skip the urgent care wait and see your own doctor who knows your medical history.
              </p>
              <span className="block mt-6 text-[var(--color-primary)] font-semibold text-sm group-hover:underline">
                Learn More →
              </span>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-up group">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-5">
                Preventive Care
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Proactive health screenings, vaccinations, and lifestyle counseling to keep you healthy. We partner with you to prevent illness before it starts through evidence-based wellness strategies.
              </p>
              <span className="block mt-6 text-[var(--color-primary)] font-semibold text-sm group-hover:underline">
                Learn More →
              </span>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-up group">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-5">
                Telemedicine Visits
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Virtual appointments from the comfort of your home or office when in-person visits aren't necessary. Get prescriptions, follow-up care, and medical advice without leaving your location.
              </p>
              <span className="block mt-6 text-[var(--color-primary)] font-semibold text-sm group-hover:underline">
                Learn More →
              </span>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-up group">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-5">
                In-Office Procedures
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Minor procedures, laboratory testing, and diagnostic services performed conveniently in our office. We handle many needs on-site to save you time and additional appointments.
              </p>
              <span className="block mt-6 text-[var(--color-primary)] font-semibold text-sm group-hover:underline">
                Learn More →
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-4 text-[var(--color-ink)]">
            How It Works
          </h2>
          <p className="text-[var(--color-muted)] text-center mb-16 max-w-2xl mx-auto">
            Getting started with Body1MD is simple. Three easy steps to better healthcare.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0">
            <div className="text-center lg:border-r lg:border-[var(--color-border)] lg:pr-12 animate-fade-up">
              <div className="font-cormorant text-7xl text-[var(--color-primary)] opacity-50 mb-4">01</div>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Choose Your Membership
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Select the membership plan that fits your needs with transparent monthly pricing. No hidden fees, no copays, no deductibles - just comprehensive primary care for one simple monthly cost.
              </p>
            </div>

            <div className="text-center lg:border-r lg:border-[var(--color-border)] lg:px-12 animate-fade-up">
              <div className="font-cormorant text-7xl text-[var(--color-primary)] opacity-50 mb-4">02</div>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Meet Your Doctor
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Schedule your comprehensive initial consultation where we take time to understand your health history, goals, and concerns. This extended visit establishes the foundation for your personalized care plan.
              </p>
            </div>

            <div className="text-center lg:pl-12 animate-fade-up">
              <div className="font-cormorant text-7xl text-[var(--color-primary)] opacity-50 mb-4">03</div>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Experience Better Healthcare
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Enjoy same-day appointments, 24/7 direct access to your physician, and unhurried visits whenever you need care. Your doctor becomes your true healthcare partner, always available and never rushed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-4">Ready to Begin?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Take the first step toward personalized, accessible primary care in Austin, TX. Schedule your consultation today.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </>
  )
}