// npm test  (node --test). NO NETWORK: fetch is stubbed and refuses any URL but the test one,
// and that one is on .invalid, which never resolves even if the stub were bypassed.
import { test, beforeEach } from 'node:test'
import assert from 'node:assert/strict'
import { scheduleDays } from '@/lib/booking-schedule'

const TEST_URL = 'https://studio.invalid/api/v1/web/submission'
process.env.STUDIO_INGEST_URL = TEST_URL
process.env.STUDIO_INGEST_TOKEN = 'test-token'
delete process.env.BODY1MD_EHR_VISIT_TYPE_NEW
delete process.env.BODY1MD_EHR_VISIT_TYPE_EXISTING

// ── fetch stub ───────────────────────────────────────────────────────────────────────────
type Call = { url: string; headers: Record<string, string>; body: string }
let calls: Call[] = []
let replies: Array<() => Response | Promise<Response>> = []
const studio = (status: number, body: unknown) => () =>
  new Response(typeof body === 'string' ? body : JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } })
const timeout = () => () => {
  throw new DOMException('The operation was aborted due to timeout', 'TimeoutError')
}

globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
  const url = String(input)
  if (url !== TEST_URL) throw new Error(`test made a real network call to ${url}`)
  calls.push({ url, headers: Object.fromEntries(new Headers(init?.headers).entries()), body: String(init?.body) })
  const next = replies.shift()
  if (!next) throw new Error('no scripted Studio reply left')
  return next()
}) as typeof fetch

// ── console capture: every line the route logs, through every console method ──────────────
const logs: string[] = []
for (const m of ['log', 'info', 'warn', 'error', 'debug'] as const) {
  console[m] = (...args: unknown[]) => {
    logs.push(args.map((a) => (typeof a === 'string' ? a : JSON.stringify(a))).join(' '))
  }
}

const { POST } = await import('@/app/api/book/route')

// ── a patient, with values distinctive enough to find in a log ──────────────────────────
const slot = scheduleDays(new Date())[1].slots[2]
const PATIENT = {
  dedupeKey: 'bk_1759700000000_a1b2c3d4e5f6',
  patientType: 'new',
  reasons: ['diabetes', 'blood_pressure', 'other'],
  other: 'left knee clicking on stairs',
  name: 'Zebediah Quartermaine',
  dob: '1971-03-09',
  phone: '(505) 555-0142',
  email: 'zeb.q@example.com',
  start: slot.start,
  minutes: 60,
  slotSource: 'schedule',
  hp_leave_blank: '',
}
const PII = ['Zebediah', 'Quartermaine', '5550142', '555-0142', '1971-03-09', 'knee clicking', 'zeb.q@example.com']

const post = (body: unknown, raw = false) =>
  POST(new Request('http://localhost/api/book', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: raw ? (body as string) : JSON.stringify(body),
  }))
const sent = (i = 0) => JSON.parse(calls[i].body)

beforeEach(() => {
  calls = []
  replies = []
  delete process.env.BODY1MD_EHR_VISIT_TYPE_NEW
  delete process.env.BODY1MD_EHR_VISIT_TYPE_EXISTING
  process.env.STUDIO_INGEST_TOKEN = 'test-token'
})

