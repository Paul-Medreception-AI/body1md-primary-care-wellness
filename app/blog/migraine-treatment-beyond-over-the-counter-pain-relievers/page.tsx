import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Migraine Treatment Beyond Over-the-Counter Pain Relievers',
  description: 'Discover effective migraine treatments beyond OTC medications, from prescription options to lifestyle interventions and preventive strategies for lasting relief.',
  alternates: { canonical: '/blog/migraine-treatment-beyond-over-the-counter-pain-relievers' },
  openGraph: {
    title: 'Migraine Treatment Beyond Over-the-Counter Pain Relievers',
    description: 'Discover effective migraine treatments beyond OTC medications, from prescription options to lifestyle interventions and preventive strategies for lasting relief.',
    url: 'https://body1md.com/blog/migraine-treatment-beyond-over-the-counter-pain-relievers',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/images/blog/migraine-treatment-beyond-over-the-counter-pain-relievers.jpg', alt: 'Woman with closed eyes pressing her temples during a migraine' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Migraine Treatment Beyond Over-the-Counter Pain Relievers',
    description: 'Discover effective migraine treatments beyond OTC medications, from prescription options to lifestyle interventions and preventive strategies for lasting relief.',
    images: ['/images/blog/migraine-treatment-beyond-over-the-counter-pain-relievers.jpg']
  }
}

