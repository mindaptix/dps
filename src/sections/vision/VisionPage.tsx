'use client'

import Image from 'next/image'
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'

const parentQuestions = [
  'Will my child be happy?',
  'Will my child be known and valued?',
  'Will my child develop confidence?',
  'Will my child learn how to think, not just what to think?',
  'Will my child be prepared for a future none of us can fully predict?',
]

const questionVisuals = [
  { eyebrow: 'Joy & wellbeing', chips: ['Belonging', 'Happiness'], gradient: 'linear-gradient(150deg, #102f22 0%, #24563b 55%, #3f7650 100%)' },
  { eyebrow: 'Known deeply', chips: ['Identity', 'Care'], gradient: 'linear-gradient(150deg, #294f3a 0%, #173728 58%, #0d291c 100%)' },
  { eyebrow: 'Inner strength', chips: ['Courage', 'Voice'], gradient: 'linear-gradient(150deg, #6d9c66 0%, #3f744d 48%, #1c4933 100%)' },
  { eyebrow: 'Thinking freely', chips: ['Curiosity', 'Ideas'], gradient: 'linear-gradient(150deg, #173c2b 0%, #0d2b1e 62%, #315f41 100%)' },
  { eyebrow: 'Future ready', chips: ['Purpose', 'Possibility'], gradient: 'linear-gradient(150deg, #4f7d51 0%, #28583d 50%, #123425 100%)' },
]

const futureQualities = ['They will need curiosity.', 'Adaptability.', 'Creativity.', 'Resilience.', 'Judgement.', 'Empathy.', 'Integrity.']

const experience = [
  'A school where children are excited to arrive each morning.',
  'A school where questions are welcomed.',
  'A school where mistakes become opportunities for growth.',
  'A school where kindness is valued as highly as achievement.',
  'A school where learning extends beyond textbooks.',
  'A school where children discover confidence, purpose, and possibility.',
  'A school where every child is known.',
  'A school where every child matters.',
]

const balance = ['Academic Excellence', 'Character Development', 'Wellbeing', 'Future Readiness', 'Creativity', 'Leadership', 'Human Values']

const foundingQuestions = [
  'Will my child be happy?',
  'Will my child develop confidence?',
  'Will my child discover their strengths?',
  'Will they become a good human being?',
  'Will they be prepared for life?',
]

const lookingAhead = ['Curiosity', 'Adaptability', 'Creativity', 'Empathy', 'Resilience', 'Critical Thinking', 'Leadership', 'Integrity', 'Lifelong Learning']

const futureSignals = [
  { label: 'Artificial intelligence', detail: 'Transforming industries', icon: 'ai' },
  { label: 'New career paths', detail: 'Emerging every day', icon: 'career' },
  { label: 'Connected world', detail: 'Reshaping how we live and learn', icon: 'connected' },
] as const

function FutureSignalIcon({ type }: { type: (typeof futureSignals)[number]['icon'] }) {
  if (type === 'ai') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true" className="h-7 w-7" fill="none">
        <rect x="11" y="11" width="26" height="26" rx="8" stroke="currentColor" strokeWidth="1.7" />
        <path d="M19 29V19m0 5h10m0-5v10M24 6v5m0 26v5M6 24h5m26 0h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="29" cy="29" r="2" fill="currentColor" />
      </svg>
    )
  }

  if (type === 'career') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true" className="h-7 w-7" fill="none">
        <path d="M10 36 22 24l7 7 10-14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M31 17h8v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="10" cy="36" r="3" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="22" cy="24" r="3" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="h-7 w-7" fill="none">
      <circle cx="24" cy="24" r="15" stroke="currentColor" strokeWidth="1.7" />
      <path d="M9 24h30M24 9c4 4.2 6 9.2 6 15s-2 10.8-6 15c-4-4.2-6-9.2-6-15s2-10.8 6-15Z" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="36" cy="14" r="3.5" fill="#f6f9f3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function QuestionSymbol({ index }: { index: number }) {
  const symbols = [
    <path key="happy" d="M15 25c2.5 5 6.5 7.5 12 7.5S36.5 30 39 25M18 18h.1M36 18h.1" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />,
    <path key="known" d="M27 13a7 7 0 1 1 0 14 7 7 0 0 1 0-14Zm-13 27c1.8-7 6.1-10.5 13-10.5S38.2 33 40 40M11 18h5m-2.5-2.5v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />,
    <path key="confidence" d="M14 38V27m12 11V20m12 18V11M10 14l8-5 8 5 12-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
    <path key="think" d="M27 9c-8.3 0-15 6.1-15 13.6 0 5 3 8.7 7.1 11.1V40h15.8v-6.3c4.1-2.4 7.1-6.1 7.1-11.1C42 15.1 35.3 9 27 9Zm-7 15 5 4 9-11M20 45h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
    <path key="future" d="M12 37 25 11l6.5 13L43 29l-31 8Zm13-26 1 18m5.5-5L26 29m0 0-14 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
  ]

  return <svg viewBox="0 0 54 54" aria-hidden="true" className="h-10 w-10" fill="none">{symbols[index]}</svg>
}

