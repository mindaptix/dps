'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion'

const stages = [
  {
    grade: 'Nursery',
    title: 'First Steps',
    subtitle: 'A warm, safe start where school feels like belonging.',
    words: ['Wonder.', 'Play.', 'Confidence.'],
    outcomes: ['Language readiness', 'Social comfort', 'Motor skills'],
    image: '/images/early-years.png',
  },
  {
    grade: 'Class 1',
    title: 'Strong Foundations',
    subtitle: 'Children begin building reading, numeracy, habits, and curiosity.',
    words: ['Phonics.', 'Numbers.', 'Expression.'],
    outcomes: ['Reading habits', 'Number sense', 'Classroom routines'],
    image: '/images/primary-school.png',
  },
  {
    grade: 'Class 6',
    title: 'New Independence',
    subtitle: 'Learners move from basics to projects, questions, and deeper thinking.',
    words: ['Inquiry.', 'Teamwork.', 'Exploration.'],
    outcomes: ['Project learning', 'Collaboration', 'Self-management'],
    image: '/images/middle-school.png',
  },
  {
    grade: 'Class 10',
    title: 'Purposeful Direction',
    subtitle: 'Academic rigour meets mentoring, reflection, and future choices.',
    words: ['Focus.', 'Discipline.', 'Problem-solving.'],
    outcomes: ['Board readiness', 'Mentorship', 'Career awareness'],
    image: '/images/primary-school.png',
  },
  {
    grade: 'Class 12',
    title: 'Future Ready',
    subtitle: 'Students leave with confidence, leadership, and a clear next step.',
    words: ['Leadership.', 'Pathways.', 'Readiness.'],
    outcomes: ['University planning', 'Life skills', 'Student leadership'],
    image: '/images/child-journey-grade12-ai.png',
  },
]

