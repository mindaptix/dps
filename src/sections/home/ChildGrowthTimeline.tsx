'use client'

import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const journeyStages = [
  {
    range: 'Nursery',
    label: 'Nursery / Nursery',
    age: '3+',
    title: 'Wonder begins',
    line: 'A gentle start where the child feels safe, seen and excited to come to school.',
    image: '/images/early-years.png',
    focus: 'object-[50%_35%]',
  },
  {
    range: 'Grades 1-5',
    label: 'Primary / Grades 1-5',
    age: '6+',
    title: 'Learning feels safe',
    line: 'Reading, counting, habits and friendships grow in a calm guided environment.',
    image: '/images/primary-school.png',
    focus: 'object-[50%_42%]',
  },
  {
    range: 'Grades 6-8',
    label: 'Middle School / Grades 6-8',
    age: '11+',
    title: 'Discovery opens',
    line: 'Projects, clubs, science exploration and real questions shape emerging strengths.',
    image: '/images/dps-learning-different.png',
    focus: 'object-[50%_44%]',
  },
  {
    range: 'Grades 9-10',
    label: 'Senior Prep / Grades 9-10',
    age: '15+',
    title: 'Direction sharpens',
    line: 'Mentoring, practice and discipline build confidence for serious academic goals.',
    image: '/images/leadership.png',
    focus: 'object-[50%_40%]',
  },
  {
    range: 'Grades 11-12',
    label: 'Future Ready / Grades 11-12',
    age: '17+',
    title: 'Ready for what is next',
    line: 'Portfolio building, entrance preparation and guidance open clear future pathways.',
    image: '/images/university.png',
    focus: 'object-[50%_44%]',
  },
]

export function ChildGrowthTimeline() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const activeIndexRef = useRef(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const activeStage = journeyStages[activeIndex]
  const progress = activeIndex / (journeyStages.length - 1)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!sectionRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const context = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: `+=${window.innerHeight * (journeyStages.length - 1.15)}`,
        pin: true,
        scrub: 0.65,
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

          if (trackRef.current) {
            gsap.to(trackRef.current, {
              xPercent: -self.progress * 34,
              duration: 0.24,
              ease: 'power2.out',
              overwrite: true,
            })
          }
        },
      })

      gsap.from('[data-journey-head]', {
        opacity: 0,
        y: 24,
        filter: 'blur(10px)',
        duration: 0.8,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 72%',
          once: true,
        },
      })
    }, sectionRef)

    return () => context.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="relative isolate h-screen overflow-hidden bg-[#090806] text-white"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStage.image}
          initial={{ opacity: 0, x: direction > 0 ? 90 : -90, scale: 1.08 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: direction > 0 ? -90 : 90, scale: 1.04 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={activeStage.image}
            alt={activeStage.title}
            fill
            sizes="100vw"
            className={`object-cover ${activeStage.focus}`}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,5,3,0.82),rgba(6,5,3,0.54)_42%,rgba(6,5,3,0.72)),linear-gradient(180deg,rgba(0,0,0,0.56),rgba(0,0,0,0.22)_42%,rgba(0,0,0,0.78))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(221,171,65,0.16),transparent_28%)]" />
      <div className="floating-grain pointer-events-none absolute inset-0 opacity-18" />

      <div className="relative z-10 flex h-full flex-col justify-between px-5 py-7 md:px-10 lg:px-14">
        <div data-journey-head className="text-center">
          <p className="text-[0.72rem] font-black uppercase tracking-[0.55em] text-[#e3b545]">
            Nursery to Grade 12 Child Journey
          </p>
        </div>

        <div className="mx-auto grid w-full max-w-[84rem] flex-1 place-items-center pt-8 text-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeStage.title}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 90 : -90, filter: 'blur(14px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: direction > 0 ? -90 : 90, filter: 'blur(14px)' }}
              transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e3b545]/16 md:h-[36rem] md:w-[36rem]" />
              <p className="text-xs font-black uppercase tracking-[0.36em] text-white/82">
                {activeStage.label}
              </p>
              <div className="mt-6 flex items-center justify-center gap-5">
                <span className="text-xs font-black uppercase tracking-[0.34em] text-white/72">
                  Age
                </span>
                <h2 className="text-[clamp(5.5rem,12vw,10rem)] font-light leading-none tracking-normal text-white">
                  {activeStage.age}
                </h2>
              </div>
              <h3 className="font-serif text-[clamp(3.2rem,7vw,6.5rem)] font-medium italic leading-none tracking-normal text-[#e3b545]">
                {activeStage.title}
              </h3>
              <p className="mx-auto mt-8 max-w-4xl text-xl font-semibold leading-9 text-white/84 md:text-2xl">
                {activeStage.line}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mx-auto w-full max-w-[92rem]">
          <div className="relative mx-auto mb-7 hidden max-w-[84rem] px-2 md:block">
            <div className="absolute left-6 right-6 top-4 h-px bg-white/18" />
            <div
              className="absolute left-6 top-4 h-px bg-[#e3b545] transition-all duration-500"
              style={{ width: `calc((100% - 3rem) * ${progress})` }}
            />
            <div className="grid grid-cols-5">
              {journeyStages.map((stage, index) => {
                const active = index === activeIndex
                return (
                  <button
                    key={stage.range}
                    type="button"
                    onClick={() => {
                      setDirection(index >= activeIndex ? 1 : -1)
                      activeIndexRef.current = index
                      setActiveIndex(index)
                    }}
                    className="relative z-10 flex flex-col items-center gap-3 text-center"
                  >
                    <span
                      className={`grid h-8 w-8 place-items-center rounded-full border transition ${
                        active
                          ? 'border-[#e3b545] bg-[#e3b545] shadow-[0_0_28px_rgba(227,181,69,0.45)]'
                          : 'border-white/26 bg-white/20'
                      }`}
                    >
                      <span className={active ? 'h-3 w-3 rounded-full bg-[#120d06]' : 'h-2 w-2 rounded-full bg-white/48'} />
                    </span>
                    <span className="text-[0.7rem] font-black uppercase tracking-[0.08em] text-white/70">
                      {stage.range}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="overflow-hidden">
            <div ref={trackRef} className="flex w-max gap-4 will-change-transform">
              {journeyStages.map((stage, index) => {
                const active = index === activeIndex
                return (
                  <button
                    key={stage.title}
                    type="button"
                    onClick={() => {
                      setDirection(index >= activeIndex ? 1 : -1)
                      activeIndexRef.current = index
                      setActiveIndex(index)
                    }}
                    className={`group relative h-28 w-[14rem] overflow-hidden rounded-lg border transition duration-500 md:h-36 md:w-[18rem] ${
                      active
                        ? 'border-[#e3b545] shadow-[0_18px_60px_rgba(227,181,69,0.2)]'
                        : 'border-white/14 opacity-72 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={stage.image}
                      alt={stage.title}
                      fill
                      sizes="18rem"
                      className={`object-cover transition duration-700 group-hover:scale-105 ${stage.focus}`}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.72))]" />
                    <span className="absolute left-4 top-3 rounded-full bg-[#e3b545] px-3 py-1 text-xs font-black text-[#120d06]">
                      {stage.age}
                    </span>
                    <span className="absolute bottom-3 left-4 right-4 text-left text-xs font-black uppercase tracking-[0.1em] text-white">
                      {stage.range}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