// ── the two posts ────────────────────────────────────────────────────────────────────────
test('details: one post to Studio, exactly the fields Studio reads', async () => {
  replies.push(studio(200, { ok: true }))
  const res = await post({ ...PATIENT, stage: 'details' })
  assert.equal(res.status, 200)
  assert.deepEqual(await res.json(), { ok: true, stage: 'details' })
  assert.equal(calls.length, 1)
  assert.equal(calls[0].headers['x-studio-token'], 'test-token')
  assert.equal(calls[0].headers['content-type'], 'application/json')
  const when = slot.start.slice(0, 10)
  const short = new Date(`${when}T12:00:00Z`).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', timeZone: 'UTC' })
  assert.deepEqual(sent(), {
    dedupe_key: 'bk_1759700000000_a1b2c3d4e5f6',
    stage: 'details',
    name: 'Zebediah Quartermaine',
    phone: '+15055550142',
    email: 'zeb.q@example.com',
    date_of_birth: '1971-03-09',
    patient_type: 'New patient',
    treatment: 'New patient visit',
    reason_for_visit: 'Diabetes; High blood pressure; Other: left knee clicking on stairs',
    requested_start: slot.start,
    duration_min: 60,
    ehr: 'Hint',
    message: `Booking in progress on the website (new patient, wants to become a member). Reason for visit: Diabetes; High blood pressure; Other: left knee clicking on stairs. Asked for ${short} at 10:00 AM Mountain Time. A booking request follows if they finish. The time was picked from office hours on the website and has not been checked against the calendar.`,
    source: 'body1md.com/book/details',
    studio_source: 'web_booking',
  })
  assert.ok(!('book' in sent()), 'details must never ask Studio to book')
})

test('booked: book: true, same dedupe key, NO treatment_id while the EHR ids are unset', async () => {
  replies.push(studio(200, { ok: true, booking: { status: 'failed' } }))
  const res = await post({ ...PATIENT, stage: 'booked' })
  assert.equal(res.status, 200)
  assert.deepEqual(await res.json(), { ok: true, stage: 'booked', outcome: 'request' })
  const b = sent()
  assert.equal(b.book, true) // the JSON literal: Studio checks `is True`
  assert.equal(b.stage, 'booked')
  assert.equal(b.dedupe_key, PATIENT.dedupeKey)
  assert.equal(b.studio_source, 'web_booking')
  assert.ok(!('treatment_id' in b))
  assert.equal(b.source, 'body1md.com/book/booked')
  assert.match(b.message, /^Booking request from the website \(new patient, wants to become a member\)\. Reason for visit: /)
})

test('booked: treatment_id comes from the env var for the patient type, when set', async () => {
  process.env.BODY1MD_EHR_VISIT_TYPE_NEW = '123'
  process.env.BODY1MD_EHR_VISIT_TYPE_EXISTING = '456'
  replies.push(studio(200, { ok: true, booking: { status: 'booked' } }), studio(200, { ok: true, booking: { status: 'booked' } }))
  await post({ ...PATIENT, stage: 'booked' })
  await post({ ...PATIENT, stage: 'booked', patientType: 'existing' })
  assert.equal(sent(0).treatment_id, '123')
  assert.equal(sent(1).treatment_id, '456')
  assert.equal(sent(1).patient_type, 'Existing patient')
  assert.equal(sent(1).treatment, 'Member visit')
})

// ── what each Studio outcome becomes ──────────────────────────────────────────────────────
for (const [status, outcome] of [['booked', 'booked'], ['failed', 'request'], ['not_in_ehr', 'request'], ['needs_desk', 'request'], ['something_new', 'request']] as const) {
  test(`Studio "${status}" -> outcome ${outcome}`, async () => {
    replies.push(studio(200, { ok: true, booking: { status } }))
    const res = await post({ ...PATIENT, stage: 'booked' })
    assert.equal(res.status, 200)
    assert.deepEqual(await res.json(), { ok: true, stage: 'booked', outcome })
  })
}

test('Studio with no booking outcome at all -> request, never booked', async () => {
  replies.push(studio(200, { ok: true }))
  const res = await post({ ...PATIENT, stage: 'booked' })
  assert.deepEqual(await res.json(), { ok: true, stage: 'booked', outcome: 'request' })
})

test('Studio "slot_taken" -> 409 slot_taken', async () => {
  replies.push(studio(200, { ok: true, booking: { status: 'slot_taken' } }))
  const res = await post({ ...PATIENT, stage: 'booked' })
  assert.equal(res.status, 409)
  const out = await res.json()
  assert.equal(out.error, 'slot_taken')
  assert.equal(out.ok, false)
})

