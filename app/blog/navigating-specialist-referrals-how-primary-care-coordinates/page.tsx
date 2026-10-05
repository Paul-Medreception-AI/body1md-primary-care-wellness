import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Navigating Specialist Referrals: How Primary Care Coordinates Your Care',
  description: 'Learn how your primary care physician coordinates specialist referrals, manages your health information, and ensures continuity of care across multiple providers.',
  alternates: { canonical: '/blog/navigating-specialist-referrals-how-primary-care-coordinates' },
  openGraph: {
    title: 'Navigating Specialist Referrals: How Primary Care Coordinates Your Care',
    description: 'Learn how your primary care physician coordinates specialist referrals, manages your health information, and ensures continuity of care across multiple providers.',
    url: 'https://body1md.com/blog/navigating-specialist-referrals-how-primary-care-coordinates',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/images/blog/navigating-specialist-referrals-how-primary-care-coordinates.jpg', alt: 'Physician reviewing a patient lab report with a pen at a desk' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Navigating Specialist Referrals: How Primary Care Coordinates Your Care',
    description: 'Learn how your primary care physician coordinates specialist referrals, manages your health information, and ensures continuity of care across multiple providers.',
    images: ['/images/blog/navigating-specialist-referrals-how-primary-care-coordinates.jpg']
  }
}

