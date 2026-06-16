'use client'

import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

const traits = [
  {
    title: 'Curious Thinker',
    label: 'Asks better questions and learns through inquiry.',
    icon: 'question',
    tone: 'from-[#f7d88c]/20 to-transparent',
    cue: 'Inquiry',
  },
  {
    title: 'Confident Speaker',
    label: 'Expresses ideas clearly in class and groups.',
    icon: 'message',
    tone: 'from-[#77b7a0]/18 to-transparent',
    cue: 'Voice',
  },
  {
    title: 'Creative Solver',
    label: 'Builds, tests and improves practical ideas.',
    icon: 'spark',
    tone: 'from-[#f0b86f]/18 to-transparent',
    cue: 'Making',
  },
  {
    title: 'Kind Leader',
    label: 'Leads with empathy, patience and responsibility.',
    icon: 'heart',
    tone: 'from-[#d79d9d]/18 to-transparent',
    cue: 'Character',
  },
  {
    title: 'Global Citizen',
    label: 'Understands communities, cultures and the world.',
    icon: 'globe',
    tone: 'from-[#8bb8dd]/18 to-transparent',
    cue: 'Awareness',
  },
  {
    title: 'Focused Achiever',
    label: 'Works with discipline, goals and steady effort.',
    icon: 'target',
    tone: 'from-[#caa66a]/18 to-transparent',
    cue: 'Focus',
  },
]

const outcomes = ['Confidence', 'Character', 'Communication', 'Future Readiness']
const growthSignals = [
  { value: '01', label: 'classroom habits' },
  { value: '02', label: 'project evidence' },
  { value: '03', label: 'mentor feedback' },
]
const proofPoints = [
  { value: '6', label: 'core strengths' },
  { value: '360', label: 'growth lens' },
  { value: '1', label: 'parent view' },
]

