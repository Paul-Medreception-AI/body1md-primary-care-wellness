import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Osteoporosis Prevention: Building Strong Bones at Every Age',
  description: 'Learn evidence-based strategies for osteoporosis prevention across all life stages. Discover nutrition, exercise, and lifestyle tips to maintain bone density and reduce fracture risk.',
  alternates: { canonical: '/blog/osteoporosis-prevention-building-strong-bones-at-every-age' },
  openGraph: {
    title: 'Osteoporosis Prevention: Building Strong Bones at Every Age',
    description: 'Learn evidence-based strategies for osteoporosis prevention across all life stages. Discover nutrition, exercise, and lifestyle tips to maintain bone density and reduce fracture risk.',
    url: 'https://body1md.com/blog/osteoporosis-prevention-building-strong-bones-at-every-age',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/images/blog/osteoporosis-prevention-building-strong-bones-at-every-age.jpg', alt: 'Smiling middle-aged woman doing strength training with a red dumbbell' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Osteoporosis Prevention: Building Strong Bones at Every Age',
    description: 'Learn evidence-based strategies for osteoporosis prevention across all life stages. Discover nutrition, exercise, and lifestyle tips to maintain bone density and reduce fracture risk.',
    images: ['/images/blog/osteoporosis-prevention-building-strong-bones-at-every-age.jpg']
  }
}

