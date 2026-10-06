// The practice's bookable hours, for the /book flow when Studio has no live calendar to offer.
//
// Body1MD's EHR (Hint) is not connected to Studio yet, so there is no real availability to read.
// Until it is, /api/book/slots offers the practice's own schedule: Monday to Friday, a 60-minute
// visit starting on the hour from 8:00 to 16:00 (the last one ends at 5pm, when the office
// closes), in Albuquerque time. Times offered from here are REQUESTS: nothing has checked them
// against the calendar, so the page words them as "confirmed by the office", never as booked.
//
// Pure and dependency-free: everything takes `now` so the tests can pin the clock.

export const PRACTICE_TZ = 'America/Denver'
export const SLOT_MINUTES = 60
export const FIRST_START_HOUR = 8
export const LAST_START_HOUR = 16
export const DAYS_OFFERED = 14

/**
 * Weekday US federal holidays (observed dates) in 2026 and 2027 on which the schedule offers
 * nothing. Weekend holidays are already skipped as weekends; a holiday that falls on a Saturday
 * or Sunday is listed on the weekday it is observed (2027-06-18, 2027-07-05, 2027-12-24).
 * Extend this list before the end of 2027.
 */
export const CLOSED_DATES: ReadonlySet<string> = new Set([
  '2026-11-26', // Thanksgiving
  '2026-11-27', // day after Thanksgiving
  '2026-12-25', // Christmas
  '2027-01-01', // New Year's Day
  '2027-01-18', // Martin Luther King Jr. Day
  '2027-02-15', // Presidents' Day
  '2027-05-31', // Memorial Day
  '2027-06-18', // Juneteenth (observed)
  '2027-07-05', // Independence Day (observed)
  '2027-09-06', // Labor Day
  '2027-11-25', // Thanksgiving
  '2027-11-26', // day after Thanksgiving
  '2027-12-24', // Christmas (observed)
])

export type ScheduleSlot = { start: string; label: string; minutes: number }
export type ScheduleDay = { date: string; label: string; slots: ScheduleSlot[] }

const pad = (n: number) => String(n).padStart(2, '0')

// Built once: constructing an Intl formatter costs far more than using one.
let wallFormat: Intl.DateTimeFormat | null = null

/** The wall-clock parts of `instant` in the practice's zone. */
function wallParts(instant: Date) {
  wallFormat ??= new Intl.DateTimeFormat('en-US', {
    timeZone: PRACTICE_TZ, hourCycle: 'h23',
    year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit',
  })
  const parts = wallFormat.formatToParts(instant)
  const get = (t: string) => Number(parts.find((p) => p.type === t)?.value ?? NaN)
  return { y: get('year'), m: get('month'), d: get('day'), h: get('hour'), min: get('minute'), s: get('second') }
}

/** The practice's calendar date ('YYYY-MM-DD') at `instant`: Albuquerque's today, not the server's. */
export function practiceDate(instant: Date): string {
  const p = wallParts(instant)
  return `${p.y}-${pad(p.m)}-${pad(p.d)}`
}

/**
 * Minutes east of UTC on the practice's clock at `instant` (-360 in summer, -420 in winter).
 * Read from the platform's time-zone data rather than a hand-written DST rule.
 */
export function practiceOffsetMinutesAt(instant: Date): number {
  const p = wallParts(instant)
  const asUtc = Date.UTC(p.y, p.m - 1, p.d, p.h, p.min, p.s)
  return Math.round((asUtc - Math.floor(instant.getTime() / 1000) * 1000) / 60_000)
}

/** '-06:00' / '-07:00' for an offset in minutes. */
export function formatOffset(minutes: number): string {
  const sign = minutes < 0 ? '-' : '+'
  const abs = Math.abs(minutes)
  return `${sign}${pad(Math.floor(abs / 60))}:${pad(abs % 60)}`
}

