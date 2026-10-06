// npm test  (node --test, no network)
import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  CLOSED_DATES, isPracticeWallClock, practiceDate, practiceWhenLabel, scheduleDays,
} from '@/lib/booking-schedule'

// ── The rules, stated independently of the implementation ────────────────────────────────
//
// The implementation reads Albuquerque's offset from the platform's tz data. These tests state
// the US rule by hand instead (DST from the second Sunday of March to the first Sunday of
// November; Denver is -06:00 inside it and -07:00 outside), so a test cannot pass by asking the
// implementation whether the implementation is right.
function nthSunday(year: number, month: number, n: number): string {
  const first = new Date(Date.UTC(year, month - 1, 1)).getUTCDay()
  const day = 1 + ((7 - first) % 7) + (n - 1) * 7
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`
}
function ruleOffset(date: string): string {
  const y = Number(date.slice(0, 4))
  return date >= nthSunday(y, 3, 2) && date < nthSunday(y, 11, 1) ? '-06:00' : '-07:00'
}
// The holiday list as the brief gives it.
const HOLIDAYS = [
  '2026-11-26', '2026-11-27', '2026-12-25', '2027-01-01', '2027-01-18', '2027-02-15', '2027-05-31',
  '2027-06-18', '2027-07-05', '2027-09-06', '2027-11-25', '2027-11-26', '2027-12-24',
]
const weekday = (d: string) => new Date(`${d}T12:00:00Z`).getUTCDay()

test('the hand-stated DST rule matches the dates in the brief (control for the rule itself)', () => {
  assert.equal(nthSunday(2026, 11, 1), '2026-11-01')
  assert.equal(nthSunday(2027, 3, 2), '2027-03-14')
  assert.equal(nthSunday(2027, 11, 1), '2027-11-07')
  assert.equal(ruleOffset('2026-10-30'), '-06:00')
  assert.equal(ruleOffset('2026-11-02'), '-07:00')
})

test('14 open days, each with 60-minute starts from 8:00 to 16:00', () => {
  const days = scheduleDays(new Date('2026-10-05T16:00:00Z'))
  assert.equal(days.length, 14)
  for (const d of days) {
    assert.deepEqual(d.slots.map((s) => s.start.slice(11, 16)),
      ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'])
    assert.deepEqual(d.slots.map((s) => s.label),
      ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'])
    assert.ok(d.slots.every((s) => s.minutes === 60))
    assert.ok(d.slots.every((s) => s.start.startsWith(d.date)))
  }
  assert.equal(days[0].label, 'Tue, Oct 6')
})

test('weekdays only, across every starting day for fifteen months', () => {
  for (let t = Date.UTC(2026, 9, 1, 18); t < Date.UTC(2027, 11, 31); t += 86_400_000) {
    for (const d of scheduleDays(new Date(t))) {
      const w = weekday(d.date)
      assert.ok(w >= 1 && w <= 5, `${d.date} is a weekend day`)
    }
  }
})

test('starts on the NEXT business day, never today', () => {
  // Monday 10am in Albuquerque -> Tuesday
  assert.equal(scheduleDays(new Date('2026-10-05T16:00:00Z'))[0].date, '2026-10-06')
  // Friday 4pm -> Monday
  assert.equal(scheduleDays(new Date('2026-10-09T22:00:00Z'))[0].date, '2026-10-12')
  // Saturday -> Monday
  assert.equal(scheduleDays(new Date('2026-10-10T18:00:00Z'))[0].date, '2026-10-12')
  // Wednesday before Thanksgiving -> the Monday after (Thu and Fri are closed)
  assert.equal(scheduleDays(new Date('2026-11-25T18:00:00Z'))[0].date, '2026-11-30')
})

test("'today' is Albuquerque's date, not UTC's", () => {
  // 05:30 UTC on Tue Oct 6 is 11:30pm MONDAY Oct 5 in Albuquerque, so the next business day is
  // Tuesday Oct 6. Reading the UTC date would skip a whole day and start on Wednesday.
  const now = new Date('2026-10-06T05:30:00Z')
  assert.equal(practiceDate(now), '2026-10-05')
  assert.equal(scheduleDays(now)[0].date, '2026-10-06')
})

test('the holiday list is exactly the one in the brief, and every entry is a weekday', () => {
  assert.deepEqual([...CLOSED_DATES].sort(), [...HOLIDAYS].sort())
  for (const h of HOLIDAYS) assert.ok(weekday(h) >= 1 && weekday(h) <= 5, `${h} is not a weekday`)
})

test('holidays are skipped', () => {
  const dec = scheduleDays(new Date('2026-12-14T18:00:00Z')).map((d) => d.date)
  assert.ok(dec.includes('2026-12-24'))
  assert.ok(!dec.includes('2026-12-25'))
  assert.ok(dec.includes('2026-12-31'))
  assert.ok(!dec.includes('2027-01-01'))
  assert.equal(dec[dec.length - 1], '2027-01-05')

  const thanks = scheduleDays(new Date('2026-11-20T18:00:00Z')).map((d) => d.date)
  assert.deepEqual(thanks.slice(0, 4), ['2026-11-23', '2026-11-24', '2026-11-25', '2026-11-30'])

  // And none of them ever appears, from any starting day.
  for (let t = Date.UTC(2026, 9, 1, 18); t < Date.UTC(2027, 11, 31); t += 86_400_000) {
    for (const d of scheduleDays(new Date(t))) assert.ok(!HOLIDAYS.includes(d.date), `${d.date} is a holiday`)
  }
})

test('offsets are right on both sides of the 2026-11-01 change', () => {
  const days = scheduleDays(new Date('2026-10-27T18:00:00Z'))
  const fri = days.find((d) => d.date === '2026-10-30')!
  const mon = days.find((d) => d.date === '2026-11-02')!
  assert.equal(fri.slots[0].start, '2026-10-30T08:00:00-06:00')
  assert.equal(mon.slots[0].start, '2026-11-02T08:00:00-07:00')
  // The instants: 8am MDT is 14:00 UTC, 8am MST is 15:00 UTC.
  assert.equal(new Date(fri.slots[0].start).toISOString(), '2026-10-30T14:00:00.000Z')
  assert.equal(new Date(mon.slots[0].start).toISOString(), '2026-11-02T15:00:00.000Z')
  assert.equal(new Date(mon.slots[8].start).toISOString(), '2026-11-02T23:00:00.000Z')
})

test('offsets are right on both sides of the 2027-03-14 change', () => {
  const days = scheduleDays(new Date('2027-03-10T18:00:00Z'))
  assert.equal(days.find((d) => d.date === '2027-03-12')!.slots[0].start, '2027-03-12T08:00:00-07:00')
  assert.equal(days.find((d) => d.date === '2027-03-15')!.slots[0].start, '2027-03-15T08:00:00-06:00')
})

test('every offered slot carries the offset the hand-stated rule gives, for fifteen months', () => {
  let checked = 0
  for (let t = Date.UTC(2026, 9, 1, 18); t < Date.UTC(2027, 11, 31); t += 7 * 86_400_000) {
    for (const d of scheduleDays(new Date(t))) {
      for (const s of d.slots) {
        assert.equal(s.start.slice(19), ruleOffset(d.date), s.start)
        checked++
      }
    }
  }
  assert.ok(checked > 5_000, `only ${checked} slots checked`)
})

test('isPracticeWallClock accepts Albuquerque wall clocks and refuses anything else', () => {
  assert.equal(isPracticeWallClock('2026-10-30T08:00:00-06:00'), true)
  assert.equal(isPracticeWallClock('2026-11-02T08:00:00-07:00'), true)
  assert.equal(isPracticeWallClock('2026-11-02T08:00:00-06:00'), false) // wrong side of the change
  assert.equal(isPracticeWallClock('2026-10-30T14:00:00Z'), false)
  assert.equal(isPracticeWallClock('2026-10-30T08:00:00-04:00'), false)
  assert.equal(isPracticeWallClock('2027-02-30T08:00:00-07:00'), false)
  assert.equal(isPracticeWallClock('2026-10-30 08:00'), false)
})

test('practiceWhenLabel reads a UTC instant on the practice clock', () => {
  assert.equal(practiceWhenLabel('2026-10-20T15:00:00+00:00'), 'Tuesday, October 20 at 9:00 AM')
  assert.equal(practiceWhenLabel('2026-11-03T15:00:00+00:00'), 'Tuesday, November 3 at 8:00 AM')
  assert.equal(practiceWhenLabel('not a date'), null)
})
