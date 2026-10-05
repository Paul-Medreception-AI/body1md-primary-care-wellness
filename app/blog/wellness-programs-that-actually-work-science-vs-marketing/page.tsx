import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Wellness Programs That Actually Work: Science vs Marketing',
  description: 'Learn to distinguish evidence-based wellness programs from marketing hype. Discover what research says about workplace wellness, weight loss programs, and preventive care.',
  alternates: { canonical: '/blog/wellness-programs-that-actually-work-science-vs-marketing' },
  openGraph: {
    title: 'Wellness Programs That Actually Work: Science vs Marketing',
    description: 'Learn to distinguish evidence-based wellness programs from marketing hype. Discover what research says about workplace wellness, weight loss programs, and preventive care.',
    url: 'https://body1md.com/blog/wellness-programs-that-actually-work-science-vs-marketing',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/images/blog/wellness-programs-that-actually-work-science-vs-marketing.jpg', alt: 'Adults of different ages standing in a yoga class with hands pressed together' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wellness Programs That Actually Work: Science vs Marketing',
    description: 'Learn to distinguish evidence-based wellness programs from marketing hype. Discover what research says about workplace wellness, weight loss programs, and preventive care.',
    images: ['/images/blog/wellness-programs-that-actually-work-science-vs-marketing.jpg']
  }
}

