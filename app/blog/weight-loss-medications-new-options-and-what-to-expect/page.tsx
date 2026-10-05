import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Weight Loss Medications: New Options and What to Expect',
  description: 'Explore the latest weight loss medications including GLP-1 agonists, who they help, what to expect, and how to achieve sustainable results with medical support.',
  alternates: { canonical: '/blog/weight-loss-medications-new-options-and-what-to-expect' },
  openGraph: {
    title: 'Weight Loss Medications: New Options and What to Expect',
    description: 'Explore the latest weight loss medications including GLP-1 agonists, who they help, what to expect, and how to achieve sustainable results with medical support.',
    url: 'https://body1md.com/blog/weight-loss-medications-new-options-and-what-to-expect',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Weight Loss Medications: New Options and What to Expect',
    description: 'Explore the latest weight loss medications including GLP-1 agonists, who they help, what to expect, and how to achieve sustainable results with medical support.',
    images: ['/og-image.png'],
  },
}

export default function WeightLossMedicationsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-white/80 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
            <span>›</span>
            <span>Article</span>
          </div>

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4">
            Patient Education
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Weight Loss Medications: New Options and What to Expect
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published January 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Reviewed by Body1MD Primary Care & Wellness</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening */}
          <div className="text-[var(--color-ink)] leading-loose text-base space-y-6">
            <p className="text-xl font-light text-[var(--color-muted)] leading-relaxed">
              If you've struggled with weight loss despite your best efforts with diet and exercise, you're not alone. For millions of people, weight management is a complex medical issue influenced by genetics, hormones, metabolism, and environment. The good news? A new generation of weight loss medications is offering real hope and results for those who need medical support on their journey to better health.
            </p>

            <p>
              In recent years, medications originally developed for diabetes management have emerged as powerful tools for weight loss. These medications work differently than anything we've had before, and they're helping patients achieve sustainable results when combined with lifestyle changes. Let's explore what these new options are, who they can help, and what you should realistically expect.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The New Generation: GLP-1 Receptor Agonists
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base space-y-6">
            <p>
              The most talked-about weight loss medications today are GLP-1 receptor agonists. This class includes semaglutide (marketed as Wegovy for weight loss and Ozempic for diabetes) and tirzepatide (Mounjaro and Zepbound). These medications work by mimicking a naturally occurring hormone in your body called glucagon-like peptide-1, which regulates appetite and blood sugar.
            </p>
            <p>
              Unlike older weight loss medications that worked primarily as stimulants or appetite suppressants, GLP-1 medications work on multiple pathways. They slow stomach emptying, helping you feel full longer. They act on brain centers that control appetite, reducing cravings and the constant thoughts about food that many people struggle with. They also improve insulin sensitivity and blood sugar control, which is particularly beneficial for people with prediabetes or type 2 diabetes.
            </p>
            <p>
              Clinical trials have shown impressive results. Patients taking semaglutide lost an average of 15-20% of their body weight over 68 weeks, while tirzepatide showed even higher average weight loss of up to 22% in some studies. These results are comparable to what we see with bariatric surgery, making these medications a true game-changer in obesity medicine.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
              "These medications aren't about vanity or quick fixes—they're medical tools that address the biological drivers of obesity, giving people a real chance to achieve and maintain a healthier weight."
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Who Are These Medications For?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base space-y-6">
            <p>
              Weight loss medications aren't appropriate for everyone who wants to lose a few pounds. These are medical treatments designed for people with obesity or those who are overweight with weight-related health conditions. Generally, you may be a candidate if you have:
            </p>
            
            <ul className="space-y-3 my-6">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>A body mass index (BMI) of 30 or higher, or</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>A BMI of 27 or higher with at least one weight-related health condition such as high blood pressure, type 2 diabetes, high cholesterol, or sleep apnea</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>A history of trying to lose weight through diet and exercise without sustained success</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>No contraindications such as a personal or family history of medullary thyroid cancer or multiple endocrine neoplasia syndrome type 2</span>
              </li>
            </ul>

            <p>
              It's important to understand that these medications work best as part of a comprehensive approach. They're not magic pills that work alone—they're tools that make it easier to stick with the healthy eating and activity changes that lead to lasting weight loss. Your provider will evaluate your overall health, medical history, and weight loss goals to determine if medication is appropriate for you.
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What to Expect: The Treatment Journey
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base space-y-6">
            <p>
              Starting a weight loss medication is a process, not a one-time event. Most GLP-1 medications are given as weekly injections using a pre-filled pen device that you use at home. The needles are very small, and most patients find the injections surprisingly easy after the first few times.
            </p>
            <p>
              Treatment typically starts with a low dose that's gradually increased over several weeks or months. This gradual approach helps minimize side effects and allows your body to adjust. You'll have regular follow-up appointments to monitor your progress, adjust your dose if needed, and address any concerns.
            </p>
            <p>
              Weight loss is usually gradual—typically 1-2 pounds per week once you reach an effective dose. You may notice changes in your appetite within the first few weeks, but visible weight loss takes time. Most people see their most significant results between months 3-6 of treatment, with continued gradual loss through the first year.
            </p>
            <p>
              Beyond the number on the scale, many patients report other benefits: fewer cravings, less food noise (the constant thinking about eating), improved energy levels, better blood sugar control, and reduced joint pain from carrying less weight. These quality-of-life improvements can be just as meaningful as the weight loss itself.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Managing Side Effects
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base space-y-6">
            <p>
              Like all medications, GLP-1 agonists can cause side effects, though not everyone experiences them. The most common side effects are gastrointestinal: nausea, constipation, diarrhea, or stomach discomfort. These are usually mild to moderate and tend to improve over time as your body adjusts.
            </p>
            <p>
              To minimize side effects, your provider will start you on a low dose and increase gradually. Eating smaller, more frequent meals, avoiding high-fat foods, and staying well-hydrated can help. If side effects are bothersome, your provider can adjust your dose or recommend strategies to manage them.
            </p>
            <p>
              More serious side effects are rare but can include pancreatitis, gallbladder problems, or changes in vision for people with diabetic retinopathy. This is why medical supervision is essential—your provider will monitor you throughout treatment and help you watch for any concerning symptoms.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Cost and Insurance Coverage
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base space-y-6">
            <p>
              The cost of weight loss medications is a significant consideration. Without insurance coverage, these medications can cost $900-$1,300 per month. However, coverage is improving as more insurers recognize obesity as a medical condition that warrants treatment.
            </p>
            <p>
              Many insurance plans now cover GLP-1 medications for weight loss, particularly if you have related health conditions like diabetes or heart disease. Medicare covers some of these medications for diabetes but not yet for weight loss alone, though this may change. Manufacturer copay assistance programs can significantly reduce out-of-pocket costs for eligible patients.
            </p>
            <p>
              Your healthcare provider can work with you to navigate insurance coverage, explore patient assistance programs, or discuss alternative options if cost is a barrier. Some practices also offer compounded versions of these medications at lower costs, though availability and regulations vary.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Long-Term Success: Medication Plus Lifestyle
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base space-y-6">
            <p>
              One of the most important things to understand about weight loss medications is that they work best when combined with lifestyle changes. The medication makes it easier to eat less and make healthier choices, but you still need to actually make those choices.
            </p>
            <p>
              This means working on nutrition—learning to choose foods that nourish your body, eating mindfully, and developing a healthy relationship with food. It means incorporating physical activity that you enjoy and can sustain. It means addressing sleep, stress, and other factors that affect weight. The medication gives you a window of opportunity to build these habits while your appetite is reduced and weight is coming off.
            </p>
            <p>
              Many people wonder how long they'll need to stay on medication. The honest answer is that for most people, this is a long-term or potentially lifelong treatment. Obesity is a chronic medical condition, and when medication is stopped, many people experience weight regain as appetite increases and metabolism adjusts. However, the health benefits you gain while losing weight—improved blood pressure, blood sugar, cholesterol, and reduced disease risk—have lasting value even if some weight returns.
            </p>
          </div>

          {/* Takeaways Section */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Key Takeaways
          </h2>
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 my-8">
            <ul className="space-y-4">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">New weight loss medications work by regulating appetite hormones and can lead to significant, sustained weight loss</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">These medications are appropriate for people with obesity or overweight with related health conditions</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Treatment requires medical supervision, starting with low doses and gradually increasing</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Side effects are usually manageable and improve over time with proper management</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Best results come from combining medication with lifestyle changes in nutrition and physical activity</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Insurance coverage is improving, and assistance programs can help reduce costs</span>
              </li>
            </ul>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base space-y-6 mt-12">
            <p>
              Weight loss medications represent a genuine breakthrough for people struggling with obesity. They're not about shortcuts or vanity—they're medical tools that address the biological factors driving weight gain and making weight loss so difficult. When used appropriately under medical supervision and combined with lifestyle changes, they can help people achieve healthier weights and reduce their risk of serious health conditions.
            </p>
            <p>
              If you've been struggling with weight and wondering if medication might be right for you, the best first step is a conversation with a healthcare provider who understands obesity medicine. They can evaluate your individual situation, discuss your goals, review your medical history, and help you make an informed decision about whether weight loss medication is appropriate for your situation.
            </p>
            <p className="font-medium">
              Remember, everyone's weight loss journey is different. What matters most is finding an approach that's medically sound, sustainable for you, and supported by a care team who understands that weight management is about your health and wellbeing, not just a number on the scale.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-ink)] mb-2">
                Reviewed by Body1MD Primary Care & Wellness
              </div>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Our team is dedicated to providing comprehensive, evidence-based primary care in Austin, TX. We believe in taking time to understand each patient's unique health needs and partnering with you to achieve your wellness goals through personalized, accessible care.
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
            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Patient Education</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  More Health Resources
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Explore our library of articles on wellness, chronic disease management, and preventive care.
                </p>
                <div className="text-[var(--color-accent)] text-sm font-medium flex items-center gap-2">
                  Browse articles
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/services/chronic-disease-management" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Services</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Chronic Disease Management
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Comprehensive support for managing diabetes, hypertension, and other chronic conditions.
                </p>
                <div className="text-[var(--color-accent)] text-sm font-medium flex items-center gap-2">
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/services/preventive-care" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Services</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Preventive Care & Wellness
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Proactive health screenings and wellness plans to keep you healthy for years to come.
                </p>
                <div className="text-[var(--color-accent)] text-sm font-medium flex items-center gap-2">
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
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
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our team is here to help you explore your options and develop a personalized plan for achieving your health goals.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}