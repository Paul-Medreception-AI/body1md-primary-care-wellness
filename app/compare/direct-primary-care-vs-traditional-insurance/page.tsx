import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Direct Primary Care vs Traditional Insurance | Body1MD Albuquerque',
  description: 'Compare Direct Primary Care and traditional insurance side by side, and learn how to weigh the cost and access of each for your own situation in Albuquerque, NM.',
  alternates: { canonical: '/compare/direct-primary-care-vs-traditional-insurance' },
  openGraph: {
    title: 'Direct Primary Care vs Traditional Insurance | Body1MD Albuquerque',
    description: 'Compare Direct Primary Care and traditional insurance side by side, and learn how to weigh the cost and access of each for your own situation in Albuquerque, NM.',
    url: 'https://body1md.com/compare/direct-primary-care-vs-traditional-insurance',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Direct Primary Care vs Traditional Insurance | Body1MD Albuquerque',
    description: 'Compare Direct Primary Care and traditional insurance side by side, and learn how to weigh the cost and access of each for your own situation in Albuquerque, NM.',
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
            <span>Comparison</span>
          </nav>
          <h1 className="font-cormorant text-5xl font-light leading-tight mb-6">
            Direct Primary Care vs Traditional Insurance: Which Model Saves You More?
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            A comprehensive comparison to help you make an informed decision about your healthcare coverage in Albuquerque, NM
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl mb-16">
            <Image
              src="/images/stock/compare-direct-primary-care-vs-traditional-insurance.jpg"
              alt="Couple reviewing household paperwork together at their kitchen table"
              fill
              className="object-cover object-[50%_20%]"
              sizes="(max-width: 896px) 100vw, 896px"
              priority
            />
          </div>
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
                Flat monthly membership, often $75 to $150 nationally (Body1MD: $100/month under 50, $150/month age 50+)
              </div>
              <div className="bg-white p-6">
                Monthly premiums that vary widely by plan, plus deductibles, copays, and coinsurance
              </div>
            </div>

            {/* Access to Care */}
            <div className="grid grid-cols-3 gap-px bg-[var(--color-border)]">
              <div className="bg-white p-6 font-semibold text-[var(--color-ink)]">
                Access to Care
              </div>
              <div className="bg-[var(--color-cream)] p-6">
                Same- or next-day appointments in most cases, direct phone and text access to your doctor
              </div>
              <div className="bg-white p-6">
                Waits of several weeks are common for routine visits; phone access often goes through a front desk
              </div>
            </div>

            {/* Visit Duration */}
            <div className="grid grid-cols-3 gap-px bg-[var(--color-border)]">
              <div className="bg-white p-6 font-semibold text-[var(--color-ink)]">
                Visit Duration
              </div>
              <div className="bg-[var(--color-cream)] p-6">
                Longer, unhurried appointments (Body1MD visits are designed to last up to an hour)
              </div>
              <div className="bg-white p-6">
                Short appointments, often around 15 minutes, that can feel rushed
              </div>
            </div>

            {/* Annual Deductible */}
            <div className="grid grid-cols-3 gap-px bg-[var(--color-border)]">
              <div className="bg-white p-6 font-semibold text-[var(--color-ink)]">
                Annual Deductible
              </div>
              <div className="bg-[var(--color-cream)] p-6">
                None on the membership itself; you pay the flat monthly fee
              </div>
              <div className="bg-white p-6">
                Often $1,500 to $8,000 or more before insurance pays
              </div>
            </div>

            {/* Included Services */}
            <div className="grid grid-cols-3 gap-px bg-[var(--color-border)]">
              <div className="bg-white p-6 font-semibold text-[var(--color-ink)]">
                Included Services
              </div>
              <div className="bg-[var(--color-cream)] p-6">
                Primary care visits, direct access, and care coordination; what else is included varies by practice
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
                Minimal: no insurance claims at the practice, transparent membership pricing
              </div>
              <div className="bg-white p-6">
                Higher: insurance claims, surprise bills, denied coverage, network restrictions
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
              Direct Primary Care (DPC) is a membership-based healthcare model that eliminates insurance companies from the primary care relationship. Patients pay a flat monthly fee directly to the practice, often $75 to $150 per month nationally, and in return receive primary care with direct access to their physician, without insurance claims at the practice. At Body1MD, membership is $100 per month under age 50 and $150 per month at 50 and up, month-to-month, with no annual contract and no annual concierge retainer.
            </p>
            <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
              This model allows physicians to keep much smaller patient panels than the 2,000 or more patients common in traditional practices, enabling longer appointment times, prompt access, and direct communication by phone or text. Body1MD keeps a deliberately limited panel, so visits are designed to last up to an hour and same- or next-day appointments are available in most cases. What else a DPC membership includes varies by practice; Dr. Hemmen's office can explain how outside labs, imaging and prescriptions are handled before you join.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              Supporters of the model point to what more time and easier access make possible: problems raised earlier, chronic conditions followed more closely, and fewer trips to urgent care or the emergency room for issues a primary care physician could have handled. Research on DPC outcomes is still growing, so it makes sense to judge the model on what it offers you directly: time, access, and a predictable price.
            </p>
          </div>

          <div className="animate-fade-up">
            <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mb-6">
              Understanding Traditional Insurance
            </h2>
            <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
              Traditional health insurance operates on a fee-for-service model where patients pay monthly premiums, which vary widely by plan and by how much an employer contributes, plus additional costs including annual deductibles (often $1,500 to $8,000 or more), copays for each visit, and coinsurance for services. This model was designed primarily for catastrophic coverage and hospital care, not routine primary care needs.
            </p>
            <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
              In traditional insurance-based practices, physicians typically manage 2,000+ patients to remain financially viable, resulting in short appointments (often around 15 minutes), long waits for scheduling (often several weeks), limited after-hours access, and a transactional rather than relationship-based approach to care. Administrative burden is high for both patients and physicians, with frequent billing disputes, denied claims, and network restrictions.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              While traditional insurance provides essential coverage for specialists, surgeries, and hospitalizations, many patients find that their high premiums and deductibles mean they're paying thousands per year while still facing barriers to accessing basic primary care. For healthy individuals who need preventive care and occasional sick visits, premiums and out-of-pocket costs can add up to thousands of dollars a year while relatively little primary care is received.
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
                  <span className="text-[var(--color-muted)]">Need regular primary care access and want same- or next-day appointments</span>
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
                <strong className="text-[var(--color-ink)]">Pro Tip:</strong> Many patients combine a DPC membership with a high-deductible health plan (HDHP) or health-sharing ministry for catastrophic coverage. This hybrid approach provides primary care access through DPC while maintaining protection against major medical expenses. Some people find it costs less overall than a traditional plan alone; the worksheet below helps you check with your own numbers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Analysis */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-6">
            Run Your Own Numbers
          </h2>
          <p className="text-lg text-[var(--color-muted)] text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            We don't publish a typical savings figure, because the answer depends on your plan, your health, and how often you need care. Fill in each blank from your own plan documents and last year's bills, then compare the two totals.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg animate-fade-up">
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6">
                Body1MD Membership + Your Plan
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center gap-4 pb-2 border-b border-[var(--color-border)]">
                  <span className="text-[var(--color-muted)]">Body1MD membership, under 50</span>
                  <span className="font-semibold text-[var(--color-ink)] whitespace-nowrap">$1,200/yr ($100/mo)</span>
                </div>
                <div className="flex justify-between items-center gap-4 pb-2 border-b border-[var(--color-border)]">
                  <span className="text-[var(--color-muted)]">Body1MD membership, age 50+</span>
                  <span className="font-semibold text-[var(--color-ink)] whitespace-nowrap">$1,800/yr ($150/mo)</span>
                </div>
                <div className="flex justify-between items-center gap-4 pb-2 border-b border-[var(--color-border)]">
                  <span className="text-[var(--color-muted)]">Premium for any plan you keep (monthly × 12)</span>
                  <span className="font-semibold text-[var(--color-ink)] whitespace-nowrap">$ ______</span>
                </div>
                <div className="flex justify-between items-center gap-4 pb-2 border-b border-[var(--color-border)]">
                  <span className="text-[var(--color-muted)]">Deductible and coinsurance you expect to pay</span>
                  <span className="font-semibold text-[var(--color-ink)] whitespace-nowrap">$ ______</span>
                </div>
                <div className="flex justify-between items-center gap-4 pb-2 border-b border-[var(--color-border)]">
                  <span className="text-[var(--color-muted)]">Outside labs, imaging and prescriptions</span>
                  <span className="font-semibold text-[var(--color-ink)] whitespace-nowrap">$ ______</span>
                </div>
              </div>
              <div className="pt-4 border-t-2 border-[var(--color-accent)]">
                <div className="flex justify-between items-center gap-4">
                  <span className="text-lg font-semibold text-[var(--color-ink)]">Your Annual Total</span>
                  <span className="text-lg font-bold text-[var(--color-accent)]">Add the lines that apply</span>
                </div>
                <p className="text-sm text-[var(--color-muted)] mt-2">
                  Use the one membership line that fits your age. Month-to-month, no annual contract, and Body1MD does not bill insurance.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg animate-fade-up">
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6">
                Traditional Insurance Only
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center gap-4 pb-2 border-b border-[var(--color-border)]">
                  <span className="text-[var(--color-muted)]">Monthly premium × 12</span>
                  <span className="font-semibold text-[var(--color-ink)] whitespace-nowrap">$ ______</span>
                </div>
                <div className="flex justify-between items-center gap-4 pb-2 border-b border-[var(--color-border)]">
                  <span className="text-[var(--color-muted)]">Deductible you expect to reach</span>
                  <span className="font-semibold text-[var(--color-ink)] whitespace-nowrap">$ ______</span>
                </div>
                <div className="flex justify-between items-center gap-4 pb-2 border-b border-[var(--color-border)]">
                  <span className="text-[var(--color-muted)]">Office visit copays (visits × copay)</span>
                  <span className="font-semibold text-[var(--color-ink)] whitespace-nowrap">$ ______</span>
                </div>
                <div className="flex justify-between items-center gap-4 pb-2 border-b border-[var(--color-border)]">
                  <span className="text-[var(--color-muted)]">Lab and other copays or coinsurance</span>
                  <span className="font-semibold text-[var(--color-ink)] whitespace-nowrap">$ ______</span>
                </div>
              </div>
              <div className="pt-4 border-t-2 border-[var(--color-primary)]">
                <div className="flex justify-between items-center gap-4">
                  <span className="text-lg font-semibold text-[var(--color-ink)]">Your Annual Total</span>
                  <span className="text-lg font-bold text-[var(--color-primary)]">Add the lines above</span>
                </div>
                <p className="text-sm text-[var(--color-muted)] mt-2">
                  Your plan's summary of benefits lists the premium, deductible, and copays.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-[var(--color-accent)] text-white rounded-xl p-8 text-center animate-fade-up">
            <p className="text-3xl font-bold mb-2">Compare Your Two Totals</p>
            <p className="text-lg opacity-90">Every plan is different, so only your own numbers can answer this. Questions? Call (505) 645-5451. Dr. Hemmen's office can explain how outside labs, imaging and prescriptions are handled before you join.</p>
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
                Yes. Many DPC members keep their existing health insurance for specialist visits, hospitalizations, surgeries, imaging, and prescription coverage while using DPC for their primary care. DPC is not insurance; it's a membership for direct access to your primary care physician. Body1MD does not bill insurance, so your plan stays in place for the care it covers, and the membership sits alongside it.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] flex justify-between items-center hover:bg-[var(--color-light)] transition-colors">
                Is Direct Primary Care covered by insurance?
                <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                DPC memberships are typically not covered by insurance, since the model specifically avoids insurance billing. However, some employers offer DPC as a benefit. At Body1MD, members pay the practice directly: $100 per month under age 50 or $150 per month at 50 and up. If you hope to pay from a tax-advantaged health account, check eligibility with your plan administrator before you join.
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
                Your DPC physician will coordinate referrals to specialists and help navigate hospital care, but specialist visits and hospitalizations are separate from your DPC membership. This is why many DPC patients maintain a high-deductible health plan or catastrophic coverage for major medical expenses. Your DPC doctor serves as your advocate and care coordinator throughout the process, which can help you avoid duplicate tests and get to the right specialist sooner.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] flex justify-between items-center hover:bg-[var(--color-light)] transition-colors">
                How do I know whether DPC will save me money?
                <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                It depends on your plan, your health, and how often you need care, so there is no honest typical figure to quote. Use the worksheet above: add up what you pay now in premiums, deductibles, and copays, then compare it with the Body1MD membership ($1,200 a year under age 50, $1,800 a year at 50 and up) plus whatever coverage you keep. Beyond cost, many DPC members value spending less time on insurance paperwork and billing questions. The predictable monthly fee makes healthcare budgeting simpler.
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
                DPC memberships are commonly month-to-month. Body1MD's membership is month-to-month with no annual contract, and Founding 50 pricing is protected as long as your membership stays active. Ask the office about the details of starting or ending a membership before you join. At Body1MD, we want every patient to feel confident in their choice.
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
            Schedule a consultation with Dr. Hemmen at Body1MD in Los Ranchos de Albuquerque to explore whether Direct Primary Care is the right choice for your health and budget.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-xl"
          >
            Schedule Your Consultation
          </Link>
          <p className="mt-6 text-sm text-white/80">
            Month-to-month • No annual contract • No insurance billing
          </p>
        </div>
      </section>
    </main>
  )
}