import {
  DAYS_OFFERED, SLOT_MINUTES, dayLabel, hourLabel, isPracticeWallClock, scheduleDays,
} from '@/lib/booking-schedule'
import type { SlotsResponse } from '@/lib/booking'
import { studioSlots } from '@/lib/studio-availability'

// The times /book offers: GET /api/book/slots?patient=new|existing
//
// SOURCE ORDER, and the answer always says which one it used (`source`) so the page can word it
// honestly:
//   1. "studio": STUDIO_AVAILABILITY_URL and the visit type id are set AND Studio says the EHR is
//      connected AND its answer parses. These are real openings in Dr. Hemmen's Hint calendar, at
//      the length of the visit the patient will be booked as (lib/studio-availability.ts).
//   2. "schedule": everything else. Office hours from lib/booking-schedule.ts. A time picked from
//      these is a REQUEST the office confirms, and the page says so; /api/book never sends Hint a
//      visit id for one.
//
// Never a 500: any failure on the Studio side falls back to the schedule. Logs carry outcome codes
// only (no patient data passes through here, but the rule is the same as the booking route's).

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const maxDuration = 15

type Day = SlotsResponse['days'][number]

function json(body: SlotsResponse): Response {
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
  })
}

/** Studio's live openings grouped by day, or null when they cannot be used. */
async function fromStudio(newPatient: boolean, now: Date): Promise<Day[] | null> {
  const slots = await studioSlots(newPatient, DAYS_OFFERED, 'book/slots')
  if (!slots) return null

  const byDate = new Map<string, Day>()
  const seen = new Set<string>()
  let dropped = 0
  const valid = slots
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

  if (slots.length && !valid.length && dropped) {
    console.warn(`[book/slots] studio availability: none of ${slots.length} slots parsed; using the schedule`)
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
