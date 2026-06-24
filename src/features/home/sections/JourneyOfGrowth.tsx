'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import {
  motion,
  useScroll,
  useReducedMotion,
  useSpring,
  useTransform,
  type Variants,
} from 'framer-motion'

const stages = [
  {
    step: '01',
    label: 'Nursery',
    years: 'Ages 3-5',
    title: 'Confidence before curriculum',
    desc: 'Children begin with play, rhythm, language, movement, and emotional safety.',
    signal: 'Wonder',
    metric: '8:1 care clusters',
    image: '/images/early-years.png',
    parent: 'A gentle first step where school feels safe, joyful, and familiar.',
    chips: ['Play rhythm', 'Language bloom', 'Emotional safety'],
  },
  {
    step: '02',
    label: 'Primary',
    years: 'Classes 1-5',
    title: 'Strong basics, curious minds',
    desc: 'Reading, numeracy, expression, art, sport, and inquiry become daily habits.',
    signal: 'Foundation',
    metric: 'Daily skill loops',
    image: '/images/primary-school.png',
    parent: 'Parents begin seeing habits, confidence, and academic foundations grow together.',
    chips: ['Reading habits', 'Number sense', 'Creative expression'],
  },
  {
    step: '03',
    label: 'Middle School',
    years: 'Classes 6-8',
    title: 'Discovery with depth',
    desc: 'Labs, clubs, projects, debate, coding, and mentoring help each child find strengths.',
    signal: 'Exploration',
    metric: '30+ discovery paths',
    image: '/images/middle-school.png',
    parent: 'Children explore more, while mentors help them make sense of choices early.',
    chips: ['Labs', 'Clubs', 'Projects'],
  },
  {
    step: '04',
    label: 'Senior Secondary',
    years: 'Classes 9-12',
    title: 'Leadership and exam readiness',
    desc: 'Board excellence meets research, portfolio building, leadership, and career mapping.',
    signal: 'Direction',
    metric: 'Personal roadmap',
    image: '/images/learning-that-matters.png',
    parent: 'The journey becomes sharper: performance, mentoring, identity, and future planning.',
    chips: ['Portfolio', 'Mentoring', 'Board readiness'],
  },
  {
    step: '05',
    label: 'University Placements',
    years: 'Beyond school',
    title: 'A future planned early',
    desc: 'Counselling, profile strategy, internships, and admissions support the next leap.',
    signal: 'Launch',
    metric: 'Global options',
    image: '/images/child-journey-grade12-ai.png',
    parent: 'Families see a child prepared for university, life, and the world beyond school.',
    chips: ['Admissions', 'Profiles', 'Global choices'],
  },
]

const parentSignals = [
  'Emotional safety',
  'Academic confidence',
  'Mentor visibility',
  'Future pathways',
]

const cardVariants: Variants = {
  hidden: (alignLeft: boolean) => ({
    opacity: 0,
    x: alignLeft ? -44 : 44,
    y: 46,
    rotateX: 6,
    rotateZ: alignLeft ? -2 : 2,
    scale: 0.96,
  }),
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    rotateX: 0,
    rotateZ: 0,
    scale: 1,
    transition: {
      duration: 1.05,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.06,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.64, ease: [0.22, 1, 0.36, 1] },
  },
}

