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
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=7203+4th+St+NW,+Los+Ranchos+de+Albuquerque,+NM+87107',
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