/**
 * The offset every daytime slot on `date` carries. Probed at 19:00 UTC (noon or 1pm in
 * Albuquerque), far from the 2am switch, so the day the clocks change reads correctly too.
 */
export function practiceOffsetOn(date: string): string {
  return formatOffset(practiceOffsetMinutesAt(new Date(`${date}T19:00:00Z`)))
}

const ISO_WITH_OFFSET = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(?::(\d{2}))?([+-])(\d{2}):(\d{2})$/

/**
 * True when `iso` names a real instant AND its offset is the one Albuquerque's clock has at that
 * instant, so the wall-clock time written in it is the time the patient will see at the office.
 * '2026-11-02T08:00:00-06:00' fails: on that date the practice is on -07:00.
 */
export function isPracticeWallClock(iso: string): boolean {
  const m = ISO_WITH_OFFSET.exec(iso)
  if (!m) return false
  const [, y, mo, d, h, mi, s = '00', sign, oh, om] = m
  const asUtc = Date.UTC(+y, +mo - 1, +d, +h, +mi, +s)
  const check = new Date(asUtc)
  // Reject 2026-02-30 and 25:00, which Date.UTC would silently roll over.
  if (check.getUTCFullYear() !== +y || check.getUTCMonth() !== +mo - 1 || check.getUTCDate() !== +d
    || check.getUTCHours() !== +h || check.getUTCMinutes() !== +mi) return false
  const offset = (sign === '-' ? -1 : 1) * (+oh * 60 + +om)
  const instant = new Date(asUtc - offset * 60_000)
  return practiceOffsetMinutesAt(instant) === offset
}

/** 'YYYY-MM-DD' plus n calendar days. */
function addDays(date: string, n: number): string {
  const [y, m, d] = date.split('-').map(Number)
  return new Date(Date.UTC(y, m - 1, d + n)).toISOString().slice(0, 10)
}

/** Monday to Friday, and not a listed holiday. */
export function isOpenDay(date: string): boolean {
  const dow = new Date(`${date}T12:00:00Z`).getUTCDay()
  return dow >= 1 && dow <= 5 && !CLOSED_DATES.has(date)
}

/** 'Tue, Oct 6' for a calendar date. */
export function dayLabel(date: string): string {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString('en-US', {
    weekday: 'short', month: 'short', day: 'numeric', timeZone: 'UTC',
  })
}

/** '8:00 AM' for an hour of the day. */
export function hourLabel(h: number, min = 0): string {
  return `${((h + 11) % 12) + 1}:${pad(min)} ${h >= 12 ? 'PM' : 'AM'}`
}

/**
 * The next `count` open days, starting with the next business day AFTER today in Albuquerque
 * (never today: a same-day request from the website could not be confirmed in time), each with
 * its 60-minute starts from 8:00 to 16:00.
 */
export function scheduleDays(now: Date = new Date(), count: number = DAYS_OFFERED): ScheduleDay[] {
  const out: ScheduleDay[] = []
  let date = practiceDate(now)
  // Bounded: 14 open days never need more than about three weeks, holidays included.
  for (let i = 0; i < 90 && out.length < count; i++) {
    date = addDays(date, 1)
    if (!isOpenDay(date)) continue
    const offset = practiceOffsetOn(date)
    const slots: ScheduleSlot[] = []
    for (let h = FIRST_START_HOUR; h <= LAST_START_HOUR; h++) {
      slots.push({ start: `${date}T${pad(h)}:00:00${offset}`, label: hourLabel(h), minutes: SLOT_MINUTES })
    }
    out.push({ date, label: dayLabel(date), slots })
  }
  return out
}

/** 'Tuesday, October 6 at 8:00 AM' on the practice's clock, for any ISO instant (including UTC). */
export function practiceWhenLabel(iso: string): string | null {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return null
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: PRACTICE_TZ, weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit',
  }).formatToParts(d)
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? ''
  return `${get('weekday')}, ${get('month')} ${get('day')} at ${get('hour')}:${get('minute')} ${get('dayPeriod')}`
}
