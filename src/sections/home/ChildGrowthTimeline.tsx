'use client'

import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useMemo, useRef, useState } from 'react'

const journeyStages = [
  {
    stage: 'Nursery',
    age: '3+',
    title: 'Wonder begins',
    line: 'A gentle start where the child feels safe, seen and excited to come to school.',
    outcome: 'Confidence with care',
    image: '/images/early-years.png',
    focus: 'object-[50%_30%]',
  },
  {
    stage: 'Primary',
    age: '5+',
    title: 'Foundation grows',
    line: 'Reading, numbers, habits, friendships and curiosity become the base of learning.',
    outcome: 'Strong basics',
    image: '/images/primary-school.png',
    focus: 'object-[50%_36%]',
  },
  {
    stage: 'Middle School',
    age: '9+',
    title: 'Discovery turns practical',
    line: 'Projects, labs, arts, sports and communication help children find their strengths.',
    outcome: 'Visible talent',
    image: '/images/dps-learning-different.png',
    focus: 'object-[50%_42%]',
  },
  {
    stage: 'Senior Secondary',
    age: '15+',
    title: 'Preparation becomes focused',
    line: 'Boards, JEE foundation, olympiads, mentoring and disciplined study build direction.',
    outcome: 'JEE / IIT readiness',
    image: '/images/leadership.png',
    focus: 'object-[50%_35%]',
  },
  {
    stage: 'University Placements',
    age: '18+',
    title: 'Future opens',
    line: 'The child steps out with clarity, confidence and a complete future plan.',
    outcome: 'College-ready profile',
    image: '/images/university.png',
    focus: 'object-[50%_36%]',
  },
]

