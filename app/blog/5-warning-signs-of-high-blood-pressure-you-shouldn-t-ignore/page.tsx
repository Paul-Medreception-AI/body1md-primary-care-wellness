import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '5 Warning Signs of High Blood Pressure You Shouldn\'t Ignore',
  description: 'Learn the critical warning signs of high blood pressure and when to seek medical attention. Guidance from Body1MD Primary Care & Wellness in Los Ranchos de Albuquerque, NM.',
  alternates: { canonical: '/blog/5-warning-signs-of-high-blood-pressure-you-shouldn-t-ignore' },
  openGraph: {
    title: '5 Warning Signs of High Blood Pressure You Shouldn\'t Ignore',
    description: 'Learn the critical warning signs of high blood pressure and when to seek medical attention. Guidance from Body1MD Primary Care & Wellness in Los Ranchos de Albuquerque, NM.',
    url: 'https://body1md.com/blog/5-warning-signs-of-high-blood-pressure-you-shouldn-t-ignore',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/images/blog/5-warning-signs-of-high-blood-pressure-you-shouldn-t-ignore.jpg', alt: 'Clinician measuring a patient\'s blood pressure with an arm cuff and stethoscope' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: '5 Warning Signs of High Blood Pressure You Shouldn\'t Ignore',
    description: 'Learn the critical warning signs of high blood pressure and when to seek medical attention. Guidance from Body1MD Primary Care & Wellness in Los Ranchos de Albuquerque, NM.',
    images: ['/images/blog/5-warning-signs-of-high-blood-pressure-you-shouldn-t-ignore.jpg']
  }
}

