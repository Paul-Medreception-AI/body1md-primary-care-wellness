import { statSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const CANDIDATES = ['', '.ts', '.tsx', '.mjs', '.js', '/index.ts']

const isFile = (p) => {
  try {
    return statSync(p).isFile()
  } catch {
    return false
  }
}

export async function resolve(specifier, context, next) {
  let base = null
  if (specifier.startsWith('@/')) base = path.join(ROOT, specifier.slice(2))
  else if (/^\.\.?\//.test(specifier) && context.parentURL?.startsWith('file:') && !path.extname(specifier)) {
    base = path.resolve(path.dirname(fileURLToPath(context.parentURL)), specifier)
  }
  if (base) {
    for (const ext of CANDIDATES) {
      if (isFile(base + ext)) return next(pathToFileURL(base + ext).href, context)
    }
  }
  return next(specifier, context)
}
