import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Conditions We Treat | Body1MD Primary Care & Wellness',
  description: 'Comprehensive primary care for diabetes, hypertension, infections, chronic disease management, and acute illness. Board-certified physicians in Austin, TX.',
  alternates: { canonical: '/conditions' },
  openGraph: {
    title: 'Conditions We Treat | Body1MD Primary Care & Wellness',
    description: 'Comprehensive primary care for diabetes, hypertension, infections, chronic disease management, and acute illness. Board-certified physicians in Austin, TX.',
    url: 'https://body1md.com/conditions',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conditions We Treat | Body1MD Primary Care & Wellness',
    description: 'Comprehensive primary care for diabetes, hypertension, infections, chronic disease management, and acute illness. Board-certified physicians in Austin, TX.',
    images: ['/og-image.png']
  }
}

export default function ConditionsPage() {
  const conditions = [
    {
      name: 'Diabetes Management',
      slug: 'diabetes',
      description: 'Comprehensive care for Type 1 and Type 2 diabetes with personalized treatment plans, continuous glucose monitoring guidance, and lifestyle coaching. We help you maintain optimal blood sugar control and prevent complications.',
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>
    },
    {
      name: 'Hypertension (High Blood Pressure)',
      slug: 'hypertension',
      description: 'Expert blood pressure management to reduce your risk of heart attack, stroke, and kidney disease. We combine medication management with lifestyle modifications for optimal cardiovascular health.',
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
    },
    {
      name: 'Respiratory Infections',
      slug: 'respiratory-infections',
      description: 'Same-day treatment for colds, flu, bronchitis, pneumonia, and sinus infections. Quick diagnosis and treatment to get you feeling better faster without urgent care delays.',
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>
    },
    {
      name: 'Heart Disease & Cholesterol',
      slug: 'heart-disease',
      description: 'Comprehensive cardiovascular care including cholesterol management, heart disease prevention, and monitoring for existing conditions. Regular screenings and personalized treatment plans protect your heart health.',
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
    },
    {
      name: 'Thyroid Disorders',
      slug: 'thyroid-disorders',
      description: 'Expert diagnosis and management of hypothyroidism, hyperthyroidism, and thyroid nodules. We optimize your thyroid hormone levels to restore energy, metabolism, and overall wellness.',
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" /></svg>
    },
    {
      name: 'Asthma & Allergies',
      slug: 'asthma-allergies',
      description: 'Personalized asthma management and allergy treatment to help you breathe easier. From inhaler optimization to environmental trigger identification, we keep your symptoms under control year-round.',
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" /></svg>
    },
    {
      name: 'Arthritis & Joint Pain',
      slug: 'arthritis',
      description: 'Comprehensive care for osteoarthritis, rheumatoid arthritis, and chronic joint pain. We combine medication, physical therapy guidance, and lifestyle modifications to improve mobility and reduce pain.',
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>
    },
    {
      name: 'Skin Conditions & Rashes',
      slug: 'skin-conditions',
      description: 'Treatment for eczema, psoriasis, acne, rashes, and common dermatological concerns. Quick diagnosis and effective management of skin issues that affect your comfort and confidence.',
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    },
    {
      name: 'Urinary Tract Infections',
      slug: 'uti',
      description: 'Fast relief for painful UTIs and bladder infections with same-day appointments. We also address recurrent infections with preventive strategies to reduce future episodes.',
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" /></svg>
    },
    {
      name: 'Digestive Issues',
      slug: 'digestive-issues',
      description: 'Expert care for acid reflux, IBS, constipation, and other gastrointestinal concerns. We identify triggers, optimize treatment, and improve your digestive health and comfort.',
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    },
    {
      name: 'Osteoporosis & Bone Health',
      slug: 'osteoporosis',
      description: 'Bone density screening, fracture prevention, and treatment for osteoporosis. We help maintain strong bones through medication management, calcium optimization, and fall prevention strategies.',
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" /></svg>
    },
    {
      name: 'Anxiety & Depression',
      slug: 'anxiety-depression',
      description: 'Compassionate primary care management of anxiety and depression with medication management and coordination with mental health specialists. We address the whole person in a supportive environment.',
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" /></svg>
    }
  ]

  const warningSigns = [
    {
      title: 'Persistent Symptoms',
      description: 'Ongoing pain, fatigue, fever, or other symptoms lasting more than a few days despite home care.',
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    },
    {
      title: 'Worsening Chronic Condition',
      description: 'Difficulty managing diabetes, blood pressure, or other chronic conditions despite following your treatment plan.',
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
    },
    {
      title: 'Quality of Life Impact',
      description: 'Health concerns affecting your ability to work, sleep, exercise, or enjoy daily activities.',
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" /></svg>
    }
  ]

  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl font-light mb-6">
            Conditions We Treat
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            Evidence-based primary care for a full range of acute and chronic health conditions in Austin, TX
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center text-[var(--color-ink)] mb-4">
            Comprehensive Primary Care
          </h2>
          <p className="text-center text-[var(--color-muted)] text-lg mb-16 max-w-3xl mx-auto">
            From chronic disease management to same-day acute illness care, our board-certified physicians provide expert treatment with the time and attention you deserve.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((condition, index) => (
              <Link
                key={index}
                href={`/conditions/${condition.slug}`}
                className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-up block"
              >
                <div className="stroke-[var(--color-primary)]">
                  {condition.icon}
                </div>
                <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-4">
                  {condition.name}
                </h3>
                <p className="text-[var(--color-muted)] text-sm mt-3 leading-relaxed">
                  {condition.description}
                </p>
                <span className="text-[var(--color-primary)] font-semibold text-sm mt-4 inline-block hover:underline">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center text-[var(--color-ink)] mb-16">
            When to Seek Help
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {warningSigns.map((sign, index) => (
              <div key={index} className="text-center animate-fade-up">
                <div className="stroke-[var(--color-primary)] flex justify-center mb-4">
                  {sign.icon}
                </div>
                <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                  {sign.title}
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  {sign.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-[var(--color-cream)] rounded-2xl p-8 md:p-12 border-l-4 border-[var(--color-accent)] max-w-4xl mx-auto">
            <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-4">
              Crisis Resources Available 24/7
            </h3>
            <div className="space-y-3 text-[var(--color-muted)]">
              <p>
                <strong className="text-[var(--color-ink)]">988 Suicide & Crisis Lifeline:</strong> Call or text 988 for immediate support
              </p>
              <p>
                <strong className="text-[var(--color-ink)]">Crisis Text Line:</strong> Text HOME to 741741
              </p>
              <p>
                <strong className="text-[var(--color-ink)]">Emergency:</strong> Call 911 or go to your nearest emergency room for life-threatening conditions
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-24 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl font-light mb-6">
            Ready to Experience Better Primary Care?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Get same-day appointments, 24/7 access to your doctor, and the time you need to address your health concerns. No more rushed visits or insurance hassles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
            >
              Schedule Your Consultation
            </Link>
            <Link
              href="/services"
              className="bg-white hover:bg-gray-50 text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
            >
              Learn About Membership
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}