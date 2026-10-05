import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'When to Use Urgent Care vs Your Primary Care Doctor | Body1MD',
  description: 'Learn when to visit urgent care versus your primary care physician. Understand the differences, costs, and best options for your health needs in Albuquerque, NM.',
  alternates: { canonical: '/blog/when-to-use-urgent-care-vs-your-primary-care-doctor' },
  openGraph: {
    title: 'When to Use Urgent Care vs Your Primary Care Doctor | Body1MD',
    description: 'Learn when to visit urgent care versus your primary care physician. Understand the differences, costs, and best options for your health needs in Albuquerque, NM.',
    url: 'https://body1md.com/blog/when-to-use-urgent-care-vs-your-primary-care-doctor',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/images/blog/when-to-use-urgent-care-vs-your-primary-care-doctor.jpg', alt: 'Crutches leaning against the wall of a quiet clinic waiting room' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'When to Use Urgent Care vs Your Primary Care Doctor | Body1MD',
    description: 'Learn when to visit urgent care versus your primary care physician. Understand the differences, costs, and best options for your health needs in Albuquerque, NM.',
    images: ['/images/blog/when-to-use-urgent-care-vs-your-primary-care-doctor.jpg']
  }
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
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
            When to Use Urgent Care vs Your Primary Care Doctor
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

      {/* Hero image */}
      <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-10">
        <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl">
          <Image src="/images/blog/when-to-use-urgent-care-vs-your-primary-care-doctor.jpg" alt="Crutches leaning against the wall of a quiet clinic waiting room" fill priority className="object-cover" sizes="(max-width: 896px) 100vw, 896px" />
        </div>
      </div>

      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[var(--color-ink)] leading-loose text-base">
            <p className="text-xl leading-relaxed mb-8">
              It's Saturday afternoon and you're suddenly feeling unwell. Your throat is sore, you have a fever, and you're not sure if it can wait until Monday. Do you head to urgent care, try to reach your primary care doctor, or wait it out? This common dilemma affects millions of Americans each year, often leading to unnecessary costs, longer wait times, and fragmented care. Understanding when to use each option can save you time, money, and ensure you receive the most appropriate care for your situation.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Understanding Your Options
            </h2>
            
            <p className="mb-6">
              The American healthcare system offers multiple access points for medical care, each designed for different situations. Your primary care physician provides comprehensive, ongoing care and knows your complete medical history. Urgent care centers serve as a middle ground between your doctor's office and the emergency room, handling non-life-threatening conditions that need prompt attention. Knowing the strengths and limitations of each helps you make informed decisions about your health.
            </p>

            <p className="mb-6">
              Primary care physicians build long-term relationships with patients, coordinating all aspects of your health including preventive care, chronic disease management, and routine concerns. They maintain detailed records of your medical history, medications, allergies, and family health patterns. This continuity of care allows them to spot trends, prevent complications, and provide personalized treatment based on your unique health profile.
            </p>

            <p className="mb-6">
              Urgent care centers offer walk-in convenience for acute issues that arise outside regular office hours or when you can't reach your primary doctor. They're equipped to handle sprains, minor fractures, infections, and other immediate but non-emergency conditions. However, they typically don't have access to your complete medical records and aren't designed for ongoing care relationships.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              When to Choose Your Primary Care Doctor
            </h2>

            <p className="mb-6">
              Your primary care physician should be your first choice for the majority of health concerns, particularly those that are non-urgent or part of ongoing care. The advantages of seeing your regular doctor extend far beyond convenience: they include better health outcomes, lower costs, and more coordinated treatment.
            </p>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 my-8">
              <h3 className="font-semibold text-[var(--color-ink)] mb-4 flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Choose your primary care doctor for:</span>
              </h3>
              <ul className="space-y-3 ml-9">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Chronic conditions like diabetes, hypertension, or asthma</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Preventive care, annual physicals, and health screenings</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>New or ongoing symptoms that require evaluation and follow-up</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Medication management and prescription refills</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Mental health concerns including depression and anxiety</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Complex health issues requiring specialist referrals</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Concerns that can wait for a scheduled appointment within a few days</span>
                </li>
              </ul>
            </div>

            <p className="mb-6">
              Many primary care practices now offer same-day or next-day appointments for urgent concerns, extended hours, and telehealth options. These innovations have significantly reduced the need for urgent care visits for established patients. If you have a concern during business hours or something that can wait 24-48 hours, calling your primary care office first often leads to faster, more personalized care at a lower cost.
            </p>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
              <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
                "Studies show that patients who consistently see their primary care physician have better health outcomes, lower healthcare costs, and fewer hospitalizations compared to those who primarily use urgent care or emergency services."
              </p>
            </div>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              When Urgent Care Makes Sense
            </h2>

            <p className="mb-6">
              Urgent care centers fill an important gap in the healthcare system, providing accessible treatment for conditions that need prompt attention but aren't true emergencies. They're particularly valuable outside regular office hours, on weekends and holidays, or when you're traveling away from your primary care provider.
            </p>

            <p className="mb-6">
              The ideal urgent care visit involves a straightforward acute condition that can be diagnosed and treated in a single visit without needing extensive medical history or follow-up coordination. These facilities are equipped with basic diagnostic tools including X-rays and laboratory testing, allowing them to handle a wide range of common medical problems efficiently.
            </p>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 my-8">
              <h3 className="font-semibold text-[var(--color-ink)] mb-4 flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Appropriate urgent care situations include:</span>
              </h3>
              <ul className="space-y-3 ml-9">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Minor cuts, burns, or wounds that may need stitches</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Sprains, strains, and suspected minor fractures</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Infections like urinary tract infections, strep throat, or ear infections</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Mild to moderate asthma attacks or allergic reactions</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Fever, flu symptoms, or respiratory infections</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Skin rashes or minor skin infections</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Minor eye injuries or infections (not chemical burns)</span>
                </li>
              </ul>
            </div>

            <p className="mb-6">
              While urgent care offers convenience, it comes with trade-offs. Providers don't have access to your complete medical history unless you bring records. Treatment may not be coordinated with your ongoing care plan. Costs are typically higher than a primary care visit, and you may need follow-up with your regular doctor anyway. For these reasons, urgent care is best reserved for situations where waiting for your primary care physician isn't practical.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              The Cost Factor
            </h2>

            <p className="mb-6">
              Understanding the financial implications of your choice matters, especially with high-deductible health plans becoming more common. Primary care visits typically cost between $100-200 without insurance, while urgent care visits average $150-300 or more. Emergency room visits, which should be reserved for true emergencies, can cost thousands of dollars even for minor problems.
            </p>

            <p className="mb-6">
              Insurance companies recognize the value of primary care and often provide better coverage for these visits, including lower copays and sometimes waiving the visit toward your deductible for preventive care. Urgent care copays are typically higher, and some plans require you to pay a percentage of the cost until you meet your deductible.
            </p>

            <p className="mb-6">
              Beyond immediate costs, seeing your primary care physician regularly can reduce long-term healthcare expenses significantly. Preventive care catches problems early when they're easier and less expensive to treat. Coordinated care reduces duplicate testing and prevents complications that lead to costly hospitalizations. The relationship you build with your primary care provider becomes one of your most valuable healthcare assets.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              The Role of Direct Primary Care
            </h2>

            <p className="mb-6">
              An emerging model called Direct Primary Care (DPC) is changing how many patients think about this decision entirely. In DPC practices, patients pay a monthly membership fee directly to their physician, receiving extended appointment times, faster access, and 24/7 access to their doctor via phone, text, or email. This model eliminates the need for many urgent care visits since you can reach your doctor directly when concerns arise.
            </p>

            <p className="mb-6">
              DPC physicians often provide same-day or next-day appointments, making it easier to address problems promptly without resorting to urgent care. The monthly fee structure removes financial barriers to seeking care early, when problems are most treatable. Many DPC practices also offer in-office procedures and dispensing of common medications, further reducing the need for multiple providers.
            </p>

            <p className="mb-6">
              This model emphasizes the continuity and accessibility that make primary care most effective. When you can text your doctor about a concern and get personalized advice within hours, or get in for a same- or next-day office visit, the convenience gap between primary care and urgent care largely disappears, while you keep all the benefits of seeing someone who knows your complete health history.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              When to Call 911 or Go to the Emergency Room
            </h2>

            <p className="mb-6">
              Some situations require immediate emergency care, and neither your primary care physician nor urgent care is appropriate. Call 911 or go directly to the emergency room for chest pain or pressure, difficulty breathing, severe bleeding, signs of stroke (facial drooping, arm weakness, speech difficulties), severe head injuries, loss of consciousness, seizures, severe burns, poisoning, or any condition where minutes matter for survival.
            </p>

            <p className="mb-6">
              If you're unsure whether a situation constitutes an emergency, err on the side of caution. Emergency departments are equipped to handle life-threatening conditions that require immediate intervention, advanced imaging, specialty consultations, or hospital admission. The goal isn't to avoid the emergency room when you truly need it, but to use each level of care appropriately.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Making the Best Choice for Your Health
            </h2>

            <p className="mb-6">
              The key to navigating your healthcare options successfully is building a strong relationship with a primary care physician before you need urgent care. When you have an established provider who knows you, many urgent situations can be handled through a phone call, a text message, or an expedited office appointment. Your primary care doctor can also guide you on when urgent care or emergency care is truly necessary.
            </p>

            <p className="mb-6">
              Think of your primary care physician as your medical home base: the coordinator of your health journey and your first call for most concerns. Urgent care serves as a valuable safety net for after-hours needs and straightforward acute problems. Together, these resources ensure you can get appropriate care when and where you need it, while building the long-term relationship that leads to better health outcomes.
            </p>

            <p className="mb-6">
              The healthcare system works best when you use each part for its intended purpose. Investing time in finding the right primary care provider and keeping regular appointments creates a foundation that makes all other healthcare decisions easier, more effective, and often less expensive. Your health deserves the continuity, coordination, and personalized attention that only a dedicated primary care relationship can provide.
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
            <div className="font-semibold text-[var(--color-ink)] mb-2">Reviewed by Dr. Andrew Hemmen, MD</div>
            <p className="text-[var(--color-muted)] text-sm leading-relaxed">
              Dr. Andrew Hemmen is a board-certified internal medicine physician who has cared for patients in New Mexico since 2008. At Body1MD in Los Ranchos de Albuquerque, he provides evidence-based patient education and direct primary care.
            </p>
          </div>
        </div>
      </article>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] p-8 flex items-center justify-center h-48">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  More Health Resources
                </h4>
                <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
                  Explore our library of patient education articles covering wellness, prevention, and common health concerns.
                </p>
                <span className="text-[var(--color-primary)] font-semibold inline-flex items-center gap-2">
                  Browse articles
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>

            <Link href="/services" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] p-8 flex items-center justify-center h-48">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  Our Services
                </h4>
                <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
                  Discover the comprehensive primary care services we offer to keep you healthy and well.
                </p>
                <span className="text-[var(--color-primary)] font-semibold inline-flex items-center gap-2">
                  View services
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>

            <Link href="/contact" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] p-8 flex items-center justify-center h-48">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  Schedule a Visit
                </h4>
                <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
                  Ready to establish care with a primary care physician who knows you? Book your appointment today.
                </p>
                <span className="text-[var(--color-primary)] font-semibold inline-flex items-center gap-2">
                  Contact us
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
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
            Dr. Hemmen is here to help.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule Your Appointment
          </Link>
        </div>
      </section>
    </main>
  )
}