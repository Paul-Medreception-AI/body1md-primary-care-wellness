import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Eczema and Atopic Dermatitis: Beyond Moisturizer',
  description: 'Discover comprehensive eczema and atopic dermatitis treatment strategies beyond basic moisturizing, from identifying triggers to medical therapies that restore skin health.',
  alternates: { canonical: '/blog/eczema-and-atopic-dermatitis-beyond-moisturizer' },
  openGraph: {
    title: 'Eczema and Atopic Dermatitis: Beyond Moisturizer',
    description: 'Discover comprehensive eczema and atopic dermatitis treatment strategies beyond basic moisturizing, from identifying triggers to medical therapies that restore skin health.',
    url: 'https://body1md.com/blog/eczema-and-atopic-dermatitis-beyond-moisturizer',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/images/blog/eczema-and-atopic-dermatitis-beyond-moisturizer.jpg', alt: 'Man scratching an itchy patch of skin on his forearm' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eczema and Atopic Dermatitis: Beyond Moisturizer',
    description: 'Discover comprehensive eczema and atopic dermatitis treatment strategies beyond basic moisturizing, from identifying triggers to medical therapies that restore skin health.',
    images: ['/images/blog/eczema-and-atopic-dermatitis-beyond-moisturizer.jpg'],
  },
}

