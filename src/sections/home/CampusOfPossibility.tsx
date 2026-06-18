'use client'

import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const campusSpaces = [
  {
    title: 'Classrooms',
    label: 'Learn',
    text: 'Focused rooms for clear teaching, discussion and daily confidence.',
    image: '/images/primary-school.png',
    focus: 'object-[50%_42%]',
    pos: ['22%', '36%'],
  },
  {
    title: 'Innovation Labs',
    label: 'Build',
    text: 'STEM, robotics and experiments turn questions into working ideas.',
    image: '/images/dps-learning-different.png',
    focus: 'object-[50%_44%]',
    pos: ['48%', '28%'],
  },
  {
    title: 'Library',
    label: 'Discover',
    text: 'Quiet reading, research and guided discovery for independent minds.',
    image: '/images/dps-campus-life.png',
    focus: 'object-[42%_50%]',
    pos: ['68%', '38%'],
  },
  {
    title: 'Sports Infrastructure',
    label: 'Play',
    text: 'Movement, teamwork and resilience through structured physical growth.',
    image: '/images/leadership.png',
    focus: 'object-[50%_40%]',
    pos: ['78%', '66%'],
  },
  {
    title: 'Arts Facilities',
    label: 'Perform',
    text: 'Music, visual arts and performance spaces for expression and poise.',
    image: '/images/early-years.png',
    focus: 'object-[50%_36%]',
    pos: ['36%', '70%'],
  },
  {
    title: 'Outdoor Learning Spaces',
    label: 'Grow',
    text: 'Open spaces where observation, care and curiosity feel natural.',
    image: '/images/dps-campus-life.png',
    focus: 'object-[50%_50%]',
    pos: ['58%', '58%'],
  },
]