export function JourneyOfGrowth() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })
  const progress = useSpring(scrollYProgress, { stiffness: 88, damping: 24, mass: 0.35 })
  const activeStage = stages[activeIndex]
  const panoramaScale = useTransform(progress, [0, 1], [1.08, 1.24])
  const panoramaX = useTransform(progress, [0, 1], ['0%', '-6%'])
  const ringRotate = useTransform(progress, [0, 1], [0, 220])
  const progressScale = useTransform(progress, [0, 1], [0, 1])
  const headingOpacity = useTransform(progress, [0, 0.94, 1], [1, 1, 0.18])

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const nextIndex = Math.min(stages.length - 1, Math.max(0, Math.floor(latest * stages.length)))
    setActiveIndex(nextIndex)
  })

  return (
    <section ref={sectionRef} id="growth-journey" className="relative h-[560vh] bg-[#eef4df]">
      <div className="sticky top-0 h-screen overflow-hidden text-[#315844]">
        <motion.div style={{ scale: panoramaScale, x: panoramaX }} className="absolute -inset-[7%]">
          <Image
            src="/images/journey-of-growth.png"
            alt="Children progressing through different stages of their school journey"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(38,61,38,0.42)_0%,rgba(255,246,205,0.18)_42%,rgba(21,54,38,0.72)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(239,217,140,.28),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(140,194,122,.22),transparent_26%)] backdrop-saturate-[1.08]" />

        <motion.div
          aria-hidden="true"
          animate={{ x: ['-28%', '128%'] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-y-0 z-10 w-1/4 bg-[linear-gradient(90deg,transparent,rgba(255,240,185,.25),transparent)] blur-md"
        />

        <div className="pointer-events-none absolute inset-0 grid place-items-center">
          <motion.div
            aria-hidden="true"
            style={{ rotate: ringRotate }}
            className="relative h-[38rem] w-[38rem] rounded-full border border-white/12 md:h-[54rem] md:w-[54rem]"
          >
            <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-[#bfa96d] shadow-[0_0_26px_rgba(191,169,109,0.55)]" />
            <span className="absolute bottom-[12%] left-[9%] h-2 w-2 rounded-full bg-[#8cc27a] shadow-[0_0_24px_rgba(140,194,122,0.75)]" />
            <span className="absolute right-[10%] top-[22%] h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_26px_rgba(255,255,255,0.85)]" />
          </motion.div>
        </div>

        <motion.h2
          style={{ opacity: headingOpacity }}
          className="absolute inset-x-5 top-7 z-30 text-center font-serif text-[clamp(2.5rem,4.5vw,5rem)] font-medium leading-[0.9] tracking-[-0.05em] text-[#f5dda0] drop-shadow-[0_8px_24px_rgba(0,0,0,.32)] md:top-10 md:whitespace-nowrap"
        >
          A Journey of Growth
        </motion.h2>

        <div className="absolute inset-x-4 bottom-[6.8rem] top-[7.5rem] z-20 sm:inset-x-6 md:bottom-[7.5rem] md:top-[9.5rem] lg:inset-x-10">
          <AnimatePresence mode="wait" initial={false}>
            <JourneyScene key={activeStage.grade} stage={activeStage} index={activeIndex} />
          </AnimatePresence>
        </div>

        <div className="absolute bottom-8 left-1/2 z-50 w-[min(84vw,68rem)] -translate-x-1/2 md:bottom-10">
          <div className="relative h-px bg-white/18">
            <motion.div
              style={{ scaleX: progressScale }}
              className="absolute inset-0 origin-left bg-gradient-to-r from-[#77a866] via-[#bfa96d] to-[#d8c892] shadow-[0_0_18px_rgba(143,122,67,0.45)]"
            />
            {stages.map((stage, index) => {
              const isActive = index === activeIndex

              return (
              <button
                key={stage.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`absolute top-1/2 grid h-8 w-8 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border text-[0.6rem] font-bold shadow-xl transition duration-500 ${isActive ? 'scale-125 border-[#d8c892] bg-[#d8c892] text-[#14382a]' : 'border-white/60 bg-[#0b241a] text-[#d8c892]'}`}
                style={{ left: `${(index / (stages.length - 1)) * 100}%` }}
              >
                {index + 1}
                <span className="absolute top-9 hidden whitespace-nowrap text-xs font-semibold text-white/80 md:block">{stage.grade}</span>
              </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function JourneyScene({
  stage,
  index,
}: {
  stage: (typeof stages)[number]
  index: number
}) {
  return (
    <motion.article
      initial={{ opacity: 0, x: index % 2 === 0 ? 120 : -120, scale: 0.94, rotate: index % 2 === 0 ? 3 : -3, filter: 'blur(10px)' }}
      animate={{ opacity: 1, x: 0, scale: 1, rotate: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, x: index % 2 === 0 ? -90 : 90, scale: 0.96, rotate: index % 2 === 0 ? -2 : 2, filter: 'blur(8px)' }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-0 overflow-hidden rounded-[2rem] border border-white/55 bg-[#122f22] shadow-[0_36px_120px_rgba(15,38,27,0.42)]"
    >
      <motion.div
        initial={{ scale: 1.16, y: '3%' }}
        animate={{ scale: 1.04, y: '-2%' }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          src={stage.image}
          alt={stage.title}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,24,16,0.05)_20%,rgba(8,31,21,0.92)_100%),linear-gradient(90deg,rgba(255,245,205,0.42),transparent_58%)]" />
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.18, 0.42, 0.18], scale: [1, 1.12, 1] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-8 top-10 h-28 w-28 rounded-full border border-[#d8c892]/45 shadow-[0_0_52px_rgba(143,122,67,.28)] md:h-40 md:w-40"
      />

      <motion.div
        initial={{ x: index % 2 === 0 ? '18%' : '-18%', y: '10%', rotate: index % 2 === 0 ? 5 : -5 }}
        animate={{ x: '0%', y: '0%', rotate: 0 }}
        transition={{ duration: 1, delay: 0.12, type: 'spring', bounce: 0.18 }}
        className="absolute right-5 top-5 hidden h-[42%] w-[28%] overflow-hidden rounded-[1.35rem] border-4 border-white/90 shadow-[0_24px_70px_rgba(0,0,0,0.38)] sm:block md:right-8 md:top-8"
      >
        <Image
          src={stage.image}
          alt=""
          fill
          sizes="28vw"
          className="scale-125 object-cover object-[65%_35%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#10271f]/20 to-transparent" />
      </motion.div>

      <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.18 }} className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#d8c892]/45 bg-[#d8c892]/14 px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-[#e6d9ad] backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-[#d8c892] shadow-[0_0_16px_rgba(216,200,146,.65)]" />
          {stage.grade}
        </motion.div>
        <motion.h3 initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.24 }} className="font-serif text-[clamp(2.5rem,5vw,5.4rem)] font-medium leading-[0.9] tracking-[-0.045em] text-[#f5dda0] drop-shadow-[0_8px_22px_rgba(0,0,0,.3)]">
          {stage.title}
        </motion.h3>
        <motion.p initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.32 }} className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-white/82 md:text-xl">
          {stage.subtitle}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.4 }} className="mt-4 flex flex-wrap gap-x-3 text-base font-semibold text-[#e6d9ad] sm:text-xl md:text-2xl">
          {stage.words.map((word) => (
            <span key={word}>{word}</span>
          ))}
        </motion.div>
        <div className="mt-5 grid max-w-3xl gap-3 sm:grid-cols-3">
          {stage.outcomes.map((outcome, outcomeIndex) => (
            <motion.div
              key={outcome}
              animate={{ y: [0, outcomeIndex % 2 ? 6 : -6, 0] }}
              transition={{ duration: 3 + outcomeIndex * 0.35, repeat: Infinity, ease: 'easeInOut' }}
              className="rounded-2xl border border-white/18 bg-white/12 px-4 py-3 text-sm font-medium text-white shadow-xl backdrop-blur-md"
            >
              {outcome}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.article>
  )
}