export default function WellnessProgramsArticle() {
  return (
    <main className="min-h-screen bg-white">
      <article>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
          <div className="max-w-4xl mx-auto px-6">
            {/* Breadcrumb */}
            <div className="text-sm text-white/80 mb-6 flex items-center gap-2">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
              <span>›</span>
              <span>Article</span>
            </div>

            {/* Category */}
            <div className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</div>

            {/* Title */}
            <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
              Wellness Programs That Actually Work: Science vs Marketing
            </h1>

            {/* Meta */}
            <div className="flex items-center justify-center gap-6 text-sm text-white/80">
              <span>Published October 2026</span>
              <span>•</span>
              <span>7 min read</span>
              <span>•</span>
              <span>Dr. Andrew Hemmen, MD</span>
            </div>
          </div>
        </section>

        {/* Hero image */}
        <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-10">
          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image src="/images/blog/wellness-programs-that-actually-work-science-vs-marketing.jpg" alt="Adults of different ages standing in a yoga class with hands pressed together" fill priority className="object-cover" sizes="(max-width: 896px) 100vw, 896px" />
          </div>
        </div>

        {/* Article Body */}
        <section className="bg-white py-20">
          <div className="max-w-3xl mx-auto px-6">
            
            {/* Opening */}
            <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
              <p className="mb-6">
                You've seen the ads: miraculous transformations in 30 days, toxins flushed from your body, stress melted away with a simple supplement. The wellness industry generates billions annually with promises that sound too good to be true, because many of them are. Yet buried beneath the marketing hype, there are wellness programs backed by rigorous research that genuinely improve health outcomes. The challenge is knowing which is which.
              </p>
              <p className="mb-6">
                In primary care, we see patients invest time, money, and hope into wellness programs that range from evidence-based interventions to outright snake oil. The difference matters profoundly, not just for your wallet but for your health. Let's cut through the noise and examine what science actually says about wellness programs.
              </p>
            </div>

            {/* Section 1 */}
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              The Wellness Industry vs Evidence-Based Medicine
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
              <p className="mb-6">
                The global wellness market exceeds $4.5 trillion, encompassing everything from meditation apps to corporate wellness initiatives to elaborate detox retreats. This industry operates largely outside the regulatory framework that governs medicine, meaning products and programs can make bold claims without the clinical trials required for pharmaceuticals.
              </p>
              <p className="mb-6">
                Evidence-based wellness, by contrast, refers to interventions supported by peer-reviewed research, randomized controlled trials, and systematic reviews. These programs may be less flashy (they rarely promise overnight transformations), but they deliver measurable, sustainable improvements in health markers, quality of life, and longevity.
              </p>
              <p className="mb-6">
                The key distinction? Evidence-based programs acknowledge that health is complex, multifactorial, and requires sustained effort. Marketing-driven programs oversimplify, promising shortcuts that biology simply doesn't allow.
              </p>
            </div>

            {/* Section 2 */}
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Workplace Wellness: Mixed Results
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
              <p className="mb-6">
                Corporate wellness programs are ubiquitous, with approximately 80% of large employers offering some form of health promotion initiative. The pitch sounds compelling: healthier employees mean lower healthcare costs and higher productivity. But does the science support this?
              </p>
              <p className="mb-6">
                A landmark 2019 study published in JAMA found that comprehensive workplace wellness programs showed no significant effects on clinical measures like blood pressure, BMI, or glucose levels after 18 months. Participation rates were disappointingly low, and those who did participate tended to be healthier to begin with, a classic example of selection bias.
              </p>
              <p className="mb-6">
                However, not all workplace wellness is created equal. Programs that succeed share specific characteristics:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Strong leadership support and cultural integration, not just voluntary add-ons</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Personalized interventions rather than one-size-fits-all approaches</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Access to professional support (physicians, dietitians, mental health counselors)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Environmental changes (healthier cafeteria options, standing desks, walking paths)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Long-term commitment measured in years, not months</span>
                </li>
              </ul>
            </div>

            {/* Pull Quote */}
            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
              <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
                "The programs that genuinely move the needle on health aren't the ones promising quick fixes. They're the ones addressing the underlying systems that shape our daily choices."
              </p>
            </div>

            {/* Section 3 */}
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Weight Loss Programs: Following the Evidence
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
              <p className="mb-6">
                The weight loss industry is perhaps the most saturated with pseudoscience, from detox teas to extreme fasting protocols to expensive supplements with proprietary blends. Meanwhile, decades of research point to what actually works, and it's less profitable to market.
              </p>
              <p className="mb-6">
                The National Weight Control Registry, tracking over 10,000 individuals who've maintained significant weight loss for at least a year, reveals common patterns: regular physical activity (about 60 minutes daily), consistent eating patterns, breakfast consumption, weekly weight monitoring, and limited television viewing. No magic pills, no secret foods, just sustained behavioral changes.
              </p>
              <p className="mb-6">
                Structured programs with the strongest evidence share these features:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Regular weigh-ins and objective tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Behavioral counseling focused on sustainable habit change</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Modest caloric deficits (500-750 calories daily) rather than extreme restriction</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Physical activity as a core component, not optional</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Long-term maintenance support extending 12-24 months</span>
                </li>
              </ul>
              <p className="mb-6">
                Programs like the Diabetes Prevention Program, a lifestyle intervention proven to reduce diabetes risk by 58%, exemplify evidence-based weight management. They're not glamorous, but they work.
              </p>
            </div>

            {/* Section 4 */}
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Mental Health and Stress Management: What Works
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
              <p className="mb-6">
                Mental wellness programs have exploded in popularity, from meditation apps to corporate resilience training. Here, the science is more encouraging, but context matters enormously.
              </p>
              <p className="mb-6">
                Mindfulness-based stress reduction (MBSR) has been extensively studied since Jon Kabat-Zinn developed the program in 1979. Meta-analyses consistently show moderate benefits for anxiety, depression, and stress across diverse populations. Cognitive-behavioral therapy (CBT) remains the gold standard for many conditions, with robust evidence across decades of research.
              </p>
              <p className="mb-6">
                However, app-based interventions show far more variable results. While convenient and affordable, their effectiveness depends heavily on engagement, and dropout rates are staggeringly high. A 2019 systematic review found that fewer than 4% of users were still active after 15 days.
              </p>
              <p className="mb-6">
                Programs that demonstrate lasting mental health benefits typically include:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Professional guidance from trained therapists or counselors</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Structured protocols based on established therapeutic frameworks</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Regular practice or session attendance (consistency matters more than duration)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Integration with comprehensive care, especially for moderate to severe symptoms</span>
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Preventive Care: The Unsexy Winner
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
              <p className="mb-6">
                Perhaps the most evidence-based wellness program is also the least marketed: routine preventive care. Cancer screenings, vaccinations, blood pressure monitoring, cholesterol management: these interventions have prevented millions of deaths and extend both lifespan and healthspan.
              </p>
              <p className="mb-6">
                The U.S. Preventive Services Task Force systematically reviews evidence and issues recommendations graded by strength of evidence. These aren't based on testimonials or proprietary research. They represent consensus from independent experts analyzing all available data.
              </p>
              <p className="mb-6">
                Yet preventive care suffers from a perception problem. It's not exciting. It doesn't promise transformation. It requires patience (sometimes years) to see benefits. And it's often entirely invisible; we never know which cancer screening saved our life because we never developed that cancer.
              </p>
              <p className="mb-6">
                This is precisely why evidence-based medicine matters. The interventions that work often lack the immediate gratification and dramatic narratives that drive marketing campaigns. But they're the ones that fundamentally alter population health trajectories.
              </p>
            </div>

            {/* Section 6 */}
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Red Flags: When to Be Skeptical
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
              <p className="mb-6">
                Learning to spot pseudoscience protects both your health and your finances. Be wary when you encounter:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Promises of rapid, dramatic results without sustained effort</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Claims that one product or program treats multiple unrelated conditions</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Reliance on testimonials rather than published research</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>"Secret" ingredients or "doctors don't want you to know" rhetoric</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Pressure to purchase immediately or in large quantities</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Vague scientific language ("quantum healing," "detoxification," "boost immunity")</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Dismissal of mainstream medicine as conspiratorial or profit-driven</span>
                </li>
              </ul>
              <p className="mb-6">
                When evaluating any wellness program, ask: Where is the peer-reviewed research? Has this been tested in randomized controlled trials? Are the results published in reputable medical journals? If the answers are vague or dismissive, walk away.
              </p>
            </div>

            {/* Closing */}
            <div className="text-[var(--color-ink)] leading-loose text-base mb-8 mt-12">
              <p className="mb-6">
                The good news is that evidence-based wellness doesn't require expensive programs or exotic interventions. The fundamentals (regular physical activity, balanced nutrition, adequate sleep, stress management, social connection, and preventive medical care) remain the most powerful tools we have for optimizing health.
              </p>
              <p className="mb-6">
                The challenge is that these fundamentals require exactly what wellness marketing tries to circumvent: time, consistency, and patience. There are no shortcuts to sustainable health improvement. But when you invest in evidence-based approaches, you're building a foundation that genuinely works, not just creating the illusion of progress.
              </p>
              <p className="mb-6">
                If you're navigating wellness programs and need guidance distinguishing science from marketing, that's precisely where primary care excels. Dr. Hemmen can help you evaluate programs, set realistic goals, and design a sustainable approach tailored to your specific health needs. Your wellness journey deserves to be built on evidence, not hype.
              </p>
            </div>

          </div>
        </section>

        {/* Author Box */}
        <section className="bg-white py-12">
          <div className="max-w-3xl mx-auto px-6">
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
              <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
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
          </div>
        </section>

        {/* Related Articles */}
        <section className="bg-[var(--color-cream)] py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Card 1 */}
              <Link href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="aspect-[16/9] bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                  <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-2">Patient Education</div>
                  <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    Health Resources & Articles
                  </h4>
                  <p className="text-[var(--color-muted)] text-sm">
                    Explore our library of evidence-based health information and wellness guides.
                  </p>
                </div>
              </Link>

              {/* Card 2 */}
              <Link href="/services" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="aspect-[16/9] bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                  <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-2">Our Services</div>
                  <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    Comprehensive Primary Care
                  </h4>
                  <p className="text-[var(--color-muted)] text-sm">
                    Discover our evidence-based approach to preventive care and chronic disease management.
                  </p>
                </div>
              </Link>

              {/* Card 3 */}
              <Link href="/contact" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="aspect-[16/9] bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                  <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-2">Get Started</div>
                  <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    Schedule a Consultation
                  </h4>
                  <p className="text-[var(--color-muted)] text-sm">
                    Connect with Dr. Hemmen to discuss your health goals and wellness plan.
                  </p>
                </div>
              </Link>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
            <p className="text-xl mb-8 text-white/90">Dr. Hemmen is here to help.</p>
            <Link 
              href="/contact"
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-medium px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Get In Touch Today
            </Link>
          </div>
        </section>

      </article>
    </main>
  )
}