export function CampusOfPossibility() {
  const sectionRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)
  const activeSpace = campusSpaces[active]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!sectionRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const context = gsap.context(() => {
      gsap.from('[data-campus-reveal]', {
        opacity: 0,
        y: 34,
        filter: 'blur(12px)',
        duration: 0.85,
        ease: 'power4.out',
        stagger: 0.07,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 78%',
          once: true,
        },
      })

      gsap.from('[data-campus-card]', {
        opacity: 0,
        y: 28,
        scale: 0.96,
        duration: 0.75,
        ease: 'power4.out',
        stagger: 0.05,
        scrollTrigger: {
          trigger: '[data-campus-grid]',
          start: 'top 82%',
          once: true,
        },
      })
    }, sectionRef)

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % campusSpaces.length)
    }, 2200)

    return () => {
      context.revert()
      window.clearInterval(timer)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="campus"
      className="section-depth relative overflow-hidden bg-[#fbfdf9] px-5 py-12 text-[#173628] sm:px-6 lg:px-10 lg:py-16"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f5fbf1_55%,#ffffff_100%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(100,145,89,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(100,145,89,0.08)_1px,transparent_1px)] [background-size:92px_92px]" />
      <div className="section-divider-glow absolute inset-x-10 top-0 opacity-35" />

      <div className="relative mx-auto max-w-[96rem]">
        <div data-campus-reveal className="grid gap-5 lg:grid-cols-[0.48fr_0.52fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#73a764]">
              Section 6 - Campus of Possibility
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-none text-[#173628] md:text-6xl">
              Spaces that open a new possibility every day.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[#577065]">
            The campus is planned as a living learning map: focused rooms, labs, books, sports,
            arts and outdoor discovery working together.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[0.38fr_0.62fr]">
          <div data-campus-grid className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {campusSpaces.map((space, index) => {
              const selected = index === active
              return (
                <motion.button
                  key={space.title}
                  data-campus-card
                  type="button"
                  onClick={() => setActive(index)}
                  onMouseEnter={() => setActive(index)}
                  whileHover={{ x: 8 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 22 }}
                  className={`group relative min-h-24 overflow-hidden rounded-lg border p-4 text-left transition duration-500 ${
                    selected
                      ? 'border-[#8cc27a] bg-white shadow-[0_22px_70px_rgba(22,51,37,0.12)]'
                      : 'border-[#dbeed3] bg-white/74 shadow-[0_16px_48px_rgba(22,51,37,0.05)] hover:border-[#8cc27a]/65'
                  }`}
                >
                  <div className="absolute bottom-0 right-0 top-0 w-32 overflow-hidden opacity-90 transition duration-500 group-hover:scale-105">
                    <Image
                      src={space.image}
                      alt=""
                      fill
                      sizes="9rem"
                      className={`object-cover ${space.focus}`}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.96),rgba(255,255,255,0.30))]" />
                  </div>
                  <div className="relative z-10 flex items-center gap-4 pr-20">
                    <span
                      className={`grid h-11 w-11 shrink-0 place-items-center rounded-full text-xs font-black ${
                        selected
                          ? 'bg-[#8cc27a] text-white shadow-[0_12px_28px_rgba(140,194,122,0.28)]'
                          : 'bg-[#eef8ea] text-[#73a764]'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p className="text-[0.6rem] font-black uppercase tracking-[0.18em] text-[#73a764]">
                        {space.label}
                      </p>
                      <h3 className="mt-1 text-lg font-semibold leading-tight text-[#173628]">
                        {space.title}
                      </h3>
                      <p className="mt-1 text-xs leading-5 text-[#577065]">{space.text}</p>
                    </div>
                  </div>
                </motion.button>
              )
            })}
          </div>

          <motion.div
            data-campus-reveal
            className="relative min-h-[34rem] overflow-hidden rounded-[1.65rem] border border-[#dbeed3] bg-[#06130f] shadow-[0_28px_90px_rgba(22,51,37,0.16)] lg:min-h-[42rem]"
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 180, damping: 24 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSpace.image}
                initial={{ opacity: 0, scale: 1.06, x: 44 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 1.03, x: -44 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={activeSpace.image}
                  alt={activeSpace.title}
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className={`object-cover ${activeSpace.focus}`}
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,19,15,0.25),rgba(6,19,15,0.04)_56%,rgba(6,19,15,0.18)),linear-gradient(180deg,rgba(6,19,15,0.02),rgba(6,19,15,0.58))]" />
            <div className="video-sheen pointer-events-none absolute inset-0 opacity-04" />

            <div className="absolute left-5 top-5 rounded-full border border-white/45 bg-white/90 px-4 py-2 text-[0.62rem] font-black uppercase tracking-[0.16em] text-[#73a764] shadow-[0_14px_36px_rgba(22,51,37,0.08)] backdrop-blur">
              Campus map
            </div>
            <div className="absolute right-5 top-5 rounded-full border border-white/45 bg-white/90 px-4 py-2 text-[0.62rem] font-black uppercase tracking-[0.16em] text-[#173628] shadow-[0_14px_36px_rgba(22,51,37,0.08)] backdrop-blur">
              Explore spaces
            </div>

            <div className="pointer-events-none absolute inset-0">
              {campusSpaces.map((space, index) => {
                const selected = index === active
                const [left, top] = space.pos
                return (
                  <button
                    key={space.title}
                    type="button"
                    onClick={() => setActive(index)}
                    className="pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left, top }}
                    aria-label={`Show ${space.title}`}
                  >
                    <span
                      className={`relative block rounded-full transition ${
                        selected ? 'h-8 w-8' : 'h-5 w-5 hover:h-7 hover:w-7'
                      }`}
                    >
                      <span className="absolute inset-0 rounded-full bg-[#8cc27a]/30 blur-md" />
                      <span
                        className={`relative grid h-full w-full place-items-center rounded-full border border-white/70 text-[0.55rem] font-black ${
                          selected ? 'bg-[#8cc27a] text-white' : 'bg-white/90 text-[#73a764]'
                        }`}
                      >
                        {index + 1}
                      </span>
                    </span>
                  </button>
                )
              })}
            </div>

            <div className="absolute bottom-5 left-5 right-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSpace.title}
                  initial={{ opacity: 0, y: 18, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -18, filter: 'blur(10px)' }}
                  transition={{ duration: 0.5 }}
                  className="max-w-2xl rounded-[1.2rem] border border-white/46 bg-white/92 p-5 text-[#173628] shadow-[0_18px_50px_rgba(22,51,37,0.14)] backdrop-blur-xl"
                >
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#73a764]">
                    {activeSpace.label}
                  </p>
                  <h3 className="mt-2 text-3xl font-semibold leading-none text-[#173628] md:text-4xl">
                    {activeSpace.title}
                  </h3>
                  <p className="mt-3 text-base font-medium leading-7 text-[#577065]">
                    {activeSpace.text}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-4 grid grid-cols-6 gap-2">
                {campusSpaces.map((space, index) => (
                  <button
                    key={space.title}
                    type="button"
                    onClick={() => setActive(index)}
                    className={`h-1.5 rounded-full transition ${
                      index === active ? 'bg-[#8cc27a]' : 'bg-white/48 hover:bg-white/78'
                    }`}
                    aria-label={`Select ${space.title}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
