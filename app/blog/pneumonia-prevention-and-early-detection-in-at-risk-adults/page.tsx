import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pneumonia Prevention and Early Detection in At-Risk Adults',
  description: 'Learn evidence-based strategies for preventing pneumonia and recognizing early warning signs in vulnerable populations. Essential guidance for at-risk adults in Austin, TX.',
  alternates: { canonical: '/blog/pneumonia-prevention-and-early-detection-in-at-risk-adults' },
  openGraph: {
    title: 'Pneumonia Prevention and Early Detection in At-Risk Adults',
    description: 'Learn evidence-based strategies for preventing pneumonia and recognizing early warning signs in vulnerable populations. Essential guidance for at-risk adults in Austin, TX.',
    url: 'https://body1md.com/blog/pneumonia-prevention-and-early-detection-in-at-risk-adults',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pneumonia Prevention and Early Detection in At-Risk Adults',
    description: 'Learn evidence-based strategies for preventing pneumonia and recognizing early warning signs in vulnerable populations. Essential guidance for at-risk adults in Austin, TX.',
    images: ['/og-image.png']
  }
}

export default function PneumoniaPreventionArticle() {
  return (
    <main className="min-h-screen bg-white">
      <article>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
          <div className="max-w-4xl mx-auto px-6">
            {/* Breadcrumb */}
            <div className="text-sm text-white/80 mb-6 text-center">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">›</span>
              <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
              <span className="mx-2">›</span>
              <span>Article</span>
            </div>

            {/* Category */}
            <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
              Patient Education
            </div>

            {/* Title */}
            <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
              Pneumonia Prevention and Early Detection in At-Risk Adults
            </h1>

            {/* Meta */}
            <div className="flex items-center justify-center gap-6 text-sm text-white/80">
              <span>Published December 2024</span>
              <span>•</span>
              <span>7 min read</span>
              <span>•</span>
              <span>Reviewed by Body1MD Primary Care & Wellness</span>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <section className="bg-white py-20">
          <div className="max-w-3xl mx-auto px-6">
            {/* Opening Hook */}
            <div className="text-[var(--color-ink)] leading-loose text-lg mb-8">
              <p className="mb-6">
                Every year, more than a million Americans are hospitalized with pneumonia, and for vulnerable adults—those over 65, living with chronic conditions, or with weakened immune systems—this common respiratory infection can quickly become life-threatening. Yet many cases are preventable, and early detection dramatically improves outcomes. Understanding your risk factors and knowing the warning signs can make all the difference between a manageable illness and a medical emergency.
              </p>
            </div>

            {/* Section 1 */}
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              What Makes Pneumonia Particularly Dangerous for At-Risk Adults
            </h2>
            <div className="text-[var(--color-ink)] leading-loose mb-8">
              <p className="mb-4">
                Pneumonia is an infection that inflames the air sacs in one or both lungs, filling them with fluid or pus. While healthy adults often recover with treatment, certain groups face significantly higher risks of complications, including respiratory failure, sepsis, and death.
              </p>
              <p className="mb-4">
                You're considered at elevated risk if you:
              </p>
              <ul className="space-y-3 ml-6 mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Are 65 years or older</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Have chronic lung disease (COPD, asthma, emphysema)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Live with heart disease or diabetes</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Have a weakened immune system (due to cancer treatment, organ transplant, or HIV)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Smoke or have a history of heavy alcohol use</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Recently recovered from surgery or a prolonged illness</span>
                </li>
              </ul>
              <p>
                For these individuals, the body's ability to fight infection is compromised, allowing pneumonia to progress rapidly and severely. This makes both prevention and early intervention absolutely critical.
              </p>
            </div>

            {/* Section 2 */}
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Evidence-Based Prevention Strategies
            </h2>
            <div className="text-[var(--color-ink)] leading-loose mb-8">
              <p className="mb-4">
                The good news is that many pneumonia cases in at-risk adults are preventable through proactive measures supported by strong clinical evidence.
              </p>
              
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-6 mb-3">Vaccination: Your First Line of Defense</h3>
              <p className="mb-4">
                Pneumococcal vaccines protect against the bacteria responsible for most serious pneumonia cases. The CDC recommends that adults 65 and older receive both PCV20 (one dose) or PCV15 followed by PPSV23. Younger adults with certain chronic conditions should also be vaccinated. Studies show these vaccines reduce the risk of invasive pneumococcal disease by 50-85% in eligible populations.
              </p>
              <p className="mb-4">
                Annual flu shots are equally important—influenza is a leading precursor to bacterial pneumonia, particularly in older adults. Getting your flu vaccine every fall significantly reduces your pneumonia risk throughout the respiratory illness season.
              </p>

              <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-6 mb-3">Lifestyle Modifications That Matter</h3>
              <p className="mb-4">
                Beyond vaccination, several daily habits substantially lower your pneumonia risk:
              </p>
              <ul className="space-y-3 ml-6 mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span><strong>Stop smoking:</strong> Smoking damages lung defenses and is the single most modifiable risk factor for pneumonia in adults</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span><strong>Practice excellent hand hygiene:</strong> Wash hands thoroughly and frequently, especially before eating and after being in public spaces</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span><strong>Maintain good oral health:</strong> Poor dental hygiene increases aspiration risk and bacterial load in the mouth</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span><strong>Manage chronic conditions:</strong> Keep diabetes, heart disease, and lung conditions well-controlled through consistent treatment</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span><strong>Stay active and well-nourished:</strong> Regular physical activity and adequate nutrition support immune function</span>
                </li>
              </ul>
            </div>

            {/* Pull Quote */}
            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
              <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
                "For vulnerable adults, recognizing pneumonia early—ideally within the first 24 to 48 hours of symptoms—can be the difference between outpatient treatment and hospitalization."
              </p>
            </div>

            {/* Section 3 */}
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Recognizing the Early Warning Signs
            </h2>
            <div className="text-[var(--color-ink)] leading-loose mb-8">
              <p className="mb-4">
                Early detection dramatically improves outcomes, but pneumonia symptoms in older or immunocompromised adults can be atypical. While younger, healthy people typically present with high fever and severe cough, at-risk adults may experience more subtle warning signs.
              </p>
              
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-6 mb-3">Classic Symptoms to Watch For</h3>
              <ul className="space-y-3 ml-6 mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Persistent cough, often producing yellow, green, or bloody mucus</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Fever, sweating, and shaking chills</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Shortness of breath, especially with activity</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Chest pain that worsens with breathing or coughing</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Fatigue and loss of appetite</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-6 mb-3">Atypical Presentations in Vulnerable Adults</h3>
              <p className="mb-4">
                Older adults and those with weakened immune systems may not develop fever or prominent cough. Instead, watch for:
              </p>
              <ul className="space-y-3 ml-6 mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Sudden confusion or changes in mental awareness</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Lower-than-normal body temperature</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Worsening of existing chronic conditions</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Rapid breathing or heart rate</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Unexplained weakness or falls</span>
                </li>
              </ul>
              <p>
                These subtle changes are often dismissed as "just getting older" or attributed to other conditions. For at-risk adults, any unexplained decline in function deserves prompt medical evaluation.
              </p>
            </div>

            {/* Section 4 */}
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              When to Seek Medical Care
            </h2>
            <div className="text-[var(--color-ink)] leading-loose mb-8">
              <p className="mb-4">
                If you're in an at-risk category and develop any concerning respiratory symptoms, contact your healthcare provider promptly—don't wait to see if symptoms improve on their own. Early diagnosis allows for outpatient treatment in many cases, while delayed care often leads to hospitalization.
              </p>
              <p className="mb-4">
                Seek immediate emergency care if you experience:
              </p>
              <ul className="space-y-3 ml-6 mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Severe difficulty breathing or shortness of breath at rest</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Chest pain</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Persistent fever above 102°F (39°C)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Bluish lips or fingertips</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Confusion or altered mental state</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Persistent vomiting or inability to keep down fluids</span>
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              The Role of Ongoing Primary Care
            </h2>
            <div className="text-[var(--color-ink)] leading-loose mb-8">
              <p className="mb-4">
                For at-risk adults, establishing a consistent relationship with a primary care provider is perhaps the most effective long-term prevention strategy. Regular check-ups allow your provider to:
              </p>
              <ul className="space-y-3 ml-6 mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Ensure you receive appropriate vaccinations on schedule</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Optimize management of chronic conditions that increase pneumonia risk</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Assess your individual risk factors and provide personalized prevention advice</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Establish baseline health status, making it easier to detect changes early</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Provide rapid access when respiratory symptoms develop</span>
                </li>
              </ul>
              <p className="mb-4">
                In a direct primary care model, the enhanced accessibility and extended visit times allow for more thorough discussions about prevention strategies and earlier intervention when concerning symptoms arise—critical advantages for patients at elevated pneumonia risk.
              </p>
            </div>

            {/* Closing */}
            <div className="text-[var(--color-ink)] leading-loose mt-12 mb-8">
              <p className="mb-4">
                Pneumonia remains a serious threat to vulnerable adults, but it doesn't have to be inevitable. Through vaccination, healthy lifestyle choices, awareness of warning signs, and partnership with a dedicated primary care provider, you can significantly reduce your risk and ensure prompt treatment if infection does occur. If you're in an at-risk category, now is the time to review your prevention plan and establish the care relationships that will protect your health through every season.
              </p>
            </div>
          </div>
        </section>

        {/* Author Box */}
        <section className="bg-white pb-20">
          <div className="max-w-3xl mx-auto px-6">
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
              <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <div>
                <div className="text-sm uppercase tracking-wider text-[var(--color-muted)] mb-2">Medical Review</div>
                <div className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">Reviewed by Body1MD Primary Care & Wellness</div>
                <p className="text-[var(--color-ink)]/80 leading-relaxed">
                  Our team is dedicated to providing comprehensive primary care focused on prevention, early detection, and personalized treatment plans for patients in Austin, TX.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="bg-[var(--color-cream)] py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="p-8">
                  <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-3">Prevention</div>
                  <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                    More Patient Education Articles
                  </h4>
                  <p className="text-[var(--color-ink)]/70 mb-4 leading-relaxed">
                    Explore our library of evidence-based health information.
                  </p>
                  <div className="flex items-center text-[var(--color-accent)] text-sm font-semibold">
                    Read more
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Card 2 */}
              <Link href="/services" className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="p-8">
                  <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-3">Primary Care</div>
                  <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                    Our Services
                  </h4>
                  <p className="text-[var(--color-ink)]/70 mb-4 leading-relaxed">
                    Comprehensive primary care services designed around your needs.
                  </p>
                  <div className="flex items-center text-[var(--color-accent)] text-sm font-semibold">
                    Learn more
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Card 3 */}
              <Link href="/contact" className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="p-8">
                  <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-3">Get Started</div>
                  <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                    Schedule a Visit
                  </h4>
                  <p className="text-[var(--color-ink)]/70 mb-4 leading-relaxed">
                    Connect with our team to discuss your health goals.
                  </p>
                  <div className="flex items-center text-[var(--color-accent)] text-sm font-semibold">
                    Contact us
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
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
            <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
            <p className="text-xl text-white/90 mb-8">Our team is here to help.</p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-cream)] transition-colors duration-300"
            >
              Schedule Your Visit
            </Link>
          </div>
        </section>
      </article>
    </main>
  )
}