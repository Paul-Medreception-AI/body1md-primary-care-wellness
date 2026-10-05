import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Telemedicine vs In-Person Visits: When Virtual Care Is Appropriate',
  description: 'Compare telemedicine and in-person primary care visits in Albuquerque, NM. Learn which option fits your health needs and when virtual care is most effective.',
  alternates: { canonical: '/compare/telemedicine-vs-in-person-visits' },
  openGraph: {
    title: 'Telemedicine vs In-Person Visits: When Virtual Care Is Appropriate',
    description: 'Compare telemedicine and in-person primary care visits in Albuquerque, NM. Learn which option fits your health needs and when virtual care is most effective.',
    url: 'https://body1md.com/compare/telemedicine-vs-in-person-visits',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Telemedicine vs In-Person Visits: When Virtual Care Is Appropriate',
    description: 'Compare telemedicine and in-person primary care visits in Albuquerque, NM. Learn which option fits your health needs and when virtual care is most effective.',
    images: ['/og-image.png']
  }
}

export default function TeleMedicineVsInPersonPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="flex items-center justify-center gap-2 text-sm mb-8 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span>›</span>
            <span>Comparison</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light leading-tight mb-6">
            Telemedicine vs In-Person Visits: When Virtual Care Is Appropriate
          </h1>
          <p className="text-xl opacity-95 max-w-3xl mx-auto">
            Understanding which care format best suits your health needs, lifestyle, and medical situation
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl mb-16">
            <Image
              src="/images/stock/compare-telemedicine-vs-in-person-visits.jpg"
              alt="Smiling man in glasses talking on his phone at home"
              fill
              className="object-cover object-top"
              sizes="(max-width: 896px) 100vw, 896px"
              priority
            />
          </div>
          <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Side-by-Side Comparison
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-up">
            {/* Header */}
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white">
              <div className="p-4 font-semibold">Factor</div>
              <div className="p-4 font-semibold border-l border-white/20">Telemedicine</div>
              <div className="p-4 font-semibold border-l border-white/20">In-Person Visits</div>
            </div>
            
            {/* Rows */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Convenience</div>
              <div className="p-4 border-l border-[var(--color-border)]">Access from anywhere, no travel time, flexible scheduling</div>
              <div className="p-4 border-l border-[var(--color-border)]">Requires travel, scheduled appointment times, parking considerations</div>
            </div>
            
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Best For</div>
              <div className="p-4 border-l border-[var(--color-border)]">Follow-ups, medication refills, minor illnesses, mental health, chronic disease management</div>
              <div className="p-4 border-l border-[var(--color-border)]">Physical exams, diagnostic testing, procedures, complex symptoms requiring examination</div>
            </div>
            
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Effectiveness</div>
              <div className="p-4 border-l border-[var(--color-border)]">Works well for many follow-ups and straightforward concerns when your history tells most of the story</div>
              <div className="p-4 border-l border-[var(--color-border)]">Complete diagnostic capabilities, hands-on assessment, immediate interventions</div>
            </div>
            
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Time Commitment</div>
              <div className="p-4 border-l border-[var(--color-border)]">Often shorter overall, with no commute</div>
              <div className="p-4 border-l border-[var(--color-border)]">Includes travel and any waiting time, which varies by location</div>
            </div>
            
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Technology Requirements</div>
              <div className="p-4 border-l border-[var(--color-border)]">Smartphone, tablet, or computer with camera and internet connection</div>
              <div className="p-4 border-l border-[var(--color-border)]">None required</div>
            </div>
            
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Privacy Setting</div>
              <div className="p-4 border-l border-[var(--color-border)]">Private location of your choice, secure HIPAA-compliant platform</div>
              <div className="p-4 border-l border-[var(--color-border)]">Clinical setting, dedicated exam room, complete privacy</div>
            </div>
            
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Cost Considerations</div>
              <div className="p-4 border-l border-[var(--color-border)]">Often same rate as in-person, saves travel costs and time off work</div>
              <div className="p-4 border-l border-[var(--color-border)]">Standard visit rate, plus travel expenses and potential lost wages</div>
            </div>
            
            <div className="grid grid-cols-3">
              <div className="p-4 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Ideal Patient</div>
              <div className="p-4 border-l border-[var(--color-border)]">Tech-comfortable, stable chronic conditions, busy schedule, limited mobility</div>
              <div className="p-4 border-l border-[var(--color-border)]">New symptoms, physical exam needed, prefers face-to-face interaction, diagnostic testing required</div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive - Telemedicine */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16 animate-fade-up">
            <div className="flex items-start gap-4 mb-6">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <div>
                <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] mb-4">
                  Telemedicine: Virtual Primary Care
                </h2>
              </div>
            </div>
            
            <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
              <p>
                Telemedicine has evolved from a convenience feature to a clinically validated care delivery model. Research suggests that for many primary care encounters, particularly follow-up visits, medication management, and common acute illnesses, virtual visits can work about as well as traditional office visits. The key advantage lies not just in convenience, but in increased access to care when symptoms first appear, reducing the tendency to delay treatment.
              </p>
              
              <p>
                Virtual visits excel in managing chronic conditions like diabetes, hypertension, and anxiety. Patients can check in regularly without the burden of travel, making it easier to maintain consistent monitoring. A physician can review home blood pressure readings, discuss medication adjustments, and provide counseling, all core elements of effective chronic disease management. Many patients find they're more relaxed and communicative in their home environment, leading to more productive conversations about lifestyle factors and treatment adherence.
              </p>
              
              <p>
                The ideal telemedicine candidate is someone comfortable with basic technology, has a stable internet connection, and is dealing with conditions that don't require hands-on examination. Common telemedicine visits include: upper respiratory infections, urinary symptoms, skin rashes (easily visible on camera), anxiety and depression management, medication refills, pre-travel consultations, and follow-ups after procedures or hospital stays. The technology barrier is lower than many assume, since most platforms work on smartphones with no software installation required.
              </p>
            </div>
          </div>

          {/* Deep Dive - In-Person */}
          <div className="animate-fade-up">
            <div className="flex items-start gap-4 mb-6">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
              </svg>
              <div>
                <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] mb-4">
                  In-Person Visits: Traditional Office Care
                </h2>
              </div>
            </div>
            
            <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
              <p>
                In-person visits remain the gold standard when physical examination findings drive clinical decisions. Listening to heart and lung sounds, palpating the abdomen, examining joints through range of motion, assessing skin lesions by texture and depth: these diagnostic maneuvers simply cannot be replicated virtually. Annual wellness exams, which include comprehensive physical assessments and often lead to ordered lab work or screening tests, are best conducted in person to capture the full clinical picture.
              </p>
              
              <p>
                Certain symptoms demand hands-on evaluation. Chest pain, severe abdominal pain, neurological changes, suspected fractures, and any condition where the physical exam might change management urgently requires in-person assessment. An office visit also lets the physician examine you directly and arrange the right testing, treatment, or referral without the second appointment that often follows a visit that started virtually. For patients new to a practice, the initial comprehensive visit is typically best conducted in person to establish a thorough baseline.
              </p>
              
              <p>
                The in-person format suits patients who prefer face-to-face interaction, lack reliable technology access, or have complex medical situations requiring coordination between multiple examination findings. At Body1MD Primary Care & Wellness in Los Ranchos de Albuquerque, office visits are designed to last up to an hour, and the private exam rooms have large-format displays where you and Dr. Hemmen review imaging and results together. The dedicated appointment time allows for unhurried conversation, relationship building with your physician, and the comfort some patients feel in a clinical environment designed for healing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Framework */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] text-center mb-12">
              How to Decide Which Option Is Right
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Telemedicine */}
              <div>
                <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-6">Choose Telemedicine If:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You have a follow-up visit for a known condition</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You need a medication refill or adjustment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Your symptoms are mild and don't require physical examination</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You have limited time or difficulty traveling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You're managing anxiety, depression, or insomnia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You need test results reviewed or questions answered</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You have reliable internet and a private space</span>
                  </li>
                </ul>
              </div>
              
              {/* In-Person */}
              <div>
                <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-6">Choose In-Person If:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">This is your first visit with a new physician</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You need an annual physical exam or wellness visit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Your symptoms require hands-on examination</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You need lab work, imaging, or diagnostic testing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You may need a procedure or hands-on treatment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Symptoms are severe, worsening, or concerning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You prefer face-to-face medical interactions</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-white rounded-xl border-l-4 border-[var(--color-accent)]">
              <p className="text-[var(--color-muted)] leading-relaxed">
                <strong className="text-[var(--color-ink)]">Not sure which to choose?</strong> Ask your physician first. At Body1MD Primary Care & Wellness, patients can reach Dr. Hemmen directly by phone and text, and he will advise whether a virtual check-in fits or you should come in. When you do need to be seen, same- or next-day office appointments are available in most cases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4 animate-fade-up">
            <details className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <summary className="p-6 cursor-pointer font-semibold text-[var(--color-ink)] flex items-center justify-between hover:bg-[var(--color-light)] transition-colors">
                Is telemedicine as effective as in-person care?
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>For many primary care concerns, research suggests telemedicine can produce results similar to in-person care. Studies have found similar patient satisfaction, diagnostic accuracy, and treatment success for conditions like upper respiratory infections, urinary tract infections, medication management, and mental health counseling. The key is appropriate case selection: virtual care excels when the diagnosis relies primarily on history and visual assessment rather than hands-on physical examination.</p>
              </div>
            </details>
            
            <details className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <summary className="p-6 cursor-pointer font-semibold text-[var(--color-ink)] flex items-center justify-between hover:bg-[var(--color-light)] transition-colors">
                Can I reach Dr. Hemmen between office visits?
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Yes. At Body1MD, care is built around unhurried office visits, with direct access in between: patients can reach Dr. Hemmen directly by phone and text, and he will advise whether a virtual check-in fits or you should come in. Many people elsewhere use a similar mix: an annual exam in person, quick check-ins about a chronic condition between visits, and an office visit when symptoms change or testing is needed. Because one physician knows your whole record, continuity is built in.</p>
              </div>
            </details>
            
            <details className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <summary className="p-6 cursor-pointer font-semibold text-[var(--color-ink)] flex items-center justify-between hover:bg-[var(--color-light)] transition-colors">
                What technology do I need for a telemedicine visit?
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>For a video visit with a telemedicine service, you generally need a device with a camera and microphone (smartphone, tablet, or computer) and a reliable internet connection. Most platforms work through a web browser with no app download required, and services usually send a link before the appointment. A private, quiet space with good lighting helps. If a service offers video visits, ask what help is available if you have trouble connecting. For Body1MD patients, a phone is all you need to reach Dr. Hemmen between visits.</p>
              </div>
            </details>
            
            <details className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <summary className="p-6 cursor-pointer font-semibold text-[var(--color-ink)] flex items-center justify-between hover:bg-[var(--color-light)] transition-colors">
                Are telemedicine visits covered by insurance?
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Many insurance plans now cover telemedicine visits, though coverage details vary by plan and state, so check your specific plan's telemedicine benefits. Body1MD works differently: it does not bill insurance. Members pay a flat monthly membership ($100 per month under age 50, $150 per month at 50 and up), and direct phone and text access to Dr. Hemmen is part of that membership.</p>
              </div>
            </details>
            
            <details className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <summary className="p-6 cursor-pointer font-semibold text-[var(--color-ink)] flex items-center justify-between hover:bg-[var(--color-light)] transition-colors">
                When should I choose an in-person visit over telemedicine?
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Choose in-person care when your symptoms require hands-on examination (abdominal pain, joint issues, chest pain), when you need diagnostic testing or procedures, for your annual comprehensive physical, or when your physician recommends an in-office assessment after a phone or virtual check-in. If you're uncertain, contact your physician first; he or she can determine whether you need to come in based on your symptoms and history. Trust your instincts: if something feels serious or you're worried about your symptoms, err on the side of in-person evaluation.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="font-cormorant text-4xl font-light mb-6 animate-fade-up">
            Discuss Your Care Options
          </h2>
          <p className="text-lg mb-8 opacity-95 animate-fade-up">
            At Body1MD Primary Care & Wellness in Los Ranchos de Albuquerque, you get unhurried office visits and direct phone and text access to Dr. Hemmen between them.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-lg transition-all hover:scale-105 hover:shadow-xl animate-fade-up"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}