export default function BlogPost() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-sm mb-6 text-white/80">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {' › '}
            <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
            {' › '}
            <span>Article</span>
          </div>
          
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</div>
          
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Navigating Specialist Referrals: How Primary Care Coordinates Your Care
          </h1>
          
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

      {/* Hero image */}
      <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-10">
        <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl">
          <Image src="/images/blog/navigating-specialist-referrals-how-primary-care-coordinates.jpg" alt="Physician reviewing a patient lab report with a pen at a desk" fill priority className="object-cover" sizes="(max-width: 896px) 100vw, 896px" />
        </div>
      </div>

      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[var(--color-ink)] leading-loose text-base">
            <p className="text-xl leading-relaxed mb-8">
              You leave your primary care appointment with a referral to see a cardiologist, an orthopedist, or perhaps an endocrinologist. What happens next? For many patients, the process feels like stepping into a maze: scheduling appointments, repeating your medical history, wondering if the doctors involved are talking to each other. The truth is, when specialty care works well, it's because your primary care physician is orchestrating behind the scenes, ensuring every piece of your healthcare puzzle fits together seamlessly.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Why Specialist Referrals Matter
            </h2>
            <p className="mb-6">
              Primary care physicians are trained to diagnose and treat a wide range of conditions, but modern medicine has become increasingly specialized. When you face a complex cardiac issue, need surgical intervention, or require advanced diagnostic procedures, specialists bring focused expertise that can be critical to your recovery and long-term health.
            </p>
            <p className="mb-6">
              However, seeing multiple providers without coordination can lead to fragmented care: duplicate tests, conflicting medication lists, and no single physician who understands your complete health picture. This is where your primary care physician becomes your healthcare quarterback, coordinating referrals and ensuring continuity across all your medical encounters.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              The Referral Process: What Really Happens
            </h2>
            <p className="mb-6">
              When your primary care physician determines you need specialist care, the process involves much more than handing you a name and phone number. Here's what effective care coordination looks like:
            </p>
            <div className="mb-6 space-y-3">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Selecting the Right Specialist:</strong> Your physician considers not just credentials, but which specialist is best suited for your specific condition, personality, and insurance network.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Sharing Medical Records:</strong> Relevant test results, imaging, and clinical notes are sent ahead so the specialist has context before your first appointment.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Clarifying the Question:</strong> The referral includes a clear clinical question: what does the primary care physician need the specialist to evaluate, confirm, or rule out?</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Following Up:</strong> After your specialist visit, your primary care physician reviews the consultation notes, test results, and recommendations to integrate them into your ongoing care plan.</p>
              </div>
            </div>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
              <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
                "Your primary care physician serves as the central hub of your healthcare team, translating specialist recommendations into a unified treatment plan that makes sense for your whole life, not just one organ system."
              </p>
            </div>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Challenges in the Referral System
            </h2>
            <p className="mb-6">
              Despite best intentions, the referral process often breaks down. Common pain points include:
            </p>
            <p className="mb-6">
              <strong>Communication Gaps:</strong> Specialist notes may not make it back to your primary care physician, or the delay means your medications aren't adjusted in time. Studies show that communication failures contribute to nearly 30% of malpractice claims.
            </p>
            <p className="mb-6">
              <strong>Insurance Authorization:</strong> Many referrals require prior authorization, adding weeks to the process and frustration for patients who feel caught between their doctor's recommendations and their insurance company's requirements.
            </p>
            <p className="mb-6">
              <strong>Limited Specialist Availability:</strong> Depending on your location and insurance, wait times to see certain specialists can stretch months, leaving you in limbo while symptoms persist or worsen.
            </p>
            <p className="mb-6">
              <strong>Lost in Translation:</strong> Specialist reports are often written in technical language that's difficult for patients to understand, and without a primary care physician to interpret findings, you may leave a consultation more confused than when you arrived.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              How Direct Primary Care Improves Coordination
            </h2>
            <p className="mb-6">
              Direct primary care (DPC) models offer distinct advantages when it comes to specialist referrals and care coordination. Because DPC physicians carry smaller patient panels and spend more time with each patient, they can:
            </p>
            <div className="mb-6 space-y-3">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p>Build direct relationships with trusted specialists in the community, often facilitating faster appointments and better communication</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p>Spend adequate time preparing detailed referral documentation, ensuring specialists have the full clinical picture</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p>Remain accessible by phone, text, or email to answer questions as you navigate specialist appointments and treatment plans</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p>Proactively follow up after specialist visits, reviewing results and adjusting your care plan without you needing to chase down information</p>
              </div>
            </div>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              What You Can Do as a Patient
            </h2>
            <p className="mb-6">
              You play a vital role in making specialist referrals successful. Here are practical steps to advocate for coordinated care:
            </p>
            <div className="mb-6 space-y-3">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Keep a Personal Health Summary:</strong> Maintain a one-page document listing your conditions, medications, allergies, and recent test results to share with new providers.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Request Copies of Reports:</strong> After every specialist visit, ask for a copy of the consultation note and any test results. Forward them to your primary care physician if the specialist's office hasn't already.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Ask Questions:</strong> Don't leave appointments unclear about next steps. Ask the specialist, "What should I tell my primary care doctor?" and "When should I follow up with you versus my regular physician?"</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Schedule a Debrief:</strong> After seeing a specialist, book a follow-up with your primary care physician to review findings and integrate recommendations into your overall health plan.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Communicate Changes:</strong> If a specialist starts or stops a medication, let your primary care physician know immediately. Don't assume the information has been shared.</p>
              </div>
            </div>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              The Bottom Line: Continuity Matters
            </h2>
            <p className="mb-6">
              Healthcare is not a series of isolated appointments. It's an ongoing relationship. Research consistently shows that patients with a consistent primary care physician experience better health outcomes, fewer emergency room visits, and lower overall healthcare costs. When specialist care is needed, that continuity becomes even more critical.
            </p>
            <p className="mb-6">
              Your primary care physician isn't just a gatekeeper. They're your advocate, translator, and strategic partner in navigating an increasingly complex medical system. They ensure that every specialist visit, every test, and every treatment recommendation aligns with your values, goals, and overall health trajectory.
            </p>
            <p className="mb-6">
              If you've felt lost in the shuffle between specialists, or if you're facing a new diagnosis that requires coordinated care across multiple providers, a strong primary care relationship is your foundation. The right physician will not only refer you to excellent specialists but will remain actively involved in your care every step of the way.
            </p>

            <p className="text-lg mt-8 leading-relaxed">
              At <strong>Body1MD Primary Care & Wellness</strong>, we prioritize care coordination and ensure you're supported throughout every specialist referral. From selecting the right provider to integrating recommendations into your personalized care plan, we're here to guide you. <Link href="/contact" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors underline">Reach out today</Link> to experience primary care that truly coordinates your health.
            </p>
          </div>
        </div>

        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 flex gap-6 items-start">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <div>
            <div className="font-semibold text-[var(--color-ink)] mb-2">Reviewed by Dr. Andrew Hemmen, MD</div>
            <p className="text-[var(--color-muted)] text-sm leading-relaxed">
              Dr. Andrew Hemmen is a board-certified internal medicine physician who has cared for patients in New Mexico since 2008. At Body1MD in Los Ranchos de Albuquerque, he provides evidence-based patient education and direct primary care.
            </p>
          </div>
        </div>
      </article>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-8">
            
            <Link href="/blog/direct-primary-care-vs-traditional-insurance-which-saves-you" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Direct Primary Care vs Traditional Insurance
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Explore how direct primary care models prioritize accessibility, personalized attention, and coordinated care.
                </p>
                <span className="text-[var(--color-accent)] text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  Read Article
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </Link>

            <Link href="/services/preventive-care" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Preventive Care Services
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Annual exams, screenings, and proactive health planning to catch issues early and keep you well.
                </p>
                <span className="text-[var(--color-accent)] text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </Link>

            <Link href="/services/chronic-disease-management" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Chronic Disease Management
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Ongoing support and personalized plans for managing diabetes, hypertension, and other long-term conditions.
                </p>
                <span className="text-[var(--color-accent)] text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  Explore Services
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </Link>

          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-xl mb-8 text-white/90">Dr. Hemmen is here to help.</p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}