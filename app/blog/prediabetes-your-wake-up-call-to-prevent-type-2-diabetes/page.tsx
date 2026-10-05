import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Prediabetes: Your Wake-Up Call to Prevent Type 2 Diabetes',
  description: 'Learn how prediabetes serves as a critical warning sign and discover evidence-based strategies to reverse course and prevent type 2 diabetes through lifestyle changes.',
  alternates: { canonical: '/blog/prediabetes-your-wake-up-call-to-prevent-type-2-diabetes' },
  openGraph: {
    title: 'Prediabetes: Your Wake-Up Call to Prevent Type 2 Diabetes',
    description: 'Learn how prediabetes serves as a critical warning sign and discover evidence-based strategies to reverse course and prevent type 2 diabetes through lifestyle changes.',
    url: 'https://body1md.com/blog/prediabetes-your-wake-up-call-to-prevent-type-2-diabetes',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/images/blog/prediabetes-your-wake-up-call-to-prevent-type-2-diabetes.jpg', alt: 'Hands using a lancet pen and glucose meter for a fingerstick blood sugar test' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prediabetes: Your Wake-Up Call to Prevent Type 2 Diabetes',
    description: 'Learn how prediabetes serves as a critical warning sign and discover evidence-based strategies to reverse course and prevent type 2 diabetes through lifestyle changes.',
    images: ['/images/blog/prediabetes-your-wake-up-call-to-prevent-type-2-diabetes.jpg']
  }
}

