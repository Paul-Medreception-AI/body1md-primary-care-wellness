import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'UTI Prevention and Treatment: What Women Need to Know',
  description: 'Learn evidence-based strategies for preventing urinary tract infections and when to seek treatment. Expert guidance from Body1MD Primary Care & Wellness in Austin, TX.',
  alternates: { canonical: '/blog/uti-prevention-and-treatment-what-women-need-to-know' },
  openGraph: {
    title: 'UTI Prevention and Treatment: What Women Need to Know',
    description: 'Learn evidence-based strategies for preventing urinary tract infections and when to seek treatment. Expert guidance from Body1MD Primary Care & Wellness in Austin, TX.',
    url: 'https://body1md.com/blog/uti-prevention-and-treatment-what-women-need-to-know',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UTI Prevention and Treatment: What Women Need to Know',
    description: 'Learn evidence-based strategies for preventing urinary tract infections and when to seek treatment. Expert guidance from Body1MD Primary Care & Wellness in Austin, TX.',
    images: ['/og-image.png'],
  },
}

export default function BlogPost() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-sm mb-6 text-white/80">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {' › '}
            <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
            {' › Article'}
          </div>
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4">Women's Health</div>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            UTI Prevention and Treatment: What Women Need to Know
          </h1>
          <div className="flex gap-6 justify-center items-center text-sm text-white/80">
            <span>Published January 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>By Dr. Wellness Team</span>
          </div>
        </div>
      </section>

      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[var(--color-ink)] leading-loose text-base">
            <p className="text-xl mb-6">
              If you've ever experienced the burning, urgent discomfort of a urinary tract infection, you know how disruptive it can be. UTIs are one of the most common bacterial infections, affecting millions of women each year—and for many, they're a recurring problem. But here's the good news: most UTIs are preventable, and with the right knowledge, you can take control of your urinary health.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Understanding Urinary Tract Infections
            </h2>
            <p className="mb-4">
              A urinary tract infection occurs when bacteria—most commonly <em>E. coli</em> from the digestive tract—enter the urethra and multiply in the bladder. Women are significantly more susceptible than men due to anatomical differences: a shorter urethra means bacteria have a shorter distance to travel to reach the bladder.
            </p>
            <p className="mb-4">
              Classic UTI symptoms include a persistent urge to urinate, burning sensation during urination, cloudy or strong-smelling urine, and pelvic discomfort. Some women experience fever and back pain, which can signal a more serious kidney infection requiring immediate medical attention.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Why Women Are at Higher Risk
            </h2>
            <p className="mb-4">
              Beyond anatomy, several factors increase UTI risk in women:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Sexual activity</strong> can introduce bacteria into the urinary tract</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Menopause</strong> reduces estrogen levels, which affects protective vaginal flora</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Certain contraceptives</strong> like diaphragms or spermicide can increase bacterial growth</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Incomplete bladder emptying</strong> due to various medical conditions</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Diabetes</strong> and immune system changes</span>
              </li>
            </ul>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
              <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
                "Up to 60% of women will experience at least one UTI in their lifetime, and nearly a quarter will have recurrent infections. Understanding prevention is key to breaking this cycle."
              </p>
            </div>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Evidence-Based Prevention Strategies
            </h2>
            <p className="mb-4">
              Research has identified several effective strategies for reducing UTI risk. While no single method guarantees complete protection, combining these approaches can significantly lower your chances of infection:
            </p>

            <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-8 mb-3">
              Hydration and Urination Habits
            </h3>
            <p className="mb-4">
              Drinking plenty of water helps flush bacteria from your urinary tract before infection can take hold. Aim for 6-8 glasses daily, and don't ignore the urge to urinate—holding urine allows bacteria more time to multiply. Urinating after sexual activity is particularly important for clearing any bacteria that may have been introduced.
            </p>

            <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-8 mb-3">
              Hygiene Practices
            </h3>
            <p className="mb-4">
              Always wipe from front to back after using the bathroom to prevent intestinal bacteria from reaching the urethra. Avoid harsh soaps, douches, and feminine hygiene sprays in the genital area—these can disrupt protective bacterial balance. Cotton underwear and loose-fitting clothes help keep the area dry and less hospitable to harmful bacteria.
            </p>

            <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-8 mb-3">
              Dietary Considerations
            </h3>
            <p className="mb-4">
              While cranberry products have long been touted for UTI prevention, recent research shows mixed results. Some studies suggest cranberry may help prevent recurrent UTIs by preventing bacteria from adhering to bladder walls, but it's not a cure and doesn't work for everyone. Probiotics containing <em>Lactobacillus</em> strains show promise in maintaining healthy vaginal flora, which can reduce infection risk.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              When to Seek Treatment
            </h2>
            <p className="mb-4">
              Early treatment is crucial for preventing UTIs from progressing to more serious kidney infections. Contact your healthcare provider if you experience:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Burning or pain during urination</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Frequent, urgent need to urinate with little output</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Cloudy, bloody, or foul-smelling urine</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Pelvic pressure or lower abdominal pain</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Fever, chills, or back pain (seek immediate care)</span>
              </li>
            </ul>
            <p className="mb-4">
              Most uncomplicated UTIs respond well to a short course of antibiotics. Your provider will typically request a urine sample to confirm the diagnosis and identify the specific bacteria, ensuring the most effective antibiotic is prescribed. It's essential to complete the entire course of antibiotics even if symptoms improve, as stopping early can lead to recurrence and antibiotic resistance.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Managing Recurrent UTIs
            </h2>
            <p className="mb-4">
              If you experience two or more UTIs within six months, or three or more within a year, you have recurrent UTIs—a frustrating condition affecting about 25% of women who've had one infection. Your healthcare provider can help develop a personalized prevention plan, which may include:
            </p>
            <p className="mb-4">
              Low-dose preventive antibiotics taken daily or after sexual activity, vaginal estrogen therapy for postmenopausal women, or identifying and addressing underlying risk factors like anatomical abnormalities. Some women benefit from keeping a home supply of antibiotics to start at the first sign of symptoms, under their provider's guidance.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Taking Control of Your Urinary Health
            </h2>
            <p className="mb-4">
              While UTIs are common, they don't have to be a recurring part of your life. By understanding your risk factors, implementing evidence-based prevention strategies, and seeking prompt treatment when needed, you can significantly reduce the impact of UTIs on your daily life and well-being.
            </p>
            <p className="mb-4">
              Remember that every woman's situation is unique. What works for one person may not work for another, and some UTI-like symptoms can indicate other conditions requiring different treatment approaches. A trusting relationship with a healthcare provider who knows your history is invaluable for managing urinary health over time.
            </p>
            <p>
              If you're experiencing recurrent UTIs or have questions about prevention, don't suffer in silence. Professional guidance can make all the difference in finding a solution that works for you.
            </p>
          </div>
        </div>

        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6">
          <div className="flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-ink)] mb-1">Reviewed by Body1MD Primary Care & Wellness</div>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Our team is dedicated to providing comprehensive, evidence-based primary care focused on your long-term health and wellness. We partner with you to address both immediate concerns and preventive care in Austin, TX.
              </p>
            </div>
          </div>
        </div>
      </article>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  Women's Health Resources
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Explore more articles on preventive care and wellness topics for women.
                </p>
              </div>
            </Link>

            <Link href="/services/wellness-visits" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  Preventive Wellness Visits
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Schedule comprehensive annual exams and preventive screenings to stay ahead of health concerns.
                </p>
              </div>
            </Link>

            <Link href="/services/chronic-disease-management" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  Chronic Disease Management
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Partner with us for ongoing management of diabetes, hypertension, and other chronic conditions.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-xl mb-8 text-white/90">Our team is here to help.</p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}