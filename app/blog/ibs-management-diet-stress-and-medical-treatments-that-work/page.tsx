import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'IBS Management: Diet, Stress, and Medical Treatments That Work',
  description: 'Discover evidence-based strategies for managing IBS including dietary changes, stress reduction techniques, and proven medical treatments for lasting relief.',
  alternates: { canonical: '/blog/ibs-management-diet-stress-and-medical-treatments-that-work' },
  openGraph: {
    title: 'IBS Management: Diet, Stress, and Medical Treatments That Work',
    description: 'Discover evidence-based strategies for managing IBS including dietary changes, stress reduction techniques, and proven medical treatments for lasting relief.',
    url: 'https://body1md.com/blog/ibs-management-diet-stress-and-medical-treatments-that-work',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/images/blog/ibs-management-diet-stress-and-medical-treatments-that-work.jpg', alt: 'Woman lying on a couch holding her stomach in discomfort' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IBS Management: Diet, Stress, and Medical Treatments That Work',
    description: 'Discover evidence-based strategies for managing IBS including dietary changes, stress reduction techniques, and proven medical treatments for lasting relief.',
    images: ['/images/blog/ibs-management-diet-stress-and-medical-treatments-that-work.jpg']
  }
}

export default function IBSManagementArticle() {
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
            IBS Management: Diet, Stress, and Medical Treatments That Work
          </h1>
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
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
          <Image src="/images/blog/ibs-management-diet-stress-and-medical-treatments-that-work.jpg" alt="Woman lying on a couch holding her stomach in discomfort" fill priority className="object-cover" sizes="(max-width: 896px) 100vw, 896px" />
        </div>
      </div>

      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[var(--color-ink)] leading-loose text-base">
            <p className="text-xl mb-6 font-light">
              You're not imagining it, and you're not alone. That unpredictable cramping, the urgent bathroom trips, the constant worry about when symptoms will strike next: irritable bowel syndrome affects 10-15% of adults worldwide, yet many people suffer in silence, unsure where to turn for real relief.
            </p>
            
            <p className="mb-6">
              The good news? IBS is highly manageable once you understand the triggers and treatment options available. While there's no one-size-fits-all cure, a comprehensive approach combining dietary modifications, stress management, and targeted medical treatments can dramatically improve quality of life for most people living with IBS.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Understanding IBS: More Than Just Digestive Discomfort
            </h2>
            
            <p className="mb-6">
              Irritable bowel syndrome is a functional gastrointestinal disorder, meaning the digestive tract looks normal but doesn't work properly. It's characterized by recurring abdominal pain associated with changes in bowel habits, whether constipation, diarrhea, or alternating between both.
            </p>
            
            <p className="mb-6">
              What makes IBS particularly challenging is its complexity. Unlike a simple infection or structural problem, IBS involves a intricate interplay between gut motility, visceral sensitivity, the gut-brain axis, inflammation, and the microbiome. This is why treatment requires addressing multiple factors simultaneously rather than seeking a single magic bullet.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              The Dietary Foundation: What You Eat Matters
            </h2>
            
            <p className="mb-6">
              Diet is often the first, and most impactful, place to start with IBS management. Certain foods can trigger symptoms by affecting gut motility, causing gas production, or irritating the intestinal lining. The challenge is that triggers vary significantly from person to person.
            </p>

            <p className="mb-4 font-semibold text-[var(--color-ink)]">The Low FODMAP Approach:</p>
            
            <p className="mb-6">
              One of the most researched dietary interventions for IBS is the low FODMAP diet. FODMAPs (Fermentable Oligosaccharides, Disaccharides, Monosaccharides, and Polyols) are short-chain carbohydrates that are poorly absorbed in the small intestine. When they reach the colon, they're rapidly fermented by gut bacteria, producing gas and drawing water into the intestines, triggering IBS symptoms.
            </p>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
              <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
                "Studies show that 70-75% of IBS patients experience significant symptom improvement on a properly implemented low FODMAP diet, making it one of the most effective evidence-based interventions available."
              </p>
            </div>

            <p className="mb-4 font-semibold text-[var(--color-ink)]">Key dietary strategies that help:</p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Start with an elimination phase (2-6 weeks) removing high FODMAP foods, then systematically reintroduce them to identify personal triggers</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Keep a detailed food and symptom diary to identify patterns, since timing matters as much as the food itself</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Eat regular, smaller meals rather than large meals that can overwhelm the digestive system</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Stay well-hydrated, especially if you experience diarrhea-predominant IBS</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Limit caffeine, alcohol, and artificial sweeteners, which commonly trigger symptoms</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Consider soluble fiber supplements (like psyllium) for constipation-predominant IBS, but introduce slowly</span>
              </li>
            </ul>

            <p className="mb-6">
              Working with a registered dietitian who specializes in digestive health can be invaluable, as they can guide you through elimination and reintroduction phases while ensuring nutritional adequacy.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              The Stress Connection: Calming the Gut-Brain Axis
            </h2>
            
            <p className="mb-6">
              The relationship between stress and IBS is not just correlation. It's causation. The gut and brain communicate constantly through the vagus nerve and chemical messengers. When you're stressed, your brain sends signals that can alter gut motility, increase pain sensitivity, and change the gut's barrier function.
            </p>
            
            <p className="mb-6">
              Many IBS patients notice their symptoms worsen during stressful periods or that anxiety about symptoms actually triggers those very symptoms, creating a vicious cycle. Breaking this cycle requires addressing both the psychological and physiological aspects of stress.
            </p>

            <p className="mb-4 font-semibold text-[var(--color-ink)]">Evidence-based stress management techniques:</p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Gut-directed hypnotherapy:</strong> Multiple studies show this specialized form of hypnosis significantly reduces IBS symptoms, with effects lasting months after treatment</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Cognitive behavioral therapy (CBT):</strong> Helps identify and change thought patterns that worsen symptoms and teaches coping strategies</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Mindfulness meditation:</strong> Regular practice reduces visceral pain perception and anxiety associated with IBS</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Progressive muscle relaxation:</strong> Helps reduce overall tension that can affect gut function</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Regular exercise:</strong> Moderate physical activity improves gut motility, reduces stress, and improves overall symptom severity</span>
              </li>
            </ul>

            <p className="mb-6">
              Don't underestimate the power of these interventions. They're not just "complementary" therapies but core components of comprehensive IBS treatment, often as effective as medication for many patients.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Medical Treatments: When Lifestyle Changes Need Support
            </h2>
            
            <p className="mb-6">
              While dietary and stress management strategies form the foundation of IBS treatment, medication can provide additional relief, especially for moderate to severe symptoms. The choice of medication depends on your primary symptom pattern.
            </p>

            <p className="mb-4 font-semibold text-[var(--color-ink)]">For diarrhea-predominant IBS (IBS-D):</p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Loperamide (Imodium) for acute symptom control</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Rifaximin, a minimally absorbed antibiotic that can reset gut bacteria</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Eluxadoline or alosetron for more severe, persistent diarrhea</span>
              </li>
            </ul>

            <p className="mb-4 font-semibold text-[var(--color-ink)]">For constipation-predominant IBS (IBS-C):</p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Linaclotide or plecanatide, which increase intestinal fluid and motility</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Polyethylene glycol (MiraLAX) for gentle, daily use</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Lubiprostone for chronic constipation with abdominal pain</span>
              </li>
            </ul>

            <p className="mb-4 font-semibold text-[var(--color-ink)]">For pain and general symptom management:</p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Antispasmodics like hyoscyamine or dicyclomine for cramping</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Low-dose tricyclic antidepressants (like amitriptyline) that reduce pain signaling</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>SSRIs for patients with significant anxiety or depression alongside IBS</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Peppermint oil capsules, a natural antispasmodic with good evidence for symptom relief</span>
              </li>
            </ul>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              The Role of Probiotics and Gut Health
            </h2>
            
            <p className="mb-6">
              Research into the gut microbiome has revealed that many IBS patients have alterations in their intestinal bacteria. While the field is still evolving, certain probiotic strains have shown promise in clinical trials.
            </p>
            
            <p className="mb-6">
              Multi-strain probiotics containing Bifidobacterium and Lactobacillus species appear most effective, though responses vary individually. It typically takes 4-8 weeks of consistent use to see benefits. Quality matters: look for products with research backing specific strains at appropriate doses (typically in the billions of CFUs).
            </p>

            <p className="mb-6">
              Fermented foods like yogurt, kefir, sauerkraut, and kimchi can also support gut health, though introduce them slowly if you're sensitive, as they can initially increase gas production.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Creating Your Personalized Management Plan
            </h2>
            
            <p className="mb-6">
              The most successful IBS management combines multiple strategies tailored to your specific symptom pattern, triggers, and lifestyle. This might mean starting with dietary changes while simultaneously working on stress management, then adding targeted medication if needed.
            </p>
            
            <p className="mb-6">
              Keep in mind that what works can change over time. Flare-ups happen, new stressors emerge, and your body's needs evolve. Regular check-ins with your healthcare provider allow for adjustments and ensure you're not missing any red flag symptoms that might indicate a different condition requiring investigation.
            </p>

            <p className="mb-6">
              Living with IBS can be challenging, but it doesn't have to control your life. With the right combination of dietary awareness, stress management, and medical support, most people achieve significant symptom relief and return to activities they've been avoiding. You deserve compassionate, comprehensive care that addresses all aspects of this complex condition, not just a prescription and a dismissive "it's just IBS."
            </p>

            <p className="text-lg mt-8 font-semibold text-[var(--color-ink)]">
              If you're struggling with IBS symptoms, don't wait for them to resolve on their own. A personalized treatment plan can make all the difference in your quality of life and long-term digestive health.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 my-12">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-ink)] mb-2">
                Reviewed by Dr. Andrew Hemmen, MD
              </p>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                This article is for informational purposes and does not constitute medical advice. Always consult with a qualified healthcare provider for diagnosis and treatment recommendations specific to your condition.
              </p>
            </div>
          </div>
        </div>
      </article>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2">More Patient Education Articles</h4>
              <p className="text-[var(--color-muted)] text-sm mb-4">Explore our library of health and wellness resources</p>
              <span className="text-[var(--color-accent)] text-sm font-medium hover:underline">Browse Articles →</span>
            </Link>

            <Link href="/services" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2">Our Services</h4>
              <p className="text-[var(--color-muted)] text-sm mb-4">Comprehensive care tailored to your health needs</p>
              <span className="text-[var(--color-accent)] text-sm font-medium hover:underline">Learn More →</span>
            </Link>

            <Link href="/contact" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2">Schedule a Visit</h4>
              <p className="text-[var(--color-muted)] text-sm mb-4">Get personalized care from Dr. Hemmen</p>
              <span className="text-[var(--color-accent)] text-sm font-medium hover:underline">Book Appointment →</span>
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
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-3 rounded-lg font-medium hover:bg-[var(--color-cream)] transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  )
}