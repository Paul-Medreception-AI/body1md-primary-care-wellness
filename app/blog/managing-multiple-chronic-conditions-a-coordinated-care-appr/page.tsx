import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Managing Multiple Chronic Conditions: A Coordinated Care Approach',
  description: 'Learn how coordinated primary care helps patients effectively manage multiple chronic conditions with personalized treatment plans, better outcomes, and reduced healthcare complexity.',
  alternates: { canonical: '/blog/managing-multiple-chronic-conditions-a-coordinated-care-appr' },
  openGraph: {
    title: 'Managing Multiple Chronic Conditions: A Coordinated Care Approach',
    description: 'Learn how coordinated primary care helps patients effectively manage multiple chronic conditions with personalized treatment plans, better outcomes, and reduced healthcare complexity.',
    url: 'https://body1md.com/blog/managing-multiple-chronic-conditions-a-coordinated-care-appr',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Managing Multiple Chronic Conditions: A Coordinated Care Approach',
    description: 'Learn how coordinated primary care helps patients effectively manage multiple chronic conditions with personalized treatment plans, better outcomes, reduced healthcare complexity.',
    images: ['/og-image.png']
  }
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-sm mb-6 text-white/80">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>
          
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Managing Multiple Chronic Conditions: A Coordinated Care Approach
          </h1>
          
          <div className="flex justify-center gap-6 text-sm text-white/80">
            <span>Published January 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Dr. Wellness Team</span>
          </div>
        </div>
      </section>

      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[var(--color-ink)] leading-loose text-base">
            <p className="text-xl mb-6">
              Living with multiple chronic conditions—what healthcare professionals call multimorbidity—affects nearly half of all adults over 65 and an increasing number of younger Americans. When you're managing diabetes, hypertension, arthritis, and perhaps heart disease or COPD simultaneously, healthcare can quickly become overwhelming. Yet with the right coordinated care approach, it's entirely possible to not just manage these conditions, but to thrive.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Understanding Multimorbidity
            </h2>
            <p className="mb-4">
              Multiple chronic conditions, or multimorbidity, refers to the presence of two or more long-term health conditions in a single individual. These might include diabetes, cardiovascular disease, chronic kidney disease, arthritis, depression, asthma, or any combination thereof. According to the Centers for Disease Control and Prevention, approximately 6 in 10 American adults have at least one chronic condition, and 4 in 10 have two or more.
            </p>
            <p className="mb-4">
              The challenge isn't simply additive—it's exponential. Each condition comes with its own medications, specialists, appointments, lifestyle modifications, and monitoring requirements. Without proper coordination, patients can find themselves navigating conflicting treatment recommendations, dangerous drug interactions, and an exhausting calendar of medical appointments.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              The Hidden Costs of Fragmented Care
            </h2>
            <p className="mb-4">
              Traditional healthcare often operates in silos. Your cardiologist focuses on your heart, your endocrinologist manages your diabetes, and your rheumatologist treats your arthritis—but who's looking at you as a whole person? This fragmentation leads to predictable problems:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Polypharmacy risks:</strong> Taking multiple medications increases the likelihood of dangerous interactions, side effects, and medication errors.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Conflicting treatment plans:</strong> One specialist's recommendation may contradict another's, leaving patients confused about what to do.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Duplicate testing:</strong> Without communication between providers, labs and imaging studies may be unnecessarily repeated.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Treatment fatigue:</strong> The burden of managing multiple conditions can lead to poor adherence and worse health outcomes.</span>
              </li>
            </ul>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
              <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
                "Coordinated care isn't just convenient—it's clinically superior. Studies show that patients with multiple chronic conditions who receive integrated care experience fewer hospitalizations, better medication adherence, and improved quality of life."
              </p>
            </div>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              What Coordinated Care Looks Like
            </h2>
            <p className="mb-4">
              Effective coordinated care centers on a primary care physician who serves as your healthcare quarterback. This physician maintains a comprehensive understanding of all your conditions, medications, and treatment goals, and actively communicates with specialists to ensure everyone is working from the same playbook.
            </p>
            <p className="mb-4">
              Key elements of coordinated care include:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Comprehensive medication review:</strong> Regular assessment of all medications to identify interactions, duplications, or opportunities to simplify your regimen.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Unified treatment planning:</strong> A single, prioritized care plan that addresses your most important health goals while managing all conditions.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Proactive monitoring:</strong> Scheduled check-ins and lab work timed to catch problems early, before they become emergencies.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Specialist coordination:</strong> Your primary care physician communicates with specialists, synthesizing their recommendations into an actionable plan.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Patient education and empowerment:</strong> Clear explanations of how your conditions interact and what you can do to take control of your health.</span>
              </li>
            </ul>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              The Role of Direct Primary Care
            </h2>
            <p className="mb-4">
              Direct Primary Care (DPC) models are particularly well-suited for managing multiple chronic conditions. By removing insurance barriers and limiting patient panels, DPC physicians can spend more time with each patient—typically 30 to 60 minutes per visit instead of the rushed 7-minute appointments common in traditional practices.
            </p>
            <p className="mb-4">
              This extended time allows for thorough medication reviews, detailed lifestyle counseling, and the kind of relationship-building that makes it easier for patients to discuss symptoms, ask questions, and stay engaged with their care. Many DPC practices also offer same-day or next-day appointments, 24/7 phone or text access to your physician, and lower overall healthcare costs through reduced emergency room visits and hospitalizations.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Practical Steps You Can Take
            </h2>
            <p className="mb-4">
              Even within the constraints of traditional healthcare, there are steps you can take to improve coordination and outcomes:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Maintain a current medication list:</strong> Keep a written or digital record of all medications, supplements, and over-the-counter drugs you take, with dosages and frequencies. Bring this to every appointment.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Use one pharmacy:</strong> Having all your prescriptions filled at a single pharmacy creates an additional safety check for drug interactions.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Share specialist reports:</strong> After seeing a specialist, request a copy of their notes and share them with your primary care physician.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Prioritize your concerns:</strong> Before appointments, write down your most important questions or symptoms. Don't try to address everything in one visit.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Track your symptoms:</strong> Use a journal or app to monitor blood pressure, blood sugar, pain levels, or other relevant metrics. Patterns help guide treatment decisions.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Bring a support person:</strong> A trusted friend or family member can help you remember information, ask questions you might forget, and advocate for your needs.</span>
              </li>
            </ul>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              When to Seek Better Coordination
            </h2>
            <p className="mb-4">
              If you're experiencing any of the following, it may be time to seek a more coordinated care approach:
            </p>
            <ul className="space-y-2 mb-6 ml-6">
              <li className="text-[var(--color-ink)]">• You feel overwhelmed by the number of specialists and appointments</li>
              <li className="text-[var(--color-ink)]">• You're taking five or more medications and aren't sure why you need each one</li>
              <li className="text-[var(--color-ink)]">• Different doctors have given you conflicting advice</li>
              <li className="text-[var(--color-ink)]">• You've experienced medication side effects or interactions</li>
              <li className="text-[var(--color-ink)]">• Your conditions seem to be worsening despite following treatment plans</li>
              <li className="text-[var(--color-ink)]">• You don't have a primary care physician who knows your complete medical history</li>
            </ul>

            <p className="text-lg mt-8">
              Managing multiple chronic conditions doesn't have to be an overwhelming burden. With a coordinated care approach centered on a knowledgeable, accessible primary care physician, you can simplify your healthcare, reduce risks, and focus on what matters most—living your life to the fullest. The key is finding a healthcare partner who sees you as a whole person, not a collection of diagnoses, and who has the time and expertise to guide you through the complexity.
            </p>
          </div>
        </div>

        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 flex gap-6 items-start">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-[var(--color-ink)] mb-2">Reviewed by Body1MD Primary Care & Wellness</p>
            <p className="text-[var(--color-muted)] text-sm leading-relaxed">
              This article provides educational information about managing multiple chronic conditions through coordinated primary care. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult your healthcare provider with questions about your specific health needs.
            </p>
          </div>
        </div>
      </article>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="aspect-video bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Resources</p>
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Browse All Articles
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Explore our library of patient education articles covering chronic disease management, preventive care, and wellness.
                </p>
              </div>
            </Link>

            <Link href="/services" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="aspect-video bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Care Services</p>
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Our Services
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Discover how our comprehensive primary care services support chronic disease management and whole-person health.
                </p>
              </div>
            </Link>

            <Link href="/contact" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="aspect-video bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Get Started</p>
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Schedule a Consultation
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Ready to experience coordinated, personalized care? Contact us to learn how we can help you manage your health.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-xl mb-8 text-white/90">Our team is here to help.</p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}