test('Studio "already_booked" -> 409 with the time they hold, on the practice clock', async () => {
  replies.push(studio(200, { ok: true, booking: { status: 'already_booked', starts_at: '2026-10-20T15:00:00+00:00' } }))
  const res = await post({ ...PATIENT, stage: 'booked' })
  assert.equal(res.status, 409)
  const out = await res.json()
  assert.equal(out.error, 'already_booked')
  assert.equal(out.heldStart, '2026-10-20T15:00:00+00:00')
  assert.equal(out.heldLabel, 'Tuesday, October 20 at 9:00 AM')
  assert.match(out.message, /\(505\) 645-5451/)
})

// ── Studio failures: 503 with the phone, and the retry rule ───────────────────────────────
test('Studio 403 -> 503 with the phone, not retried', async () => {
  replies.push(studio(403, { detail: 'not authorised' }))
  const res = await post({ ...PATIENT, stage: 'booked' })
  assert.equal(res.status, 503)
  const out = await res.json()
  assert.equal(out.error, 'unavailable')
  assert.equal(out.phone, '(505) 645-5451')
  assert.equal(out.phoneHref, 'tel:+15056455451')
  assert.match(out.message, /\(505\) 645-5451/)
  assert.equal(calls.length, 1)
})

test('Studio 502 twice -> retried once with the same body, then 503 with the phone', async () => {
  replies.push(studio(502, { detail: 'x' }), studio(502, { detail: 'x' }))
  const res = await post({ ...PATIENT, stage: 'booked' })
  assert.equal(res.status, 503)
  assert.equal(calls.length, 2)
  assert.equal(calls[0].body, calls[1].body)
})

test('Studio 500 on details -> 503 with the phone', async () => {
  replies.push(studio(500, 'oops'))
  const res = await post({ ...PATIENT, stage: 'details' })
  assert.equal(res.status, 503)
  assert.equal((await res.json()).phone, '(505) 645-5451')
})

test('Studio 200 that is not { ok: true } -> 503', async () => {
  replies.push(studio(200, '<html>captive portal</html>'))
  const res = await post({ ...PATIENT, stage: 'booked' })
  assert.equal(res.status, 503)
})

test('booked: a timeout is retried ONCE with the same body (same dedupe key)', async () => {
  replies.push(timeout(), studio(200, { ok: true, booking: { status: 'booked' } }))
  const res = await post({ ...PATIENT, stage: 'booked' })
  assert.deepEqual(await res.json(), { ok: true, stage: 'booked', outcome: 'booked' })
  assert.equal(calls.length, 2)
  assert.equal(calls[0].body, calls[1].body)
})

test('details: a timeout is NOT retried (the contact-form rule) -> 503', async () => {
  replies.push(timeout())
  const res = await post({ ...PATIENT, stage: 'details' })
  assert.equal(res.status, 503)
  assert.equal(calls.length, 1)
})

test('no token configured -> 503 with the phone, nothing sent', async () => {
  delete process.env.STUDIO_INGEST_TOKEN
  const res = await post({ ...PATIENT, stage: 'booked' })
  assert.equal(res.status, 503)
  assert.equal((await res.json()).phone, '(505) 645-5451')
  assert.equal(calls.length, 0)
})

