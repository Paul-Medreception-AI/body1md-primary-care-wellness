import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'COPD Management: Breathing Easier With Proper Treatment',
  description: 'Learn effective COPD management strategies, treatment options, and lifestyle modifications to improve breathing and quality of life with chronic obstructive pulmonary disease.',
  alternates: { canonical: '/blog/copd-management-breathing-easier-with-proper-treatment' },
  openGraph: {
    title: 'COPD Management: Breathing Easier With Proper Treatment',
    description: 'Learn effective COPD management strategies, treatment options, and lifestyle modifications to improve breathing and quality of life with chronic obstructive pulmonary disease.',
    url: 'https://body1md.com/blog/copd-management-breathing-easier-with-proper-treatment',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/images/blog/copd-management-breathing-easier-with-proper-treatment.jpg', alt: 'Older man breathing deeply outdoors with a hand on his chest' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'COPD Management: Breathing Easier With Proper Treatment',
    description: 'Learn effective COPD management strategies, treatment options, and lifestyle modifications to improve breathing and quality of life with chronic obstructive pulmonary disease.',
    images: ['/images/blog/copd-management-breathing-easier-with-proper-treatment.jpg'],
  },
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
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
          <h1 className="font-cormorant text-5xl font-light leading-tight text-center mb-8">
            COPD Management: Breathing Easier With Proper Treatment
          </h1>

          {/* Meta */}
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
          <Image src="/images/blog/copd-management-breathing-easier-with-proper-treatment.jpg" alt="Older man breathing deeply outdoors with a hand on his chest" fill priority className="object-cover" sizes="(max-width: 896px) 100vw, 896px" />
        </div>
      </div>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The simple act of breathing, something most of us take for granted, becomes a daily challenge for millions living with chronic obstructive pulmonary disease (COPD). Whether it's climbing stairs, playing with grandchildren, or simply walking to the mailbox, shortness of breath can transform routine activities into draining ordeals. But here's the hopeful truth: with proper management, many people with COPD can breathe easier, stay more active, and enjoy a significantly better quality of life.
            </p>
            <p className="mb-6">
              COPD is a progressive lung disease that makes it increasingly difficult to breathe, but it doesn't have to define your life. Understanding your condition and working with your healthcare team to develop a comprehensive management plan can make all the difference between feeling limited by your lungs and living fully despite them.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Understanding COPD: More Than Just a Cough
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              COPD is an umbrella term that includes chronic bronchitis and emphysema, two conditions that often occur together. In chronic bronchitis, the airways become inflamed and produce excess mucus, leading to a persistent cough. Emphysema damages the tiny air sacs in the lungs, making it harder to breathe out completely. Together, these conditions create the characteristic symptoms of COPD: shortness of breath, chronic cough, wheezing, and chest tightness.
            </p>
            <p className="mb-6">
              While smoking is the leading cause of COPD, accounting for about 85-90% of cases, it's not the only risk factor. Long-term exposure to secondhand smoke, air pollution, workplace dust and chemicals, or genetic factors can also contribute. In rare cases, a genetic condition called alpha-1 antitrypsin deficiency leads to COPD, even in non-smokers.
            </p>
            <p className="mb-6">
              COPD affects approximately 16 million Americans and is the fourth leading cause of death in the United States. It typically develops slowly over years, often going undiagnosed until symptoms become severe. That's why recognizing early warning signs and seeking medical evaluation is crucial for better outcomes.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Cornerstones of COPD Treatment
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Effective COPD management requires a multi-faceted approach. While there's currently no cure, treatment can significantly slow disease progression, relieve symptoms, and prevent complications.
            </p>
            <p className="mb-6">
              <strong>Smoking cessation</strong> is the single most important step for anyone with COPD who still smokes. Quitting smoking can slow the rate of lung function decline and improve overall health, regardless of how long you've smoked or how advanced your disease is. Your healthcare provider can help you access medications, counseling, and support programs to increase your chances of success.
            </p>
            <p className="mb-6">
              <strong>Bronchodilators</strong> are the backbone of COPD medication therapy. These inhaled medications relax the muscles around the airways, making breathing easier. Short-acting bronchodilators provide quick relief during flare-ups, while long-acting versions offer sustained symptom control throughout the day or night.
            </p>
            <p className="mb-6">
              <strong>Inhaled corticosteroids</strong> reduce inflammation in the airways and are often combined with long-acting bronchodilators for moderate to severe COPD. This combination therapy has been shown to reduce exacerbations and improve quality of life more effectively than either treatment alone.
            </p>
            <p className="mb-6">
              <strong>Pulmonary rehabilitation</strong> is perhaps the most underutilized yet highly effective treatment for COPD. These supervised programs combine exercise training, education, and support to help you stay as active as possible. Studies consistently show that pulmonary rehabilitation improves exercise capacity, reduces symptoms, and enhances quality of life.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
              "COPD management isn't about accepting limitations. It's about strategically working within your lung capacity to maximize what you can do and enjoy."
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Lifestyle Modifications That Make a Difference
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Beyond medications, daily choices and habits play a crucial role in managing COPD effectively. Small changes can add up to significant improvements in breathing and energy levels.
            </p>
            <div className="space-y-4 my-6">
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Stay physically active:</strong> Regular exercise strengthens respiratory muscles and improves overall endurance. Even gentle activities like walking can help maintain lung function and prevent deconditioning.</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Practice breathing techniques:</strong> Pursed-lip breathing and diaphragmatic breathing can help you breathe more efficiently, especially during activities or when you feel short of breath.</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Avoid lung irritants:</strong> Stay away from secondhand smoke, strong perfumes, paint fumes, and heavily polluted air. Check air quality reports and stay indoors on high-pollution days.</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Maintain a healthy weight:</strong> Being overweight makes breathing harder, while being underweight can weaken respiratory muscles. Work with your provider to find your optimal weight range.</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Prevent respiratory infections:</strong> Get annual flu shots and pneumonia vaccines as recommended. Wash hands frequently and avoid crowds during cold and flu season.</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Use oxygen therapy as prescribed:</strong> If your doctor recommends supplemental oxygen, use it exactly as directed. Proper oxygen use can reduce shortness of breath and protect your heart.</p>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Recognizing and Managing Exacerbations
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              COPD exacerbations (sudden worsening of symptoms) are serious events that require prompt attention. They can be triggered by respiratory infections, air pollution, or sometimes occur without an obvious cause. Learning to recognize the warning signs can help you get treatment faster and potentially avoid hospitalization.
            </p>
            <p className="mb-6">
              Warning signs of an exacerbation include increased shortness of breath, changes in mucus color or amount, more frequent or severe coughing, increased wheezing, fatigue, confusion, or swelling in ankles and feet. If you experience these symptoms, contact your healthcare provider right away.
            </p>
            <p className="mb-6">
              Many patients work with their doctors to develop an action plan that outlines specific steps to take when symptoms worsen, including when to increase medications, when to start antibiotics or steroids, and when to seek emergency care. Having this plan in place provides both a roadmap for managing flare-ups and peace of mind.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Role of Ongoing Medical Care
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              COPD is a chronic condition that requires regular monitoring and management adjustments over time. Working closely with a primary care provider who understands your complete health picture is essential for optimal outcomes.
            </p>
            <p className="mb-6">
              Regular check-ups allow your doctor to monitor lung function through spirometry tests, adjust medications as needed, screen for complications, and address other health conditions that commonly occur alongside COPD, such as heart disease, osteoporosis, depression, and anxiety.
            </p>
            <p className="mb-6">
              Your provider can also ensure you're using inhalers correctly. Studies show that up to 70% of patients don't use their inhalers properly, which significantly reduces their effectiveness. Proper inhaler technique is a simple fix that can dramatically improve symptom control.
            </p>
            <p className="mb-6">
              Additionally, your healthcare team can connect you with specialists when needed, such as pulmonologists for advanced disease management or nutritionists to address dietary concerns affecting your breathing and energy levels.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Living Well With COPD
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While COPD presents real challenges, many people with the condition continue to lead active, fulfilling lives. The key is accepting that you may need to adjust how you do things while refusing to give up the activities that bring you joy.
            </p>
            <p className="mb-6">
              Energy conservation techniques can help you accomplish daily tasks without becoming overly breathless. This might mean sitting while getting dressed, organizing your home to minimize stair climbing, or pacing activities throughout the day rather than doing everything at once.
            </p>
            <p className="mb-6">
              Mental health is equally important. Living with a chronic condition can feel overwhelming at times, and depression and anxiety are common among people with COPD. Don't hesitate to talk with your provider about these concerns, because treatment for mood disorders can improve both your emotional well-being and your ability to manage COPD effectively.
            </p>
            <p className="mb-6">
              Support groups, whether in-person or online, provide valuable opportunities to connect with others who understand what you're going through. Sharing experiences, tips, and encouragement with fellow COPD patients can reduce feelings of isolation and provide practical insights for daily management.
            </p>
          </div>

          {/* Closing Paragraph */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              Managing COPD effectively requires partnership between you and your healthcare team. While the condition is chronic and progressive, the right combination of medications, lifestyle modifications, regular monitoring, and support can help you breathe easier and maintain your quality of life. If you're experiencing symptoms of COPD or struggling to manage your current treatment plan, reach out to schedule a comprehensive evaluation. Together, we can develop a personalized approach that helps you live as fully and comfortably as possible, focusing not on what your lungs prevent you from doing, but on what's still possible with the right care and support.
            </p>
          </div>
        </div>

        {/* Author Box */}
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 flex gap-6 items-start">
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
              Dr. Andrew Hemmen is a board-certified internal medicine physician who has cared for patients in New Mexico since 2008. At Body1MD in Los Ranchos de Albuquerque, he provides evidence-based patient education and direct primary care. He helps patients manage chronic conditions with personalized care that treats the whole person, not just symptoms.
            </p>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <Link href="/services/preventive-care" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Preventive Care Services
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Comprehensive preventive care to keep you healthy and catch conditions early.
                </p>
              </div>
            </Link>

            {/* Article 2 */}
            <Link href="/services/chronic-disease-management" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Chronic Disease Management
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Personalized care plans for managing diabetes, hypertension, and other chronic conditions.
                </p>
              </div>
            </Link>

            {/* Article 3 */}
            <Link href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  More Health Resources
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Explore our library of patient education articles on various health topics.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Dr. Hemmen is here to help.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}