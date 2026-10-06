// npm test  (node --test). NO NETWORK: fetch is stubbed and refuses any URL but the test one.
import { test, beforeEach } from 'node:test'
import assert from 'node:assert/strict'
import { scheduleDays } from '@/lib/booking-schedule'

const AVAIL_URL = 'https://studio.invalid/api/v1/web/availability'
process.env.STUDIO_INGEST_TOKEN = 'test-token'

type Call = { url: string; headers: Record<string, string>; body: string }
let calls: Call[] = []
let replies: Array<() => Response | Promise<Response>> = []
globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
  const url = String(input)
  if (url !== AVAIL_URL) throw new Error(`test made a real network call to ${url}`)
  calls.push({ url, headers: Object.fromEntries(new Headers(init?.headers).entries()), body: String(init?.body) })
  const next = replies.shift()
  if (!next) throw new Error('no scripted Studio reply left')
  return next()
}) as typeof fetch
const reply = (status: number, body: unknown) => () =>
  new Response(typeof body === 'string' ? body : JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } })
for (const m of ['log', 'info', 'warn', 'error'] as const) console[m] = () => {}

const { GET } = await import('@/app/api/book/slots/route')
const get = async (q = '?patient=new') => {
  const res = await GET(new Request(`http://localhost/api/book/slots${q}`))
  assert.equal(res.status, 200)
  assert.equal(res.headers.get('cache-control'), 'no-store')
  return res.json()
}

// Real future Albuquerque wall clocks to hand back as "Studio's" openings.
const future = scheduleDays(new Date())
const A = future[1].slots[0].start
const B = future[1].slots[3].start
const C = future[2].slots[5].start

beforeEach(() => {
  calls = []
  replies = []
  process.env.STUDIO_AVAILABILITY_URL = AVAIL_URL
})

test('no STUDIO_AVAILABILITY_URL -> the schedule, 14 days, no network', async () => {
  delete process.env.STUDIO_AVAILABILITY_URL
  const out = await get()
  assert.equal(out.source, 'schedule')
  assert.equal(out.days.length, 14)
  assert.equal(out.days[0].slots.length, 9)
  assert.equal(calls.length, 0)
})

test('connected Studio -> its slots, grouped by day, with the request it expects', async () => {
  replies.push(reply(200, { connected: true, slots: [{ start: C, minutes: 30 }, { start: A, minutes: 60 }, { start: B }, { start: A, minutes: 60 }] }))
  const out = await get('?patient=existing')
  assert.equal(out.source, 'studio')
  assert.deepEqual(out.days.map((d: { date: string }) => d.date), [A.slice(0, 10), C.slice(0, 10)])
  assert.deepEqual(out.days[0].slots.map((s: { start: string }) => s.start), [A, B]) // sorted, deduped
  assert.equal(out.days[0].slots[0].label, '8:00 AM')
  assert.equal(out.days[0].slots[1].minutes, 60) // missing minutes -> 60
  assert.equal(out.days[1].slots[0].minutes, 30)
  assert.equal(calls[0].headers['x-studio-token'], 'test-token')
  assert.deepEqual(JSON.parse(calls[0].body), { days: 14, new_patient: false })
})

test('new patients are asked for as new_patient: true', async () => {
  replies.push(reply(200, { connected: true, slots: [{ start: A, minutes: 60 }] }))
  await get('?patient=new')
  assert.deepEqual(JSON.parse(calls[0].body), { days: 14, new_patient: true })
})

test('connected with no openings -> studio, no days (the page offers the phone)', async () => {
  replies.push(reply(200, { connected: true, slots: [] }))
  const out = await get()
  assert.deepEqual(out, { source: 'studio', days: [] })
})

for (const [what, r] of [
  ['not connected', reply(200, { connected: false, slots: [{ start: A, minutes: 60 }] })],
  ['connected as a string', reply(200, { connected: 'true', slots: [{ start: A, minutes: 60 }] })],
  ['slots not an array', reply(200, { connected: true, slots: 'soon' })],
  ['every slot in UTC (no practice offset)', reply(200, { connected: true, slots: [{ start: new Date(A).toISOString(), minutes: 60 }] })],
  ['not JSON', reply(200, '<html>')],
  ['a 403', reply(403, { detail: 'not authorised' })],
  ['a 502', reply(502, { detail: 'x' })],
  ['a network failure', () => { throw new TypeError('fetch failed') }],
] as const) {
  test(`Studio ${what} -> the schedule`, async () => {
    replies.push(r as () => Response)
    const out = await get()
    assert.equal(out.source, 'schedule')
    assert.equal(out.days.length, 14)
    assert.equal(calls.length, 1)
  })
}

test('past slots from Studio are dropped', async () => {
  replies.push(reply(200, { connected: true, slots: [{ start: '2026-01-05T08:00:00-07:00', minutes: 60 }, { start: A, minutes: 60 }] }))
  const out = await get()
  assert.equal(out.source, 'studio')
  assert.deepEqual(out.days.flatMap((d: { slots: { start: string }[] }) => d.slots.map((s) => s.start)), [A])
})