export default function PrediabetesArticle() {
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

          {/* Category Tag */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight text-center mb-8">
            Prediabetes: Your Wake-Up Call to Prevent Type 2 Diabetes
          </h1>

          {/* Meta Information */}
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
          <Image src="/images/blog/prediabetes-your-wake-up-call-to-prevent-type-2-diabetes.jpg" alt="Hands using a lancet pen and glucose meter for a fingerstick blood sugar test" fill priority className="object-cover" sizes="(max-width: 896px) 100vw, 896px" />
        </div>
      </div>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            Imagine your body sending you a warning signal, a message that says, "Pay attention now, and you can change your future." That's exactly what prediabetes is: a critical opportunity to prevent type 2 diabetes before it develops. For the millions of Americans living with prediabetes, many don't even know they have it. But understanding this condition and taking action can literally change the trajectory of your health.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Prediabetes isn't a diagnosis to fear. It's a gift of time. It's your body's way of giving you a chance to make meaningful changes before blood sugar levels cross into diabetes territory. With the right knowledge and support, you can reverse prediabetes and significantly reduce your risk of developing type 2 diabetes and its associated complications.
          </p>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Is Prediabetes?
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Prediabetes is a health condition where blood sugar levels are higher than normal but not yet high enough to be classified as type 2 diabetes. Think of it as the warning zone on a gauge: you're not in the danger zone yet, but you're close enough that action is needed.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            According to the Centers for Disease Control and Prevention (CDC), more than 98 million American adults (approximately one in three) have prediabetes. Even more concerning, about 80% of people with prediabetes don't know they have it because it often has no symptoms.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Prediabetes is diagnosed through blood tests that measure:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>A1C (hemoglobin A1C):</strong> 5.7% to 6.4% indicates prediabetes</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Fasting blood glucose:</strong> 100 to 125 mg/dL suggests prediabetes</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Oral glucose tolerance test:</strong> 140 to 199 mg/dL after two hours indicates prediabetes</span>
            </li>
          </ul>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Who Is at Risk?
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While prediabetes can affect anyone, certain factors increase your risk. Understanding these risk factors can help you and your healthcare provider determine if screening is appropriate for you.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Key risk factors include:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Being overweight or obese, particularly with excess weight around the abdomen</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Being age 45 or older</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Having a parent or sibling with type 2 diabetes</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Leading a physically inactive lifestyle</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Having had gestational diabetes during pregnancy</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Having polycystic ovary syndrome (PCOS)</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Having high blood pressure or abnormal cholesterol levels</span>
            </li>
          </ul>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
            "The most powerful thing about prediabetes is that it's reversible. With lifestyle changes, you can bring your blood sugar back to normal levels and dramatically reduce your diabetes risk."
          </blockquote>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Why Prediabetes Matters: The Health Stakes
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Without intervention, 15% to 30% of people with prediabetes will develop type 2 diabetes within five years. But the concerns don't stop there. Even at the prediabetes stage, elevated blood sugar can begin to damage blood vessels and nerves, increasing your risk of:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Heart disease and stroke</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Kidney disease</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Vision problems including retinopathy</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Nerve damage (neuropathy)</span>
            </li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The good news? Research consistently shows that lifestyle interventions can reduce the risk of progression to type 2 diabetes by up to 58%. For people over 60, that reduction can be even higher, up to 71%. These aren't small numbers; they represent real, achievable protection for your future health.
          </p>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Evidence-Based Strategies to Reverse Prediabetes
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The landmark Diabetes Prevention Program (DPP) study provided clear evidence that lifestyle changes work. Participants who made moderate lifestyle changes reduced their risk of developing type 2 diabetes by 58% compared to those who didn't make changes. Here's what works:
          </p>

          <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mt-8 mb-3">
            Lose 5-7% of Your Body Weight
          </h3>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If you weigh 200 pounds, that's just 10 to 14 pounds. This modest weight loss has been shown to significantly improve insulin sensitivity and lower blood sugar levels. The key is sustainable change, not crash dieting.
          </p>

          <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mt-8 mb-3">
            Get Moving for 150 Minutes Per Week
          </h3>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            That's 30 minutes a day, five days a week, of moderate-intensity activity like brisk walking. Physical activity helps your cells use insulin more effectively and lowers blood sugar. You don't need a gym membership. A daily walk around your neighborhood or along the bosque trail counts.
          </p>

          <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mt-8 mb-3">
            Eat a Balanced, Whole-Foods Diet
          </h3>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Focus on vegetables, whole grains, lean proteins, and healthy fats. Limit refined carbohydrates, sugary drinks, and processed foods. You don't have to follow a restrictive diet. Simply choosing nutrient-dense foods most of the time makes a difference.
          </p>

          <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mt-8 mb-3">
            Prioritize Quality Sleep
          </h3>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Poor sleep affects hormones that regulate blood sugar and appetite. Aim for seven to nine hours of quality sleep per night. Establish a consistent sleep schedule and create a restful environment.
          </p>

          <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mt-8 mb-3">
            Manage Stress
          </h3>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Chronic stress raises cortisol levels, which can increase blood sugar. Find stress-management techniques that work for you, whether that's meditation, yoga, time in nature, or talking with a counselor.
          </p>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Role of Professional Support
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While lifestyle changes are the cornerstone of reversing prediabetes, you don't have to do it alone. Working with a healthcare provider who understands your unique situation can make all the difference. Regular monitoring, personalized guidance, and ongoing support increase your chances of success.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            A comprehensive approach includes regular blood sugar monitoring, assessment of other cardiovascular risk factors, and adjustments to your plan as needed. Some people may also benefit from medications like metformin, particularly if lifestyle changes alone aren't sufficient.
          </p>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Taking Action Today
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If you haven't had your blood sugar checked recently and you have risk factors for prediabetes, now is the time to get screened. Early detection gives you the maximum window of opportunity to make changes that matter.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Once you know where you stand, you can take meaningful action. Remember that small, consistent changes add up to significant results over time. You don't have to overhaul your entire life overnight. Start with one sustainable change (maybe a daily 20-minute walk or swapping sugary drinks for water) and build from there.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Prediabetes is not a life sentence; it's a second chance. With the right information, support, and commitment to change, you can reverse course and protect your long-term health. Your future self will thank you for the steps you take today.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            At Body1MD Primary Care & Wellness in Los Ranchos de Albuquerque, we're committed to helping you understand your risk, create a personalized prevention plan, and support you every step of the way. Prediabetes doesn't have to become diabetes. Let's work together to write a healthier story.
          </p>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">
                Reviewed by Dr. Andrew Hemmen, MD
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
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
            <Link href="/services/chronic-disease-management" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-8 flex items-center justify-center h-48">
                <svg className="w-16 h-16 text-[var(--color-primary)] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Chronic Disease Management
                </h4>
                <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                  Comprehensive care for diabetes, hypertension, and other chronic conditions with personalized treatment plans.
                </p>
                <span className="text-[var(--color-accent)] font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/services/preventive-care" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-8 flex items-center justify-center h-48">
                <svg className="w-16 h-16 text-[var(--color-primary)] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Preventive Care
                </h4>
                <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                  Proactive health screening and wellness strategies to catch problems early and maintain optimal health.
                </p>
                <span className="text-[var(--color-accent)] font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/services" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-8 flex items-center justify-center h-48">
                <svg className="w-16 h-16 text-[var(--color-primary)] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Weight Management
                </h4>
                <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                  Evidence-based weight loss support to help you achieve and maintain a healthy weight for life.
                </p>
                <span className="text-[var(--color-accent)] font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
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
            Dr. Hemmen is here to help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Schedule Your Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}