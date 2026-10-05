import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Type 2 Diabetes Reversal: What Science Says | Body1MD',
  description: 'Explore the evidence-based research on reversing type 2 diabetes through diet and lifestyle changes. Learn practical strategies for better blood sugar control.',
  alternates: { canonical: '/blog/type-2-diabetes-reversal-what-science-says-about-diet-and-li' },
  openGraph: {
    title: 'Type 2 Diabetes Reversal: What Science Says | Body1MD',
    description: 'Explore the evidence-based research on reversing type 2 diabetes through diet and lifestyle changes. Learn practical strategies for better blood sugar control.',
    url: 'https://body1md.com/blog/type-2-diabetes-reversal-what-science-says-about-diet-and-li',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/images/blog/type-2-diabetes-reversal-what-science-says-about-diet-and-li.jpg', alt: 'Fresh tomatoes, cucumbers, lettuce, onions and herbs on a wooden cutting board' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Type 2 Diabetes Reversal: What Science Says | Body1MD',
    description: 'Explore the evidence-based research on reversing type 2 diabetes through diet and lifestyle changes. Learn practical strategies for better blood sugar control.',
    images: ['/images/blog/type-2-diabetes-reversal-what-science-says-about-diet-and-li.jpg']
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
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4">
            Patient Education
          </div>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Type 2 Diabetes Reversal: What Science Says About Diet and Lifestyle
          </h1>
          <div className="flex justify-center items-center gap-6 text-sm text-white/80">
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
          <Image src="/images/blog/type-2-diabetes-reversal-what-science-says-about-diet-and-li.jpg" alt="Fresh tomatoes, cucumbers, lettuce, onions and herbs on a wooden cutting board" fill priority className="object-cover" sizes="(max-width: 896px) 100vw, 896px" />
        </div>
      </div>

      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[var(--color-ink)] leading-loose text-base">
            <p className="text-xl leading-relaxed mb-6">
              For decades, type 2 diabetes has been described as a chronic, progressive disease, one that only worsens over time. But emerging research is challenging this narrative. Studies now show that for many people, type 2 diabetes can be reversed through intentional diet and lifestyle changes. Not just managed, but reversed, meaning blood sugar levels return to normal ranges without the need for medication.
            </p>
            <p className="mb-6">
              This shift in understanding offers hope to millions living with diabetes, but it also raises important questions: What does reversal really mean? What does the science actually say? And what practical steps can people take to pursue this outcome?
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              What Does "Reversal" Actually Mean?
            </h2>
            <p className="mb-6">
              Diabetes reversal, also called remission, occurs when blood sugar levels return to non-diabetic ranges (HbA1c below 6.5%) for at least three months without the use of diabetes medications. It doesn't mean the disease is cured. If old habits return, blood sugar levels can rise again. But it does mean that the underlying metabolic dysfunction has been significantly improved.
            </p>
            <p className="mb-6">
              Reversal is most achievable in people who have had diabetes for a shorter time, typically less than six years. The longer someone has had elevated blood sugar, the more damage occurs to insulin-producing cells in the pancreas, making reversal more difficult, though not impossible.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              The Evidence: What Research Shows
            </h2>
            <p className="mb-6">
              One of the most compelling studies on diabetes reversal is the DiRECT trial, published in The Lancet in 2017. This landmark study followed nearly 300 adults with type 2 diabetes who were placed on a structured, low-calorie diet program aimed at significant weight loss. The results were striking: 46% of participants achieved remission at one year, and many maintained it at two years.
            </p>
            <p className="mb-6">
              The key mechanism? Weight loss, particularly the reduction of fat around the liver and pancreas. This visceral fat interferes with insulin function and glucose metabolism. When it's reduced, the body's ability to regulate blood sugar improves dramatically.
            </p>
            <p className="mb-6">
              Other studies have confirmed similar findings. Research on very low-carbohydrate diets, intermittent fasting, and plant-based eating patterns have all shown promising results in reducing HbA1c levels, decreasing medication needs, and in some cases, achieving full remission.
            </p>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 italic text-xl font-cormorant text-[var(--color-ink)]">
              "Weight loss, particularly the reduction of fat around the liver and pancreas, is one of the most powerful tools we have for reversing type 2 diabetes."
            </div>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Diet Strategies That Work
            </h2>
            <p className="mb-6">
              While there's no one-size-fits-all approach, several dietary patterns have shown strong evidence for improving blood sugar control and supporting reversal:
            </p>
            <div className="space-y-4 my-8">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Low-Carbohydrate Diets:</strong> Reducing carbohydrate intake lowers blood sugar spikes and decreases insulin demand. Many people see rapid improvements in blood sugar control within weeks.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Very Low-Calorie Diets (VLCDs):</strong> Used in structured programs like DiRECT, these diets typically involve 800-900 calories per day for 8-12 weeks, followed by gradual reintroduction of food. They promote rapid weight loss and metabolic improvement.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Mediterranean and Plant-Based Diets:</strong> Rich in vegetables, whole grains, legumes, nuts, and healthy fats, these diets improve insulin sensitivity and reduce inflammation.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Intermittent Fasting:</strong> Time-restricted eating or alternate-day fasting can improve insulin sensitivity and support weight loss, though it requires careful monitoring in people on diabetes medications.</p>
              </div>
            </div>
            <p className="mb-6">
              The best approach depends on individual preferences, medical history, and what's sustainable long-term. Working with a healthcare provider or registered dietitian is essential, especially for anyone taking diabetes medications, as blood sugar levels can drop quickly with dietary changes.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              The Role of Physical Activity
            </h2>
            <p className="mb-6">
              Exercise is a powerful complement to dietary changes. Physical activity helps muscles use glucose more efficiently, improves insulin sensitivity, and supports weight loss. Both aerobic exercise (like walking, cycling, or swimming) and resistance training (like weightlifting or bodyweight exercises) have been shown to lower HbA1c levels.
            </p>
            <p className="mb-6">
              The American Diabetes Association recommends at least 150 minutes of moderate-intensity aerobic activity per week, along with two or more days of resistance training. But even small amounts of movement (like a 15-minute walk after meals) can have meaningful effects on blood sugar control.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Who Is a Good Candidate for Reversal?
            </h2>
            <p className="mb-6">
              Diabetes reversal is most likely in people who:
            </p>
            <div className="space-y-4 my-8">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p>Have been diagnosed within the last six years</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p>Are overweight or obese and able to achieve significant weight loss</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p>Are not dependent on insulin or have minimal insulin resistance</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p>Are motivated and have support for lifestyle change</p>
              </div>
            </div>
            <p className="mb-6">
              That said, even people with longer-standing diabetes can see significant improvements in blood sugar control, medication needs, and overall health through diet and lifestyle changes, even if full remission isn't achieved.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Taking the First Step
            </h2>
            <p className="mb-6">
              If you're living with type 2 diabetes, the science is clear: lifestyle changes can have profound effects on your health. Reversal may be possible, but even without achieving remission, you can reduce your medication burden, lower your risk of complications, and improve your quality of life.
            </p>
            <p className="mb-6">
              The most important step is to work with a healthcare provider who understands the nuances of diabetes reversal and can tailor a plan to your specific situation. This might include a structured diet program, regular monitoring of blood sugar and medications, and support for long-term habit change.
            </p>
            <p className="mb-6">
              At Body1MD Primary Care & Wellness in Los Ranchos de Albuquerque, we partner with patients to create personalized, evidence-based plans for managing and reversing type 2 diabetes. Whether you're newly diagnosed or have been living with diabetes for years, there are steps you can take today to improve your metabolic health. You don't have to do this alone. We're here to guide you every step of the way.
            </p>
          </div>
        </div>
      </article>

      <aside className="bg-[var(--color-cream)] py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-ink)] mb-2">Reviewed by Dr. Andrew Hemmen, MD</p>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Dr. Andrew Hemmen is a board-certified internal medicine physician who has cared for patients in New Mexico since 2008. At Body1MD in Los Ranchos de Albuquerque, he provides evidence-based patient education and direct primary care.
              </p>
            </div>
          </div>
        </div>
      </aside>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="aspect-[16/9] bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Resources</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Explore More Health Articles
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Browse our collection of evidence-based resources on chronic disease management and prevention.
                </p>
              </div>
            </Link>

            <Link href="/services/chronic-disease-management" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="aspect-[16/9] bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Services</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Chronic Disease Management
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Personalized care plans for diabetes, hypertension, and other chronic conditions.
                </p>
              </div>
            </Link>

            <Link href="/services" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="aspect-[16/9] bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Services</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Nutrition Optimization
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Guidance on nutrition, supplements, and lifestyle habits that support better blood sugar control.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-lg mb-8 text-white/90">Dr. Hemmen is here to help.</p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}