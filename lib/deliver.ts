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

const DEFAULT_URL = 'https://studio.medreception.ai/api/v1/web/submission'
const ATTEMPT_TIMEOUT_MS = 9_000
const RETRY_DELAY_MS = 600

// web_form is the only sink this site uses. Studio also knows web_widget and
// web_widget_appointment (different card titles); listed so a future form picks deliberately.
export type Sink = 'web_form' | 'web_widget' | 'web_widget_appointment'

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
 * is not retried: Studio is slow, not down, and the patient is waiting.
 *
 * Never logs: the payload is what a patient typed. Errors carry a status, never the body.
 */
export async function deliver(source: Sink, payload: Record<string, unknown>): Promise<void> {
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
        signal: AbortSignal.timeout(ATTEMPT_TIMEOUT_MS),
      })
    } catch (err) {
      const timedOut = err instanceof Error && (err.name === 'TimeoutError' || err.name === 'AbortError')
      if (!timedOut && attempt < 2) {
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
    const out = (await res.json().catch(() => null)) as { ok?: unknown } | null
    if (!out || out.ok !== true) throw new StudioRejectedError(res.status)
    return
  }
}
