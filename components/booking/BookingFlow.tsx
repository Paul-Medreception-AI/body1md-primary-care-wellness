'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  EMAIL_RE, OTHER_ID, OTHER_MAX, PATIENT_TYPES, REASONS,
  dobFromParts, dobProblem, formatUsPhone, makeDedupeKey, reasonsText, toUsE164, wallClockLabel,
  type BookRequest, type BookResponse, type PatientType, type SlotsResponse,
} from '@/lib/booking'
import { practiceDate } from '@/lib/booking-schedule'

/**
 * /book: one question per screen, in the order Paul asked for (2026-10-05):
 *
 *   1. new or existing        (new patients see the membership price here)
 *   2. day and time           (from /api/book/slots: Studio's live calendar when the EHR is
 *                              connected, otherwise office hours, worded as a request)
 *   3. reason for visit       (six quick picks, any number, plus Other with a write-in)
 *   4. name, date of birth, mobile, optional email
 *   5. review, then "Confirm my visit"
 *
 * Modelled on Vivere Drip Therapy's Studio-only flow: the same two posts to the server ('details'
 * the moment name + mobile + date of birth are valid, so a booking abandoned at the last step is
 * still followed up; 'booked' at confirm), joined by ONE dedupe key minted per page load. The
 * result screen says only what Studio reported: "You're booked" when Studio booked it into the
 * EHR, and "Request received ... Body1MD will call or text you" for everything else it accepted.
 *
 * Nothing date-dependent is computed during render: /book is prerendered at build time, so a
 * render-time `new Date()` would freeze the build date into the HTML and break hydration the next
 * day (Vivere shipped exactly that). Today's date and the key are set in effects after mount.
 */

type Slot = SlotsResponse['days'][number]['slots'][number]
type StepN = 1 | 2 | 3 | 4 | 5
type Result =
  | { kind: 'booked'; when: string }
  | { kind: 'request'; when: string }
  | { kind: 'already'; when: string | null }

const STEP_NAMES = ['Visit type', 'Day and time', 'Reason', 'Your details', 'Confirm'] as const
const STEPS = 5

const BTN_PRIMARY =
  'inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-xl bg-[var(--color-primary)] hover:bg-[var(--color-dark)] text-white px-8 py-3.5 font-semibold transition-colors disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-teal)]/40'
const BTN_CTA =
  'inline-flex items-center justify-center gap-2 w-full rounded-xl bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 text-lg font-semibold shadow-lg transition-colors disabled:opacity-60 disabled:cursor-wait focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-accent)]/40'
const FIELD =
  'w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 text-[var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] aria-[invalid=true]:border-red-400'
const LABEL = 'block text-sm font-semibold text-[var(--color-ink)] mb-2'
const RING = 'focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-teal)]/40'

const longDay = (date: string) =>
  new Date(`${date}T12:00:00Z`).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC' })
