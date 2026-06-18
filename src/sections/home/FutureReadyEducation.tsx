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
      className="section-depth relative overflow-hidden bg-[#f8fcf6] px-5 py-10 text-[#173628] sm:px-6 lg:px-10 lg:py-12"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f7fcf4_48%,#ffffff_100%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(100,145,89,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(100,145,89,0.08)_1px,transparent_1px)] [background-size:88px_88px]" />
      <div className="section-divider-glow absolute inset-x-10 top-0 opacity-35" />

      <div className="relative mx-auto max-w-[96rem]">
        <div data-future-reveal className="max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#73a764]">
              Section 5 - Future Ready Education
            </p>
            
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-[0.34fr_0.66fr]">
          <div className="grid gap-3">
            <div data-future-grid className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
              {skills.map((skill, index) => {
                const selected = index === active
                return (
                  <motion.button
                    key={skill.title}  
                    data-future-card
                    type="button"
                    onClick={() => setActive(index)}
                    onMouseEnter={() => setActive(index)}
                    whileHover={{ x: 8 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 22 }}
                    className={`group relative min-h-20 overflow-hidden rounded-lg border p-3.5 text-left transition duration-500 ${
                      selected
                        ? 'border-[#8cc27a] bg-white text-[#173628] shadow-[0_22px_70px_rgba(22,51,37,0.14)]'
                        : 'border-[#dbeed3] bg-white/72 text-[#173628] shadow-[0_16px_50px_rgba(22,51,37,0.05)] hover:border-[#8cc27a]/70'
                    }`}
                  >
                    <div className="absolute bottom-0 right-0 top-0 w-28 overflow-hidden opacity-92 transition duration-500 group-hover:scale-105">
                      <Image
                        src={skill.image}
                        alt=""
                        fill
                        sizes="8rem"
                        className={`object-cover ${skill.focus}`}
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.96),rgba(255,255,255,0.42))]" />
                    </div>
                    <div className="relative z-10 flex items-center gap-3 pr-16">
                      <span
                        className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-xs font-black ${
                          selected
                          ? 'bg-[#8cc27a] text-white shadow-[0_10px_26px_rgba(140,194,122,0.28)]'
                            : 'bg-[#eef8ea] text-[#73a764]'
                        }`}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <p className="text-[0.58rem] font-black uppercase tracking-[0.16em] text-[#73a764]">
                          {skill.tag}
                        </p>
                        <h4 className="mt-1 text-base font-semibold leading-tight">{skill.title}</h4>
                        <p className="mt-0.5 text-xs leading-5 text-[#5f7468]">{skill.line}</p>
                      </div>
                    </div>
                  </motion.button>
                )
              })}
            </div>
          </div>

          <motion.div
            data-future-reveal
            className="relative min-h-[29rem] overflow-hidden rounded-[1.5rem] border border-[#dbeed3] bg-[#06130f] shadow-[0_26px_90px_rgba(22,51,37,0.16)] lg:min-h-[33rem]"
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

            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,19,15,0.20),rgba(6,19,15,0.02)_55%,rgba(6,19,15,0.10)),linear-gradient(180deg,rgba(6,19,15,0.02),rgba(6,19,15,0.50))]" />
            <div className="video-sheen pointer-events-none absolute inset-0 opacity-04" />

            <div className="absolute left-4 top-4 rounded-full border border-white/45 bg-white/90 px-3.5 py-1.5 text-[0.58rem] font-black uppercase tracking-[0.16em] text-[#73a764] shadow-[0_14px_36px_rgba(22,51,37,0.08)] backdrop-blur">
              Real campus learning
            </div>

            <div className="absolute right-4 top-4 rounded-full border border-white/45 bg-white/90 px-3.5 py-1.5 text-[0.58rem] font-black uppercase tracking-[0.16em] text-[#173628] shadow-[0_14px_36px_rgba(22,51,37,0.08)] backdrop-blur">
              Auto 1.5s
            </div>

            <div className="absolute bottom-4 left-4 right-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSkill.title}
                  initial={{ opacity: 0, y: 18, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -18, filter: 'blur(10px)' }}
                  transition={{ duration: 0.48 }}
                  className="max-w-2xl rounded-[1rem] border border-white/46 bg-white/92 p-4 text-[#173628] shadow-[0_18px_50px_rgba(22,51,37,0.12)] backdrop-blur-xl"
                >
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#73a764]">
                    {activeSkill.tag}
                  </p>
                  <h3 className="mt-1.5 text-2xl font-semibold leading-none text-[#173628] md:text-3xl">
                    {activeSkill.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium leading-6 text-[#577065]">
                    {activeSkill.line}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/42">
                <motion.div
                  key={active}
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.5, ease: 'linear' }}
                  className="h-full bg-[#8cc27a]"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <div data-future-reveal className="mt-4 overflow-hidden">
          <div data-future-track className="flex w-max gap-2.5 will-change-transform">
            {[...skills, ...skills].map((skill, index) => (
              <button
                key={`${skill.title}-${index}`}
                type="button"
                onClick={() => setActive(index % skills.length)}
                className="relative h-20 w-48 overflow-hidden rounded-lg border border-[#dbeed3] bg-white text-left shadow-[0_14px_38px_rgba(22,51,37,0.06)]"
              >
                <Image
                  src={skill.image}
                  alt={skill.title}
                  fill
                  sizes="13rem"
                  className={`object-cover ${skill.focus}`}
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,19,15,0.52),rgba(6,19,15,0.06))]" />
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
