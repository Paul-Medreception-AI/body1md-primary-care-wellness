import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Sleep Apnea: More Than Just Snoring | Body1MD Primary Care',
  description: 'Learn how sleep apnea affects your health beyond snoring. Discover symptoms, risks, and treatment options for obstructive sleep apnea in Albuquerque, NM.',
  alternates: { canonical: '/blog/sleep-apnea-more-than-just-snoring' },
  openGraph: {
    title: 'Sleep Apnea: More Than Just Snoring | Body1MD Primary Care',
    description: 'Learn how sleep apnea affects your health beyond snoring. Discover symptoms, risks, and treatment options for obstructive sleep apnea in Albuquerque, NM.',
    url: 'https://body1md.com/blog/sleep-apnea-more-than-just-snoring',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/images/blog/sleep-apnea-more-than-just-snoring.jpg', alt: 'Man snoring in bed while his partner lies awake beside him' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sleep Apnea: More Than Just Snoring | Body1MD Primary Care',
    description: 'Learn how sleep apnea affects your health beyond snoring. Discover symptoms, risks, and treatment options for obstructive sleep apnea in Albuquerque, NM.',
    images: ['/images/blog/sleep-apnea-more-than-just-snoring.jpg']
  }
}

export default function SleepApneaBlogPost() {
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
            Sleep Apnea: More Than Just Snoring
          </h1>

          {/* Meta */}
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
          <Image src="/images/blog/sleep-apnea-more-than-just-snoring.jpg" alt="Man snoring in bed while his partner lies awake beside him" fill priority className="object-cover" sizes="(max-width: 896px) 100vw, 896px" />
        </div>
      </div>

      {/* Article Body */}
      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <div className="text-[var(--color-ink)] leading-loose text-base">
          <p className="text-xl mb-6 font-light">
            Your partner complains about your snoring. You wake up exhausted despite spending eight hours in bed. You reach for another cup of coffee by mid-morning, just to stay alert. While many dismiss these symptoms as simple snoring or poor sleep habits, they could be warning signs of obstructive sleep apnea, a serious medical condition that affects far more than just the quality of your rest.
          </p>

          <p className="mb-6">
            Sleep apnea is more than an inconvenience. Left untreated, it can lead to heart disease, stroke, diabetes, and a significantly diminished quality of life. Understanding what sleep apnea is, recognizing its symptoms, and seeking proper treatment can be life-changing, and potentially life-saving.
          </p>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Is Sleep Apnea?
          </h2>

          <p className="mb-6">
            Sleep apnea is a disorder characterized by repeated interruptions in breathing during sleep. These pauses can last from a few seconds to over a minute and may occur hundreds of times throughout the night. The most common form, obstructive sleep apnea (OSA), happens when the muscles in the back of the throat relax too much, causing the airway to narrow or close completely.
          </p>

          <p className="mb-6">
            When your airway becomes blocked, your brain briefly wakes you up to restore normal breathing, often so briefly that you don't remember it. This cycle repeats throughout the night, fragmenting your sleep and preventing you from reaching the deep, restorative stages your body needs to function optimally.
          </p>

          <p className="mb-6">
            While loud snoring is a hallmark symptom, not everyone who snores has sleep apnea, and not everyone with sleep apnea snores. That's why it's critical to look beyond the noise and consider the full picture of symptoms.
          </p>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Who Is at Risk?
          </h2>

          <p className="mb-6">
            Sleep apnea can affect anyone, including children, but certain factors significantly increase your risk:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Excess weight:</strong> Obesity, particularly around the neck and upper body, increases the likelihood of airway obstruction.</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Age and gender:</strong> Sleep apnea is more common in men and in people over 40.</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Anatomical features:</strong> A thick neck, narrow airway, enlarged tonsils, or recessed chin can contribute to obstruction.</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Family history:</strong> Genetics can play a role in sleep apnea susceptibility.</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Lifestyle factors:</strong> Smoking, alcohol use, and sedative medications can relax throat muscles and worsen symptoms.</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Medical conditions:</strong> High blood pressure, type 2 diabetes, congestive heart failure, and PCOS are associated with higher rates of sleep apnea.</span>
            </li>
          </ul>

          <p className="mb-6">
            Understanding your risk factors is the first step toward recognizing whether you or a loved one might be living with undiagnosed sleep apnea.
          </p>

          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
              "Sleep apnea doesn't just steal your rest. It robs your body of oxygen night after night, putting strain on your heart, brain, and metabolism."
            </p>
          </div>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Recognizing the Symptoms
          </h2>

          <p className="mb-6">
            Many people with sleep apnea don't realize they have it. The symptoms can be subtle or mistaken for other issues. Common signs include:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Loud, chronic snoring punctuated by gasping or choking sounds</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Excessive daytime sleepiness, even after a full night in bed</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Morning headaches or a dry mouth and sore throat upon waking</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Difficulty concentrating, memory problems, or mood changes</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Frequent nighttime urination</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Observed episodes of stopped breathing during sleep (often reported by a bed partner)</span>
            </li>
          </ul>

          <p className="mb-6">
            If you or someone close to you experiences several of these symptoms, it's time to talk to a healthcare provider. Sleep apnea is highly treatable, but only if it's properly diagnosed.
          </p>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Hidden Health Consequences
          </h2>

          <p className="mb-6">
            The dangers of untreated sleep apnea extend far beyond fatigue. Every time your breathing stops, your blood oxygen levels drop, triggering a stress response that raises your blood pressure and heart rate. Over time, this nightly assault on your cardiovascular system can lead to serious complications:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Hypertension:</strong> Sleep apnea is strongly linked to high blood pressure and can make it harder to control with medication.</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Heart disease and stroke:</strong> People with severe sleep apnea are at significantly higher risk for heart attacks, arrhythmias, and stroke.</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Type 2 diabetes:</strong> Sleep apnea can worsen insulin resistance and blood sugar control.</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Daytime accidents:</strong> Excessive sleepiness increases the risk of motor vehicle and workplace accidents.</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Cognitive decline:</strong> Chronic oxygen deprivation can affect memory, focus, and mental sharpness.</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Mental health impacts:</strong> Anxiety, depression, and irritability are common among those with untreated sleep apnea.</span>
            </li>
          </ul>

          <p className="mb-6">
            The good news? Effective treatment can dramatically reduce these risks and restore quality of life.
          </p>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Diagnosis and Treatment Options
          </h2>

          <p className="mb-6">
            If sleep apnea is suspected, your provider will typically recommend a sleep study, either in a specialized sleep lab or with a home sleep test device. These tests monitor your breathing patterns, oxygen levels, heart rate, and sleep stages to determine the presence and severity of sleep apnea.
          </p>

          <p className="mb-6">
            Once diagnosed, several treatment options are available:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>CPAP (Continuous Positive Airway Pressure):</strong> The gold standard treatment, CPAP delivers steady air pressure through a mask to keep the airway open. While it takes some adjustment, most patients experience immediate improvement in energy and focus.</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Lifestyle modifications:</strong> Weight loss, avoiding alcohol and sedatives before bed, sleeping on your side, and establishing a regular sleep schedule can all reduce symptoms.</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Oral appliances:</strong> Custom-fitted dental devices can reposition the jaw and tongue to keep the airway open, often effective for mild to moderate cases.</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Surgical options:</strong> For anatomical issues such as enlarged tonsils or severe structural abnormalities, surgery may be recommended.</span>
            </li>
          </ul>

          <p className="mb-6">
            The right treatment depends on the severity of your condition, your anatomy, and your lifestyle. Working closely with your healthcare team ensures you receive personalized care tailored to your needs.
          </p>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Taking Action Toward Better Sleep and Health
          </h2>

          <p className="mb-6">
            Sleep apnea is not a condition to ignore or dismiss as "just snoring." It's a chronic health issue with profound implications for your heart, brain, and overall well-being. The fatigue, the brain fog, the increased risk of serious disease: all of it can be addressed with proper diagnosis and treatment.
          </p>

          <p className="mb-6">
            If you suspect you or a loved one might have sleep apnea, don't wait. Early intervention can prevent complications and restore the restorative sleep your body needs to thrive. Whether it's through lifestyle changes, CPAP therapy, or other treatments, help is available, and the difference it makes can be life-changing.
          </p>

          <p className="mb-6">
            At Body1MD Primary Care & Wellness, we're here to guide you through every step of the process, from initial evaluation to ongoing management. Your health and your sleep matter. Let's work together to help you breathe easier, sleep better, and live healthier.
          </p>
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
            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">
                  Patient Education
                </div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Browse All Resources
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Explore our collection of health articles and patient education resources.
                </p>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/services" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">
                  Our Services
                </div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Comprehensive Primary Care
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Learn about our personalized approach to primary care and wellness.
                </p>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/contact" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">
                  Get Started
                </div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Schedule a Visit
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Ready to take control of your health? Book your appointment today.
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
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}