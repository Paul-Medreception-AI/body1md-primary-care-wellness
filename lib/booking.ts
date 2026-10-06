// The /book flow's vocabulary and rules, shared by the page (components/booking/BookingFlow.tsx)
// and the server (app/api/book/route.ts) so the two can never disagree about what is valid.
// Client-safe: no environment, no network, no Node APIs.

export type PatientType = 'new' | 'existing'

/**
 * What each answer to "Are you new to Body1MD?" becomes on the Studio card.
 *  label     what the patient sees
 *  treatment the card's visit wording ("Booked online, NOT in Hint: New patient visit ...")
 *  studio    the board's own vocabulary for the patient-status tag (Studio phone.py
 *            _STATUS_WORDS: "New patient" / "Existing patient"), sent as patient_type
 */
export const PATIENT_TYPES: Record<PatientType, { label: string; treatment: string; studio: string; desk: string }> = {
  new: { label: 'New patient', treatment: 'New patient visit', studio: 'New patient', desk: 'new patient, wants to become a member' },
  existing: { label: 'Existing member', treatment: 'Member visit', studio: 'Existing patient', desk: 'existing member' },
}

/** The six quick picks, in the order Paul listed them, plus Other with a write-in. */
export const REASONS = [
  { id: 'well_visit', label: 'Well visit / annual physical' },
  { id: 'diabetes', label: 'Diabetes' },
  { id: 'blood_pressure', label: 'High blood pressure' },
  { id: 'cholesterol', label: 'High cholesterol' },
  { id: 'weight', label: 'Weight loss and metabolic health' },
  { id: 'sick', label: 'Feeling unwell (sick visit)' },
] as const
export const OTHER_ID = 'other'
export const OTHER_MAX = 200
export const REASON_IDS: ReadonlySet<string> = new Set([...REASONS.map((r) => r.id), OTHER_ID])

/** 'Diabetes; High blood pressure; Other: knee pain', in the order the list shows them. */
export function reasonsText(ids: string[], other: string): string {
  const picked = new Set(ids)
  const parts: string[] = REASONS.filter((r) => picked.has(r.id)).map((r) => r.label)
  if (picked.has(OTHER_ID)) parts.push(`Other: ${other.trim()}`)
  return parts.join('; ')
}

/** The youngest patient the flow books: Dr. Hemmen practises adult internal medicine. */
export const MIN_AGE = 18

const pad = (n: number) => String(n).padStart(2, '0')

/** 'YYYY-MM-DD' from three typed fields, or null when they are not a real calendar date. */
export function dobFromParts(month: string, day: string, year: string): string | null {
  const m = Number(month), d = Number(day), y = Number(year)
  if (!/^\d{1,2}$/.test(month.trim()) || !/^\d{1,2}$/.test(day.trim()) || !/^\d{4}$/.test(year.trim())) return null
  const dt = new Date(Date.UTC(y, m - 1, d))
  if (dt.getUTCFullYear() !== y || dt.getUTCMonth() !== m - 1 || dt.getUTCDate() !== d) return null
  return `${y}-${pad(m)}-${pad(d)}`
}

/** Whole years between a date of birth and `today`, both 'YYYY-MM-DD'. */
export function ageOn(dob: string, today: string): number {
  const [by, bm, bd] = dob.split('-').map(Number)
  const [ty, tm, td] = today.split('-').map(Number)
  return ty - by - (tm < bm || (tm === bm && td < bd) ? 1 : 0)
}

export type DobProblem = 'invalid' | 'future' | 'too_old' | 'under_18'

/** Why a date of birth cannot book, or null when it can. `today` is the practice's date. */
export function dobProblem(dob: string, today: string): DobProblem | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dob)) return 'invalid'
  const [y, m, d] = dob.split('-')
  if (dobFromParts(m, d, y) !== dob) return 'invalid'
  if (dob >= today) return 'future'
  if (Number(y) < 1900) return 'too_old'
  if (ageOn(dob, today) < MIN_AGE) return 'under_18'
  return null
}

/**
 * A US mobile number as E.164, or undefined. North American numbering only: the area code and
 * the exchange cannot start with 0 or 1 (the same rule lib/deliver.ts toE164 applies).
 */
export function toUsE164(raw: string): string | undefined {
  const digits = (raw || '').replace(/\D/g, '')
  const ten = digits.length === 11 && digits.startsWith('1') ? digits.slice(1) : digits
  return /^[2-9]\d{2}[2-9]\d{6}$/.test(ten) ? `+1${ten}` : undefined
}

/** '(505) 555-0142' for '+15055550142'. */
export function formatUsPhone(e164: string): string {
  const d = e164.replace(/\D/g, '').slice(-10)
  return d.length === 10 ? `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}` : e164
}

export const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)*\.[A-Za-z]{2,}$/

/**
 * The page's dedupe key: minted once per page load and sent with BOTH posts, so Studio files
 * 'details' and 'booked' as one card and a retried confirm finds the booking the first attempt
 * made. Studio accepts [A-Za-z0-9_-]{1,64} (store._WEB_BOOKING_KEY); this is the shape we mint.
 */
export const DEDUPE_KEY_RE = /^bk_[A-Za-z0-9_-]{4,60}$/

export function makeDedupeKey(): string {
  const rand = typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID().replace(/-/g, '').slice(0, 12)
    : Math.random().toString(36).slice(2, 14)
  return `bk_${Date.now()}_${rand}`
}

/**
 * 'Tuesday, October 6 at 8:00 AM', read straight off an offset-local ISO string (its own wall
 * clock, no time-zone conversion), so the patient sees exactly the time the office wrote.
 */
export function wallClockLabel(iso: string, style: 'long' | 'short' = 'long'): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/.exec(iso)
  if (!m) return ''
  const [, y, mo, d, h, mi] = m
  const date = new Date(Date.UTC(+y, +mo - 1, +d, 12))
  const time = `${((+h + 11) % 12) + 1}:${mi} ${+h >= 12 ? 'PM' : 'AM'}`
  const day = date.toLocaleDateString('en-US', style === 'long'
    ? { weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC' }
    : { weekday: 'short', month: 'short', day: 'numeric', timeZone: 'UTC' })
  return `${day} at ${time}`
}

/** What the page posts to /api/book. */
export type BookRequest = {
  stage: 'details' | 'booked'
  dedupeKey: string
  patientType: PatientType
  reasons: string[]
  other: string
  name: string
  dob: string
  phone: string
  email?: string
  start: string
  minutes: number
  slotSource: 'studio' | 'schedule'
  hp_leave_blank?: string
}

/** What /api/book answers. `outcome` is present on success; `error` on anything else. */
export type BookResponse =
  | { ok: true; stage: 'details' }
  | { ok: true; stage: 'booked'; outcome: 'booked' | 'request' }
  | { ok: false; error: 'invalid'; field: string; message: string }
  | { ok: false; error: 'slot_taken'; message: string }
  | { ok: false; error: 'already_booked'; heldStart?: string; heldLabel?: string; message: string }
  | { ok: false; error: 'unavailable'; message: string; phone: string; phoneHref: string }

/** What /api/book/slots answers. */
export type SlotsResponse = {
  source: 'studio' | 'schedule'
  days: { date: string; label: string; slots: { start: string; label: string; minutes: number }[] }[]
}
