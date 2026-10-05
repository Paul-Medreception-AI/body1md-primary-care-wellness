import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Immunizations for Adults: Vaccines Aren\'t Just for Kids',
  description: 'Adult vaccines protect against serious diseases like flu, pneumonia, shingles, and COVID-19. Learn which immunizations you need and why they matter at every age.',
  alternates: { canonical: '/blog/immunizations-for-adults-vaccines-aren-t-just-for-kids' },
  openGraph: {
    title: 'Immunizations for Adults: Vaccines Aren\'t Just for Kids',
    description: 'Adult vaccines protect against serious diseases like flu, pneumonia, shingles, and COVID-19. Learn which immunizations you need and why they matter at every age.',
    url: 'https://body1md.com/blog/immunizations-for-adults-vaccines-aren-t-just-for-kids',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/images/blog/immunizations-for-adults-vaccines-aren-t-just-for-kids.jpg', alt: 'Adult patient receiving a vaccine in the upper arm' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Immunizations for Adults: Vaccines Aren\'t Just for Kids',
    description: 'Adult vaccines protect against serious diseases like flu, pneumonia, shingles, and COVID-19. Learn which immunizations you need and why they matter at every age.',
    images: ['/images/blog/immunizations-for-adults-vaccines-aren-t-just-for-kids.jpg']
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
            Immunizations for Adults: Vaccines Aren't Just for Kids
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
          <Image src="/images/blog/immunizations-for-adults-vaccines-aren-t-just-for-kids.jpg" alt="Adult patient receiving a vaccine in the upper arm" fill priority className="object-cover object-[center_10%]" sizes="(max-width: 896px) 100vw, 896px" />
        </div>
      </div>

      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[var(--color-ink)] leading-loose text-base">
            <p className="mb-6">
              When you think of vaccines, childhood immunizations likely come to mind: those routine shots that protect against measles, mumps, and polio. But the truth is, vaccination isn't something you outgrow. Adults need vaccines too, and staying current with your immunizations is one of the most important steps you can take to protect your health as you age.
            </p>
            
            <p className="mb-6">
              Many adults are surprised to learn they're behind on their vaccines, or don't realize that new vaccines become recommended as we get older. From annual flu shots to shingles vaccines and COVID-19 boosters, adult immunizations play a critical role in preventing serious illness, hospitalization, and even death. Yet millions of adults in the United States remain unvaccinated or under-vaccinated, putting themselves and their communities at unnecessary risk.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Why Adult Vaccines Matter
            </h2>
            
            <p className="mb-6">
              Immunity from childhood vaccines can fade over time, and as we age, our immune systems naturally become less robust. This makes adults, especially those over 50, more vulnerable to certain infections. Additionally, new vaccines have been developed since many adults completed their childhood immunizations, offering protection against diseases that weren't preventable decades ago.
            </p>
            
            <p className="mb-6">
              Adult vaccines protect not only you but also those around you. When you're vaccinated, you reduce the spread of disease to vulnerable populations like infants, elderly individuals, and people with weakened immune systems. This concept, known as community immunity or herd immunity, is especially important for diseases like whooping cough and influenza.
            </p>
            
            <p className="mb-6">
              Beyond personal and public health benefits, staying up to date with vaccines can save you time, money, and significant discomfort. Many vaccine-preventable diseases require hospitalization, lead to lost workdays, and can result in long-term complications. Prevention is always easier, and less expensive, than treatment.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Key Vaccines Every Adult Should Know About
            </h2>
            
            <p className="mb-6">
              The Centers for Disease Control and Prevention (CDC) publishes an adult immunization schedule that outlines which vaccines are recommended based on age, health conditions, lifestyle, and travel plans. Here are some of the most important vaccines for adults:
            </p>

            <div className="my-8 space-y-4">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Influenza (Flu) Vaccine:</strong> Recommended annually for all adults. The flu can lead to serious complications, especially in older adults and those with chronic health conditions.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Tdap/Td (Tetanus, Diphtheria, Pertussis):</strong> Adults should receive a Tdap booster once, followed by a Td booster every 10 years. Pertussis (whooping cough) can be serious, and tetanus remains a risk from wounds.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Shingles Vaccine (Zoster):</strong> Recommended for adults 50 and older. Shingles causes a painful rash and can lead to long-lasting nerve pain called postherpetic neuralgia.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Pneumococcal Vaccines:</strong> Recommended for adults 65 and older, and younger adults with certain health conditions. Pneumococcal disease can cause pneumonia, meningitis, and bloodstream infections.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>COVID-19 Vaccine:</strong> Recommended for all adults, with updated boosters as needed. COVID-19 can cause severe illness, hospitalization, and long-term complications.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Hepatitis A and B:</strong> Recommended for adults with certain risk factors, including travel to endemic areas, chronic liver disease, or diabetes.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>HPV Vaccine:</strong> Recommended for adults up to age 26, and for some adults up to age 45 based on individual risk. HPV can cause cervical, throat, and other cancers.
                </div>
              </div>
            </div>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
              <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
                "Vaccines are one of the most effective tools we have to prevent disease and protect health across the lifespan. Staying up to date isn't just smart. It's essential."
              </p>
            </div>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Who Needs Extra Protection?
            </h2>
            
            <p className="mb-6">
              Certain groups of adults have higher risk for complications from vaccine-preventable diseases and may need additional vaccines or earlier vaccination schedules:
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Adults with chronic conditions like diabetes, heart disease, asthma, or COPD</li>
              <li>Pregnant women (certain vaccines like Tdap and flu are recommended during pregnancy)</li>
              <li>Adults with weakened immune systems due to HIV, cancer treatment, or immunosuppressive medications</li>
              <li>Healthcare workers and caregivers who have regular contact with vulnerable populations</li>
              <li>Travelers to areas where certain diseases are more common</li>
              <li>Adults who smoke or have other lifestyle risk factors</li>
            </ul>
            
            <p className="mb-6">
              If you fall into one of these categories, talk with your primary care provider about which vaccines are right for you and whether you need any catch-up immunizations.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Common Myths and Concerns About Adult Vaccines
            </h2>
            
            <p className="mb-6">
              Despite overwhelming evidence of their safety and effectiveness, vaccines are sometimes met with hesitation. Let's address some common concerns:
            </p>
            
            <p className="mb-4">
              <strong>Myth: "I'm healthy, so I don't need vaccines."</strong><br />
              Vaccines aren't just for people who are sick. They're designed to prevent illness before it starts, and even healthy adults can become seriously ill from vaccine-preventable diseases.
            </p>
            
            <p className="mb-4">
              <strong>Myth: "Vaccines can give you the disease they're meant to prevent."</strong><br />
              Most vaccines contain inactivated (killed) viruses or just pieces of the virus, so they cannot cause the disease. You may experience mild side effects as your immune system responds, but this is not the same as getting sick.
            </p>
            
            <p className="mb-4">
              <strong>Myth: "I had the disease as a child, so I'm protected."</strong><br />
              Natural immunity can wane over time, and some diseases, like tetanus, don't provide lasting immunity even after infection. Vaccines offer reliable, long-term protection.
            </p>
            
            <p className="mb-6">
              <strong>Myth: "Vaccines are full of dangerous ingredients."</strong><br />
              Vaccines are rigorously tested for safety. The ingredients used are present in tiny amounts and are necessary to make the vaccine effective or preserve it. The risks from vaccine-preventable diseases far outweigh any risks from vaccines.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              How to Stay on Track with Your Immunizations
            </h2>
            
            <p className="mb-6">
              Keeping up with adult vaccines can feel overwhelming, but your primary care provider is your best resource. Here are some practical tips to help you stay on track:
            </p>

            <div className="my-8 space-y-4">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Keep a record:</strong> Maintain a personal immunization record or ask your provider for a copy of your vaccination history.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Schedule annual wellness visits:</strong> Your yearly check-up is a great time to review your vaccine status and get any needed immunizations.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Ask questions:</strong> If you're unsure about a vaccine or have concerns, talk openly with your provider. They can help you make informed decisions based on your individual health needs.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Check your insurance coverage:</strong> Most health insurance plans, including Medicare, cover recommended vaccines at no cost to you.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Set reminders:</strong> Mark your calendar for booster shots or annual vaccines like the flu shot so you don't forget.
                </div>
              </div>
            </div>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Take Charge of Your Health with Preventive Care
            </h2>
            
            <p className="mb-6">
              Vaccines are a cornerstone of preventive medicine. They offer powerful protection against serious illnesses, reduce healthcare costs, and support a healthier community. Whether you're in your 30s, 50s, or beyond, it's never too late to catch up on vaccines you may have missed or to learn about new vaccines that are now available.
            </p>
            
            <p className="mb-6">
              At Body1MD Primary Care & Wellness in Los Ranchos de Albuquerque, NM, prevention is the foundation of care. Dr. Hemmen can review your vaccination history, help you understand which vaccines you need, and answer your questions. Don't wait until you're sick to think about your health. Be proactive and protect yourself today.
            </p>
            
            <p className="mb-6">
              If it's been a while since you reviewed your vaccine status, or if you're not sure which immunizations you need, schedule a visit with your primary care provider. A few simple shots can make a big difference in keeping you healthy for years to come.
            </p>
          </div>
        </div>
      </article>

      <aside className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6">
        <div className="flex gap-6 items-start">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div>
            <div className="font-semibold text-[var(--color-ink)] mb-2">Reviewed by Dr. Andrew Hemmen, MD</div>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed">
              Dr. Andrew Hemmen is a board-certified internal medicine physician who has cared for patients in New Mexico since 2008. At Body1MD in Los Ranchos de Albuquerque, he provides evidence-based patient education and direct primary care. His care focuses on prevention, wellness, and lasting relationships with every patient.
            </p>
          </div>
        </div>
      </aside>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/chronic-disease-management" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <div className="w-12 h-12 bg-[var(--color-light)] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                  <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  Chronic Disease Management
                </h4>
                <p className="text-[var(--color-muted)] leading-relaxed text-sm mb-4">
                  Expert support for managing chronic conditions like diabetes, hypertension, and heart disease through personalized care plans.
                </p>
                <div className="text-[var(--color-primary)] text-sm font-medium flex items-center gap-2">
                  Learn More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/services/annual-wellness-exams" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <div className="w-12 h-12 bg-[var(--color-light)] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                  <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  Annual Wellness Exams
                </h4>
                <p className="text-[var(--color-muted)] leading-relaxed text-sm mb-4">
                  Comprehensive preventive care visits to catch health issues early and keep you on track with screenings and immunizations.
                </p>
                <div className="text-[var(--color-primary)] text-sm font-medium flex items-center gap-2">
                  Learn More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/services/preventive-care" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <div className="w-12 h-12 bg-[var(--color-light)] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                  <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  Preventive Care
                </h4>
                <p className="text-[var(--color-muted)] leading-relaxed text-sm mb-4">
                  Stay healthy with proactive screenings, lifestyle counseling, and preventive measures tailored to your unique needs.
                </p>
                <div className="text-[var(--color-primary)] text-sm font-medium flex items-center gap-2">
                  Learn More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-xl text-white/90 mb-8">Dr. Hemmen is here to help.</p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule Your Visit
          </Link>
        </div>
      </section>
    </main>
  )
}