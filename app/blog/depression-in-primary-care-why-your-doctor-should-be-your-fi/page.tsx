import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Depression in Primary Care: Why Your Doctor Should Be Your First Call',
  description: 'Learn why your primary care doctor is often the best first contact for depression treatment. Evidence-based insights on accessible, comprehensive care in Albuquerque, NM.',
  alternates: { canonical: '/blog/depression-in-primary-care-why-your-doctor-should-be-your-fi' },
  openGraph: {
    title: 'Depression in Primary Care: Why Your Doctor Should Be Your First Call',
    description: 'Learn why your primary care doctor is often the best first contact for depression treatment. Evidence-based insights on accessible, comprehensive care in Albuquerque, NM.',
    url: 'https://body1md.com/blog/depression-in-primary-care-why-your-doctor-should-be-your-fi',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/images/blog/depression-in-primary-care-why-your-doctor-should-be-your-fi.jpg', alt: 'Man sitting alone at a dining table with his head down' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Depression in Primary Care: Why Your Doctor Should Be Your First Call',
    description: 'Learn why your primary care doctor is often the best first contact for depression treatment. Evidence-based insights on accessible, comprehensive care in Albuquerque, NM.',
    images: ['/images/blog/depression-in-primary-care-why-your-doctor-should-be-your-fi.jpg'],
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
            Mental Health
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Depression in Primary Care: Why Your Doctor Should Be Your First Call
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <span>Published 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Dr. Andrew Hemmen, MD</span>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-10">
        <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl">
          <Image src="/images/blog/depression-in-primary-care-why-your-doctor-should-be-your-fi.jpg" alt="Man sitting alone at a dining table with his head down" fill priority className="object-cover" sizes="(max-width: 896px) 100vw, 896px" />
        </div>
      </div>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              When depression takes hold, it can feel overwhelming to know where to turn. Many people assume they need to see a psychiatrist or therapist immediately, but there's another path that's often faster, more accessible, and surprisingly effective: calling your primary care doctor. In fact, research shows that primary care physicians manage the majority of depression cases in the United States, and for good reason.
            </p>
            <p className="mb-6">
              Your primary care doctor isn't just there for physical ailments. They're equipped to address mental health concerns like depression, often providing the continuity of care and holistic approach that can make all the difference in your recovery journey.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Depression Is More Common Than You Think
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Depression affects more than 21 million adults in the United States each year, making it one of the most common mental health conditions. Yet despite its prevalence, nearly two-thirds of people with depression don't seek treatment. Stigma, confusion about where to start, and long wait times for specialists all contribute to this treatment gap.
            </p>
            <p className="mb-6">
              Here's what many people don't realize: depression isn't just a mental health issue. It's a whole-body condition. It can manifest as chronic fatigue, unexplained aches and pains, changes in appetite, sleep disturbances, and even increased susceptibility to other illnesses. Your primary care doctor is trained to recognize these connections and treat the whole person, not just isolated symptoms.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Why Primary Care Is Often the Best First Step
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              There are several compelling reasons to start your depression treatment journey with your primary care physician:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Accessibility and Speed:</strong> Wait times to see a psychiatrist can stretch for months in many communities. Your primary care doctor can often see you within days or even the same week, allowing you to start treatment when you need it most.</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Existing Relationship:</strong> Your doctor already knows your medical history, medications, and life circumstances. This context is invaluable when diagnosing and treating depression, as it helps rule out other medical causes and tailor treatment to your unique situation.</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Comprehensive Care:</strong> Depression often coexists with other health conditions like diabetes, heart disease, or thyroid disorders. Your primary care doctor can address all of these simultaneously, ensuring coordinated treatment.</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Lower Barrier to Entry:</strong> There's often less stigma and anxiety around calling your regular doctor than seeking out a mental health specialist for the first time. This familiarity can make it easier to take that crucial first step.</span>
              </li>
            </ul>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
              "Primary care physicians successfully treat mild to moderate depression in the majority of cases, with outcomes comparable to specialty mental health care."
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Depression Treatment Looks Like in Primary Care
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              When you bring depression concerns to your primary care doctor, you can expect a thorough evaluation. Your doctor will likely:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span>Conduct a depression screening using validated tools like the PHQ-9 questionnaire</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span>Rule out medical conditions that can mimic or contribute to depression (thyroid problems, vitamin deficiencies, hormonal changes)</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span>Discuss treatment options, which may include medication, lifestyle modifications, or referral to therapy</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span>Create a follow-up plan to monitor your progress and adjust treatment as needed</span>
              </li>
            </ul>
            <p className="mb-6">
              Many primary care doctors are comfortable prescribing antidepressant medications for mild to moderate depression. They can also provide counseling on evidence-based lifestyle interventions (regular exercise, sleep hygiene, nutrition, and stress management) that research shows can be as effective as medication for some patients.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            When Specialist Referral Makes Sense
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While primary care doctors can effectively manage most depression cases, there are times when specialist involvement is important. Your doctor may refer you to a psychiatrist or therapist if:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span>You have severe or treatment-resistant depression</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span>You're experiencing suicidal thoughts or self-harm urges</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span>Initial treatments haven't been effective after 8-12 weeks</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span>You have complex psychiatric conditions requiring specialized care</span>
              </li>
            </ul>
            <p className="mb-6">
              The key advantage of starting with primary care is that your doctor can coordinate this referral process and continue managing your overall health while you work with specialists. You're not alone in navigating the mental health system.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Direct Primary Care Advantage
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              In traditional healthcare settings, rushed appointments and limited access can make it difficult to address mental health concerns thoroughly. Direct primary care (DPC) offers a different model that can be particularly beneficial for managing depression:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Longer appointments</strong> mean time to truly discuss what you're experiencing without feeling rushed</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Same-day or next-day appointments</strong> when you're struggling and need support</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Direct communication</strong> with your doctor via phone, text, or email between visits</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>A continuous relationship</strong> that allows your doctor to notice subtle changes and provide personalized care</span>
              </li>
            </ul>
            <p className="mb-6">
              This model removes many of the barriers that prevent people from getting help for depression, making it easier to start treatment and stay engaged in your care plan.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Taking the First Step
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If you're experiencing symptoms of depression (persistent sadness, loss of interest in activities you once enjoyed, changes in sleep or appetite, difficulty concentrating, or feelings of hopelessness), don't wait to reach out. Your primary care doctor is there to help, and there's no need to have everything figured out before making that call.
            </p>
            <p className="mb-6">
              Depression is a medical condition, just like diabetes or high blood pressure. It's not a character flaw, and it's not something you should try to power through alone. Treatment works, and starting with your primary care doctor gives you the fastest path to feeling better while ensuring your overall health is addressed.
            </p>
            <p className="mb-6">
              In Albuquerque and beyond, primary care physicians are increasingly recognizing their crucial role in mental health care. By making your doctor your first call, you're taking an important step toward recovery, one that's accessible, comprehensive, and backed by evidence.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-[var(--color-cream)] py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 flex gap-6 items-start shadow-sm">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-ink)] mb-2">
                Reviewed by Dr. Andrew Hemmen, MD
              </div>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Dr. Andrew Hemmen is a board-certified internal medicine physician who has cared for patients in New Mexico since 2008. At Body1MD in Los Ranchos de Albuquerque, he provides evidence-based patient education and direct primary care. His care addresses both physical and mental health and treats the whole person.
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
            <Link href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="aspect-[16/9] bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">
                  Resource Hub
                </div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  More Patient Education Articles
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Explore our full library of health and wellness resources.
                </p>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/services" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="aspect-[16/9] bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">
                  Our Services
                </div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Comprehensive Primary Care
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Learn about our approach to whole-person healthcare.
                </p>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/contact" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="aspect-[16/9] bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">
                  Get Started
                </div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Schedule a Consultation
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Take the first step toward better health today.
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
            Dr. Hemmen is here to help.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  )
}