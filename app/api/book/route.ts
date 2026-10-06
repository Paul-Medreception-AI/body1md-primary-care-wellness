import { deliver, NotConfiguredError, StudioRejectedError } from '@/lib/deliver'
import { SITE } from '@/lib/site'
import {
  DEDUPE_KEY_RE, EMAIL_RE, OTHER_ID, OTHER_MAX, PATIENT_TYPES, REASON_IDS,
  dobProblem, reasonsText, toUsE164, wallClockLabel,
  type BookResponse, type PatientType,
} from '@/lib/booking'
import { isPracticeWallClock, practiceDate, practiceWhenLabel } from '@/lib/booking-schedule'

// POST /api/book: the /book flow's two posts, delivered to Body1MD's MedReception Studio board
// (studio_source "web_booking"), modelled on Vivere Drip Therapy's Studio-only booking route.
//
//   'details'  sent the moment the patient has given a valid name, mobile and date of birth, so a
//              booking abandoned at the last step is still on the board for a call back. Studio
//              raises "Started booking online: New patient visit, Tue 6 Oct 8:00 AM".
//   'booked'   sent at "Confirm my visit", with book: true. Studio books it through the same writer
//              the phone agent uses and answers with what became of it, which decides the next
//              sentence the patient reads.
//
// Both carry the dedupe key the page minted when it loaded, which is what makes them ONE card
// (store._web_booking_write moves it forward, never back) and makes a retried confirm safe: the
// same key finds the booking the first attempt made instead of making a second.
//
// 🔴 TODAY NOTHING IS BOOKED INTO THE EHR. Studio needs treatment_id (the EHR's visit-type id) to
// place a booking (store._web_book_inputs). It comes from BODY1MD_EHR_VISIT_TYPE_NEW /
// BODY1MD_EHR_VISIT_TYPE_EXISTING, which are unset until the Hint integration is live, so Studio
// answers "failed" and files an urgent "Booked online, NOT in Hint" card for the desk to book by
// hand. The patient is told "Request received ... Body1MD will call or text you to confirm":
// the page only ever says "booked" when Studio says booked.
//
// NEVER logs the body or any field (it holds health information): outcome codes only.
// NEVER a 500: every path answers with our own JSON, and failures carry the phone number.

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
// A confirm can take two Studio attempts of up to 25s (the EHR write is behind it).
export const maxDuration = 60

/** The practice's EHR, as Studio's card names it ("Booked online, NOT in Hint: ..."). */
const EHR_NAME = 'Hint'
const BOOKED_TIMEOUT_MS = 25_000
const LIMIT = { body: 8_000, name: 120, email: 254 }
/** How far ahead a requested time may be. Studio offers 14 open days, about three weeks. */
const MAX_AHEAD_MS = 45 * 24 * 60 * 60 * 1000

type Valid = {
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
}
type Invalid = { field: string; message: string }

function json(body: BookResponse | { ok: boolean; [k: string]: unknown }, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
  })
}

const callUs = `call Body1MD at ${SITE.phone}`
const invalid = (field: string, message: string): Invalid => ({ field, message })
const oneLine = (v: unknown) =>
  typeof v === 'string' ? v.replace(/[\u0000-\u001f\u007f]+/g, ' ').replace(/\s+/g, ' ').trim() : ''

