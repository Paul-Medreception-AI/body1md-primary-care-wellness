import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Anxiety vs Normal Worry: When to Seek Medical Help',
  description: 'Learn the difference between everyday worry and clinical anxiety. Understand when it\'s time to seek professional help for anxiety symptoms in Austin, TX.',
  alternates: { canonical: '/blog/anxiety-vs-normal-worry-when-to-seek-medical-help' },
  openGraph: {
    title: 'Anxiety vs Normal Worry: When to Seek Medical Help',
    description: 'Learn the difference between everyday worry and clinical anxiety. Understand when it\'s time to seek professional help for anxiety symptoms in Austin, TX.',
    url: 'https://body1md.com/blog/anxiety-vs-normal-worry-when-to-seek-medical-help',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anxiety vs Normal Worry: When to Seek Medical Help',
    description: 'Learn the difference between everyday worry and clinical anxiety. Understand when it\'s time to seek professional help for anxiety symptoms in Austin, TX.',
    images: ['/og-image.png']
  }
}

export default function AnxietyVsWorryPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-white/80 mb-6 text-center">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {' › '}
            <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
            {' › Article'}
          </div>

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Mental Health
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-6">
            Anxiety vs Normal Worry: When to Seek Medical Help
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <span>Published 2025</span>
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
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              We all worry. It's a natural human response to stress, uncertainty, and life's challenges. That flutter in your stomach before a big presentation, the racing thoughts when paying bills, or the concern about a loved one's health—these are normal experiences shared by nearly everyone. But when does ordinary worry cross the line into something more serious?
            </p>
            <p className="mb-6">
              Understanding the difference between normal worry and clinical anxiety is crucial for your wellbeing. While worry is typically tied to specific situations and fades when the stressor passes, anxiety can persist without clear cause and significantly interfere with daily life. If you've been wondering whether your feelings are "just stress" or something that warrants professional attention, this guide will help you recognize the signs and understand when it's time to seek help.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Understanding Normal Worry
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Worry is a cognitive process focused on potential negative outcomes. It's your brain's way of problem-solving and preparing for challenges. Normal worry has several distinct characteristics that set it apart from clinical anxiety.
            </p>
            <p className="mb-6">
              First, normal worry is proportional to the situation at hand. If you're worried about an upcoming medical test, a job interview, or your child's safety, these concerns make logical sense. The intensity of your worry matches the realistic importance of the situation.
            </p>
            <p className="mb-6">
              Second, normal worry is time-limited. Once the stressful event passes or the problem is resolved, the worry fades. You might feel concerned about a presentation for a few days beforehand, but once it's over, those worried thoughts disappear and you return to your baseline state.
            </p>
            <p className="mb-6">
              Finally, normal worry doesn't significantly impair your functioning. You can still sleep reasonably well, maintain relationships, perform at work, and engage in activities you enjoy. The worry exists alongside your life rather than consuming it.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Clinical Anxiety Looks Like
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Clinical anxiety, formally known as Generalized Anxiety Disorder (GAD) or other anxiety disorders, operates differently from normal worry. Anxiety disorders affect approximately 31% of adults at some point in their lives, making them among the most common mental health conditions.
            </p>
            <p className="mb-6">
              Unlike situational worry, clinical anxiety is often excessive and disproportionate to actual threats. You might find yourself catastrophizing about unlikely events or feeling intense dread about everyday situations that others handle with minimal stress. The "what ifs" become relentless and difficult to control, even when you logically know your fears are overblown.
            </p>
            <p className="mb-6">
              Perhaps most significantly, clinical anxiety persists over time—typically six months or longer. It's not tied to a single event but feels like a constant companion. Even on days when nothing particularly stressful is happening, the anxiety remains, creating a baseline state of tension and unease.
            </p>
            <p className="mb-6">
              The physical symptoms of clinical anxiety can be particularly distressing. These may include persistent muscle tension, frequent headaches, gastrointestinal problems, rapid heartbeat, chest tightness, difficulty breathing, trembling, sweating, and chronic fatigue. These physical manifestations can themselves become sources of worry, creating a self-reinforcing cycle.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
            "The question isn't whether you experience worry—it's whether worry is interfering with your ability to live the life you want to live."
          </blockquote>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Key Warning Signs That Professional Help Is Needed
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Recognizing when to seek professional help can be challenging, especially if you've been living with anxiety for so long that it feels normal. Here are clear indicators that it's time to reach out to a healthcare provider:
            </p>
            <div className="space-y-4 my-6">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Interference with daily functioning:</strong> Your anxiety prevents you from attending work, maintaining relationships, completing routine tasks, or engaging in activities you once enjoyed.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Avoidance behaviors:</strong> You're avoiding people, places, situations, or activities because of anxiety, and this avoidance is limiting your life.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Physical symptoms:</strong> You're experiencing frequent panic attacks, persistent physical discomfort, or concerning symptoms that medical evaluation hasn't fully explained.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Sleep disruption:</strong> Anxiety regularly prevents you from falling asleep, causes middle-of-the-night waking with racing thoughts, or leaves you exhausted despite adequate time in bed.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Substance use:</strong> You're relying on alcohol, medications not prescribed for anxiety, or other substances to manage your symptoms.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Duration:</strong> Your heightened anxiety has persisted for several months without improvement, or is getting progressively worse.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Loss of joy:</strong> Things that used to bring pleasure or satisfaction now feel overwhelming or impossible to enjoy.</p>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Why Seeking Help Early Matters
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Many people wait months or even years before seeking treatment for anxiety, often because they minimize their experience, feel ashamed, or hope it will resolve on its own. However, early intervention offers significant advantages.
            </p>
            <p className="mb-6">
              Research consistently shows that anxiety disorders respond well to treatment, particularly when addressed early. The longer anxiety goes untreated, the more it can become entrenched in your thought patterns and behaviors. Early treatment typically leads to faster improvement and better long-term outcomes.
            </p>
            <p className="mb-6">
              Untreated anxiety also increases the risk of developing additional mental health conditions, particularly depression. The constant stress of living with anxiety takes a physical toll as well, potentially contributing to cardiovascular problems, weakened immune function, and chronic pain conditions.
            </p>
            <p className="mb-6">
              Perhaps most importantly, you simply don't have to suffer. Effective treatments exist, and there's no virtue in enduring symptoms that significantly diminish your quality of life. Seeking help isn't a sign of weakness—it's a practical step toward reclaiming your wellbeing.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What to Expect When You Seek Help
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If you're considering seeking help for anxiety, understanding what to expect can reduce some of the apprehension about taking that first step.
            </p>
            <p className="mb-6">
              Your primary care provider is an excellent starting point. They can perform a comprehensive evaluation to rule out medical conditions that might mimic or contribute to anxiety symptoms, such as thyroid disorders, heart conditions, or medication side effects. This evaluation typically includes discussing your symptoms, their duration and severity, and how they're impacting your life.
            </p>
            <p className="mb-6">
              Treatment for anxiety typically involves one or a combination of approaches. Psychotherapy, particularly Cognitive Behavioral Therapy (CBT), has strong evidence supporting its effectiveness for anxiety disorders. This approach helps you identify and change thought patterns and behaviors that fuel anxiety.
            </p>
            <p className="mb-6">
              Medication may be recommended, especially for moderate to severe anxiety. Several classes of medications can help, including SSRIs, SNRIs, and others. Your provider will discuss options, potential benefits, and side effects to help you make an informed decision.
            </p>
            <p className="mb-6">
              Lifestyle modifications complement other treatments and can significantly impact anxiety levels. Regular exercise, adequate sleep, stress management techniques, limiting caffeine and alcohol, and mindfulness practices all have research-backed benefits for reducing anxiety.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Taking the First Step
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The gap between recognizing you need help and actually reaching out can feel vast. You might worry about being judged, fear that your concerns aren't "serious enough," or feel overwhelmed by the process of finding care.
            </p>
            <p className="mb-6">
              Remember that healthcare providers see anxiety regularly—it's one of the most common reasons people seek medical care. Your concerns are valid, regardless of how "severe" they might seem compared to others' experiences. The standard isn't whether someone else has it worse; the standard is whether your anxiety is interfering with your ability to live the life you want.
            </p>
            <p className="mb-6">
              If you're unsure whether your symptoms warrant professional attention, consider this: if worry and anxiety are affecting your quality of life, causing distress, or limiting your activities, that's reason enough to seek an evaluation. A healthcare provider can help determine whether what you're experiencing is within the normal range or if treatment would be beneficial.
            </p>
            <p className="mb-6">
              The journey from anxiety to relief begins with a single conversation. Reaching out doesn't commit you to any particular course of treatment—it simply opens the door to understanding what you're experiencing and learning about your options. You deserve to feel better, and effective help is available in Austin, TX when you're ready to take that step.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-[var(--color-cream)] py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 flex gap-6 items-start shadow-sm">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-ink)] mb-2">
                Reviewed by Body1MD Primary Care & Wellness
              </p>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Our team is dedicated to providing comprehensive, evidence-based healthcare that addresses both physical and mental wellbeing. We understand that anxiety affects the whole person, and we're here to help you find the support and treatment you need.
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
            <Link href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-8 flex items-center justify-center h-48">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">
                  Health Library
                </div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  View All Resources
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Explore our complete library of health education articles and patient resources.
                </p>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/services/mental-health-care" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-8 flex items-center justify-center h-48">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">
                  Our Services
                </div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Mental Health Care
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Learn about our comprehensive approach to mental health and emotional wellbeing.
                </p>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/contact" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-8 flex items-center justify-center h-48">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">
                  Get Started
                </div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Schedule a Visit
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Ready to discuss your concerns? Contact us to schedule an appointment.
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
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-medium transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  )
}