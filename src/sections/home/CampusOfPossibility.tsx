'use client'

import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const campusSpaces = [
  {
    title: 'Classrooms',
    verb: 'Learn',
    text: 'Focused rooms for discussion, clarity and confidence.',
    image: '/images/primary-school.png',
    focus: 'object-[50%_42%]',
  },
  {
    title: 'Innovation Labs',
    verb: 'Build',
    text: 'Robotics, science and ideas become visible prototypes.',
    image: '/images/dps-learning-different.png',
    focus: 'object-[50%_44%]',
  },
  {
    title: 'Library',
    verb: 'Discover',
    text: 'Quiet reading and research build independent thinking.',
    image: '/images/dps-campus-life.png',
    focus: 'object-[42%_50%]',
  },
  {
    title: 'Sports Infrastructure',
    verb: 'Play',
    text: 'Movement, teamwork and resilience become daily habits.',
    image: '/images/leadership.png',
    focus: 'object-[50%_40%]',
  },
  {
    title: 'Arts Facilities',
    verb: 'Perform',
    text: 'Expression, rhythm, colour and stage confidence.',
    image: '/images/early-years.png',
    focus: 'object-[50%_36%]',
  },
  {
    title: 'Outdoor Learning Spaces',
    verb: 'Grow',
    text: 'Open air discovery, care and observation.',
    image: '/images/dps-campus-life.png',
    focus: 'object-[50%_50%]',
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
        duration: 0.9,
        ease: 'power4.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 78%',
          once: true,
        },
      })

      gsap.from('[data-campus-chip]', {
        opacity: 0,
        y: 26,
        scale: 0.94,
        duration: 0.75,
        ease: 'power4.out',
        stagger: 0.05,
        scrollTrigger: {
          trigger: '[data-campus-rail]',
          start: 'top 84%',
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
      className="section-depth relative overflow-hidden bg-[#fbfdf9] px-5 py-9 text-[#173628] sm:px-6 lg:px-10 lg:py-12"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f6fbf2_58%,#ffffff_100%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(100,145,89,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(100,145,89,0.08)_1px,transparent_1px)] [background-size:92px_92px]" />
      <div className="section-divider-glow absolute inset-x-10 top-0 opacity-35" />

      <div className="relative mx-auto max-w-[96rem]">
        <div data-campus-reveal className="grid gap-4 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#73a764]">
              Section 6 - Campus of Possibility
            </p>
            <h2 className="mt-3 max-w-3xl text-4xl font-semibold leading-none text-[#173628] md:text-5xl">
              One campus. Many ways to grow.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {['Explore', 'Create', 'Perform'].map((label) => (
              <div
                key={label}
                className="rounded-lg border border-[#dbeed3] bg-white/86 px-4 py-3 shadow-[0_16px_44px_rgba(22,51,37,0.06)] backdrop-blur"
              >
                <p className="text-2xl font-semibold leading-none text-[#173628]">{label}</p>
                <p className="mt-1.5 text-[0.6rem] font-black uppercase tracking-[0.16em] text-[#73a764]">
                  Campus mode
                </p>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          data-campus-reveal
          className="relative mt-5 min-h-[34rem] overflow-hidden rounded-[1.8rem] border border-[#dbeed3] bg-[#06130f] shadow-[0_30px_100px_rgba(22,51,37,0.16)] md:min-h-[36rem] lg:min-h-[37rem]"
          whileHover={{ y: -4 }}
          transition={{ type: 'spring', stiffness: 170, damping: 24 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSpace.image}
              initial={{ opacity: 0, scale: 1.05, x: 44 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 1.03, x: -44 }}
              transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={activeSpace.image}
                alt={activeSpace.title}
                fill
                sizes="100vw"
                className={`object-cover ${activeSpace.focus}`}
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,19,15,0.74),rgba(6,19,15,0.14)_44%,rgba(6,19,15,0.46)),linear-gradient(180deg,rgba(6,19,15,0.04),rgba(6,19,15,0.70))]" />
          <div className="video-sheen pointer-events-none absolute inset-0 opacity-05" />

          <div className="absolute left-5 top-5 rounded-full border border-white/28 bg-white/90 px-4 py-2 text-[0.62rem] font-black uppercase tracking-[0.16em] text-[#73a764] shadow-[0_14px_36px_rgba(22,51,37,0.08)] backdrop-blur">
            Campus discovery
          </div>

          <div className="absolute right-5 top-5 hidden rounded-full border border-white/28 bg-white/90 px-4 py-2 text-[0.62rem] font-black uppercase tracking-[0.16em] text-[#173628] shadow-[0_14px_36px_rgba(22,51,37,0.08)] backdrop-blur md:block">
            6 learning spaces
          </div>

          <div className="absolute bottom-6 left-5 right-5 grid gap-3 lg:grid-cols-[0.46fr_0.54fr] lg:items-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSpace.title}
                initial={{ opacity: 0, y: 20, filter: 'blur(12px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(12px)' }}
                transition={{ duration: 0.52 }}
                className="rounded-[1.1rem] border border-white/28 bg-white/92 p-4 text-[#173628] shadow-[0_18px_54px_rgba(22,51,37,0.14)] backdrop-blur-xl"
              >
                <p className="text-xs font-black uppercase tracking-[0.24em] text-[#73a764]">
                  {activeSpace.verb}
                </p>
                <h3 className="mt-2 text-3xl font-semibold leading-none text-[#173628] md:text-4xl">
                  {activeSpace.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm font-medium leading-6 text-[#577065] md:text-base">
                  {activeSpace.text}
                </p>
              </motion.div>
            </AnimatePresence>

            <div data-campus-rail className="grid grid-cols-2 gap-3 md:grid-cols-3">
              {campusSpaces.map((space, index) => {
                const selected = index === active
                return (
                  <motion.button
                    key={space.title}
                    data-campus-chip
                    type="button"
                    onClick={() => setActive(index)}
                    onMouseEnter={() => setActive(index)}
                    whileHover={{ y: -6 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 22 }}
                    className={`group relative min-h-20 overflow-hidden rounded-lg border text-left transition duration-500 ${
                      selected
                        ? 'border-[#8cc27a] bg-white shadow-[0_18px_48px_rgba(22,51,37,0.16)]'
                        : 'border-white/30 bg-white/72 hover:bg-white'
                    }`}
                  >
                    <Image
                      src={space.image}
                      alt=""
                      fill
                      sizes="14rem"
                      className={`object-cover opacity-55 transition duration-500 group-hover:scale-105 ${space.focus}`}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.95),rgba(255,255,255,0.54))]" />
                    <div className="relative z-10 p-2.5">
                      <p className="text-[0.58rem] font-black uppercase tracking-[0.16em] text-[#73a764]">
                        {String(index + 1).padStart(2, '0')} / {space.verb}
                      </p>
                      <p className="mt-1.5 text-sm font-semibold leading-tight text-[#173628]">
                        {space.title}
                      </p>
                    </div>
                  </motion.button>
                )
              })}
            </div>
          </div>

          <div className="absolute inset-x-5 bottom-3 h-1 overflow-hidden rounded-full bg-white/28">
            <motion.div
              key={active}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2.2, ease: 'linear' }}
              className="h-full bg-[#8cc27a]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