function validate(b: Record<string, unknown>, now: Date): Valid | Invalid {
  const stage = b.stage === 'booked' ? 'booked' : b.stage === 'details' ? 'details' : null
  if (!stage) return invalid('stage', 'Please refresh the page and try again.')

  const dedupeKey = typeof b.dedupeKey === 'string' ? b.dedupeKey.trim() : ''
  if (!DEDUPE_KEY_RE.test(dedupeKey)) return invalid('dedupe_key', 'Please refresh the page and try again.')

  const patientType = b.patientType === 'new' || b.patientType === 'existing' ? b.patientType : null
  if (!patientType) return invalid('patient_type', 'Please tell us whether you are new to Body1MD.')

  const raw = Array.isArray(b.reasons) ? b.reasons : []
  if (raw.length > REASON_IDS.size || raw.some((r) => typeof r !== 'string' || !REASON_IDS.has(r))) {
    return invalid('reasons', 'Please choose the reason for your visit again.')
  }
  const reasons = [...new Set(raw as string[])]
  if (!reasons.length) return invalid('reasons', 'Please choose at least one reason for your visit.')
  const other = reasons.includes(OTHER_ID) ? oneLine(b.other) : ''
  if (reasons.includes(OTHER_ID) && !other) return invalid('other', 'Please tell us a little about the other reason for your visit.')
  if (other.length > OTHER_MAX) return invalid('other', `Please keep the other reason to ${OTHER_MAX} characters or fewer.`)

  const name = oneLine(b.name)
  if (name.length < 2 || !/\p{L}/u.test(name)) return invalid('name', 'Please enter your full name.')
  if (name.length > LIMIT.name) return invalid('name', `Please shorten your name to ${LIMIT.name} characters or fewer.`)

  const dob = typeof b.dob === 'string' ? b.dob.trim() : ''
  const problem = dobProblem(dob, practiceDate(now))
  if (problem === 'under_18') {
    return invalid('under_18', `Dr. Hemmen is an adult internal medicine physician, so online booking is for patients 18 and older. Please ${callUs} and we will help you find the right care.`)
  }
  if (problem) return invalid('dob', 'Please check your date of birth.')

  const phone = toUsE164(typeof b.phone === 'string' ? b.phone : '')
  if (!phone) return invalid('phone', 'Please enter a US mobile number, including the area code.')

  const email = oneLine(b.email)
  if (email && (email.length > LIMIT.email || !EMAIL_RE.test(email))) return invalid('email', 'Please check your email address.')

  const start = typeof b.start === 'string' ? b.start.trim() : ''
  const at = new Date(start).getTime()
  if (!isPracticeWallClock(start) || !(at > now.getTime()) || at - now.getTime() > MAX_AHEAD_MS) {
    return invalid('start', 'Please choose a day and time again.')
  }
  const minutes = Number.isInteger(b.minutes) && (b.minutes as number) >= 5 && (b.minutes as number) <= 240
    ? (b.minutes as number) : 60
  const slotSource = b.slotSource === 'studio' ? 'studio' : 'schedule'

  return { stage, dedupeKey, patientType, reasons, other, name, dob, phone, email: email || undefined, start, minutes, slotSource }
}

/**
 * The JSON Studio receives. Every key is one store.web_submission reads: name/phone/email/message
 * become the card; dedupe_key/stage/book/treatment_id/duration_min/ehr drive the booking and the
 * title; patient_type sets the board's New/Existing tag; everything else (date_of_birth,
 * treatment, requested_start, reason_for_visit) is kept verbatim in the card's details.
 */
function studioPayload(v: Valid): Record<string, unknown> {
  const type = PATIENT_TYPES[v.patientType]
  const reasons = reasonsText(v.reasons, v.other)
  const when = wallClockLabel(v.start, 'short')
  const unchecked = v.slotSource === 'schedule'
    ? ' The time was picked from office hours on the website and has not been checked against the calendar.'
    : ''
  const treatmentId = (v.patientType === 'new'
    ? process.env.BODY1MD_EHR_VISIT_TYPE_NEW
    : process.env.BODY1MD_EHR_VISIT_TYPE_EXISTING)?.trim()

  return {
    dedupe_key: v.dedupeKey,
    stage: v.stage,
    name: v.name,
    phone: v.phone,
    email: v.email,
    date_of_birth: v.dob,
    patient_type: type.studio,
    treatment: type.treatment,
    reason_for_visit: reasons,
    requested_start: v.start,
    duration_min: v.minutes,
    ehr: EHR_NAME,
    message: v.stage === 'booked'
      ? `Booking request from the website (${type.desk}). Reason for visit: ${reasons}. Requested ${when} Mountain Time, ${v.minutes} minutes.${unchecked}`
      : `Booking in progress on the website (${type.desk}). Reason for visit: ${reasons}. Asked for ${when} Mountain Time. A booking request follows if they finish.${unchecked}`,
    source: `body1md.com/book/${v.stage}`,
    // 🔴 THE SWITCH. Studio books only a 'booked' post that says book: true (the JSON literal).
    ...(v.stage === 'booked' ? { book: true, ...(treatmentId ? { treatment_id: treatmentId } : {}) } : {}),
  }
}

const KNOWN_OUTCOMES = new Set(['booked', 'not_in_ehr', 'failed', 'slot_taken', 'already_booked', 'needs_desk'])

