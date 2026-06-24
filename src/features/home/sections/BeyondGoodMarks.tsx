'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion'

const slides = [
  {
    letter: 'A',
    eyebrow: 'Education beyond the report card',
    title: 'Every Parent Wants More Than Good Marks',
    body:
      'Parents want children who are confident, happy, resilient, collaborative, and ready to build meaningful lives.',
    image: '/images/education-beyond-marks.png',
  },
  {
    letter: 'B',
    eyebrow: 'Confidence for life',
    title: 'Children Need More Than Marks To Thrive',
    body:
      'They need curiosity to explore, courage to stand up for what is right, and the ability to work well with others.',
    image: '/images/early-years.png',
  },
  {
    letter: 'C',
    eyebrow: 'A richer school day',
    title: 'Learning Must Shape Character Too',
    body:
      'At DPS, academic excellence, wellbeing, character, and future readiness come together through one complete school experience.',
    image: '/images/leadership.png',
  },
  {
    letter: 'D',
    eyebrow: 'The purpose of education',
    title: 'Good Marks Matter. Good Lives Matter More.',
    body:
      'The purpose of DPS is to help every child grow with knowledge, confidence, compassion, and a clear sense of possibility.',
    image: '/images/dps-campus-life.png',
  },
]

export function BeyondGoodMarks() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.35 })
  const imageY = useTransform(smoothProgress, [0, 1], ['0%', '-8%'])
  const ringRotate = useTransform(smoothProgress, [0, 1], [0, 28])

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const nextIndex = Math.min(slides.length - 1, Math.max(0, Math.floor(latest * slides.length)))
    setActiveIndex(nextIndex)
  })

  const activeSlide = slides[activeIndex]

  return (
    <section ref={sectionRef} id="beyond-marks" className="relative h-[420vh] bg-white text-[#08246c]">
      <div className="sticky top-0 h-screen overflow-hidden bg-white">
        <motion.div
          aria-hidden="true"
          style={{ rotate: ringRotate }}
          className="pointer-events-none absolute -right-[18rem] -top-[16rem] h-[70rem] w-[70rem] rounded-full border border-[#08246c]/16"
        />

        <div className="absolute inset-y-0 left-0 hidden w-[34vw] overflow-hidden rounded-r-[52%] lg:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.image}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.03 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <motion.div style={{ y: imageY }} className="absolute -inset-y-10 inset-x-0">
                <Image
                  src={activeSlide.image}
                  alt={activeSlide.title}
                  fill
                  sizes="34vw"
                  className="object-cover object-center"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mx-auto grid h-full max-w-[112rem] grid-cols-1 items-center px-6 pt-32 md:px-10 lg:grid-cols-[0.38fr_0.62fr] lg:px-16">
          <div className="hidden lg:block" />

          <div className="relative z-10 max-w-4xl lg:pl-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.title}
                initial={{ opacity: 0, y: 46, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -34, filter: 'blur(7px)' }}
                transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="pointer-events-none absolute -left-24 -top-24 hidden font-serif text-[14rem] font-medium leading-none text-[#f3a000]/42 lg:block">
                  {activeSlide.letter}
                </span>

                <p className="relative text-sm font-semibold uppercase tracking-[0.2em] text-[#f3a000]">
                  {activeSlide.eyebrow}
                </p>

                <h2 className="relative mt-5 max-w-3xl text-[clamp(3rem,5.4vw,6.2rem)] font-black uppercase leading-[0.94] tracking-normal text-[#08246c]">
                  {activeSlide.title}
                </h2>

                <p className="relative mt-7 max-w-3xl text-xl font-medium leading-9 text-[#08246c] md:text-2xl md:leading-10">
                  {activeSlide.body}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex items-center gap-4">
              <a
                href="#child"
                className="group inline-flex min-h-14 items-center gap-6 rounded-full border border-[#08246c]/30 bg-white px-8 text-sm font-black uppercase tracking-[0.08em] text-[#08246c] shadow-[0_14px_40px_rgba(8,36,108,0.08)] transition hover:-translate-y-0.5"
              >
                Explore learning
                <span className="grid h-12 w-12 place-items-center rounded-full bg-[#f3a000] text-2xl leading-none text-black transition group-hover:translate-x-1">
                  &gt;
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[28rem] lg:block">
          {slides.map((slide, index) => {
            const isActive = index === activeIndex
            const curvePositions = [
              'right-[7.5rem] top-[40%]',
              'right-[11rem] top-[62%]',
              'right-[16rem] top-[82%]',
              'right-[24rem] top-[95%]',
            ]

            return (
              <button
                key={slide.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`pointer-events-auto absolute grid h-24 w-24 -translate-y-1/2 place-items-center rounded-full text-2xl font-medium transition duration-500 ${curvePositions[index]} ${
                  isActive ? 'bg-[#f3a000] text-black' : 'bg-[#f8dfb3] text-[#08246c]/24'
                }`}
              >
                {index + 1}
              </button>
            )
          })}
        </div>

        <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 gap-2 lg:hidden">
          {slides.map((slide, index) => (
            <span
              key={slide.title}
              className={`h-2.5 rounded-full transition-all ${index === activeIndex ? 'w-10 bg-[#f3a000]' : 'w-2.5 bg-[#08246c]/20'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