function QuestionCard({ question, index }: { question: string; index: number }) {
  const reduceMotion = useReducedMotion()
  const visual = questionVisuals[index]
  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 70, rotate: index % 2 ? 3 : -3 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, rotate: index === 2 ? 0 : index % 2 ? 1.2 : -1.2 }}
      whileHover={reduceMotion ? undefined : { y: -20, rotate: 0, scale: 1.035 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{ backgroundImage: visual.gradient }}
      className={`vision-question-card vision-question-card-${index + 1} group relative min-h-[28rem] overflow-hidden rounded-[2rem] border p-6 sm:min-h-[30rem]`}
    >
      <div className="vision-question-mesh pointer-events-none absolute inset-0 opacity-50" />
      <span className="absolute -right-3 -top-10 select-none text-[9rem] font-semibold leading-none tracking-[-0.1em] text-white/[0.08] transition duration-700 group-hover:scale-110 group-hover:text-white/[0.14]">0{index + 1}</span>

      <div className="pointer-events-none absolute left-1/2 top-[42%] h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 transition duration-700 group-hover:scale-110 group-hover:rotate-12">
        <span className="absolute inset-5 rounded-full border border-dashed border-[#b6d7ae]/35" />
        <span className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/[0.09] text-[#d7ebd2] shadow-[0_0_55px_rgba(172,211,163,0.18)] backdrop-blur-sm transition duration-500 group-hover:bg-white group-hover:text-[#214a34]">
          <span className="scale-150"><QuestionSymbol index={index} /></span>
        </span>
        <span className="vision-question-orbit-dot absolute -right-1 top-1/2 h-3 w-3 rounded-full bg-[#c7e2c0] shadow-[0_0_18px_#c7e2c0]" />
      </div>

      <div className="relative flex items-start justify-between">
        <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[0.58rem] font-bold uppercase tracking-[0.22em] text-white/70 backdrop-blur">Question 0{index + 1}</span>
        <span className="text-right text-[0.55rem] font-bold uppercase leading-4 tracking-[0.16em] text-[#c3dfbd]">{visual.eyebrow}</span>
      </div>

      <div className="absolute bottom-7 left-6 right-6">
        <span className="mb-5 block h-px w-12 bg-[#b6d7ae] transition-all duration-500 group-hover:w-full" />
        <p className="max-w-[15rem] text-[1.35rem] font-light leading-[1.35] tracking-[-0.025em] text-white sm:text-[1.5rem]">{question}</p>
        <div className="mt-5 flex flex-wrap gap-2">{visual.chips.map((chip) => <span key={chip} className="rounded-full border border-white/15 bg-white/[0.08] px-3 py-1.5 text-[0.55rem] font-bold uppercase tracking-[0.13em] text-white/65 backdrop-blur-sm">{chip}</span>)}</div>
        <div className="mt-5 flex items-center justify-between border-t border-white/15 pt-4 text-[0.58rem] font-bold uppercase tracking-[0.18em] text-white/55">
          <span>Explore the question</span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-base text-white transition duration-300 group-hover:rotate-45 group-hover:bg-[#9bc094] group-hover:text-[#153a29]">↗</span>
        </div>
      </div>
    </motion.article>
  )
}

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 46, filter: 'blur(8px)' }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >{children}</motion.div>
  )
}

function Kicker({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`flex items-center gap-4 text-[0.64rem] font-bold uppercase tracking-[0.28em] ${light ? 'text-[#a8cda0]' : 'text-[#6c9469]'}`}>
      <span className={`h-px w-10 ${light ? 'bg-[#88b17f]' : 'bg-[#79a273]'}`} />{children}
    </p>
  )
}

