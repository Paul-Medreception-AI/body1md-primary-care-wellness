import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Primary Care Near Cedar Park, TX | Body1MD Primary Care & Wellness',
  description: 'Serving Cedar Park, TX with comprehensive primary care services. Direct Primary Care model with same-day appointments, telehealth options, and personalized attention.',
  alternates: { canonical: '/locations/cedar-park-tx' },
  openGraph: {
    title: 'Primary Care Near Cedar Park, TX | Body1MD Primary Care & Wellness',
    description: 'Serving Cedar Park, TX with comprehensive primary care services. Direct Primary Care model with same-day appointments, telehealth options, and personalized attention.',
    url: 'https://body1md.com/locations/cedar-park-tx',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Primary Care Near Cedar Park, TX | Body1MD Primary Care & Wellness',
    description: 'Serving Cedar Park, TX with comprehensive primary care services. Direct Primary Care model with same-day appointments, telehealth options, and personalized attention.',
    images: ['/og-image.png']
  }
}

export default function CedarParkTXPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm mb-8 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span>›</span>
            <Link href="/locations" className="hover:underline">Locations</Link>
            <span>›</span>
            <span>Cedar Park, TX</span>
          </nav>
          
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 leading-tight">
            Primary Care Near Cedar Park, TX
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl font-light">
            Serving patients from Cedar Park and surrounding TX communities.
          </p>
          
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg text-lg font-medium transition-all hover:scale-105"
          >
            Schedule in Cedar Park
          </Link>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-8 text-center">
            Serving the Cedar Park Area
          </h2>
          
          <div className="space-y-6 text-lg text-[var(--color-ink)]/80 leading-relaxed mb-12">
            <p>
              Located in nearby Austin, Body1MD Primary Care & Wellness is easily accessible to Cedar Park residents—just a short 20-minute drive down US-183. We serve patients throughout the greater Austin area, including Cedar Park, Leander, Round Rock, and surrounding communities. Our Austin office provides convenient access with ample parking and flexible appointment times designed to fit your schedule.
            </p>
            
            <p>
              Cedar Park patients choose Body1MD for our Direct Primary Care model, which offers unlimited same-day and next-day appointments, direct access to your physician via text or phone, and unhurried visits that typically last 30-60 minutes. Unlike traditional practices in Cedar Park, we don't rush through appointments or make you wait weeks to be seen. We also offer telehealth appointments for Cedar Park residents who prefer virtual care, making expert primary care accessible without the drive.
            </p>
          </div>

          <div className="bg-[var(--color-light)] rounded-2xl h-64 flex items-center justify-center animate-fade-up">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto mb-4 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <p className="text-[var(--color-muted)] font-medium">Serving Cedar Park from Austin, TX</p>
              <p className="text-sm text-[var(--color-muted)] mt-2">Approximately 20 minutes via US-183</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-12 text-center">
            Services Available to Cedar Park Patients
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up hover:shadow-lg transition-all">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Annual Physicals & Wellness Exams
              </h3>
              <p className="text-[var(--color-ink)]/70 mb-4 leading-relaxed">
                Comprehensive preventive care with thorough health assessments, screenings, and personalized wellness plans tailored to your health goals.
              </p>
              <Link href="/services/annual-physical" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium inline-flex items-center gap-2 transition-colors">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up hover:shadow-lg transition-all">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Chronic Disease Management
              </h3>
              <p className="text-[var(--color-ink)]/70 mb-4 leading-relaxed">
                Ongoing care for diabetes, hypertension, high cholesterol, and other chronic conditions with regular monitoring and medication management.
              </p>
              <Link href="/services/chronic-disease-management" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium inline-flex items-center gap-2 transition-colors">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up hover:shadow-lg transition-all">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Urgent Care & Same-Day Visits
              </h3>
              <p className="text-[var(--color-ink)]/70 mb-4 leading-relaxed">
                Immediate care for acute illnesses, minor injuries, and urgent health concerns. Same-day appointments available for established patients.
              </p>
              <Link href="/services/urgent-care" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium inline-flex items-center gap-2 transition-colors">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 my-20">
        <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-[var(--color-ink)] mb-6 text-center">
            Can't Make the Drive? We Offer Telehealth
          </h2>
          
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-[var(--color-ink)]/80 leading-relaxed mb-6">
              Cedar Park residents can access our comprehensive primary care services through secure telehealth appointments. Whether you need a medication refill, chronic disease follow-up, or consultation for a new concern, virtual visits provide the same quality care from the comfort of your home. Our telehealth platform is HIPAA-compliant and easy to use—no complicated technology required.
            </p>
            
            <p className="text-lg text-[var(--color-ink)]/80 leading-relaxed">
              Most insurance plans cover telehealth visits at the same rate as in-person appointments. Our Direct Primary Care membership includes unlimited telehealth access with no copays or additional fees. Schedule a virtual visit that fits your schedule—early morning, evening, and weekend slots available.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                How far is Body1MD from Cedar Park?
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                Our Austin office is approximately 20 minutes from Cedar Park via US-183 South. We're conveniently located with easy highway access and ample free parking. Many Cedar Park residents find the short drive worthwhile for the personalized, unhurried care we provide—especially compared to long wait times at local clinics.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Do you accept Cedar Park patients for telehealth visits?
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                Yes! We welcome Cedar Park residents for both in-person and telehealth appointments. Telehealth is ideal for routine follow-ups, medication management, lab result reviews, and many acute concerns. Our physicians are licensed in Texas and can provide comprehensive virtual care to patients throughout the Cedar Park area.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                What are your directions from Cedar Park?
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                From Cedar Park, take US-183 South toward Austin. Our office is easily accessible from the highway with clear signage. Detailed directions will be provided when you schedule your appointment. We offer flexible scheduling including early morning and evening appointments to minimize disruption to your work day.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Is parking available for Cedar Park patients visiting your office?
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                Yes, we provide free, convenient parking directly adjacent to our office. Our facility is fully accessible with no stairs or barriers. We've designed our space to be welcoming and easy to navigate, so Cedar Park patients can focus on their health rather than logistics.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-6">
            Get Expert Care from Cedar Park
          </h2>
          <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
            Experience personalized primary care that puts you first. Schedule your appointment today.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-10 py-4 rounded-lg text-lg font-medium transition-all hover:scale-105"
          >
            Schedule Your Visit
          </Link>
        </div>
      </section>
    </main>
  )
}