export function ChildWeNurture() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!sectionRef.current) {
      return
    }

    const context = gsap.context(() => {
      gsap.from('[data-child-heading] > *', {
        opacity: 0,
        y: 28,
        duration: 0.75,
        stagger: 0.09,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 74%',
        },
      })

      gsap.from('[data-child-image]', {
        opacity: 0,
        x: -44,
        scale: 0.96,
        duration: 0.95,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '[data-child-panel]',
          start: 'top 72%',
        },
      })

      gsap.from('[data-child-card]', {
        y: 16,
        scale: 0.98,
        duration: 0.72,
        stagger: 0.08,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '[data-child-panel]',
          start: 'top 80%',
        },
      })

      gsap.from('[data-outcome]', {
        opacity: 0,
        y: 18,
        duration: 0.55,
        stagger: 0.06,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '[data-outcomes]',
          start: 'top 84%',
        },
      })

      if (progressRef.current) {
        gsap.fromTo(
          progressRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: '[data-child-traits]',
              start: 'top 70%',
              end: 'bottom 40%',
              scrub: 0.8,
            },
          },
        )
      }

      if (imageRef.current) {
        gsap.to(imageRef.current, {
          scale: 1.08,
          y: -18,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        })
      }

      gsap.to('[data-soft-glow]', {
        opacity: 'random(0.22, 0.55)',
        scale: 'random(0.92, 1.12)',
        duration: 'random(2.6, 4.8)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.1,
      })
    }, sectionRef)

    return () => context.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="child"
      className="relative overflow-hidden bg-[#f6f1e8] px-5 py-14 sm:px-6 lg:py-20"
    >
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#061813]/18 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,42,32,0.055)_1px,transparent_1px),linear-gradient(180deg,rgba(11,42,32,0.045)_1px,transparent_1px)] bg-[size:76px_76px] opacity-45" />
      <div data-soft-glow className="absolute -left-24 top-32 h-72 w-72 rounded-full bg-[#caa66a]/20 blur-3xl" />
      <div data-soft-glow className="absolute -right-24 bottom-24 h-80 w-80 rounded-full bg-[#0b513c]/16 blur-3xl" />

      <div className="relative mx-auto max-w-[96rem]">
        <div
          data-child-heading
          className="relative grid items-end gap-8 overflow-hidden rounded-t-[1.75rem] border border-[#e5d3aa]/70 border-b-0 bg-white/24 px-5 pb-8 pt-10 shadow-[0_22px_70px_rgba(48,34,12,0.06)] backdrop-blur sm:px-8 lg:grid-cols-[0.66fr_0.34fr] lg:px-10 lg:pt-12"
        >
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#061813]/12 to-transparent" />
          <div className="pointer-events-none absolute bottom-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-[#caa66a]/60 to-transparent" />
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#a77e3e]">
              Whole-child growth profile
            </p>
            <h2 className="mt-5 max-w-5xl text-[clamp(2.35rem,4.7vw,5.35rem)] font-semibold leading-[0.98] text-[#0b2a20]">
              Beyond marks, a child ready for life.
            </h2>
          </div>
          <div className="max-w-md lg:justify-self-end">
            <p className="text-sm leading-7 text-[#52665e]">
              A clear parent view of how every learner grows in confidence, communication,
              curiosity and character.
            </p>
            <div className="mt-6 grid grid-cols-3 divide-x divide-[#0b2a20]/10 rounded-[1.25rem] border border-[#d8c495]/70 bg-white/58 p-2 shadow-[0_18px_54px_rgba(48,34,12,0.06)] backdrop-blur">
              {proofPoints.map((point) => (
                <div key={point.label} className="px-3 py-2 text-center">
                  <p className="text-2xl font-semibold leading-none text-[#0b2a20]">{point.value}</p>
                  <p className="mt-1 text-[0.58rem] font-black uppercase leading-3 tracking-[0.12em] text-[#a77e3e]">
                    {point.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          data-child-panel
          className="relative grid overflow-hidden rounded-b-[1.75rem] border border-[#e5d3aa] bg-[#061813] shadow-[0_34px_110px_rgba(47,35,17,0.2)] lg:grid-cols-[0.43fr_0.57fr]"
        >
          <div className="pointer-events-none absolute inset-x-8 top-0 z-20 h-px bg-gradient-to-r from-transparent via-[#d9bd80]/70 to-transparent" />
          <div data-child-image className="relative min-h-[31rem] overflow-hidden lg:min-h-[42rem]">
            <div
              ref={imageRef}
              className="absolute inset-0 bg-[url('/images/dps-hero-students.png')] bg-cover bg-[58%_32%]"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_26%,transparent_0%,rgba(6,24,19,0.08)_32%,rgba(6,24,19,0.72)_100%),linear-gradient(180deg,rgba(6,24,19,0.04),rgba(6,24,19,0.84))]" />
            <div className="absolute inset-y-0 right-0 hidden w-32 bg-gradient-to-l from-[#061813] to-transparent lg:block" />
            <div className="absolute left-5 top-5 rounded-full border border-[#d9bd80]/35 bg-[#061813]/32 px-4 py-2 text-[0.63rem] font-black uppercase tracking-[0.16em] text-[#f1d891] backdrop-blur-md sm:left-7 sm:top-7">
              Whole child development
            </div>
            <div className="absolute right-5 top-24 hidden max-w-44 rounded-2xl border border-white/12 bg-[#061813]/62 p-4 text-white shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:block">
              <p className="text-[0.62rem] font-black uppercase tracking-[0.16em] text-[#d9bd80]">
                Parent insight
              </p>
              <p className="mt-3 text-2xl font-semibold leading-none">Visible growth</p>
              <p className="mt-2 text-xs leading-5 text-white/64">Beyond marks and report cards.</p>
            </div>
            <div className="absolute left-7 top-[48%] hidden -translate-y-1/2 rounded-full border border-[#d9bd80]/30 bg-[#d9bd80]/12 px-4 py-2 text-[0.62rem] font-black uppercase tracking-[0.14em] text-[#f1d891] backdrop-blur-md lg:block">
              Confidence in action
            </div>
            <div className="absolute bottom-5 left-5 right-5 overflow-hidden rounded-[1.35rem] border border-white/14 bg-[#061813]/76 p-5 text-white shadow-[0_22px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:bottom-7 sm:left-7 sm:right-7 sm:p-6">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f1d891]/70 to-transparent" />
              <p className="text-3xl font-semibold leading-none">Think. Speak. Lead.</p>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {['Think', 'Speak', 'Lead'].map((item) => (
                  <div key={item} className="rounded-xl border border-white/10 bg-white/[0.06] px-3 py-3">
                    <p className="text-[0.62rem] font-black uppercase tracking-[0.12em] text-[#d9bd80]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm leading-6 text-white/68">
                A future-ready learner with confidence, character and visible progress.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden p-5 text-white sm:p-8 lg:p-10 xl:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_12%,rgba(217,189,128,0.16),transparent_28%),radial-gradient(circle_at_12%_88%,rgba(95,144,119,0.14),transparent_32%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:52px_52px] opacity-35" />
            <div className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-[#d9bd80]/55 to-transparent lg:block" />
            <div className="relative flex items-start justify-between gap-6 border-b border-white/10 pb-6">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f0d28e]">
                  Growth profile
                </p>
                <h3 className="mt-3 text-[clamp(2rem,3vw,3.55rem)] font-semibold leading-none">
                  Six qualities we build.
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/62">
                  Each quality is observed through classroom behaviour, projects and mentoring
                  conversations, so parents see growth in plain language.
                </p>
              </div>
              <div className="hidden shrink-0 rounded-full border border-[#d9bd80]/30 bg-[#d9bd80]/8 px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.16em] text-[#f0d28e] sm:block">
                Parent view
              </div>
            </div>

            <div className="relative mt-6 grid gap-3 sm:grid-cols-3">
              {growthSignals.map((signal) => (
                <div
                  key={signal.label}
                  className="rounded-[1rem] border border-white/10 bg-white/[0.055] p-4 backdrop-blur"
                >
                  <p className="text-xl font-semibold leading-none text-[#f0d28e]">{signal.value}</p>
                  <p className="mt-2 text-[0.62rem] font-black uppercase leading-4 tracking-[0.13em] text-white/56">
                    {signal.label}
                  </p>
                </div>
              ))}
            </div>

            <div data-child-traits className="relative mt-5 grid gap-3 xl:grid-cols-2">
              <div className="absolute bottom-6 left-6 top-6 hidden w-px bg-white/10 2xl:block" />
              <div
                ref={progressRef}
                className="absolute bottom-6 left-6 top-6 hidden w-px origin-top bg-[#d9bd80] 2xl:block"
              />

              {traits.map((trait, index) => (
                <motion.article
                  key={trait.title}
                  data-child-card
                  whileHover={{ x: 8, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  className="motion-card group relative min-h-38 overflow-hidden rounded-[1.15rem] border border-white/10 bg-white/[0.06] p-4 backdrop-blur transition hover:border-[#d9bd80]/45 hover:bg-white/[0.09] sm:p-5"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${trait.tone} opacity-80`} />
                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <div className="grid h-13 w-13 shrink-0 place-items-center rounded-2xl border border-[#d9bd80]/35 bg-[#d9bd80]/12 text-[#f0d28e] shadow-[0_12px_34px_rgba(0,0,0,0.24)]">
                      <TraitIcon name={trait.icon} />
                    </div>
                    <span className="rounded-full border border-white/10 bg-black/10 px-2.5 py-1 text-[0.62rem] font-black uppercase tracking-[0.14em] text-[#f0d28e]">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="relative z-10 mt-6 min-w-0">
                    <p className="mb-2 text-[0.62rem] font-black uppercase tracking-[0.14em] text-[#f0d28e]/78">
                      {trait.cue}
                    </p>
                    <h4 className="text-xl font-semibold leading-tight">{trait.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-white/64">{trait.label}</p>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="relative mt-5 overflow-hidden rounded-[1.2rem] border border-[#d9bd80]/20 bg-[#d9bd80]/10 p-5">
              <div className="absolute inset-y-0 left-0 w-1 bg-[#d9bd80]" />
              <p className="text-[0.64rem] font-black uppercase tracking-[0.16em] text-[#f0d28e]">
                What parents understand
              </p>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Not just what the child scored, but how the child thinks, speaks, collaborates and
                keeps improving.
              </p>
            </div>
          </div>
        </div>

        <div data-outcomes className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((outcome) => (
            <div
              key={outcome}
              data-outcome
              className="group relative overflow-hidden rounded-[1.15rem] border border-[#d8c495]/60 bg-white/78 px-6 py-5 text-center shadow-[0_18px_54px_rgba(48,34,12,0.07)] backdrop-blur"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0b513c] via-[#caa66a] to-[#0b513c] opacity-70 transition group-hover:opacity-100" />
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#0b2a20]">
                {outcome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TraitIcon({ name }: { name: string }) {
  const common = {
    className: 'h-6 w-6',
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    strokeWidth: 1.9,
    viewBox: '0 0 24 24',
  }

  if (name === 'question') {
    return (
      <svg {...common}>
        <path d="M9.5 9a3 3 0 1 1 4.8 2.4c-1.3.8-2.3 1.5-2.3 3.1" />
        <path d="M12 19h.01" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    )
  }

  if (name === 'message') {
    return (
      <svg {...common}>
        <path d="M21 12a8 8 0 0 1-8 8H6l-3 2 1.4-4.2A8 8 0 1 1 21 12Z" />
        <path d="M8 11h8" />
        <path d="M8 15h5" />
      </svg>
    )
  }

  if (name === 'spark') {
    return (
      <svg {...common}>
        <path d="M12 3v5" />
        <path d="M12 16v5" />
        <path d="M3 12h5" />
        <path d="M16 12h5" />
        <path d="m6.4 6.4 3.2 3.2" />
        <path d="m17.6 6.4-3.2 3.2" />
      </svg>
    )
  }

  if (name === 'heart') {
    return (
      <svg {...common}>
        <path d="M20.5 8.5c0 5-8.5 10-8.5 10s-8.5-5-8.5-10a4.5 4.5 0 0 1 8.5-2 4.5 4.5 0 0 1 8.5 2Z" />
      </svg>
    )
  }

  if (name === 'globe') {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c3 3 3 15 0 18" />
        <path d="M12 3c-3 3-3 15 0 18" />
      </svg>
    )
  }

  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3" />
      <path d="M12 19v3" />
      <path d="M2 12h3" />
      <path d="M19 12h3" />
    </svg>
  )
}
