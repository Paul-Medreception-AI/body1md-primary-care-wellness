import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Truth About Vitamin D: Are You Getting Enough?',
  description: 'Learn about vitamin D deficiency, its impact on your health, and how to ensure you\'re getting adequate levels through sunlight, diet, and supplementation.',
  alternates: { canonical: '/blog/the-truth-about-vitamin-d-are-you-getting-enough' },
  openGraph: {
    title: 'The Truth About Vitamin D: Are You Getting Enough?',
    description: 'Learn about vitamin D deficiency, its impact on your health, and how to ensure you\'re getting adequate levels through sunlight, diet, and supplementation.',
    url: 'https://body1md.com/blog/the-truth-about-vitamin-d-are-you-getting-enough',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Truth About Vitamin D: Are You Getting Enough?',
    description: 'Learn about vitamin D deficiency, its impact on your health, and how to ensure you\'re getting adequate levels through sunlight, diet, and supplementation.',
    images: ['/og-image.png'],
  },
}

export default function VitaminDBlogPost() {
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
            The Truth About Vitamin D: Are You Getting Enough?
          </h1>

          {/* Meta Information */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>January 2025</span>
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
              <span>Dr. Wellness Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Paragraph */}
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            You've probably heard that vitamin D is important—but do you know just how crucial it is to your overall health? Often called the "sunshine vitamin," vitamin D plays a vital role in everything from bone strength to immune function. Yet despite its importance, vitamin D deficiency remains surprisingly common, affecting nearly 42% of adults in the United States. If you spend most of your day indoors, live in a northern climate, or have darker skin, you may be at even higher risk.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-lg mb-8">
            The good news? Understanding your vitamin D status and taking steps to optimize it can have profound effects on your energy, mood, immunity, and long-term health. Let's explore what you need to know about this essential nutrient.
          </p>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Is Vitamin D and Why Does It Matter?
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Vitamin D is a fat-soluble vitamin that functions more like a hormone in your body. Unlike most vitamins that we must obtain through food, our bodies can produce vitamin D when our skin is exposed to sunlight—specifically, ultraviolet B (UVB) rays.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Once produced or consumed, vitamin D undergoes two conversion steps—first in the liver, then in the kidneys—to become its active form, calcitriol. This active form helps regulate calcium and phosphorus absorption, supporting bone health and skeletal structure. But its benefits extend far beyond bones.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Vitamin D receptors are found throughout the body, including in the brain, heart, muscles, and immune cells. Research suggests adequate vitamin D levels support immune function, cardiovascular health, mood regulation, and may even play a role in reducing the risk of certain chronic diseases.
          </p>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Who Is at Risk for Vitamin D Deficiency?
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While anyone can become deficient in vitamin D, certain groups face higher risk:
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>People with limited sun exposure:</strong> If you work indoors, live in northern latitudes, or regularly use sunscreen (which is important for skin cancer prevention), your skin may not produce enough vitamin D.</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Individuals with darker skin:</strong> Melanin reduces the skin's ability to produce vitamin D from sunlight, meaning people with darker complexions require more sun exposure to generate the same amount.</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Older adults:</strong> As we age, our skin becomes less efficient at producing vitamin D, and our kidneys become less effective at converting it to its active form.</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>People with digestive disorders:</strong> Conditions like Crohn's disease, celiac disease, or chronic pancreatitis can impair vitamin D absorption.</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Individuals with obesity:</strong> Vitamin D is fat-soluble, meaning it can become sequestered in body fat, reducing its bioavailability.</span>
            </li>
          </ul>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
              "Nearly half of all adults have insufficient vitamin D levels, yet many don't realize it until they're tested. Simple screening and supplementation can make a profound difference in how you feel every day."
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Signs and Symptoms of Vitamin D Deficiency
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Vitamin D deficiency can be subtle, developing slowly over months or years. Many people have no obvious symptoms at all, which is why routine screening is so valuable. However, when symptoms do appear, they may include:
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Chronic fatigue or unexplained tiredness</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Frequent infections or a weakened immune system</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Bone pain or muscle weakness</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Mood changes, including depression or low mood</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Slow wound healing</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Hair loss</span>
            </li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Over time, severe deficiency can lead to more serious conditions such as osteoporosis, osteomalacia (softening of the bones), and increased fracture risk. In children, severe deficiency causes rickets, a condition that leads to skeletal deformities.
          </p>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            How to Get Enough Vitamin D
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The good news is that optimizing your vitamin D levels is straightforward once you know your baseline. Here are the three primary ways to increase your vitamin D:
          </p>

          <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mt-8 mb-3">
            1. Sunlight Exposure
          </h3>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Your skin produces vitamin D when exposed to UVB rays from the sun. For many people, 10–30 minutes of midday sun exposure several times per week is sufficient, though this varies based on skin tone, geographic location, and season. People with darker skin may need more time in the sun to produce the same amount of vitamin D.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Keep in mind that sunscreen, while critical for preventing skin cancer, does block vitamin D production. Balancing sun exposure with skin protection is key—consider brief, unprotected exposure followed by sunscreen application.
          </p>

          <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mt-8 mb-3">
            2. Dietary Sources
          </h3>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Few foods naturally contain significant amounts of vitamin D, but some excellent sources include:
          </p>

          <ul className="space-y-3 mb-6 ml-6">
            <li className="text-[var(--color-ink)] leading-loose">• Fatty fish like salmon, mackerel, sardines, and trout</li>
            <li className="text-[var(--color-ink)] leading-loose">• Cod liver oil</li>
            <li className="text-[var(--color-ink)] leading-loose">• Egg yolks</li>
            <li className="text-[var(--color-ink)] leading-loose">• Fortified foods such as milk, orange juice, and cereals</li>
            <li className="text-[var(--color-ink)] leading-loose">• Fortified plant-based milks</li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While diet can contribute, it's often difficult to get enough vitamin D from food alone, especially if you don't regularly consume fatty fish.
          </p>

          <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mt-8 mb-3">
            3. Supplementation
          </h3>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            For many people—especially those at higher risk—supplementation is the most reliable way to maintain adequate vitamin D levels. Vitamin D3 (cholecalciferol) is generally more effective at raising blood levels than vitamin D2 (ergocalciferol).
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            The recommended daily allowance varies by age, health status, and baseline levels. Many adults benefit from 1,000–2,000 IU per day, but higher doses may be needed to correct a deficiency. It's important to work with your healthcare provider to determine the right dose for you, as too much vitamin D can lead to toxicity, though this is rare.
          </p>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Testing Your Vitamin D Levels
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The most accurate way to know your vitamin D status is through a simple blood test that measures 25-hydroxyvitamin D [25(OH)D]. This test is widely available and can be ordered by your primary care provider.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Optimal levels are generally considered to be between 30–50 ng/mL, though some experts recommend aiming for the higher end of that range. Levels below 20 ng/mL are considered deficient, and levels between 20–30 ng/mL are considered insufficient.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            If you've never had your vitamin D checked—or if you have risk factors for deficiency—it's worth discussing testing with your doctor. Regular monitoring can help ensure you're maintaining healthy levels, especially if you're taking supplements.
          </p>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Bottom Line
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Vitamin D is essential for bone health, immune function, mood regulation, and overall wellness—yet deficiency is incredibly common. Whether due to limited sun exposure, dietary habits, or individual risk factors, many people simply aren't getting enough.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The good news? Correcting a deficiency is straightforward. With a combination of safe sun exposure, vitamin D-rich foods, and appropriate supplementation, you can optimize your levels and support your long-term health.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            If you're experiencing fatigue, frequent illness, mood changes, or other symptoms that might be linked to low vitamin D—or if you simply want to know where you stand—reach out to your healthcare provider. A simple blood test and personalized guidance can make all the difference in how you feel, today and for years to come.
          </p>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">
                Reviewed by Body1MD Primary Care & Wellness
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our team is dedicated to providing evidence-based, compassionate care to help you achieve optimal health and wellness. We focus on preventive medicine, chronic disease management, and personalized treatment plans tailored to your unique needs.
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
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-8 h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">
                  Health Resources
                </div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Browse All Articles
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Explore our complete library of health and wellness resources.
                </p>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/services" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-8 h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">
                  Our Services
                </div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Preventive Care Services
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Learn about our comprehensive preventive care and wellness programs.
                </p>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/contact" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-8 h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">
                  Get Started
                </div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Schedule Your Visit
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Book an appointment to discuss your health concerns and wellness goals.
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
            Our team is here to help you optimize your health and wellness.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-medium hover:bg-[var(--color-cream)] transition-colors duration-300"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  )
}