import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'New Patient Information | Body1MD Primary Care & Wellness',
  description: 'Everything you need to know before your first visit. Learn what to expect, what to bring, patient forms, telehealth options, and our policies at Body1MD in Austin, TX.',
  alternates: { canonical: '/new-patients' },
  openGraph: {
    title: 'New Patient Information | Body1MD Primary Care & Wellness',
    description: 'Everything you need to know before your first visit. Learn what to expect, what to bring, patient forms, telehealth options, and our policies at Body1MD in Austin, TX.',
    url: 'https://body1md.com/new-patients',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New Patient Information | Body1MD Primary Care & Wellness',
    description: 'Everything you need to know before your first visit. Learn what to expect, what to bring, patient forms, telehealth options, and our policies at Body1MD in Austin, TX.',
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

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-16">Your First Visit</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up">
              <div className="font-cormorant text-6xl font-light text-[var(--color-accent)] mb-4">01</div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Schedule</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Book your initial consultation online through our patient portal or call our office directly. We'll find a time that works with your busy schedule.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up">
              <div className="font-cormorant text-6xl font-light text-[var(--color-accent)] mb-4">02</div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Complete Paperwork</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Arrive 15 minutes early to complete your intake forms, or fill them out online before your appointment to save time at check-in.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up">
              <div className="font-cormorant text-6xl font-light text-[var(--color-accent)] mb-4">03</div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Initial Evaluation</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Your comprehensive first visit lasts 60-90 minutes. We'll review your complete health history, discuss your concerns, and perform a thorough assessment.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up">
              <div className="font-cormorant text-6xl font-light text-[var(--color-accent)] mb-4">04</div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Together we'll create a personalized care plan tailored to your health goals, lifestyle, and preferences. You're an active partner in your healthcare.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
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
                <h3 className="font-semibold text-lg text-[var(--color-ink)] mb-2">Photo ID & Insurance Card</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">Bring a valid photo ID and your insurance card (if applicable). We'll make copies for your file and verify your coverage details.</p>
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

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mb-6">Patient Forms</h2>
            <p className="text-[var(--color-muted)] text-lg mb-8">Forms are available at our office or can be completed at your first appointment. Completing them in advance helps us maximize your time with the doctor.</p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-[var(--color-ink)] mb-1">Patient Registration & Medical History</h3>
                  <p className="text-[var(--color-muted)]">Comprehensive intake form covering your personal information, medical history, family history, and current health concerns.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-[var(--color-ink)] mb-1">Consent for Treatment</h3>
                  <p className="text-[var(--color-muted)]">Authorization for medical treatment and procedures, including acknowledgment of our practice policies and patient responsibilities.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-[var(--color-ink)] mb-1">HIPAA Privacy Authorization</h3>
                  <p className="text-[var(--color-muted)]">Notice of our privacy practices and your rights regarding your protected health information under federal law.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-[var(--color-ink)] mb-1">Direct Primary Care Membership Agreement</h3>
                  <p className="text-[var(--color-muted)]">Details of your membership benefits, monthly fees, services included, and terms of the doctor-patient relationship.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-6">Telehealth Visits</h2>
          <p className="text-center text-[var(--color-muted)] text-lg mb-16 max-w-3xl mx-auto">Can't make it to the office? We offer secure video consultations that bring quality healthcare to wherever you are.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <div className="mb-4">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Device Requirements</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">You'll need a smartphone, tablet, or computer with a working camera and microphone. A reliable internet connection ensures clear audio and video quality.</p>
            </div>
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <div className="mb-4">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Privacy & Security</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Find a private, quiet space for your appointment. Our HIPAA-compliant video platform ensures your health information remains confidential and secure.</p>
            </div>
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <div className="mb-4">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">How It Works</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Schedule your telehealth visit just like an in-person appointment. You'll receive a secure link via email. Click to join at your appointment time—no downloads required.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-16">Our Policies</h2>
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Cancellation Policy</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">We understand that schedules change. Please provide at least 24 hours notice if you need to cancel or reschedule your appointment. This allows us to offer your time slot to another patient who needs care. Late cancellations may be subject to a fee.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Late Arrivals</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">We respect your time and ask that you respect ours and that of other patients. If you arrive more than 15 minutes late for your scheduled appointment, we may need to reschedule to avoid disrupting other patients' appointments. Please call us if you're running late.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">No-Show Policy</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">Missed appointments without advance notice prevent other patients from receiving care. After two no-shows, we may need to discuss whether our practice is the right fit for your needs. We're here to support your health, but we need your commitment to the partnership.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8">Join our practice and experience primary care that puts you first. We're accepting new patients and look forward to partnering with you on your health journey.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-lg transition-colors">
              Schedule Your Consultation
            </Link>
            <Link href="/contact" className="inline-block bg-white hover:bg-white/90 text-[var(--color-primary)] font-semibold px-8 py-4 rounded-lg transition-colors">
              Learn About Membership
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}