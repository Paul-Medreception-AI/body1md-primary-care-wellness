import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'New Patient Information | Body1MD Primary Care & Wellness',
  description: 'Getting started with Body1MD direct primary care in Los Ranchos de Albuquerque, NM: membership pricing, what to bring, and what to expect at your first visit.',
  alternates: { canonical: '/new-patients' },
  openGraph: {
    title: 'New Patient Information | Body1MD Primary Care & Wellness',
    description: 'Getting started with Body1MD direct primary care in Los Ranchos de Albuquerque, NM: membership pricing, what to bring, and what to expect at your first visit.',
    url: 'https://body1md.com/new-patients',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New Patient Information | Body1MD Primary Care & Wellness',
    description: 'Getting started with Body1MD direct primary care in Los Ranchos de Albuquerque, NM: membership pricing, what to bring, and what to expect at your first visit.',
    images: ['/og-image.png']
  }
}

export default function NewPatientsPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl font-light mb-6">New Patients</h1>
          <p className="text-xl text-white/90">Everything you need to know before your first visit</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] pt-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/doctor-patient-consult.jpg"
              alt="A physician talking with an older patient during an unhurried office visit"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-16">Getting Started</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up">
              <div className="font-cormorant text-6xl font-light text-[var(--color-accent)] mb-4">01</div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Reach Out</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Call <a href={SITE.phoneHref} className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors">{SITE.phone}</a> or send a message through our <Link href="/contact" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors">contact page</Link>. Ask anything you like about membership before you join. Online booking is coming soon.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up">
              <div className="font-cormorant text-6xl font-light text-[var(--color-accent)] mb-4">02</div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Join and Complete Paperwork</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Choose your membership and complete your new-patient paperwork. Finishing it before your first visit leaves more of your appointment for time with Dr. Hemmen.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up">
              <div className="font-cormorant text-6xl font-light text-[var(--color-accent)] mb-4">03</div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Your First Visit</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Your first visit is designed to last up to an hour. Dr. Hemmen starts with a comprehensive, head-to-toe look at your health so he understands your history, your concerns, and your goals.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up">
              <div className="font-cormorant text-6xl font-light text-[var(--color-accent)] mb-4">04</div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Your Personalized Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">From there, he makes sure your core primary care is up to date, including preventive screenings, cholesterol, and blood pressure, and builds a plan with you around your health goals.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-6">Membership Pricing</h2>
          <p className="text-center text-[var(--color-muted)] text-lg mb-12 max-w-3xl mx-auto">Body1MD is a Direct Primary Care practice. It does not bill insurance. You pay the practice directly through a simple monthly membership.</p>
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-[var(--color-cream)] rounded-2xl p-10 text-center animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">Under 50</h3>
              <p className="font-cormorant text-6xl font-light text-[var(--color-primary)] mb-2">$100</p>
              <p className="text-[var(--color-muted)]">per month</p>
            </div>
            <div className="bg-[var(--color-cream)] rounded-2xl p-10 text-center animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">Age 50+</h3>
              <p className="font-cormorant text-6xl font-light text-[var(--color-primary)] mb-2">$150</p>
              <p className="text-[var(--color-muted)]">per month</p>
            </div>
          </div>
          <ul className="grid sm:grid-cols-3 gap-4 mb-10 text-center">
            <li className="rounded-xl border border-[var(--color-border)] p-4 font-semibold text-[var(--color-ink)]">Month-to-month</li>
            <li className="rounded-xl border border-[var(--color-border)] p-4 font-semibold text-[var(--color-ink)]">No annual contract</li>
            <li className="rounded-xl border border-[var(--color-border)] p-4 font-semibold text-[var(--color-ink)]">No annual concierge retainer</li>
          </ul>
          <div className="bg-[var(--color-light)] rounded-2xl p-8 md:p-10 animate-fade-up">
            <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-4">Join the Founding 50</h3>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">Founding-member pricing is available to those who join by December 31, 2026, or before all 50 founder memberships are taken. Your founding pricing is protected for as long as your membership stays active.</p>
            <p className="text-[var(--color-muted)] leading-relaxed">Optional Wellness and Performance services are separately contracted and priced. As general guidance, most people should keep health insurance, or a high-deductible plan, for hospital, specialist, and emergency care. <Link href="/insurance" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors">Learn how membership and insurance fit together.</Link></p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-16">What to Bring</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4 animate-fade-up">
              <div className="flex-shrink-0 mt-1">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-[var(--color-ink)] mb-2">Photo ID and Insurance Card</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">Bring a valid photo ID. If you carry health insurance, bring that card too. Body1MD does not bill insurance, but your plan still matters for care outside the office, such as hospital, specialist, and emergency care.</p>
              </div>
            </div>
            <div className="flex gap-4 animate-fade-up">
              <div className="flex-shrink-0 mt-1">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-[var(--color-ink)] mb-2">Complete Medication List</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">List all prescription medications, over-the-counter drugs, vitamins, and supplements you take, including dosages and frequency.</p>
              </div>
            </div>
            <div className="flex gap-4 animate-fade-up">
              <div className="flex-shrink-0 mt-1">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-[var(--color-ink)] mb-2">Prior Medical Records</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">If available, bring recent lab results, imaging reports, hospital discharge summaries, or relevant records from previous healthcare providers.</p>
              </div>
            </div>
            <div className="flex gap-4 animate-fade-up">
              <div className="flex-shrink-0 mt-1">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-[var(--color-ink)] mb-2">Emergency Contact Information</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">Name and phone number of someone we can contact in case of an emergency. This ensures we can reach your loved ones if needed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mb-6">Patient Forms</h2>
            <p className="text-[var(--color-muted)] text-lg mb-8">Call the office and we will let you know how to complete your new-patient paperwork before your first visit. It generally covers:</p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-[var(--color-ink)] mb-1">Patient Registration and Medical History</h3>
                  <p className="text-[var(--color-muted)]">Your personal information, medical history, family history, and current health concerns.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-[var(--color-ink)] mb-1">Consent for Treatment</h3>
                  <p className="text-[var(--color-muted)]">Authorization for medical treatment and acknowledgment of practice policies.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-[var(--color-ink)] mb-1">HIPAA Privacy Notice</h3>
                  <p className="text-[var(--color-muted)]">Notice of privacy practices and your rights regarding your protected health information under federal law.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-[var(--color-ink)] mb-1">Direct Primary Care Membership Agreement</h3>
                  <p className="text-[var(--color-muted)]">The terms of your month-to-month membership, including your monthly fee.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-6">Staying in Touch Between Visits</h2>
          <p className="text-center text-[var(--color-muted)] text-lg mb-16 max-w-3xl mx-auto">Membership means you are not on your own between appointments.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <div className="mb-4">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Direct Access</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Members have direct access to Dr. Hemmen by phone and text, so a question about a symptom, a medication, or a result can go straight to your physician.</p>
            </div>
            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <div className="mb-4">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Available Most of the Year</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Health questions do not keep office hours. Dr. Hemmen is available to members 24/7 most of the year.</p>
            </div>
            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <div className="mb-4">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Seen When You Need It</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">When something needs a closer look, same- or next-day appointments are available in most cases. Dr. Hemmen will tell you when to come in and when a virtual check-in is appropriate.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-16">Appointment Courtesies</h2>
          <div className="space-y-8">
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Rescheduling</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">Schedules change. If you need to cancel or reschedule, please call {SITE.phone} as early as you can so that time can go to another patient who needs care.</p>
                </div>
              </div>
            </div>
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Running Late</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">If you are running late, call the office and let us know. Visits are designed to last up to an hour, and arriving on time helps you get the most from that time.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8">Join Body1MD&apos;s Founding 50 and get direct access to an experienced internal medicine physician, without a large annual concierge fee.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={SITE.phoneHref} className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-lg transition-colors">
              Call {SITE.phone}
            </a>
            <Link href="/contact" className="inline-block bg-white hover:bg-white/90 text-[var(--color-primary)] font-semibold px-8 py-4 rounded-lg transition-colors">
              Send Us a Message
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