export function JourneyOfGrowth() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs = useRef<Array<HTMLDivElement | null>>([])
  const reduceMotion = useReducedMotion()
  const [activeStage, setActiveStage] = useState(0)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 72%', 'end 38%'],
  })
  const pathProgress = useSpring(scrollYProgress, {
    stiffness: 38,
    damping: 24,
    mass: 0.62,
  })
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 30,
    damping: 30,
    mass: 0.8,
  })
  const headerY = useTransform(smoothProgress, [0, 0.28], [0, -18])
  const headerOpacity = useTransform(smoothProgress, [0, 0.28], [1, 0.92])
  const ambientX = useTransform(smoothProgress, [0, 1], ['-16%', '18%'])
  const previewY = useTransform(smoothProgress, [0, 0.35], [24, -18])
  const previewScale = useTransform(smoothProgress, [0, 0.35], [1.04, 1])

  const jumpToStage = (index: number) => {
    const card = cardRefs.current[index]

    if (!card) {
      return
    }

    setActiveStage(index)
    card.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <section
      ref={sectionRef}
      id="growth-journey"
      className="relative overflow-hidden bg-[#f7f1e6] py-24 text-[#12100a] sm:py-28 lg:py-36"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_8%,rgba(255,198,41,0.34),transparent_28%),radial-gradient(circle_at_88%_28%,rgba(23,35,58,0.12),transparent_34%),linear-gradient(115deg,#fff8eb_0%,#f3eadc_48%,#e8e4d8_100%)]" />
      <motion.div
        aria-hidden="true"
        style={{ x: reduceMotion ? undefined : ambientX }}
        className="absolute top-0 z-10 h-full w-1/4 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.28),transparent)] blur-xl"
      />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#4b2c31]/18 to-transparent" />

      <div className="relative z-20 mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          className="grid gap-8 lg:grid-cols-[0.62fr_0.38fr] lg:items-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm font-black uppercase tracking-[0.34em] text-[#b9862f]">
              Interactive child journey
            </p>
            <h2 className="mt-5 max-w-4xl font-serif text-[clamp(2.9rem,5.7vw,6.2rem)] leading-[0.92] text-[#17233a]">
              A journey from first steps to future choices.
            </h2>
            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-[#5c523f]">
              Parents do not just see classes. They see care, foundation, discovery,
              leadership, and placement readiness growing stage by stage.
            </p>
          </motion.div>

          <motion.div
            style={{ y: reduceMotion ? undefined : previewY, scale: reduceMotion ? undefined : previewScale }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="relative min-h-[25rem] overflow-hidden rounded-[1.8rem] border border-white/70 bg-[#17233a] shadow-[0_34px_90px_rgba(23,35,58,0.16)]"
          >
            <Image
              src="/images/journey-of-growth.png"
              alt="Children progressing through a complete school journey"
              fill
              priority
              sizes="(min-width: 1024px) 34vw, 92vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,35,58,0.06)_0%,rgba(18,16,10,0.74)_100%)]" />
            <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-2">
              {[
                ['05 stages', 'Nursery to placements'],
                ['Clear signals', 'What parents can track'],
              ].map(([label, text]) => (
                <div key={label} className="rounded-2xl border border-white/16 bg-white/12 p-4 text-white shadow-xl backdrop-blur-md">
                  <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-[#f5d28a]">{label}</p>
                  <p className="mt-2 text-lg font-black leading-tight">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <div className="sticky top-4 z-30 mt-10 rounded-full border border-black/10 bg-white/78 p-2 shadow-[0_28px_90px_rgba(23,35,58,0.12)] backdrop-blur-xl">
          <div className="flex gap-1 overflow-x-auto">
            {stages.map((stage, index) => (
              <button
                key={stage.label}
                type="button"
                onClick={() => jumpToStage(index)}
                className={`min-w-fit rounded-full px-4 py-3 text-xs font-black uppercase tracking-[0.16em] transition sm:px-6 sm:text-sm ${
                  activeStage === index
                    ? 'bg-[#ffc629] text-black shadow-[0_16px_34px_rgba(185,134,47,0.24)]'
                    : 'text-black/48 hover:bg-black/5 hover:text-black'
                }`}
              >
                {stage.label}
              </button>
            ))}
          </div>
        </div>

        <div className="relative mt-16 lg:mt-24">
          <svg
            aria-hidden="true"
            viewBox="0 0 1000 1880"
            className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-[76%] -translate-x-1/2 lg:block"
            preserveAspectRatio="none"
          >
            <path
              d="M505 18 C170 202 185 430 515 540 C855 655 828 895 496 986 C160 1082 196 1325 525 1424 C830 1517 824 1702 505 1858"
              fill="none"
              stroke="rgba(18,16,10,0.12)"
              strokeLinecap="round"
              strokeWidth="38"
            />
            <motion.path
              d="M505 18 C170 202 185 430 515 540 C855 655 828 895 496 986 C160 1082 196 1325 525 1424 C830 1517 824 1702 505 1858"
              fill="none"
              pathLength={pathProgress}
              stroke="#ffc629"
              strokeLinecap="round"
              strokeWidth="14"
              style={{ filter: 'drop-shadow(0 0 18px rgba(255,198,41,0.5))' }}
            />
          </svg>

          <motion.div
            animate={{ y: [-9, 9, -9], rotate: [-2, 2, -2] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-1/2 top-6 z-20 hidden h-24 w-24 -translate-x-1/2 place-items-center rounded-full bg-[#12100a] text-[#ffc629] shadow-[0_30px_70px_rgba(0,0,0,0.28)] lg:grid"
          >
            <span className="text-xs font-black uppercase tracking-[0.18em]">
              Future
            </span>
          </motion.div>

          <div className="space-y-14 lg:space-y-32">
            {stages.map((stage, index) => (
              <StageRow
                key={stage.label}
                activeStage={activeStage}
                index={index}
                onEnter={() => setActiveStage(index)}
                onJump={() => jumpToStage(index)}
                reduceMotion={reduceMotion}
                setCardRef={(node) => {
                  cardRefs.current[index] = node
                }}
                stage={stage}
              />
            ))}
          </div>
        </div>

        <ParentConfidence reduceMotion={reduceMotion} />
      </div>
    </section>
  )
}

function StageRow({
  activeStage,
  index,
  onEnter,
  onJump,
  reduceMotion,
  setCardRef,
  stage,
}: {
  activeStage: number
  index: number
  onEnter: () => void
  onJump: () => void
  reduceMotion: boolean | null
  setCardRef: (node: HTMLDivElement | null) => void
  stage: (typeof stages)[number]
}) {
  const rowRef = useRef<HTMLDivElement>(null)
  const alignLeft = index % 2 === 0
  const isActive = activeStage === index
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ['start 86%', 'end 18%'],
  })
  const smoothRowProgress = useSpring(scrollYProgress, {
    stiffness: 28,
    damping: 30,
    mass: 0.78,
  })
  const cardLift = useTransform(smoothRowProgress, [0, 0.5, 1], [14, 0, -10])
  const imageY = useTransform(smoothRowProgress, [0, 1], ['-3%', '3%'])
  const imageScale = useTransform(smoothRowProgress, [0, 0.5, 1], [1.04, 1.01, 1.03])
  const haloOpacity = useTransform(smoothRowProgress, [0, 0.35, 0.86], [0, 0.52, 0.18])
  const chipX = useTransform(smoothRowProgress, [0, 1], [alignLeft ? 5 : -5, alignLeft ? -4 : 4])
  const sheenX = useTransform(smoothRowProgress, [0, 1], ['-80%', '120%'])

  return (
    <div
      ref={rowRef}
      className={`relative grid gap-6 lg:grid-cols-[1fr_128px_1fr] lg:items-center ${
        alignLeft ? '' : 'lg:[&>*:first-child]:col-start-3'
      }`}
    >
      <motion.div
        ref={setCardRef}
        custom={alignLeft}
        variants={cardVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.42, margin: '-12% 0px -12% 0px' }}
        onViewportEnter={onEnter}
        style={{ y: reduceMotion ? undefined : cardLift }}
        className={`motion-card relative overflow-hidden rounded-[1.65rem] border border-black/10 bg-white/82 p-5 shadow-[0_34px_110px_rgba(23,35,58,0.13)] backdrop-blur-xl will-change-transform sm:p-7 lg:p-8 ${
          alignLeft ? 'lg:col-start-1' : 'lg:col-start-3'
        }`}
      >
        <motion.div
          aria-hidden="true"
          style={{ opacity: reduceMotion ? undefined : haloOpacity }}
          className="absolute -right-14 -top-16 h-52 w-52 rounded-full bg-[#ffc629]/28 blur-2xl"
        />
        <motion.div
          aria-hidden="true"
          style={{ x: reduceMotion ? undefined : sheenX }}
          className="absolute inset-y-0 z-10 w-1/3 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.42),transparent)] opacity-35"
        />
        <div className="absolute inset-x-0 top-0 h-1.5 bg-[#ffc629]" />

        <motion.div variants={itemVariants} className="relative flex items-start justify-between gap-5">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#b9862f]">
              {stage.years}
            </p>
            <h3 className="mt-3 text-[clamp(2.25rem,4vw,4.3rem)] font-black leading-[0.94]">
              {stage.label}
            </h3>
          </div>
          <motion.span
            animate={isActive ? { scale: [1, 1.12, 1] } : { scale: 1 }}
            transition={{ duration: 1.2, repeat: isActive ? Infinity : 0, ease: 'easeInOut' }}
            className="rounded-full bg-[#12100a] px-5 py-3 text-sm font-black text-[#ffc629]"
          >
            {stage.step}
          </motion.span>
        </motion.div>

        <motion.p variants={itemVariants} className="relative mt-8 max-w-xl text-[clamp(1.45rem,2vw,2.2rem)] font-black leading-tight">
          {stage.title}
        </motion.p>
        <motion.p variants={itemVariants} className="relative mt-4 max-w-xl text-base font-medium leading-7 text-[#5f5642] sm:text-lg">
          {stage.desc}
        </motion.p>

        <motion.div variants={itemVariants} className="relative mt-6 flex flex-wrap gap-2">
          {stage.chips.map((chip) => (
            <motion.span
              key={chip}
              style={{ x: reduceMotion ? undefined : chipX }}
              className="rounded-full border border-[#d8bc65]/36 bg-[#fff8eb]/82 px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#7a6538]"
            >
              {chip}
            </motion.span>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="relative mt-7 grid gap-3 sm:grid-cols-2">
          <div className="rounded-[1rem] bg-[#f4ecd8] p-4">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-black/40">
              Parent signal
            </p>
            <p className="mt-2 text-xl font-black">{stage.signal}</p>
          </div>
          <div className="rounded-[1rem] bg-[#ffc629] p-4">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-black/45">
              System
            </p>
            <p className="mt-2 text-xl font-black">{stage.metric}</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.button
        type="button"
        onClick={onJump}
        animate={
          !reduceMotion && isActive
            ? {
                scale: [1, 1.14, 1],
                boxShadow: [
                  '0 24px 60px rgba(23,35,58,0.18)',
                  '0 30px 90px rgba(255,198,41,0.58)',
                  '0 24px 60px rgba(23,35,58,0.18)',
                ],
              }
            : { scale: 1 }
        }
        transition={{ duration: 1.45, repeat: !reduceMotion && isActive ? Infinity : 0, ease: 'easeInOut' }}
        className={`z-20 hidden h-24 w-24 place-items-center rounded-full border-[10px] text-xl font-black transition hover:scale-110 lg:col-start-2 lg:grid ${
          isActive
            ? 'border-white bg-[#ffc629] text-black'
            : 'border-[#f7f1e6] bg-white text-black/42'
        }`}
        aria-label={`Jump to ${stage.label}`}
      >
        {stage.step}
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 70, scale: 0.92, rotateZ: alignLeft ? 2.5 : -2.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1, rotateZ: 0 }}
        viewport={{ amount: 0.36 }}
        transition={{ duration: 1.05, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
        className={`relative min-h-[22rem] overflow-hidden rounded-[1.65rem] border border-white/70 bg-[#17233a] shadow-[0_34px_100px_rgba(23,35,58,0.18)] will-change-transform ${
          alignLeft ? 'lg:col-start-3' : 'lg:col-start-1 lg:row-start-1'
        }`}
      >
        <motion.div style={{ y: reduceMotion ? undefined : imageY, scale: reduceMotion ? undefined : imageScale }} className="absolute -inset-[6%]">
          <Image
            src={stage.image}
            alt={`${stage.label} learning environment`}
            fill
            priority={index < 2}
            loading={index < 2 ? undefined : 'lazy'}
            sizes="(min-width: 1024px) 38vw, 92vw"
            className="object-cover object-center"
          />
        </motion.div>
        <motion.div
          aria-hidden="true"
          style={{ x: reduceMotion ? undefined : sheenX }}
          className="absolute inset-y-0 z-10 w-1/3 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.28),transparent)]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,20,22,0.02)_18%,rgba(18,16,10,0.76)_100%)]" />
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-5 left-5 right-5 z-20"
        >
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f5d28a]">
            Real journey signal
          </p>
          <p className="mt-2 max-w-lg text-2xl font-black leading-tight text-white">
            {stage.parent}
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

function ParentConfidence({ reduceMotion }: { reduceMotion: boolean | null }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      className="mt-20 grid overflow-hidden rounded-[1.8rem] border border-[#d8bc65]/28 bg-[#17233a] shadow-[0_42px_130px_rgba(23,35,58,0.2)] lg:grid-cols-[0.9fr_1.1fr]"
    >
      <div className="relative min-h-[24rem]">
        <Image
          src="/images/together-with-families.png"
          alt="Parents and school working together"
          fill
          priority
          loading="eager"
          quality={92}
          sizes="(min-width: 1024px) 42vw, 92vw"
          className="object-cover object-center"
        />
        <motion.div
          aria-hidden="true"
          animate={reduceMotion ? undefined : { x: ['-60%', '90%'] }}
          transition={{ duration: 7, repeat: Infinity, repeatDelay: 1.4, ease: 'easeInOut' }}
          className="absolute inset-y-0 w-1/3 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.28),transparent)]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,35,58,0.05),rgba(23,35,58,0.62))]" />
      </div>

      <div className="relative p-6 text-white sm:p-8 lg:p-12">
        <motion.div
          aria-hidden="true"
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
          className="absolute right-8 top-8 h-32 w-32 rounded-full border border-[#d8bc65]/22"
        />
        <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d8bc65]">
          Parent confidence section
        </p>
        <h3 className="mt-5 max-w-2xl font-serif text-[clamp(2.4rem,4.2vw,5rem)] leading-[0.92]">
          A school journey parents can actually feel.
        </h3>
        <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-white/74 sm:text-lg">
          Every stage shows families what is changing in the child: safety,
          habits, independence, direction, and readiness for the next world.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {parentSignals.map((signal, index) => (
            <motion.div
              key={signal}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={reduceMotion ? undefined : { y: [0, index % 2 ? 4 : -4, 0] }}
              viewport={{ once: true }}
              transition={{
                opacity: { duration: 0.5, delay: index * 0.08 },
                y: {
                  duration: 3.6 + index * 0.35,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
              className="rounded-[1rem] border border-white/12 bg-white/10 px-4 py-4 shadow-xl backdrop-blur-md"
            >
              <p className="text-[0.68rem] font-black uppercase tracking-[0.2em] text-[#d8bc65]">
                Parents track
              </p>
              <p className="mt-2 text-lg font-black">{signal}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
