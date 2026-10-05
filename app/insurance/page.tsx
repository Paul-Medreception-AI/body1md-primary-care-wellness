import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Insurance & Billing | Body1MD Primary Care & Wellness',
  description: 'Transparent pricing and billing information for primary care services. We verify your insurance benefits before your visit and welcome self-pay patients with upfront estimates.',
  alternates: { canonical: '/insurance' },
  openGraph: {
    title: 'Insurance & Billing | Body1MD Primary Care & Wellness',
    description: 'Transparent pricing and billing information for primary care services. We verify your insurance benefits before your visit and welcome self-pay patients with upfront estimates.',
    url: 'https://body1md.com/insurance',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insurance & Billing | Body1MD Primary Care & Wellness',
    description: 'Transparent pricing and billing information for primary care services. We verify your insurance benefits before your visit and welcome self-pay patients with upfront estimates.',
    images: ['/og-image.png']
  }
}

export default function InsurancePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl font-light mb-6 animate-fade-up">
            Insurance & Billing
          </h1>
          <p className="text-xl text-white/90 animate-fade-up">
            Transparent pricing and billing information
          </p>
        </div>
      </section>

      {/* Accepted Insurance */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-16 animate-fade-up">
            Accepted Insurance Plans
          </h2>
          
          {/* 
            DO NOT ADD CARRIER NAMES HERE.
            The real accepted-carrier list must be supplied by the practice before any carrier is named on this page.
          */}
          
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-12 shadow-sm animate-fade-up">
            <div className="flex items-start gap-6 mb-8">
              <div className="flex-shrink-0">
                <svg className="w-12 h-12 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                  We Verify Your Coverage Before Your First Visit
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                  Coverage for primary care services varies significantly between insurance plans and individual policies. Rather than listing carriers, we verify your specific benefits before your first appointment to ensure you understand exactly what your plan covers.
                </p>
                <p className="text-[var(--color-muted)] leading-relaxed mb-6">
                  Our billing team will contact your insurance provider to confirm your coverage, copays, deductibles, and any prior authorization requirements. This way, there are no surprises when it comes to your care.
                </p>
                <div className="bg-[var(--color-cream)] rounded-lg p-6 mb-6">
                  <p className="text-[var(--color-ink)] font-medium mb-2">
                    To verify your insurance benefits:
                  </p>
                  <p className="text-[var(--color-muted)] mb-4">
                    Call us at <a href="tel:512-555-0100" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors">(512) 555-0100</a> with your insurance card information, and we'll handle the rest.
                  </p>
                </div>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  <strong className="text-[var(--color-ink)]">Self-pay patients are always welcome.</strong> We provide upfront cost estimates before any service so you can make informed decisions about your care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Billing Process */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-16 animate-fade-up">
            How Billing Works
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center animate-fade-up">
              <div className="flex justify-center mb-6">
                <svg className="w-16 h-16 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-[var(--color-accent)] font-semibold mb-2">Step 1</div>
              <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-3">
                Verify Coverage
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Before your first visit, we verify your insurance benefits and confirm what your plan covers.
              </p>
            </div>

            <div className="text-center animate-fade-up">
              <div className="flex justify-center mb-6">
                <svg className="w-16 h-16 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="text-[var(--color-accent)] font-semibold mb-2">Step 2</div>
              <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-3">
                Service Provided
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                You receive the primary care services you need. Any applicable copays are collected at the time of service.
              </p>
            </div>

            <div className="text-center animate-fade-up">
              <div className="flex justify-center mb-6">
                <svg className="w-16 h-16 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <div className="text-[var(--color-accent)] font-semibold mb-2">Step 3</div>
              <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-3">
                Claim Submitted
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                We submit a claim to your insurance company with all the necessary documentation and coding.
              </p>
            </div>

            <div className="text-center animate-fade-up">
              <div className="flex justify-center mb-6">
                <svg className="w-16 h-16 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>
              </div>
              <div className="text-[var(--color-accent)] font-semibold mb-2">Step 4</div>
              <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-3">
                You Pay Remainder
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                After insurance processes the claim, you receive an Explanation of Benefits and are billed for any remaining balance.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 animate-fade-up">
            <div className="bg-[var(--color-cream)] rounded-xl p-8">
              <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-3">
                Copays
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                A copay is a fixed amount you pay for a medical service, usually collected at the time of your visit. The amount varies by your insurance plan and the type of service.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8">
              <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-3">
                Deductibles
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                A deductible is the amount you must pay out-of-pocket before your insurance begins to cover services. Once met, insurance covers a larger portion of your care.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8">
              <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-3">
                Explanation of Benefits
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                An EOB is a statement from your insurance company explaining what they paid and what you owe. It's not a bill, but shows how your claim was processed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Self-Pay Options */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
            <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-6">
              Self-Pay Options
            </h3>
            
            <p className="text-[var(--color-muted)] leading-relaxed mb-8">
              We welcome patients who prefer to pay directly for their care without involving insurance. Self-pay patients often experience simpler billing, faster appointments, and more privacy.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="text-[var(--color-ink)] font-semibold mb-2">
                    Upfront Cost Estimates
                  </h4>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                    Before any service, we provide a clear, written estimate of costs. You'll know exactly what to expect with no surprise bills later.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="text-[var(--color-ink)] font-semibold mb-2">
                    Flexible Payment Plans
                  </h4>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                    For larger balances or ongoing treatment, we offer payment plans to spread costs over time. Our team works with you to create a schedule that fits your budget.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="text-[var(--color-ink)] font-semibold mb-2">
                    Good Faith Estimates
                  </h4>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                    Under the No Surprises Act, you have the right to receive a Good Faith Estimate of expected charges before receiving care. We provide this automatically to all self-pay patients.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="text-[var(--color-ink)] font-semibold mb-2">
                    Sliding Scale Availability
                  </h4>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                    We offer reduced rates for qualifying patients based on financial need. Contact our billing team to learn more about eligibility and application.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg border border-[var(--color-border)]">
              <p className="text-[var(--color-ink)] font-medium mb-2">
                The No Surprises Act protects you from unexpected bills
              </p>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Federal law requires healthcare providers to give uninsured and self-pay patients an estimate of expected charges before care is delivered. If your final bill is substantially higher than the estimate, you have the right to dispute the charges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-16 animate-fade-up">
            Billing Questions
          </h2>
          
          <div className="space-y-4 animate-fade-up">
            <details className="group bg-white rounded-xl overflow-hidden shadow-sm">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] flex items-center justify-between hover:bg-[var(--color-cream)] transition-colors">
                When will I receive my bill?
                <svg className="w-5 h-5 text-[var(--color-muted)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                If you have insurance, we typically wait for your insurance company to process the claim before sending a bill, which usually takes 2-4 weeks. Self-pay patients receive an invoice at the time of service or shortly after, depending on the services provided.
              </div>
            </details>

            <details className="group bg-white rounded-xl overflow-hidden shadow-sm">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] flex items-center justify-between hover:bg-[var(--color-cream)] transition-colors">
                What payment methods do you accept?
                <svg className="w-5 h-5 text-[var(--color-muted)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                We accept cash, checks, credit cards (Visa, Mastercard, American Express, Discover), debit cards, HSA cards, and FSA cards. Payment is expected at the time of service unless you have arranged a payment plan with our billing department.
              </div>
            </details>

            <details className="group bg-white rounded-xl overflow-hidden shadow-sm">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] flex items-center justify-between hover:bg-[var(--color-cream)] transition-colors">
                Can I use my HSA or FSA to pay?
                <svg className="w-5 h-5 text-[var(--color-muted)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes! Health Savings Accounts (HSA) and Flexible Spending Accounts (FSA) can be used to pay for eligible medical services. We accept HSA and FSA debit cards directly, or you can pay out-of-pocket and submit a receipt to your account administrator for reimbursement.
              </div>
            </details>

            <details className="group bg-white rounded-xl overflow-hidden shadow-sm">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] flex items-center justify-between hover:bg-[var(--color-cream)] transition-colors">
                What if my insurance denies my claim?
                <svg className="w-5 h-5 text-[var(--color-muted)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                If your insurance denies a claim, we'll work with you to understand why and help file an appeal if appropriate. Our billing specialists can often resolve denials by providing additional documentation or correcting coding errors. You'll always be notified before any balance becomes your responsibility.
              </div>
            </details>

            <details className="group bg-white rounded-xl overflow-hidden shadow-sm">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] flex items-center justify-between hover:bg-[var(--color-cream)] transition-colors">
                Do you offer financial assistance or charity care?
                <svg className="w-5 h-5 text-[var(--color-muted)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                We are committed to ensuring everyone has access to quality primary care. We offer sliding scale fees based on income, payment plans for larger balances, and financial assistance for those who qualify. Contact our billing team at (512) 555-0100 to discuss your situation confidentially.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl text-white mb-6 animate-fade-up">
            Questions About Billing or Insurance?
          </h2>
          <p className="text-xl text-white/90 mb-10 animate-fade-up">
            Our billing specialists are here to help you understand your coverage and payment options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
            <Link 
              href="/contact"
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg"
            >
              Contact Our Billing Team
            </Link>
            <Link 
              href="tel:512-555-0100"
              className="inline-block bg-white hover:bg-gray-50 text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg"
            >
              Call (512) 555-0100
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}