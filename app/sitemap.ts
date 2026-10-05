import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import { SERVICES } from '@/lib/data/services'
import { CONDITIONS } from '@/lib/data/conditions'
import { AREAS } from '@/lib/data/locations'

// Generated from the data and the app directory, never hand-listed: a hand-written list goes stale
// the first time a page is added or removed (this one still listed four Texas pages).
function routeDirs(hub: string): string[] {
  const dir = path.join(process.cwd(), 'app', hub)
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith('[') && fs.existsSync(path.join(dir, d.name, 'page.tsx')))
    .map((d) => d.name)
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://body1md.com'
  const now = new Date()
  const page = (p: string, priority: number, changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly') =>
    ({ url: `${base}${p}`, lastModified: now, priority, changeFrequency })

  return [
    page('', 1.0, 'weekly'),
    page('/services', 0.9, 'weekly'),
    page('/conditions', 0.9, 'weekly'),
    page('/new-patients', 0.9, 'monthly'),
    page('/about', 0.8, 'monthly'),
    page('/team', 0.8, 'monthly'),
    page('/office', 0.7, 'monthly'),
    page('/contact', 0.8, 'monthly'),
    page('/locations', 0.7, 'monthly'),
    page('/faq', 0.7, 'monthly'),
    page('/insurance', 0.7, 'monthly'),
    page('/telehealth', 0.6, 'monthly'),
    page('/reviews', 0.6, 'monthly'),
    page('/blog', 0.7, 'weekly'),
    page('/privacy-sms', 0.2, 'yearly'),
    page('/terms-sms', 0.2, 'yearly'),
    ...SERVICES.map((s) => page(`/services/${s.slug}`, 0.85, 'monthly')),
    ...CONDITIONS.map((c) => page(`/conditions/${c.slug}`, 0.8, 'monthly')),
    ...AREAS.map((a) => page(`/locations/${a.slug}`, 0.75, 'monthly')),
    ...routeDirs('compare').map((s) => page(`/compare/${s}`, 0.7, 'monthly')),
    ...routeDirs('blog').map((s) => page(`/blog/${s}`, 0.6, 'monthly')),
  ]
}
