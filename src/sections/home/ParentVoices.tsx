'use client'

import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const stories = [
  {
    type: 'Parent Testimonial',
    title: 'Trust grew in everyday moments.',
    quote:
      'We saw the school understand our child as a person, not just as a student. That changed everything.',
    name: 'Parent of Grade 4',
    image: '/images/dps-founding-families.png',
    focus: 'object-[48%_50%]',
    metric: 'Known child',
  },
  {
    type: 'Student Story',
    title: 'Confidence became visible.',
    quote:
      'Our child started speaking more, asking better questions and taking part without hesitation.',
    name: 'Parent of Grade 7',
    image: '/images/leadership.png',
    focus: 'object-[50%_40%]',
    metric: 'Visible growth',
  },
  {
    type: 'Family Experience',
    title: 'The communication felt clear.',
    quote:
      'Updates were practical and calm. We always knew what was happening and how our child was doing.',
    name: 'Founding Family',
    image: '/images/dps-hero-students.png',
    focus: 'object-[62%_center]',
    metric: 'Clear updates',
  },
]

const proofPoints = [
  ['Parent Testimonials', 'Real trust, spoken in family language.'],
  ['Student Stories', 'Confidence, curiosity and participation.'],
  ['Family Experiences', 'Safety, communication and belonging.'],
]

export function ParentVoices() {
  const sectionRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)
  const story = stories[active]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!sectionRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const context = gsap.context(() => {
      gsap.from('[data-parent-reveal]', {
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

      gsap.from('[data-parent-proof]', {
        opacity: 0,
        y: 26,
        scale: 0.96,
        duration: 0.7,
        ease: 'power4.out',
        stagger: 0.07,
        scrollTrigger: {
          trigger: '[data-parent-proof-grid]',
          start: 'top 84%',
          once: true,
        },
      })
    }, sectionRef)

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % stories.length)
    }, 3200)

    return () => {
      context.revert()
      window.clearInterval(timer)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="section-depth relative overflow-hidden bg-[#f8fcf6] px-5 py-12 text-[#173628] sm:px-6 lg:px-10 lg:py-16"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f3faef_52%,#ffffff_100%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(100,145,89,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(100,145,89,0.08)_1px,transparent_1px)] [background-size:92px_92px]" />
      <div className="section-divider-glow absolute inset-x-10 top-0 opacity-35" />

      <div className="relative mx-auto max-w-[96rem]">
        <div data-parent-reveal className="grid gap-5 lg:grid-cols-[0.44fr_0.56fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#73a764]">
              Section 7 - Parent Voices
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-none text-[#173628] md:text-6xl">
              Trust, told through families.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[#577065]">
            Parents do not remember only facilities. They remember whether their child felt known,
            supported and confident.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[0.38fr_0.62fr]">
          <div className="grid gap-4">
            <div data-parent-proof-grid className="grid gap-3">
              {proofPoints.map(([title, text], index) => {
                const selected = index === active
                return (
                  <motion.button
                    key={title}
                    data-parent-proof
                    type="button"
                    onClick={() => setActive(index)}
                    onMouseEnter={() => setActive(index)}
                    whileHover={{ x: 8 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 22 }}
                    className={`rounded-lg border p-5 text-left transition duration-500 ${
                      selected
                        ? 'border-[#8cc27a] bg-white shadow-[0_22px_70px_rgba(22,51,37,0.12)]'
                        : 'border-[#dbeed3] bg-white/76 shadow-[0_16px_48px_rgba(22,51,37,0.05)] hover:border-[#8cc27a]/65'
                    }`}
                  >
                    <div className="flex items-center gap-4">
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
                        <p className="text-lg font-semibold leading-tight text-[#173628]">{title}</p>
                        <p className="mt-1 text-sm leading-6 text-[#577065]">{text}</p>
                      </div>
                    </div>
                  </motion.button>
                )
              })}
            </div>

            <div data-parent-reveal className="grid grid-cols-3 gap-3">
              {['Care', 'Safety', 'Growth'].map((label) => (
                <div
                  key={label}
                  className="rounded-lg border border-[#dbeed3] bg-white/82 p-4 text-center shadow-[0_14px_38px_rgba(22,51,37,0.05)]"
                >
                  <p className="text-[0.62rem] font-black uppercase tracking-[0.16em] text-[#73a764]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            data-parent-reveal
            className="relative min-h-[36rem] overflow-hidden rounded-[1.65rem] border border-[#dbeed3] bg-[#06130f] shadow-[0_28px_90px_rgba(22,51,37,0.16)] lg:min-h-[42rem]"
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 180, damping: 24 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={story.image}
                initial={{ opacity: 0, scale: 1.06, x: 44 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 1.03, x: -44 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={story.image}
                  alt={story.type}
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className={`object-cover ${story.focus}`}
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,19,15,0.66),rgba(6,19,15,0.08)_58%,rgba(6,19,15,0.34)),linear-gradient(180deg,rgba(6,19,15,0.04),rgba(6,19,15,0.74))]" />
            <div className="video-sheen pointer-events-none absolute inset-0 opacity-05" />

            <div className="absolute left-5 top-5 rounded-full border border-white/38 bg-white/90 px-4 py-2 text-[0.62rem] font-black uppercase tracking-[0.16em] text-[#73a764] shadow-[0_14px_36px_rgba(22,51,37,0.08)] backdrop-blur">
              Parent proof
            </div>
            <button
              type="button"
              className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full border border-white/45 bg-white/90 text-[#73a764] shadow-[0_14px_36px_rgba(22,51,37,0.08)] backdrop-blur transition hover:scale-105"
              aria-label="Play story"
            >
              <span className="ml-1 h-0 w-0 border-y-[6px] border-l-[9px] border-y-transparent border-l-current" />
            </button>

            <div className="absolute bottom-6 left-6 right-6 grid gap-4 lg:grid-cols-[0.72fr_0.28fr] lg:items-end">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={story.quote}
                  initial={{ opacity: 0, y: 18, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -18, filter: 'blur(10px)' }}
                  transition={{ duration: 0.5 }}
                  className="rounded-[1.2rem] border border-white/42 bg-white/92 p-5 text-[#173628] shadow-[0_18px_50px_rgba(22,51,37,0.14)] backdrop-blur-xl"
                >
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#73a764]">
                    {story.type}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold leading-none text-[#173628] md:text-4xl">
                    {story.title}
                  </h3>
                  <p className="mt-4 text-lg font-medium leading-8 text-[#475f54]">
                    &ldquo;{story.quote}&rdquo;
                  </p>
                  <p className="mt-5 text-sm font-black uppercase tracking-[0.14em] text-[#73a764]">
                    {story.name}
                  </p>
                </motion.blockquote>
              </AnimatePresence>

              <div className="grid gap-3">
                {stories.map((item, index) => (
                  <button
                    key={item.type}
                    type="button"
                    onClick={() => setActive(index)}
                    className={`rounded-lg border px-4 py-3 text-left transition ${
                      index === active
                        ? 'border-[#8cc27a] bg-white text-[#173628]'
                        : 'border-white/28 bg-white/50 text-white hover:bg-white/78 hover:text-[#173628]'
                    }`}
                  >
                    <p className="text-[0.6rem] font-black uppercase tracking-[0.14em] text-[#73a764]">
                      {item.metric}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            <div className="absolute inset-x-6 bottom-3 h-1 overflow-hidden rounded-full bg-white/28">
              <motion.div
                key={active}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 3.2, ease: 'linear' }}
                className="h-full bg-[#8cc27a]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
