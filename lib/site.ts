import { SERVICES } from '@/lib/data/services'
import { CONDITIONS } from '@/lib/data/conditions'

// The practice's verified details. Source: body1md.com (contact page, footer) and the
// practice's confirmed facts in Studio. One place, so the header, footer, contact page and
// JSON-LD cannot drift apart.
export const SITE = {
  name: 'Body1MD',
  fullName: 'Body1MD Primary Care & Wellness',
  url: 'https://body1md.com',
  physician: 'Dr. Andrew Hemmen, MD',
  phone: '(505) 645-5451',
  phoneHref: 'tel:+15056455451',
  fax: '(505) 645-8530',
  email: 'andy@body1md.com',
  street: '7203 4th St NW',
  city: 'Los Ranchos de Albuquerque',
  region: 'NM',
  postal: '87107',
  // The practice's Google Business Profile (place 0x872273851a83fb09:0x6e725f4c6c3eb848, CID below).
  mapsHref: 'https://www.google.com/maps/place/Body1MD/@35.1652667,-106.6364411,17z/data=!4m6!3m5!1s0x872273851a83fb09:0x6e725f4c6c3eb848!8m2!3d35.1652667!4d-106.6364411!16s%2Fg%2F11zxf1s1_d',
  mapsEmbed: 'https://www.google.com/maps?q=Body1MD,+7203+4th+St+NW,+Los+Ranchos+de+Albuquerque,+NM+87107&output=embed',
  // Opens Google's "write a review" dialog for the profile (the ,3 suffix on lrd). No reviews exist
  // yet (new office), so the site asks for the first ones and shows no rating.
  reviewHref: 'https://www.google.com/search?hl=en-US&gl=us&q=Body1MD,+7203+4th+St+NW,+Los+Ranchos+de+Albuquerque,+NM+87107&ludocid=7958528273355290696#lrd=0x872273851a83fb09:0x6e725f4c6c3eb848,3',
  hours: [
    { days: 'Monday to Friday', time: '8am to 5pm' },
    { days: 'Saturday', time: 'By appointment' },
    { days: 'Sunday', time: 'Closed' },
  ],
}

export type NavItem = { href: string; label: string }
export type NavGroup = { href: string; label: string; items?: NavItem[]; footer?: NavItem }

// Conditions are many; the menu shows the common ones and the hub link carries the rest.
const FEATURED_CONDITIONS = [
  'hypertension-high-blood-pressure', 'type-2-diabetes', 'high-cholesterol',
  'obesity-and-weight-management', 'thyroid-disorders', 'anxiety-and-depression',
  'arthritis-and-joint-pain', 'insomnia-and-sleep-disorders',
]

export const NAV: NavGroup[] = [
  {
    href: '/services', label: 'Services',
    items: SERVICES.map((s) => ({ href: `/services/${s.slug}`, label: s.title })),
    footer: { href: '/services', label: 'All services' },
  },
  {
    href: '/conditions', label: 'Conditions',
    items: FEATURED_CONDITIONS
      .map((slug) => CONDITIONS.find((c) => c.slug === slug))
      .filter(Boolean)
      .map((c) => ({ href: `/conditions/${c!.slug}`, label: c!.title })),
    footer: { href: '/conditions', label: 'All conditions we treat' },
  },
  {
    href: '/about', label: 'About',
    items: [
      { href: '/team', label: 'Dr. Andrew Hemmen' },
      { href: '/office', label: 'Our Office' },
      { href: '/reviews', label: 'Patient Reviews' },
      { href: '/locations', label: 'Areas We Serve' },
    ],
  },
  {
    href: '/new-patients', label: 'Membership',
    items: [
      { href: '/new-patients', label: 'Membership & Pricing' },
      { href: '/insurance', label: 'Insurance & Payment' },
      { href: '/telehealth', label: 'Access Between Visits' },
      { href: '/faq', label: 'FAQ' },
    ],
  },
  {
    href: '/blog', label: 'Resources',
    items: [
      { href: '/blog', label: 'Health Articles' },
      { href: '/compare/direct-primary-care-vs-traditional-insurance', label: 'DPC vs. Traditional Insurance' },
      { href: '/compare/concierge-medicine-vs-direct-primary-care', label: 'Concierge vs. Direct Primary Care' },
      { href: '/compare/urgent-care-vs-primary-care', label: 'Urgent Care vs. Primary Care' },
      { href: '/compare/annual-physical-vs-sick-visits', label: 'Annual Physical vs. Sick Visits' },
      { href: '/compare/telemedicine-vs-in-person-visits', label: 'Telemedicine vs. In-Person' },
    ],
  },
  { href: '/contact', label: 'Contact' },
]
