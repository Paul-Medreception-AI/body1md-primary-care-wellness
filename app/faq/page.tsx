import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Body1MD Primary Care & Wellness',
  description: 'Get answers to common questions about our direct primary care practice, membership plans, appointments, insurance, and how we provide personalized healthcare in Austin, TX.',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'Frequently Asked Questions | Body1MD Primary Care & Wellness',
    description: 'Get answers to common questions about our direct primary care practice, membership plans, appointments, insurance, and how we provide personalized healthcare in Austin, TX.',
    url: 'https://body1md.com/faq',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frequently Asked Questions | Body1MD Primary Care & Wellness',
    description: 'Get answers to common questions about our direct primary care practice, membership plans, appointments, insurance, and how we provide personalized healthcare in Austin, TX.',
    images: ['/og-image.png'],
  },
}

export default function FAQPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <span>FAQ</span>
          </nav>
          <h1 className="font-cormorant text-5xl font-light mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl opacity-90">
            Everything you need to know about our practice and services
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-3">
            
            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
                What is Direct Primary Care (DPC)?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
                Direct Primary Care is a healthcare model where patients pay a simple monthly membership fee directly to their primary care physician, eliminating insurance companies from routine care. This allows us to spend more time with each patient, offer same-day appointments, and provide 24/7 access to your doctor. There are no copays, deductibles, or surprise bills for primary care services included in your membership. DPC empowers a true doctor-patient relationship focused on your health, not insurance paperwork. While you may still want insurance for catastrophic events and specialists, your day-to-day primary care becomes simple, affordable, and accessible.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
                Do you accept insurance?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
                We do not bill insurance for our membership-based primary care services, which is what allows us to keep our practice patient-centered rather than insurance-centered. Your monthly membership covers all primary care visits, consultations, and care coordination. However, many patients choose to maintain high-deductible or catastrophic insurance plans for emergencies, hospitalizations, surgeries, and specialist care. We provide itemized receipts that some patients submit to Health Savings Accounts (HSAs) or for out-of-network reimbursement. This approach actually saves most patients money while dramatically improving their access to care and quality of service.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
                How much does membership cost?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
                Our membership pricing is transparent and straightforward, with different tiers based on age and family size. Individual adult memberships typically range from $75-150 per month, with discounted rates for children and families. This single monthly fee covers unlimited office visits, same-day appointments, extended consultation time, 24/7 direct access to your physician, basic in-office procedures, and care coordination. There are no copays, no deductibles, and no surprise bills for services included in your membership. We're happy to discuss specific pricing during your consultation and help you understand how DPC often costs less than traditional insurance premiums and copays combined.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
                What services are included in my membership?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
                Your membership includes comprehensive primary care services: unlimited office visits for acute and chronic conditions, annual wellness exams, preventive care and health screenings, chronic disease management, acute illness treatment, minor in-office procedures, telemedicine consultations, basic laboratory testing performed in our office, medication management, care coordination with specialists, and 24/7 direct access to your physician via phone, text, or email. We also provide longer appointment times—typically 30-60 minutes instead of the rushed 10-15 minutes common in traditional practices. Certain services like advanced imaging, specialty labs, and procedures requiring outside facilities are available at transparent, negotiated rates that are often lower than insurance-negotiated prices.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
                How do I become a new patient?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
                Becoming a patient is simple and begins with scheduling an initial consultation where we discuss your health history, current concerns, and wellness goals. You can contact us through our website, by phone, or by visiting our Austin office to learn about membership options and ask any questions. Once you choose the membership plan that fits your needs, we'll schedule your comprehensive first appointment—typically 60-90 minutes with your physician. We'll obtain your medical records from previous providers, establish baseline health metrics, and create a personalized care plan. Most new patients are able to join within a week and immediately gain access to same-day appointments and 24/7 physician communication.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
                What should I expect during my first visit?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
                Your first appointment is a comprehensive 60-90 minute consultation where we take time to truly understand your health. We'll review your complete medical history, current medications, family history, lifestyle factors, and health goals. Your physician will perform a thorough physical examination and discuss any current health concerns or chronic conditions. We'll order appropriate baseline screening tests, review preventive care recommendations, and create a personalized wellness plan tailored to your unique needs. Unlike rushed traditional appointments, you'll have ample time to ask questions and discuss anything on your mind. This extended initial visit establishes the foundation for a long-term partnership focused on keeping you healthy and addressing concerns before they become serious problems.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
                How quickly can I get an appointment?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
                One of the greatest benefits of our Direct Primary Care model is immediate access to your physician. We offer same-day appointments for urgent concerns, and most routine visits can be scheduled within 24-48 hours based on your preference. Because our patient panel is intentionally limited—typically 600 patients per physician instead of the 2,500+ common in traditional practices—we always have availability for our members. You can reach your doctor directly 24/7 via phone, text, or email for medical questions that don't require an in-person visit. No more waiting weeks for an appointment or spending hours in an urgent care waiting room when you suddenly fall ill.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
                Do you offer telemedicine or virtual visits?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
                Yes, telemedicine consultations are included in your membership at no additional cost and are ideal for many follow-up visits, medication refills, lab result discussions, and acute illness consultations. You can connect with your physician via secure video call from your home, office, or anywhere you have internet access. Because we already have an established relationship and comprehensive knowledge of your medical history, virtual visits are often just as effective as in-person appointments for appropriate situations. Your doctor will let you know if an in-person examination is necessary. We also offer direct communication via phone, text, and email 24/7, so you always have multiple ways to reach your physician whenever questions or concerns arise.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
                Can you prescribe medications?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
                Yes, our board-certified physicians can prescribe all necessary medications as part of your comprehensive primary care. We send prescriptions electronically to your pharmacy of choice and help you find the most affordable options, whether through insurance, manufacturer discount programs, or wholesale pricing partnerships. Many members save significantly on medications because we have time to research cost-effective alternatives and aren't restricted by insurance formularies. We also provide medication management services, reviewing all your prescriptions regularly to ensure they're still appropriate, checking for interactions, and eliminating unnecessary medications. Our 24/7 access means you can reach your doctor quickly when medication questions or side effects arise.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
                What if I need a specialist or hospitalization?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
                We provide comprehensive care coordination when you need specialists, advanced imaging, procedures, or hospitalization. Your physician will refer you to trusted specialists in Austin, help you understand what to expect, and communicate directly with them about your care. We review specialist recommendations, help you make informed decisions, and ensure all your providers are working together effectively. If you're hospitalized, we coordinate with hospital physicians and are available to answer your questions throughout the process. After specialist visits or hospitalizations, we integrate all findings into your ongoing care plan. This care coordination is included in your membership and ensures you never feel lost navigating complex healthcare situations.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
                Do you provide lab testing?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
                Yes, we perform many common laboratory tests right in our office at no additional charge to members, including blood glucose, cholesterol panels, urinalysis, rapid strep tests, flu tests, and more. This convenient in-office testing saves you time and provides immediate results during your visit. For more comprehensive lab work that requires outside facilities, we've negotiated wholesale pricing that is often 80-90% less expensive than what insurance companies pay. We'll always discuss costs upfront so there are no surprises, and help you understand which tests are truly necessary for your health. Lab result discussions are included in your membership and can be conducted via telemedicine or in person based on your preference.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
                What happens if I have a medical emergency?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
                For true life-threatening emergencies such as chest pain, difficulty breathing, severe bleeding, loss of consciousness, or stroke symptoms, always call 911 or go directly to the nearest emergency room. Direct Primary Care does not replace emergency services or catastrophic insurance coverage. However, many situations that people think require an ER visit can actually be handled through same-day appointments in our office or via immediate telemedicine consultation with your physician. Your 24/7 access to your doctor means you can quickly determine the appropriate level of care needed. We'll guide you on whether your situation requires emergency care, can wait for a same-day office visit, or can be managed remotely, potentially saving you thousands in unnecessary ER costs.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
                Can I cancel my membership?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
                Your membership operates on a simple month-to-month basis with no long-term contracts or commitments. If you need to cancel, we require 30 days notice, and you're free to discontinue at any time without penalties or cancellation fees. We're confident that once you experience the difference of unhurried appointments, same-day access, and true continuity of care, you'll want to remain a member. However, we understand that circumstances change—whether due to relocation, financial situations, or other reasons. If you do cancel, we'll provide copies of your medical records and help facilitate the transition to another provider to ensure your healthcare continuity isn't disrupted.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
                How is this different from concierge medicine?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
                While Direct Primary Care and concierge medicine share some similarities like enhanced access and longer appointments, there are important differences. Concierge practices typically charge an annual retainer fee on top of billing insurance for each visit, meaning you still deal with copays, deductibles, and insurance paperwork. DPC eliminates insurance from primary care entirely with a simple monthly membership that covers all primary care services. This makes DPC more affordable for most people—often costing less than traditional insurance premiums alone. Both models limit patient panels to provide better access and service, but DPC's insurance-free approach creates true price transparency and allows physicians to focus entirely on patient care rather than insurance requirements and billing complexity.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
                Do you treat children and families?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
                Yes, we welcome patients of all ages and offer discounted family membership rates that make comprehensive primary care affordable for your entire household. Having your whole family see the same physician creates continuity of care and allows us to understand your family's health history, genetic factors, and home environment. We provide well-child visits, school and sports physicals, immunizations, and treatment for common childhood illnesses. Parents especially appreciate our 24/7 access when children fall ill unexpectedly—you can text or call your doctor directly rather than searching for after-hours care or making unnecessary ER visits. Our family-friendly approach means less stress, better preventive care, and one trusted physician who knows everyone in your family.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
                What payment methods do you accept?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
                We accept all major credit cards, debit cards, Health Savings Account (HSA) cards, and Flexible Spending Account (FSA) cards for monthly membership fees. Your membership is billed automatically each month on the date you choose, making budgeting simple and predictable. Many patients use their HSA or FSA funds to pay membership fees, and we provide itemized receipts for your records. We also offer convenient electronic payment options and can adjust billing dates if needed to align with your pay schedule. For any additional services outside your membership—such as specialty lab work or procedures requiring outside facilities—we provide transparent pricing upfront and accept the same payment methods.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justice-between items-center">
                How do I access my medical records?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
                Your medical records are always available to you and remain your property. We maintain secure electronic health records and can provide copies in various formats based on your needs—whether for personal records, specialist referrals, insurance claims, or second opinions. Simply request your records through our office, and we'll prepare them promptly at no charge. We also communicate detailed visit summaries, lab results, and care plans directly to you via secure messaging, so you're always informed about your health status. If you're transferring care to another provider for any reason, we'll coordinate the complete transfer of your medical history to ensure seamless continuity of care.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
                What if I need care while traveling?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
                Your membership includes 24/7 access to your physician even when you're traveling, which is one of the most valued benefits of Direct Primary Care. If you become ill while away from Austin, you can contact your doctor via phone, text, or telemedicine consultation to receive medical advice, prescriptions sent to a local pharmacy, and guidance on whether you need in-person care. Because your physician knows your complete medical history, this remote consultation is far superior to visiting an unfamiliar urgent care or emergency room. For minor issues, we can often manage your care remotely and save you significant time and expense. For more serious situations, we'll help you find appropriate local care and coordinate with those providers to ensure you receive quality treatment.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
                Can you help manage multiple chronic conditions?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
                Yes, comprehensive chronic disease management is one of our core strengths and a perfect fit for the Direct Primary Care model. We provide expert ongoing care for diabetes, hypertension, heart disease, asthma, COPD, thyroid disorders, arthritis, and other long-term conditions. Our extended appointment times allow thorough discussions about your symptoms, medications, lifestyle factors, and treatment goals. Regular monitoring, medication adjustments, and preventive strategies help you avoid complications and maintain the best possible quality of life. Because you can reach your physician 24/7 and schedule same-day visits when issues arise, we catch problems early before they escalate. Many patients with chronic conditions find that DPC dramatically improves their health outcomes while actually reducing their overall healthcare costs through better disease control and fewer emergency interventions.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
                Is Direct Primary Care right for me?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
                Direct Primary Care works exceptionally well for individuals and families who value their time, want deeper relationships with their physician, and are frustrated with traditional healthcare's limitations. It's ideal if you struggle to get timely appointments, feel rushed during visits, can't reach your doctor when questions arise, or are tired of insurance hassles and surprise bills. DPC particularly benefits those with chronic conditions requiring ongoing management, busy professionals who need flexible scheduling, families seeking comprehensive care for all ages, and anyone prioritizing preventive health and wellness. If you want a physician who truly knows you, has time to listen, and is available when you need them, DPC offers a better way. We invite you to schedule a consultation to discuss your specific situation and learn how our approach can improve your healthcare experience.
              </div>
            </details>

          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl font-light mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            We're here to help you understand how Direct Primary Care can transform your healthcare experience
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  )
}