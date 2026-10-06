import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'The Role of Exercise in Managing Chronic Disease | Body1MD',
  description: 'Discover how regular physical activity helps manage chronic conditions like diabetes, heart disease, and arthritis. Evidence-based guidance from Body1MD in Albuquerque, NM.',
  alternates: { canonical: '/blog/the-role-of-exercise-in-managing-chronic-disease' },
  openGraph: {
    title: 'The Role of Exercise in Managing Chronic Disease | Body1MD',
    description: 'Discover how regular physical activity helps manage chronic conditions like diabetes, heart disease, and arthritis. Evidence-based guidance from Body1MD in Albuquerque, NM.',
    url: 'https://body1md.com/blog/the-role-of-exercise-in-managing-chronic-disease',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/images/blog/the-role-of-exercise-in-managing-chronic-disease.jpg', alt: 'Older couple walking together on a park trail on a spring day' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Role of Exercise in Managing Chronic Disease | Body1MD',
    description: 'Discover how regular physical activity helps manage chronic conditions like diabetes, heart disease, and arthritis. Evidence-based guidance from Body1MD in Albuquerque, NM.',
    images: ['/images/blog/the-role-of-exercise-in-managing-chronic-disease.jpg']
  }
}

export default function ExerciseChronicDiseasePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-5xl mx-auto px-6">
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
            The Role of Exercise in Managing Chronic Disease
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
          <Image src="/images/blog/the-role-of-exercise-in-managing-chronic-disease.jpg" alt="Older couple walking together on a park trail on a spring day" fill priority className="object-cover" sizes="(max-width: 896px) 100vw, 896px" />
        </div>
      </div>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Living with a chronic disease can feel overwhelming. Whether you're managing diabetes, heart disease, arthritis, or another long-term condition, the daily challenges can take a toll on both your physical and mental well-being. But here's the encouraging news: regular physical activity is one of the most powerful tools you have to take control of your health and improve your quality of life.
            </p>
            <p className="mb-6">
              Exercise isn't just about fitness or weight loss. It's medicine. Research consistently shows that appropriate physical activity can reduce symptoms, slow disease progression, prevent complications, and help you feel better in countless ways. Let's explore how movement becomes healing when you're managing chronic illness.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Understanding Exercise as Medicine
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The concept of "exercise as medicine" isn't metaphorical. It's literal. When you move your body, you trigger cascading biological responses that directly impact disease processes. Your muscles release proteins that reduce inflammation. Your cardiovascular system becomes more efficient. Your cells improve their ability to use insulin. Your brain produces chemicals that elevate mood and reduce pain perception.
            </p>
            <p className="mb-6">
              For people with chronic conditions, these effects translate into measurable health improvements. Studies show that regular exercise can lower blood sugar levels in diabetes, reduce blood pressure in hypertension, decrease joint pain in arthritis, improve lung function in COPD, and reduce the risk of heart attacks in cardiovascular disease.
            </p>
            <p>
              The key is finding the right type, intensity, and duration of exercise for your specific condition and current fitness level. What works for one person may not be appropriate for another, which is why personalized guidance matters.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            How Exercise Benefits Specific Chronic Conditions
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              <strong className="text-[var(--color-primary)]">Type 2 Diabetes:</strong> Physical activity helps your muscles use blood sugar for energy without requiring as much insulin. Even a single exercise session can improve insulin sensitivity for 24-72 hours. Regular activity helps maintain healthy blood glucose levels, reduces A1C, and decreases the risk of diabetes complications.
            </p>
            <p className="mb-6">
              <strong className="text-[var(--color-primary)]">Heart Disease:</strong> Cardiovascular exercise strengthens your heart muscle, improves circulation, lowers blood pressure, and helps control cholesterol levels. Cardiac rehabilitation programs centered on exercise have been shown to reduce the risk of future heart attacks and extend lifespan.
            </p>
            <p className="mb-6">
              <strong className="text-[var(--color-primary)]">Arthritis:</strong> While it may seem counterintuitive, movement is essential for joint health. Exercise strengthens the muscles around joints, improves flexibility, reduces stiffness, and can significantly decrease pain levels. Low-impact activities are particularly beneficial.
            </p>
            <p className="mb-6">
              <strong className="text-[var(--color-primary)]">Chronic Pain:</strong> Regular physical activity releases endorphins, your body's natural painkillers. Exercise also improves sleep, reduces inflammation, and helps break the cycle of deconditioning that often worsens chronic pain.
            </p>
            <p>
              <strong className="text-[var(--color-primary)]">Depression and Anxiety:</strong> Exercise has been shown to be as effective as medication for mild to moderate depression. Physical activity increases neurotransmitters like serotonin and dopamine, reduces stress hormones, and provides a sense of accomplishment and routine.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
            "The best exercise is the one you'll actually do consistently. Start where you are, use what you have, and progress gradually."
          </blockquote>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Getting Started Safely
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If you're living with a chronic condition, safety comes first. Before starting any new exercise program, consult with your healthcare provider. They can assess your current health status, identify any precautions you should take, and help you set appropriate goals.
            </p>
            <p className="mb-6">
              The good news is that most people with chronic diseases can exercise safely with proper guidance. The key principles include:
            </p>
            <div className="space-y-3 my-6">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Start low and go slow.</strong> Begin with just 5-10 minutes of gentle activity and gradually increase duration and intensity over weeks and months.</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Listen to your body.</strong> Some discomfort is normal as you build fitness, but sharp pain, dizziness, or unusual symptoms require you to stop and seek guidance.</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Choose appropriate activities.</strong> Walking, swimming, cycling, and tai chi are often excellent choices for people with chronic conditions because they're gentle on joints and easily modifiable.</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Warm up and cool down.</strong> Spend 5-10 minutes before and after exercise doing gentle movements to prepare your body and prevent injury.</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Stay hydrated.</strong> Drink water before, during, and after physical activity, especially in New Mexico's dry, high desert climate.</span>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Building a Sustainable Exercise Routine
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Consistency matters more than intensity. Research shows that even modest amounts of regular physical activity provide significant health benefits. The goal is to build exercise into your life in a way that feels manageable and sustainable.
            </p>
            <p className="mb-6">
              Current guidelines recommend at least 150 minutes of moderate-intensity aerobic activity per week for most adults, which breaks down to just 30 minutes five days a week. You can further divide this into shorter sessions: three 10-minute walks throughout the day count just as much as one 30-minute walk.
            </p>
            <p className="mb-6">
              Beyond aerobic exercise, include strength training at least twice a week to maintain muscle mass, bone density, and functional independence. Flexibility and balance exercises are also important, especially for preventing falls and maintaining mobility.
            </p>
            <p>
              Make it enjoyable. Exercise doesn't have to mean a gym membership. Gardening, dancing, playing with grandchildren, or walking your dog all count. Choose activities you genuinely like, and you'll be far more likely to stick with them.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Overcoming Common Barriers
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Many people with chronic conditions face legitimate obstacles to exercise: pain, fatigue, limited mobility, fear of injury, or simply not knowing where to start. Acknowledging these barriers is the first step to overcoming them.
            </p>
            <p className="mb-6">
              If pain is an issue, work with your healthcare provider or a physical therapist to identify exercises that don't aggravate your condition. Water-based activities like swimming or water aerobics are often well-tolerated because the buoyancy reduces stress on joints.
            </p>
            <p className="mb-6">
              If fatigue is limiting, remember that regular exercise actually increases energy levels over time. Start with very short sessions and gradually build stamina. Exercise earlier in the day when energy tends to be higher.
            </p>
            <p className="mb-6">
              If motivation is challenging, find an exercise buddy or join a class. Social connection adds accountability and makes physical activity more enjoyable. Track your progress in a journal or app to see how far you've come.
            </p>
            <p>
              If cost is a concern, know that effective exercise doesn't require expensive equipment. Walking is free. Online videos offer guided workouts at no cost. Many communities offer low-cost fitness programs specifically designed for people with chronic conditions.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Working with Your Healthcare Team
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Your healthcare provider is your partner in developing a safe, effective exercise plan. They understand your medical history, current medications, and specific health challenges. They can refer you to specialists like physical therapists or exercise physiologists who have expertise in chronic disease management.
            </p>
            <p className="mb-6">
              Be honest about your current activity level and any barriers you face. Share your goals and preferences. Together, you can create a realistic plan that fits your life and gradually helps you build strength, endurance, and confidence.
            </p>
            <p className="mb-6">
              Keep your provider updated on your progress and any problems you encounter. They can adjust your plan as needed, celebrate your successes, and help you navigate setbacks. Remember that progress isn't always linear. What matters is the overall trend toward better health.
            </p>
            <p>
              If you're managing multiple chronic conditions, coordinated care becomes especially important. Your provider can help you understand how different conditions interact and ensure your exercise plan supports all aspects of your health safely.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              Living with chronic disease doesn't mean accepting declining health. Regular physical activity offers a powerful way to take an active role in your care, improve how you feel day to day, and reduce your risk of complications. The benefits extend far beyond the physical: exercise enhances mental health, sleep quality, energy levels, and overall quality of life.
            </p>
            <p>
              At Body1MD Primary Care & Wellness, we believe in comprehensive, personalized care that addresses your whole health. If you're ready to explore how exercise can fit into your chronic disease management plan, we're here to guide you every step of the way. Together, we can develop an approach that's safe, effective, and tailored to your unique needs and goals.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <aside className="bg-[var(--color-cream)] py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 flex gap-6 items-start shadow-sm">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-ink)] mb-2">
                Reviewed by Dr. Andrew Hemmen, MD
              </div>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                This article provides general health information and is not a substitute for personalized medical advice. We encourage you to discuss any questions about your specific health needs with your healthcare provider.
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Link
              href="/blog/prediabetes-your-wake-up-call-to-prevent-type-2-diabetes"
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Prediabetes: Your Wake-Up Call to Prevent Type 2 Diabetes
              </h4>
              <p className="text-[var(--color-muted)] text-sm">
                Learn evidence-based strategies for preventing and managing diabetes through lifestyle and medical care.
              </p>
            </Link>

            {/* Card 2 */}
            <Link
              href="/services/chronic-disease-management"
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Chronic Disease Management Services
              </h4>
              <p className="text-[var(--color-muted)] text-sm">
                Discover our comprehensive approach to supporting patients living with chronic conditions.
              </p>
            </Link>

            {/* Card 3 */}
            <Link
              href="/blog/type-2-diabetes-reversal-what-science-says-about-diet-and-li"
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Type 2 Diabetes Reversal: What Science Says About Diet
              </h4>
              <p className="text-[var(--color-muted)] text-sm">
                Explore practical nutrition guidance that complements exercise for optimal chronic disease management.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Dr. Hemmen is here to help you develop a personalized exercise plan that supports your health goals.
          </p>
          <Link
            href="/book"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}