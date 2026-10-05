import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Urgent Care vs Primary Care: Where to Go When Sick | Body1MD',
  description: 'Comparing urgent care and primary care for illness treatment in Austin, TX. Learn which option is best for your symptoms, costs, wait times, and continuity of care.',
  alternates: { canonical: '/compare/urgent-care-vs-primary-care' },
  openGraph: {
    title: 'Urgent Care vs Primary Care: Where to Go When Sick | Body1MD',
    description: 'Comparing urgent care and primary care for illness treatment in Austin, TX. Learn which option is best for your symptoms, costs, wait times, and continuity of care.',
    url: 'https://body1md.com/compare/urgent-care-vs-primary-care',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Urgent Care vs Primary Care: Where to Go When Sick | Body1MD',
    description: 'Comparing urgent care and primary care for illness treatment in Austin, TX. Learn which option is best for your symptoms, costs, wait times, and continuity of care.',
    images: ['/og-image.png'],
  },
}

export default function UrgentCareVsPrimaryCarePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <nav className="flex justify-center gap-2 text-sm text-white/80 mb-8 font-light">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
            <span>›</span>
            <span className="text-white">Comparison</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 leading-tight">
            Urgent Care vs Primary Care: Where Should You Go When Sick?
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Understanding the differences between urgent care and primary care helps you make the right choice for faster recovery, better outcomes, and more cost-effective treatment in Austin, TX.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] text-center mb-12">
            Side-by-Side Comparison
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-up">
            {/* Header Row */}
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white">
              <div className="p-4 font-semibold">Factor</div>
              <div className="p-4 font-semibold border-l border-white/20">Urgent Care</div>
              <div className="p-4 font-semibold border-l border-white/20">Primary Care</div>
            </div>
            
            {/* Best For */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Best For</div>
              <div className="p-4 text-[var(--color-ink)] border-l border-[var(--color-border)]">Immediate non-life-threatening issues</div>
              <div className="p-4 text-[var(--color-ink)] border-l border-[var(--color-border)]">Ongoing care and illness management</div>
            </div>
            
            {/* Availability */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Availability</div>
              <div className="p-4 text-[var(--color-ink)] border-l border-[var(--color-border)]">Walk-in, evenings & weekends</div>
              <div className="p-4 text-[var(--color-ink)] border-l border-[var(--color-border)]">Scheduled appointments, same-day available</div>
            </div>
            
            {/* Wait Time */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Wait Time</div>
              <div className="p-4 text-[var(--color-ink)] border-l border-[var(--color-border)]">30 minutes to 2+ hours</div>
              <div className="p-4 text-[var(--color-ink)] border-l border-[var(--color-border)]">Minimal with appointment</div>
            </div>
            
            {/* Cost */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Typical Cost</div>
              <div className="p-4 text-[var(--color-ink)] border-l border-[var(--color-border)]">$150–$300+ per visit</div>
              <div className="p-4 text-[var(--color-ink)] border-l border-[var(--color-border)]">$100–$200 or flat DPC fee</div>
            </div>
            
            {/* Continuity */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Continuity of Care</div>
              <div className="p-4 text-[var(--color-ink)] border-l border-[var(--color-border)]">Different provider each visit</div>
              <div className="p-4 text-[var(--color-ink)] border-l border-[var(--color-border)]">Same provider knows your history</div>
            </div>
            
            {/* Medical Records */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Medical Records</div>
              <div className="p-4 text-[var(--color-ink)] border-l border-[var(--color-border)]">Often fragmented, requires transfer</div>
              <div className="p-4 text-[var(--color-ink)] border-l border-[var(--color-border)]">Complete history in one place</div>
            </div>
            
            {/* Follow-Up */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Follow-Up Care</div>
              <div className="p-4 text-[var(--color-ink)] border-l border-[var(--color-border)]">Typically refers to primary care</div>
              <div className="p-4 text-[var(--color-ink)] border-l border-[var(--color-border)]">Built-in with same provider</div>
            </div>
            
            {/* Treatment Approach */}
            <div className="grid grid-cols-3 bg-[var(--color-cream)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Treatment Approach</div>
              <div className="p-4 text-[var(--color-ink)] border-l border-[var(--color-border)]">Symptom-focused, immediate relief</div>
              <div className="p-4 text-[var(--color-ink)] border-l border-[var(--color-border)]">Comprehensive, addresses root causes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive - Urgent Care */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16 animate-fade-up">
            <div className="flex items-start gap-4 mb-6">
              <svg className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h2 className="font-cormorant text-3xl font-light text-[var(--color-ink)] mb-4">
                  Urgent Care: Quick Access for Acute Issues
                </h2>
              </div>
            </div>
            
            <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
              <p>
                Urgent care centers fill an important gap in the healthcare system by providing walk-in treatment for conditions that need prompt attention but aren't severe enough for the emergency room. Common reasons people visit urgent care include sprains, minor cuts requiring stitches, suspected fractures, fever, respiratory infections, and urinary tract infections.
              </p>
              
              <p>
                The primary advantage of urgent care is immediate access without an appointment. Most facilities operate extended hours including evenings and weekends. However, this convenience comes with trade-offs: you'll typically wait 30 minutes to over 2 hours depending on patient volume, see a different provider each visit who doesn't know your medical history, and pay higher fees per visit than a typical primary care appointment.
              </p>
              
              <p>
                Urgent care works best as a supplement to—not a replacement for—primary care. The providers excel at treating isolated acute problems but lack the longitudinal relationship needed to manage chronic conditions, coordinate specialty care, or provide preventive health guidance. Most urgent care visits end with a recommendation to follow up with your primary care physician, creating an additional appointment and potential gap in care continuity.
              </p>
            </div>
          </div>

          <div className="animate-fade-up">
            <div className="flex items-start gap-4 mb-6">
              <svg className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              <div>
                <h2 className="font-cormorant text-3xl font-light text-[var(--color-ink)] mb-4">
                  Primary Care: Comprehensive, Relationship-Based Medicine
                </h2>
              </div>
            </div>
            
            <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
              <p>
                Primary care physicians serve as your medical home—the central hub for all your healthcare needs. A good primary care relationship means your doctor knows your complete medical history, family history, medications, allergies, lifestyle factors, and health goals. This deep knowledge enables more accurate diagnosis, personalized treatment plans, and proactive prevention of future health problems.
              </p>
              
              <p>
                When you're sick, primary care offers distinct advantages over urgent care. Your physician can compare current symptoms to your baseline, access years of medical records instantly, adjust existing medications safely, and coordinate with specialists already familiar with your case. Many primary care practices now offer same-day sick visits, telehealth options, and extended hours, narrowing the convenience gap with urgent care while maintaining superior continuity.
              </p>
              
              <p>
                Beyond acute illness, primary care encompasses preventive screenings, chronic disease management, mental health support, care coordination, and health coaching. This comprehensive approach leads to better long-term outcomes, fewer emergency visits, lower overall healthcare costs, and higher patient satisfaction. In Austin, direct primary care models like Body1MD enhance these benefits by offering unlimited visits, extended appointment times, and 24/7 provider access for a flat monthly fee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Framework */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-cormorant text-3xl font-light text-[var(--color-ink)] text-center mb-10">
              How to Decide Where to Go
            </h2>
            
            <div className="space-y-10">
              <div>
                <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-4 flex items-center gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Choose Urgent Care If:
                </h3>
                <ul className="space-y-3 ml-9">
                  <li className="flex items-start gap-3 text-[var(--color-muted)]">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>You need immediate care outside your primary care office hours</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--color-muted)]">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>You don't have an established primary care physician</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--color-muted)]">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>The issue is isolated and unlikely to require follow-up care</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--color-muted)]">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>You need services like X-rays or minor procedures available on-site</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--color-muted)]">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>You're traveling and dealing with an acute illness away from home</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-4 flex items-center gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                  Choose Primary Care If:
                </h3>
                <ul className="space-y-3 ml-9">
                  <li className="flex items-start gap-3 text-[var(--color-muted)]">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>You can reach your primary care office during their hours of operation</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--color-muted)]">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>The illness might be related to an existing chronic condition</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--color-muted)]">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>You take multiple medications that need careful consideration</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--color-muted)]">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Symptoms have been recurring or progressively worsening</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--color-muted)]">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>You value seeing the same provider who knows your complete history</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--color-muted)]">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>You want to ensure proper follow-up and continuity of care</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border-l-4 border-[var(--color-accent)]">
                <p className="text-[var(--color-ink)] font-semibold mb-2">Emergency Warning Signs</p>
                <p className="text-[var(--color-muted)] text-sm">
                  Neither urgent care nor primary care is appropriate for life-threatening emergencies. Call 911 or go to the emergency room for chest pain, difficulty breathing, severe bleeding, loss of consciousness, sudden severe headache, stroke symptoms, or suspected heart attack.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4 animate-fade-up">
            <details className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors flex items-center justify-between">
                <span>Can urgent care replace primary care for routine health needs?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                No. While urgent care is valuable for acute issues, it cannot replace the longitudinal relationship, preventive care, chronic disease management, and care coordination that primary care provides. Urgent care providers lack access to your complete medical history and typically recommend following up with a primary care physician for ongoing management. Using urgent care as your only source of healthcare leads to fragmented records, missed preventive screenings, and higher long-term costs.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors flex items-center justify-between">
                <span>How much does urgent care cost compared to primary care?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Urgent care visits typically cost $150–$300 or more depending on testing and procedures, plus insurance copays often higher than primary care. Traditional primary care sick visits range from $100–$200, with lower copays for established patients. Direct primary care models like Body1MD offer unlimited visits including sick care for a flat monthly membership fee (typically $75–$150), making primary care the most cost-effective option for anyone needing care more than once or twice per year.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors flex items-center justify-between">
                <span>Can I get same-day appointments with primary care in Austin?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes, many primary care practices in Austin reserve same-day appointment slots for acute illnesses. Direct primary care practices often provide same-day or next-day access with minimal wait times, along with telehealth options for urgent questions. This narrows the convenience gap with urgent care while maintaining the benefits of seeing your own physician who knows your medical history. Call your primary care office first when you're sick—you may be surprised how quickly they can see you.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors flex items-center justify-between">
                <span>What if I need care outside my primary care office hours?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Many primary care practices offer after-hours nurse lines, telehealth consultations, or on-call physician access for established patients. Direct primary care practices often provide 24/7 text or phone access to your physician. If your issue truly requires in-person evaluation outside office hours, urgent care is a reasonable option. However, always inform your primary care physician about the visit so they can follow up appropriately and maintain continuity of your records.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors flex items-center justify-between">
                <span>Does urgent care share records with my primary care doctor?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Automatic record sharing between urgent care and primary care is inconsistent and often doesn't happen without your specific request. This creates fragmented medical records and potential safety issues if your primary care physician doesn't know about treatments, medications prescribed, or test results from urgent care. If you do visit urgent care, request a copy of your visit summary and lab results, then forward them to your primary care office or bring them to your next appointment to maintain complete records.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center animate-fade-up">
          <svg className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
          </svg>
          <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] mb-4">
            Discuss Your Healthcare Options
          </h2>
          <p className="text-lg text-[var(--color-muted)] mb-8 leading-relaxed max-w-2xl mx-auto">
            Whether you need urgent care guidance or want to establish a primary care relationship with comprehensive access and continuity, we're here to help you make informed decisions about your health in Austin, TX.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-lg transition-all hover:scale-105 shadow-lg"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}