export function ChildGrowthTimeline() {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null)
  const [active, setActive] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const activeStage = journeyStages[active]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!sectionRef.current) {
      return
    }

    const section = sectionRef.current

    const context = gsap.context(() => {
      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: `+=${journeyStages.length * 105}%`,
        pin: true,
        scrub: 0.8,
        anticipatePin: 1,
        onUpdate: (self) => {
          const nextProgress = Math.min(Math.max(self.progress, 0), 1)
          const nextActive = Math.min(
            journeyStages.length - 1,
            Math.round(nextProgress * (journeyStages.length - 1)),
          )

          setScrollProgress(nextProgress)
          setActive(nextActive)
        },
      })

      gsap.to('[data-road-orbit]', {
        rotate: 360,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: `+=${journeyStages.length * 105}%`,
          scrub: true,
        },
      })

      gsap.to('[data-floating-card]', {
        y: 'random(-10, 10)',
        duration: 'random(2.2, 3.8)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.12,
      })
    }, section)

    return () => {
      scrollTriggerRef.current = null
      context.revert()
    }
  }, [])

  const roadProgress = useMemo(() => {
    const exactStageProgress = active / (journeyStages.length - 1)
    return Math.max(scrollProgress, exactStageProgress)
  }, [active, scrollProgress])

  const progressWidth = `${roadProgress * 100}%`
  const dashOffset = 760 - roadProgress * 760

  const jumpToStage = (index: number) => {
    const trigger = scrollTriggerRef.current

    if (!trigger) {
      setActive(index)
      return
    }

    const ratio = index / (journeyStages.length - 1)
    window.scrollTo({
      top: trigger.start + (trigger.end - trigger.start) * ratio,
      behavior: 'smooth',
    })
  }

  return (
    <section ref={sectionRef} id="journey" className="relative min-h-screen overflow-hidden bg-[#090604] text-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStage.stage}
          initial={{ opacity: 0, scale: 1.08, filter: 'blur(14px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 1.025, filter: 'blur(12px)' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={activeStage.image}
            alt={`${activeStage.stage} child journey`}
            fill
            sizes="100vw"
            priority={active < 2}
            className={`object-cover ${activeStage.focus}`}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,5,3,0.5),rgba(8,5,3,0.18)_34%,rgba(8,5,3,0.9)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_44%,rgba(232,176,76,0.17),transparent_32%),linear-gradient(90deg,rgba(8,5,3,0.76),transparent_44%,rgba(8,5,3,0.7))]" />
      <div className="floating-grain pointer-events-none absolute inset-0 opacity-18" />

      <div
        data-road-orbit
        aria-hidden="true"
        className="absolute left-1/2 top-[42%] hidden h-[min(68vh,42rem)] w-[min(68vh,42rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d9a94f]/16 md:block"
      >
        {journeyStages.map((stage, index) => (
          <span
            key={stage.stage}
            className="absolute left-1/2 top-0 h-5 w-px origin-[50%_min(34vh,21rem)] bg-[#d9a94f]/42"
            style={{ transform: `rotate(${index * (360 / journeyStages.length)}deg)` }}
          />
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-[17rem] z-10 hidden px-8 lg:block">
        <div className="mx-auto max-w-6xl">
          <svg className="h-44 w-full overflow-visible" viewBox="0 0 1100 180" fill="none" aria-hidden="true">
            <path
              d="M35 135 C190 18 275 42 385 106 C500 172 603 166 704 82 C806 -4 922 6 1065 92"
              stroke="rgba(255,255,255,0.22)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="10 12"
            />
            <path
              d="M35 135 C190 18 275 42 385 106 C500 172 603 166 704 82 C806 -4 922 6 1065 92"
              stroke="#e5ad45"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="760"
              strokeDashoffset={dashOffset}
            />
          </svg>
        </div>
      </div>

      <div className="relative z-20 mx-auto grid min-h-screen max-w-[94rem] place-items-center px-5 py-14 md:px-8">
        <div className="w-full">
          <div className="mx-auto max-w-5xl text-center">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="text-xs font-bold uppercase tracking-[0.48em] text-[#e0af55]"
            >
              Interactive child journey timeline
            </motion.p>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage.stage}
                initial={{ opacity: 0, y: 30, filter: 'blur(16px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -24, filter: 'blur(14px)' }}
                transition={{ duration: 0.64, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10 md:mt-16"
              >
                <p className="text-xs font-black uppercase tracking-[0.34em] text-white/58">
                  {activeStage.stage}
                </p>
                <div className="mt-5 flex items-end justify-center gap-4 md:gap-6">
                  <span className="mb-5 text-sm font-semibold uppercase tracking-[0.42em] text-white/58">
                    Age
                  </span>
                  <span className="font-serif text-[6rem] leading-none text-white drop-shadow-[0_14px_46px_rgba(0,0,0,0.58)] md:text-[9rem]">
                    {activeStage.age}
                  </span>
                </div>
                <h2 className="font-serif text-4xl italic leading-none text-[#e7ae45] md:text-7xl">
                  {activeStage.title}
                </h2>
                <p className="mx-auto mt-6 max-w-3xl text-base font-semibold leading-7 text-white/76 md:text-2xl md:leading-9">
                  {activeStage.line}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mx-auto mt-10 max-w-6xl md:mt-14">
            <div className="relative h-px bg-white/18">
              <motion.div
                animate={{ width: progressWidth }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="absolute left-0 top-0 h-px bg-[#e5ad45]"
              />
              {journeyStages.map((stage, index) => (
                <button
                  key={stage.stage}
                  type="button"
                  onClick={() => jumpToStage(index)}
                  className="absolute top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full text-xs font-semibold text-white/60 transition hover:text-[#e5ad45] focus:outline-none focus:ring-2 focus:ring-[#e5ad45]/70"
                  style={{ left: `${(index / (journeyStages.length - 1)) * 100}%` }}
                  aria-label={`Jump to ${stage.stage}`}
                >
                  <span
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      index === active
                        ? 'scale-150 bg-[#e5ad45] shadow-[0_0_24px_rgba(229,173,69,0.75)]'
                        : 'bg-white/40'
                    }`}
                  />
                  <span className="absolute top-9 whitespace-nowrap text-[0.68rem] uppercase tracking-[0.12em]">
                    {stage.stage}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-24 grid max-w-6xl gap-3 md:grid-cols-5">
            {journeyStages.map((stage, index) => (
              <motion.button
                key={stage.stage}
                type="button"
                data-floating-card
                onClick={() => jumpToStage(index)}
                whileHover={{ y: -8, scale: 1.025 }}
                transition={{ type: 'spring', stiffness: 220, damping: 22 }}
                className={`group overflow-hidden rounded-lg border text-left shadow-[0_22px_70px_rgba(0,0,0,0.32)] backdrop-blur transition ${
                  index === active
                    ? 'border-[#e5ad45]/70 bg-[#17100a]/82'
                    : 'border-white/12 bg-black/32 opacity-[0.78] hover:border-[#e5ad45]/45 hover:opacity-100'
                }`}
              >
                <div className="relative h-28 overflow-hidden">
                  <Image
                    src={stage.image}
                    alt={`${stage.stage} image`}
                    fill
                    sizes="(min-width: 768px) 20vw, 100vw"
                    className={`object-cover transition duration-700 group-hover:scale-[1.08] ${stage.focus}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/74 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-[#e5ad45] px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.12em] text-[#120b05]">
                    {stage.age}
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-[#e5ad45]">
                    {stage.stage}
                  </p>
                  <p className="mt-3 text-sm font-semibold leading-5 text-white">{stage.outcome}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
