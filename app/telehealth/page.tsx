import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SITE } from '@/lib/site'

// Route kept as /telehealth. The practice does not advertise video visits, so this page
// describes direct phone and text access to Dr. Hemmen instead (pending client confirmation).
export const metadata: Metadata = {
  title: 'Direct Access Between Visits | Body1MD Primary Care & Wellness',
  description: 'Body1MD members in Los Ranchos de Albuquerque, NM have direct access to Dr. Andrew Hemmen by phone and text between visits, plus same- or next-day appointments in most cases.',
  alternates: { canonical: '/telehealth' },
  openGraph: {
    title: 'Direct Access Between Visits | Body1MD Primary Care & Wellness',
    description: 'Body1MD members in Los Ranchos de Albuquerque, NM have direct access to Dr. Andrew Hemmen by phone and text between visits, plus same- or next-day appointments in most cases.',
    url: 'https://body1md.com/telehealth',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Direct Access Between Visits | Body1MD Primary Care & Wellness',
    description: 'Body1MD members in Los Ranchos de Albuquerque, NM have direct access to Dr. Andrew Hemmen by phone and text between visits, plus same- or next-day appointments in most cases.',
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
            Direct Access Between Visits
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
            Health questions do not wait for your next appointment. As a Body1MD member, you can reach Dr. Hemmen directly by phone and text.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] pt-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/stock/telehealth.jpg"
              alt="A man at home on a phone call, taking notes at his table"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-primary)] mb-4">
              How Direct Access Works
            </h2>
            <p className="text-lg text-[var(--color-muted)] max-w-3xl mx-auto">
              A physician who knows you, a phone call or text away
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-2xl p-8 shadow-sm animate-fade-up">
              <div className="w-16 h-16 rounded-full bg-[var(--color-light)] flex items-center justify-center mb-6">
                <span className="font-cormorant text-3xl font-semibold text-[var(--color-primary)]">01</span>
              </div>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-4">
                Reach Out
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Call or text Dr. Hemmen with your question or concern. As a member, you have direct access to your physician.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm animate-fade-up transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-[var(--color-light)] flex items-center justify-center mb-6">
                <span className="font-cormorant text-3xl font-semibold text-[var(--color-primary)]">02</span>
              </div>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-4">
                Talk It Through
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Dr. Hemmen already knows your history, so the conversation starts from what he knows about you. Some questions can be answered right there. Others need a closer look.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm animate-fade-up transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-[var(--color-light)] flex items-center justify-center mb-6">
                <span className="font-cormorant text-3xl font-semibold text-[var(--color-primary)]">03</span>
              </div>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-4">
                Get the Right Next Step
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Dr. Hemmen will advise whether a virtual check-in is appropriate or whether you should come in. When you need to be seen, same- or next-day appointments are available in most cases.
              </p>
            </div>
          </div>

          {/* When to reach out vs. come in */}
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm animate-fade-up">
              <div className="flex items-start mb-6">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0 mr-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-4">
                    Good Reasons to Reach Out
                  </h3>
                  <ul className="space-y-3 text-[var(--color-muted)]">
                    <li className="flex items-start">
                      <span className="text-[var(--color-accent)] mr-2">•</span>
                      <span>A new symptom you are not sure about</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--color-accent)] mr-2">•</span>
                      <span>Questions about a medication or a side effect</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--color-accent)] mr-2">•</span>
                      <span>Questions about lab or test results</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--color-accent)] mr-2">•</span>
                      <span>Checking in on a chronic condition</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--color-accent)] mr-2">•</span>
                      <span>Following up after a recent visit</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--color-accent)] mr-2">•</span>
                      <span>Deciding whether you need to be seen</span>
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
                    Best Handled in the Office
                  </h3>
                  <ul className="space-y-3 text-[var(--color-muted)]">
                    <li className="flex items-start">
                      <span className="text-[var(--color-accent)] mr-2">•</span>
                      <span>Your first visit as a new member</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--color-accent)] mr-2">•</span>
                      <span>Adult physicals and preventive exams</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--color-accent)] mr-2">•</span>
                      <span>Anything that needs a hands-on examination</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--color-accent)] mr-2">•</span>
                      <span>Screenings and procedures</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--color-accent)] mr-2">•</span>
                      <span>Reviewing imaging and results together on the exam room display</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto mt-12 rounded-2xl border border-[var(--color-border)] bg-white p-6 text-center animate-fade-up">
            <p className="text-[var(--color-ink)] font-semibold mb-1">Not for emergencies</p>
            <p className="text-[var(--color-muted)] text-sm leading-relaxed">
              For chest pain, trouble breathing, signs of a stroke, or any life-threatening emergency, call 911 or go to the nearest emergency room.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-primary)] mb-4">
              Why Direct Access Matters
            </h2>
            <p className="text-lg text-[var(--color-muted)] max-w-3xl mx-auto">
              Care that keeps going between appointments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up transition-all duration-300 hover:shadow-lg">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-[var(--color-accent)] mb-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Phone and Text
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Reach your physician the way you already communicate, with a call or a text.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up transition-all duration-300 hover:shadow-lg">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-[var(--color-accent)] mb-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Available Most of the Year
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Dr. Hemmen is available to members 24/7 most of the year.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up transition-all duration-300 hover:shadow-lg">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-[var(--color-accent)] mb-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Your Own Physician
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                You talk with the physician who knows your history and your goals, not someone meeting you for the first time.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up transition-all duration-300 hover:shadow-lg">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-[var(--color-accent)] mb-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Seen Quickly When Needed
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                If you need to come in, same- or next-day appointments are available in most cases.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up transition-all duration-300 hover:shadow-lg">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-[var(--color-accent)] mb-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Continuity of Care
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Questions between visits stay part of one ongoing relationship, so your plan stays connected from one appointment to the next.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up transition-all duration-300 hover:shadow-lg">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-[var(--color-accent)] mb-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Unhurried Visits
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                When you do come in, initial and follow-up visits are designed to last up to an hour.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
            <div className="text-center mb-12">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-accent)] mx-auto mb-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <h2 className="font-cormorant text-4xl font-light text-[var(--color-primary)] mb-4">
                Before You Call or Text
              </h2>
              <p className="text-lg text-[var(--color-muted)]">
                A few details help Dr. Hemmen give you a clear answer
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mr-4 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-[var(--color-ink)] mb-2">When It Started</h3>
                  <p className="text-[var(--color-muted)]">
                    Note when your symptoms began and whether they are getting better, worse, or staying the same.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mr-4 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-[var(--color-ink)] mb-2">Any Readings You Have</h3>
                  <p className="text-[var(--color-muted)]">
                    If you check your temperature, blood pressure, or blood sugar at home, have the recent numbers handy.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mr-4 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-[var(--color-ink)] mb-2">Your Medications</h3>
                  <p className="text-[var(--color-muted)]">
                    Keep your current medication list nearby, including anything new you have started.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mr-4 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-[var(--color-ink)] mb-2">Your Pharmacy</h3>
                  <p className="text-[var(--color-muted)]">
                    Know the name and location of the pharmacy you use.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-10 border-t border-[var(--color-border)]">
              <p className="text-sm text-[var(--color-muted)] text-center">
                Not a member yet? Call <a href={SITE.phoneHref} className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors">{SITE.phone}</a> to learn about membership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-white mb-6">
            Ready for a Doctor You Can Reach?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Become a member and get direct access to Dr. Hemmen. Call {SITE.phone} or send a message to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-[var(--color-accent)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-accent-dark)] transition-all duration-300 hover:scale-105"
            >
              Contact Us
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
