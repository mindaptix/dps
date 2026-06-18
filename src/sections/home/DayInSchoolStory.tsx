'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const journeyStages = [
  {
    stage: 'Nursery',
    age: 'Age 3+',
    title: 'Wonder begins',
    copy: 'Warm classrooms, soft routines, and confident first steps into school life.',
    image: '/images/early-years.png',
    align: 'object-[50%_32%]',
    accent: 'from-[#f4d4aa]/85 via-[#fff7eb]/35 to-transparent',
  },
  {
    stage: 'Grade 1',
    age: 'Age 6+',
    title: 'Learning feels safe',
    copy: 'Reading, counting, and curiosity grow together in a calm, guided environment.',
    image: '/images/primary-school.png',
    align: 'object-[50%_36%]',
    accent: 'from-[#d9ecbf]/85 via-[#fbfff4]/35 to-transparent',
  },
  {
    stage: 'Grade 6',
    age: 'Middle school',
    title: 'Discovery opens',
    copy: 'Projects, clubs, and hands-on work help children understand their own strengths.',
    image: '/images/middle-school.png',
    align: 'object-[50%_42%]',
    accent: 'from-[#c8e2df]/85 via-[#f4fffd]/35 to-transparent',
  },
  {
    stage: 'Grade 10',
    age: 'Board focus',
    title: 'Direction sharpens',
    copy: 'Mentoring, discipline, and practice build confidence for serious academic goals.',
    image: '/images/leadership.png',
    align: 'object-[50%_36%]',
    accent: 'from-[#d4c7f2]/75 via-[#fbf7ff]/35 to-transparent',
  },
  {
    stage: 'Grade 12',
    age: 'Future ready',
    title: 'Ready for what is next',
    copy: 'Clear targets, revision discipline, and strong support prepare students for the next step.',
    image: '/images/child-journey-grade12-ai.png',
    align: 'object-[92%_50%]',
    accent: 'from-[#f6cfb2]/85 via-[#fff4e9]/35 to-transparent',
  },
]

