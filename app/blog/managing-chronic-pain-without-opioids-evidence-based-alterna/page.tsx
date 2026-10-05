import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Managing Chronic Pain Without Opioids: Evidence-Based Alternatives',
  description: 'Discover evidence-based alternatives to opioids for chronic pain management, including physical therapy, behavioral techniques, and integrative approaches that work.',
  alternates: { canonical: '/blog/managing-chronic-pain-without-opioids-evidence-based-alterna' },
  openGraph: {
    title: 'Managing Chronic Pain Without Opioids: Evidence-Based Alternatives',
    description: 'Discover evidence-based alternatives to opioids for chronic pain management, including physical therapy, behavioral techniques, and integrative approaches that work.',
    url: 'https://body1md.com/blog/managing-chronic-pain-without-opioids-evidence-based-alterna',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/images/blog/managing-chronic-pain-without-opioids-evidence-based-alterna.jpg', alt: 'Patient doing a resistance band exercise with hands-on guidance from a therapist' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Managing Chronic Pain Without Opioids: Evidence-Based Alternatives',
    description: 'Discover evidence-based alternatives to opioids for chronic pain management, including physical therapy, behavioral techniques, and integrative approaches that work.',
    images: ['/images/blog/managing-chronic-pain-without-opioids-evidence-based-alterna.jpg']
  }
}

