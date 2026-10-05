import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Understanding Your Cholesterol Numbers: LDL, HDL, and Triglycerides',
  description: 'Learn what your cholesterol numbers mean, the difference between LDL, HDL, and triglycerides, and how to maintain healthy levels for heart health.',
  alternates: { canonical: '/blog/understanding-your-cholesterol-numbers-ldl-hdl-and-triglycer' },
  openGraph: {
    title: 'Understanding Your Cholesterol Numbers: LDL, HDL, and Triglycerides',
    description: 'Learn what your cholesterol numbers mean, the difference between LDL, HDL, and triglycerides, and how to maintain healthy levels for heart health.',
    url: 'https://body1md.com/blog/understanding-your-cholesterol-numbers-ldl-hdl-and-triglycer',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Understanding Your Cholesterol Numbers: LDL, HDL, and Triglycerides',
    description: 'Learn what your cholesterol numbers mean, the difference between LDL, HDL, and triglycerides, and how to maintain healthy levels for heart health.',
    images: ['/og-image.png'],
  },
}

export default function CholesterolArticlePage() {
  return (
    <main className="min-h-screen bg-white">
      <article>
        <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-sm mb-6 text-white/80">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">›</span>
              <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
              <span className="mx-2">›</span>
              <span>Article</span>
            </div>
            
            <div className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</div>
            
            <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
              Understanding Your Cholesterol Numbers: LDL, HDL, and Triglycerides Explained
            </h1>
            
            <div className="flex items-center justify-center gap-6 text-sm text-white/80">
              <span>Published January 2025</span>
              <span>•</span>
              <span>7 min read</span>
              <span>•</span>
              <span>Reviewed by Body1MD Primary Care & Wellness</span>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-[var(--color-ink)] leading-loose text-base space-y-6">
              <p className="text-xl leading-relaxed">
                You've just received your blood work results, and there it is: a list of cholesterol numbers that might as well be written in code. LDL, HDL, triglycerides—what do they all mean, and more importantly, why should you care? Understanding these numbers is one of the most powerful steps you can take toward protecting your heart health and preventing cardiovascular disease.
              </p>

              <p>
                Let's demystify these numbers together and give you the knowledge to take control of your cardiovascular wellness.
              </p>

              <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
                What Is Cholesterol, Really?
              </h2>

              <p>
                Cholesterol often gets a bad reputation, but it's actually a waxy, fat-like substance that your body needs to function properly. Your liver produces most of the cholesterol in your body, and you also get some from the foods you eat. Cholesterol plays essential roles in building cell membranes, producing hormones like estrogen and testosterone, and helping your body make vitamin D.
              </p>

              <p>
                The problem arises when you have too much cholesterol circulating in your blood. Because cholesterol and blood don't mix well (think oil and water), your body packages cholesterol into lipoproteins—tiny protein-covered particles that transport cholesterol through your bloodstream. The type of lipoprotein carrying your cholesterol makes all the difference in whether it helps or harms your health.
              </p>

              <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
                LDL: The "Lousy" Cholesterol
              </h2>

              <p>
                Low-density lipoprotein (LDL) is often called "bad" cholesterol, and for good reason. LDL carries cholesterol from your liver to cells throughout your body. When you have too much LDL in your blood, it can deposit cholesterol in the walls of your arteries, forming plaque. Over time, this plaque buildup narrows your arteries and makes them less flexible—a condition called atherosclerosis.
              </p>

              <p>
                Narrowed arteries mean less blood flow to your heart, brain, and other vital organs. If a plaque ruptures, it can trigger a blood clot that blocks blood flow entirely, leading to a heart attack or stroke. This is why keeping your LDL cholesterol low is crucial for heart health.
              </p>

              <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
                <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
                  "For most adults, an LDL cholesterol level below 100 mg/dL is considered optimal. If you have heart disease or diabetes, your target may be even lower—below 70 mg/dL."
                </p>
              </div>

              <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
                HDL: The "Healthy" Cholesterol
              </h2>

              <p>
                High-density lipoprotein (HDL) is known as "good" cholesterol because it acts like a cleanup crew in your bloodstream. HDL picks up excess cholesterol from your arteries and tissues and transports it back to your liver, where it's broken down and removed from your body. This reverse cholesterol transport process helps prevent plaque buildup and protects against heart disease.
              </p>

              <p>
                Think of HDL as your cardiovascular system's sanitation service—the more you have, the better. Higher HDL levels are associated with a lower risk of heart attack and stroke. For men, HDL levels of 40 mg/dL or higher are considered protective; for women, the target is 50 mg/dL or higher. Levels above 60 mg/dL are considered especially beneficial and may even help offset other cardiovascular risk factors.
              </p>

              <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
                Triglycerides: The Often-Overlooked Number
              </h2>

              <p>
                While not technically cholesterol, triglycerides are another type of fat in your blood that deserves attention. When you eat, your body converts calories it doesn't need immediately into triglycerides, which are stored in fat cells for later energy use. Between meals, hormones trigger the release of triglycerides to provide energy.
              </p>

              <p>
                The problem occurs when you regularly consume more calories than you burn, especially from high-carbohydrate and high-sugar foods. This leads to elevated triglyceride levels in your blood. High triglycerides often go hand-in-hand with low HDL and small, dense LDL particles—a combination that significantly increases your risk of heart disease, stroke, and pancreatitis.
              </p>

              <p>
                A normal triglyceride level is less than 150 mg/dL. Levels between 150-199 mg/dL are considered borderline high, while levels of 200 mg/dL or above warrant medical intervention.
              </p>

              <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
                What Your Total Cholesterol Number Really Means
              </h2>

              <p>
                Your total cholesterol is the sum of your LDL cholesterol, HDL cholesterol, and 20% of your triglyceride level. While it's a useful screening tool, total cholesterol alone doesn't tell the whole story. You could have a "normal" total cholesterol but still have unhealthy levels of LDL or HDL, or elevated triglycerides.
              </p>

              <p>
                This is why doctors focus on your lipid panel—the breakdown of all these components—rather than just total cholesterol. Generally, a total cholesterol level below 200 mg/dL is considered desirable, 200-239 mg/dL is borderline high, and 240 mg/dL and above is high. But again, the individual components matter more than this single number.
              </p>

              <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
                Taking Control: Practical Steps to Improve Your Numbers
              </h2>

              <p>
                The good news is that you have significant control over your cholesterol levels through lifestyle choices. While genetics play a role, diet, exercise, and other habits can make a dramatic difference.
              </p>

              <div className="space-y-4 my-8">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p><strong>Embrace heart-healthy fats:</strong> Choose olive oil, avocados, nuts, and fatty fish like salmon over saturated fats found in red meat and full-fat dairy products.</p>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p><strong>Increase soluble fiber:</strong> Oats, beans, lentils, apples, and Brussels sprouts can help lower LDL cholesterol by binding to it in your digestive system.</p>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p><strong>Move your body regularly:</strong> Aim for at least 150 minutes of moderate aerobic exercise per week. Even brisk walking can raise HDL and lower triglycerides.</p>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p><strong>Limit added sugars and refined carbs:</strong> These can spike triglyceride levels. Focus on whole grains, vegetables, and complex carbohydrates instead.</p>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p><strong>Quit smoking:</strong> Smoking lowers HDL cholesterol and damages blood vessel walls, making plaque buildup more likely.</p>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p><strong>Maintain a healthy weight:</strong> Even losing 5-10% of your body weight can improve your cholesterol numbers significantly.</p>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p><strong>Consider medication when needed:</strong> If lifestyle changes aren't enough, statins and other cholesterol-lowering medications can be highly effective and life-saving.</p>
                </div>
              </div>

              <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
                When to Get Tested and What to Discuss with Your Doctor
              </h2>

              <p>
                Adults should have their cholesterol checked every 4-6 years starting at age 20, though more frequent testing may be necessary if you have risk factors like family history of heart disease, diabetes, high blood pressure, or obesity. If you're over 40 or have cardiovascular risk factors, your doctor may recommend annual testing.
              </p>

              <p>
                When reviewing your results, don't just focus on whether your numbers are "normal." Talk to your doctor about your overall cardiovascular risk profile, which includes factors beyond cholesterol—blood pressure, blood sugar, family history, age, and lifestyle habits. Your target cholesterol levels should be personalized based on your individual risk factors.
              </p>

              <p>
                Understanding your cholesterol numbers empowers you to make informed decisions about your health. These aren't just abstract figures on a lab report—they're valuable insights into your cardiovascular health and future disease risk. By partnering with your healthcare provider and committing to heart-healthy habits, you can optimize these numbers and protect your most vital organ: your heart.
              </p>

              <p className="mt-12 text-lg">
                Ready to take charge of your heart health? At Body1MD Primary Care & Wellness, we provide comprehensive cholesterol screening, personalized risk assessment, and ongoing support to help you achieve and maintain optimal cardiovascular health. Your numbers tell a story—let's make sure it's a healthy one.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-cream)] py-12">
          <div className="max-w-3xl mx-auto px-6">
            <div className="bg-white rounded-2xl p-8 flex gap-6 items-start shadow-sm">
              <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-[var(--color-ink)] mb-2">Reviewed by Body1MD Primary Care & Wellness</div>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  This article has been reviewed for medical accuracy by our care team in Austin, TX. We're committed to providing evidence-based health education that empowers our patients to make informed decisions about their wellness.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-cream)] py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
                <div className="aspect-[16/9] bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Health Education</div>
                  <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                    Explore All Health Resources
                  </h4>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                    Browse our complete library of patient education articles covering preventive care, chronic conditions, and wellness topics.
                  </p>
                  <div className="text-[var(--color-accent)] text-sm font-medium flex items-center gap-2">
                    View all articles
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              <Link href="/services" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up" style={{animationDelay: '100ms'}}>
                <div className="aspect-[16/9] bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Our Services</div>
                  <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                    Comprehensive Primary Care
                  </h4>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                    Discover our full range of preventive care services, including cardiovascular health screening and chronic disease management.
                  </p>
                  <div className="text-[var(--color-accent)] text-sm font-medium flex items-center gap-2">
                    Learn more
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              <Link href="/contact" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up" style={{animationDelay: '200ms'}}>
                <div className="aspect-[16/9] bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Get Started</div>
                  <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                    Schedule Your Visit
                  </h4>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                    Ready to discuss your cholesterol and cardiovascular health? Book a comprehensive wellness visit with our team today.
                  </p>
                  <div className="text-[var(--color-accent)] text-sm font-medium flex items-center gap-2">
                    Book appointment
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
            <p className="text-xl mb-8 text-white/90">Our team is here to help.</p>
            <Link
              href="/contact"
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-medium px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Schedule Your Appointment
            </Link>
          </div>
        </section>
      </article>
    </main>
  )
}