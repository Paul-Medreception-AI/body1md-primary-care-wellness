import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Back Pain: When to Worry and When to Wait | Body1MD',
  description: 'Learn when back pain requires immediate medical attention and when it\'s safe to wait. Evidence-based guidance on red flags, warning signs, and self-care strategies.',
  alternates: { canonical: '/blog/back-pain-when-to-worry-and-when-to-wait' },
  openGraph: {
    title: 'Back Pain: When to Worry and When to Wait | Body1MD',
    description: 'Learn when back pain requires immediate medical attention and when it\'s safe to wait. Evidence-based guidance on red flags, warning signs, and self-care strategies.',
    url: 'https://body1md.com/blog/back-pain-when-to-worry-and-when-to-wait',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/images/blog/back-pain-when-to-worry-and-when-to-wait.jpg', alt: 'Man pressing a hand to his sore lower back' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Back Pain: When to Worry and When to Wait | Body1MD',
    description: 'Learn when back pain requires immediate medical attention and when it\'s safe to wait. Evidence-based guidance on red flags, warning signs, and self-care strategies.',
    images: ['/images/blog/back-pain-when-to-worry-and-when-to-wait.jpg']
  }
}

export default function BackPainArticle() {
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
          
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4">
            Patient Education
          </div>
          
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Back Pain: When to Worry and When to Wait
          </h1>
          
          <div className="flex justify-center gap-6 text-sm text-white/80">
            <span>Published October 2026</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Dr. Andrew Hemmen, MD</span>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-10">
        <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl">
          <Image src="/images/blog/back-pain-when-to-worry-and-when-to-wait.jpg" alt="Man pressing a hand to his sore lower back" fill priority className="object-cover" sizes="(max-width: 896px) 100vw, 896px" />
        </div>
      </div>

      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[var(--color-ink)] leading-loose text-base">
            <p className="text-xl mb-6">
              You wake up one morning and your back is screaming. Or maybe it's been a dull ache for weeks that suddenly got worse. You're not alone: back pain affects roughly 80% of adults at some point in their lives. But here's the question that keeps people up at night: Is this something serious, or will it get better on its own?
            </p>
            
            <p className="mb-6">
              Knowing when to seek immediate care and when to give your body time to heal can make all the difference in your recovery, and your peace of mind. Let's walk through the signs that matter, the red flags you shouldn't ignore, and the practical steps you can take when back pain strikes.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Understanding Back Pain: The Basics
            </h2>
            
            <p className="mb-6">
              Back pain is incredibly common, but not all back pain is created equal. Most episodes (about 85-90%) are considered "nonspecific" or "mechanical," meaning there's no serious underlying disease or structural damage. These cases typically result from muscle strain, poor posture, lifting something heavy, or simply sleeping wrong.
            </p>
            
            <p className="mb-6">
              The good news? Most acute back pain improves significantly within four to six weeks with conservative care. Your body is remarkably good at healing itself when given the right support. However, certain symptoms signal that something more serious might be going on, and those are the ones we need to watch for carefully.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Red Flags: When Back Pain Needs Immediate Attention
            </h2>
            
            <p className="mb-6">
              While most back pain is benign, certain warning signs (called "red flags" in medical terminology) indicate conditions that require prompt evaluation. These symptoms suggest possible serious causes like infection, fracture, cancer, or cauda equina syndrome (a surgical emergency).
            </p>
            
            <div className="bg-[var(--color-cream)] rounded-lg p-6 my-8">
              <h3 className="font-semibold text-[var(--color-ink)] mb-4 text-lg">Seek immediate medical care if you experience:</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Loss of bowel or bladder control</strong> or new numbness in the groin/inner thighs (possible cauda equina syndrome)</span>
                </li>
                <li className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Progressive leg weakness</strong> that's worsening rapidly</span>
                </li>
                <li className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Back pain after significant trauma</strong> (fall, car accident) especially if you're over 50 or have osteoporosis</span>
                </li>
                <li className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Fever, chills, or unexplained weight loss</strong> accompanying back pain</span>
                </li>
                <li className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>History of cancer</strong> with new or worsening back pain</span>
                </li>
                <li className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Severe pain that doesn't improve with rest</strong> or wakes you from sleep</span>
                </li>
                <li className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Pain with abdominal pulsations</strong> (could indicate aortic aneurysm)</span>
                </li>
              </ul>
            </div>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              When It's Okay to Wait (With Active Self-Care)
            </h2>
            
            <p className="mb-6">
              If your back pain doesn't have any red flags, it's usually safe, and often beneficial, to start with conservative self-care for the first few days to weeks. Research consistently shows that most episodes of acute back pain improve with time and simple interventions.
            </p>
            
            <p className="mb-6">
              "Waiting" doesn't mean doing nothing. Active self-management during the first week can significantly improve your comfort and speed recovery:
            </p>
            
            <ul className="space-y-3 my-6 ml-6">
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Stay as active as tolerable.</strong> Bed rest for more than a day or two can actually delay recovery. Gentle movement helps maintain flexibility and strength.</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Apply heat or ice.</strong> Ice for the first 48 hours if there's inflammation, then heat to relax muscles. Use whatever feels better to you.</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Use over-the-counter pain relievers</strong> like acetaminophen or ibuprofen as directed, but only for short-term relief.</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Practice good posture</strong> and avoid prolonged sitting or positions that aggravate the pain.</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Gentle stretching</strong> can help, but avoid aggressive movements or positions that increase pain.</span>
              </li>
            </ul>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
              <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
                "The evidence is clear: staying active and returning to normal activities as soon as possible leads to better outcomes than prolonged rest. Movement is medicine for most back pain."
              </p>
            </div>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              The Four-Week Rule: When to Follow Up
            </h2>
            
            <p className="mb-6">
              Even without red flags, you should consider seeing your healthcare provider if:
            </p>
            
            <ul className="space-y-3 my-6 ml-6">
              <li className="flex gap-3 items-start">
                <span className="text-[var(--color-accent)] font-bold flex-shrink-0">•</span>
                <span>Pain persists beyond four to six weeks despite self-care</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[var(--color-accent)] font-bold flex-shrink-0">•</span>
                <span>Pain is getting progressively worse instead of better</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[var(--color-accent)] font-bold flex-shrink-0">•</span>
                <span>Pain radiates down one or both legs, especially below the knee</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[var(--color-accent)] font-bold flex-shrink-0">•</span>
                <span>You experience numbness, tingling, or weakness in the legs</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[var(--color-accent)] font-bold flex-shrink-0">•</span>
                <span>The pain significantly interferes with daily activities or sleep</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[var(--color-accent)] font-bold flex-shrink-0">•</span>
                <span>You have a history of back problems and this feels different</span>
              </li>
            </ul>
            
            <p className="mb-6">
              Your primary care provider can perform a thorough evaluation, rule out serious causes, and create a treatment plan tailored to your specific situation. This might include physical therapy referral, imaging studies if warranted, or other interventions.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              What to Expect at Your Appointment
            </h2>
            
            <p className="mb-6">
              When you do see a healthcare provider for back pain, they'll typically start with a detailed history and physical examination. They'll ask about the onset of pain, what makes it better or worse, any associated symptoms, and your medical history.
            </p>
            
            <p className="mb-6">
              Contrary to what many patients expect, imaging (X-rays or MRI) is often not necessary for acute back pain without red flags. Studies show that early imaging for nonspecific back pain doesn't improve outcomes and may even lead to unnecessary procedures. Your provider will order imaging only if there's a specific clinical reason, such as suspicion of fracture, infection, or neurological compromise.
            </p>
            
            <p className="mb-6">
              Treatment recommendations will depend on your specific situation but often include a combination of: continued activity modification, physical therapy, targeted exercises, pain management strategies, and addressing any contributing factors like poor ergonomics or stress.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Prevention: Building a Resilient Back
            </h2>
            
            <p className="mb-6">
              Once your acute episode resolves, focus shifts to prevention. Research shows that core strengthening, flexibility exercises, maintaining a healthy weight, practicing good lifting mechanics, and staying generally active all reduce the risk of future episodes.
            </p>
            
            <p className="mb-6">
              Regular physical activity, especially exercises that build core strength and flexibility, is one of the most effective ways to prevent recurrent back pain. Even simple activities like walking, swimming, or yoga can make a significant difference.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Trust Your Instincts, But Know the Facts
            </h2>
            
            <p className="mb-6">
              Back pain can be frightening, especially when it's severe or unfamiliar. The key is knowing what symptoms warrant immediate attention and which situations can safely be managed with watchful waiting and self-care.
            </p>
            
            <p className="mb-6">
              Most back pain improves with time and conservative care. But if you're experiencing any red flag symptoms, if pain persists beyond a month, or if you're simply worried and need reassurance, don't hesitate to reach out to your healthcare provider. In the Albuquerque area, Dr. Hemmen is here to help you navigate back pain with evidence-based care, clear communication, and a personalized approach that respects your concerns and your time.
            </p>
            
            <p className="mb-6">
              Your back health matters. Whether you need immediate evaluation or guidance on self-care strategies, seeking the right care at the right time makes all the difference in your recovery and long-term well-being.
            </p>
          </div>
        </div>

        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6">
          <div className="flex gap-6 items-start">
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
                This article is provided for educational purposes and reflects evidence-based guidance on back pain management. It is not a substitute for personalized medical advice. If you have concerns about your back pain, please schedule an appointment for a thorough evaluation.
              </p>
            </div>
          </div>
        </div>
      </article>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h4 className="font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                More Patient Education Articles
              </h4>
              <p className="text-[var(--color-muted)] text-sm">
                Browse our complete library of health resources and patient education content.
              </p>
            </Link>

            <Link href="/services" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h4 className="font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Comprehensive Primary Care
              </h4>
              <p className="text-[var(--color-muted)] text-sm">
                Learn about our personalized approach to your ongoing health and wellness.
              </p>
            </Link>

            <Link href="/contact" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <h4 className="font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Schedule a Consultation
              </h4>
              <p className="text-[var(--color-muted)] text-sm">
                Get personalized guidance for your specific back pain concerns.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Dr. Hemmen is here to help you find relief and lasting solutions.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-medium px-8 py-4 rounded-lg transition-colors"
          >
            Schedule Your Appointment
          </Link>
        </div>
      </section>
    </main>
  )
}