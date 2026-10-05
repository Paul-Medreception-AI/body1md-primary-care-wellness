import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Body1MD Primary Care & Wellness | Direct Primary Care in Austin, TX',
  description: 'Experience Direct Primary Care in Austin where you get same-day appointments, 24/7 access to your doctor, and unhurried visits. A simple monthly membership replaces copays, deductibles, and insurance hassles.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Body1MD Primary Care & Wellness | Direct Primary Care in Austin, TX',
    description: 'Experience Direct Primary Care in Austin where you get same-day appointments, 24/7 access to your doctor, and unhurried visits. A simple monthly membership replaces copays, deductibles, and insurance hassles.',
    url: 'https://body1md.com/',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Body1MD Primary Care & Wellness | Direct Primary Care in Austin, TX',
    description: 'Experience Direct Primary Care in Austin where you get same-day appointments, 24/7 access to your doctor, and unhurried visits. A simple monthly membership replaces copays, deductibles, and insurance hassles.',
    images: ['/og-image.png']
  }
}

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center text-white overflow-hidden">
        <Image
          src="/images/svg_xml_base64_PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwM.jpg"
          alt="Body1MD Primary Care & Wellness"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/85 to-primary/75" />
        <div className="relative max-w-5xl mx-auto px-6 text-center py-20">
          <h1 className="font-cormorant text-6xl sm:text-7xl font-light tracking-tight leading-tight">
            Concierge Medicine That Puts You First, Not Your Insurance
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mt-6 leading-relaxed">
            Experience Direct Primary Care where you get same-day appointments, 24/7 access to your doctor, and unhurried visits. A simple monthly membership replaces copays, deductibles, and insurance hassles.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
            <Link
              href="/contact"
              className="bg-white text-[var(--color-dark)] px-8 py-4 rounded-xl font-bold shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Schedule Your Consultation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all"
            >
              Learn About Membership
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-8 border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="flex items-center gap-3">
              <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-bold text-sm text-[var(--color-ink)]">Board-Certified Primary Care Physicians</span>
            </div>
            <div className="flex items-center gap-3">
              <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-bold text-sm text-[var(--color-ink)]">Same-Day Appointments Available</span>
            </div>
            <div className="flex items-center gap-3">
              <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-bold text-sm text-[var(--color-ink)]">24/7 Direct Access to Your Doctor</span>
            </div>
            <div className="flex items-center gap-3">
              <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-bold text-sm text-[var(--color-ink)]">Transparent Monthly Membership Pricing</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-5xl text-center text-[var(--color-ink)] mb-4">
            How We Can Help
          </h2>
          <p className="text-center text-[var(--color-muted)] mb-16 max-w-2xl mx-auto">
            Comprehensive primary care services designed to keep you healthy and address your health concerns with the time and attention you deserve.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-5">
                Annual Wellness Exams
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Comprehensive physical examinations with time to discuss your health goals and concerns. We focus on prevention, early detection, and personalized wellness strategies tailored to your unique needs.
              </p>
              <Link href="/services" className="inline-block text-[var(--color-primary)] font-semibold text-sm mt-6 hover:underline transition-all">
                Learn More →
              </Link>
            </div>

            <div className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-5">
                Chronic Disease Management
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Expert care for diabetes, hypertension, heart disease, and other ongoing conditions. Our continuous monitoring and personalized treatment plans help you stay healthy and avoid complications.
              </p>
              <Link href="/services" className="inline-block text-[var(--color-primary)] font-semibold text-sm mt-6 hover:underline transition-all">
                Learn More →
              </Link>
            </div>

            <div className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-5">
                Acute Illness Care
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Same-day treatment for sudden illnesses like infections, injuries, and urgent health concerns. Skip the urgent care wait and see your own doctor who knows your medical history.
              </p>
              <Link href="/services" className="inline-block text-[var(--color-primary)] font-semibold text-sm mt-6 hover:underline transition-all">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mb-6">
                Healthcare Built Around You, Not Insurance Companies
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed mb-6">
                Body1MD Primary Care & Wellness was founded on a simple belief: the doctor-patient relationship should be the foundation of healthcare, not an afterthought squeezed between insurance paperwork. Our Direct Primary Care model eliminates the middleman, allowing us to spend real time with you, listen to your concerns, and develop truly personalized care plans. We limit our patient panel size so you always get the attention you deserve.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mb-8">
                In a traditional primary care practice, doctors are pressured to see 25-30 patients per day, leaving just minutes for each appointment. At Body1MD, we take a different approach. Our membership-based model means we work for you, not insurance companies. You'll enjoy unhurried visits, same-day or next-day appointments when you're sick, and direct access to your physician via phone, text, or email. This is how primary care was meant to be.
              </p>
              <Link href="/team" className="inline-block text-[var(--color-primary)] font-semibold hover:underline transition-all">
                Meet Our Team →
              </Link>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-[var(--color-light)] rounded-2xl h-80 w-full flex items-center justify-center">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-20 h-20 stroke-[var(--color-primary)] opacity-40">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-16">
            Getting Started Is Simple
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="font-cormorant text-7xl text-[var(--color-primary)] opacity-60 mb-4">01</div>
              <h3 className="font-cormorant text-2xl mb-4">Choose Your Membership</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Select the membership plan that fits your needs with transparent monthly pricing. No hidden fees, no copays, no deductibles - just comprehensive primary care for one simple monthly cost.
              </p>
            </div>
            <div className="text-center">
              <div className="font-cormorant text-7xl text-[var(--color-primary)] opacity-60 mb-4">02</div>
              <h3 className="font-cormorant text-2xl mb-4">Meet Your Doctor</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Schedule your comprehensive initial consultation where we take time to understand your health history, goals, and concerns. This extended visit establishes the foundation for your personalized care plan.
              </p>
            </div>
            <div className="text-center">
              <div className="font-cormorant text-7xl text-[var(--color-primary)] opacity-60 mb-4">03</div>
              <h3 className="font-cormorant text-2xl mb-4">Experience Better Healthcare</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Enjoy same-day appointments, 24/7 direct access to your physician, and unhurried visits whenever you need care. Your doctor becomes your true healthcare partner, always available and never rushed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-5xl font-light mb-6">
            Primary Care Reimagined for Your Busy Life
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-white text-[var(--color-dark)] font-bold px-12 py-5 rounded-2xl shadow-2xl hover:-translate-y-1 transition-all text-lg"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </>
  )
}