export default function MigraineTreatmentArticle() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
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
            Migraine Treatment Beyond Over-the-Counter Pain Relievers
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>October 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>7 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <span>Dr. Andrew Hemmen, MD</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-10">
        <div className="relative w-full h-64 md:h-[480px] rounded-2xl overflow-hidden shadow-xl">
          <Image src="/images/blog/migraine-treatment-beyond-over-the-counter-pain-relievers.jpg" alt="Woman with closed eyes pressing her temples during a migraine" fill priority className="object-cover object-[center_20%]" sizes="(max-width: 896px) 100vw, 896px" />
        </div>
      </div>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening */}
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            You're familiar with the warning signs: the visual disturbances, the sensitivity to light and sound, the throbbing pain that makes even the simplest tasks feel impossible. For millions of Americans living with migraines, over-the-counter pain relievers offer only temporary (and often incomplete) relief. If you've found yourself taking ibuprofen or acetaminophen more frequently, experiencing diminishing returns, or suffering through attacks that last for days, it's time to explore the comprehensive treatment options that modern medicine has to offer.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Migraines are not just bad headaches. They're a complex neurological condition that affects approximately 39 million Americans, with women being three times more likely to experience them than men. Understanding that migraines require specialized treatment, not just symptom management, is the first step toward finding lasting relief.
          </p>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Understanding Why OTC Medications Fall Short
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            Over-the-counter pain relievers like ibuprofen, naproxen, and acetaminophen work by reducing inflammation and blocking pain signals. While they can be effective for mild headaches or occasional migraines, they have significant limitations for chronic migraine sufferers.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            First, frequent use of OTC medications can lead to medication overuse headaches (also called rebound headaches), creating a vicious cycle where the very medications you're taking to relieve pain actually trigger more frequent attacks. Second, these medications don't address the underlying mechanisms of migraines. They simply mask symptoms temporarily. Third, for moderate to severe migraines, OTC options often lack the potency needed to provide meaningful relief.
          </p>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
            "Effective migraine treatment isn't just about stopping the pain. It's about reducing frequency, severity, and the impact on your daily life."
          </blockquote>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Prescription Acute Treatments: Stopping Migraines in Their Tracks
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            When a migraine strikes, prescription acute treatments offer significantly more targeted and effective relief than OTC options. The most widely prescribed class of medications for acute migraine treatment is triptans, which work by constricting blood vessels and blocking pain pathways in the brain.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Medications like sumatriptan, rizatriptan, and eletriptan have been shown in clinical trials to provide complete pain relief for many patients within two hours. They're most effective when taken at the first sign of a migraine, before the pain becomes severe. Triptans are available in multiple forms (tablets, nasal sprays, and injections), allowing for personalized treatment based on your symptoms and preferences.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Newer options include gepants (CGRP antagonists) such as ubrogepant and rimegepant, which work differently than triptans by blocking a protein involved in migraine development. These medications may be particularly beneficial for people who can't take triptans due to cardiovascular concerns or who haven't responded well to other treatments.
          </p>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Preventive Medications: Reducing Migraine Frequency
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            If you experience four or more migraines per month, or if your attacks are particularly severe or long-lasting, preventive medication may transform your quality of life. Unlike acute treatments that stop migraines once they start, preventive medications are taken daily to reduce the frequency and severity of attacks.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Several classes of medications have proven effective for migraine prevention:
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-relaxed"><strong>Beta-blockers</strong> like propranolol and metoprolol, originally developed for blood pressure and heart conditions, have been shown to reduce migraine frequency by 40-50% in many patients.</p>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-relaxed"><strong>Antidepressants</strong> such as amitriptyline can prevent migraines by affecting neurotransmitter levels in the brain, and may be particularly helpful if you also experience depression or anxiety.</p>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-relaxed"><strong>Anti-seizure medications</strong> like topiramate and valproate have proven effective for migraine prevention, though they require careful monitoring due to potential side effects.</p>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-relaxed"><strong>CGRP monoclonal antibodies</strong> represent a breakthrough in migraine prevention. Medications like erenumab, fremanezumab, and galcanezumab are given as monthly or quarterly injections and specifically target the biological pathways involved in migraines. Clinical trials show they can reduce monthly migraine days by 50% or more for many patients, with relatively few side effects.</p>
            </div>
          </div>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Interventional Treatments: Beyond Pills
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            For some patients, non-medication approaches offer valuable alternatives or complementary treatments:
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Botox injections</strong> have been FDA-approved for chronic migraine prevention since 2010. Administered every 12 weeks, Botox injections around the head and neck can significantly reduce migraine frequency in people who experience 15 or more headache days per month. The treatment involves multiple small injections and typically takes 10-15 minutes in a healthcare provider's office.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Nerve blocks</strong> involve injecting local anesthetic and sometimes corticosteroids around specific nerves in the head and neck. These can provide relief lasting weeks to months and may be particularly helpful for patients with occipital neuralgia or cervicogenic headaches contributing to their migraines.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Neuromodulation devices</strong> offer drug-free options for both acute and preventive treatment. FDA-approved devices use electrical or magnetic stimulation to affect nerve pathways involved in migraines. While these technologies are newer and may not be covered by all insurance plans, they represent promising options for patients who prefer non-pharmaceutical approaches.
          </p>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Lifestyle Interventions: The Foundation of Migraine Management
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            While medications and procedures play crucial roles in migraine treatment, lifestyle modifications form the foundation of comprehensive migraine management. Research consistently shows that identifying and avoiding triggers, combined with healthy habits, can significantly reduce migraine frequency.
          </p>

          <div className="bg-[var(--color-cream)] rounded-lg p-6 my-8">
            <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-4">Evidence-Based Lifestyle Strategies:</h3>
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed">Maintain consistent sleep schedules, since both insufficient and excessive sleep can trigger migraines</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed">Stay well-hydrated throughout the day; dehydration is a common migraine trigger</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed">Eat regular meals to avoid blood sugar fluctuations that can precipitate attacks</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed">Practice stress management through meditation, yoga, or cognitive behavioral therapy</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed">Exercise regularly, but avoid intense workouts that might trigger migraines; moderate aerobic activity is often beneficial</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed">Keep a headache diary to identify your personal triggers, which may include specific foods, weather changes, hormonal fluctuations, or sensory stimuli</p>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Creating Your Personalized Treatment Plan
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            There's no one-size-fits-all approach to migraine treatment. What works beautifully for one person may be ineffective for another, which is why working with a healthcare provider who understands migraines is essential. Your ideal treatment plan might include a combination of acute medications for when migraines strike, preventive medications or interventions to reduce frequency, and lifestyle modifications to address triggers and promote overall brain health.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The good news is that migraine treatment has advanced dramatically in recent years. With the right combination of therapies tailored to your specific situation, most people can achieve significant improvement in migraine frequency, severity, and impact on daily life. It may take some trial and adjustment to find your optimal treatment approach, but the journey toward better migraine control is well worth taking.
          </p>

          {/* Closing */}
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If you're relying solely on over-the-counter medications to manage your migraines, you're likely living with more pain and disability than necessary. Today's comprehensive treatment options can help you reclaim the days lost to migraines and improve your quality of life. The first step is having a conversation with a healthcare provider who can evaluate your specific situation and develop a treatment plan tailored to your needs.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base font-semibold">
            Don't let migraines control your life. Reach out to discuss the full range of treatment options available to you and start your journey toward fewer, less severe attacks.
          </p>
        </div>

        {/* Author Box */}
        <div className="max-w-3xl mx-auto px-6 mt-16">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-2">Reviewed by Dr. Andrew Hemmen, MD</h3>
              <p className="text-[var(--color-muted)] leading-relaxed text-sm">
                Dr. Andrew Hemmen is a board-certified internal medicine physician who has cared for patients in New Mexico since 2008. At Body1MD in Los Ranchos de Albuquerque, he provides evidence-based patient education and direct primary care.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Link href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">More Patient Education Articles</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">Explore our complete library of health and wellness resources.</p>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/services/chronic-disease-management" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Chronic Disease Management</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">Comprehensive care for ongoing conditions, including headache disorders.</p>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/book" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Schedule a Consultation</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">Discuss your migraine treatment options with Dr. Hemmen.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-xl mb-8 text-white/90">Dr. Hemmen is here to help.</p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  )
}