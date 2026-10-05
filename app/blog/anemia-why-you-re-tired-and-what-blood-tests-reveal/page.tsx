import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Anemia: Why You\'re Tired and What Blood Tests Reveal',
  description: 'Discover why anemia causes fatigue, what blood tests reveal about iron levels, and how primary care can help diagnose and treat this common condition.',
  alternates: { canonical: '/blog/anemia-why-you-re-tired-and-what-blood-tests-reveal' },
  openGraph: {
    title: 'Anemia: Why You\'re Tired and What Blood Tests Reveal',
    description: 'Discover why anemia causes fatigue, what blood tests reveal about iron levels, and how primary care can help diagnose and treat this common condition.',
    url: 'https://body1md.com/blog/anemia-why-you-re-tired-and-what-blood-tests-reveal',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anemia: Why You\'re Tired and What Blood Tests Reveal',
    description: 'Discover why anemia causes fatigue, what blood tests reveal about iron levels, and how primary care can help diagnose and treat this common condition.',
    images: ['/og-image.png'],
  },
}

export default function AnemiaArticlePage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-sm mb-6 text-white/80">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {' › '}
            <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
            {' › '}
            <span>Article</span>
          </div>
          
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>
          
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Anemia: Why You&apos;re Tired and What Blood Tests Reveal
          </h1>
          
          <div className="flex justify-center items-center gap-6 text-sm text-white/80">
            <span>Published January 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Dr. Wellness Team</span>
          </div>
        </div>
      </section>

      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[var(--color-ink)] leading-loose text-base">
            <p className="text-xl mb-8">
              You&apos;re exhausted all the time, no matter how much sleep you get. Your heart races when you climb stairs. You feel dizzy, irritable, and cold when everyone else is comfortable. These aren&apos;t just signs of a busy life—they could be symptoms of anemia, one of the most common blood disorders affecting millions of Americans. The good news? A simple blood test can reveal what&apos;s happening, and treatment can restore your energy and vitality.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              What Is Anemia?
            </h2>
            <p className="mb-6">
              Anemia occurs when your blood doesn&apos;t have enough healthy red blood cells or hemoglobin—the protein that carries oxygen throughout your body. Without adequate oxygen delivery, your organs and tissues struggle to function properly, leaving you feeling perpetually exhausted.
            </p>
            <p className="mb-6">
              There are several types of anemia, but iron-deficiency anemia is by far the most common, accounting for nearly half of all cases worldwide. Other forms include vitamin B12 deficiency anemia, folate deficiency anemia, and anemia of chronic disease. Each type has different causes, but they all share the hallmark symptom: profound fatigue that doesn&apos;t improve with rest.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Why You Feel So Tired
            </h2>
            <p className="mb-6">
              When your body lacks sufficient red blood cells or hemoglobin, every cell in your body receives less oxygen than it needs. Your heart tries to compensate by pumping harder and faster, which is why many people with anemia experience rapid heartbeat or shortness of breath with minimal exertion.
            </p>
            <p className="mb-6">
              Your brain, which consumes about 20% of your body&apos;s oxygen despite being only 2% of your body weight, is particularly sensitive to oxygen deprivation. This explains the cognitive symptoms many anemia patients experience: difficulty concentrating, memory problems, and persistent brain fog that makes even simple tasks feel overwhelming.
            </p>
            <p className="mb-6">
              The fatigue of anemia is different from ordinary tiredness. It&apos;s a bone-deep exhaustion that sleep doesn&apos;t fix—a heaviness that makes getting through the day feel like an endurance test.
            </p>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
              <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
                &quot;Anemia isn&apos;t just about feeling tired—it affects your quality of life, your ability to work, exercise, and enjoy daily activities. But with proper diagnosis and treatment, most people see dramatic improvement within weeks.&quot;
              </p>
            </div>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Who&apos;s at Risk?
            </h2>
            <p className="mb-6">
              While anyone can develop anemia, certain groups face higher risk. Women of childbearing age are particularly vulnerable due to monthly menstrual blood loss. In fact, heavy periods are one of the leading causes of iron-deficiency anemia in premenopausal women.
            </p>
            <p className="mb-6">
              Pregnant women have increased risk because their bodies need extra iron to support the growing baby and increased blood volume. Vegetarians and vegans may struggle to get enough absorbable iron from plant sources alone. People with chronic diseases like kidney disease, inflammatory bowel disease, or cancer often develop anemia as a complication of their condition.
            </p>
            <p className="mb-6">
              Athletes, particularly endurance athletes, can develop &quot;sports anemia&quot; from a combination of increased red blood cell breakdown and iron loss through sweat. Older adults face higher risk due to chronic conditions, medications, and changes in diet and absorption.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              What Blood Tests Reveal
            </h2>
            <p className="mb-6">
              Diagnosing anemia starts with a complete blood count (CBC), a common blood test that measures several components of your blood. The key values your doctor will examine include:
            </p>
            <ul className="mb-6 space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span><strong>Hemoglobin:</strong> The protein in red blood cells that carries oxygen. Low hemoglobin is the defining characteristic of anemia.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span><strong>Hematocrit:</strong> The percentage of blood volume made up by red blood cells. Low hematocrit indicates fewer red blood cells.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span><strong>MCV (Mean Corpuscular Volume):</strong> The average size of your red blood cells, which helps identify the type of anemia.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span><strong>Ferritin:</strong> A measure of your body&apos;s iron stores. Low ferritin indicates iron deficiency.</span>
              </li>
            </ul>
            <p className="mb-6">
              If your CBC suggests anemia, your doctor may order additional tests to determine the underlying cause. These might include iron panel tests, vitamin B12 and folate levels, reticulocyte count (which shows how quickly you&apos;re producing new red blood cells), or tests to look for internal bleeding or chronic disease.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Treatment and Recovery
            </h2>
            <p className="mb-6">
              The treatment for anemia depends entirely on the cause. For iron-deficiency anemia, iron supplementation is typically the first line of treatment, often combined with dietary changes to increase iron-rich foods like red meat, poultry, fish, beans, and dark leafy greens. Vitamin C helps your body absorb iron more effectively, so pairing iron-rich foods with citrus fruits or tomatoes can boost absorption.
            </p>
            <p className="mb-6">
              B12 deficiency anemia may require supplements or, in cases of absorption problems, B12 injections. Anemia caused by chronic disease focuses on treating the underlying condition. In severe cases, blood transfusions or medications to stimulate red blood cell production may be necessary.
            </p>
            <p className="mb-6">
              Most people begin feeling better within two to three weeks of starting treatment, though it can take several months for blood counts to fully normalize and iron stores to replenish. Regular follow-up blood tests ensure treatment is working and help prevent recurrence.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              When to See Your Doctor
            </h2>
            <p className="mb-6">
              Don&apos;t dismiss persistent fatigue as just stress or busy life. If you&apos;re experiencing ongoing exhaustion, weakness, dizziness, pale skin, cold hands and feet, brittle nails, or unusual cravings for ice or non-food items (a symptom called pica), it&apos;s time to talk to your doctor.
            </p>
            <p className="mb-6">
              A simple blood test can provide answers and start you on the path to feeling like yourself again. Left untreated, anemia can lead to serious complications including heart problems, pregnancy complications, and delayed growth in children. But with proper diagnosis and treatment, most people make a complete recovery and regain their energy and quality of life.
            </p>
            <p className="mb-6">
              Your fatigue has a reason, and you don&apos;t have to live with it. Partner with your primary care physician to uncover what&apos;s causing your symptoms and develop a personalized treatment plan that restores your vitality.
            </p>
          </div>
        </div>
      </article>

      <aside className="bg-[var(--color-cream)] py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
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
                Our team provides comprehensive primary care services in Austin, TX, including diagnostic blood work, anemia treatment, and ongoing wellness support. We&apos;re dedicated to uncovering the root causes of your symptoms and helping you feel your best.
              </p>
            </div>
          </div>
        </div>
      </aside>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog" className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group animate-fade-up">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                All Resources
              </h4>
              <p className="text-[var(--color-muted)] text-sm">
                Explore our complete library of health articles and patient education resources.
              </p>
            </Link>

            <Link href="/services/direct-primary-care" className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group animate-fade-up">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Direct Primary Care
              </h4>
              <p className="text-[var(--color-muted)] text-sm">
                Learn how our membership-based care model provides comprehensive, personalized healthcare.
              </p>
            </Link>

            <Link href="/contact" className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group animate-fade-up">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Schedule a Visit
              </h4>
              <p className="text-[var(--color-muted)] text-sm">
                Book an appointment to discuss your symptoms and get the blood work you need.
              </p>
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
            Our team is here to help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all hover:gap-3"
          >
            Get Started Today
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}