const dayParts = (date: string) => {
  const d = new Date(`${date}T12:00:00Z`)
  const f = (o: Intl.DateTimeFormatOptions) => d.toLocaleDateString('en-US', { ...o, timeZone: 'UTC' })
  return { dow: f({ weekday: 'short' }), num: f({ day: 'numeric' }), mon: f({ month: 'short' }) }
}
const dobLong = (dob: string) =>
  new Date(`${dob}T12:00:00Z`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' })

/** Which step fixes a field the server refused. */
const FIELD_STEP: Record<string, StepN> = {
  patient_type: 1, start: 2, reasons: 3, other: 3, name: 4, dob: 4, under_18: 4, phone: 4, email: 4,
}

export default function BookingFlow({ phone, phoneHref, address }: { phone: string; phoneHref: string; address: string }) {
  const [step, setStep] = useState<StepN>(1)
  const [returnToReview, setReturnToReview] = useState(false)

  const [patientType, setPatientType] = useState<PatientType | ''>('')

  const [slots, setSlots] = useState<SlotsResponse | null>(null)
  const [slotsFailed, setSlotsFailed] = useState(false)
  const [day, setDay] = useState('')
  const [slot, setSlot] = useState<Slot | null>(null)
  const [taken, setTaken] = useState<string[]>([])
  const [slotNotice, setSlotNotice] = useState('')

  const [reasons, setReasons] = useState<string[]>([])
  const [other, setOther] = useState('')
  const [reasonTried, setReasonTried] = useState(false)

  const [name, setName] = useState('')
  const [dobM, setDobM] = useState('')
  const [dobD, setDobD] = useState('')
  const [dobY, setDobY] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [hp, setHp] = useState('')
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [detailsTried, setDetailsTried] = useState(false)

  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<{ message: string; fixStep?: StepN } | null>(null)
  const [result, setResult] = useState<Result | null>(null)

  // Set after mount, never during render (see the note at the top).
  const [today, setToday] = useState('')
  const dedupeKey = useRef('')
  useEffect(() => {
    setToday(practiceDate(new Date()))
    dedupeKey.current = makeDedupeKey()
  }, [])

  // Move focus to the new question so keyboard and screen-reader users land on it. Not on the
  // first render: the page must not steal focus on load.
  const headingRef = useRef<HTMLHeadingElement>(null)
  const firstRender = useRef(true)
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    headingRef.current?.focus()
  }, [step, result])

  // ── availability ──────────────────────────────────────────────────────────────────────
  const slotCache = useRef<Partial<Record<PatientType, SlotsResponse>>>({})
  const loadSlots = useCallback(async (type: PatientType) => {
    setSlotsFailed(false)
    const cached = slotCache.current[type]
    if (cached) {
      setSlots(cached)
      return
    }
    setSlots(null)
    try {
      const res = await fetch(`/api/book/slots?patient=${type}`, { cache: 'no-store' })
      const out = (await res.json()) as SlotsResponse
      if (!res.ok || !Array.isArray(out?.days)) throw new Error('bad answer')
      slotCache.current[type] = out
      setSlots(out)
    } catch {
      setSlotsFailed(true)
    }
  }, [])

  const days = useMemo(
    () => (slots?.days ?? [])
      .map((d) => ({ ...d, slots: d.slots.filter((s) => !taken.includes(s.start)) }))
      .filter((d) => d.slots.length),
    [slots, taken],
  )
  const fromSchedule = slots?.source !== 'studio'

  // A new list (another patient type) may not hold the time already chosen.
  useEffect(() => {
    if (!slots || !slot) return
    if (!days.some((d) => d.slots.some((s) => s.start === slot.start))) {
      setSlot(null)
      setDay('')
    }
  }, [slots, days, slot])

  // ── details ───────────────────────────────────────────────────────────────────────────
  const dob = dobFromParts(dobM, dobD, dobY)
  const dobIssue = !dobM && !dobD && !dobY ? 'missing' : !dob ? 'invalid' : today ? dobProblem(dob, today) : null
  const e164 = toUsE164(mobile)
  const emailOk = !email.trim() || EMAIL_RE.test(email.trim())
  const nameOk = name.trim().length >= 2 && /\p{L}/u.test(name)
  const otherOk = !reasons.includes(OTHER_ID) || !!other.trim()
  const reasonsOk = reasons.length > 0 && otherOk
  const detailsOk = nameOk && !!dob && !dobIssue && !!e164 && emailOk

  const body = useCallback((stage: BookRequest['stage']): BookRequest => ({
    stage,
    dedupeKey: dedupeKey.current,
    patientType: patientType as PatientType,
    reasons,
    other: reasons.includes(OTHER_ID) ? other.trim() : '',
    name: name.trim(),
    dob: dob ?? '',
    phone: e164 ?? mobile,
    email: emailOk && email.trim() ? email.trim() : undefined,
    start: slot?.start ?? '',
    minutes: slot?.minutes ?? 60,
    slotSource: slots?.source === 'studio' ? 'studio' : 'schedule',
    hp_leave_blank: hp,
  }), [patientType, reasons, other, name, dob, e164, mobile, email, emailOk, slot, slots, hp])

  // 'details' goes as soon as name + mobile + date of birth are valid, and again only if they
  // change. Silent: a failure here is not the patient's problem, the confirm still carries all.
  const captured = useRef('')
  const capturing = useRef(false)
  const capture = useCallback(async () => {
    if (!detailsOk || !reasonsOk || !slot || !patientType || capturing.current || !dedupeKey.current) return
    const b = body('details')
    const sig = JSON.stringify({ ...b, stage: '' })
    if (sig === captured.current) return
    capturing.current = true
    try {
      const res = await fetch('/api/book', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(b) })
      if (res.ok) {
        captured.current = sig
        const w = window as unknown as { gtag?: (...a: unknown[]) => void }
        w.gtag?.('event', 'booking_details_captured', { patient_type: patientType })
      }
    } catch {
      /* non-fatal: confirm surfaces any real failure */
    } finally {
      capturing.current = false
    }
  }, [detailsOk, reasonsOk, slot, patientType, body])

  // ── navigation ────────────────────────────────────────────────────────────────────────
  const allOk = !!patientType && !!slot && reasonsOk && detailsOk
  function advance(from: StepN) {
    setSubmitError(null)
    if (returnToReview && allOk) setStep(5)
    else setStep((from + 1) as StepN)
  }
  function back() {
    setSubmitError(null)
    setSlotNotice('')
    if (step > 1) setStep((step - 1) as StepN)
  }
  function change(to: StepN) {
    setReturnToReview(true)
    setSubmitError(null)
    setStep(to)
  }

  function choosePatientType(t: PatientType) {
    const changed = t !== patientType
    setPatientType(t)
    void loadSlots(t)
    if (returnToReview && !changed && allOk) setStep(5)
    else setStep(2)
  }

  function pickDay(date: string) {
    setDay(date)
    setSlotNotice('')
    if (slot && slot.start.slice(0, 10) !== date) setSlot(null)
  }

  // ── confirm ───────────────────────────────────────────────────────────────────────────
  async function confirm() {
    if (submitting || !allOk || !slot) return
    setSubmitting(true)
    setSubmitError(null)
    const when = wallClockLabel(slot.start)
    try {
      const res = await fetch('/api/book', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body('booked')) })
      const out = (await res.json().catch(() => null)) as BookResponse | null
      const w = window as unknown as { gtag?: (...a: unknown[]) => void }
      if (out && out.ok && out.stage === 'booked') {
        w.gtag?.('event', 'booking_confirmed', { outcome: out.outcome, patient_type: patientType })
        setResult({ kind: out.outcome, when })
        return
      }
      const fail = out && out.ok === false ? (out as Extract<BookResponse, { ok: false }>) : null
      if (fail?.error === 'slot_taken') {
        setTaken((t) => (t.includes(slot.start) ? t : [...t, slot.start]))
        setSlot(null)
        setSlotNotice(`Sorry, ${when} was just taken. Please choose another time.`)
        setReturnToReview(true)
        setStep(2)
        return
      }
      if (fail?.error === 'already_booked') {
        setResult({ kind: 'already', when: fail.heldLabel ?? null })
        return
      }
      if (fail?.error === 'invalid') {
        setSubmitError({ message: fail.message, fixStep: FIELD_STEP[fail.field] })
        return
      }
      // Studio unreachable (or anything unexpected): our own sentence, whose phone number is a
      // tappable tel: link. Everything they entered stays on screen, and a retry is safe (same key).
      setSubmitError({ message: '' })
    } catch {
      setSubmitError({ message: '' })
    } finally {
      setSubmitting(false)
    }
  }

  // ── result screens ────────────────────────────────────────────────────────────────────
  if (result) {
    return (
      <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 sm:p-10 shadow-xl text-center" role="status">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-light)] text-[var(--color-primary)]" aria-hidden="true">
          <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
            {result.kind === 'already'
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25M3 18.75A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75M3 18.75v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />}
          </svg>
        </div>
        <h2 ref={headingRef} tabIndex={-1} className="font-cormorant text-3xl sm:text-4xl text-[var(--color-ink)] leading-tight focus:outline-none">
          {result.kind === 'booked' && <>You&apos;re booked for {result.when}</>}
          {result.kind === 'request' && <>Request received for {result.when}</>}
          {result.kind === 'already' && (result.when ? <>You already have a visit for {result.when}</> : <>You already have a visit with Body1MD</>)}
        </h2>
        <p className="mt-2 text-sm text-[var(--color-muted)]">Mountain Time, at {address}</p>
        <div className="mt-6 space-y-3 text-[var(--color-ink)] leading-relaxed">
          {result.kind === 'booked' && (
            <p>You&apos;ll get a text at {e164 ? formatUsPhone(e164) : 'your mobile'} with the day and time once it is in Dr. Hemmen&apos;s schedule. If anything needs to change, Body1MD will call or text you.</p>
          )}
          {result.kind === 'request' && (
            <>
              <p>Body1MD will call or text you at {e164 ? formatUsPhone(e164) : 'your mobile'} to confirm.</p>
              <p className="text-[var(--color-muted)]">Your visit is not on the calendar until the office confirms it with you.</p>
            </>
          )}
          {result.kind === 'already' && (
            <p>To change it, please call <a href={phoneHref} className="font-semibold text-[var(--color-primary)] underline underline-offset-2">{phone}</a>.</p>
          )}
          {result.kind !== 'already' && (
            <p className="text-sm text-[var(--color-muted)]">
              Questions before then? Call <a href={phoneHref} className="font-semibold text-[var(--color-primary)] underline underline-offset-2">{phone}</a>.
            </p>
          )}
        </div>
        <p className="mt-6 text-sm text-[var(--color-muted)]">If this is an emergency, call 911.</p>
      </div>
    )
  }

  // ── the steps ─────────────────────────────────────────────────────────────────────────
  const selectedDay = days.find((d) => d.date === day)
  const show = (k: string) => touched[k] || detailsTried
  const nameErr = show('name') && !nameOk ? 'Please enter your full name.' : ''
  const dobErr = show('dob') && dobIssue && dobIssue !== 'under_18'
    ? dobIssue === 'future' ? 'Please check the year.' : 'Please enter your date of birth, like 03 / 09 / 1971.'
    : ''
  const under18 = dobIssue === 'under_18'
  const phoneErr = show('phone') && !e164 ? 'Please enter a US mobile number, including the area code.' : ''
  const emailErr = show('email') && !emailOk ? 'Please check your email address, or leave it blank.' : ''
  const blur = (k: string) => () => {
    setTouched((t) => ({ ...t, [k]: true }))
    void capture()
  }

  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-white shadow-xl">
      {/* Progress */}
      <div className="px-5 sm:px-8 pt-5 sm:pt-7">
        <div className="flex items-center justify-between gap-4 min-h-[2.5rem]">
          {step > 1 ? (
            <button type="button" onClick={back} className={`-ml-2 inline-flex items-center gap-1 rounded-lg px-2 py-2 text-sm font-semibold text-[var(--color-primary)] hover:bg-[var(--color-light)] ${RING}`}>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
              Back
            </button>
          ) : <span />}
          <p className="text-sm text-[var(--color-muted)]" aria-live="polite">
            Step {step} of {STEPS}<span className="hidden sm:inline">: {STEP_NAMES[step - 1]}</span>
          </p>
        </div>
        <div className="mt-3 grid grid-cols-5 gap-1.5" role="progressbar" aria-label="Booking progress" aria-valuemin={1} aria-valuemax={STEPS} aria-valuenow={step} aria-valuetext={`Step ${step} of ${STEPS}, ${STEP_NAMES[step - 1]}`}>
          {STEP_NAMES.map((n, i) => (
            <span key={n} className={`h-1.5 rounded-full transition-colors ${i < step ? 'bg-[var(--color-teal)]' : 'bg-[var(--color-border)]'}`} />
          ))}
        </div>
      </div>

      <div className="px-5 sm:px-8 pt-6 pb-7 sm:pb-9">
        {/* 1. New or existing */}
        {step === 1 && (
          <section aria-labelledby="bk-h">
            <h2 id="bk-h" ref={headingRef} tabIndex={-1} className="font-cormorant text-3xl sm:text-4xl text-[var(--color-ink)] leading-tight focus:outline-none">Are you new to Body1MD?</h2>
            <div className="mt-6 grid gap-3">
              <button type="button" aria-pressed={patientType === 'new'} onClick={() => choosePatientType('new')}
                className={`rounded-2xl border-2 p-5 text-left transition-colors ${RING} ${patientType === 'new' ? 'border-[var(--color-primary)] bg-[var(--color-light)]' : 'border-[var(--color-border)] hover:border-[var(--color-primary)]'}`}>
                <span className="block text-lg font-semibold text-[var(--color-ink)]">New patient</span>
                <span className="block text-[var(--color-muted)]">I&apos;d like to become a member.</span>
                <span className="mt-3 inline-block rounded-lg bg-[var(--color-cream)] px-3 py-1.5 text-sm text-[var(--color-ink)]">
                  Membership $100/month under 50, $150/month 50+, month-to-month
                </span>
              </button>
              <button type="button" aria-pressed={patientType === 'existing'} onClick={() => choosePatientType('existing')}
                className={`rounded-2xl border-2 p-5 text-left transition-colors ${RING} ${patientType === 'existing' ? 'border-[var(--color-primary)] bg-[var(--color-light)]' : 'border-[var(--color-border)] hover:border-[var(--color-primary)]'}`}>
                <span className="block text-lg font-semibold text-[var(--color-ink)]">Existing member</span>
                <span className="block text-[var(--color-muted)]">I&apos;m already a Body1MD member.</span>
              </button>
            </div>
          </section>
        )}

        {/* 2. Day and time */}
        {step === 2 && (
          <section aria-labelledby="bk-h">
            <h2 id="bk-h" ref={headingRef} tabIndex={-1} className="font-cormorant text-3xl sm:text-4xl text-[var(--color-ink)] leading-tight focus:outline-none">When would you like to come in?</h2>
            <p className="mt-2 text-[var(--color-muted)]">
              {fromSchedule
                ? 'Pick a day, then a time that suits you. Body1MD confirms it with you by phone or text.'
                : "Pick a day, then a time. These are open times in Dr. Hemmen's schedule."}
            </p>
            <p className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-primary)]">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              All times are Mountain Time (Albuquerque).
            </p>

            {slotNotice && (
              <p role="alert" className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">{slotNotice}</p>
            )}

            {slotsFailed ? (
              <div role="alert" className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-4 text-sm text-red-800">
                We could not load times just now. Please{' '}
                <button type="button" onClick={() => patientType && loadSlots(patientType)} className="font-semibold underline">try again</button>, or call{' '}
                <a href={phoneHref} className="font-semibold underline">{phone}</a> and we will find you a time.
              </div>
            ) : !slots ? (
              <div className="mt-6 flex items-center gap-3 text-[var(--color-muted)]" role="status">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-[var(--color-teal)] border-t-transparent" aria-hidden="true" />
                Checking times...
              </div>
            ) : !days.length ? (
              <p className="mt-6 rounded-xl bg-[var(--color-cream)] px-4 py-4 text-[var(--color-ink)]">
                There are no online openings in the next two weeks. Please call <a href={phoneHref} className="font-semibold text-[var(--color-primary)] underline">{phone}</a> and Body1MD will find you a time.
              </p>
            ) : (
              <>
                <fieldset className="mt-6">
                  <legend className="mb-3 text-sm font-semibold text-[var(--color-ink)]">Day</legend>
                  <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                    {days.map((d) => {
                      const p = dayParts(d.date)
                      const on = day === d.date
                      return (
                        <button key={d.date} type="button" aria-pressed={on} aria-label={longDay(d.date)} onClick={() => pickDay(d.date)}
                          className={`rounded-xl border px-1 py-2.5 text-center transition-colors ${RING} ${on ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white' : 'border-[var(--color-border)] bg-white hover:border-[var(--color-primary)]'}`}>
                          <span className={`block text-xs uppercase tracking-wide ${on ? 'text-white/80' : 'text-[var(--color-muted)]'}`}>{p.dow}</span>
                          <span className="block text-xl font-semibold leading-tight">{p.num}</span>
                          <span className={`block text-xs ${on ? 'text-white/80' : 'text-[var(--color-muted)]'}`}>{p.mon}</span>
                        </button>
                      )
                    })}
                  </div>
                </fieldset>

                {selectedDay && (
                  <fieldset className="mt-6">
                    <legend className="mb-3 text-sm font-semibold text-[var(--color-ink)]">Times on {longDay(selectedDay.date)}</legend>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                      {selectedDay.slots.map((s) => {
                        const on = slot?.start === s.start
                        return (
                          <button key={s.start} type="button" aria-pressed={on} onClick={() => { setSlot(s); setSlotNotice('') }}
                            className={`rounded-xl border px-2 py-3 text-sm font-semibold transition-colors ${RING} ${on ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white' : 'border-[var(--color-border)] bg-white text-[var(--color-ink)] hover:border-[var(--color-primary)]'}`}>
                            {s.label}
                          </button>
                        )
                      })}
                    </div>
                  </fieldset>
                )}
              </>
            )}

            <div className="mt-8">
              <button type="button" disabled={!slot} onClick={() => advance(2)} className={BTN_PRIMARY}>Continue</button>
              {!slot && !!days.length && <p className="mt-2 text-sm text-[var(--color-muted)]">{day ? 'Choose a time to continue.' : 'Choose a day to see its times.'}</p>}
            </div>
          </section>
        )}

        {/* 3. Reason for visit */}
        {step === 3 && (
          <form noValidate aria-labelledby="bk-h" onSubmit={(e) => { e.preventDefault(); setReasonTried(true); if (reasonsOk) advance(3) }}>
            <h2 id="bk-h" ref={headingRef} tabIndex={-1} className="font-cormorant text-3xl sm:text-4xl text-[var(--color-ink)] leading-tight focus:outline-none">What is the reason for your visit?</h2>
            <p className="mt-2 text-[var(--color-muted)]">Choose one or more.</p>
            <fieldset className="mt-6" aria-describedby={reasonTried && !reasonsOk ? 'bk-reason-err' : undefined}>
              <legend className="sr-only">Reason for visit</legend>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {[...REASONS, { id: OTHER_ID, label: 'Other' }].map((r) => {
                  const on = reasons.includes(r.id)
                  return (
                    <label key={r.id} className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 px-4 py-3.5 transition-colors has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-[var(--color-teal)]/40 ${on ? 'border-[var(--color-primary)] bg-[var(--color-light)]' : 'border-[var(--color-border)] hover:border-[var(--color-primary)]'}`}>
                      <input type="checkbox" className="sr-only" checked={on}
                        onChange={() => setReasons((rs) => (rs.includes(r.id) ? rs.filter((x) => x !== r.id) : [...rs, r.id]))} />
                      <span aria-hidden="true" className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border-2 ${on ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white' : 'border-[var(--color-border)] bg-white'}`}>
                        {on && <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>}
                      </span>
                      <span className="font-medium text-[var(--color-ink)]">{r.label}</span>
                    </label>
                  )
                })}
              </div>
            </fieldset>
            {reasons.includes(OTHER_ID) && (
              <div className="mt-4">
                <label htmlFor="bk-other" className={LABEL}>Tell us a little more</label>
                <input id="bk-other" type="text" value={other} maxLength={OTHER_MAX} autoFocus
                  onChange={(e) => setOther(e.target.value)} aria-describedby="bk-other-count"
                  aria-invalid={reasonTried && !other.trim()} className={FIELD} />
                <p id="bk-other-count" className="mt-1.5 text-xs text-[var(--color-muted)]">{other.length}/{OTHER_MAX} characters. Please keep detailed medical history for your visit.</p>
              </div>
            )}
            {reasonTried && !reasonsOk && (
              <p id="bk-reason-err" role="alert" className="mt-4 text-sm font-medium text-red-700">
                {reasons.length ? 'Please tell us a little about the other reason.' : 'Please choose at least one reason.'}
              </p>
            )}
            <p className="mt-5 rounded-xl bg-[var(--color-cream)] px-4 py-3 text-sm font-medium text-[var(--color-ink)]">If this is an emergency, call 911.</p>
            <div className="mt-8"><button type="submit" className={BTN_PRIMARY}>Continue</button></div>
          </form>
        )}

        {/* 4. Your details */}
        {step === 4 && (
          <form noValidate aria-labelledby="bk-h" onSubmit={(e) => {
            e.preventDefault()
            setDetailsTried(true)
            if (detailsOk) {
              void capture()
              advance(4)
            }
          }}>
            <h2 id="bk-h" ref={headingRef} tabIndex={-1} className="font-cormorant text-3xl sm:text-4xl text-[var(--color-ink)] leading-tight focus:outline-none">Your details</h2>
            <p className="mt-2 text-[var(--color-muted)]">So the office can find your chart and confirm your visit. No account or login needed.</p>

            <div className="mt-6 space-y-5">
              <div>
                <label htmlFor="bk-name" className={LABEL}>Full name</label>
                <input id="bk-name" type="text" autoComplete="name" maxLength={120} value={name}
                  onChange={(e) => setName(e.target.value)} onBlur={blur('name')}
                  aria-invalid={!!nameErr} aria-describedby={nameErr ? 'bk-name-err' : undefined} className={FIELD} />
                {nameErr && <p id="bk-name-err" className="mt-1.5 text-sm text-red-700">{nameErr}</p>}
              </div>

              <fieldset aria-describedby={dobErr ? 'bk-dob-err' : under18 ? 'bk-dob-18' : undefined}>
                <legend className={LABEL}>Date of birth</legend>
                <div className="grid grid-cols-[1fr_1fr_1.6fr] gap-3 max-w-xs">
                  {([
                    ['bk-dob-m', 'Month', 'MM', dobM, setDobM, 2, 'bday-month', 'bk-dob-d'],
                    ['bk-dob-d', 'Day', 'DD', dobD, setDobD, 2, 'bday-day', 'bk-dob-y'],
                    ['bk-dob-y', 'Year', 'YYYY', dobY, setDobY, 4, 'bday-year', ''],
                  ] as const).map(([id, label, ph, value, set, max, ac, nextId]) => (
                    <div key={id}>
                      <label htmlFor={id} className="block text-xs text-[var(--color-muted)] mb-1">{label}</label>
                      <input id={id} type="text" inputMode="numeric" pattern="[0-9]*" autoComplete={ac} placeholder={ph} maxLength={max} value={value}
                        onChange={(e) => {
                          const v = e.target.value.replace(/\D/g, '').slice(0, max)
                          set(v)
                          if (nextId && v.length === max && v.length > value.length) document.getElementById(nextId)?.focus()
                        }}
                        onBlur={id === 'bk-dob-y' ? blur('dob') : () => void capture()}
                        aria-invalid={!!dobErr || under18} className={`${FIELD} text-center`} />
                    </div>
                  ))}
                </div>
                {dobErr && <p id="bk-dob-err" className="mt-1.5 text-sm text-red-700">{dobErr}</p>}
              </fieldset>
              {under18 && (
                <div id="bk-dob-18" role="alert" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-light)] px-4 py-4 text-[var(--color-ink)]">
                  <p className="font-semibold">Online booking is for patients 18 and older.</p>
                  <p className="mt-1 text-sm leading-relaxed">
                    Dr. Hemmen is an adult internal medicine physician. Please call{' '}
                    <a href={phoneHref} className="font-semibold text-[var(--color-primary)] underline underline-offset-2">{phone}</a>{' '}
                    and Body1MD will be glad to help you find the right care.
                  </p>
                </div>
              )}

              <div>
                <label htmlFor="bk-phone" className={LABEL}>Mobile phone</label>
                <input id="bk-phone" type="tel" inputMode="tel" autoComplete="tel" maxLength={40} placeholder="(505) 555-0123" value={mobile}
                  onChange={(e) => setMobile(e.target.value)} onBlur={blur('phone')}
                  aria-invalid={!!phoneErr} aria-describedby={phoneErr ? 'bk-phone-err' : 'bk-phone-hint'} className={FIELD} />
                {phoneErr
                  ? <p id="bk-phone-err" className="mt-1.5 text-sm text-red-700">{phoneErr}</p>
                  : <p id="bk-phone-hint" className="mt-1.5 text-xs text-[var(--color-muted)]">Body1MD will call or text this number to confirm.</p>}
              </div>

              <div>
                <label htmlFor="bk-email" className={LABEL}>Email <span className="font-normal text-[var(--color-muted)]">(optional)</span></label>
                <input id="bk-email" type="email" autoComplete="email" maxLength={254} value={email}
                  onChange={(e) => setEmail(e.target.value)} onBlur={blur('email')}
                  aria-invalid={!!emailErr} aria-describedby={emailErr ? 'bk-email-err' : undefined} className={FIELD} />
                {emailErr && <p id="bk-email-err" className="mt-1.5 text-sm text-red-700">{emailErr}</p>}
              </div>
            </div>

            {/* Honeypot: off screen, skipped by keyboard and screen readers, ignored by password managers. */}
            <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
              <label htmlFor="bk-hp">Leave this empty</label>
              <input id="bk-hp" type="text" name="hp_leave_blank" tabIndex={-1} autoComplete="off" value={hp} onChange={(e) => setHp(e.target.value)} data-1p-ignore data-lpignore="true" data-bwignore />
            </div>

            <div className="mt-8"><button type="submit" disabled={under18} className={BTN_PRIMARY}>Review my visit</button></div>
          </form>
        )}

        {/* 5. Review and confirm */}
        {step === 5 && slot && patientType && (
          <section aria-labelledby="bk-h">
            <h2 id="bk-h" ref={headingRef} tabIndex={-1} className="font-cormorant text-3xl sm:text-4xl text-[var(--color-ink)] leading-tight focus:outline-none">Review and confirm</h2>
            <dl className="mt-6 divide-y divide-[var(--color-border)] rounded-xl border border-[var(--color-border)]">
              {([
                ['Visit', <>{PATIENT_TYPES[patientType].label}{patientType === 'new' && <span className="block text-sm text-[var(--color-muted)]">Becoming a member: $100/month under 50, $150/month 50+</span>}</>, 1],
                ['Day and time', <>{wallClockLabel(slot.start)}<span className="block text-sm text-[var(--color-muted)]">Mountain Time{fromSchedule ? '. Requested time, confirmed by the office.' : ''}</span></>, 2],
                ['Reason', <>{reasonsText(reasons, other)}</>, 3],
                ['Name', <>{name.trim()}</>, 4],
                ['Date of birth', <>{dob ? dobLong(dob) : ''}</>, 4],
                ['Mobile', <>{e164 ? formatUsPhone(e164) : mobile}</>, 4],
                ...(email.trim() && emailOk ? [['Email', <>{email.trim()}</>, 4] as const] : []),
              ] as const).map(([label, value, to]) => (
                // Phone: label and Change on one line, the answer full width beneath. From sm up:
                // label | answer | Change. A fixed label column at 390px squeezed the answer
                // until words broke mid-word.
                <div key={label} className="grid grid-cols-[1fr_auto] sm:grid-cols-[7rem_1fr_auto] items-start gap-x-4 gap-y-1 px-4 py-3.5">
                  <dt className="text-sm font-semibold text-[var(--color-muted)]">{label}</dt>
                  <dd className="col-span-2 row-start-2 sm:col-span-1 sm:col-start-2 sm:row-start-1 min-w-0 break-words text-[var(--color-ink)]">{value}</dd>
                  <dd className="col-start-2 row-start-1 sm:col-start-3">
                    <button type="button" onClick={() => change(to as StepN)} className={`rounded-md px-1.5 py-0.5 text-sm font-semibold text-[var(--color-primary)] underline underline-offset-2 hover:text-[var(--color-dark)] ${RING}`}>
                      Change<span className="sr-only"> {label.toLowerCase()}</span>
                    </button>
                  </dd>
                </div>
              ))}
            </dl>

            {submitError && (
              <div role="alert" className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                {submitError.message
                  ? <p>{submitError.message}</p>
                  : <p>We could not confirm your visit online just now. Please try again in a moment, or call <a href={phoneHref} className="font-semibold underline">{phone}</a> and we will book you directly.</p>}
                {submitError.message && !submitError.message.includes(phone) && (
                  <p className="mt-1">You can also call <a href={phoneHref} className="font-semibold underline">{phone}</a>.</p>
                )}
                {submitError.fixStep && (
                  <button type="button" onClick={() => change(submitError.fixStep!)} className="mt-2 font-semibold underline">Go back and fix it</button>
                )}
              </div>
            )}

            <div className="mt-7">
              <button type="button" onClick={confirm} disabled={submitting} className={BTN_CTA}>
                {submitting && <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" aria-hidden="true" />}
                {submitting ? 'Confirming...' : 'Confirm my visit'}
              </button>
              <p className="mt-3 text-center text-sm text-[var(--color-muted)]">If this is an emergency, call 911.</p>
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
