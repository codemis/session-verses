// Regenerates the embedded verse list in hooks/register.tsx from
// data/top-bible-verses.json. Run after editing the JSON: node scripts/build.mjs
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const root = new URL('../', import.meta.url)
const { verses } = JSON.parse(readFileSync(new URL('data/top-bible-verses.json', root), 'utf8'))
const pairs = verses.map(v => [v.reference, v.text])

const file = fileURLToPath(new URL('hooks/register.tsx', root))
const source = readFileSync(file, 'utf8')
const block = `// <verses>\nconst VERSES: [string, string][] = ${JSON.stringify(pairs, null, 2)}\n// </verses>`
const next = source.replace(/\/\/ <verses>[\s\S]*?\/\/ <\/verses>/, () => block)

if (next === source && !source.includes('// <verses>')) {
  throw new Error('verse markers not found in hooks/register.tsx')
}
writeFileSync(file, next)
console.log(`Embedded ${pairs.length} verses.`)
