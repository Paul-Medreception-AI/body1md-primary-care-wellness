import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Direct Primary Care vs Traditional Insurance | Body1MD Austin',
  description: 'Compare Direct Primary Care and traditional insurance models side-by-side. Discover which healthcare option saves you more money and delivers better access to care in Austin, TX.',
  alternates: { canonical: '/compare/direct-primary-care-vs-traditional-insurance' },
  openGraph: {
    title: 'Direct Primary Care vs Traditional Insurance | Body1MD Austin',
    description: 'Compare Direct Primary Care and traditional insurance models side-by-side. Discover which healthcare option saves you more money and delivers better access to care in Austin, TX.',
    url: 'https://body1md.com/compare/direct-primary-care-vs-traditional-insurance',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Direct Primary Care vs Traditional Insurance | Body1MD Austin',
    description: 'Compare Direct Primary Care and traditional insurance models side-by-side. Discover which healthcare option saves you more money and delivers better access to care in Austin, TX.',
    images: ['/og-image.png']
  }
}

export default function ComparePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/resources" className="hover:underline">Resources</Link>
            <span className="mx-2">›</span>
            <span>Comparison</span>
          </nav>
          <h1 className="font-cormorant text-5xl font-light leading-tight mb-6">
            Direct Primary Care vs Traditional Insurance: Which Model Saves You More?
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            A comprehensive comparison to help you make an informed decision about your healthcare coverage in Austin, TX
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-12">
            Side-by-Side Comparison
          </h2>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-up">
            {/* Header Row */}
            <div className="grid grid-cols-3 gap-px bg-[var(--color-border)]">
              <div className="bg-[var(--color-primary)] text-white p-6 font-semibold">
                Category
              </div>
              <div className="bg-[var(--color-primary)] text-white p-6 font-semibold">
                Direct Primary Care
              </div>
              <div className="bg-[var(--color-primary)] text-white p-6 font-semibold">
                Traditional Insurance
              </div>
            </div>

            {/* Monthly Cost */}
            <div className="grid grid-cols-3 gap-px bg-[var(--color-border)]">
              <div className="bg-white p-6 font-semibold text-[var(--color-ink)]">
                Monthly Cost
              </div>
              <div className="bg-[var(--color-cream)] p-6">
                $75–$150/month flat fee, no hidden costs
              </div>
              <div className="bg-white p-6">
                $400–$800/month premiums plus deductibles, copays, and coinsurance
              </div>
            </div>

            {/* Access to Care */}
            <div className="grid grid-cols-3 gap-px bg-[var(--color-border)]">
              <div className="bg-white p-6 font-semibold text-[var(--color-ink)]">
                Access to Care
              </div>
              <div className="bg-[var(--color-cream)] p-6">
                Same-day or next-day appointments, direct phone/text access to your doctor
              </div>
              <div className="bg-white p-6">
                2–4 week wait times, limited phone access, rushed 15-minute visits
              </div>
            </div>

            {/* Visit Duration */}
            <div className="grid grid-cols-3 gap-px bg-[var(--color-border)]">
              <div className="bg-white p-6 font-semibold text-[var(--color-ink)]">
                Visit Duration
              </div>
              <div className="bg-[var(--color-cream)] p-6">
                30–60 minute appointments with unhurried, personalized care
              </div>
              <div className="bg-white p-6">
                15-minute appointments, often feeling rushed
              </div>
            </div>

            {/* Annual Deductible */}
            <div className="grid grid-cols-3 gap-px bg-[var(--color-border)]">
              <div className="bg-white p-6 font-semibold text-[var(--color-ink)]">
                Annual Deductible
              </div>
              <div className="bg-[var(--color-cream)] p-6">
                $0 — all primary care included in monthly fee
              </div>
              <div className="bg-white p-6">
                $1,500–$8,000+ before insurance pays
              </div>
            </div>

            {/* Included Services */}
            <div className="grid grid-cols-3 gap-px bg-[var(--color-border)]">
              <div className="bg-white p-6 font-semibold text-[var(--color-ink)]">
                Included Services
              </div>
              <div className="bg-[var(--color-cream)] p-6">
                Unlimited visits, basic labs, minor procedures, care coordination — no extra fees
              </div>
              <div className="bg-white p-6">
                Copays for visits, labs, procedures; many services not covered until deductible is met
              </div>
            </div>

            {/* Administrative Burden */}
            <div className="grid grid-cols-3 gap-px bg-[var(--color-border)]">
              <div className="bg-white p-6 font-semibold text-[var(--color-ink)]">
                Administrative Burden
              </div>
              <div className="bg-[var(--color-cream)] p-6">
                Minimal — no claims, no billing hassles, transparent pricing
              </div>
              <div className="bg-white p-6">
                High — insurance claims, surprise bills, denied coverage, network restrictions
              </div>
            </div>

            {/* Best For */}
            <div className="grid grid-cols-3 gap-px bg-[var(--color-border)]">
              <div className="bg-white p-6 font-semibold text-[var(--color-ink)]">
                Best For
              </div>
              <div className="bg-[var(--color-cream)] p-6">
                People who value relationship-based care, need regular access, want predictable costs
              </div>
              <div className="bg-white p-6">
                People who rarely see a doctor and prefer traditional coverage structures
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive: Direct Primary Care */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16 animate-fade-up">
            <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mb-6">
              Understanding Direct Primary Care
            </h2>
            <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
              Direct Primary Care (DPC) is a membership-based healthcare model that eliminates insurance companies from the primary care relationship. Patients pay a flat monthly fee directly to their physician, typically ranging from $75 to $150 per month, and in return receive unlimited access to comprehensive primary care services with no additional copays, deductibles, or surprise bills.
            </p>
            <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
              This model allows physicians to maintain smaller patient panels — typically 400–600 patients instead of the 2,000+ in traditional practices — enabling longer appointment times, same-day or next-day access, and direct communication via phone, text, or email. Most DPC practices offer 30–60 minute appointments, basic lab work at wholesale prices, minor procedures, and care coordination all included in the monthly fee.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              Evidence shows DPC patients experience better health outcomes, higher satisfaction rates, and lower total healthcare costs. A study published in the Journal of the American Board of Family Medicine found that DPC patients had 35% fewer emergency room visits and 65% fewer hospitalizations compared to traditional insurance patients, largely due to better access to preventive care and early intervention.
            </p>
          </div>

          <div className="animate-fade-up">
            <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mb-6">
              Understanding Traditional Insurance
            </h2>
            <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
              Traditional health insurance operates on a fee-for-service model where patients pay monthly premiums — often $400 to $800 or more for individual coverage — plus additional costs including annual deductibles ($1,500–$8,000+), copays for each visit, and coinsurance for services. This model was designed primarily for catastrophic coverage and hospital care, not routine primary care needs.
            </p>
            <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
              In traditional insurance-based practices, physicians typically manage 2,000+ patients to remain financially viable, resulting in rushed 15-minute appointments, long wait times for scheduling (often 2–4 weeks), limited after-hours access, and a transactional rather than relationship-based approach to care. Administrative burden is high for both patients and physicians, with frequent billing disputes, denied claims, and network restrictions.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              While traditional insurance provides essential coverage for specialists, surgeries, and hospitalizations, many patients find that their high premiums and deductibles mean they're paying thousands per year while still facing barriers to accessing basic primary care. For healthy individuals who need preventive care and occasional sick visits, the total annual cost can exceed $10,000 with limited actual healthcare received.
            </p>
          </div>
        </div>
      </section>

      {/* How to Decide */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-12">
              How to Decide Which Model Is Right for You
            </h2>

            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6 flex items-center gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Choose Direct Primary Care if you:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Value a personal, ongoing relationship with your doctor and want unhurried appointments</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Need regular primary care access and want same-day or next-day appointments</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Want predictable, transparent healthcare costs with no surprise bills</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Have chronic conditions requiring ongoing management and coordination</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Are frustrated with insurance hassles, billing confusion, and administrative burden</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Can pair DPC with a high-deductible health plan for catastrophic coverage</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6 flex items-center gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Choose Traditional Insurance if you:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Rarely need to see a doctor and prefer paying only when you use services</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Are comfortable with 15-minute appointments and longer wait times for scheduling</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Prefer working within an insurance network and handling claims processes</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Want all healthcare services bundled under one insurance plan</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Have employer-sponsored insurance with minimal out-of-pocket costs</span>
                </li>
              </ul>
            </div>

            <div className="mt-12 p-6 bg-white rounded-xl border-l-4 border-[var(--color-accent)]">
              <p className="text-[var(--color-muted)] leading-relaxed">
                <strong className="text-[var(--color-ink)]">Pro Tip:</strong> Many patients combine a DPC membership with a high-deductible health plan (HDHP) or health-sharing ministry for catastrophic coverage. This hybrid approach provides comprehensive primary care access through DPC while maintaining protection against major medical expenses — often at a lower total cost than traditional insurance alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Analysis */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-12">
            Real-World Cost Comparison
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg animate-fade-up">
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6">
                Direct Primary Care + HDHP
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center pb-2 border-b border-[var(--color-border)]">
                  <span className="text-[var(--color-muted)]">DPC Monthly Fee</span>
                  <span className="font-semibold text-[var(--color-ink)]">$100/mo</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-[var(--color-border)]">
                  <span className="text-[var(--color-muted)]">HDHP Premium</span>
                  <span className="font-semibold text-[var(--color-ink)]">$200/mo</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-[var(--color-border)]">
                  <span className="text-[var(--color-muted)]">Annual Deductible</span>
                  <span className="font-semibold text-[var(--color-ink)]">$3,000</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-[var(--color-border)]">
                  <span className="text-[var(--color-muted)]">Primary Care Copays</span>
                  <span className="font-semibold text-[var(--color-ink)]">$0</span>
                </div>
              </div>
              <div className="pt-4 border-t-2 border-[var(--color-accent)]">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-[var(--color-ink)]">Annual Total</span>
                  <span className="text-2xl font-bold text-[var(--color-accent)]">$6,600</span>
                </div>
                <p className="text-sm text-[var(--color-muted)] mt-2">
                  Includes unlimited primary care with no additional fees
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg animate-fade-up">
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6">
                Traditional Insurance Only
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center pb-2 border-b border-[var(--color-border)]">
                  <span className="text-[var(--color-muted)]">Monthly Premium</span>
                  <span className="font-semibold text-[var(--color-ink)]">$600/mo</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-[var(--color-border)]">
                  <span className="text-[var(--color-muted)]">Annual Deductible</span>
                  <span className="font-semibold text-[var(--color-ink)]">$5,000</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-[var(--color-border)]">
                  <span className="text-[var(--color-muted)]">Office Visit Copays (6×)</span>
                  <span className="font-semibold text-[var(--color-ink)]">$180</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-[var(--color-border)]">
                  <span className="text-[var(--color-muted)]">Lab Work Copays</span>
                  <span className="font-semibold text-[var(--color-ink)]">$150</span>
                </div>
              </div>
              <div className="pt-4 border-t-2 border-[var(--color-primary)]">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-[var(--color-ink)]">Annual Total</span>
                  <span className="text-2xl font-bold text-[var(--color-primary)]">$12,530</span>
                </div>
                <p className="text-sm text-[var(--color-muted)] mt-2">
                  Before deductible is met; additional costs for most services
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-[var(--color-accent)] text-white rounded-xl p-8 text-center animate-fade-up">
            <p className="text-3xl font-bold mb-2">Potential Annual Savings: $5,930</p>
            <p className="text-lg opacity-90">By switching to Direct Primary Care + catastrophic coverage</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] flex justify-between items-center hover:bg-[var(--color-light)] transition-colors">
                Can I use Direct Primary Care with my existing health insurance?
                <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes, absolutely. Many patients maintain their existing health insurance for specialist visits, hospitalizations, surgeries, and prescription coverage while using DPC for all their primary care needs. DPC is not insurance — it's a membership for direct access to your primary care physician. You can combine DPC with any insurance plan, HSA, or health-sharing ministry.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] flex justify-between items-center hover:bg-[var(--color-light)] transition-colors">
                Is Direct Primary Care covered by insurance or HSA/FSA funds?
                <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                DPC memberships are typically not covered by insurance since the model specifically avoids insurance billing. However, some employers offer DPC as a benefit. Many patients pay their DPC membership with HSA or FSA funds, though eligibility varies by plan — check with your HSA/FSA administrator. The out-of-pocket cost is often less than traditional insurance copays and deductibles combined.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] flex justify-between items-center hover:bg-[var(--color-light)] transition-colors">
                What happens if I need a specialist or hospitalization with DPC?
                <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Your DPC physician will coordinate referrals to specialists and help navigate hospital care, but specialist visits and hospitalizations are separate from your DPC membership. This is why many DPC patients maintain a high-deductible health plan or catastrophic coverage for major medical expenses. Your DPC doctor serves as your advocate and care coordinator throughout the process, often leading to better outcomes and lower costs through early intervention and proper referrals.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] flex justify-between items-center hover:bg-[var(--color-light)] transition-colors">
                How much money do most patients save by switching to DPC?
                <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Savings vary by individual situation, but many patients save $3,000–$6,000 annually by pairing DPC with a high-deductible health plan instead of traditional comprehensive insurance. Self-employed individuals and small business owners often see even greater savings. Beyond direct cost savings, DPC patients save time and reduce stress by avoiding insurance paperwork, billing disputes, and surprise medical bills. The predictable monthly fee makes healthcare budgeting simple.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] flex justify-between items-center hover:bg-[var(--color-light)] transition-colors">
                Can I cancel my DPC membership if it's not right for me?
                <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes, DPC memberships are typically month-to-month with no long-term contracts or cancellation fees. If you decide the model isn't right for you, you can cancel with 30 days' notice. Most practices offer a trial period or initial consultation to help you determine if DPC aligns with your healthcare needs and budget before committing. At Body1MD, we want every patient to feel confident in their choice.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="font-cormorant text-4xl mb-6">
            Ready to Discuss Your Healthcare Options?
          </h2>
          <p className="text-xl mb-8 text-white/90 leading-relaxed">
            Schedule a consultation with Dr. Body at Body1MD in Austin, TX to explore whether Direct Primary Care is the right choice for your health and budget.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-xl"
          >
            Schedule Your Consultation
          </Link>
          <p className="mt-6 text-sm text-white/80">
            Compare models in person • No-pressure discussion • Transparent pricing
          </p>
        </div>
      </section>
    </main>
  )
}