export default function OsteoporosisPreventionPage() {
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
          
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4">
            Patient Education
          </div>
          
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Osteoporosis Prevention: Building Strong Bones at Every Age
          </h1>
          
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
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
          <Image src="/images/blog/osteoporosis-prevention-building-strong-bones-at-every-age.jpg" alt="Smiling middle-aged woman doing strength training with a red dumbbell" fill priority className="object-cover" sizes="(max-width: 896px) 100vw, 896px" />
        </div>
      </div>

      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[var(--color-ink)] leading-loose text-base">
            <p className="text-xl mb-8">
              Every day, your bones quietly perform an invisible feat of construction and demolition. Old bone tissue breaks down while new bone forms, a delicate balance that keeps your skeleton strong and resilient. But what happens when that balance tips? For millions of Americans, the answer is osteoporosis: a silent disease that weakens bones, increases fracture risk, and can dramatically change quality of life. The good news? Prevention starts now, no matter your age.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Understanding Osteoporosis: More Than Just Aging
            </h2>
            
            <p className="mb-6">
              Osteoporosis literally means "porous bones." It's a condition where bone density decreases and the internal structure becomes fragile, making bones susceptible to fractures from minor falls or even everyday activities. While it's often thought of as a disease of older women, osteoporosis affects men too, and the groundwork for bone health begins much earlier than most people realize.
            </p>
            
            <p className="mb-6">
              Your bones reach peak density around age 30. After that, bone remodeling continues, but the balance gradually shifts toward more breakdown than buildup. By age 50, especially after menopause in women when estrogen levels drop, bone loss accelerates. Yet osteoporosis isn't inevitable. The habits you build throughout your life, from childhood through your golden years, significantly influence your bone strength decades later.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              The Foundation: Nutrition for Bone Health
            </h2>
            
            <p className="mb-6">
              Strong bones require specific nutrients, and the foundation starts with calcium and vitamin D. Calcium provides the structural building blocks of bone, while vitamin D enables your body to absorb that calcium effectively. The National Osteoporosis Foundation recommends adults under 50 get 1,000 mg of calcium daily, increasing to 1,200 mg for women over 50 and men over 70.
            </p>
            
            <p className="mb-6">
              But bone health isn't just about calcium supplements. Whole food sources are ideal: dairy products, leafy greens like kale and collard greens, sardines with bones, fortified plant milks, and almonds all provide bioavailable calcium. Vitamin D presents a unique challenge: few foods contain it naturally. Your skin produces it from sunlight exposure, but many people, especially those living in northern latitudes or spending most time indoors, need supplementation. Blood tests can determine your vitamin D status and guide appropriate dosing.
            </p>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
              <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
                "Peak bone mass achieved in your twenties and thirties is like a retirement account for your skeleton. The more you invest early, the longer your reserves will last."
              </p>
            </div>

            <p className="mb-6">
              Don't overlook other bone-supporting nutrients. Magnesium, vitamin K, and protein all play critical roles in bone metabolism. A balanced diet rich in fruits, vegetables, whole grains, and lean proteins provides these nutrients naturally. Conversely, excessive sodium, caffeine, and alcohol can interfere with calcium absorption or increase calcium excretion. Moderation matters.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Movement Matters: Exercise as Bone Medicine
            </h2>
            
            <p className="mb-6">
              Your bones are living tissue that responds to mechanical stress. Weight-bearing and resistance exercises stimulate bone formation, creating a stimulus that tells your body "we need stronger bones here." This principle, called Wolff's Law, explains why astronauts lose bone density in space and why tennis players have denser bones in their playing arm.
            </p>
            
            <p className="mb-6">
              Weight-bearing exercises include walking, jogging, dancing, hiking, stair climbing, and tennis: activities where your bones and muscles work against gravity. Resistance training with weights, resistance bands, or body weight creates targeted stress that builds both muscle and bone. The National Institutes of Health recommends at least 30 minutes of weight-bearing exercise most days of the week, plus resistance training two to three times weekly.
            </p>
            
            <p className="mb-6">
              Balance and flexibility exercises like yoga and tai chi deserve special mention. While they may not build bone density as directly as weight training, they significantly reduce fall risk, which is crucial because fractures, not osteoporosis itself, cause the most serious health consequences. A hip fracture after age 65 dramatically increases mortality risk and often marks the beginning of disability and loss of independence.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Risk Factors You Can and Can't Control
            </h2>
            
            <p className="mb-6">
              Some osteoporosis risk factors are non-modifiable: being female, older age, small body frame, family history, and certain ethnic backgrounds (particularly Caucasian and Asian descent) increase vulnerability. Medical conditions like rheumatoid arthritis, celiac disease, and hyperthyroidism affect bone health, as do medications including long-term corticosteroid use, some cancer treatments, and certain anti-seizure medications.
            </p>
            
            <p className="mb-6">
              But many risk factors are within your control. Smoking damages bone-forming cells and reduces calcium absorption. Excessive alcohol consumption interferes with bone remodeling and increases fall risk. A sedentary lifestyle, poor nutrition, and low body weight all compromise bone density. Addressing these modifiable factors can substantially reduce your risk regardless of your genetic predisposition.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Screening and Early Detection
            </h2>
            
            <p className="mb-6">
              Osteoporosis is called a silent disease because bone loss occurs without symptoms until a fracture happens. That's why screening is essential. A DEXA scan (dual-energy X-ray absorptiometry) measures bone mineral density and can detect osteoporosis before fractures occur. The U.S. Preventive Services Task Force recommends screening for all women 65 and older, and for younger postmenopausal women with elevated risk factors.
            </p>
            
            <p className="mb-6">
              Men should discuss screening with their healthcare provider, particularly after age 70 or earlier if risk factors are present. Early detection enables intervention (whether through lifestyle modifications, calcium and vitamin D optimization, or medication when appropriate) before debilitating fractures occur.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Practical Steps You Can Take Today
            </h2>
            
            <p className="mb-6">
              Building and maintaining bone health doesn't require dramatic lifestyle overhaul. Small, consistent actions compound over time:
            </p>

            <ul className="space-y-4 my-8">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Incorporate weight-bearing activity into your daily routine.</strong> Take the stairs, walk during lunch breaks, or try a new activity like dancing or hiking.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Prioritize calcium-rich foods at each meal.</strong> Greek yogurt with breakfast, a salad with kale at lunch, salmon for dinner. Small additions add up.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Get your vitamin D level checked.</strong> A simple blood test reveals whether supplementation would benefit you.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>If you smoke, seek support to quit.</strong> The bone-protective benefits begin almost immediately.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Fall-proof your home.</strong> Remove tripping hazards, improve lighting, install grab bars in bathrooms, and ensure rugs have non-slip backing.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Review medications with your provider.</strong> Some drugs affect bone health, and alternatives or protective strategies may be available.</span>
              </li>
            </ul>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Your Bones Are Worth the Investment
            </h2>
            
            <p className="mb-6">
              Osteoporosis prevention isn't about fearing the future. It's about empowering yourself with knowledge and action. The lifestyle choices you make today echo through decades, influencing your mobility, independence, and vitality in your later years. Whether you're in your twenties building peak bone mass, your forties maintaining what you've built, or your sixties working to preserve bone strength, it's never too early or too late to prioritize bone health.
            </p>
            
            <p className="mb-6">
              Strong bones support an active, independent life. They enable you to hike with grandchildren, garden without fear, travel confidently, and maintain the physical autonomy that undergirds quality of life. Prevention requires consistency and patience (bone responds slowly to lifestyle changes), but the investment pays lifelong dividends.
            </p>
            
            <p className="text-lg font-medium text-[var(--color-ink)] mt-8">
              If you have concerns about your bone health, risk factors for osteoporosis, or questions about screening, Dr. Hemmen can help. Schedule a consultation at our Los Ranchos de Albuquerque office to discuss your individual risk profile and develop a personalized prevention strategy that fits your life.
            </p>
          </div>
        </div>
      </article>

      <aside className="bg-[var(--color-cream)] py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 flex gap-6 items-start shadow-sm">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="font-medium text-[var(--color-ink)] mb-2">
                Reviewed by Dr. Andrew Hemmen, MD
              </div>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                This article provides general information about osteoporosis prevention and bone health. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult your healthcare provider about your individual health needs and appropriate screening.
              </p>
            </div>
          </div>
        </div>
      </aside>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Wellness Exams
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Comprehensive preventive care including bone health screening and personalized wellness planning.
                </p>
                <span className="text-[var(--color-accent)] text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>

            <Link href="/services/chronic-disease-management" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Chronic Disease Management
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Ongoing care for conditions that affect bone health, including comprehensive treatment planning.
                </p>
                <span className="text-[var(--color-accent)] text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>

            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  More Health Resources
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Explore our library of patient education articles covering prevention, wellness, and healthy living.
                </p>
                <span className="text-[var(--color-accent)] text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  View All Articles
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
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
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Dr. Hemmen is here to help you build a personalized plan for lifelong bone health.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all hover:gap-3 shadow-lg"
          >
            Schedule a Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}