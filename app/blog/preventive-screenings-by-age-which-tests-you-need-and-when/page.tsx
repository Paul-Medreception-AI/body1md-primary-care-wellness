import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Preventive Screenings by Age: Which Tests You Need and When',
  description: 'A comprehensive guide to age-appropriate preventive health screenings, from your 20s through your senior years, to help you stay ahead of potential health issues.',
  alternates: { canonical: '/blog/preventive-screenings-by-age-which-tests-you-need-and-when' },
  openGraph: {
    title: 'Preventive Screenings by Age: Which Tests You Need and When',
    description: 'A comprehensive guide to age-appropriate preventive health screenings, from your 20s through your senior years, to help you stay ahead of potential health issues.',
    url: 'https://body1md.com/blog/preventive-screenings-by-age-which-tests-you-need-and-when',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/images/blog/preventive-screenings-by-age-which-tests-you-need-and-when.jpg', alt: 'Physician talking with a patient across a desk during a preventive care consultation' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Preventive Screenings by Age: Which Tests You Need and When',
    description: 'A comprehensive guide to age-appropriate preventive health screenings, from your 20s through your senior years, to help you stay ahead of potential health issues.',
    images: ['/images/blog/preventive-screenings-by-age-which-tests-you-need-and-when.jpg']
  }
}

export default function PreventiveScreeningsByAgePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-white/70 mb-6 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Preventive Screenings by Age: Which Tests You Need and When
          </h1>

          {/* Meta Info */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>October 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>7 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <span>Dr. Andrew Hemmen, MD</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-10">
        <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl">
          <Image src="/images/blog/preventive-screenings-by-age-which-tests-you-need-and-when.jpg" alt="Physician talking with a patient across a desk during a preventive care consultation" fill priority className="object-cover object-[center_25%]" sizes="(max-width: 896px) 100vw, 896px" />
        </div>
      </div>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening */}
          <div className="text-[var(--color-ink)] leading-loose text-base space-y-6">
            <p>
              When was the last time you had a comprehensive health screening? If you're struggling to remember, you're not alone. In the rush of daily life, preventive care often falls to the bottom of our priority list. Yet these routine screenings are among the most powerful tools we have for detecting serious health conditions early, when they're most treatable.
            </p>
            <p>
              The truth is, your screening needs change as you age. What's essential in your 30s differs from what you need in your 60s. Understanding which tests matter at each stage of life empowers you to take control of your health and catch potential problems before they become serious. Let's walk through the preventive screenings recommended for each decade of adulthood.
            </p>
          </div>

          {/* In Your 20s and 30s */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            In Your 20s and 30s: Building Your Health Foundation
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base space-y-6">
            <p>
              Your younger adult years are the time to establish baseline health metrics and develop screening habits that will serve you for life. Even if you feel perfectly healthy, these early screenings create a reference point for future comparisons.
            </p>
            <p>
              <strong>Blood pressure</strong> should be checked at least every two years if your readings are normal (below 120/80). High blood pressure often has no symptoms but significantly increases your risk of heart disease and stroke. If you have elevated readings, your doctor may recommend more frequent monitoring.
            </p>
            <p>
              <strong>Cholesterol screening</strong> typically begins at age 20, or earlier if you have a family history of heart disease. This simple blood test measures your total cholesterol, LDL (bad cholesterol), HDL (good cholesterol), and triglycerides, all key indicators of cardiovascular health.
            </p>
            <p>
              <strong>Diabetes screening</strong> is recommended starting at age 35, or earlier if you're overweight or have other risk factors. Type 2 diabetes can develop silently, and early detection allows for lifestyle interventions that can prevent or delay the disease.
            </p>
            <p>
              Women should begin <strong>cervical cancer screening (Pap smear)</strong> at age 21 and continue every three years through age 29. Starting at age 30, the option to combine a Pap test with HPV testing every five years becomes available.
            </p>
          </div>

          {/* In Your 40s */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            In Your 40s: Expanding Your Screening Regimen
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base space-y-6">
            <p>
              The 40s mark an important transition in preventive care. Cancer screenings become more prominent, and existing tests may need to occur more frequently based on your personal risk profile.
            </p>
            <p>
              <strong>Breast cancer screening</strong> is a key addition for women in this decade. Current guidelines recommend that women at average risk begin annual or biennial mammograms between ages 40 and 50, depending on individual risk factors and preferences. Discuss the right timing with your healthcare provider.
            </p>
            <p>
              <strong>Colon cancer screening</strong> now begins at age 45 for people at average risk, lowered from age 50 in recent years due to rising rates in younger adults. Options include colonoscopy every 10 years, annual stool-based tests, or other screening methods. This screening can literally save your life, as colon cancer is highly treatable when caught early.
            </p>
            <p>
              Continue your blood pressure, cholesterol, and diabetes screenings, which may become more frequent if you develop borderline results or new risk factors. Your 40s are also the time to assess your cardiovascular risk profile comprehensively, looking at family history, lifestyle factors, and laboratory results together.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
            "Preventive screenings aren't about finding disease. They're about preserving health. Every test you complete is an investment in your future self."
          </blockquote>

          {/* In Your 50s and 60s */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            In Your 50s and 60s: Peak Screening Years
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base space-y-6">
            <p>
              These decades represent the most intensive period for preventive screenings. Many conditions become more common, but early detection remains highly effective.
            </p>
            <p>
              <strong>Lung cancer screening</strong> with low-dose CT scans is recommended for adults aged 50-80 who have a 20 pack-year smoking history and currently smoke or quit within the past 15 years. This screening has been shown to reduce lung cancer deaths significantly.
            </p>
            <p>
              <strong>Bone density screening (DEXA scan)</strong> for osteoporosis begins at age 65 for women, or earlier for those with risk factors like family history, low body weight, or previous fractures. Men at high risk should also be screened starting at age 70.
            </p>
            <p>
              Women should continue breast cancer screening and cervical cancer screening (up to age 65 if prior screenings were normal). Men should discuss <strong>prostate cancer screening</strong> with their doctor starting at age 50, or at age 45 for those at higher risk, including African American men and those with a family history.
            </p>
            <p>
              Continue colon cancer screening through age 75. After that, the decision to continue depends on your health status, previous screening results, and life expectancy.
            </p>
          </div>

          {/* Age 70 and Beyond */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Age 70 and Beyond: Personalized Screening Decisions
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base space-y-6">
            <p>
              In your 70s and beyond, screening decisions become increasingly individualized. The focus shifts toward screenings that will meaningfully improve quality of life and health outcomes based on your overall health status and life expectancy.
            </p>
            <p>
              Some screenings may be continued, scaled back, or stopped depending on your health, functional status, and prior screening history. For example, cervical cancer screening typically stops at age 65 if you've had adequate prior screening. Colon cancer screening can often stop at age 75-85 depending on your situation.
            </p>
            <p>
              However, screenings for conditions like cardiovascular disease, diabetes, and vision and hearing problems remain important throughout this stage of life. Your healthcare provider will help you prioritize screenings that offer the greatest benefit.
            </p>
          </div>

          {/* Making Screenings Work */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Making Screenings Work for You
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base space-y-6">
            <p>
              Understanding which screenings you need is just the first step. Here are practical strategies to ensure you stay on track:
            </p>
          </div>

          <div className="my-8 space-y-4">
            <div className="flex gap-3 items-start">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                <strong>Keep a personal health record.</strong> Track which screenings you've had and when they're due next. Many patient portals and health apps can help with this.
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                <strong>Schedule ahead.</strong> Book your next screening before you leave your current appointment. It's easier to cancel if needed than to remember to call months later.
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                <strong>Understand your family history.</strong> Certain conditions run in families and may require earlier or more frequent screening. Share this information with your provider.
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                <strong>Address barriers proactively.</strong> If cost, transportation, or anxiety about a procedure is preventing you from getting screened, talk to your healthcare team about solutions.
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                <strong>Don't wait for symptoms.</strong> The whole point of screening is to detect problems before you feel sick. By the time symptoms appear, treatment may be more difficult.
              </p>
            </div>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base space-y-6 mt-8">
            <p>
              Preventive screenings are one of the most powerful tools in modern medicine. They give you the chance to catch diseases early, make informed decisions about your health, and take action before small problems become big ones. While the specific tests you need will evolve as you age, the commitment to regular preventive care remains constant throughout your life.
            </p>
            <p>
              If you're unsure which screenings are right for you or when you last completed recommended tests, now is the perfect time to schedule a preventive care visit. A comprehensive review of your health history, risk factors, and screening status can help ensure you're getting the care you need to stay healthy for years to come.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-ink)] mb-2">
                Reviewed by Dr. Andrew Hemmen, MD
              </div>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                This article provides educational information about preventive health screenings. Individual screening needs may vary based on personal and family health history. Always consult with your healthcare provider to determine which screenings are right for you and when they should be performed.
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
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] h-48 flex items-center justify-center">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">
                  Patient Education
                </div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Explore All Resources
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Browse our complete library of health articles and patient education resources.
                </p>
              </div>
            </a>

            {/* Card 2 */}
            <a href="/services" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] h-48 flex items-center justify-center">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">
                  Service
                </div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Annual Physical Exams
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Comprehensive preventive care and health screenings tailored to your age and needs.
                </p>
              </div>
            </a>

            {/* Card 3 */}
            <a href="/services/chronic-disease-management" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] h-48 flex items-center justify-center">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">
                  Service
                </div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Chronic Disease Management
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Ongoing support for conditions like diabetes, hypertension, and heart disease.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Dr. Hemmen is here to help you stay on top of your preventive care and screenings.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[var(--color-accent)] text-white px-8 py-4 rounded-lg font-medium hover:bg-[var(--color-accent-dark)] transition-all duration-300 hover:scale-105"
          >
            Schedule Your Visit
          </a>
        </div>
      </section>
    </main>
  )
}