export default function BlogPost() {
  return (
    <main>
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
          <h1 className="font-cormorant text-5xl font-light leading-tight text-center mb-8">
            Managing Chronic Pain Without Opioids: Evidence-Based Alternatives
          </h1>

          {/* Meta Information */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>Published October 2026</span>
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
          <Image src="/images/blog/managing-chronic-pain-without-opioids-evidence-based-alterna.jpg" alt="Patient doing a resistance band exercise with hands-on guidance from a therapist" fill priority className="object-cover" sizes="(max-width: 896px) 100vw, 896px" />
        </div>
      </div>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            Living with chronic pain affects millions of Americans, influencing not just physical health but also emotional well-being, relationships, and quality of life. For decades, opioid medications were considered a frontline treatment, but the opioid crisis has illuminated the urgent need for safer, evidence-based alternatives. The good news? Modern medicine offers a robust toolkit of non-opioid approaches that can effectively manage chronic pain while minimizing risks and side effects.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Whether you're living with back pain, arthritis, fibromyalgia, or another chronic condition, understanding your options empowers you to take an active role in your care. This article explores proven strategies that can help you reclaim your life without the dangers of opioid dependence.
          </p>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Understanding Chronic Pain and the Opioid Crisis
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            Chronic pain is defined as pain lasting longer than three months, often persisting beyond the expected healing time. Unlike acute pain, which serves as a warning signal, chronic pain can become a condition in itself, involving complex changes in the nervous system.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            While opioids can be effective for short-term pain relief, long-term use carries significant risks including tolerance, dependence, addiction, and potentially fatal overdose. The Centers for Disease Control and Prevention (CDC) now recommends non-opioid treatments as first-line therapy for most chronic pain conditions.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Research consistently shows that multimodal approaches (combining several non-opioid strategies) often provide better long-term outcomes than medication alone, with fewer risks and greater improvements in overall function and quality of life.
          </p>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Physical Therapy and Movement-Based Approaches
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            Physical therapy stands as one of the most effective non-pharmacological treatments for chronic pain. A trained physical therapist can design a personalized program that addresses your specific condition, improves mobility, strengthens supporting muscles, and reduces pain over time.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Evidence-based physical approaches include:
          </p>

          <div className="space-y-3 mb-8">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base"><strong>Therapeutic exercise:</strong> Graduated strengthening and flexibility programs tailored to your condition</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base"><strong>Manual therapy:</strong> Hands-on techniques to improve joint mobility and reduce muscle tension</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base"><strong>Aquatic therapy:</strong> Water-based exercise that reduces joint stress while building strength</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base"><strong>Low-impact aerobic exercise:</strong> Walking, cycling, or swimming to improve cardiovascular health and release natural pain-relieving endorphins</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base"><strong>Mind-body practices:</strong> Yoga, tai chi, and Pilates that combine movement with breath work and mindfulness</p>
            </div>
          </div>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Studies show that regular physical activity not only reduces pain intensity but also improves mood, sleep quality, and overall function, benefits that extend far beyond what medication alone can provide.
          </p>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 italic text-xl font-cormorant text-[var(--color-ink)]">
            "The goal isn't to eliminate all pain, but to improve function and quality of life. Many patients find that combining multiple approaches allows them to do more of what matters to them."
          </blockquote>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Behavioral and Psychological Interventions
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            Chronic pain isn't just a physical experience. It involves complex interactions between the body, mind, and emotions. Psychological approaches don't mean the pain is "all in your head," but rather recognize that addressing the mental and emotional aspects of pain can provide real, measurable relief.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            <strong>Cognitive Behavioral Therapy (CBT)</strong> is one of the most well-researched psychological treatments for chronic pain. CBT helps you identify and change thought patterns that amplify pain and teaches practical coping skills. Research shows CBT can reduce pain intensity, improve mood, and enhance daily functioning.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            <strong>Mindfulness-Based Stress Reduction (MBSR)</strong> teaches meditation and awareness techniques that help you relate to pain differently. Rather than fighting against pain, mindfulness helps you observe it without judgment, often reducing its emotional impact and intensity.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Other effective approaches include acceptance and commitment therapy (ACT), biofeedback, and relaxation training. Many patients find that addressing the psychological aspects of pain provides relief that medication never could.
          </p>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Non-Opioid Medications and Interventional Procedures
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            While this article focuses on non-medication approaches, it's important to know that several non-opioid medications can play a role in comprehensive pain management. These include non-steroidal anti-inflammatory drugs (NSAIDs), acetaminophen, certain antidepressants (particularly for nerve pain), and anticonvulsant medications.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            For some conditions, interventional procedures may offer significant relief. These include:
          </p>

          <ul className="space-y-2 mb-8 ml-6">
            <li className="text-[var(--color-ink)] leading-loose text-base list-disc">Epidural steroid injections for spinal pain</li>
            <li className="text-[var(--color-ink)] leading-loose text-base list-disc">Nerve blocks for targeted pain relief</li>
            <li className="text-[var(--color-ink)] leading-loose text-base list-disc">Radiofrequency ablation for joint pain</li>
            <li className="text-[var(--color-ink)] leading-loose text-base list-disc">Trigger point injections for muscle pain</li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            These procedures are typically performed by pain specialists and can be particularly helpful when combined with physical therapy and other conservative treatments.
          </p>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Integrative and Complementary Approaches
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            Many patients find relief through complementary therapies that can be integrated with conventional medical care. While more research is needed for some of these approaches, several have substantial evidence supporting their effectiveness:
          </p>

          <div className="space-y-3 mb-8">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base"><strong>Acupuncture:</strong> Supported by numerous studies for various pain conditions, particularly back and neck pain</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base"><strong>Massage therapy:</strong> Can reduce muscle tension, improve circulation, and promote relaxation</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base"><strong>Chiropractic care:</strong> May be helpful for certain types of back and neck pain</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base"><strong>Transcutaneous electrical nerve stimulation (TENS):</strong> Uses mild electrical currents to reduce pain signals</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base"><strong>Heat and cold therapy:</strong> Simple, accessible tools that can provide immediate relief</p>
            </div>
          </div>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            The key is finding the right combination of approaches that work for your unique situation. What helps one person may not work for another, and building an effective pain management plan often requires some trial and adjustment.
          </p>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Lifestyle Factors That Impact Pain
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            Beyond specific treatments, several lifestyle factors play crucial roles in managing chronic pain:
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            <strong>Sleep:</strong> Poor sleep intensifies pain, while pain disrupts sleep, creating a vicious cycle. Prioritizing sleep hygiene, maintaining consistent sleep schedules, and addressing sleep disorders can significantly improve pain levels.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            <strong>Nutrition:</strong> While no specific diet cures chronic pain, anti-inflammatory eating patterns (rich in fruits, vegetables, whole grains, and omega-3 fatty acids) may help reduce inflammation. Maintaining a healthy weight also reduces stress on joints.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            <strong>Social connection:</strong> Isolation can worsen pain and depression. Staying connected with supportive friends and family, joining support groups, or working with a therapist can provide emotional resources that buffer against pain's impact.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <strong>Stress management:</strong> Chronic stress amplifies pain perception. Incorporating stress-reduction practices (whether meditation, deep breathing, creative activities, or time in nature) can lower overall pain levels.
          </p>

          {/* Closing */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Taking the Next Step in Your Pain Management Journey
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            Managing chronic pain without opioids is not only possible. It's often more effective for long-term health and function. The most successful approaches combine multiple strategies tailored to your specific needs, preferences, and goals.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            Remember that chronic pain management is a process, not a quick fix. It requires patience, persistence, and often some trial and error to find what works best for you. Progress may be gradual, but each small improvement in function and quality of life matters.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            If you're struggling with chronic pain, you don't have to navigate this journey alone. Working with a knowledgeable healthcare provider who understands evidence-based alternatives to opioids can help you develop a comprehensive, personalized pain management plan. Whether you're just beginning to explore your options or looking to refine your current approach, professional guidance can make all the difference in reclaiming your life from chronic pain.
          </p>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-ink)] mb-1">
                Reviewed by Dr. Andrew Hemmen, MD
              </div>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                This article is for informational purposes and does not constitute medical advice. Always consult with a qualified healthcare provider regarding your specific health concerns and treatment options.
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
            <Link href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Health Education</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Explore More Health Resources
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Browse our complete library of patient education articles and wellness guides.
                </p>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/services" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Comprehensive Care</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Our Services
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Learn about our comprehensive approach to chronic disease management and preventive care.
                </p>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/contact" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Get Started</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Schedule a Consultation
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Ready to explore personalized pain management? Connect with Dr. Hemmen today.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Dr. Hemmen is here to help you develop a personalized approach to managing your pain.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  )
}