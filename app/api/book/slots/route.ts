import {
  DAYS_OFFERED, SLOT_MINUTES, dayLabel, hourLabel, isPracticeWallClock, scheduleDays,
} from '@/lib/booking-schedule'
import type { SlotsResponse } from '@/lib/booking'

// The times /book offers: GET /api/book/slots?patient=new|existing
//
// SOURCE ORDER, and the answer always says which one it used (`source`) so the page can word it
// honestly:
//   1. "studio": STUDIO_AVAILABILITY_URL is set AND Studio says the EHR is connected AND its answer
//      parses. These are real openings in Dr. Hemmen's calendar.
//   2. "schedule": everything else, including today (Body1MD's EHR, Hint, is not connected yet).
//      Office hours from lib/booking-schedule.ts. A time picked from these is a REQUEST the office
//      confirms, and the page says so.
//
// Studio contract (server to server; the token is the practice's web-ingest secret and also its
// routing key, exactly as for /api/v1/web/submission):
//   POST $STUDIO_AVAILABILITY_URL   x-studio-token: $STUDIO_INGEST_TOKEN
//   { "days": 14, "new_patient": true }
//   -> { "connected": true, "slots": [{ "start": "2026-10-06T08:00:00-06:00", "minutes": 60 }] }
//
// Never a 500: any failure on the Studio side falls back to the schedule. Logs carry outcome codes
// only (no patient data passes through here, but the rule is the same as the booking route's).

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const maxDuration = 15

const STUDIO_TIMEOUT_MS = 6_000

type Day = SlotsResponse['days'][number]

function json(body: SlotsResponse): Response {
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
  })
}

/** Studio's live openings grouped by day, or null when they cannot be used. */
async function fromStudio(newPatient: boolean, now: Date): Promise<Day[] | null> {
  const url = process.env.STUDIO_AVAILABILITY_URL
  if (!url) return null
  const token = process.env.STUDIO_INGEST_TOKEN
  if (!token) {
    console.error('[book/slots] STUDIO_AVAILABILITY_URL is set but STUDIO_INGEST_TOKEN is not; using the schedule')
    return null
  }
  let res: Response
  try {
    res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-studio-token': token },
      body: JSON.stringify({ days: DAYS_OFFERED, new_patient: newPatient }),
      cache: 'no-store',
      signal: AbortSignal.timeout(STUDIO_TIMEOUT_MS),
    })
  } catch (err) {
    console.warn(`[book/slots] studio availability unreachable (${err instanceof Error ? err.name : 'error'}); using the schedule`)
    return null
  }
  if (!res.ok) {
    console.warn(`[book/slots] studio availability ${res.status}; using the schedule`)
    return null
  }
  const out = (await res.json().catch(() => null)) as { connected?: unknown; slots?: unknown } | null
  if (!out || typeof out !== 'object' || out.connected !== true) {
    console.info('[book/slots] studio availability not connected; using the schedule')
    return null
  }
  if (!Array.isArray(out.slots)) {
    console.warn('[book/slots] studio availability answer did not parse; using the schedule')
    return null
  }

  const byDate = new Map<string, Day>()
  const seen = new Set<string>()
  let dropped = 0
  const valid = out.slots
    .map((s) => {
      const start = s && typeof s === 'object' ? (s as { start?: unknown }).start : undefined
      const minutes = s && typeof s === 'object' ? (s as { minutes?: unknown }).minutes : undefined
      // The offset must be Albuquerque's at that instant, or the wall clock we show is wrong.
      if (typeof start !== 'string' || !isPracticeWallClock(start)) {
        dropped++
        return null
      }
      return {
        start,
        at: new Date(start).getTime(),
        minutes: Number.isInteger(minutes) && (minutes as number) >= 5 && (minutes as number) <= 480 ? (minutes as number) : SLOT_MINUTES,
      }
    })
    .filter((s): s is { start: string; at: number; minutes: number } => s !== null)
    .filter((s) => s.at > now.getTime())
    .sort((a, b) => a.at - b.at)

  if (out.slots.length && !valid.length && dropped) {
    console.warn(`[book/slots] studio availability: none of ${out.slots.length} slots parsed; using the schedule`)
    return null
  }
  if (dropped) console.warn(`[book/slots] studio availability: dropped ${dropped} unparseable slots`)

  for (const s of valid) {
    if (seen.has(s.start)) continue
    seen.add(s.start)
    const date = s.start.slice(0, 10)
    let day = byDate.get(date)
    if (!day) {
      if (byDate.size >= DAYS_OFFERED) break
      day = { date, label: dayLabel(date), slots: [] }
      byDate.set(date, day)
    }
    day.slots.push({ start: s.start, label: hourLabel(Number(s.start.slice(11, 13)), Number(s.start.slice(14, 16))), minutes: s.minutes })
  }
  return [...byDate.values()]
}

export async function GET(request: Request): Promise<Response> {
  const now = new Date()
  try {
    const newPatient = new URL(request.url).searchParams.get('patient') !== 'existing'
    const live = await fromStudio(newPatient, now)
    if (live) {
      console.info(`[book/slots] source=studio days=${live.length}`)
      return json({ source: 'studio', days: live })
    }
    return json({ source: 'schedule', days: scheduleDays(now) })
  } catch (err) {
    console.error(`[book/slots] unexpected error (${err instanceof Error ? err.name : 'unknown'}); using the schedule`)
    try {
      return json({ source: 'schedule', days: scheduleDays(now) })
    } catch {
      return json({ source: 'schedule', days: [] })
    }
  }
}
