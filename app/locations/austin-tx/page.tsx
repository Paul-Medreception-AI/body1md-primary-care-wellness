import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Primary Care Near Austin, TX | Body1MD Primary Care & Wellness',
  description: 'Serving Austin, TX with comprehensive primary care services. DPC membership, telehealth options, and personalized care for you and your family.',
  alternates: { canonical: '/locations/austin-tx' },
  openGraph: {
    title: 'Primary Care Near Austin, TX | Body1MD Primary Care & Wellness',
    description: 'Serving Austin, TX with comprehensive primary care services. DPC membership, telehealth options, and personalized care for you and your family.',
    url: 'https://body1md.com/locations/austin-tx',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Primary Care Near Austin, TX | Body1MD Primary Care & Wellness',
    description: 'Serving Austin, TX with comprehensive primary care services. DPC membership, telehealth options, and personalized care for you and your family.',
    images: ['/og-image.png'],
  },
}

export default function AustinLocationPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/locations" className="hover:underline">Locations</Link>
            <span className="mx-2">›</span>
            <span>Austin, TX</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 leading-tight">
            Primary Care Near Austin, TX
          </h1>
          <p className="text-xl mb-10 text-white/90 max-w-2xl">
            Serving patients from Austin and surrounding TX communities.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-medium px-8 py-4 rounded-lg transition-colors duration-200"
          >
            Schedule in Austin
          </Link>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-8 text-center">
            Serving the Austin Area
          </h2>
          <div className="space-y-6 text-lg text-[var(--color-ink)]/80 leading-relaxed mb-12">
            <p>
              Body1MD Primary Care & Wellness is proud to serve patients throughout Austin and the surrounding communities. Whether you're in downtown Austin, nearby neighborhoods, or commuting from Cedar Park, Round Rock, or Pflugerville, our practice offers convenient access to comprehensive primary care services designed around your needs.
            </p>
            <p>
              Patients choose us for our Direct Primary Care model that prioritizes time, accessibility, and personalized attention. Unlike traditional clinics with rushed appointments and long waits, we offer same-day or next-day visits, extended appointment times, and 24/7 access to your physician. For Austin residents unable to visit in person, we also provide secure telehealth consultations that bring quality care directly to your home or office.
            </p>
          </div>
          <div className="bg-[var(--color-light)] rounded-2xl h-64 flex items-center justify-center">
            <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-primary)]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Services Available to Austin Patients
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 animate-fade-up">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                Comprehensive Primary Care
              </h3>
              <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
                Annual physicals, chronic disease management, preventive care, and wellness visits for all ages.
              </p>
              <Link href="/services" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors">
                Learn More →
              </Link>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 animate-fade-up">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                Chronic Disease Management
              </h3>
              <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
                Expert management of diabetes, hypertension, heart disease, and other chronic conditions with personalized care plans.
              </p>
              <Link href="/services" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors">
                Learn More →
              </Link>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 animate-fade-up">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                Telehealth Consultations
              </h3>
              <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
                Convenient virtual visits from anywhere in Texas, perfect for follow-ups, medication management, and urgent concerns.
              </p>
              <Link href="/services" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
          <h2 className="font-cormorant text-3xl md:text-4xl text-[var(--color-ink)] mb-6 text-center">
            Can't Make the Drive? We Offer Telehealth
          </h2>
          <p className="text-lg text-[var(--color-ink)]/80 leading-relaxed mb-6">
            For Austin residents with busy schedules, limited transportation, or who simply prefer the convenience of care from home, Body1MD offers comprehensive telehealth services. Our secure virtual visits provide the same personalized attention and expert care as in-person appointments.
          </p>
          <p className="text-lg text-[var(--color-ink)]/80 leading-relaxed">
            Telehealth appointments are ideal for routine check-ins, medication management, lab result reviews, and many common health concerns. Our Direct Primary Care membership includes unlimited telehealth access with no additional visit fees, and most services are covered under your membership.
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
                How far is Body1MD from Austin?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We're conveniently located to serve the Austin metro area. Most patients find us easily accessible from downtown Austin and surrounding neighborhoods including Cedar Park, Round Rock, Pflugerville, and beyond. Contact us for specific directions from your location.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                What are the best directions from Austin?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Detailed driving directions are available on our contact page. We're accessible via major Austin-area highways and offer convenient parking. Call our office at your convenience and our team will provide turn-by-turn guidance from your specific starting point.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                Do you offer telehealth for Austin patients?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes! Telehealth is available to all Austin-area patients as part of our Direct Primary Care membership. Virtual visits are perfect for follow-ups, prescription refills, lab reviews, and many acute concerns. Our secure platform makes it easy to connect with your physician from home, work, or anywhere with internet access.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                Is parking available at your practice?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes, we provide convenient on-site parking for all patients. Our facility is fully accessible with wheelchair-friendly entrances and accommodations to ensure every patient can access the care they need comfortably and safely.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-6">
            Get Expert Care from Austin
          </h2>
          <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
            Join our Direct Primary Care practice and experience healthcare built around your needs—not insurance paperwork.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] hover:bg-[var(--color-cream)] font-medium px-10 py-4 rounded-lg transition-colors duration-200"
          >
            Schedule Your Visit
          </Link>
        </div>
      </section>
    </main>
  )
}