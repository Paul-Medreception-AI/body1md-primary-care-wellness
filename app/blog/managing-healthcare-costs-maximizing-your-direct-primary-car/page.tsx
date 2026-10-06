import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Managing Healthcare Costs: Maximizing Your Direct Primary Care Membership',
  description: 'Learn how to get the most value from your Direct Primary Care membership with practical strategies to reduce healthcare costs while improving access to quality primary care in Albuquerque, NM.',
  alternates: { canonical: '/blog/managing-healthcare-costs-maximizing-your-direct-primary-car' },
  openGraph: {
    title: 'Managing Healthcare Costs: Maximizing Your Direct Primary Care Membership',
    description: 'Learn how to get the most value from your Direct Primary Care membership with practical strategies to reduce healthcare costs while improving access to quality primary care in Albuquerque, NM.',
    url: 'https://body1md.com/blog/managing-healthcare-costs-maximizing-your-direct-primary-car',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/images/blog/managing-healthcare-costs-maximizing-your-direct-primary-car.jpg', alt: 'Hand dropping a coin into a clear piggy bank beside dollar bills' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Managing Healthcare Costs: Maximizing Your Direct Primary Care Membership',
    description: 'Learn how to get the most value from your Direct Primary Care membership with practical strategies to reduce healthcare costs while improving access to quality primary care in Albuquerque, NM.',
    images: ['/images/blog/managing-healthcare-costs-maximizing-your-direct-primary-car.jpg']
  }
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-white/80 mb-6 text-center">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Managing Healthcare Costs: Maximizing Your Direct Primary Care Membership
          </h1>

          {/* Meta Information */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>October 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>7 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <span>Dr. Andrew Hemmen, MD</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-10">
        <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl">
          <Image src="/images/blog/managing-healthcare-costs-maximizing-your-direct-primary-car.jpg" alt="Hand dropping a coin into a clear piggy bank beside dollar bills" fill priority className="object-cover object-[center_80%]" sizes="(max-width: 896px) 100vw, 896px" />
        </div>
      </div>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            If you've ever opened a medical bill and felt your stomach drop, you're not alone. Healthcare costs in the United States continue to climb, leaving millions of Americans struggling to afford basic care. But what if there was a way to take control of your healthcare spending while actually improving your access to quality medical care? That's the promise of Direct Primary Care (DPC), and when you maximize your membership, the financial benefits can be transformative.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Direct Primary Care is revolutionizing how patients approach healthcare costs. By paying a simple monthly membership fee, you gain direct access to your primary care physician without the confusion of copays, deductibles, or surprise bills. But simply having a DPC membership isn't enough. Understanding how to fully utilize it is key to getting the most value for your investment.
          </p>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Understanding the True Cost of Traditional Healthcare
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Before diving into how to maximize your DPC membership, it's important to understand what you're moving away from. Traditional insurance-based healthcare comes with hidden costs that add up quickly. Between monthly premiums, high deductibles (often $3,000-$7,000 for individuals), copays for every visit, and coinsurance for procedures, the average American family spends over $12,000 annually on healthcare.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Even more frustrating is the time cost: waiting weeks for appointments, spending hours on hold with insurance companies, and navigating confusing billing statements. These indirect costs drain both your wallet and your peace of mind. DPC eliminates most of these pain points, but only if you actively engage with your membership.
          </p>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Use Your Membership for Preventive Care
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            One of the most powerful ways to maximize your DPC membership is to shift from reactive to preventive care. In traditional healthcare, many patients avoid routine checkups because of cost. With DPC, your membership covers your primary care relationship, making it easier to see your doctor regularly, before problems develop.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Preventive care is proven to reduce long-term healthcare costs dramatically. Regular screenings catch conditions like diabetes, high blood pressure, and high cholesterol early, when they're easiest and cheapest to manage. Studies show that every dollar spent on preventive care saves approximately $5.60 in treatment costs down the line.
          </p>

          <div className="bg-[var(--color-cream)] rounded-xl p-8 my-8">
            <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">Ways to Use Preventive Care:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Schedule annual wellness exams to establish health baselines</span>
              </li>
              <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Get recommended screenings based on your age and risk factors</span>
              </li>
              <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Discuss nutrition, exercise, and lifestyle modifications regularly</span>
              </li>
              <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Review medications to ensure they're still necessary and optimally dosed</span>
              </li>
              <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Address minor concerns before they become major medical issues</span>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Take Advantage of Direct Access and Communication
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Most DPC practices offer same-day or next-day appointments, extended visit times (30-60 minutes instead of the typical 7-minute rush), and direct communication with your physician via text, email, or phone. This level of access is included in your membership fee, yet many members underutilize it.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Think about how much money you could save by texting your doctor instead of going to urgent care for a minor issue. A typical urgent care visit costs $150-$200, while a quick phone consultation with your DPC provider is free. Over the course of a year, this difference alone can justify your entire membership cost.
          </p>

          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
              "When you can reach a physician who already knows your history, an evening question can often be answered before it turns into an urgent care or emergency room visit. That is where much of the value of a DPC membership shows up."
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Leverage In-Office Services and Wholesale Pricing
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Many DPC practices offer services in-office that would typically require separate appointments and facility fees elsewhere. These might include basic procedures, laboratory tests, minor surgical procedures, and diagnostic services, all available at wholesale or near-cost pricing.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            For example, common lab tests that cost $200-$500 through traditional channels might cost $10-$50 at your DPC practice. EKGs, joint injections, skin biopsies, and other procedures are similarly discounted. By using your DPC practice for these services instead of going through insurance, you avoid facility fees, administrative markups, and the hassle of dealing with claims.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Additionally, many DPC physicians have relationships with imaging centers, specialists, and hospitals that offer cash-pay discounts. Your doctor can help you navigate these options, often securing prices 40-60% lower than what insurance companies pay.
          </p>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Pair DPC with a Health Sharing Plan or High-Deductible Policy
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            DPC is not insurance. It's a membership for primary care services. For catastrophic coverage (major surgeries, hospitalizations, specialist care), many DPC members pair their membership with a health sharing plan or a high-deductible health plan (HDHP) with a low monthly premium.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            This combination creates powerful savings. Because your DPC membership covers most day-to-day healthcare needs, you rarely touch your insurance or sharing plan. This means you can comfortably choose a plan with a high deductible and low monthly cost. The money you save on premiums often more than covers your DPC membership fee.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            For example, a family might pay $2,000/month for traditional comprehensive insurance. By switching to a $600/month catastrophic plan plus a $200/month DPC membership for the whole family, they save $1,200 monthly, or $14,400 per year. Even if they hit their higher deductible once, they're still thousands ahead.
          </p>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Build a Long-Term Relationship with Your Provider
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Perhaps the most underrated aspect of maximizing your DPC membership is the continuity of care it enables. When you see the same physician consistently, they develop a deep understanding of your health history, family dynamics, lifestyle, and goals. This relationship is the foundation of truly personalized medicine.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Research shows that patients with a consistent primary care relationship have better health outcomes, fewer emergency room visits, and lower overall healthcare costs. Your doctor becomes a partner who knows when something is "off" even before test results come back, who can adjust treatments based on what has or hasn't worked before, and who coordinates all aspects of your care seamlessly.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            This relationship also pays financial dividends. A doctor who knows you well can often diagnose and treat conditions more efficiently, avoiding unnecessary testing and specialist referrals. They can advocate for you within the healthcare system, helping you avoid overtreatment and unnecessary procedures that insurance incentivizes but you don't actually need.
          </p>

          <div className="bg-[var(--color-cream)] rounded-xl p-8 my-8">
            <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">Maximizing Your Membership Investment:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Visit your doctor for preventive care, not just when you're sick</span>
              </li>
              <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Use direct communication for minor concerns instead of urgent care</span>
              </li>
              <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Ask about in-office services and wholesale pricing options</span>
              </li>
              <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Pair DPC with catastrophic coverage for comprehensive protection</span>
              </li>
              <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Invest time in building a strong relationship with your provider</span>
              </li>
              <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Track your healthcare spending to see your actual savings</span>
              </li>
            </ul>
          </div>

          {/* Closing */}
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Healthcare costs don't have to be overwhelming or unpredictable. Direct Primary Care offers a refreshingly simple alternative: transparent pricing, direct access to your doctor, and a care model that prioritizes your health over insurance paperwork. But like any investment, you only get out what you put in.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            By fully utilizing your DPC membership (embracing preventive care, taking advantage of direct access, leveraging wholesale pricing, and building a strong doctor-patient relationship), you can dramatically reduce your healthcare costs while improving your health outcomes. The question isn't whether you can afford Direct Primary Care; it's whether you can afford not to maximize it.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base">
            If you're interested in learning more about how Direct Primary Care can transform your healthcare experience and help you take control of your medical expenses, reach out to Body1MD. Dr. Hemmen is happy to answer your questions and help you understand exactly how DPC can work for you in the Albuquerque area.
          </p>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-ink)] mb-2">
                Reviewed by Dr. Andrew Hemmen, MD
              </div>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Dr. Andrew Hemmen is a board-certified internal medicine physician who has cared for patients in New Mexico since 2008. At Body1MD in Los Ranchos de Albuquerque, he provides evidence-based patient education and direct primary care. His practice is built on transparent monthly pricing, direct access to your physician, and meaningful relationships with every patient.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Link href="/new-patients" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Direct Primary Care Services
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Discover how membership-based care gives you direct access to your physician with transparent monthly pricing.
                </p>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/services/chronic-disease-management" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Chronic Disease Management
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Learn how consistent, personalized care helps you manage chronic conditions effectively while reducing long-term healthcare costs.
                </p>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/services/preventive-care" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Preventive Care & Wellness
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Explore our comprehensive preventive services designed to keep you healthy and catch potential issues before they become costly problems.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Dr. Hemmen is here to help you understand how Direct Primary Care can transform your healthcare experience.
          </p>
          <Link
            href="/book"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-light)] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}