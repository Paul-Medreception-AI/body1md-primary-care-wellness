// Lets `node --test` run the TypeScript sources directly: resolves the `@/` alias from tsconfig
// and extensionless relative imports to their .ts files. Node itself strips the types
// (--experimental-transform-types, Node 22.7+). No bundler, no new dependency.
import { register } from 'node:module'

register('./alias-hooks.mjs', import.meta.url)
