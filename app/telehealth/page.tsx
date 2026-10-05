import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Telehealth Services | Body1MD Primary Care & Wellness',
  description: 'Access your primary care physician from anywhere with convenient telehealth appointments. Get prescriptions, follow-up care, and medical advice through secure virtual visits.',
  alternates: { canonical: '/telehealth' },
  openGraph: {
    title: 'Telehealth Services | Body1MD Primary Care & Wellness',
    description: 'Access your primary care physician from anywhere with convenient telehealth appointments. Get prescriptions, follow-up care, and medical advice through secure virtual visits.',
    url: 'https://body1md.com/telehealth',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Telehealth Services | Body1MD Primary Care & Wellness',
    description: 'Access your primary care physician from anywhere with convenient telehealth appointments. Get prescriptions, follow-up care, and medical advice through secure virtual visits.',
    images: ['/og-image.png']
  }
}

export default function TelehealthPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6">
            Telehealth Services
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
            Access your primary care physician from anywhere with convenient virtual appointments. Get the care you need without leaving your home or office.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-primary)] mb-4">
              How Telehealth Works
            </h2>
            <p className="text-lg text-[var(--color-muted)] max-w-3xl mx-auto">
              Simple, secure virtual visits with your primary care physician
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-2xl p-8 shadow-sm animate-fade-up">
              <div className="w-16 h-16 rounded-full bg-[var(--color-light)] flex items-center justify-center mb-6">
                <span className="font-cormorant text-3xl font-semibold text-[var(--color-primary)]">01</span>
              </div>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-4">
                Schedule Your Visit
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Contact us to schedule a telehealth appointment at a time that works for you. We'll send you secure video link instructions.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm animate-fade-up transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-[var(--color-light)] flex items-center justify-center mb-6">
                <span className="font-cormorant text-3xl font-semibold text-[var(--color-primary)]">02</span>
              </div>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-4">
                Connect With Your Doctor
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                At your appointment time, click the secure video link from any device. Your doctor will join you for a private, face-to-face consultation.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm animate-fade-up transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-[var(--color-light)] flex items-center justify-center mb-6">
                <span className="font-cormorant text-3xl font-semibold text-[var(--color-primary)]">03</span>
              </div>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-4">
                Get Care & Follow-Up
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Receive medical advice, prescriptions, and follow-up instructions. Schedule any needed in-person visits or lab work seamlessly.
              </p>
            </div>
          </div>

          {/* What's Available */}
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm animate-fade-up">
              <div className="flex items-start mb-6">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0 mr-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-4">
                    Available via Telehealth
                  </h3>
                  <ul className="space-y-3 text-[var(--color-muted)]">
                    <li className="flex items-start">
                      <span className="text-[var(--color-accent)] mr-2">•</span>
                      <span>Follow-up visits for chronic conditions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--color-accent)] mr-2">•</span>
                      <span>Medication refills and adjustments</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--color-accent)] mr-2">•</span>
                      <span>Acute illness consultations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--color-accent)] mr-2">•</span>
                      <span>Lab and test result reviews</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--color-accent)] mr-2">•</span>
                      <span>Wellness counseling and lifestyle guidance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--color-accent)] mr-2">•</span>
                      <span>Prescription management</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm animate-fade-up">
              <div className="flex items-start mb-6">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0 mr-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
                <div>
                  <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-4">
                    Requires In-Person Visit
                  </h3>
                  <ul className="space-y-3 text-[var(--color-muted)]">
                    <li className="flex items-start">
                      <span className="text-[var(--color-accent)] mr-2">•</span>
                      <span>Annual comprehensive physical examinations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--color-accent)] mr-2">•</span>
                      <span>New patient initial consultations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--color-accent)] mr-2">•</span>
                      <span>In-office procedures and testing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--color-accent)] mr-2">•</span>
                      <span>Laboratory specimen collection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--color-accent)] mr-2">•</span>
                      <span>Physical examinations requiring hands-on assessment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--color-accent)] mr-2">•</span>
                      <span>Diagnostic procedures</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-primary)] mb-4">
              Benefits of Telehealth
            </h2>
            <p className="text-lg text-[var(--color-muted)] max-w-3xl mx-auto">
              Convenient, high-quality care that fits your busy lifestyle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up transition-all duration-300 hover:shadow-lg">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-[var(--color-accent)] mb-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Save Time
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                No commute, no parking, no waiting room. Connect from wherever you are and get back to your day quickly.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up transition-all duration-300 hover:shadow-lg">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-[var(--color-accent)] mb-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Care From Home
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Receive quality medical care from the comfort and privacy of your own home or office.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up transition-all duration-300 hover:shadow-lg">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-[var(--color-accent)] mb-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Works on Any Device
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Connect from your smartphone, tablet, or computer with a simple, easy-to-use interface.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up transition-all duration-300 hover:shadow-lg">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-[var(--color-accent)] mb-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Secure & Private
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                HIPAA-compliant video platform ensures your health information stays completely confidential and protected.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up transition-all duration-300 hover:shadow-lg">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-[var(--color-accent)] mb-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Your Regular Doctor
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                See your own primary care physician who knows your complete medical history and health goals.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up transition-all duration-300 hover:shadow-lg">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-[var(--color-accent)] mb-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Full Medical Care
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Receive prescriptions, referrals, and complete medical documentation just like an in-office visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Need */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
            <div className="text-center mb-12">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-accent)] mx-auto mb-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <h2 className="font-cormorant text-4xl font-light text-[var(--color-primary)] mb-4">
                What You Need for Your Visit
              </h2>
              <p className="text-lg text-[var(--color-muted)]">
                Simple requirements for a smooth telehealth experience
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mr-4 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-[var(--color-ink)] mb-2">Device with Camera & Microphone</h3>
                  <p className="text-[var(--color-muted)]">
                    Smartphone, tablet, or computer with working camera and microphone for video communication.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mr-4 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-[var(--color-ink)] mb-2">Reliable Internet Connection</h3>
                  <p className="text-[var(--color-muted)]">
                    Stable broadband or mobile data connection for clear video quality. Wi-Fi or 4G/5G recommended.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mr-4 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-[var(--color-ink)] mb-2">Private, Quiet Space</h3>
                  <p className="text-[var(--color-muted)]">
                    Find a confidential location where you can speak freely without interruptions or distractions.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mr-4 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-[var(--color-ink)] mb-2">Good Lighting</h3>
                  <p className="text-[var(--color-muted)]">
                    Position yourself in a well-lit area so your doctor can see you clearly during the examination.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mr-4 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-[var(--color-ink)] mb-2">Updated Web Browser</h3>
                  <p className="text-[var(--color-muted)]">
                    Recent version of Chrome, Safari, Firefox, or Edge. Most modern browsers work seamlessly.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-10 border-t border-[var(--color-border)]">
              <p className="text-sm text-[var(--color-muted)] text-center">
                Need technical assistance? Contact our office before your appointment and we'll help you get set up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-white mb-6">
            Ready to Experience Convenient Care?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Schedule your telehealth appointment and connect with your physician from anywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-block bg-[var(--color-accent)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-accent-dark)] transition-all duration-300 hover:scale-105"
            >
              Schedule Your Consultation
            </Link>
            <Link 
              href="/services"
              className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}