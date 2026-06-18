'use client'

import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const skills = [
  {
    title: 'AI & Digital Fluency',
    tag: 'Build',
    line: 'Tools with judgment.',
    image: '/images/leadership.png',
    focus: 'object-[50%_42%]',
  },
  {
    title: 'Entrepreneurship',
    tag: 'Launch',
    line: 'Ideas into action.',
    image: '/images/dps-learning-different.png',
    focus: 'object-[50%_44%]',
  },
  {
    title: 'Sustainability',
    tag: 'Care',
    line: 'Local action, global sense.',
    image: '/images/dps-campus-life.png',
    focus: 'object-[50%_48%]',
  },
  {
    title: 'Design Thinking',
    tag: 'Create',
    line: 'Prototype, test, improve.',
    image: '/images/primary-school.png',
    focus: 'object-[50%_40%]',
  },
  {
    title: 'Financial Literacy',
    tag: 'Decide',
    line: 'Everyday money confidence.',
    image: '/images/middle-school.png',
    focus: 'object-[50%_42%]',
  },
  {
    title: 'Global Competencies',
    tag: 'Connect',
    line: 'Culture and communication.',
    image: '/images/early-years.png',
    focus: 'object-[50%_36%]',
  },
]

export function FutureReadyEducation() {
  const sectionRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)
  const activeSkill = skills[active]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!sectionRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const context = gsap.context(() => {
      gsap.from('[data-future-reveal]', {
        opacity: 0,
        y: 34,
        filter: 'blur(12px)',
        duration: 0.85,
        ease: 'power4.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 78%',
          once: true,
        },
      })

      gsap.from('[data-future-card]', {
        opacity: 0,
        y: 36,
        rotateX: -8,
        duration: 0.78,
        ease: 'power4.out',
        stagger: 0.06,
        scrollTrigger: {
          trigger: '[data-future-grid]',
          start: 'top 82%',
          once: true,
        },
      })

      gsap.to('[data-future-track]', {
        xPercent: -8,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })
    }, sectionRef)

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % skills.length)
    }, 1500)

    return () => {
      context.revert()
      window.clearInterval(timer)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="future-ready"
      className="section-depth relative overflow-hidden bg-[#f8fcf6] px-5 py-14 text-[#173628] sm:px-6 lg:px-10 lg:py-20"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f4fbef_48%,#ffffff_100%)]" />
      <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(100,145,89,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(100,145,89,0.08)_1px,transparent_1px)] [background-size:88px_88px]" />
      <div className="section-divider-glow absolute inset-x-10 top-0 opacity-35" />

      <div className="relative mx-auto max-w-[96rem]">
        <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
          <div data-future-reveal>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#73a764]">
              Section 5 - Future Ready Education
            </p>
            <h2 className="mt-4 max-w-3xl text-5xl font-semibold leading-none text-[#173628] md:text-7xl">
              Skills that feel visible, practical and alive.
            </h2>
          </div>

          <div data-future-reveal className="grid gap-3 sm:grid-cols-3">
            {[
              ['6', 'living skills'],
              ['1.5s', 'auto journey'],
              ['100%', 'project linked'],
            ].map(([value, label]) => (
              <div
                key={label}
                className="border border-[#dbeed3] bg-white/82 px-5 py-4 shadow-[0_18px_50px_rgba(22,51,37,0.06)] backdrop-blur"
              >
                <p className="text-3xl font-semibold leading-none text-[#173628]">{value}</p>
                <p className="mt-2 text-[0.64rem] font-black uppercase tracking-[0.18em] text-[#73a764]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-9 grid gap-5 lg:grid-cols-[0.58fr_0.42fr]">
          <motion.div
            data-future-reveal
            className="relative min-h-[36rem] overflow-hidden border border-[#dbeed3] bg-[#06130f] shadow-[0_26px_90px_rgba(22,51,37,0.16)]"
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 180, damping: 24 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSkill.image}
                initial={{ opacity: 0, scale: 1.06, x: 42 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 1.03, x: -42 }}
                transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={activeSkill.image}
                  alt={activeSkill.title}
                  fill
                  sizes="(min-width: 1024px) 56vw, 100vw"
                  className={`object-cover ${activeSkill.focus}`}
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,19,15,0.82),rgba(6,19,15,0.16)_54%,rgba(6,19,15,0.22)),linear-gradient(180deg,rgba(6,19,15,0.04),rgba(6,19,15,0.78))]" />
            <div className="video-sheen pointer-events-none absolute inset-0 opacity-06" />

            <div className="absolute left-5 top-5 rounded-full border border-white/18 bg-white/88 px-4 py-2 text-[0.62rem] font-black uppercase tracking-[0.16em] text-[#73a764] backdrop-blur">
              Living curriculum
            </div>

            <div className="absolute bottom-6 left-6 right-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSkill.title}
                  initial={{ opacity: 0, y: 18, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -18, filter: 'blur(10px)' }}
                  transition={{ duration: 0.48 }}
                  className="max-w-xl"
                >
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#d9b96f]">
                    {activeSkill.tag}
                  </p>
                  <h3 className="mt-3 text-5xl font-semibold leading-none text-white md:text-6xl">
                    {activeSkill.title}
                  </h3>
                  <p className="mt-4 text-xl font-medium leading-8 text-white/82">
                    {activeSkill.line}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-6 h-1 overflow-hidden bg-white/18">
                <motion.div
                  key={active}
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.5, ease: 'linear' }}
                  className="h-full bg-[#d9b96f]"
                />
              </div>
            </div>
          </motion.div>

          <div data-future-grid className="grid gap-3 sm:grid-cols-2">
            {skills.map((skill, index) => {
              const selected = index === active
              return (
                <motion.button
                  key={skill.title}
                  data-future-card
                  type="button"
                  onClick={() => setActive(index)}
                  onMouseEnter={() => setActive(index)}
                  whileHover={{ y: -8, rotate: index % 2 === 0 ? 1.2 : -1.2 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 22 }}
                  className={`group relative min-h-44 overflow-hidden border p-4 text-left transition duration-500 ${
                    selected
                      ? 'border-[#8cc27a] bg-[#173628] text-white shadow-[0_22px_70px_rgba(22,51,37,0.18)]'
                      : 'border-[#dbeed3] bg-white/88 text-[#173628] shadow-[0_16px_50px_rgba(22,51,37,0.06)] hover:border-[#8cc27a]/70'
                  }`}
                >
                  <div className="absolute right-0 top-0 h-full w-24 overflow-hidden opacity-18 transition duration-500 group-hover:opacity-28">
                    <Image
                      src={skill.image}
                      alt=""
                      fill
                      sizes="8rem"
                      className={`object-cover ${skill.focus}`}
                    />
                  </div>
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div className="flex items-center justify-between gap-4">
                      <span
                        className={`grid h-9 w-9 place-items-center rounded-full text-xs font-black ${
                          selected ? 'bg-[#8cc27a] text-white' : 'bg-[#eef8ea] text-[#73a764]'
                        }`}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span
                        className={`text-[0.62rem] font-black uppercase tracking-[0.16em] ${
                          selected ? 'text-[#d9b96f]' : 'text-[#73a764]'
                        }`}
                      >
                        {skill.tag}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-2xl font-semibold leading-tight">{skill.title}</h4>
                      <p className={`mt-3 text-sm leading-6 ${selected ? 'text-white/74' : 'text-[#5f7468]'}`}>
                        {skill.line}
                      </p>
                    </div>
                  </div>
                </motion.button>
              )
            })}
          </div>
        </div>

        <div data-future-reveal className="mt-5 overflow-hidden">
          <div data-future-track className="flex w-max gap-3 will-change-transform">
            {[...skills, ...skills].map((skill, index) => (
              <button
                key={`${skill.title}-${index}`}
                type="button"
                onClick={() => setActive(index % skills.length)}
                className="relative h-24 w-52 overflow-hidden border border-[#dbeed3] bg-white text-left shadow-[0_14px_38px_rgba(22,51,37,0.06)]"
              >
                <Image
                  src={skill.image}
                  alt={skill.title}
                  fill
                  sizes="13rem"
                  className={`object-cover ${skill.focus}`}
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,19,15,0.78),rgba(6,19,15,0.14))]" />
                <span className="absolute bottom-3 left-3 right-3 text-xs font-black uppercase tracking-[0.08em] text-white">
                  {skill.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