// ── invalid input: 400, nothing sent ─────────────────────────────────────────────────────
const tooYoung = (() => {
  const d = new Date()
  return `${d.getUTCFullYear() - 17}-01-01`
})()
const INVALID: [string, Record<string, unknown>, string][] = [
  ['missing name', { name: '' }, 'name'],
  ['name of digits only', { name: '12345' }, 'name'],
  ['bad phone', { phone: '555-0142' }, 'phone'],
  ['non-US phone', { phone: '+44 20 7946 0958' }, 'phone'],
  ['phone with a 1xx area code', { phone: '(105) 555-0142' }, 'phone'],
  ['impossible date of birth', { dob: '1971-02-30' }, 'dob'],
  ['future date of birth', { dob: '2099-01-01' }, 'dob'],
  ['date of birth in the wrong shape', { dob: '03/09/1971' }, 'dob'],
  ['under 18', { dob: tooYoung }, 'under_18'],
  ['bad email', { email: 'zeb@' }, 'email'],
  ['no reasons', { reasons: [] }, 'reasons'],
  ['unknown reason', { reasons: ['diabetes', 'botox'] }, 'reasons'],
  ['other with no write-in', { reasons: ['other'], other: '  ' }, 'other'],
  ['other over 200 characters', { reasons: ['other'], other: 'x'.repeat(201) }, 'other'],
  ['time in the past', { start: '2026-01-05T08:00:00-07:00' }, 'start'],
  ['time with the wrong offset', { start: slot.start.slice(0, 19) + '-04:00' }, 'start'],
  ['time in UTC', { start: new Date(slot.start).toISOString() }, 'start'],
  ['no patient type', { patientType: 'maybe' }, 'patient_type'],
  ['bad dedupe key', { dedupeKey: 'x' }, 'dedupe_key'],
  ['bad stage', { stage: 'paid' }, 'stage'],
]
for (const [what, patch, field] of INVALID) {
  test(`invalid: ${what} -> 400 ${field}, nothing sent`, async () => {
    const res = await post({ ...PATIENT, stage: 'booked', ...patch })
    assert.equal(res.status, 400)
    const out = await res.json()
    assert.equal(out.error, 'invalid')
    assert.equal(out.field, field)
    assert.equal(calls.length, 0)
  })
}

test('under 18: the message is kind and carries the phone number', async () => {
  const res = await post({ ...PATIENT, stage: 'details', dob: tooYoung })
  const out = await res.json()
  assert.match(out.message, /18 and older/)
  assert.match(out.message, /\(505\) 645-5451/)
})

test('an Other reason of exactly 200 characters is accepted', async () => {
  replies.push(studio(200, { ok: true }))
  const res = await post({ ...PATIENT, stage: 'details', other: 'y'.repeat(200) })
  assert.equal(res.status, 200)
})

test('not JSON, an array, or an empty body -> 400, nothing sent', async () => {
  for (const raw of ['{nope', '[1,2]', '']) {
    const res = await post(raw, true)
    assert.equal(res.status, 400, raw)
  }
  assert.equal(calls.length, 0)
})

test('honeypot filled -> looks like success, nothing sent', async () => {
  const res = await post({ ...PATIENT, stage: 'booked', hp_leave_blank: 'http://spam.example' })
  assert.equal(res.status, 200)
  assert.deepEqual(await res.json(), { ok: true, stage: 'booked', outcome: 'request' })
  assert.equal(calls.length, 0)
})

// ── logs: outcome codes only ──────────────────────────────────────────────────────────────
// Runs last (node:test runs a file's tests in order), over every line the route logged above.
test('no patient data in any log line, and the check is able to fail', () => {
  // The needles are real: non-empty, and each one is in what the patient sent.
  const requestText = JSON.stringify(PATIENT)
  for (const n of PII) {
    assert.ok(n.length >= 5, `needle "${n}" is too short to mean anything`)
    assert.ok(requestText.includes(n) || '+15055550142'.includes(n), `needle "${n}" is not in the request`)
  }
  const leaks = (lines: string[]) => lines.filter((l) => PII.some((n) => l.includes(n)))

  // Positive evidence the capture saw the route's own logging (an empty capture would pass).
  const routeLines = [...logs]
  assert.ok(routeLines.some((l) => l.includes('[book] booked delivered to studio: outcome failed')), 'route logs were not captured')
  assert.ok(routeLines.some((l) => l.includes('[book] rejected (booked): phone')))
  assert.ok(routeLines.length >= 30, `only ${routeLines.length} lines captured`)

  // Control arm: the same capture and the same check, with one leaky line logged through
  // console.error the way a careless handler would. It must be caught, needle by needle.
  console.error('[book] debug body:', { ...PATIENT, phone_e164: '+15055550142' })
  const withLeak = [...logs]
  assert.equal(leaks(withLeak).length, 1, 'the control leak was not detected')
  for (const n of PII) assert.ok(withLeak[withLeak.length - 1].includes(n), `control line lacks "${n}"`)

  // The real arm.
  assert.deepEqual(leaks(routeLines), [])
})
