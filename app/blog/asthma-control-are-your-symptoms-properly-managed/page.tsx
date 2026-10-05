import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Asthma Control: Are Your Symptoms Properly Managed? | Body1MD',
  description: 'Learn the signs of well-controlled asthma, when to adjust your treatment plan, and how proper management can help you breathe easier and live fully.',
  alternates: { canonical: '/blog/asthma-control-are-your-symptoms-properly-managed' },
  openGraph: {
    title: 'Asthma Control: Are Your Symptoms Properly Managed? | Body1MD',
    description: 'Learn the signs of well-controlled asthma, when to adjust your treatment plan, and how proper management can help you breathe easier and live fully.',
    url: 'https://body1md.com/blog/asthma-control-are-your-symptoms-properly-managed',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/images/blog/asthma-control-are-your-symptoms-properly-managed.jpg', alt: 'Man holding an asthma inhaler' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asthma Control: Are Your Symptoms Properly Managed? | Body1MD',
    description: 'Learn the signs of well-controlled asthma, when to adjust your treatment plan, and how proper management can help you breathe easier and live fully.',
    images: ['/images/blog/asthma-control-are-your-symptoms-properly-managed.jpg'],
  },
}

export default function AsthmaControlBlogPost() {
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
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Asthma Control: Are Your Symptoms Properly Managed?
          </h1>

          {/* Meta */}
          <div className="flex justify-center items-center gap-6 text-sm text-white/80">
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
          <Image src="/images/blog/asthma-control-are-your-symptoms-properly-managed.jpg" alt="Man holding an asthma inhaler" fill priority className="object-cover" sizes="(max-width: 896px) 100vw, 896px" />
        </div>
      </div>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              You reach for your rescue inhaler more days than not. You wake up at night struggling to catch your breath. You've started avoiding your morning jog because you know it will trigger wheezing. These moments aren't just inconveniences. They're warning signs that your asthma may not be as well-controlled as it should be.
            </p>
            <p className="mb-6">
              Living with asthma doesn't mean accepting constant symptoms or limitations. When properly managed, most people with asthma can live active, full lives with minimal disruption. Yet studies show that nearly half of people with asthma experience poorly controlled symptoms, often without realizing their condition could be managed more effectively. Understanding what good asthma control looks like, and recognizing when you're falling short, is the first step toward breathing easier.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Does Well-Controlled Asthma Look Like?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The National Asthma Education and Prevention Program defines well-controlled asthma by specific, measurable criteria. If your asthma is properly managed, you should experience:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Daytime symptoms no more than twice per week</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>No nighttime awakenings due to asthma</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Rescue inhaler use no more than twice per week (excluding pre-exercise use)</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>No interference with normal daily activities, including exercise</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Normal or near-normal lung function on spirometry testing</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>No more than one exacerbation requiring oral steroids per year</span>
              </li>
            </ul>
            <p className="mb-6">
              If you're falling short on any of these markers, your asthma may not be optimally controlled, even if your symptoms feel manageable or you've grown accustomed to them. Many people normalize frequent rescue inhaler use or regular nighttime coughing, not realizing that better control is possible.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
            "Good asthma control means living your life on your terms, not your asthma's terms. You should rarely think about your condition on a day-to-day basis."
          </blockquote>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Warning Signs Your Asthma Isn't Well-Controlled
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Recognizing poor asthma control early allows you to address it before symptoms escalate into a serious exacerbation. Watch for these red flags:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span><strong>Frequent rescue inhaler use:</strong> If you're using your quick-relief inhaler more than twice a week, it's a sign your long-term control medication may need adjustment</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span><strong>Nighttime symptoms:</strong> Waking up coughing, wheezing, or short of breath indicates inflammation that needs better management</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span><strong>Activity limitations:</strong> Avoiding exercise, unable to keep up with peers, or needing to stop activities due to breathing difficulties</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span><strong>Declining peak flow readings:</strong> If you monitor peak flow, consistent drops below your personal best suggest worsening control</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span><strong>Frequent exacerbations:</strong> Multiple courses of oral steroids or emergency department visits in a year</span>
              </li>
            </ul>
            <p className="mb-6">
              It's important to track your symptoms honestly. Many patients underreport their symptoms to providers, either minimizing their impact or forgetting episodes that happened weeks ago. Keeping a symptom diary or using a tracking app can provide valuable objective data for your healthcare team.
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Common Barriers to Good Asthma Control
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Poor asthma control often isn't about the severity of the disease itself. It's about modifiable factors that, when addressed, can dramatically improve outcomes. Understanding these barriers is the first step toward overcoming them.
            </p>
            <p className="mb-6">
              <strong>Medication adherence</strong> is perhaps the most common issue. Controller medications like inhaled corticosteroids work by reducing chronic airway inflammation, but they need to be taken daily, even when you feel fine. Studies show that up to 50% of people with asthma don't use their controller medications as prescribed. Cost, complexity of regimen, forgetfulness, and fear of side effects all contribute to non-adherence.
            </p>
            <p className="mb-6">
              <strong>Inhaler technique</strong> matters more than many people realize. Research shows that 70-80% of people use their inhalers incorrectly, which means they're not getting the full dose of medication into their lungs. Common errors include not shaking the inhaler, poor timing of actuation with inhalation, and not holding the breath after inhaling. Even small technique errors can significantly reduce medication effectiveness.
            </p>
            <p className="mb-6">
              <strong>Trigger exposure</strong> can undermine even the best medication regimen. Common triggers include tobacco smoke, allergens (dust mites, pet dander, mold, pollen), air pollution, strong odors, cold air, and respiratory infections. Identifying and minimizing your personal triggers is a crucial component of asthma management.
            </p>
            <p className="mb-6">
              <strong>Inadequate treatment plans</strong> or outdated prescriptions can also contribute to poor control. Asthma is a dynamic condition: what worked last year may not be sufficient now. Regular follow-up with your healthcare provider allows for ongoing assessment and adjustment of your treatment plan based on your current control status and lung function.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Taking Action: Steps Toward Better Control
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If you recognize signs of poor asthma control in yourself, don't wait for symptoms to worsen. Taking proactive steps now can prevent serious exacerbations and improve your quality of life. Here's where to start:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Schedule a comprehensive asthma review</strong> with your primary care provider. Bring a record of your symptoms, medication use, and any triggers you've noticed.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Demonstrate your inhaler technique</strong> and ask for feedback. Even if you've been using inhalers for years, it's worth confirming you're doing it correctly.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Request spirometry</strong> if you haven't had lung function testing recently. This objective measure provides valuable information about your current control.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Discuss medication barriers honestly</strong> including cost concerns, side effects, or difficulties remembering daily doses. Alternative formulations or assistance programs may be available.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Update your asthma action plan</strong> so you know exactly what to do when symptoms worsen, including when to increase medication and when to seek emergency care.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Consider referral to a specialist</strong> if your asthma remains poorly controlled despite optimal primary care management. Pulmonologists and allergists can offer additional testing and treatment options.</span>
              </li>
            </ul>
            <p className="mb-6">
              Remember that achieving good asthma control is a partnership between you and your healthcare team. The more honest and detailed you can be about your symptoms, challenges, and goals, the better equipped your provider will be to help you develop an effective management plan.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Impact of Proper Asthma Management
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The difference between poorly controlled and well-controlled asthma extends far beyond just respiratory symptoms. Research consistently shows that optimal asthma management improves quality of life across multiple domains.
            </p>
            <p className="mb-6">
              People with well-controlled asthma report better sleep quality, improved ability to exercise and participate in physical activities, fewer missed work or school days, and reduced healthcare costs from avoided emergency visits and hospitalizations. Children with good asthma control perform better academically and socially, while adults report greater productivity and emotional well-being.
            </p>
            <p className="mb-6">
              Perhaps most importantly, proper asthma management reduces the risk of severe exacerbations that can lead to permanent lung damage or life-threatening respiratory failure. While asthma cannot be cured, it can almost always be controlled effectively with the right combination of medication, trigger avoidance, and ongoing medical support.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 mt-12">
            <p className="mb-6">
              Living with well-controlled asthma means living life fully: exercising, traveling, pursuing your goals without constant worry about your next breath. If your current reality falls short of that vision, know that better control is possible. The first step is acknowledging where you are now and reaching out for the support and resources that can help you get where you want to be.
            </p>
            <p className="mb-6">
              Don't settle for "managing" your asthma with frequent rescue inhaler use and activity limitations. Partner with a healthcare provider who will take the time to optimize your treatment plan, address barriers to adherence, and support you in achieving true asthma control. Your lungs, and your life, deserve nothing less.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
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
                Dr. Andrew Hemmen is a board-certified internal medicine physician who has cared for patients in New Mexico since 2008. At Body1MD in Los Ranchos de Albuquerque, he provides evidence-based patient education and direct primary care. Visits are designed to last up to an hour, which leaves time for asthma management, chronic disease care, and preventive health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Explore All Health Resources
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Browse our full library of articles on chronic disease management, preventive care, and wellness topics.
                </p>
                <span className="text-[var(--color-accent)] text-sm font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/services" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Our Primary Care Services
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Learn about our comprehensive approach to chronic disease management and preventive health.
                </p>
                <span className="text-[var(--color-accent)] text-sm font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/contact" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Schedule a Consultation
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Connect with Dr. Hemmen to discuss your asthma management and develop a personalized care plan.
                </p>
                <span className="text-[var(--color-accent)] text-sm font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Get in touch
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule Your Visit
          </Link>
        </div>
      </section>
    </main>
  )
}