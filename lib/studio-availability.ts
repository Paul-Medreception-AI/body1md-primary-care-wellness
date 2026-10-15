// Dr. Hemmen's open times, from MedReception Studio: the times Katie would offer on a call.
//
// Server to server only (the token is the practice's web-ingest secret and also its routing key,
// exactly as for /api/v1/web/submission):
//   POST $STUDIO_AVAILABILITY_URL   x-studio-token: $STUDIO_INGEST_TOKEN
//   { "treatment_id": "appty-...", "days": 14, "new_patient": true }
//   -> { "connected": true, "slots": [{ "start": "2026-10-16T08:00:00-06:00", "minutes": 45 }] }
//
// treatment_id is Hint's id for the visit the patient will be booked as, from
// BODY1MD_EHR_VISIT_TYPE_NEW / _EXISTING. Studio tiles the times at that visit's length and books
// by the same id, so the time offered and the visit booked are the same thing.
//
// Two callers: /api/book/slots (what the page offers) and /api/book (the confirm, which asks again
// so a time somebody took since the page loaded is never sent to Hint). Neither ever throws: null
// means "Studio cannot say", and each caller falls back in its own way. Logs carry outcome codes
// only.

const TIMEOUT_MS = 6_000

/** Hint's id for the visit a new or existing patient is booked as, or undefined when unset. */
export function visitTypeId(newPatient: boolean): string | undefined {
  return (newPatient ? process.env.BODY1MD_EHR_VISIT_TYPE_NEW : process.env.BODY1MD_EHR_VISIT_TYPE_EXISTING)?.trim() || undefined
}

/** Studio's open times for that visit, raw and unvalidated, or null when they cannot be used. */
export async function studioSlots(newPatient: boolean, days: number, tag: string): Promise<unknown[] | null> {
  const url = process.env.STUDIO_AVAILABILITY_URL
  if (!url) return null
  const token = process.env.STUDIO_INGEST_TOKEN
  const treatmentId = visitTypeId(newPatient)
  if (!token || !treatmentId) {
    console.error(`[${tag}] STUDIO_AVAILABILITY_URL is set but ${!token ? 'STUDIO_INGEST_TOKEN' : 'the visit type id'} is not; not asking Studio`)
    return null
  }
  let res: Response
  try {
    res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-studio-token': token },
      body: JSON.stringify({ treatment_id: treatmentId, days, new_patient: newPatient }),
      cache: 'no-store',
      signal: AbortSignal.timeout(TIMEOUT_MS),
    })
  } catch (err) {
    console.warn(`[${tag}] studio availability unreachable (${err instanceof Error ? err.name : 'error'})`)
    return null
  }
  if (!res.ok) {
    console.warn(`[${tag}] studio availability ${res.status}`)
    return null
  }
  const out = (await res.json().catch(() => null)) as { connected?: unknown; slots?: unknown } | null
  if (!out || typeof out !== 'object' || out.connected !== true) {
    console.info(`[${tag}] studio availability not connected`)
    return null
  }
  if (!Array.isArray(out.slots)) {
    console.warn(`[${tag}] studio availability answer did not parse`)
    return null
  }
  return out.slots
}
