import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Why Annual Physical Exams Matter More Than You Think',
  description: 'Discover the critical role annual physicals play in preventive care, early disease detection, and long-term health outcomes. Learn what to expect and why skipping your checkup could be costly.',
  alternates: { canonical: '/blog/why-annual-physical-exams-matter-more-than-you-think' },
  openGraph: {
    title: 'Why Annual Physical Exams Matter More Than You Think',
    description: 'Discover the critical role annual physicals play in preventive care, early disease detection, and long-term health outcomes. Learn what to expect and why skipping your checkup could be costly.',
    url: 'https://body1md.com/blog/why-annual-physical-exams-matter-more-than-you-think',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/images/blog/why-annual-physical-exams-matter-more-than-you-think.jpg', alt: 'Physician listening to an older man heart with a stethoscope in an exam room' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Annual Physical Exams Matter More Than You Think',
    description: 'Discover the critical role annual physicals play in preventive care, early disease detection, and long-term health outcomes. Learn what to expect and why skipping your checkup could be costly.',
    images: ['/images/blog/why-annual-physical-exams-matter-more-than-you-think.jpg'],
  },
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
            Why Annual Physical Exams Matter More Than You Think
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Dr. Andrew Hemmen, MD</span>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-10">
        <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl">
          <Image src="/images/blog/why-annual-physical-exams-matter-more-than-you-think.jpg" alt="Physician listening to an older man heart with a stethoscope in an exam room" fill priority className="object-cover" sizes="(max-width: 896px) 100vw, 896px" />
        </div>
      </div>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              You feel fine. You're busy. You haven't had symptoms in months, maybe years. So why bother scheduling an annual physical exam? It's a question millions of Americans ask themselves each year, and the answer could literally save your life.
            </p>
            <p className="mb-6">
              Annual physical exams are far more than a routine formality. They're your frontline defense against silent health threats, a cornerstone of preventive medicine, and an opportunity to build a meaningful relationship with your healthcare provider. Yet nearly half of American adults skip their yearly checkup, often discovering health problems only when symptoms become impossible to ignore.
            </p>
            <p>
              Let's explore why that annual visit deserves a permanent spot on your calendar, and what you might be missing if you skip it.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Early Detection Saves Lives
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Many serious health conditions develop silently over years. High blood pressure, elevated cholesterol, prediabetes, and even certain cancers often produce no symptoms in their early stages. By the time you feel something is wrong, the disease may have progressed significantly.
            </p>
            <p className="mb-6">
              Annual physical exams include comprehensive screenings designed to catch these conditions early, when they're most treatable. Routine blood work can reveal cholesterol levels creeping into dangerous territory. Blood pressure checks identify hypertension before it damages your heart or kidneys. Screening tests can detect cancer at Stage I rather than Stage IV, dramatically improving survival rates.
            </p>
            <p>
              The numbers speak for themselves: early detection of colorectal cancer increases five-year survival rates to over 90%. Catching high blood pressure early can prevent heart attacks, strokes, and kidney disease. These aren't abstract statistics. They represent real people who gained years of healthy life because a routine checkup uncovered a hidden problem.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
            "An annual physical isn't just about finding disease. It's about partnering with your doctor to optimize your health trajectory before problems begin."
          </blockquote>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Establishing Your Baseline
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Your body changes gradually over time. Weight fluctuates, blood pressure shifts, and metabolic markers evolve. When you see your doctor only when you're sick, there's no baseline for comparison. Is that slightly elevated blood sugar a new concern, or has it been trending upward for three years?
            </p>
            <p className="mb-6">
              Annual exams create a longitudinal health record, a detailed map of your body's patterns and trends. This baseline becomes invaluable when interpreting new symptoms or test results. Your doctor can identify subtle changes that might signal emerging problems, often years before they become clinically significant.
            </p>
            <p>
              Think of it like maintaining a car: regular inspections catch small issues before they become expensive repairs. Your body deserves at least the same level of preventive attention.
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Preventive Care and Vaccination Updates
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Prevention is always easier (and less expensive) than treatment. Annual physicals provide the perfect opportunity to stay current with preventive care guidelines and immunizations that protect your health.
            </p>
            <p className="mb-6">
              During your visit, your provider can review your vaccination status and recommend updates based on your age, health history, and risk factors. Adults need boosters for tetanus, protection against shingles, annual flu vaccines, and other immunizations that many people overlook after childhood.
            </p>
            <p className="mb-6">
              Beyond vaccines, your doctor can counsel you on lifestyle modifications tailored to your specific health profile: nutrition strategies, exercise recommendations, stress management techniques, and sleep hygiene practices. These conversations rarely happen in rushed sick visits but are fundamental to long-term wellness.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Building a Relationship with Your Provider
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Healthcare works best when it's built on trust and continuity. Seeing your doctor only when you're sick means every visit starts from scratch. Your provider doesn't know your health history, your concerns, or your goals. You're a stranger asking for help rather than a partner in ongoing care.
            </p>
            <p className="mb-6">
              Annual exams foster real relationships. Your doctor learns what matters to you, understands your family history, and becomes familiar with your unique health patterns. When illness does strike, you're not scrambling to find care from someone who knows nothing about you. You have a trusted advocate who can quickly assess what's normal for you and what's not.
            </p>
            <p>
              This continuity improves outcomes. Studies consistently show that patients with a regular primary care provider experience fewer hospitalizations, better chronic disease management, and higher satisfaction with their care. The annual physical is where that relationship begins and deepens.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What to Expect During Your Annual Physical
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Understanding what happens during an annual exam can ease any anxiety and help you prepare to get the most from your visit.
            </p>
            
            <div className="my-6">
              <div className="flex items-start gap-3 mb-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Vital Signs:</strong> Blood pressure, heart rate, temperature, and respiratory rate establish your baseline health status.</p>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Physical Examination:</strong> A head-to-toe assessment checking your heart, lungs, abdomen, skin, and neurological function.</p>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Laboratory Work:</strong> Blood tests screening for cholesterol, blood sugar, kidney function, liver health, and other key markers.</p>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Health History Review:</strong> Discussion of any new symptoms, medications, family history updates, or lifestyle changes.</p>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Age-Appropriate Screenings:</strong> Cancer screenings, bone density tests, and other assessments based on your age and risk factors.</p>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Wellness Counseling:</strong> Personalized advice on nutrition, exercise, stress management, and preventive strategies.</p>
              </div>
            </div>

            <p>
              Most importantly, your annual exam is a time for questions. Bring a list of concerns, no matter how minor they seem. This is your dedicated time to discuss your health goals and get expert guidance.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Overcoming Barriers to Care
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              We know that busy schedules, cost concerns, and even anxiety about potential findings can keep people from scheduling their annual exam. But the cost of skipping preventive care almost always exceeds the investment in staying proactive.
            </p>
            <p className="mb-6">
              Most insurance plans cover annual wellness visits at no cost to you. Direct primary care models offer even more accessibility with direct physician access for a flat monthly fee, removing financial barriers entirely. As for time, consider this: one hour per year is a small investment compared to weeks or months managing a preventable disease.
            </p>
            <p>
              If you're nervous about what your doctor might find, remember that knowledge is power. Finding a problem early gives you options and control. Ignoring warning signs doesn't make them disappear. It just makes them harder to treat.
            </p>
          </div>

          {/* Closing CTA */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              Your annual physical exam is one of the most valuable hours you'll spend all year. It's an investment in longevity, quality of life, and peace of mind. Whether you're managing chronic conditions, pursuing optimal wellness, or simply want to stay ahead of potential problems, this yearly checkup is your opportunity to take charge of your health.
            </p>
            <p>
              Don't wait for symptoms to force your hand. Schedule your annual physical today and make proactive healthcare a cornerstone of your wellness routine. Your future self will thank you.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-[var(--color-cream)] py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 flex gap-6 items-start shadow-sm">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-ink)] mb-2">
                Reviewed by Dr. Andrew Hemmen, MD
              </div>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Dr. Andrew Hemmen is a board-certified internal medicine physician who has cared for patients in New Mexico since 2008. At Body1MD in Los Ranchos de Albuquerque, he provides evidence-based patient education and direct primary care.
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
            <Link href="/services/annual-wellness-exams" className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Annual Wellness Exams
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Learn more about our comprehensive annual physical exams and what to expect during your visit.
              </p>
            </Link>

            {/* Card 2 */}
            <Link href="/services/preventive-care" className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Preventive Care Services
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Explore our full range of preventive health services designed to keep you healthy.
              </p>
            </Link>

            {/* Card 3 */}
            <Link href="/blog" className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Health Resources
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Browse our library of patient education articles on wellness, prevention, and healthcare.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Dr. Hemmen is here to help you prioritize your health with comprehensive, personalized care.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Schedule Your Annual Physical
          </Link>
        </div>
      </section>
    </main>
  )
}