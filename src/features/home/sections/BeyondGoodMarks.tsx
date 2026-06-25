'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion'

const slides = [
  {
    letter: 'A',
    eyebrow: 'Education beyond the report card',
    title: 'Every Parent Wants More Than Good Marks',
    titleLines: ['Every Parent Wants', 'More Than', 'Good Marks'],
    body:
      'Parents want children who are confident, happy, resilient, collaborative, and ready to build meaningful lives.',
    image: '/images/smiling-schoolchildren-examining-globe.jpg',
    imagePosition: '55% 50%',
  },
  {
    letter: 'B',
    eyebrow: 'Confidence for life',
    title: 'Children Need More Than Marks To Thrive',
    titleLines: ['Children Need More', 'Than Marks', 'To Thrive'],
    body:
      'They need curiosity to explore, courage to stand up for what is right, and the ability to work well with others.',
    image: '/images/children-giving-high-five.jpg',
    imagePosition: '44% 50%',
  },
  {
    letter: 'C',
    eyebrow: 'A richer school day',
    title: 'Learning Must Shape Character Too',
    titleLines: ['Learning Must', 'Shape Character', 'Too'],
    body:
      'At DPS, academic excellence, wellbeing, character, and future readiness come together through one complete school experience.',
    image: '/images/one.jpg',
    imagePosition: '48% 50%',
  },
  {
    letter: 'D',
    eyebrow: 'The purpose of education',
    title: 'Good Marks Matter. Good Lives Matter More.',
    titleLines: ['Good Marks Matter.', 'Good Lives', 'Matter More.'],
    body:
      'The purpose of DPS is to help every child grow with knowledge, confidence, compassion, and a clear sense of possibility.',
    image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1400&q=90',
    imagePosition: '48% 50%',
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
    <section ref={sectionRef} id="beyond-marks" className="relative h-[420vh] bg-white text-[#4d629e]">
      <div className="sticky top-0 h-screen overflow-hidden bg-white">
        <motion.div
          aria-hidden="true"
          style={{ rotate: ringRotate }}
          className="pointer-events-none absolute -right-[12rem] -top-[16rem] h-[76rem] w-[76rem] rounded-full border border-[#4d629e]/20"
        />

        <div className="absolute inset-y-0 left-0 hidden w-[36vw] overflow-hidden rounded-r-[58%] lg:block xl:w-[38vw]">
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
                  sizes="38vw"
                  className="object-cover contrast-105 saturate-110"
                  style={{ objectPosition: activeSlide.imagePosition }}
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mx-auto grid h-full max-w-[112rem] grid-cols-1 items-center px-6 pt-32 md:px-10 lg:grid-cols-[0.38fr_0.62fr] lg:px-16 xl:grid-cols-[0.4fr_0.6fr]">
          <div className="hidden lg:block" />

          <div className="relative z-10 max-w-[44rem] lg:pl-8 xl:pl-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.title}
                initial={{ opacity: 0, y: 46, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -34, filter: 'blur(7px)' }}
                transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="pointer-events-none absolute -left-20 -top-20 hidden select-none font-sans text-[5.5rem] font-light leading-none text-[#f3a000]/28 lg:block xl:text-[6.5rem]">
                  {activeSlide.letter}
                </span>

                <p className="relative text-[13px] font-medium uppercase tracking-[0.06em] text-[#4d629e]">
                  {activeSlide.eyebrow}
                </p>

                <h2 className="relative mt-5 max-w-3xl text-[clamp(2.85rem,4.35vw,5.05rem)] font-light uppercase leading-[0.98] tracking-normal text-[#4d629e]">
                  {activeSlide.titleLines.map((line, index) => (
                    <span key={line} className={`block ${index > 0 ? 'font-black' : ''}`}>
                      {line}
                    </span>
                  ))}
                </h2>

                <p className="relative mt-7 max-w-[40rem] text-[clamp(1.05rem,1.45vw,1.58rem)] font-normal leading-[1.45] text-[#4d629e]">
                  {activeSlide.body}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex items-center gap-4">
              <a
                href="#child"
                className="group inline-flex min-h-14 items-center gap-6 rounded-full border border-[#4d629e]/28 bg-white px-8 text-sm font-black uppercase tracking-[0.06em] text-[#4d629e] shadow-[0_14px_40px_rgba(77,98,158,0.08)] transition hover:-translate-y-0.5"
              >
                Explore learning
                <span className="grid h-12 w-12 place-items-center rounded-full bg-[#f3a000] text-2xl leading-none text-[#4d629e] transition group-hover:translate-x-1">
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
              'right-[6.5rem] top-[42%]',
              'right-[10rem] top-[63%]',
              'right-[15rem] top-[82%]',
              'right-[23rem] top-[95%]',
            ]

            return (
              <button
                key={slide.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`pointer-events-auto absolute grid h-20 w-20 -translate-y-1/2 place-items-center rounded-full text-xl font-medium italic transition duration-500 xl:h-24 xl:w-24 xl:text-2xl ${curvePositions[index]} ${
                  isActive ? 'bg-[#f3a000] text-black' : 'bg-[#f8dfb3] text-[#4d629e]/24'
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