export default function EczemaAtopicDermatitisPage() {
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
            Eczema and Atopic Dermatitis: Beyond Moisturizer
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
          <Image src="/images/blog/eczema-and-atopic-dermatitis-beyond-moisturizer.jpg" alt="Man scratching an itchy patch of skin on his forearm" fill priority className="object-cover" sizes="(max-width: 896px) 100vw, 896px" />
        </div>
      </div>

      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[var(--color-ink)] leading-loose text-base">
            <p className="text-xl mb-6">
              You've tried every cream on the drugstore shelf. You carry travel-sized tubes in your purse, desk drawer, and car. Yet the itching returns, the red patches spread, and you find yourself scratching unconsciously during meetings or waking at 2 a.m. with raw, bleeding skin. If this sounds familiar, you're not alone, and more importantly, moisturizer alone isn't the answer.
            </p>
            
            <p className="mb-6">
              Eczema, particularly atopic dermatitis, affects over 31 million Americans and can profoundly impact quality of life. While keeping skin hydrated remains essential, effective management requires understanding the complex immune and barrier dysfunction driving your symptoms, and implementing strategies that address the root causes.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              What Is Atopic Dermatitis?
            </h2>
            
            <p className="mb-6">
              Atopic dermatitis is a chronic inflammatory skin condition characterized by intensely itchy, red, scaly patches that typically appear on the hands, feet, inner elbows, behind knees, and on the face and scalp. Unlike simple dry skin, atopic dermatitis involves both a compromised skin barrier (imagine a brick wall with crumbling mortar) and an overactive immune response that creates persistent inflammation.
            </p>
            
            <p className="mb-6">
              This isn't just a cosmetic nuisance. The relentless itch-scratch cycle can disrupt sleep, impair concentration, trigger anxiety and depression, and in severe cases lead to skin infections. Children with atopic dermatitis often struggle in school, while adults may avoid social situations or physical activities that trigger flares.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Why Moisturizer Isn't Enough
            </h2>
            
            <p className="mb-6">
              Traditional moisturizers work by adding water to the outer skin layer and creating an occlusive barrier to prevent evaporation. This helps, but it doesn't address the immune dysfunction that perpetuates inflammation, the bacterial overgrowth that often complicates eczema, or the environmental triggers that spark flares.
            </p>
            
            <p className="mb-6">
              Think of atopic dermatitis like a house fire. Moisturizer is the water hose: necessary, but not sufficient. You also need to eliminate the fuel source (triggers), repair the structural damage (barrier restoration), and prevent re-ignition (immune modulation).
            </p>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
              <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
                "Effective eczema management requires a comprehensive approach that addresses inflammation, rebuilds the skin barrier, and identifies individual triggers. Moisturizer is just one piece of a larger therapeutic puzzle."
              </p>
            </div>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Comprehensive Treatment Strategies
            </h2>
            
            <p className="mb-6">
              Modern atopic dermatitis treatment involves multiple evidence-based interventions working together:
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Barrier Repair:</strong> Ceramide-containing moisturizers specifically formulated for eczema repair the lipid matrix between skin cells, addressing structural deficits that over-the-counter lotions cannot fix.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Topical Anti-Inflammatories:</strong> Prescription corticosteroids and non-steroidal options like calcineurin inhibitors directly suppress the immune overreaction causing inflammation.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Microbiome Management:</strong> Bleach baths (properly diluted) and antimicrobial therapies address Staphylococcus aureus colonization that worsens eczema and increases infection risk.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Systemic Therapies:</strong> For moderate to severe cases, newer biologic medications and JAK inhibitors target specific immune pathways with remarkable efficacy and improved safety profiles.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Environmental Control:</strong> Identifying and minimizing exposure to triggers like harsh soaps, fragrances, wool fabrics, extreme temperatures, and specific allergens prevents flares before they start.
                </div>
              </div>
            </div>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              The Role of Diet and Allergies
            </h2>
            
            <p className="mb-6">
              Food allergies contribute to eczema in approximately 30% of children with moderate to severe disease, though the relationship is less common in adults. Common culprits include milk, eggs, peanuts, wheat, soy, and shellfish. However, restrictive diets should never be initiated without proper allergy testing, since eliminating foods unnecessarily can lead to nutritional deficiencies without improving skin symptoms.
            </p>
            
            <p className="mb-6">
              Environmental allergies to dust mites, pet dander, pollen, and mold can also trigger or worsen atopic dermatitis. Comprehensive allergy evaluation helps distinguish which exposures truly affect your skin versus those that are coincidental, allowing you to focus interventions where they'll make a real difference.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Breaking the Itch-Scratch Cycle
            </h2>
            
            <p className="mb-6">
              The itch-scratch cycle perpetuates eczema: inflammation causes itching, scratching damages skin further, damaged skin becomes more inflamed. Breaking this cycle requires multi-pronged intervention:
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  Keep nails trimmed short and consider cotton gloves at night to minimize unconscious scratching damage during sleep.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  Use cool compresses during intense itch episodes rather than scratching, since the cooling sensation can temporarily override itch signals.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  Apply medicated treatments immediately after bathing when skin is still damp to maximize absorption and seal in moisture.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  Address psychological stress, which can both trigger flares and intensify itch perception. Mind-body techniques like cognitive behavioral therapy have shown benefit.
                </div>
              </div>
            </div>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              When to Seek Professional Help
            </h2>
            
            <p className="mb-6">
              If you're applying moisturizer multiple times daily yet still experiencing persistent itching, sleep disruption, skin infections, or eczema that interferes with work or social activities, it's time for comprehensive evaluation. A primary care physician experienced in dermatologic conditions can assess disease severity, identify complicating factors, initiate appropriate prescription therapies, and coordinate specialty referrals when needed.
            </p>
            
            <p className="mb-6">
              Severe atopic dermatitis is not a cosmetic inconvenience. It's a chronic disease with profound quality-of-life impacts that deserves proper medical management. Modern treatments offer dramatic improvement for patients who've struggled for years, but they require proper diagnosis, individualized treatment planning, and ongoing monitoring to optimize outcomes.
            </p>

            <p className="mb-6">
              You don't have to live with relentless itching, embarrassing skin lesions, and the exhaustion that comes from disturbed sleep. Effective treatment exists beyond the moisturizer aisle. It starts with understanding your unique disease triggers and accessing the full spectrum of evidence-based therapies available today.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 mt-12">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
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
                Dr. Andrew Hemmen is a board-certified internal medicine physician who has cared for patients in New Mexico since 2008. At Body1MD in Los Ranchos de Albuquerque, he provides evidence-based patient education and direct primary care. He partners with you to understand your health concerns and develop personalized treatment plans that address root causes, not just symptoms.
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
            <Link href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Patient Education Resources
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Browse our complete library of health articles, guides, and educational content.
                </p>
              </div>
            </Link>

            <Link href="/services" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Our Services
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Explore comprehensive primary care services designed around your unique health needs.
                </p>
              </div>
            </Link>

            <Link href="/contact" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Schedule a Consultation
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Ready to discuss your skin health? Contact the office to schedule a visit with Dr. Hemmen.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

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
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  )
}