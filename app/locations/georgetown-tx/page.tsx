import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Primary Care Near Georgetown, TX | Body1MD Primary Care & Wellness',
  description: 'Serving Georgetown, TX with expert primary care services. Convenient access from Georgetown to our Austin practice, plus telehealth options available.',
  alternates: { canonical: '/locations/georgetown-tx' },
  openGraph: {
    title: 'Primary Care Near Georgetown, TX | Body1MD Primary Care & Wellness',
    description: 'Serving Georgetown, TX with expert primary care services. Convenient access from Georgetown to our Austin practice, plus telehealth options available.',
    url: 'https://body1md.com/locations/georgetown-tx',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Primary Care Near Georgetown, TX | Body1MD Primary Care & Wellness',
    description: 'Serving Georgetown, TX with expert primary care services. Convenient access from Georgetown to our Austin practice, plus telehealth options available.',
    images: ['/og-image.png']
  }
}

export default function GeorgetownTXPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/locations" className="hover:underline">Locations</Link>
            <span className="mx-2">›</span>
            <span>Georgetown, TX</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6">
            Primary Care Near Georgetown, TX
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl">
            Serving patients from Georgetown and surrounding TX communities.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-medium transition-colors"
          >
            Schedule in Georgetown
          </Link>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-8 text-center">
            Serving the Georgetown Area
          </h2>
          <div className="space-y-6 text-lg text-[var(--color-ink)]/80 leading-relaxed">
            <p>
              Located just a short drive south from Georgetown, Body1MD Primary Care & Wellness provides comprehensive primary care services to patients throughout the greater Austin area. Our practice is conveniently accessible via I-35, making the commute from Georgetown straightforward for both routine appointments and urgent care needs. Many of our Georgetown patients appreciate the easy access and consistently choose us for their ongoing primary care.
            </p>
            <p>
              Georgetown residents trust Body1MD for personalized, relationship-based healthcare that goes beyond the typical rushed appointments found elsewhere. We offer extended visit times, same-day appointments when needed, and comprehensive care coordination. For patients who prefer to avoid the drive, we also provide telehealth consultations that bring quality primary care directly to your home in Georgetown.
            </p>
          </div>
          <div className="bg-[var(--color-light)] rounded-2xl h-64 flex items-center justify-center mt-12">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto mb-4 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <p className="text-[var(--color-muted)] font-medium">Serving Georgetown, TX and surrounding areas</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Services Available to Georgetown Patients
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-shadow animate-fade-up">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                Annual Wellness Exams
              </h3>
              <p className="text-[var(--color-ink)]/70 mb-4 leading-relaxed">
                Comprehensive preventive care visits including physical exams, health screenings, and personalized wellness planning for Georgetown patients.
              </p>
              <Link href="/services/wellness-exams" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium inline-flex items-center group">
                Learn More
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-shadow animate-fade-up">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                Chronic Disease Management
              </h3>
              <p className="text-[var(--color-ink)]/70 mb-4 leading-relaxed">
                Ongoing care for diabetes, hypertension, heart disease, and other chronic conditions with regular monitoring and treatment adjustments.
              </p>
              <Link href="/services/chronic-disease" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium inline-flex items-center group">
                Learn More
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-shadow animate-fade-up">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                Acute Illness Care
              </h3>
              <p className="text-[var(--color-ink)]/70 mb-4 leading-relaxed">
                Same-day appointments available for urgent medical needs including infections, injuries, flu symptoms, and other acute conditions.
              </p>
              <Link href="/services/acute-care" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium inline-flex items-center group">
                Learn More
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
          <svg className="w-12 h-12 text-[var(--color-accent)] mb-6 mx-auto" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
          </svg>
          <h2 className="font-cormorant text-3xl md:text-4xl text-[var(--color-ink)] mb-6 text-center">
            Can't Make the Drive? We Offer Telehealth
          </h2>
          <p className="text-lg text-[var(--color-ink)]/80 leading-relaxed text-center mb-6">
            Georgetown residents can access quality primary care from the comfort of home through secure video consultations. Our telehealth services are perfect for follow-up appointments, medication management, minor illness evaluation, and many routine care needs.
          </p>
          <p className="text-lg text-[var(--color-ink)]/80 leading-relaxed text-center">
            Telehealth visits are covered by most insurance plans and offer the same personalized attention you'd receive in person. Schedule your virtual appointment today and experience convenient care without the commute.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                How far is Body1MD from Georgetown?
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                Our Austin practice is approximately 25-30 miles south of Georgetown via I-35, typically a 30-40 minute drive depending on traffic. Many Georgetown patients find the convenient highway access makes the trip straightforward for their healthcare needs.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                What are the best directions from Georgetown to your practice?
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                Take I-35 South from Georgetown toward Austin. Detailed directions to our office will be provided when you schedule your appointment. We're easily accessible from the interstate with ample parking available on-site.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                Do you offer telehealth for Georgetown patients?
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                Yes! We provide secure telehealth video consultations for Georgetown residents, perfect for follow-ups, medication management, minor illnesses, and many routine care needs. Telehealth appointments offer the same quality care without requiring travel.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                Is parking available for Georgetown patients visiting your practice?
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                Yes, we offer convenient on-site parking for all patients. Our facility is fully accessible with easy entry from the parking area. If you have specific accessibility needs, please let us know when scheduling so we can ensure your visit is comfortable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-6">
            Get Expert Care from Georgetown
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Schedule your appointment today and experience personalized primary care that puts your health first.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-medium transition-colors"
          >
            Schedule Your Appointment
          </Link>
        </div>
      </section>
    </main>
  )
}