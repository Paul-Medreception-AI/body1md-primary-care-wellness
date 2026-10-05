import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Resources & Patient Education | Body1MD Primary Care & Wellness',
  description: 'Evidence-based information to support your healthcare journey. Expert insights on direct primary care, chronic disease management, preventive health, and wellness strategies.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Resources & Patient Education | Body1MD Primary Care & Wellness',
    description: 'Evidence-based information to support your healthcare journey. Expert insights on direct primary care, chronic disease management, preventive health, and wellness strategies.',
    url: 'https://body1md.com/blog',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resources & Patient Education | Body1MD Primary Care & Wellness',
    description: 'Evidence-based information to support your healthcare journey. Expert insights on direct primary care, chronic disease management, preventive health, and wellness strategies.',
    images: ['/og-image.png']
  }
}

export default function BlogPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl font-light mb-6">Resources & Patient Education</h1>
          <p className="text-xl text-white/90">Evidence-based information to support your healthcare journey</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <article className="bg-white rounded-2xl p-10 border border-[var(--color-border)] shadow-sm animate-fade-up">
            <div className="mb-4">
              <span className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold">Featured Article</span>
            </div>
            <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] mb-6">
              Why Direct Primary Care Is Transforming Healthcare in Austin
            </h2>
            <div className="space-y-4 text-[var(--color-muted)] leading-relaxed mb-8">
              <p>
                The traditional healthcare model is broken. Patients wait weeks for appointments, spend minutes with their doctor, and navigate confusing insurance claims. Direct Primary Care (DPC) offers a revolutionary alternative that puts the doctor-patient relationship back at the center of healthcare delivery.
              </p>
              <p>
                With a simple monthly membership fee, DPC eliminates insurance middlemen and allows physicians to spend meaningful time with patients. This model enables same-day appointments, 24/7 access to your doctor via phone or text, and visits that last as long as needed. The result is better health outcomes, lower overall costs, and a healthcare experience that actually works for busy professionals and families.
              </p>
              <p>
                In Austin, where innovation meets quality of life, Direct Primary Care is gaining rapid adoption among tech professionals, entrepreneurs, and families who demand better from their healthcare. This comprehensive guide explores how DPC works, what it costs, and why it might be the best healthcare decision you make this year.
              </p>
            </div>
            <Link 
              href="/blog/why-direct-primary-care-is-transforming-healthcare"
              className="inline-flex items-center text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-semibold transition-colors"
            >
              Read More →
            </Link>
          </article>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <article className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="mb-4">
                <span className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold">Chronic Disease</span>
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Managing Type 2 Diabetes: A Comprehensive Guide
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                Learn evidence-based strategies for blood sugar control, medication management, and lifestyle modifications that help you thrive with diabetes.
              </p>
              <Link 
                href="/blog/managing-type-2-diabetes"
                className="inline-flex items-center text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-semibold text-sm transition-colors"
              >
                Read More →
              </Link>
            </article>

            <article className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="mb-4">
                <span className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold">Preventive Care</span>
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                5 Health Screenings Every Adult Should Have
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                Early detection saves lives. Discover which preventive screenings you need based on your age, gender, and risk factors.
              </p>
              <Link 
                href="/blog/5-health-screenings-every-adult-should-have"
                className="inline-flex items-center text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-semibold text-sm transition-colors"
              >
                Read More →
              </Link>
            </article>

            <article className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="mb-4">
                <span className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold">Heart Health</span>
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Understanding High Blood Pressure: Causes and Treatment
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                Hypertension is the silent killer. Learn how to monitor, manage, and lower your blood pressure naturally and with medication.
              </p>
              <Link 
                href="/blog/understanding-high-blood-pressure"
                className="inline-flex items-center text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-semibold text-sm transition-colors"
              >
                Read More →
              </Link>
            </article>

            <article className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="mb-4">
                <span className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold">Wellness</span>
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                The Role of Sleep in Overall Health and Disease Prevention
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                Quality sleep is foundational to health. Explore the science of sleep and practical strategies for better rest and recovery.
              </p>
              <Link 
                href="/blog/the-role-of-sleep-in-overall-health"
                className="inline-flex items-center text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-semibold text-sm transition-colors"
              >
                Read More →
              </Link>
            </article>

            <article className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="mb-4">
                <span className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold">Nutrition</span>
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Anti-Inflammatory Diet: Foods That Heal
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                Chronic inflammation drives disease. Discover which foods fight inflammation and which ones fuel it.
              </p>
              <Link 
                href="/blog/anti-inflammatory-diet-foods-that-heal"
                className="inline-flex items-center text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-semibold text-sm transition-colors"
              >
                Read More →
              </Link>
            </article>

            <article className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="mb-4">
                <span className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold">Mental Health</span>
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                How Stress Affects Your Physical Health
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                The mind-body connection is real. Learn how chronic stress impacts your heart, immune system, and overall wellbeing.
              </p>
              <Link 
                href="/blog/how-stress-affects-your-physical-health"
                className="inline-flex items-center text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-semibold text-sm transition-colors"
              >
                Read More →
              </Link>
            </article>

            <article className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="mb-4">
                <span className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold">Primary Care</span>
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                When to See Your Doctor vs. Urgent Care
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                Not all health concerns are created equal. Know when to call your primary care physician and when to head to urgent care.
              </p>
              <Link 
                href="/blog/when-to-see-your-doctor-vs-urgent-care"
                className="inline-flex items-center text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-semibold text-sm transition-colors"
              >
                Read More →
              </Link>
            </article>

            <article className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="mb-4">
                <span className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold">Aging Well</span>
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Healthy Aging: What to Expect in Your 40s, 50s, and Beyond
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                Aging is inevitable, but decline is optional. Learn proactive strategies for maintaining vitality at every stage of life.
              </p>
              <Link 
                href="/blog/healthy-aging-what-to-expect"
                className="inline-flex items-center text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-semibold text-sm transition-colors"
              >
                Read More →
              </Link>
            </article>

            <article className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="mb-4">
                <span className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold">Patient Education</span>
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Understanding Your Lab Results: A Patient's Guide
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                Lab work can be confusing. We break down common blood tests and what your numbers really mean for your health.
              </p>
              <Link 
                href="/blog/understanding-your-lab-results"
                className="inline-flex items-center text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-semibold text-sm transition-colors"
              >
                Read More →
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl font-light text-white mb-6">
            Ready to Experience Primary Care Reimagined?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Join Body1MD and enjoy same-day appointments, 24/7 access to your doctor, and unhurried visits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold rounded-full transition-all"
            >
              Schedule Your Consultation
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border-2 border-white/30 transition-all"
            >
              Learn About Membership
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}