export async function POST(request: Request): Promise<Response> {
  const unavailable = (message: string) =>
    json({ ok: false, error: 'unavailable', message, phone: SITE.phone, phoneHref: SITE.phoneHref }, 503)
  let stage: 'details' | 'booked' = 'details'
  try {
    const declared = Number(request.headers.get('content-length') || 0)
    const text = declared > LIMIT.body ? '' : await request.text()
    if (!text || text.length > LIMIT.body) {
      console.warn('[book] rejected: bad_body')
      return json({ ok: false, error: 'invalid', field: 'body', message: 'Please refresh the page and try again.' }, 400)
    }
    let body: unknown
    try {
      body = JSON.parse(text)
    } catch {
      console.warn('[book] rejected: bad_json')
      return json({ ok: false, error: 'invalid', field: 'body', message: 'Please refresh the page and try again.' }, 400)
    }
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      console.warn('[book] rejected: bad_json')
      return json({ ok: false, error: 'invalid', field: 'body', message: 'Please refresh the page and try again.' }, 400)
    }
    const b = body as Record<string, unknown>
    stage = b.stage === 'booked' ? 'booked' : 'details'

    // Honeypot: invisible to people, filled by bots. Answer as if it worked; deliver nothing.
    if (typeof b.hp_leave_blank === 'string' && b.hp_leave_blank.trim()) {
      console.warn('[book] honeypot filled, dropped')
      return stage === 'booked'
        ? json({ ok: true, stage: 'booked', outcome: 'request' }, 200)
        : json({ ok: true, stage: 'details' }, 200)
    }

    const v = validate(b, new Date())
    if ('field' in v) {
      console.warn(`[book] rejected (${stage}): ${v.field}`)
      return json({ ok: false, error: 'invalid', field: v.field, message: v.message }, 400)
    }

    let reply: Record<string, unknown>
    try {
      reply = await deliver(
        'web_booking',
        studioPayload(v),
        v.stage === 'booked' ? { timeoutMs: BOOKED_TIMEOUT_MS, retryOnTimeout: true } : {},
      )
    } catch (err) {
      const why = err instanceof NotConfiguredError ? 'not_configured'
        : err instanceof StudioRejectedError ? `studio_${err.status}`
        : err instanceof Error ? err.message.replace(/[^a-z0-9 _-]/gi, '').slice(0, 40) : 'unknown'
      console.error(`[book] ${v.stage} NOT delivered: ${why}`)
      // At 'booked' Studio may have filed it and the answer was lost; the same dedupe key makes a
      // second try safe, and the phone is always there.
      return unavailable(v.stage === 'booked'
        ? `We could not confirm your visit online just now. Please try again in a moment, or ${callUs} and we will book you directly.`
        : `We could not save your details just now. You can keep going, or ${callUs}.`)
    }

    if (v.stage === 'details') {
      console.info('[book] details delivered to studio')
      return json({ ok: true, stage: 'details' }, 200)
    }

    const booking = (reply.booking && typeof reply.booking === 'object' ? reply.booking : {}) as { status?: unknown; starts_at?: unknown }
    const status = typeof booking.status === 'string' && KNOWN_OUTCOMES.has(booking.status) ? booking.status : booking.status ? 'other' : 'none'
    console.info(`[book] booked delivered to studio: outcome ${status}`)

    if (status === 'slot_taken') {
      return json({ ok: false, error: 'slot_taken', message: 'Sorry, that time was just taken. Please choose another time.' }, 409)
    }
    if (status === 'already_booked') {
      const heldStart = typeof booking.starts_at === 'string' ? booking.starts_at : undefined
      const heldLabel = (heldStart && practiceWhenLabel(heldStart)) || undefined
      return json({
        ok: false, error: 'already_booked', heldStart, heldLabel,
        message: heldLabel
          ? `You already have a visit for ${heldLabel} (Mountain Time). To change it, please ${callUs}.`
          : `You already have a visit with Body1MD. To change it, please ${callUs}.`,
      }, 409)
    }
    // 'booked' is the only answer that means it went into the schedule. Everything else Studio
    // accepted (failed: no visit-type id yet; not_in_ehr; needs_desk; no outcome at all) is on the
    // practice's board for the desk, and the patient hears from them.
    return json({ ok: true, stage: 'booked', outcome: status === 'booked' ? 'booked' : 'request' }, 200)
  } catch (err) {
    console.error(`[book] unexpected error (${err instanceof Error ? err.name : 'unknown'})`)
    return unavailable(stage === 'booked'
      ? `We could not confirm your visit online just now. Please try again in a moment, or ${callUs} and we will book you directly.`
      : `We could not save your details just now. You can keep going, or ${callUs}.`)
  }
}