export default function BlogPost() {
  return (
    <main>
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
            5 Warning Signs of High Blood Pressure You Shouldn't Ignore
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
          <Image src="/images/blog/5-warning-signs-of-high-blood-pressure-you-shouldn-t-ignore.jpg" alt="Clinician measuring a patient's blood pressure with an arm cuff and stethoscope" fill priority className="object-cover" sizes="(max-width: 896px) 100vw, 896px" />
        </div>
      </div>

      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[var(--color-ink)] leading-loose text-base">
            <p className="text-xl mb-6">
              High blood pressure, often called the "silent killer," affects nearly half of all American adults. The danger lies not just in the condition itself, but in how easily its warning signs can go unnoticed until serious complications arise. Understanding what to watch for could save your life.
            </p>

            <p className="mb-6">
              While high blood pressure often presents no symptoms in its early stages, there are critical warning signs that should never be ignored. If you experience any of these symptoms, especially in combination, it's essential to seek medical attention promptly.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              1. Severe Headaches That Won't Quit
            </h2>

            <p className="mb-6">
              When blood pressure spikes to dangerously high levels (a condition known as hypertensive crisis), it can cause intense, throbbing headaches that feel different from typical tension headaches or migraines. These headaches often present as a pounding sensation that may worsen with physical activity.
            </p>

            <p className="mb-6">
              The mechanism behind these headaches involves increased pressure on blood vessels in the brain. When your blood pressure rises significantly above 180/120 mm Hg, the force against arterial walls can trigger severe pain. If you experience a sudden, severe headache accompanied by confusion, vision problems, or difficulty speaking, seek emergency medical care immediately. These may be signs of a hypertensive emergency or even stroke.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              2. Shortness of Breath or Chest Discomfort
            </h2>

            <p className="mb-6">
              Difficulty breathing or a feeling of tightness in your chest can signal that your heart is working overtime to pump blood against elevated pressure in your arteries. Over time, high blood pressure forces your heart muscle to work harder, which can lead to left ventricular hypertrophy, a thickening of the heart's main pumping chamber.
            </p>

            <p className="mb-6">
              This increased workload reduces your heart's efficiency and can cause shortness of breath, especially during physical activity or when lying flat. You might notice you need to prop yourself up with extra pillows at night or feel winded climbing stairs that never bothered you before. These symptoms warrant immediate evaluation, as they can indicate heart failure or coronary artery disease.
            </p>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
              <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
                "Nearly 1 in 3 adults with high blood pressure don't know they have it. Regular monitoring is your best defense against this silent condition."
              </p>
            </div>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              3. Vision Changes or Blurred Sight
            </h2>

            <p className="mb-6">
              Your eyes offer a unique window into your cardiovascular health. High blood pressure can damage the tiny, delicate blood vessels in your retina, a condition called hypertensive retinopathy. When blood pressure remains elevated over time, these vessels may narrow, leak, or become blocked.
            </p>

            <p className="mb-6">
              Warning signs include sudden blurred vision, double vision, or seeing spots or floaters. Some people describe it as looking through a fog or noticing dark areas in their field of vision. In severe cases, untreated high blood pressure can lead to retinal hemorrhage or even permanent vision loss. Any sudden change in vision requires urgent medical evaluation, as it may indicate not only eye damage but also increased risk for stroke.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              4. Persistent Nosebleeds
            </h2>

            <p className="mb-6">
              While occasional nosebleeds are common and usually harmless, frequent or difficult-to-stop nosebleeds can be a red flag for dangerously high blood pressure. The blood vessels in your nose are particularly fragile, and when blood pressure reaches crisis levels, these vessels are more prone to rupture.
            </p>

            <p className="mb-6">
              Research shows that nosebleeds are more common in people with uncontrolled hypertension, particularly when systolic pressure (the top number) exceeds 200 mm Hg. If you experience recurrent nosebleeds, especially if they're accompanied by other symptoms like headache, dizziness, or facial flushing, have your blood pressure checked promptly. In emergency situations, severe nosebleeds combined with extremely high blood pressure readings require immediate medical intervention.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              5. Fatigue, Confusion, or Difficulty Concentrating
            </h2>

            <p className="mb-6">
              When your brain doesn't receive adequate blood flow due to vascular changes from high blood pressure, you may experience cognitive symptoms that are easy to dismiss as stress or aging. These can include unusual fatigue, trouble concentrating, memory problems, or episodes of confusion.
            </p>

            <p className="mb-6">
              Chronic high blood pressure affects the small blood vessels throughout your brain, potentially leading to what's called vascular cognitive impairment. You might find yourself forgetting appointments, struggling to focus on tasks that were once easy, or feeling mentally foggy. Some people describe feeling "not quite themselves" or notice their thinking isn't as sharp as it used to be.
            </p>

            <p className="mb-6">
              These subtle changes often develop gradually, making them particularly insidious. If family members comment on changes in your memory or personality, or if you're experiencing unexplained fatigue despite adequate rest, it's worth having both your blood pressure and cognitive function evaluated.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Understanding Your Risk and Taking Action
            </h2>

            <p className="mb-6">
              High blood pressure rarely announces itself with obvious symptoms until it reaches dangerous levels or causes organ damage. That's why it's earned its reputation as a silent killer. The American Heart Association estimates that 103 million U.S. adults have high blood pressure, yet many remain undiagnosed or inadequately treated.
            </p>

            <p className="mb-6">
              Several factors increase your risk for developing high blood pressure:
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Age: risk increases after 45 for men and after 55 for women</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Family history of cardiovascular disease</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Being overweight or obese</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Physical inactivity and sedentary lifestyle</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>High sodium diet and excessive alcohol consumption</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Chronic stress and poor sleep quality</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Certain chronic conditions like diabetes and kidney disease</span>
              </li>
            </ul>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              When to Seek Medical Attention
            </h2>

            <p className="mb-6">
              If you experience any of the warning signs described above, don't wait to see if they resolve on their own. Contact your healthcare provider promptly, especially if you have:
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Blood pressure readings consistently above 130/80 mm Hg</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>A sudden spike in blood pressure above 180/120 mm Hg</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Multiple warning symptoms occurring together</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Known risk factors and no recent blood pressure check</span>
              </li>
            </ul>

            <p className="mb-6">
              Call 911 immediately if you have severely elevated blood pressure combined with chest pain, shortness of breath, severe headache, vision changes, difficulty speaking, weakness, or numbness. These could indicate a hypertensive crisis, heart attack, or stroke.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Prevention and Management
            </h2>

            <p className="mb-6">
              The good news is that high blood pressure is highly manageable with the right approach. Lifestyle modifications form the foundation of blood pressure control:
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Monitor regularly:</strong> Check your blood pressure at home and track readings over time</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Reduce sodium:</strong> Aim for less than 2,300 mg per day, ideally 1,500 mg</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Move your body:</strong> Aim for at least 150 minutes of moderate aerobic activity weekly</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Maintain healthy weight:</strong> Even losing 5-10 pounds can significantly lower blood pressure</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Limit alcohol:</strong> No more than two drinks per day for men, one for women</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Manage stress:</strong> Practice relaxation techniques, meditation, or yoga</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Prioritize sleep:</strong> Aim for 7-9 hours of quality sleep each night</span>
              </li>
            </ul>

            <p className="mb-6">
              For many people, medication becomes an important part of blood pressure management. Several classes of medications can effectively lower blood pressure, and your healthcare provider can help determine the best approach for your individual situation.
            </p>

            <p className="text-xl mb-6 mt-12">
              High blood pressure doesn't have to be a life sentence of complications and worry. With awareness of warning signs, regular monitoring, and proactive management, you can protect your heart, brain, kidneys, and overall health. The key is recognizing symptoms early and working closely with a healthcare provider who understands your unique health profile and goals.
            </p>

            <p className="mb-6">
              Don't ignore the warning signs your body is sending. Early detection and treatment of high blood pressure can prevent heart attack, stroke, kidney failure, and other serious complications. Your cardiovascular health is too important to leave to chance.
            </p>
          </div>
        </div>

        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 flex gap-6 items-start">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-[var(--color-ink)] mb-2">Reviewed by Dr. Andrew Hemmen, MD</p>
            <p className="text-[var(--color-muted)] text-sm leading-relaxed">
              This article provides general health information and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult with your healthcare provider about your specific health concerns and before making changes to your treatment plan.
            </p>
          </div>
        </div>
      </article>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Patient Education</p>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  More Health Resources
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Explore our collection of patient education articles and health guides.
                </p>
              </div>
            </Link>

            <Link href="/services" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Primary Care</p>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Comprehensive Primary Care
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Preventive care and chronic disease management in Albuquerque, NM.
                </p>
              </div>
            </Link>

            <Link href="/contact" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Schedule Visit</p>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Book an Appointment
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Schedule a consultation to discuss your blood pressure concerns.
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
            Dr. Hemmen is here to help you manage your blood pressure and protect your long-term health.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] text-white px-8 py-4 rounded-full font-medium hover:bg-[var(--color-accent-dark)] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Schedule Your Visit Today
          </Link>
        </div>
      </section>
    </main>
  )
}