export function DayInSchoolStory() {
  const sectionRef = useRef<HTMLElement>(null)
  const activeIndexRef = useRef(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const activeStage = journeyStages[activeIndex]
  const progressPct = ((activeIndex + 1) / journeyStages.length) * 100

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!sectionRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const context = gsap.context(() => {
      gsap.from('[data-day-kicker], [data-day-title], [data-day-copy], [data-day-pills]', {
        opacity: 0,
        y: 20,
        duration: 0.85,
        ease: 'power4.out',
        stagger: 0.06,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 78%',
          once: true,
        },
      })

      gsap.from('[data-day-rail]', {
        opacity: 0,
        x: 64,
        scale: 0.98,
        duration: 0.9,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '[data-day-rail]',
          start: 'top 82%',
          once: true,
        },
      })

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=380%',
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        onUpdate: (self) => {
          const next = Math.min(
            journeyStages.length - 1,
            Math.floor(self.progress * journeyStages.length),
          )

          if (next !== activeIndexRef.current) {
            setDirection(next > activeIndexRef.current ? 1 : -1)
            activeIndexRef.current = next
            setActiveIndex(next)
          }
        },
      })
    }, sectionRef)

    return () => context.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="relative overflow-hidden bg-[#eef3ec] px-4 py-16 text-[#173628] sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(143,183,99,0.18),transparent_24%),radial-gradient(circle_at_80%_0%,rgba(222,196,152,0.22),transparent_26%),linear-gradient(180deg,#f6faf4_0%,#edf3ea_50%,#f8f5ef_100%)]" />
      <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(23,54,40,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(23,54,40,0.06)_1px,transparent_1px)] [background-size:88px_88px]" />
      <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#88b468]/60 to-transparent" />

      <div className="relative mx-auto flex min-h-[calc(100vh-2rem)] max-w-[96rem] items-center">
        <div className="grid w-full gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          <div className="relative z-10 flex flex-col justify-between rounded-[2rem] border border-white/60 bg-[#f7f8f2]/85 p-6 shadow-[0_24px_80px_rgba(25,44,33,0.12)] backdrop-blur-xl sm:p-8 lg:min-h-[44rem] lg:p-10">
            <div>
              <p
                data-day-kicker
                className="text-[0.68rem] font-black uppercase tracking-[0.42em] text-[#6ea565]"
              >
                Nursery to Grade 12 journey
              </p>
              <motion.div
                key={activeStage.stage}
                initial={{ opacity: 0, x: direction > 0 ? -28 : 28, filter: 'blur(8px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8"
              >
                <p className="text-xs font-black uppercase tracking-[0.3em] text-[#8ea58d]">
                  {activeStage.stage} / {activeStage.age}
                </p>
                <h2
                  data-day-title
                  className="mt-4 max-w-[10ch] text-[clamp(3.8rem,8vw,7.9rem)] font-semibold leading-[0.86] tracking-[-0.07em] text-[#163628]"
                >
                  {activeStage.title}
                </h2>
                <p
                  data-day-copy
                  className="mt-5 max-w-xl text-lg leading-8 text-[#577064] sm:text-xl"
                >
                  {activeStage.copy}
                </p>
              </motion.div>
            </div>

            <div data-day-pills className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {journeyStages.map((stage, index) => {
                const active = index === activeIndex

                return (
                  <button
                    key={stage.stage}
                    type="button"
                    onClick={() => {
                      setDirection(index >= activeIndex ? 1 : -1)
                      setActiveIndex(index)
                    }}
                    className={`rounded-[1.25rem] border px-4 py-4 text-left transition duration-300 ${
                      active
                        ? 'border-[#7db062] bg-[#7db062] text-white shadow-[0_18px_36px_rgba(125,176,98,0.26)]'
                        : 'border-[#d6e2d1] bg-white/70 text-[#173628] hover:border-[#7db062]/40 hover:bg-white'
                    }`}
                    aria-label={`${stage.stage} journey stage`}
                  >
                    <div className="text-[0.62rem] font-black uppercase tracking-[0.26em] opacity-80">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="mt-2 text-sm font-semibold uppercase tracking-[0.16em]">
                      {stage.stage}
                    </div>
                  </button>
                )
              })}
            </div>

            <div className="mt-8 h-2 overflow-hidden rounded-full bg-white">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#7db062] via-[#b7d38d] to-[#e2c08a] transition-all duration-500"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>

          <div
            data-day-rail
            className="relative min-h-[36rem] overflow-hidden rounded-[2rem] border border-white/50 bg-[#f8f4ec] shadow-[0_30px_100px_rgba(25,44,33,0.14)] lg:min-h-[44rem]"
          >
            <motion.div
              key={activeStage.image}
              initial={{ opacity: 0, x: direction > 0 ? 72 : -72, scale: 1.04 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={activeStage.image}
                alt={activeStage.title}
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className={`object-cover ${activeStage.align}`}
                priority={activeIndex === 0}
              />
            </motion.div>

            <div className={`absolute inset-0 bg-gradient-to-br ${activeStage.accent}`} />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.1)_40%,rgba(17,34,25,0.22)_100%)]" />
            <div className="absolute inset-0 opacity-[0.22] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.55)_1px,transparent_0)] [background-size:24px_24px]" />

            <div className="absolute left-5 top-5 rounded-full border border-white/35 bg-white/88 px-4 py-2 text-[0.65rem] font-black uppercase tracking-[0.18em] text-[#5d8d53] backdrop-blur-md">
              Stage {String(activeIndex + 1).padStart(2, '0')}
            </div>

            <div className="pointer-events-none absolute right-8 top-8 h-40 w-40 rounded-full border border-white/30" />
            <div className="pointer-events-none absolute left-8 top-24 h-20 w-20 rounded-full border border-white/20" />

            <div className="absolute right-5 top-5 hidden w-[14rem] rounded-[1.35rem] border border-white/40 bg-white/82 p-4 shadow-[0_18px_40px_rgba(23,54,40,0.12)] backdrop-blur-xl xl:block">
              <p className="text-[0.62rem] font-black uppercase tracking-[0.26em] text-[#6ea565]">
                Day markers
              </p>
              <div className="mt-3 space-y-3">
                {journeyStages.map((stage, index) => {
                  const active = index === activeIndex

                  return (
                    <div
                      key={stage.stage}
                      className={`flex items-center gap-3 rounded-[1rem] border px-3 py-2 transition ${
                        active
                          ? 'border-[#7db062] bg-[#7db062] text-white shadow-[0_12px_26px_rgba(125,176,98,0.24)]'
                          : 'border-white/70 bg-white/90 text-[#173628]'
                      }`}
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-current/20 text-[0.65rem] font-black">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="min-w-0">
                        <div className="truncate text-[0.68rem] font-black uppercase tracking-[0.18em]">
                          {stage.stage}
                        </div>
                        <div className="truncate text-[0.72rem] opacity-70">{stage.age}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="absolute left-5 bottom-[7.5rem] hidden max-w-[15rem] rounded-[1.35rem] border border-white/45 bg-white/86 p-4 shadow-[0_18px_40px_rgba(23,54,40,0.12)] backdrop-blur-xl lg:block">
              <p className="text-[0.62rem] font-black uppercase tracking-[0.26em] text-[#6ea565]">
                School rhythm
              </p>
              <p className="mt-3 text-sm leading-6 text-[#577064]">
                A gentle sequence of care, confidence, and challenge from Nursery through Grade 12.
              </p>
            </div>

            <div className="absolute inset-x-5 bottom-5 hidden gap-3 overflow-hidden xl:flex">
              {journeyStages.map((stage, index) => {
                const active = index === activeIndex
                return (
                  <button
                    key={stage.stage}
                    type="button"
                    onClick={() => {
                      setDirection(index >= activeIndex ? 1 : -1)
                      setActiveIndex(index)
                    }}
                    className={`group relative h-20 flex-1 overflow-hidden rounded-[1.1rem] border transition duration-300 ${
                      active
                        ? 'border-white/90 shadow-[0_16px_30px_rgba(0,0,0,0.18)]'
                        : 'border-white/25 opacity-80 hover:opacity-100'
                    }`}
                    aria-label={`Open ${stage.stage}`}
                  >
                    <Image
                      src={stage.image}
                      alt={stage.stage}
                      fill
                      sizes="(min-width: 1280px) 10vw, 0vw"
                      className="object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${stage.accent}`} />
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="absolute inset-x-0 bottom-0 p-3 text-left text-white">
                      <div className="text-[0.58rem] font-black uppercase tracking-[0.22em] opacity-80">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div className="text-sm font-semibold">{stage.stage}</div>
                    </div>
                  </button>
                )
              })}
            </div>

            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-8">
              <div className="mx-auto max-w-4xl rounded-[1.6rem] border border-white/45 bg-white/88 p-6 text-center shadow-[0_18px_40px_rgba(23,54,40,0.08)] backdrop-blur-xl sm:p-8">
                <p className="text-[0.66rem] font-black uppercase tracking-[0.22em] text-[#6ea565]">
                  {activeStage.stage} / {activeStage.age}
                </p>
                <h3 className="mt-3 text-[clamp(2.2rem,4.8vw,4.6rem)] font-semibold leading-[0.92] tracking-[-0.05em] text-[#173628]">
                  {activeStage.title}
                </h3>
                <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#587165] sm:text-base">
                  {activeStage.copy}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
