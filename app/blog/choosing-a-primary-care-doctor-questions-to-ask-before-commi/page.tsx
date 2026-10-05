import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Choosing a Primary Care Doctor: Questions to Ask Before Committing',
  description: 'Learn the essential questions to ask when selecting a primary care physician. Discover what to look for in a doctor, key factors to consider, and how to find the right fit for your healthcare needs.',
  alternates: { canonical: '/blog/choosing-a-primary-care-doctor-questions-to-ask-before-commi' },
  openGraph: {
    title: 'Choosing a Primary Care Doctor: Questions to Ask Before Committing',
    description: 'Learn the essential questions to ask when selecting a primary care physician. Discover what to look for in a doctor, key factors to consider, and how to find the right fit for your healthcare needs.',
    url: 'https://body1md.com/blog/choosing-a-primary-care-doctor-questions-to-ask-before-commi',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Choosing a Primary Care Doctor: Questions to Ask Before Committing',
    description: 'Learn the essential questions to ask when selecting a primary care physician. Discover what to look for in a doctor, key factors to consider, and how to find the right fit for your healthcare needs.',
    images: ['/og-image.png']
  }
}

export default function ChoosingPrimaryCareDoctor() {
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
            Choosing a Primary Care Doctor: Questions to Ask Before Committing
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published January 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Dr. Wellness Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Your primary care doctor is one of the most important relationships you'll have in your healthcare journey. This is the person who will coordinate your care, track your health over time, and serve as your advocate when you need specialized treatment. Yet many people choose their primary care physician based on convenience alone—whoever's closest, whoever has the quickest appointment, or whoever their insurance lists first.
            </p>
            <p className="mb-6">
              Finding the right fit requires more intention. A good primary care relationship is built on trust, communication, and shared goals. Before you commit to a new doctor, it's worth taking the time to ask the right questions. The answers will help you determine whether this physician can truly meet your needs—not just today, but for years to come.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Why Your Choice of Primary Care Doctor Matters
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Primary care is the foundation of your health. Research consistently shows that people who have a regular primary care provider experience better health outcomes, lower healthcare costs, and fewer emergency room visits. A good primary care doctor doesn't just treat illness—they help you prevent it. They understand your medical history, your family background, your lifestyle, and your goals.
            </p>
            <p className="mb-6">
              But not all primary care practices are the same. Some doctors are rushed and overwhelmed, managing large patient panels with little time for individualized care. Others practice in models that prioritize time, accessibility, and prevention. The questions you ask upfront can reveal which type of practice you're walking into—and whether it aligns with what you need.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Questions About Accessibility and Availability
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              One of the most frustrating aspects of traditional primary care is access. You're sick, but the next available appointment is three weeks away. You have a question, but you can't reach anyone without sitting on hold. Before committing to a new doctor, ask:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>How quickly can I typically get an appointment?</strong> Same-day or next-day availability is a sign of a well-managed practice.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Can I reach my doctor between visits?</strong> Look for practices that offer direct communication via phone, text, or patient portals.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>How long are appointments?</strong> Traditional visits may last 10-15 minutes. Longer appointments allow for more thorough discussions.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>What happens if I need care after hours?</strong> Understand the protocol for evenings, weekends, and emergencies.</span>
              </li>
            </ul>
            <p>
              A doctor who is truly accessible won't make you feel like you're bothering them. They'll have systems in place to ensure you can get care when you need it, not just when it's convenient for the clinic.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
            "A good primary care relationship is built on trust, communication, and shared goals. The answers to your questions will reveal whether this physician can truly meet your needs—not just today, but for years to come."
          </blockquote>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Questions About Care Philosophy and Approach
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Every doctor brings their own philosophy to patient care. Some are reactive, treating problems as they arise. Others are proactive, focusing on prevention and long-term wellness. Understanding a physician's approach will help you determine whether it matches your values. Consider asking:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>What is your approach to preventive care?</strong> Do they emphasize screenings, lifestyle counseling, and wellness visits?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>How do you involve patients in decision-making?</strong> Look for doctors who view healthcare as a partnership, not a one-way street.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Do you address lifestyle factors like diet, exercise, and stress?</strong> Comprehensive care goes beyond prescriptions.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>How do you coordinate with specialists?</strong> Your primary care doctor should be a quarterback, not just a referral service.</span>
              </li>
            </ul>
            <p>
              If a doctor's answers feel rushed or formulaic, that may be a red flag. You want someone who takes the time to explain their reasoning and who respects your role in your own health.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Questions About Practice Structure and Patient Load
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The structure of a medical practice has a direct impact on the quality of care you receive. In traditional fee-for-service models, doctors often manage thousands of patients, leading to short visits and limited availability. In direct primary care (DPC) or concierge models, doctors typically see far fewer patients and can offer more personalized attention. Ask:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>How many patients are in your panel?</strong> Smaller panels generally mean more time and attention for each patient.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>What is the practice model?</strong> Traditional insurance-based practices differ significantly from DPC or membership-based models.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Will I always see the same doctor?</strong> Continuity of care is crucial for building a trusting relationship.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>What services are included in my visits?</strong> Some practices bundle labs, procedures, and preventive care, while others charge separately.</span>
              </li>
            </ul>
            <p>
              Understanding these logistics upfront will help you avoid surprises later. It will also give you a sense of whether the practice is set up to provide the kind of care you're looking for.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Questions About Communication and Technology
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              In today's world, healthcare communication shouldn't be limited to phone calls and waiting rooms. Many modern practices use technology to improve accessibility and streamline care. Before committing, ask:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Do you offer telehealth visits?</strong> Virtual appointments can save time and increase convenience for many health concerns.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Can I communicate via email, text, or a patient portal?</strong> Direct messaging can be more efficient than playing phone tag.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>How do you share test results and medical records?</strong> Easy access to your health information is essential for informed decision-making.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>What is your response time for messages?</strong> Same-day or next-day responses are reasonable expectations in a well-run practice.</span>
              </li>
            </ul>
            <p>
              Technology should enhance your care, not complicate it. A practice that embraces modern communication tools is likely to be more responsive and patient-centered overall.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Trust Your Instincts and Prioritize Fit
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Beyond the logistics, there's an intangible element to choosing a primary care doctor: how you feel when you're in the room with them. Do they listen? Do they make eye contact? Do they rush through your concerns, or do they take the time to understand what's really bothering you? Do you feel comfortable asking questions, or do you feel judged?
            </p>
            <p className="mb-6">
              These impressions matter. Research shows that patients who trust their doctors are more likely to follow treatment plans, attend follow-up appointments, and experience better health outcomes. If something feels off during your initial visit, it's okay to keep looking. Your health is too important to settle for a relationship that doesn't feel right.
            </p>
            <p>
              At the same time, recognize that no doctor is perfect. Look for someone who is competent, communicative, and genuinely invested in your well-being. The right primary care physician will be a partner in your health for years to come—someone who knows you, advocates for you, and helps you navigate every stage of life with confidence.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              If you're in Austin, TX, and searching for a primary care practice that prioritizes accessibility, personalized attention, and proactive wellness, we're here to help. At Body1MD Primary Care & Wellness, we believe healthcare should be built on trust, time, and meaningful relationships. We'd be honored to earn yours.
            </p>
          </div>
        </div>

        {/* Author Box */}
        <div className="max-w-3xl mx-auto px-6 my-12">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-ink)] mb-2">
                Reviewed by Body1MD Primary Care & Wellness
              </div>
              <div className="text-[var(--color-muted)] text-sm leading-relaxed">
                Our team is dedicated to providing compassionate, evidence-based care that empowers patients to take control of their health. We believe in building lasting relationships founded on trust, accessibility, and personalized attention.
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Link href="/blog" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Patient Education</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Browse All Resources
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Explore our complete library of health articles and wellness guides.
                </p>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/services" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Our Services</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Comprehensive Primary Care
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Learn about our approach to personalized, accessible healthcare.
                </p>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/contact" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Get Started</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Schedule a Consultation
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Ready to find the right primary care fit? Let's talk.
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
          <p className="text-xl mb-8 text-white/90">
            Our team is here to help.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] text-white px-8 py-4 rounded-lg font-medium hover:bg-[var(--color-accent-dark)] transition-all hover:scale-105"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  )
}