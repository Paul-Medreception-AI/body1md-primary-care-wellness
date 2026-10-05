import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Lab Work Explained: What Your Annual Blood Tests Reveal',
  description: 'Understand what your routine blood work measures and why these annual tests matter for your health. Learn about CBC, metabolic panels, lipids, and more from Body1MD Primary Care & Wellness.',
  alternates: { canonical: '/blog/lab-work-explained-what-your-annual-blood-tests-reveal' },
  openGraph: {
    title: 'Lab Work Explained: What Your Annual Blood Tests Reveal',
    description: 'Understand what your routine blood work measures and why these annual tests matter for your health. Learn about CBC, metabolic panels, lipids, and more from Body1MD Primary Care & Wellness.',
    url: 'https://body1md.com/blog/lab-work-explained-what-your-annual-blood-tests-reveal',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/images/blog/lab-work-explained-what-your-annual-blood-tests-reveal.jpg', alt: 'Gloved hand holding two blood sample tubes' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lab Work Explained: What Your Annual Blood Tests Reveal',
    description: 'Understand what your routine blood work measures and why these annual tests matter for your health. Learn about CBC, metabolic panels, lipids, and more from Body1MD Primary Care & Wellness.',
    images: ['/images/blog/lab-work-explained-what-your-annual-blood-tests-reveal.jpg'],
  },
}

