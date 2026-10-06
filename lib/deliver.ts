// Where a website message goes: the practice's MedReception Studio board, the same board the
// front desk works from, so a website message lands beside the messages taken on calls instead
// of in a second inbox.
//
// Server to server only. The browser posts to /api/contact; that route calls deliver(), which
// is the only code that ever sees the token.
//
// Configuration (set on the Vercel project that serves the domain, production and preview):
//   STUDIO_INGEST_URL    https://studio.medreception.ai/api/v1/web/submission
//   STUDIO_INGEST_TOKEN  the practice's web-ingest secret. It is also the ROUTING key: nothing
//                        in the body names a practice, so a wrong token cannot reach somebody
//                        else's board. Studio answers 403 for a bad token and does not say why.
//
// Studio's parser (medreception-studio app/store.py web_submission) reads exactly these keys:
//   studio_source  picks the card type; "web_form" files a card titled "Website message"
//   name           the patient's name
//   phone          normalised to E.164 there too; we send E.164 so contact matching works
//   email          kept on the card
//   message        the card body
// Any other key (page_path here) is kept verbatim in the card's details; `site` is dropped.
//
// The /book flow (app/api/book/route.ts) posts here too, as studio_source "web_booking": a
// 'details' post when the patient has given a name, phone and date of birth, and a 'booked' post
// with book: true at confirm, both carrying the page's dedupe_key so Studio keeps ONE card. Studio
// answers the 'booked' post with what became of it ({ ok: true, booking: { status } }), which is
// why deliver() returns the reply instead of nothing.

const DEFAULT_URL = 'https://studio.medreception.ai/api/v1/web/submission'
const ATTEMPT_TIMEOUT_MS = 9_000
const RETRY_DELAY_MS = 600

// web_form is the contact form; web_booking is the /book flow (Studio files it as an appointment
// request and, for a 'booked' post with book: true, tries to book it). Studio also knows
// web_widget and web_widget_appointment (different card titles); listed so a future form picks
// deliberately.
export type Sink = 'web_form' | 'web_booking' | 'web_widget' | 'web_widget_appointment'

/** Per-call tuning. The defaults are the contact form's: 9s, no retry after a timeout. */
export type DeliverOptions = {
  /** Per attempt. */
  timeoutMs?: number
  /**
   * Try once more after a TIMEOUT as well as after a network failure or a 502/503/504. Only for a
   * post carrying a dedupe key Studio honours (the booking flow's confirm): Studio's booking waits
   * on the EHR write, a timed-out attempt may well have finished, and the same key is how the
   * retry finds that booking instead of making a second one. Never after any other 4xx/5xx.
   */
  retryOnTimeout?: boolean
}

/** No token configured: nothing can accept the message. */
export class NotConfiguredError extends Error {}

/** Studio answered, and the answer was not { ok: true }. Carries the status only. */
export class StudioRejectedError extends Error {
  constructor(public status: number) {
    super(`studio ingest ${status}`)
  }
}

/**
 * Studio holds every phone as E.164 and matches contacts on it, so "5056455451" left raw would
 * arrive as a stranger even for a patient who has called before.
 * Returns undefined for anything that is not a plausible number (the route rejects it).
 */
export function toE164(raw?: string): string | undefined {
  const s = (raw || '').trim()
  const digits = s.replace(/\D/g, '')
  if (!digits) return undefined
  // North American numbers: area code and exchange cannot start with 0 or 1.
  const nanp = (ten: string) => (/^[2-9]\d{2}[2-9]\d{6}$/.test(ten) ? `+1${ten}` : undefined)
  if (digits.length === 10) return nanp(digits)
  if (digits.length === 11 && digits.startsWith('1')) return nanp(digits.slice(1))
  if (s.startsWith('+') && digits.length >= 8 && digits.length <= 15) return `+${digits}`
  return undefined
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

/**
 * Deliver one submission to Studio.
 *
 * THROWS WHENEVER STUDIO DID NOT ACCEPT IT, including when nothing is configured. Nothing
 * queues the message, so a failure here IS a lost message: the route turns the throw into an
 * answer that hands the patient the office phone number, never a fake "sent".
 *
 * One retry, only for a network failure or a 502/503/504 (Studio wraps its own exceptions in a
 * 502). That is safe because Studio dedupes an identical submission for ten minutes. A timeout
 * is not retried unless the caller says so (retryOnTimeout): for a form, Studio is slow, not
 * down, and the patient is waiting.
 *
 * Returns Studio's reply (its parsed JSON object, always with ok: true).
 *
 * Never logs: the payload is what a patient typed. Errors carry a status, never the body.
 */
export async function deliver(
  source: Sink,
  payload: Record<string, unknown>,
  { timeoutMs = ATTEMPT_TIMEOUT_MS, retryOnTimeout = false }: DeliverOptions = {},
): Promise<Record<string, unknown>> {
  const url = process.env.STUDIO_INGEST_URL || DEFAULT_URL
  const token = process.env.STUDIO_INGEST_TOKEN
  if (!token) throw new NotConfiguredError('STUDIO_INGEST_TOKEN is not set')

  // studio_source goes LAST so no field in the payload can overwrite the card type.
  const body = JSON.stringify({ ...payload, studio_source: source })

  for (let attempt = 1; ; attempt++) {
    let res: Response
    try {
      res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-studio-token': token },
        body,
        cache: 'no-store',
        signal: AbortSignal.timeout(timeoutMs),
      })
    } catch (err) {
      const timedOut = err instanceof Error && (err.name === 'TimeoutError' || err.name === 'AbortError')
      if ((!timedOut || retryOnTimeout) && attempt < 2) {
        await sleep(RETRY_DELAY_MS)
        continue
      }
      throw new Error(timedOut ? 'studio ingest timed out' : 'studio ingest unreachable')
    }

    if (!res.ok) {
      if ([502, 503, 504].includes(res.status) && attempt < 2) {
        await sleep(RETRY_DELAY_MS)
        continue
      }
      throw new StudioRejectedError(res.status)
    }
    // A 200 that is not Studio's own { ok: true } (a proxy page, a captive portal) is not a
    // delivery. Treat it as a failure so the patient is told to call.
    const out = (await res.json().catch(() => null)) as Record<string, unknown> | null
    if (!out || typeof out !== 'object' || out.ok !== true) throw new StudioRejectedError(res.status)
    return out
  }
}
