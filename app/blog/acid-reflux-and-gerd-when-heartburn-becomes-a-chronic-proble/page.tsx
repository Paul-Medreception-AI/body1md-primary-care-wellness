import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Acid Reflux and GERD: When Heartburn Becomes a Chronic Problem',
  description: 'Learn about acid reflux and GERD, including symptoms, causes, and treatment options. Discover when heartburn requires medical attention and how to manage chronic reflux.',
  alternates: { canonical: '/blog/acid-reflux-and-gerd-when-heartburn-becomes-a-chronic-proble' },
  openGraph: {
    title: 'Acid Reflux and GERD: When Heartburn Becomes a Chronic Problem',
    description: 'Learn about acid reflux and GERD, including symptoms, causes, and treatment options. Discover when heartburn requires medical attention and how to manage chronic reflux.',
    url: 'https://body1md.com/blog/acid-reflux-and-gerd-when-heartburn-becomes-a-chronic-proble',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Acid Reflux and GERD: When Heartburn Becomes a Chronic Problem',
    description: 'Learn about acid reflux and GERD, including symptoms, causes, and treatment options. Discover when heartburn requires medical attention and how to manage chronic reflux.',
    images: ['/og-image.png'],
  },
}

export default function AcidRefluxGERDArticle() {
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
            Acid Reflux and GERD: When Heartburn Becomes a Chronic Problem
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg stroke="currentColor" fill="none" strokeWidth={1.5} viewBox="0 0 24 24" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>Published January 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <svg stroke="currentColor" fill="none" strokeWidth={1.5} viewBox="0 0 24 24" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>7 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg stroke="currentColor" fill="none" strokeWidth={1.5} viewBox="0 0 24 24" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <span>Dr. Wellness Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-lg mb-8">
            <p className="mb-6">
              That burning sensation in your chest after a heavy meal might seem like a minor inconvenience—something everyone experiences from time to time. But when heartburn becomes a frequent visitor, showing up several times a week or disrupting your sleep, it may signal something more serious: gastroesophageal reflux disease, or GERD. Understanding the difference between occasional acid reflux and chronic GERD is crucial for protecting your long-term digestive health and quality of life.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Understanding Acid Reflux and GERD
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base space-y-4">
            <p>
              Acid reflux occurs when stomach acid flows backward into the esophagus, the tube connecting your mouth and stomach. The esophagus lacks the protective lining that shields the stomach from acid, so when acid escapes upward, it causes irritation and that familiar burning sensation we call heartburn.
            </p>
            <p>
              Most people experience acid reflux occasionally, especially after eating large meals, spicy foods, or lying down too soon after eating. This is normal and usually resolves on its own without intervention.
            </p>
            <p>
              GERD, however, is diagnosed when acid reflux happens frequently—typically twice a week or more—over an extended period. It's a chronic condition that requires medical attention and management. Left untreated, GERD can lead to complications including esophageal inflammation, ulcers, strictures, and even an increased risk of esophageal cancer.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Recognizing the Symptoms
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base space-y-4">
            <p>
              While heartburn is the most common symptom, GERD can manifest in several ways. Some people experience what's known as "silent reflux," where acid reaches the throat and airways without causing obvious heartburn.
            </p>
            <p className="font-semibold mt-6 mb-3">Common GERD symptoms include:</p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Persistent heartburn, especially at night or after meals</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Regurgitation of food or sour liquid</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Difficulty swallowing (dysphagia)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Chronic cough or throat clearing</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Hoarseness or sore throat</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>A sensation of a lump in your throat</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Disrupted sleep due to nighttime symptoms</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Chest pain (important: always rule out heart-related causes first)</span>
              </li>
            </ul>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
              "GERD affects approximately 20% of the U.S. population, making it one of the most common digestive disorders. The good news is that with proper diagnosis and treatment, most people can achieve significant symptom relief and prevent complications."
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Causes GERD?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base space-y-4">
            <p>
              GERD typically develops when the lower esophageal sphincter (LES)—a ring of muscle that acts as a valve between the esophagus and stomach—weakens or relaxes abnormally. This allows stomach contents to flow back up into the esophagus.
            </p>
            <p>
              Several factors can contribute to LES dysfunction and increase your risk of GERD:
            </p>
            <ul className="space-y-2 ml-6 mt-4">
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-accent)] font-bold">•</span>
                <span><strong>Obesity:</strong> Excess weight increases abdominal pressure, pushing stomach contents upward</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-accent)] font-bold">•</span>
                <span><strong>Hiatal hernia:</strong> When part of the stomach pushes through the diaphragm</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-accent)] font-bold">•</span>
                <span><strong>Pregnancy:</strong> Hormonal changes and increased abdominal pressure</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-accent)] font-bold">•</span>
                <span><strong>Smoking:</strong> Weakens the LES and increases stomach acid</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-accent)] font-bold">•</span>
                <span><strong>Certain medications:</strong> Including some blood pressure medications, antihistamines, and sedatives</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-accent)] font-bold">•</span>
                <span><strong>Dietary triggers:</strong> Fatty foods, chocolate, caffeine, alcohol, mint, and acidic foods</span>
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Lifestyle Modifications That Help
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base space-y-4">
            <p>
              Many people with GERD find significant relief through lifestyle changes. While medication may be necessary for some, these modifications form the foundation of effective GERD management:
            </p>
            <ul className="space-y-3 ml-6 mt-6">
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Maintain a healthy weight:</strong> Even modest weight loss can reduce symptoms significantly</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Eat smaller, more frequent meals:</strong> Large meals increase stomach pressure</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Avoid eating before bedtime:</strong> Wait at least 3 hours after eating before lying down</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Elevate the head of your bed:</strong> Raise it 6-8 inches using blocks or a wedge pillow</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Identify and avoid your trigger foods:</strong> Keep a food diary to track what worsens symptoms</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Quit smoking:</strong> Smoking weakens the LES and delays stomach emptying</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Wear loose-fitting clothing:</strong> Tight clothes can increase abdominal pressure</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Manage stress:</strong> Stress can worsen GERD symptoms and slow digestion</span>
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Medical Treatment Options
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base space-y-4">
            <p>
              When lifestyle changes aren't enough, several medication options can help manage GERD symptoms and promote healing:
            </p>
            <p>
              <strong>Antacids</strong> provide quick but temporary relief by neutralizing stomach acid. They're useful for occasional symptoms but aren't sufficient for chronic GERD.
            </p>
            <p>
              <strong>H2 receptor blockers</strong> reduce acid production and provide longer relief than antacids. They're available over-the-counter and by prescription.
            </p>
            <p>
              <strong>Proton pump inhibitors (PPIs)</strong> are the most effective medications for GERD, blocking acid production more completely and allowing the esophagus to heal. They're typically used for more severe cases or when other treatments haven't worked.
            </p>
            <p>
              <strong>Prokinetics</strong> help strengthen the LES and speed stomach emptying, though they're used less frequently due to potential side effects.
            </p>
            <p>
              In severe cases that don't respond to medication and lifestyle changes, surgical options like fundoplication may be considered. This procedure strengthens the LES by wrapping the upper part of the stomach around the lower esophagus.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            When to Seek Medical Care
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base space-y-4">
            <p>
              You should consult a healthcare provider if you experience heartburn more than twice a week, if over-the-counter medications aren't providing relief, or if symptoms interfere with your daily life. Early diagnosis and treatment can prevent complications and improve your quality of life.
            </p>
            <p className="font-semibold">Seek immediate medical attention if you experience:</p>
            <ul className="space-y-2 ml-6 mt-3">
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-accent)] font-bold">•</span>
                <span>Severe chest pain, especially with arm pain or shortness of breath</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-accent)] font-bold">•</span>
                <span>Difficulty swallowing or pain when swallowing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-accent)] font-bold">•</span>
                <span>Persistent nausea or vomiting</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-accent)] font-bold">•</span>
                <span>Unintended weight loss</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-accent)] font-bold">•</span>
                <span>Vomiting blood or black, tarry stools</span>
              </li>
            </ul>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 space-y-4">
            <p>
              Living with chronic heartburn doesn't have to be your norm. GERD is a manageable condition, and with the right combination of lifestyle modifications, dietary changes, and medical treatment when needed, most people achieve significant symptom relief. The key is recognizing when occasional heartburn has become a chronic problem and taking action to protect your esophageal health.
            </p>
            <p>
              If you're struggling with frequent heartburn or acid reflux, don't wait for complications to develop. A comprehensive evaluation can identify the underlying causes of your symptoms and create a personalized treatment plan that works for your lifestyle. Your digestive health matters—and relief is within reach.
            </p>
          </div>
        </div>

        {/* Author Box */}
        <div className="max-w-3xl mx-auto px-6 mt-16">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg stroke="currentColor" fill="none" strokeWidth={1.5} viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-ink)] mb-2">
                Reviewed by Body1MD Primary Care & Wellness
              </div>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Our team is committed to providing evidence-based patient education that empowers you to make informed decisions about your health. This article reflects current medical understanding and clinical best practices in primary care.
              </p>
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
            <Link href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg stroke="currentColor" fill="none" strokeWidth={1.5} viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  More Health Resources
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Explore our library of patient education articles covering a wide range of health topics.
                </p>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/services" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg stroke="currentColor" fill="none" strokeWidth={1.5} viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Our Primary Care Services
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Discover comprehensive primary care services designed for your health and wellness.
                </p>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/contact" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg stroke="currentColor" fill="none" strokeWidth={1.5} viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Schedule a Consultation
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Get personalized care for your digestive health concerns. Contact us today.
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
            Our team is here to help.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  )
}