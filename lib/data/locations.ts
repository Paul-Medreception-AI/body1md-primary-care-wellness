// Areas Body1MD serves from its one office at 7203 4th St NW, Los Ranchos de Albuquerque.
// Replaces the four Austin-area pages the autobuild generated from an empty scrape.
// Keep this factual: no drive times, no neighbourhood statistics, nothing the practice has not said.
export type AreaPage = {
  slug: string
  name: string
  short: string
  county: string
  headline: string
  intro: string[]
  gettingHere: string
  image: { src: string; alt: string }
  metaTitle: string
  description: string
}

export const AREAS: AreaPage[] = [
  {
    slug: 'los-ranchos-de-albuquerque-nm',
    name: 'Los Ranchos de Albuquerque, NM',
    short: 'Los Ranchos de Albuquerque',
    county: 'Bernalillo County',
    headline: 'Direct primary care in Los Ranchos de Albuquerque',
    intro: [
      'Body1MD is right here in the village of Los Ranchos de Albuquerque, on 4th Street NW in Albuquerque\'s North Valley. For neighbors in Los Ranchos, your physician is minutes from home.',
      'As a member, you get visits designed to last up to an hour, direct access to Dr. Andrew Hemmen, and same- or next-day appointments in most cases. There is no insurance billing and no annual concierge retainer, just a simple month-to-month membership.',
    ],
    gettingHere: 'The office is at 7203 4th St NW, Los Ranchos de Albuquerque, NM 87107, in the North Valley.',
    image: { src: '/images/locations/los-ranchos-de-albuquerque-nm.jpg', alt: 'Hot air balloons rising over a field near Albuquerque at sunrise' },
    metaTitle: 'Primary Care in Los Ranchos de Albuquerque, NM | Body1MD',
    description: 'Direct primary care in Los Ranchos de Albuquerque from Dr. Andrew Hemmen, a board-certified internal medicine physician. Membership from $100/month, month-to-month.',
  },
  {
    slug: 'albuquerque-nm',
    name: 'Albuquerque, NM',
    short: 'Albuquerque',
    county: 'Bernalillo County',
    headline: 'A direct primary care physician for Albuquerque',
    intro: [
      'Patients from across Albuquerque choose Body1MD for a different kind of primary care relationship: longer visits, direct access to their physician, and a proactive plan designed to keep preventable problems from becoming serious ones.',
      'Dr. Andrew Hemmen has served New Mexico since 2008, including more than 20 years caring for hospitalized patients. At Body1MD he brings that experience to the front end of health, from preventive screening and chronic disease management to weight, nutrition, and performance.',
    ],
    gettingHere: 'Body1MD is in the North Valley at 7203 4th St NW, Los Ranchos de Albuquerque, NM 87107.',
    image: { src: '/images/locations/albuquerque-nm.jpg', alt: 'Colorful hot air balloons in the sky over Albuquerque at dawn' },
    metaTitle: 'Direct Primary Care Doctor in Albuquerque, NM | Body1MD',
    description: 'Looking for a primary care doctor in Albuquerque? Body1MD offers direct primary care with Dr. Andrew Hemmen: visits up to an hour, direct access, $100 to $150/month.',
  },
  {
    slug: 'corrales-nm',
    name: 'Corrales, NM',
    short: 'Corrales',
    county: 'Sandoval County',
    headline: 'Direct primary care for Corrales',
    intro: [
      'For families in Corrales, Body1MD is just across the Rio Grande in the North Valley. Members get unhurried visits, direct access to Dr. Andrew Hemmen, and same- or next-day appointments in most cases.',
      'Body1MD operates outside traditional insurance and deliberately limits the size of the practice, so your care stays personal and ongoing.',
    ],
    gettingHere: 'From Corrales, cross the Rio Grande into the North Valley. The office is at 7203 4th St NW, Los Ranchos de Albuquerque, NM 87107.',
    image: { src: '/images/locations/corrales-nm.jpg', alt: 'Cottonwoods and driftwood along the Rio Grande near Corrales at sunset' },
    metaTitle: 'Primary Care Near Corrales, NM | Body1MD Direct Primary Care',
    description: 'Direct primary care near Corrales, NM. Dr. Andrew Hemmen, board-certified internal medicine, in Los Ranchos de Albuquerque. Month-to-month membership.',
  },
  {
    slug: 'rio-rancho-nm',
    name: 'Rio Rancho, NM',
    short: 'Rio Rancho',
    county: 'Sandoval County',
    headline: 'Direct primary care for Rio Rancho',
    intro: [
      'Rio Rancho patients come to Body1MD for a physician who knows them, answers when they need him, and has time for the whole conversation. Visits are designed to last up to an hour.',
      'Whether you are managing a chronic condition, focused on prevention, or working toward better energy and performance, Dr. Hemmen builds a personalized plan with you and stays involved.',
    ],
    gettingHere: 'Body1MD is a short drive southeast of Rio Rancho, across the river in the North Valley, at 7203 4th St NW, Los Ranchos de Albuquerque, NM 87107.',
    image: { src: '/images/locations/rio-rancho-nm.jpg', alt: 'High desert mesas in New Mexico under a wide sky' },
    metaTitle: 'Primary Care Doctor Near Rio Rancho, NM | Body1MD',
    description: 'Direct primary care near Rio Rancho, NM with Dr. Andrew Hemmen. Visits up to an hour, direct access, same- or next-day appointments in most cases.',
  },
]
