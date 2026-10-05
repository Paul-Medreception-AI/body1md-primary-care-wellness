import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Concierge Medicine vs Direct Primary Care | Body1MD Albuquerque',
  description: 'Comparing concierge medicine and direct primary care models. Understand pricing, benefits, and which personalized healthcare approach is right for you in Albuquerque, NM.',
  alternates: { canonical: '/compare/concierge-medicine-vs-direct-primary-care' },
  openGraph: {
    title: 'Concierge Medicine vs Direct Primary Care | Body1MD Albuquerque',
    description: 'Comparing concierge medicine and direct primary care models. Understand pricing, benefits, and which personalized healthcare approach is right for you in Albuquerque, NM.',
    url: 'https://body1md.com/compare/concierge-medicine-vs-direct-primary-care',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Concierge Medicine vs Direct Primary Care | Body1MD Albuquerque',
    description: 'Comparing concierge medicine and direct primary care models. Understand pricing, benefits, and which personalized healthcare approach is right for you in Albuquerque, NM.',
    images: ['/og-image.png']
  }
}

export default function ComparePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center justify-center gap-2 text-sm mb-8 text-[var(--color-light)] opacity-90">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white">Comparison</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light leading-tight mb-6">
            Concierge Medicine vs Direct Primary Care: Understanding the Differences
          </h1>
          <p className="text-xl text-[var(--color-light)] max-w-3xl mx-auto">
            Both models offer personalized, accessible healthcare, but they work differently. This guide helps you choose the right approach for your needs in Albuquerque, NM.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl mb-16">
            <Image
              src="/images/stock/compare-concierge-medicine-vs-direct-primary-care.jpg"
              alt="Physician talking with an older male patient across a desk in a medical office"
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
              priority
            />
          </div>
          <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] text-center mb-12">
            Side-by-Side Comparison
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-up">
            <div className="grid grid-cols-3 gap-px bg-[var(--color-border)]">
              <div className="bg-[var(--color-primary)] text-white p-6 font-semibold">
                Feature
              </div>
              <div className="bg-[var(--color-primary)] text-white p-6 font-semibold text-center">
                Concierge Medicine
              </div>
              <div className="bg-[var(--color-primary)] text-white p-6 font-semibold text-center">
                Direct Primary Care (DPC)
              </div>

              <div className="bg-white p-6 font-medium text-[var(--color-ink)]">
                Monthly Cost
              </div>
              <div className="bg-[var(--color-cream)] p-6 text-center">
                Typically $150 to $600+ per month
              </div>
              <div className="bg-[var(--color-cream)] p-6 text-center">
                Often $75 to $150 per month
              </div>

              <div className="bg-white p-6 font-medium text-[var(--color-ink)]">
                Insurance Required
              </div>
              <div className="bg-white p-6 text-center">
                Yes, typically
              </div>
              <div className="bg-white p-6 text-center">
                No
              </div>

              <div className="bg-white p-6 font-medium text-[var(--color-ink)]">
                Patient Panel Size
              </div>
              <div className="bg-[var(--color-cream)] p-6 text-center">
                Limited, often a few hundred patients
              </div>
              <div className="bg-[var(--color-cream)] p-6 text-center">
                Limited, often several hundred patients
              </div>

              <div className="bg-white p-6 font-medium text-[var(--color-ink)]">
                Same-Day Appointments
              </div>
              <div className="bg-white p-6 text-center">
                Usually available
              </div>
              <div className="bg-white p-6 text-center">
                Usually available
              </div>

              <div className="bg-white p-6 font-medium text-[var(--color-ink)]">
                Direct Doctor Access
              </div>
              <div className="bg-[var(--color-cream)] p-6 text-center">
                Phone, text, email
              </div>
              <div className="bg-[var(--color-cream)] p-6 text-center">
                Phone, text, email
              </div>

              <div className="bg-white p-6 font-medium text-[var(--color-ink)]">
                Annual Retainer Fee
              </div>
              <div className="bg-white p-6 text-center">
                Often charged
              </div>
              <div className="bg-white p-6 text-center">
                Rarely charged
              </div>

              <div className="bg-white p-6 font-medium text-[var(--color-ink)]">
                Services Included
              </div>
              <div className="bg-[var(--color-cream)] p-6 text-center text-sm">
                Enhanced amenities, extended visits
              </div>
              <div className="bg-[var(--color-cream)] p-6 text-center text-sm">
                Primary care visits and direct access; extras vary by practice
              </div>

              <div className="bg-white p-6 font-medium text-[var(--color-ink)]">
                Insurance Billing
              </div>
              <div className="bg-white p-6 text-center">
                Yes, billed to insurance
              </div>
              <div className="bg-white p-6 text-center">
                No insurance billing
              </div>

              <div className="bg-white p-6 font-medium text-[var(--color-ink)]">
                Best For
              </div>
              <div className="bg-[var(--color-cream)] p-6 text-center text-sm">
                High-income patients with comprehensive insurance
              </div>
              <div className="bg-[var(--color-cream)] p-6 text-center text-sm">
                Those seeking affordable, transparent care
              </div>
            </div>
          </div>
          <p className="mt-6 text-sm text-[var(--color-muted)] text-center max-w-3xl mx-auto">
            Ranges above are typical national figures, not Body1MD prices. Body1MD's membership is $100/month under age 50 and $150/month at age 50 and up, month-to-month, with no annual contract and no annual concierge retainer.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 animate-fade-up">
            <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] mb-6">
              Concierge Medicine: Premium Service with Insurance
            </h2>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-4">
              Concierge medicine practices charge a monthly or annual retainer fee on top of traditional insurance billing. In exchange, patients receive enhanced services: longer appointment times, same-day or next-day availability, 24/7 access to their physician via phone or text, and a more personalized healthcare experience. The physician maintains a smaller patient panel, typically a few hundred patients compared to 2,000 or more in traditional practices, allowing for more attentive, unhurried care.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-4">
              Concierge practices still bill insurance companies for covered services, so patients continue to use their existing health insurance for office visits, lab work, imaging, and specialist referrals. The retainer fee covers the enhanced accessibility and amenities. Think of it as a VIP membership that sits alongside your regular health plan.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              This model appeals to high-income professionals, executives, and families who want premium access and convenience while maintaining comprehensive insurance coverage. Monthly fees typically range from $150 to $600 or more per person, depending on location and service level. Some practices also charge a separate annual fee.
            </p>
          </div>

          <div className="mb-16 animate-fade-up">
            <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] mb-6">
              Direct Primary Care: Transparent, Insurance-Free Care
            </h2>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-4">
              Direct primary care (DPC) operates entirely outside the insurance system. Patients pay a flat monthly membership fee, often $75 to $150 per adult nationally, and in return receive primary care visits and direct access to their physician without insurance claims at the practice. There are no insurance copays or deductibles for the membership itself. Exactly what a membership includes varies by practice, so it is worth asking before you join.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-4">
              Because DPC practices don't bill insurance, they eliminate the administrative overhead and restrictions that drive up costs and limit time with patients. This allows physicians to keep panel sizes deliberately small and spend far longer with each patient than the short visits common in traditional settings. Patients can usually call or text their doctor directly.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              DPC is ideal for individuals and families seeking affordable, accessible primary care without navigating insurance red tape. Many DPC patients pair their membership with a high-deductible health plan or health-sharing ministry for catastrophic coverage. The DPC fee is not insurance and doesn't cover specialists, hospitalizations, or major procedures, but it handles routine primary care with transparency and simplicity.
            </p>
          </div>

          <div className="animate-fade-up">
            <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] mb-6">
              Where Body1MD Fits
            </h2>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              Body1MD is a direct primary care practice in Los Ranchos de Albuquerque led by Dr. Andrew Hemmen, a board-certified internal medicine physician. Membership is $100 per month under age 50 and $150 per month at age 50 and up, month-to-month, with no annual contract and no annual concierge retainer, and Body1MD does not bill insurance. Members get visits designed to last up to an hour, same- or next-day appointments in most cases, and direct phone and text access to Dr. Hemmen: concierge-level access through a straightforward monthly membership.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-cormorant text-3xl font-light text-[var(--color-ink)] mb-8 text-center">
              How to Decide Which Model is Right for You
            </h2>
            
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-4 flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Choose Concierge Medicine if you:
              </h3>
              <ul className="space-y-3 ml-9">
                <li className="flex items-start gap-3 text-[var(--color-muted)]">
                  <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Have comprehensive employer-sponsored or private insurance you want to keep using
                </li>
                <li className="flex items-start gap-3 text-[var(--color-muted)]">
                  <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Value premium amenities and concierge-level service alongside insurance coverage
                </li>
                <li className="flex items-start gap-3 text-[var(--color-muted)]">
                  <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Can afford a concierge retainer (often $150 to $600 or more per month) in addition to your insurance premiums
                </li>
                <li className="flex items-start gap-3 text-[var(--color-muted)]">
                  <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Want enhanced services like executive physicals, wellness coaching, or travel medicine
                </li>
                <li className="flex items-start gap-3 text-[var(--color-muted)]">
                  <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Prefer the familiar structure of insurance billing with added accessibility
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-4 flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Choose Direct Primary Care if you:
              </h3>
              <ul className="space-y-3 ml-9">
                <li className="flex items-start gap-3 text-[var(--color-muted)]">
                  <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Are self-employed, uninsured, or have a high-deductible health plan
                </li>
                <li className="flex items-start gap-3 text-[var(--color-muted)]">
                  <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Want simple, transparent pricing without copays, deductibles, or surprise bills
                </li>
                <li className="flex items-start gap-3 text-[var(--color-muted)]">
                  <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Prefer to avoid insurance altogether and pay directly for care
                </li>
                <li className="flex items-start gap-3 text-[var(--color-muted)]">
                  <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Value longer visits and direct doctor access at a predictable monthly cost
                </li>
                <li className="flex items-start gap-3 text-[var(--color-muted)]">
                  <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Want personalized, relationship-based care without the premium price tag
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            <details className="bg-white rounded-lg shadow-sm group animate-fade-up">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-[var(--color-ink)] list-none">
                <span>Can I use insurance with direct primary care?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                DPC practices do not bill insurance for their services. However, you can (and should) maintain a high-deductible health plan or catastrophic insurance to cover hospitalizations, surgeries, imaging, and specialists. Many DPC patients find this combination more affordable than traditional insurance with lower deductibles, since the DPC membership handles routine primary care outside the insurance system. Body1MD does not bill insurance, and many members keep a plan for hospital care, specialists and imaging.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group animate-fade-up">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-[var(--color-ink)] list-none">
                <span>Is concierge medicine covered by Medicare?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Concierge practices typically accept Medicare, but the monthly or annual retainer fee is not covered by Medicare and must be paid out-of-pocket. The practice will bill Medicare for covered services like office visits and procedures, just as a traditional practice would. Some concierge practices do not accept Medicare at all, so it's important to ask before joining.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group animate-fade-up">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-[var(--color-ink)] list-none">
                <span>What services are included in a DPC membership?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                It varies by practice. Most DPC memberships include primary care visits, prompt appointments, direct access to your physician by phone or text, chronic disease management, and care coordination, while what else is bundled (labs, procedures, medications) differs widely from one practice to the next. Services not typically included: specialist visits, hospital care, advanced imaging (MRI, CT), and surgeries. At Body1MD, the membership covers primary care with Dr. Hemmen; optional wellness and performance services are separately contracted and priced, and the office can explain how outside labs, imaging and prescriptions are handled before you join.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group animate-fade-up">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-[var(--color-ink)] list-none">
                <span>Which model is more affordable for a household?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Direct primary care is typically the less expensive of the two, because DPC fees are usually lower and there is no large annual retainer. Some DPC practices that also see children offer family pricing. Body1MD is an adult internal medicine practice, so each adult member pays $100 per month under age 50 or $150 per month at 50 and up; two members under 50, for example, would pay $200 per month together. Concierge practices typically charge a retainer per person, which can add up quickly for a household, on top of existing insurance premiums.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group animate-fade-up">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-[var(--color-ink)] list-none">
                <span>Can I switch from concierge medicine to DPC (or vice versa)?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes. Most concierge and DPC practices operate on a month-to-month or annual membership basis, and you can change practices if your needs or financial situation changes. Review your membership agreement for any notice requirements or cancellation terms. Body1MD's membership is month-to-month, with no annual contract. Your medical records can be transferred to your new practice. Many patients find that trying one model helps them understand which approach aligns better with their healthcare priorities and budget.
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-2xl mx-auto text-center animate-fade-up">
          <svg className="w-16 h-16 text-[var(--color-accent)] mx-auto mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
          </svg>
          <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] mb-4">
            Still Not Sure Which Model Fits Your Needs?
          </h2>
          <p className="text-lg text-[var(--color-muted)] mb-8 max-w-xl mx-auto">
            Let's discuss your healthcare goals, budget, and priorities. We'll help you understand which approach, concierge or direct primary care, aligns best with your situation in the Albuquerque area. Call (505) 645-5451.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-accent-dark)] transition-colors shadow-lg hover:shadow-xl"
          >
            Discuss Your Options
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}