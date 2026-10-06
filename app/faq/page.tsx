import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Body1MD Primary Care & Wellness',
  description: 'Answers to common questions about Body1MD direct primary care in Los Ranchos de Albuquerque, NM: membership pricing, appointments, insurance, and direct access to Dr. Hemmen.',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'Frequently Asked Questions | Body1MD Primary Care & Wellness',
    description: 'Answers to common questions about Body1MD direct primary care in Los Ranchos de Albuquerque, NM: membership pricing, appointments, insurance, and direct access to Dr. Hemmen.',
    url: 'https://body1md.com/faq',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frequently Asked Questions | Body1MD Primary Care & Wellness',
    description: 'Answers to common questions about Body1MD direct primary care in Los Ranchos de Albuquerque, NM: membership pricing, appointments, insurance, and direct access to Dr. Hemmen.',
    images: ['/og-image.png'],
  },
}

// Every answer here must match the practice's verified facts (single physician, real prices,
// visits up to an hour, same- or next-day in most cases, no insurance billing).
const FAQS: { q: string; a: string }[] = [
  {
    q: 'What is Direct Primary Care (DPC)?',
    a: `Direct Primary Care is a membership model: you pay a monthly fee directly to your physician's practice instead of having your primary care billed through insurance. Without insurance billing in the middle, a practice can keep a smaller patient panel, offer longer visits, and give members direct access to their doctor. At Body1MD that means visits designed to last up to an hour, same- or next-day appointments in most cases, and direct access to Dr. Hemmen by phone and text. Many people keep insurance alongside a DPC membership for hospital, specialist, and emergency care.`,
  },
  {
    q: 'Do you accept insurance?',
    a: `Body1MD does not bill insurance. Members pay the practice directly through a monthly membership, which keeps the focus on patients rather than insurance paperwork. As general guidance, most people should still keep health insurance, or a high-deductible plan, for hospital care, specialists, emergencies, and other care outside the office. If you have questions about how a membership fits with your coverage, call ${SITE.phone}.`,
  },
  {
    q: 'How much does membership cost?',
    a: `Membership is $100 per month if you are under 50 and $150 per month if you are 50 or older. It is month-to-month, with no annual contract and no annual concierge retainer. Body1MD's Founding 50 offer is open to those who join by December 31, 2026, or before all 50 founder memberships are taken, and founding-member pricing is protected for as long as your membership stays active. Optional Wellness and Performance services are separately contracted and priced.`,
  },
  {
    q: 'What services are included in my membership?',
    a: `Membership is your primary care relationship with Dr. Hemmen, a board-certified internal medicine physician. That covers primary care for your health at every stage, from preventive screenings to managing complex conditions, with visits designed to last up to an hour and direct access to Dr. Hemmen between visits. Optional Wellness and Performance services, such as hormone optimization or peptide therapies where warranted, are separately contracted and priced. For specifics, such as how outside labs and imaging are handled, call the office at ${SITE.phone}.`,
  },
  {
    q: 'How do I become a new patient?',
    a: `Call the office at ${SITE.phone} or send a message through the contact page. You are welcome to ask questions about membership before you join. You can request your first visit online at body1md.com/book, with no account or login. Once you join, your first visit is designed to last up to an hour, with time to review your health history, your current concerns, and your goals.`,
  },
  {
    q: 'What should I expect during my first visit?',
    a: `Your first visit is designed to last up to an hour. Dr. Hemmen begins with a comprehensive, head-to-toe look at your health so he understands your history and your goals. From there, he makes sure your core primary care is up to date, including preventive screenings, cholesterol, and blood pressure, and builds a personalized plan with you. The exam rooms have large-format displays where you and Dr. Andy can review imaging and results together, and there is time to ask every question on your mind.`,
  },
  {
    q: 'How quickly can I get an appointment?',
    a: `In most cases, the same or next day. Body1MD keeps a deliberately limited patient panel, so when you need to be seen you should not have to wait weeks. Office hours are Monday to Friday, 8am to 5pm, with Saturday by appointment. Between visits, members have direct access to Dr. Hemmen by phone and text, and he is available 24/7 most of the year.`,
  },
  {
    q: 'Do you offer telemedicine or virtual visits?',
    a: `Members have direct access to Dr. Hemmen by phone and text between visits. When something comes up, reach out, and he will advise whether it can be handled over the phone, whether a virtual check-in is appropriate, or whether you should come in. When you need to be seen, same- or next-day appointments are available in most cases.`,
  },
  {
    q: 'Can you prescribe medications?',
    a: `Yes. Dr. Hemmen prescribes medications as part of your primary care and sends prescriptions to the pharmacy you choose. He also reviews your full medication list with you, checking that each medication is still appropriate and watching for interactions. If a medication question or side effect comes up between visits, you can reach him directly by phone or text.`,
  },
  {
    q: 'What if I need a specialist or hospitalization?',
    a: `Dr. Hemmen helps guide your care when you need a specialist, imaging, or a hospital stay. He can refer you to specialists in the Albuquerque area, help you understand what to expect, and review their recommendations with you so your care fits together. He spent more than 20 years caring for hospitalized patients, including serving as Chief Hospitalist during the opening of Presbyterian Rust Medical Center, so he knows hospital care from the inside. Specialists and hospitals bill for their own services, which is one reason most members keep insurance.`,
  },
  {
    q: 'Do you provide lab testing?',
    a: `Dr. Hemmen orders the lab work and screening tests your care calls for, from preventive screening to monitoring chronic conditions, and reviews the results with you, often on the large-format displays in the exam room. For how a specific test is collected and what it costs, call the office at ${SITE.phone}.`,
  },
  {
    q: 'What happens if I have a medical emergency?',
    a: `For a life-threatening emergency, such as chest pain, difficulty breathing, severe bleeding, loss of consciousness, or signs of a stroke, call 911 or go to the nearest emergency room. Direct Primary Care does not replace emergency services or insurance coverage for emergency and hospital care. For concerns that are not emergencies, you can reach Dr. Hemmen directly by phone or text, and he can help you decide whether you need emergency care, a same- or next-day office visit, or advice by phone.`,
  },
  {
    q: 'Can I cancel my membership?',
    a: `Membership is month-to-month, with no annual contract. If your circumstances change, call the office to discuss ending your membership. Keep in mind that Founding 50 pricing is protected only as long as your membership stays active. If you move your care to another physician, Body1MD can send your medical records so your care continues without gaps.`,
  },
  {
    q: 'How is this different from concierge medicine?',
    a: `Concierge practices typically charge a large annual retainer, often while still billing insurance for visits. Body1MD is a Direct Primary Care membership instead: $100 per month under 50 or $150 per month at 50 and older, month-to-month, with no annual concierge retainer and no insurance billing. You get concierge-level access, including longer visits, same- or next-day appointments in most cases, and direct access to your physician, through a straightforward monthly membership.`,
  },
  {
    q: 'Do you treat children and families?',
    a: `Dr. Hemmen is board-certified in internal medicine, the specialty focused on the care of adults, and Body1MD's membership pricing is set by adult age: $100 per month under 50 and $150 per month at 50 and older. If you have a question about care for another member of your household, call the office at ${SITE.phone}.`,
  },
  {
    q: 'What payment methods do you accept?',
    a: `Members pay Body1MD directly each month, and the practice does not bill insurance. For accepted payment methods, call the office at ${SITE.phone}. Whether HSA or FSA funds can be used depends on your plan, so check with your plan administrator as well.`,
  },
  {
    q: 'How do I access my medical records?',
    a: `Under federal law you have the right to a copy of your medical records. Ask the office and your records will be prepared for you. If you are moving your care to another physician, Body1MD can send your records so your care continues without gaps. A secure patient portal is coming soon.`,
  },
  {
    q: 'What if I need care while traveling?',
    a: `Your direct access to Dr. Hemmen by phone and text does not end at the city limits. If you get sick while away from Albuquerque, reach out, and he can give you advice and help you decide whether you need to be seen where you are. Because he knows your history, that conversation starts from what he already knows about you. For anything serious or urgent, use local emergency or urgent care, then let him know so he can help with follow-up when you are home.`,
  },
  {
    q: 'Can you help manage multiple chronic conditions?',
    a: `Yes. Chronic disease management is one of Body1MD's core services, and internal medicine is well suited to patients managing more than one condition. Dr. Hemmen cares for conditions such as diabetes, high blood pressure, high cholesterol, heart disease, asthma, and arthritis, drawing on more than two decades of complex-care experience. Visits designed to last up to an hour leave time to go through your symptoms, medications, and goals, and direct access between visits helps catch problems early.`,
  },
  {
    q: 'Is Direct Primary Care right for me?',
    a: `Direct Primary Care works well for people who want more time with their physician, want to be seen quickly when something comes up, and want a doctor they can reach directly. It can be a good fit if you manage one or more chronic conditions, are focused on prevention and long-term health, or want help with goals like weight, fitness, and nutrition. Because Body1MD does not bill insurance, most members keep insurance for hospital, specialist, and emergency care. The best way to find out is a conversation: call ${SITE.phone} or reach out through the contact page.`,
  },
]

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
            Everything you need to know about Body1MD and direct primary care
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] pt-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/caring-hands.jpg"
              alt="A clinician gently holding a patient's hands in reassurance"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-3">
            {FAQS.map((item) => (
              <details key={item.q} className="border border-[var(--color-border)] rounded-xl bg-white group">
                <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
                  {item.q}
                  <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl font-light mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Call {SITE.phone} or send a message, and we will help you decide whether Direct Primary Care is right for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Contact Us Today
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-block bg-white hover:bg-white/90 text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
