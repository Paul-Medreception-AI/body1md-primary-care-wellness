import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Preventing Heart Disease: Risk Factors You Can Control',
  description: 'Learn about controllable heart disease risk factors including blood pressure, cholesterol, smoking, diet, and exercise. Evidence-based strategies for heart health from Body1MD.',
  alternates: { canonical: '/blog/preventing-heart-disease-risk-factors-you-can-control' },
  openGraph: {
    title: 'Preventing Heart Disease: Risk Factors You Can Control',
    description: 'Learn about controllable heart disease risk factors including blood pressure, cholesterol, smoking, diet, and exercise. Evidence-based strategies for heart health from Body1MD.',
    url: 'https://body1md.com/blog/preventing-heart-disease-risk-factors-you-can-control',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/images/blog/preventing-heart-disease-risk-factors-you-can-control.jpg', alt: 'Clinician in scrubs with a stethoscope and a red paper heart in her pocket' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Preventing Heart Disease: Risk Factors You Can Control',
    description: 'Learn about controllable heart disease risk factors including blood pressure, cholesterol, smoking, diet, and exercise. Evidence-based strategies for heart health from Body1MD.',
    images: ['/images/blog/preventing-heart-disease-risk-factors-you-can-control.jpg']
  }
}

export default function BlogPost() {
  return (
    <main className="min-h-screen">
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
            Preventing Heart Disease: Risk Factors You Can Control
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published October 2026</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Reviewed by Dr. Andrew Hemmen, MD</span>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-10">
        <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl">
          <Image src="/images/blog/preventing-heart-disease-risk-factors-you-can-control.jpg" alt="Clinician in scrubs with a stethoscope and a red paper heart in her pocket" fill priority className="object-cover" sizes="(max-width: 896px) 100vw, 896px" />
        </div>
      </div>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[var(--color-ink)] leading-loose text-base">
            <p className="text-xl mb-6 font-light">
              Heart disease remains the leading cause of death in the United States, claiming nearly 700,000 lives each year. But here's the empowering truth: many of the most significant risk factors for heart disease are within your control. While you can't change your age or family history, the daily choices you make about diet, exercise, smoking, and stress management can dramatically reduce your risk and add years to your life.
            </p>

            <p className="mb-6">
              Understanding which risk factors you can influence, and taking action to address them, is one of the most important steps you can take for your long-term health. Let's explore the controllable risk factors and the evidence-based strategies that can help protect your heart.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              High Blood Pressure: The Silent Threat
            </h2>

            <p className="mb-6">
              High blood pressure, or hypertension, affects nearly half of American adults and often has no symptoms, earning it the nickname "the silent killer." When blood pressure remains elevated over time, it damages artery walls, forces your heart to work harder, and significantly increases your risk of heart attack and stroke.
            </p>

            <p className="mb-6">
              The good news? Blood pressure responds remarkably well to lifestyle changes. The DASH (Dietary Approaches to Stop Hypertension) diet, which emphasizes fruits, vegetables, whole grains, and low-fat dairy while limiting sodium, has been shown to lower blood pressure as effectively as some medications. Regular physical activity, maintaining a healthy weight, limiting alcohol, and managing stress all contribute to healthier blood pressure levels.
            </p>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
              <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
                "Even small reductions in blood pressure can have a significant impact on heart disease risk. A decrease of just 5 mmHg in systolic blood pressure can reduce heart attack risk by approximately 10%."
              </p>
            </div>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Cholesterol Management: Understanding the Numbers
            </h2>

            <p className="mb-6">
              Cholesterol plays a complex role in heart health. While your body needs some cholesterol to function, too much LDL ("bad") cholesterol leads to plaque buildup in your arteries, narrowing the passages through which blood flows. Meanwhile, HDL ("good") cholesterol helps remove excess cholesterol from your bloodstream.
            </p>

            <p className="mb-6">
              Diet has a profound impact on cholesterol levels. Reducing saturated fats (found in red meat, full-fat dairy, and tropical oils) and eliminating trans fats can lower LDL cholesterol. Meanwhile, incorporating foods rich in omega-3 fatty acids (like salmon, walnuts, and flaxseed), soluble fiber (oats, beans, apples), and plant sterols can improve your cholesterol profile naturally.
            </p>

            <p className="mb-6">
              Regular exercise also helps by raising HDL cholesterol while lowering triglycerides. Even 30 minutes of moderate activity five days a week can make a measurable difference in your numbers.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Smoking Cessation: The Single Most Important Change
            </h2>

            <p className="mb-6">
              If you smoke, quitting is the single most impactful step you can take to reduce your heart disease risk. Smoking damages the lining of your arteries, reduces oxygen in your blood, raises blood pressure, and makes blood more likely to clot. It accelerates the development of atherosclerosis and multiplies the effects of other risk factors.
            </p>

            <p className="mb-6">
              The benefits of quitting begin almost immediately. Within 20 minutes of your last cigarette, your heart rate drops. Within 24 hours, your risk of heart attack begins to decrease. After one year, your risk of heart disease is cut in half compared to a current smoker. After 15 years, your risk returns to that of someone who never smoked.
            </p>

            <p className="mb-6">
              Quitting is challenging, but you don't have to do it alone. Counseling, nicotine replacement therapies, prescription medications, and support groups all increase your chances of success. Talk to your healthcare provider about creating a personalized quit plan.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Physical Activity: Movement as Medicine
            </h2>

            <p className="mb-6">
              Regular physical activity is one of the most powerful tools for heart disease prevention. Exercise strengthens your heart muscle, improves circulation, helps control weight, lowers blood pressure, improves cholesterol levels, reduces stress, and helps manage blood sugar.
            </p>

            <p className="mb-6">
              The American Heart Association recommends at least 150 minutes of moderate-intensity aerobic activity or 75 minutes of vigorous activity per week, plus muscle-strengthening activities on two or more days. But any movement is better than none, and even small increases in physical activity provide benefits.
            </p>

            <div className="my-8">
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-4">Ways to Incorporate More Movement:</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Take the stairs instead of the elevator whenever possible</span>
                </li>
                <li className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Park farther away from building entrances</span>
                </li>
                <li className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Schedule walking meetings or phone calls</span>
                </li>
                <li className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Set reminders to stand and stretch every hour</span>
                </li>
                <li className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Find activities you enjoy: dancing, gardening, swimming, cycling</span>
                </li>
                <li className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Exercise with a friend or family member for accountability and enjoyment</span>
                </li>
              </ul>
            </div>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Weight Management and Diet: Fueling Heart Health
            </h2>

            <p className="mb-6">
              Maintaining a healthy weight reduces strain on your heart, improves cholesterol levels, helps control blood pressure and blood sugar, and decreases inflammation throughout your body. Even modest weight loss (5 to 10% of your body weight) can significantly reduce heart disease risk.
            </p>

            <p className="mb-6">
              Rather than focusing on restrictive diets, aim for sustainable eating patterns that emphasize whole, minimally processed foods. The Mediterranean diet, rich in fruits, vegetables, whole grains, legumes, nuts, olive oil, and fish, has been extensively studied and shown to reduce heart disease risk by up to 30%.
            </p>

            <p className="mb-6">
              Key dietary principles for heart health include limiting added sugars and refined carbohydrates, choosing lean proteins, incorporating plenty of fiber, reducing sodium intake, and staying well-hydrated. Small, consistent changes often lead to more lasting results than dramatic overhauls.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Stress Management and Sleep: The Often-Overlooked Factors
            </h2>

            <p className="mb-6">
              Chronic stress and poor sleep both contribute to heart disease through multiple pathways. Stress raises blood pressure, increases inflammation, and often leads to unhealthy coping behaviors like overeating, smoking, or excessive alcohol use. Poor sleep disrupts metabolic processes, raises blood pressure, and increases inflammation.
            </p>

            <p className="mb-6">
              Developing healthy stress management techniques (whether through meditation, yoga, deep breathing exercises, time in nature, or engaging in hobbies) can have measurable benefits for heart health. Aim for 7-9 hours of quality sleep per night, and talk to your provider if you have symptoms of sleep apnea, a condition that significantly increases cardiovascular risk.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Taking Action: Your Heart Health Plan
            </h2>

            <p className="mb-6">
              The controllable risk factors for heart disease are interconnected: positive changes in one area often lead to improvements in others. You don't need to address everything at once. Start with one or two changes that feel most achievable, build those into sustainable habits, and then add more over time.
            </p>

            <p className="mb-6">
              Regular check-ups with your healthcare provider are essential for monitoring your risk factors, catching problems early, and adjusting your prevention plan as needed. Blood pressure checks, cholesterol panels, and discussions about your lifestyle habits help you and your provider work together to optimize your heart health.
            </p>

            <p className="mb-6">
              Remember: it's never too early (or too late) to start taking better care of your heart. The choices you make today have the power to shape your health for decades to come. If you're ready to take control of your heart disease risk factors, we're here to support you every step of the way.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-20">
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto px-6">
          <div className="flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-ink)] mb-2">
                Reviewed by Dr. Andrew Hemmen, MD
              </p>
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
            <Link href="/blog" className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow group">
              <div className="bg-[var(--color-light)] rounded-xl p-4 mb-4 inline-block">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                More Health Resources
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Explore our library of patient education articles covering preventive care, chronic disease management, and wellness topics.
              </p>
            </Link>

            <Link href="/services" className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow group">
              <div className="bg-[var(--color-light)] rounded-xl p-4 mb-4 inline-block">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Our Services
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Learn about our comprehensive primary care services, from preventive screenings to chronic disease management.
              </p>
            </Link>

            <Link href="/contact" className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow group">
              <div className="bg-[var(--color-light)] rounded-xl p-4 mb-4 inline-block">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Schedule a Visit
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Ready to take control of your heart health? Contact us to schedule a visit with Dr. Hemmen to review your cardiovascular risk.
              </p>
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
            Dr. Hemmen is here to help you create a personalized heart health plan.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  )
}