function NumberCard({ text, index, dark = false }: { text: string; index: number; dark?: boolean }) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 35, rotate: index % 2 ? 2 : -2 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, rotate: 0 }}
      whileHover={reduceMotion ? undefined : { y: -12, rotate: index % 2 ? -1 : 1, scale: 1.02 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative min-h-56 overflow-hidden rounded-[1.6rem] border p-7 shadow-[0_28px_80px_rgba(25,61,40,0.1)] ${dark ? 'border-white/10 bg-white/[0.07] text-white backdrop-blur' : 'border-[#d7e5d3] bg-white text-[#224333]'}`}
    >
      <span className={`absolute -right-3 -top-8 text-[6.5rem] font-semibold tracking-[-0.08em] transition duration-500 ${dark ? 'text-white/[0.04] group-hover:text-white/[0.08]' : 'text-[#eff5ed] group-hover:text-[#e0ecdc]'}`}>0{index + 1}</span>
      <span className={`relative text-[0.6rem] font-bold tracking-[0.2em] ${dark ? 'text-[#a5c89e]' : 'text-[#72966f]'}`}>0{index + 1}</span>
      <p className="relative mt-24 text-lg leading-7">{text}</p>
    </motion.article>
  )
}

export function VisionPage() {
  const reduceMotion = useReducedMotion()
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress: pageProgress } = useScroll()
  const progressScale = useSpring(pageProgress, { stiffness: 110, damping: 24, mass: 0.35 })
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroImageY = useTransform(heroProgress, [0, 1], ['0%', '13%'])
  const heroCopyY = useTransform(heroProgress, [0, 1], ['0%', '28%'])
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0.1])

  return (
    <main className="overflow-x-clip bg-[#f6f9f3] text-[#173728]">
      <motion.div className="fixed inset-x-0 top-0 z-[80] h-[3px] origin-left bg-gradient-to-r from-[#b8d9b0] via-[#6d9f66] to-[#173c2b]" style={{ scaleX: progressScale }} />

      <section ref={heroRef} className="relative min-h-[100svh] overflow-hidden bg-[#e7f0e3]">
        <motion.div className="absolute inset-0" style={reduceMotion ? undefined : { y: heroImageY }}>
          <Image src="/images/vision/possibility-city.png" alt="A child looking toward a city skyline" fill priority sizes="100vw" className="object-cover object-[65%_center]" />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(246,249,243,0.99)_0%,rgba(246,249,243,0.93)_31%,rgba(246,249,243,0.28)_65%,rgba(9,31,21,0.08)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#102f21]/45 via-transparent to-white/5" />
        <div className="vision-hero-scan absolute inset-0" />
        <div className="vision-orb absolute -left-36 top-[34%] h-[28rem] w-[28rem] rounded-full border border-[#80ac76]/25" />

        <motion.div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[112rem] items-center px-6 pb-24 pt-40 sm:px-10 lg:px-16 xl:px-24" style={reduceMotion ? undefined : { y: heroCopyY, opacity: heroOpacity }}>
          <div className="max-w-[51rem]">
            <motion.div initial={reduceMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
              <Kicker>PAGE 2 · OUR VISION</Kicker>
            </motion.div>
            <motion.h1 initial={reduceMotion ? false : { opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }} className="mt-8 text-[clamp(4.2rem,9vw,9.4rem)] font-medium uppercase leading-[0.82] tracking-[-0.075em]">
              Why another <span className="ml-[0.35em] mt-4 block font-serif font-normal italic normal-case text-[#6f9f68]">school?</span>
            </motion.h1>
            <motion.p initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="mt-9 max-w-xl text-lg leading-8 text-[#3f5c4c]">
              The world our children are growing up in is changing faster than at any other time in history.
            </motion.p>
          </div>
        </motion.div>
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.85 }} className="absolute bottom-7 right-6 z-20 hidden w-[23rem] rounded-[1.5rem] border border-white/25 bg-[#123526]/75 p-6 text-white shadow-[0_25px_80px_rgba(8,29,19,0.28)] backdrop-blur-xl md:block lg:right-16 xl:right-24">
          <p className="font-serif text-2xl italic leading-8">But because children deserve an education designed for the life ahead.</p>
        </motion.div>
      </section>

      <section className="vision-future-section relative overflow-hidden px-6 py-28 sm:px-10 lg:px-16 lg:py-40 xl:px-24">
        <div className="vision-future-glow pointer-events-none absolute -right-40 top-4 h-[36rem] w-[36rem] rounded-full" />
        <div className="relative mx-auto grid max-w-[96rem] gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24">
          <Reveal className="relative">
            <Kicker>WHY ANOTHER SCHOOL?</Kicker>
            <h2 className="mt-8 max-w-lg text-5xl font-medium leading-[1.02] tracking-[-0.05em] sm:text-7xl">The world our children are growing up in is changing faster than at any other time in history.</h2>
            <div className="mt-10 flex items-center gap-3 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-[#769572]">
              <span className="relative flex h-3 w-3"><span className="absolute inset-0 animate-ping rounded-full bg-[#78a671]/40" /><span className="relative m-auto h-1.5 w-1.5 rounded-full bg-[#6e9e68]" /></span>
              The world is already moving
            </div>
          </Reveal>
          <Reveal delay={0.08} className="lg:pt-4">
            <div className="vision-signal-map relative space-y-3">
              {futureSignals.map((signal, index) => (
                <motion.article
                  key={signal.label}
                  whileHover={reduceMotion ? undefined : { x: 10, scale: 1.012 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="vision-signal-card group relative flex items-center gap-5 overflow-hidden rounded-[1.35rem] border border-[#d5e3d1] bg-white/75 p-4 shadow-[0_18px_55px_rgba(37,74,49,0.06)] backdrop-blur-md sm:p-5"
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#cbdcc7] bg-[#edf4ea] text-[#557f51] transition-colors duration-300 group-hover:bg-[#173b2a] group-hover:text-white">
                    <FutureSignalIcon type={signal.icon} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#789774]">Signal 0{index + 1}</span>
                    <span className="mt-1 block text-xl font-medium tracking-[-0.025em] text-[#234533] sm:text-2xl">{signal.label}</span>
                    <span className="mt-0.5 block text-sm text-[#647b6d]">{signal.detail}</span>
                  </span>
                  <span className="hidden h-9 w-9 items-center justify-center rounded-full border border-[#d7e4d3] text-lg text-[#6f946a] transition-all duration-300 group-hover:rotate-45 group-hover:border-[#70976b] sm:flex">↗</span>
                </motion.article>
              ))}
            </div>
            <p className="mt-9 max-w-2xl border-l border-[#86aa7f] pl-7 text-lg leading-8 text-[#5a7264]">Yet when many parents think about education, they are often left with the same questions:</p>
          </Reveal>
        </div>
        <div className="relative mx-auto mt-24 max-w-[96rem] lg:mt-32">
          <Reveal className="mb-10 flex flex-col justify-between gap-5 border-b border-[#cbdcc7] pb-6 sm:flex-row sm:items-end">
            <div><p className="text-[0.62rem] font-bold uppercase tracking-[0.24em] text-[#71966d]">The questions that stay</p><p className="mt-2 font-serif text-3xl italic text-[#31513f]">Beyond every changing trend.</p></div>
            <p className="max-w-xs text-sm leading-6 text-[#61786a]">Move across each question to explore the concerns that shaped our school.</p>
          </Reveal>
          <div className="vision-question-deck relative grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            <div className="vision-question-thread pointer-events-none absolute left-[4%] right-[4%] top-1/2 hidden h-px lg:block" />
            {parentQuestions.map((question, index) => <QuestionCard key={question} question={question} index={index} />)}
          </div>
        </div>
        <Reveal className="relative mx-auto mt-28 max-w-5xl rounded-[2.2rem] bg-[#173b2a] p-8 text-center text-white shadow-[0_40px_120px_rgba(22,59,42,0.2)] sm:p-14 lg:p-20">
          <div className="vision-grid absolute inset-0 opacity-30" />
          <div className="relative">
            <p className="text-lg text-white/60">These questions led us to ask a question of our own.</p>
            <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-light leading-tight tracking-[-0.04em] sm:text-6xl">Is school preparing children for the world they will actually inherit?</h2>
            <div className="mx-auto my-10 h-px max-w-sm bg-gradient-to-r from-transparent via-[#91ba88] to-transparent" />
            <p className="text-xl text-white/75">That question became the beginning of DPS.</p>
            <p className="mt-3 font-serif text-3xl italic text-[#add1a5]">Not because the world needs another school.</p>
            <p className="mt-2 font-serif text-3xl italic text-white">But because children deserve an education designed for the life ahead.</p>
          </div>
        </Reveal>
      </section>

      <section className="relative overflow-hidden bg-[#153a29] px-6 py-28 text-white sm:px-10 lg:px-16 lg:py-44 xl:px-24">
        <div className="vision-grid absolute inset-0 opacity-35" />
        <div className="relative mx-auto grid max-w-[96rem] items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-28">
          <Reveal className="relative">
            <div className="vision-belief-orbit pointer-events-none absolute -inset-10 hidden rounded-full border border-[#91b989]/20 lg:block"><span className="vision-belief-node vision-belief-node-1">When they feel safe.</span><span className="vision-belief-node vision-belief-node-2">When they feel seen.</span><span className="vision-belief-node vision-belief-node-3">When they know they belong.</span></div>
            <div className="group relative aspect-[4/4.5] overflow-hidden rounded-[2rem] shadow-[0_50px_130px_rgba(0,0,0,0.35)]">
              <Image src="/images/vision/we-see-children.png" alt="A teacher listening to a child" fill sizes="(max-width:1024px) 100vw, 52vw" className="object-cover transition-transform duration-[1600ms] group-hover:scale-[1.035]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b2618]/70 via-transparent to-transparent" /><div className="vision-image-sweep absolute inset-y-0 -left-1/2 w-1/3 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <p className="absolute bottom-8 left-8 font-serif text-4xl italic">We believe every child is unique.</p>
            </div>
          </Reveal>
          <div>
            <Reveal><Kicker light>WHAT WE BELIEVE</Kicker><div className="mt-9 space-y-3 text-3xl font-light leading-tight tracking-[-0.03em] sm:text-4xl"><p>Not every child learns in the same way.</p><p>Not every child grows at the same pace.</p><p>Not every child dreams the same dream.</p></div></Reveal>
            <Reveal delay={0.1} className="mt-10 border-l border-[#81ac79] pl-7"><p className="text-lg leading-8 text-white/65">Education should never be about fitting children into a system.</p><p className="mt-4 text-2xl leading-9 text-[#eef7eb]">It should be about helping children discover their strengths, develop their character, and find their place in the world.</p></Reveal>
            <Reveal delay={0.18} className="mt-12"><p className="text-lg text-white/65">We believe children flourish when they feel safe.</p><div className="mt-5 flex flex-wrap gap-3">{['When they feel seen.', 'When they feel challenged.', 'When they feel encouraged.', 'When they know they belong.'].map((item) => <motion.span whileHover={reduceMotion ? undefined : { y: -5 }} key={item} className="rounded-full border border-white/15 bg-white/[0.07] px-5 py-3 text-sm text-white/75 backdrop-blur">{item}</motion.span>)}</div></Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#edf4ea] py-28 lg:py-44">
        <div className="mx-auto max-w-[96rem] px-6 text-center sm:px-10 lg:px-16 xl:px-24"><Reveal><Kicker>THE FUTURE WE ARE PREPARING FOR</Kicker><h2 className="mx-auto mt-8 max-w-5xl text-5xl font-medium leading-[1.03] tracking-[-0.055em] sm:text-7xl">No one can predict exactly what the future will look like.</h2><p className="mt-8 font-serif text-3xl italic text-[#6b9866]">But we do know this:</p><p className="mt-4 text-2xl text-[#365642]">Children will need more than knowledge.</p></Reveal>
          <Reveal className="relative mx-auto mt-20 hidden h-[34rem] max-w-5xl items-center justify-center lg:flex">
            <div className="vision-capability-radar absolute h-[30rem] w-[30rem] rounded-full border border-[#bdd4b8]"><span className="absolute inset-[16%] rounded-full border border-[#c9ddc5]" /><span className="absolute inset-[33%] rounded-full border border-[#d6e5d2]" /></div>
            <div className="relative z-10 flex h-44 w-44 items-center justify-center rounded-full bg-[#153b2a] p-7 font-serif text-xl italic text-white shadow-[0_25px_80px_rgba(25,65,43,0.25)]">Children will need more than knowledge.</div>
            {futureQualities.map((quality, index) => <motion.div key={quality} initial={reduceMotion ? false : { opacity: 0, scale: 0.65 }} whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1, type: 'spring' }} whileHover={reduceMotion ? undefined : { scale: 1.12 }} className={`vision-capability-node vision-capability-node-${index + 1}`}><span className="h-2 w-2 rounded-full bg-[#78a671] shadow-[0_0_14px_#78a671]" />{quality}</motion.div>)}
          </Reveal>
        </div>
        <div className="mt-16 overflow-hidden border-y border-[#cedeca] bg-white/60 py-7 lg:mt-4"><div className="vision-marquee flex w-max items-center gap-10 whitespace-nowrap pr-10">{[...futureQualities, ...futureQualities].map((item, index) => <div key={`${item}-${index}`} className="flex items-center gap-10"><span className="font-serif text-5xl italic text-[#2b4a3a]">{item}</span><span className="h-2 w-2 rounded-full bg-[#82ad79]" /></div>)}</div></div>
        <div className="mx-auto mt-16 grid max-w-[96rem] gap-6 px-6 sm:px-10 lg:grid-cols-2 lg:px-16 xl:px-24">
          <Reveal className="rounded-[1.8rem] border border-[#d4e3d0] bg-white p-9 shadow-[0_30px_80px_rgba(42,78,55,0.07)] sm:p-12"><p className="text-2xl leading-9 text-[#294939]">The ability to learn continuously and contribute meaningfully.</p><p className="mt-14 text-4xl font-light tracking-[-0.04em]">Academic excellence will always matter.</p></Reveal>
          <Reveal delay={0.08} className="rounded-[1.8rem] bg-[#6b9d63] p-9 text-white shadow-[0_35px_90px_rgba(72,119,67,0.22)] sm:p-12"><p className="text-2xl leading-9 text-white/75">But in the years ahead, character may matter even more.</p><p className="mt-14 text-4xl font-light tracking-[-0.04em]">Our responsibility is not simply to prepare children for examinations.</p><p className="mt-4 font-serif text-3xl italic">It is to prepare them for life.</p></Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-6 py-28 sm:px-10 lg:px-16 lg:py-44 xl:px-24">
        <div className="mx-auto max-w-[96rem]">
          <Reveal className="text-center"><Kicker>THE DPS COMMITMENT</Kicker><h2 className="mx-auto mt-8 max-w-4xl text-5xl font-medium leading-tight tracking-[-0.05em] sm:text-7xl">Every decision we make begins with one question:</h2><p className="mt-8 font-serif text-4xl italic text-[#6b9a66] sm:text-6xl">&quot;What is best for children?&quot;</p></Reveal>
          <div className="vision-commitment-flow relative mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{['This commitment shapes our classrooms.', 'It shapes our relationships.', 'It shapes our campus.', 'It shapes our culture.', 'It shapes the opportunities we create.', 'And it shapes the expectations we set for ourselves every single day.'].map((item, index) => <NumberCard key={item} text={item} index={index} />)}</div>
          <Reveal className="mx-auto mt-20 max-w-5xl rounded-[2rem] bg-[#153a29] p-10 text-center text-white sm:p-16"><p className="text-2xl text-white/65">Because schools do not change lives through buildings.</p><p className="mt-5 text-4xl font-light leading-tight tracking-[-0.04em] sm:text-5xl">Schools change lives through people, experiences, and relationships.</p></Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#edf4ea] px-6 py-28 sm:px-10 lg:px-16 lg:py-44 xl:px-24">
        <span className="pointer-events-none absolute -left-12 top-5 select-none font-serif text-[14rem] italic leading-none text-[#b7ceb1] opacity-80 mix-blend-multiply">School</span>
        <div className="relative mx-auto grid max-w-[96rem] gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-24">
          <div><Reveal><Kicker>THE SCHOOL EXPERIENCE WE ENVISION</Kicker><div className="mt-10 space-y-4">{experience.map((item, index) => <motion.div key={item} initial={reduceMotion ? false : { opacity: 0, x: -30 }} whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} whileHover={reduceMotion ? undefined : { x: 12 }} className="flex items-start gap-4 border-b border-[#cfdfcb] pb-4 text-lg leading-7"><span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-[0.58rem] font-bold text-[#72976d]">0{index + 1}</span>{item}</motion.div>)}</div></Reveal></div>
          <motion.div initial={reduceMotion ? false : { opacity: 0, clipPath: 'inset(12% 12% 12% 12% round 2rem)', scale: 0.94 }} whileInView={reduceMotion ? undefined : { opacity: 1, clipPath: 'inset(0% 0% 0% 0% round 2rem)', scale: 1 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} className="relative">
            <div className="group relative aspect-[16/12] overflow-hidden rounded-[2rem] shadow-[0_45px_120px_rgba(35,70,49,0.16)]"><Image src="/images/vision/happy-arrival.png" alt="Children arriving at school" fill sizes="(max-width:1024px) 100vw, 58vw" className="object-cover transition-transform duration-[1500ms] group-hover:scale-[1.035]" /><div className="absolute inset-0 bg-gradient-to-t from-[#102c20]/35 to-transparent" /></div>
            <motion.p animate={reduceMotion ? undefined : { y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="absolute -left-8 top-12 hidden rounded-[1.3rem] border border-white bg-white/85 p-6 font-serif text-2xl italic shadow-[0_25px_70px_rgba(35,70,49,0.15)] backdrop-blur-xl sm:block">A school where every child is known.</motion.p>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#153a29] px-6 py-28 text-white sm:px-10 lg:px-16 lg:py-44 xl:px-24">
        <div className="vision-rings absolute left-1/2 top-1/2 h-[60rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />
        <div className="relative mx-auto grid max-w-[96rem] gap-6 lg:grid-cols-2">
          <Reveal className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-9 backdrop-blur sm:p-14"><Kicker light>OUR VISION</Kicker><p className="mt-12 text-3xl font-light leading-[1.4] tracking-[-0.035em] sm:text-4xl">To create a learning community that inspires children to grow into thoughtful learners, compassionate human beings, confident leaders, and responsible citizens who contribute positively to the world around them.</p></Reveal>
          <Reveal delay={0.08} className="rounded-[2rem] border border-[#8ab282]/30 bg-[#6b9d63] p-9 shadow-[0_35px_90px_rgba(0,0,0,0.18)] sm:p-14"><Kicker light>OUR MISSION</Kicker><p className="mt-12 text-3xl font-light leading-[1.4] tracking-[-0.035em] sm:text-4xl">To provide an engaging, future-focused, and values-driven education that nurtures academic excellence, character, wellbeing, creativity, and a lifelong love for learning.</p></Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-6 py-28 sm:px-10 lg:px-16 lg:py-44 xl:px-24">
        <div className="mx-auto max-w-[96rem]"><Reveal className="mx-auto max-w-4xl text-center"><Kicker>FOR EVERY FAMILY WHO JOINS US</Kicker><h2 className="mt-9 text-4xl font-medium leading-tight tracking-[-0.045em] sm:text-6xl">When parents entrust us with their child, they are placing something precious in our care.</h2><p className="mt-7 font-serif text-3xl italic text-[#6b9966]">We never forget that.</p><p className="mt-4 text-xl text-[#506a5a]">Our promise is simple.</p></Reveal>
          <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{['We will know your child.', 'We will challenge your child.', 'We will support your child.', 'We will celebrate your child.'].map((item, index) => <NumberCard key={item} text={item} index={index} />)}</div>
          <Reveal className="mx-auto mt-20 max-w-4xl text-center"><p className="text-3xl font-light leading-[1.4] tracking-[-0.03em]">And together, we will help them become the very best version of themselves.</p><p className="mt-20 text-[0.64rem] font-bold uppercase tracking-[0.28em] text-[#71956d]">Closing Statement</p><div className="mt-8 space-y-2 font-serif text-4xl italic text-[#31513f] sm:text-6xl"><p>Because childhood matters.</p><p>Because character matters.</p><p>Because the future matters.</p><p>And most importantly,</p><p className="text-[#6c9d66]">because every child matters.</p></div></Reveal>
        </div>
      </section>

      <section className="relative flex min-h-[85svh] items-center overflow-hidden bg-[#e5eee1] px-6 py-32 sm:px-10 lg:px-16 xl:px-24">
        <div className="absolute inset-0"><Image src="/images/vision/possibility-city.png" alt="A child looking toward the future" fill sizes="100vw" className="object-cover object-[65%_center] opacity-35" /><div className="absolute inset-0 bg-[linear-gradient(90deg,#eaf2e6_0%,rgba(234,242,230,0.95)_40%,rgba(234,242,230,0.25)_100%)]" /></div>
        <Reveal className="relative mx-auto w-full max-w-[96rem]"><Kicker>THE FOUNDING STORY · HERO SECTION · Headline</Kicker><h2 className="mt-9 max-w-5xl text-6xl font-medium leading-[0.95] tracking-[-0.065em] sm:text-8xl lg:text-9xl">Building the School We Wish Existed.</h2><p className="mt-12 text-[0.64rem] font-bold uppercase tracking-[0.28em] text-[#71956d]">Subheading</p><div className="mt-6 max-w-2xl space-y-2 text-xl leading-8 text-[#405d4c]"><p>Every school begins with a building.</p><p>Some begin with a curriculum.</p><p>A few begin with a question.</p><p>DPS began with a question:</p></div><p className="mt-7 max-w-3xl font-serif text-3xl italic leading-tight text-[#547a53] sm:text-4xl">What kind of education do children truly need to flourish in the world they will inherit?</p><p className="mt-7 text-lg">That question became the foundation of everything that followed.</p></Reveal>
      </section>

      <section className="bg-[#153a29] px-6 py-28 text-white sm:px-10 lg:px-16 lg:py-44 xl:px-24"><div className="mx-auto max-w-[96rem]"><Reveal><Kicker light>WHY WE STARTED</Kicker><h2 className="mt-8 text-5xl font-medium tracking-[-0.05em] sm:text-7xl">Education Is Changing. Childhood Is Changing.</h2><div className="mt-10 grid gap-5 text-xl leading-8 text-white/65 lg:grid-cols-2"><p>The world our children are growing up in looks very different from the one many of us experienced.</p><div><p>Technology is reshaping daily life.</p><p>New careers are emerging.</p><p>Information is everywhere.</p><p>The pace of change continues to accelerate.</p></div></div><p className="mt-12 text-2xl">Yet many of the questions parents ask remain timeless.</p></Reveal><div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">{foundingQuestions.map((item, index) => <NumberCard key={item} text={item} index={index} dark />)}</div><Reveal className="mt-16 border-l border-[#87b17f] pl-8"><p className="max-w-4xl text-3xl font-light leading-[1.4]">We realised that the schools children need tomorrow may not look exactly like the schools we knew yesterday.</p><p className="mt-5 font-serif text-3xl italic text-[#a7cca0]">That realisation became the starting point of DPS.</p></Reveal></div></section>

      <section className="bg-[#f2f6ef] px-6 py-28 sm:px-10 lg:px-16 lg:py-44 xl:px-24"><div className="mx-auto max-w-[96rem]"><Reveal><Kicker>THE SCHOOL WE ENVISIONED</Kicker><h2 className="mt-8 text-5xl font-medium tracking-[-0.05em] sm:text-7xl">More Than Academic Success</h2><div className="mt-8 max-w-4xl text-xl leading-8 text-[#526b5c]"><p>We did not set out to create a school focused only on examination results.</p><p>Nor did we want a school that simply followed educational trends.</p><p className="mt-5 text-2xl text-[#274736]">We envisioned a school that would balance:</p></div></Reveal><div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{balance.map((item, index) => <NumberCard key={item} text={item} index={index} />)}</div><Reveal className="mt-16 text-center font-serif text-4xl italic text-[#4f7851]"><p>Because success without character is incomplete.</p><p>And knowledge without wisdom is not enough.</p></Reveal></div></section>

      <section className="relative overflow-hidden bg-white px-6 py-28 sm:px-10 lg:px-16 lg:py-44 xl:px-24"><span className="absolute -right-12 top-0 text-[20rem] font-semibold leading-none text-[#eff5ed]">01</span><div className="relative mx-auto grid max-w-[96rem] gap-16 lg:grid-cols-2 lg:gap-28"><Reveal><Kicker>STARTING WITH A BLANK SHEET</Kicker><h2 className="mt-8 text-6xl font-medium tracking-[-0.055em]">A Rare Opportunity</h2><p className="mt-8 text-xl leading-8 text-[#536c5d]">Most schools spend years trying to change existing systems.</p><p className="mt-3 text-2xl text-[#294938]">As a founding school, we were given a rare opportunity.</p></Reveal><Reveal delay={0.08} className="space-y-4 text-3xl font-light leading-tight"><p>To begin with intention.</p><p>To ask difficult questions.</p><p>To challenge assumptions.</p><p>To carefully design learning experiences, environments, programmes, and partnerships around the needs of children.</p><div className="mt-10 rounded-[1.5rem] bg-[#eaf2e7] p-8"><p className="text-lg text-[#57705f]">Every decision began with a simple question:</p><p className="mt-3 font-serif text-4xl italic text-[#679363]">What is best for children?</p></div></Reveal></div></section>

      <section className="relative overflow-hidden bg-[#e9f1e6] px-6 py-28 sm:px-10 lg:px-16 lg:py-44 xl:px-24"><div className="mx-auto max-w-[96rem]"><Reveal className="text-center"><Kicker>THE CHILD AT THE CENTRE</Kicker><h2 className="mt-8 text-6xl font-medium tracking-[-0.055em]">Every Decision Begins Here</h2><div className="mt-8 flex flex-wrap justify-center gap-3 text-xl">{['Buildings matter.', 'Curriculum matters.', 'Technology matters.'].map((item) => <span key={item} className="rounded-full border border-[#c9dbc5] bg-white px-6 py-3">{item}</span>)}</div><p className="mt-7 font-serif text-5xl italic text-[#669261]">But children matter most.</p><p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-[#4f6959]">At DPS, the child remains at the centre of every decision we make.</p></Reveal><div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{['How will this support learning?', 'How will this support wellbeing?', 'How will this help children discover their strengths?', 'How will this prepare them for life?'].map((item, index) => <NumberCard key={item} text={item} index={index} />)}</div><Reveal className="mt-14 text-center text-xl">These questions continue to guide us.</Reveal></div></section>

      <section className="bg-[#153a29] px-6 py-28 text-white sm:px-10 lg:px-16 lg:py-44 xl:px-24"><div className="mx-auto max-w-[96rem]"><Reveal className="text-center"><Kicker light>LOOKING AHEAD, NOT JUST AROUND</Kicker><h2 className="mt-8 text-6xl font-medium tracking-[-0.055em]">Preparing For The Future</h2><p className="mt-8 text-2xl text-white/60">The future cannot be predicted.</p><p className="mt-3 font-serif text-4xl italic text-[#abd0a3]">But children can be prepared.</p><p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/65">That is why we have built our vision around the qualities we believe will matter most:</p></Reveal><div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{lookingAhead.map((item, index) => <NumberCard key={item} text={item} index={index} dark />)}</div><Reveal className="mt-14 text-center text-xl text-white/70">These qualities will remain valuable regardless of how the world changes.</Reveal></div></section>

      <section className="bg-white px-6 py-28 sm:px-10 lg:px-16 lg:py-44 xl:px-24"><div className="mx-auto grid max-w-[96rem] gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-28"><Reveal><Kicker>THE KIND OF INSTITUTION WE HOPE TO BUILD</Kicker><h2 className="mt-8 text-6xl font-medium tracking-[-0.055em]">Thinking Beyond The Present</h2></Reveal><Reveal delay={0.08} className="text-2xl font-light leading-[1.5] text-[#355442]"><p>Schools are run year by year.</p><p>Institutions are built decade by decade.</p><p className="mt-7">Our commitment is not only to the children who join us today.</p><p>It is also to the generations of children who will learn here in the years to come.</p><p className="mt-7 border-l border-[#7da277] pl-7 text-3xl text-[#234533]">We aspire to build an institution known not only for academic excellence, but for integrity, purpose, innovation, and a deep commitment to children.</p></Reveal></div></section>

      <section className="bg-[#edf4ea] px-6 py-28 sm:px-10 lg:px-16 lg:py-44 xl:px-24"><div className="mx-auto max-w-[96rem]"><Reveal className="text-center"><Kicker>OUR COMMITMENT TO FAMILIES</Kicker><h2 className="mt-8 text-6xl font-medium tracking-[-0.055em]">A Promise We Take Seriously</h2><p className="mt-8 text-2xl text-[#536d5c]">When families choose a school, they place something precious in its care.</p><div className="mt-7 flex justify-center gap-4 font-serif text-5xl italic text-[#64905f]"><span>Trust.</span><span>Hope.</span><span>Possibility.</span></div><p className="mt-8 text-xl">We do not take that responsibility lightly.</p><p className="mt-3 text-xl">Our commitment is to create a school where children are:</p></Reveal><div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{['Known.', 'Valued.', 'Challenged.', 'Supported.', 'Inspired.', 'And encouraged to become the very best version of themselves.'].map((item, index) => <NumberCard key={item} text={item} index={index} />)}</div></div></section>

      <section className="relative overflow-hidden bg-[#143627] px-6 py-32 text-center text-white sm:px-10 lg:px-16 lg:py-48 xl:px-24"><div className="vision-rings absolute left-1/2 top-1/2 h-[60rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" /><Reveal className="relative mx-auto max-w-5xl"><Kicker light>THIS IS ONLY THE BEGINNING</Kicker><div className="mt-10 space-y-2 text-5xl font-light tracking-[-0.045em] sm:text-7xl"><p>Every great institution begins as an idea.</p><p>Then a vision.</p><p>Then a community.</p><p className="font-serif italic text-[#a9d0a1]">Then a legacy.</p></div><p className="mt-12 text-xl text-white/65">We are at the beginning of that journey.</p><p className="mt-3 text-xl text-white/65">And we invite families to help shape the story that follows.</p><div className="mx-auto my-14 h-px max-w-sm bg-gradient-to-r from-transparent via-[#8db584] to-transparent" /><p className="text-[0.64rem] font-bold uppercase tracking-[0.28em] text-[#a1c799]">Closing Statement</p><p className="mt-8 text-3xl font-light leading-[1.45] sm:text-5xl">We are not simply building a school.</p><p className="mt-4 font-serif text-4xl italic leading-[1.4] text-[#afd3a7] sm:text-6xl">We are building a place where children can discover who they are, who they can become, and how they can contribute to the world around them.</p></Reveal></section>
    </main>
  )
}
