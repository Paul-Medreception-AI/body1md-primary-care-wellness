import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Annual Physical vs Sick Visits: Why Preventive Care Matters',
  description: 'Compare annual physical exams and sick visits. Learn when preventive care saves time, money, and improves long-term health outcomes in Austin, TX.',
  alternates: { canonical: '/compare/annual-physical-vs-sick-visits' },
  openGraph: {
    title: 'Annual Physical vs Sick Visits: Why Preventive Care Matters',
    description: 'Compare annual physical exams and sick visits. Learn when preventive care saves time, money, and improves long-term health outcomes in Austin, TX.',
    url: 'https://body1md.com/compare/annual-physical-vs-sick-visits',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Annual Physical vs Sick Visits: Why Preventive Care Matters',
    description: 'Compare annual physical exams and sick visits. Learn when preventive care saves time, money, and improves long-term health outcomes in Austin, TX.',
    images: ['/og-image.png'],
  },
}

export default function AnnualPhysicalVsSickVisitsPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center justify-center gap-2 text-sm mb-8 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span>›</span>
            <span>Resources</span>
            <span>›</span>
            <span>Comparison</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 animate-fade-up">
            Annual Physical vs Sick Visits: Why Preventive Care Matters
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto animate-fade-up">
            Understanding the critical difference between reactive sick visits and proactive annual physicals for your long-term health in Austin, TX
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Side-by-Side Comparison
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-up">
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white p-4 font-semibold">
              <div className="px-4 py-3">Factor</div>
              <div className="px-4 py-3">Annual Physical</div>
              <div className="px-4 py-3">Sick Visit</div>
            </div>
            
            <div className="grid grid-cols-3 p-4 border-b border-[var(--color-border)]">
              <div className="px-4 py-3 font-semibold text-[var(--color-ink)]">Primary Purpose</div>
              <div className="px-4 py-3 text-[var(--color-muted)]">Prevention & early detection</div>
              <div className="px-4 py-3 text-[var(--color-muted)]">Treat acute symptoms</div>
            </div>
            
            <div className="grid grid-cols-3 p-4 bg-[var(--color-cream)] border-b border-[var(--color-border)]">
              <div className="px-4 py-3 font-semibold text-[var(--color-ink)]">Timing</div>
              <div className="px-4 py-3 text-[var(--color-muted)]">Scheduled annually when healthy</div>
              <div className="px-4 py-3 text-[var(--color-muted)]">As-needed when ill</div>
            </div>
            
            <div className="grid grid-cols-3 p-4 border-b border-[var(--color-border)]">
              <div className="px-4 py-3 font-semibold text-[var(--color-ink)]">Scope</div>
              <div className="px-4 py-3 text-[var(--color-muted)]">Comprehensive health assessment</div>
              <div className="px-4 py-3 text-[var(--color-muted)]">Focused on presenting problem</div>
            </div>
            
            <div className="grid grid-cols-3 p-4 bg-[var(--color-cream)] border-b border-[var(--color-border)]">
              <div className="px-4 py-3 font-semibold text-[var(--color-ink)]">Screenings Included</div>
              <div className="px-4 py-3 text-[var(--color-muted)]">Blood work, vitals, cancer screenings, vaccines</div>
              <div className="px-4 py-3 text-[var(--color-muted)]">Only tests related to symptoms</div>
            </div>
            
            <div className="grid grid-cols-3 p-4 border-b border-[var(--color-border)]">
              <div className="px-4 py-3 font-semibold text-[var(--color-ink)]">Long-term Impact</div>
              <div className="px-4 py-3 text-[var(--color-muted)]">Catches issues early, reduces ER visits by 30%</div>
              <div className="px-4 py-3 text-[var(--color-muted)]">Addresses immediate concern only</div>
            </div>
            
            <div className="grid grid-cols-3 p-4 bg-[var(--color-cream)] border-b border-[var(--color-border)]">
              <div className="px-4 py-3 font-semibold text-[var(--color-ink)]">Cost Effectiveness</div>
              <div className="px-4 py-3 text-[var(--color-muted)]">Often fully covered by insurance; prevents expensive treatments</div>
              <div className="px-4 py-3 text-[var(--color-muted)]">Copay per visit; may require follow-ups</div>
            </div>
            
            <div className="grid grid-cols-3 p-4 border-b border-[var(--color-border)]">
              <div className="px-4 py-3 font-semibold text-[var(--color-ink)]">Time Commitment</div>
              <div className="px-4 py-3 text-[var(--color-muted)]">45-60 minutes once per year</div>
              <div className="px-4 py-3 text-[var(--color-muted)]">15-30 minutes per illness</div>
            </div>
            
            <div className="grid grid-cols-3 p-4 bg-[var(--color-cream)]">
              <div className="px-4 py-3 font-semibold text-[var(--color-ink)]">Best For</div>
              <div className="px-4 py-3 text-[var(--color-muted)]">Everyone, especially 35+ and those with family history</div>
              <div className="px-4 py-3 text-[var(--color-muted)]">Acute infections, injuries, sudden illness</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 animate-fade-up">
            <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mb-6">
              The Annual Physical: Your Health Insurance Policy
            </h2>
            <p className="text-lg text-[var(--color-muted)] mb-4">
              An annual physical exam is the cornerstone of preventive medicine. During this comprehensive visit, your primary care physician in Austin evaluates your overall health status through a systematic review of body systems, vital signs, laboratory tests, and age-appropriate cancer screenings. This isn't just a checkbox exercise—it's a strategic health investment.
            </p>
            <p className="text-lg text-[var(--color-muted)] mb-4">
              Studies show that patients who receive regular annual physicals detect conditions like diabetes, hypertension, and high cholesterol an average of 3-5 years earlier than those who only visit when sick. This early detection window is often the difference between simple lifestyle modifications and complex medication regimens or surgical interventions.
            </p>
            <p className="text-lg text-[var(--color-muted)]">
              Beyond screenings, the annual physical establishes a baseline for your health trajectory. Your physician tracks changes in weight, blood pressure, cholesterol, and other biomarkers over time, identifying subtle trends that might indicate emerging problems. This longitudinal perspective is impossible to achieve through episodic sick visits alone.
            </p>
          </div>

          <div className="mb-16 animate-fade-up">
            <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mb-6">
              Sick Visits: Necessary but Reactive
            </h2>
            <p className="text-lg text-[var(--color-muted)] mb-4">
              Sick visits serve an essential purpose: addressing acute medical concerns that require immediate attention. Whether you're dealing with the flu, a urinary tract infection, allergic reactions, or a minor injury, same-day sick visits provide focused, symptom-specific care. They're designed for efficiency—get in, diagnose the problem, receive treatment, and recover.
            </p>
            <p className="text-lg text-[var(--color-muted)] mb-4">
              However, sick visits by nature are reactive. You're already symptomatic, which means the condition has already developed. While your physician can treat the immediate problem effectively, there's limited time during a 15-minute sick visit to discuss nutrition, stress management, exercise habits, or screening schedules—the very factors that prevent future illness.
            </p>
            <p className="text-lg text-[var(--color-muted)]">
              Patients who rely exclusively on sick visits often miss the opportunity to address risk factors before they become diseases. A 2019 study published in the Journal of General Internal Medicine found that patients without regular physicals were 2.4 times more likely to be diagnosed with advanced-stage cancers compared to those with consistent preventive care relationships.
            </p>
          </div>

          <div className="animate-fade-up">
            <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mb-6">
              The Preventive Care Advantage
            </h2>
            <p className="text-lg text-[var(--color-muted)] mb-4">
              The true power of annual physicals lies in their ability to shift your health paradigm from reactive to proactive. When you establish a relationship with a primary care physician in Austin through regular annual visits, you're not just getting one exam per year—you're building a comprehensive health partnership.
            </p>
            <p className="text-lg text-[var(--color-muted)] mb-4">
              Your physician learns your health history, family risk factors, lifestyle patterns, and health goals. This context enables personalized recommendations that go far beyond generic advice. If you have a family history of heart disease, your annual physical becomes an opportunity to implement aggressive cholesterol management and cardiac risk reduction strategies before any symptoms appear.
            </p>
            <p className="text-lg text-[var(--color-muted)]">
              Economically, preventive care through annual physicals generates significant savings. The CDC estimates that every dollar spent on preventive services saves $5.60 in future medical costs. When you factor in lost productivity from illness, emergency room visits, and specialist consultations that could have been avoided, the return on investment for annual physicals becomes even more compelling.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mb-8 text-center">
              How to Decide What You Need
            </h2>
            
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-4 flex items-start gap-3">
                <svg className="w-7 h-7 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Schedule an Annual Physical If:
              </h3>
              <ul className="space-y-3 ml-10">
                <li className="flex items-start gap-3 text-[var(--color-muted)]">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>You haven't had a comprehensive exam in the past 12 months</span>
                </li>
                <li className="flex items-start gap-3 text-[var(--color-muted)]">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>You're over 35 or have family history of chronic disease (diabetes, heart disease, cancer)</span>
                </li>
                <li className="flex items-start gap-3 text-[var(--color-muted)]">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>You want to optimize your health, not just treat illness</span>
                </li>
                <li className="flex items-start gap-3 text-[var(--color-muted)]">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>You're due for age-appropriate cancer screenings (colonoscopy, mammogram, skin check)</span>
                </li>
                <li className="flex items-start gap-3 text-[var(--color-muted)]">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>You have risk factors like obesity, smoking, sedentary lifestyle, or high stress</span>
                </li>
                <li className="flex items-start gap-3 text-[var(--color-muted)]">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>You want to establish a relationship with a primary care physician in Austin before you need urgent care</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-4 flex items-start gap-3">
                <svg className="w-7 h-7 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Book a Sick Visit If:
              </h3>
              <ul className="space-y-3 ml-10">
                <li className="flex items-start gap-3 text-[var(--color-muted)]">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>You have acute symptoms requiring immediate attention (fever, infection, pain, injury)</span>
                </li>
                <li className="flex items-start gap-3 text-[var(--color-muted)]">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>You need same-day or next-day evaluation for a specific problem</span>
                </li>
                <li className="flex items-start gap-3 text-[var(--color-muted)]">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>You have a single, focused concern (rash, cold, sprain, urinary symptoms)</span>
                </li>
                <li className="flex items-start gap-3 text-[var(--color-muted)]">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>You've already had your annual physical and this is a new issue</span>
                </li>
              </ul>
            </div>

            <div className="mt-10 p-6 bg-white rounded-xl border-l-4 border-[var(--color-accent)]">
              <p className="text-[var(--color-ink)] font-semibold mb-2">
                The Best Approach: Both
              </p>
              <p className="text-[var(--color-muted)]">
                Optimal healthcare isn't choosing between preventive and acute care—it's utilizing both strategically. Schedule your annual physical to maintain baseline health and catch problems early, then use sick visits as needed for unexpected issues. This combination provides comprehensive coverage for both prevention and treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden animate-fade-up">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-lg">
                <span>Can I discuss acute symptoms during my annual physical?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                <p>Yes, but with limitations. If you have minor concerns, your physician can briefly address them during your physical. However, if your acute issue requires extensive evaluation, testing, or treatment, it's better to schedule a separate sick visit. This ensures your annual physical receives full attention for preventive care while giving acute problems the focused time they need. Many patients schedule a sick visit first to resolve symptoms, then book their annual physical when healthy.</p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden animate-fade-up">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-lg">
                <span>Does insurance cover both types of visits?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                <p>Under the Affordable Care Act, most insurance plans cover one annual preventive care visit per year at 100% with no copay or deductible—this includes your annual physical and age-appropriate screenings. Sick visits typically require a copay and count toward your deductible. However, if you discuss new symptoms during your preventive visit, your insurer may apply sick visit charges. At Body1MD, we help patients understand billing implications before their appointment to avoid surprises.</p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden animate-fade-up">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-lg">
                <span>How often should healthy adults have an annual physical?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                <p>The recommendation is every 12 months for adults, regardless of how healthy you feel. Even if you're young, active, and symptom-free, annual physicals establish health baselines and detect silent conditions like hypertension or prediabetes before they cause damage. After age 40, or if you have chronic conditions, your Austin primary care physician may recommend more frequent monitoring visits between annual physicals to track specific health markers.</p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden animate-fade-up">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-lg">
                <span>What's included in a comprehensive annual physical?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                <p>A thorough annual physical includes: detailed medical history review, family history assessment, vital signs (blood pressure, heart rate, temperature, respiratory rate), physical examination of all body systems, vision and hearing screening, comprehensive metabolic panel (blood work), lipid panel (cholesterol), diabetes screening, thyroid function tests, urinalysis, age-appropriate cancer screenings (colonoscopy referral, mammogram referral, skin check, prostate screening), immunization updates, and personalized lifestyle counseling. Your Austin physician tailors screenings based on your age, gender, and risk factors.</p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden animate-fade-up">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-lg">
                <span>What should I do if I need care between annual physicals?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                <p>Schedule a sick visit whenever acute symptoms arise—don't wait for your next annual physical. Early treatment prevents complications and improves outcomes. At Body1MD in Austin, we offer same-day and next-day sick visit appointments for established patients. If you're unsure whether your concern warrants immediate attention, call our office for guidance. We'd rather evaluate you promptly than have you delay care or resort to urgent care centers or emergency rooms.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center text-white animate-fade-up">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-6">
            Ready to Prioritize Prevention?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Schedule your annual physical with Body1MD Primary Care & Wellness in Austin and establish a proactive approach to your health
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:gap-3"
          >
            Discuss Your Options
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}