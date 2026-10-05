import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Primary Care Near Round Rock, TX | Body1MD Primary Care & Wellness',
  description: 'Serving patients from Round Rock, TX with expert primary care services. Convenient access to comprehensive care in Austin, plus telehealth options available.',
  alternates: { canonical: '/locations/round-rock-tx' },
  openGraph: {
    title: 'Primary Care Near Round Rock, TX | Body1MD Primary Care & Wellness',
    description: 'Serving patients from Round Rock, TX with expert primary care services. Convenient access to comprehensive care in Austin, plus telehealth options available.',
    url: 'https://body1md.com/locations/round-rock-tx',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Primary Care Near Round Rock, TX | Body1MD Primary Care & Wellness',
    description: 'Serving patients from Round Rock, TX with expert primary care services. Convenient access to comprehensive care in Austin, plus telehealth options available.',
    images: ['/og-image.png']
  }
}

export default function RoundRockTXPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="mb-8 text-sm flex items-center gap-2 text-white/80">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/locations" className="hover:text-white transition-colors">Locations</Link>
            <span>›</span>
            <span className="text-white">Round Rock, TX</span>
          </nav>
          
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 leading-tight">
            Primary Care Near Round Rock, TX
          </h1>
          
          <p className="text-xl mb-10 text-white/90 max-w-3xl leading-relaxed">
            Serving patients from Round Rock and surrounding TX communities.
          </p>
          
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-medium transition-all hover:scale-105"
          >
            Schedule in Round Rock
          </Link>
        </div>
      </section>

      {/* Serving Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-10 text-center">
            Serving the Round Rock Area
          </h2>
          
          <div className="space-y-6 text-lg text-[var(--color-ink)]/80 leading-relaxed mb-12">
            <p>
              Located just a short drive south in Austin, Body1MD Primary Care & Wellness welcomes patients from Round Rock and the surrounding communities. Our practice is conveniently accessible via I-35, making the commute straightforward for residents throughout Williamson County. Many Round Rock patients choose our practice for our personalized, unhurried approach to primary care that stands in contrast to rushed appointments and crowded waiting rooms often found in larger medical facilities.
            </p>
            
            <p>
              We understand that traveling to Austin isn't always convenient, which is why we offer comprehensive telehealth services for many primary care needs. Whether you prefer in-person visits at our Austin location or the convenience of virtual appointments from your Round Rock home, we're committed to providing the same high-quality, patient-centered care that sets Body1MD apart.
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-[var(--color-light)] rounded-2xl h-64 flex items-center justify-center">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto mb-4 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <p className="text-[var(--color-muted)] font-medium">Convenient Access from Round Rock, TX</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Services Available to Round Rock Patients
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Preventive Care & Wellness
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed mb-6">
                Comprehensive annual physicals, health screenings, and personalized wellness plans to keep you healthy and catch concerns early.
              </p>
              <Link href="/services/preventive-care" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors">
                Learn More →
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Chronic Disease Management
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed mb-6">
                Expert ongoing care for diabetes, hypertension, high cholesterol, and other chronic conditions with personalized treatment plans.
              </p>
              <Link href="/services/chronic-care" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors">
                Learn More →
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Acute Illness Care
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed mb-6">
                Prompt treatment for urgent concerns including infections, injuries, and sudden illness with same-day and next-day availability.
              </p>
              <Link href="/services/acute-care" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Telehealth Section */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-cormorant text-3xl md:text-4xl text-[var(--color-ink)] mb-6 text-center">
              Can't Make the Drive? We Offer Telehealth
            </h2>
            <div className="space-y-4 text-lg text-[var(--color-ink)]/80 leading-relaxed">
              <p>
                For Round Rock residents who prefer the convenience of care from home, Body1MD offers comprehensive telehealth services that bring expert primary care directly to you. Many routine appointments, follow-ups, medication management visits, and consultations can be conducted effectively via secure video visits.
              </p>
              <p>
                Our telehealth services are covered by most major insurance plans and provide the same personalized, unhurried attention you'd receive during an in-person visit. Whether you're managing a busy schedule, recovering from illness, or simply prefer virtual care, telehealth makes it easier than ever to maintain your health from Round Rock.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Common Questions from Round Rock Patients
          </h2>
          
          <div className="space-y-8">
            {/* FAQ 1 */}
            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                How far is Body1MD from Round Rock?
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                Our Austin practice is conveniently located approximately 20-25 minutes south of Round Rock via I-35. The drive is straightforward and many of our Round Rock patients find the commute well worth it for the personalized, comprehensive care they receive. For those who prefer not to travel, we also offer telehealth appointments.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                What are the best directions from Round Rock?
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                Most Round Rock patients find I-35 South to be the most direct route to our Austin location. We're easily accessible from major Round Rock neighborhoods including Stone Oak, Teravista, and Walsh Ranch. Detailed directions and parking information will be provided when you schedule your appointment, and our team is always happy to help with any questions about finding us.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Do you offer telehealth for Round Rock residents?
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                Yes! We offer comprehensive telehealth services for Round Rock patients. Many types of visits can be conducted virtually, including follow-up appointments, medication management, chronic condition monitoring, and consultations for new concerns. Telehealth visits are covered by most insurance plans and provide the same quality care as in-person appointments. We'll help you determine whether telehealth or an in-person visit is best for your specific needs.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Is parking available for Round Rock patients visiting the Austin office?
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                Yes, we provide convenient parking for all our patients at our Austin location. Our facility is designed with accessibility in mind, featuring easy parking access and a comfortable, welcoming environment. We strive to make every aspect of your visit as smooth and stress-free as possible, from the moment you arrive until you leave.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-6">
            Get Expert Care from Round Rock
          </h2>
          <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
            Whether you prefer in-person visits in Austin or the convenience of telehealth, we're here to provide the personalized primary care you deserve.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] hover:bg-white/90 px-10 py-4 rounded-lg font-semibold transition-all hover:scale-105"
          >
            Schedule Your Appointment
          </Link>
        </div>
      </section>
    </main>
  )
}