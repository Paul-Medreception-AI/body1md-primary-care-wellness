import fs from 'fs'
import path from 'path'

export type PostCard = { slug: string; title: string; description: string; image: string | null }

// Every post is a static page at app/blog/<slug>/page.tsx with its own `metadata` export. Read
// the list from there at build time, so the index can never link to a post that does not exist
// (the generated index linked to eight that did not) or miss one that does.
function field(src: string, name: string): string {
  const m = src.match(new RegExp(`\\b${name}:\\s*(['"\`])((?:\\\\.|(?!\\1).)*)\\1`))
  return m ? m[2].replace(/\\(['"`])/g, '$1') : ''
}

export function getPosts(): PostCard[] {
  const dir = path.join(process.cwd(), 'app', 'blog')
  return fs.readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && fs.existsSync(path.join(dir, d.name, 'page.tsx')))
    .map((d) => {
      const src = fs.readFileSync(path.join(dir, d.name, 'page.tsx'), 'utf8')
      const title = field(src, 'title').split(' | ')[0].trim() || d.name.replace(/-/g, ' ')
      const img = `/images/blog/${d.name}.jpg`
      return {
        slug: d.name,
        title,
        description: field(src, 'description'),
        image: fs.existsSync(path.join(process.cwd(), 'public', img)) ? img : null,
      }
    })
    .sort((a, b) => a.title.localeCompare(b.title))
}