export default function LabWorkExplainedPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-sm mb-6 text-white/80">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>
          
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>
          
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-6">
            Lab Work Explained: What Your Annual Blood Tests Reveal
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
          <Image src="/images/blog/lab-work-explained-what-your-annual-blood-tests-reveal.jpg" alt="Gloved hand holding two blood sample tubes" fill priority className="object-cover" sizes="(max-width: 896px) 100vw, 896px" />
        </div>
      </div>

      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[var(--color-ink)] leading-loose text-base">
            <p className="text-xl mb-6">
              You sit in the exam room, waiting for your doctor to review your lab results. The numbers on the paper look like a foreign language: CBC, LDL, A1C, TSH. What do they all mean? More importantly, what story do they tell about your health?
            </p>
            
            <p className="mb-6">
              Annual blood work is one of the most powerful tools in preventive medicine. These tests offer a window into how your body is functioning at a cellular level, often revealing problems years before symptoms appear. Understanding what your labs measure, and what the results mean, empowers you to take charge of your health and have more meaningful conversations with your healthcare provider.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              The Complete Blood Count (CBC): Your Blood Cell Status Report
            </h2>
            
            <p className="mb-6">
              The CBC is typically the first panel your doctor orders, and for good reason. This single test measures three critical components of your blood: red blood cells, white blood cells, and platelets.
            </p>
            
            <p className="mb-6">
              <strong>Red blood cells (RBC)</strong> carry oxygen throughout your body. Low RBC count or hemoglobin levels can indicate anemia, which explains why you might feel constantly tired or short of breath. High levels might signal dehydration or a condition affecting oxygen delivery to tissues.
            </p>
            
            <p className="mb-6">
              <strong>White blood cells (WBC)</strong> are your immune system's frontline defenders. An elevated count often means your body is fighting an infection or dealing with inflammation. A low count might suggest a weakened immune system or certain medications suppressing immune function.
            </p>
            
            <p className="mb-6">
              <strong>Platelets</strong> help your blood clot properly. Too few increases bleeding risk; too many can raise the risk of dangerous clots.
            </p>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
              <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
                "Lab work doesn't just diagnose disease. It catches problems in their earliest, most treatable stages. A single blood test can reveal risks you didn't know existed."
              </p>
            </div>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Comprehensive Metabolic Panel (CMP): Your Body's Chemistry Set
            </h2>
            
            <p className="mb-6">
              The CMP checks 14 different measurements that reveal how well your kidneys and liver are working, your blood sugar levels, and your electrolyte balance. This panel is essential for detecting diabetes, kidney disease, and liver problems before they cause serious damage.
            </p>
            
            <p className="mb-6">
              <strong>Glucose</strong> measures your blood sugar. Consistently elevated levels (100-125 mg/dL fasting) indicate prediabetes, while levels above 126 mg/dL suggest diabetes. Catching elevated glucose early gives you the opportunity to prevent or delay full diabetes through lifestyle changes.
            </p>
            
            <p className="mb-6">
              <strong>Creatinine and BUN</strong> assess kidney function. Your kidneys filter waste from your blood, and elevated levels of these markers indicate the kidneys aren't doing their job efficiently. Since kidney disease often progresses silently, these tests are critical for early detection.
            </p>
            
            <p className="mb-6">
              <strong>Liver enzymes</strong> (ALT, AST, alkaline phosphatase) reveal liver health. Elevated enzymes can signal fatty liver disease, hepatitis, or medication side effects. With liver disease on the rise due to obesity and metabolic syndrome, monitoring these markers is increasingly important.
            </p>
            
            <p className="mb-6">
              <strong>Electrolytes</strong> (sodium, potassium, chloride, carbon dioxide) keep your heart beating regularly and your muscles functioning. Imbalances can cause symptoms ranging from muscle cramps to dangerous heart rhythm problems.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Lipid Panel: Mapping Your Cardiovascular Risk
            </h2>
            
            <p className="mb-6">
              Heart disease remains the leading cause of death in the United States, and the lipid panel is your early warning system. This test measures different types of cholesterol and triglycerides in your blood.
            </p>
            
            <p className="mb-6">
              <strong>Total cholesterol</strong> gives an overview, but the details matter more. <strong>LDL cholesterol</strong> is often called "bad" cholesterol because high levels contribute to plaque buildup in arteries. Ideally, LDL should be below 100 mg/dL, though optimal targets vary based on your overall cardiovascular risk.
            </p>
            
            <p className="mb-6">
              <strong>HDL cholesterol</strong> is the "good" cholesterol that actually helps remove other cholesterol from your bloodstream. Higher HDL levels (above 60 mg/dL) are protective, while low HDL (below 40 mg/dL for men, 50 mg/dL for women) increases risk.
            </p>
            
            <p className="mb-6">
              <strong>Triglycerides</strong> are another type of fat in your blood. Elevated levels (above 150 mg/dL) often reflect a diet high in refined carbohydrates and sugar, and they independently raise cardiovascular risk.
            </p>
            
            <p className="mb-6">
              The ratio between these values matters as much as the individual numbers. Your doctor will assess your lipid panel in context with other risk factors like blood pressure, smoking status, family history, and age to determine your overall cardiovascular risk and whether medication is needed.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Hemoglobin A1C: Your Three-Month Blood Sugar Average
            </h2>
            
            <p className="mb-6">
              While a fasting glucose test shows your blood sugar at a single moment in time, the A1C test reveals your average blood sugar over the past three months. It does this by measuring how much glucose has attached to your red blood cells.
            </p>
            
            <p className="mb-6">
              An A1C below 5.7% is normal. Levels between 5.7% and 6.4% indicate prediabetes, a crucial window when lifestyle changes can prevent progression to diabetes. An A1C of 6.5% or higher on two separate tests means diabetes.
            </p>
            
            <p className="mb-6">
              For people already diagnosed with diabetes, the A1C is the gold standard for monitoring control. Even small reductions in A1C significantly lower the risk of complications like kidney disease, nerve damage, and vision loss.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Thyroid Function: Your Metabolic Thermostat
            </h2>
            
            <p className="mb-6">
              The thyroid is a small gland with enormous influence over your metabolism, energy, weight, mood, and body temperature. Thyroid problems affect millions of Americans, and many don't realize their symptoms are thyroid-related.
            </p>
            
            <p className="mb-6">
              <strong>TSH (thyroid-stimulating hormone)</strong> is usually the first test ordered. It measures the signal from your brain telling your thyroid to produce hormones. High TSH typically means your thyroid is underactive (hypothyroidism), causing symptoms like fatigue, weight gain, cold intolerance, and depression. Low TSH suggests an overactive thyroid (hyperthyroidism), which can cause anxiety, weight loss, rapid heartbeat, and heat intolerance.
            </p>
            
            <p className="mb-6">
              Depending on your TSH results, your doctor might order additional tests like free T4 or free T3 to get a complete picture of thyroid function. Since thyroid disease is easily treated with medication, testing is especially important if you have unexplained symptoms.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Vitamin D: The Sunshine Vitamin
            </h2>
            
            <p className="mb-6">
              Vitamin D deficiency has become increasingly common, especially in people who work indoors or live in northern climates. This vitamin is crucial for bone health, immune function, and mood regulation.
            </p>
            
            <p className="mb-6">
              Optimal vitamin D levels are typically considered to be 30-50 ng/mL, though there's some debate about the ideal range. Deficiency (below 20 ng/mL) increases the risk of osteoporosis, fractures, infections, and possibly depression. Fortunately, deficiency is easily corrected with supplementation.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              What to Do With Your Results
            </h2>
            
            <p className="mb-6">
              Understanding your lab work is the first step; acting on it is what matters. Here's how to make the most of your results:
            </p>

            <div className="my-8 space-y-4">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)]">
                  <strong>Ask questions.</strong> Don't leave your appointment until you understand what each abnormal result means and what the plan is to address it.
                </p>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)]">
                  <strong>Track trends over time.</strong> A single abnormal value might be less significant than a pattern of changes across multiple years.
                </p>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)]">
                  <strong>Request a copy.</strong> Keep your own records of lab results so you can compare them year to year and have them available if you switch providers.
                </p>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)]">
                  <strong>Focus on what you can control.</strong> Many lab abnormalities improve with lifestyle changes: better diet, regular exercise, adequate sleep, stress management, and avoiding tobacco and excessive alcohol.
                </p>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)]">
                  <strong>Follow through on recommendations.</strong> If your doctor suggests follow-up testing, lifestyle modifications, or medication, take those recommendations seriously. Early intervention makes a dramatic difference.
                </p>
              </div>
            </div>

            <p className="mt-8 mb-6">
              Your annual lab work is more than just a routine checkbox. It's a comprehensive health report that can detect problems years before they become serious. The numbers on those pages tell a story about your current health and predict your future risk. By understanding what these tests measure and what your results mean, you become an active partner in your healthcare rather than a passive recipient.
            </p>
            
            <p className="mb-6">
              If you haven't had your annual lab work done recently, or if you have questions about previous results, now is the time to schedule a comprehensive evaluation. The insights these tests provide are invaluable for maintaining your health and preventing disease.
            </p>
          </div>
        </div>

        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6">
          <div className="flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-ink)] mb-2">
                Reviewed by Dr. Andrew Hemmen, MD
              </p>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                This article is for informational purposes only and does not constitute medical advice. Always consult with a qualified healthcare provider for diagnosis and treatment recommendations tailored to your individual needs.
              </p>
            </div>
          </div>
        </div>
      </article>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-[16/9] bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)]"></div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">
                  Patient Resources
                </div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  More Health Articles
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Explore our library of patient education articles on preventive care and wellness.
                </p>
              </div>
            </Link>

            <Link href="/services" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-[16/9] bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)]"></div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">
                  Our Services
                </div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Preventive Care Services
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Learn about our comprehensive annual exams and preventive health screenings.
                </p>
              </div>
            </Link>

            <Link href="/contact" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-[16/9] bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)]"></div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">
                  Get Started
                </div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Schedule Your Visit
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Have questions about your lab results? Contact us to schedule a comprehensive evaluation.
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
          <p className="text-xl text-white/90 mb-8">
            Dr. Hemmen is here to help you understand your health and create a personalized care plan.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] text-white px-8 py-4 rounded-full font-medium hover:bg-[var(--color-accent-dark)] transition-all duration-300 hover:scale-105"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}