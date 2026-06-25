'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'

const slides = [
  {
    number: '01',
    label: 'Confidence',
    title: 'Confident',
    body: 'Parents want children who can speak, ask questions, express ideas, and believe in themselves.',
    image: '/images/smiling-schoolchildren-examining-globe.jpg',
    imagePosition: '55% 50%',
    type: 'image',
  },
  {
    number: '02',
    label: 'Happiness',
    title: 'Happy',
    body: 'They want children who feel safe, joyful, included, and excited to learn every day.',
    image: '/images/children-giving-high-five.jpg',
    imagePosition: '45% 50%',
    type: 'image',
  },
  {
    number: '03',
    label: 'Resilience',
    title: 'Resilient',
    body: 'Children should know how to face challenges, handle setbacks, and keep moving forward.',
    image: '/images/one.jpg',
    imagePosition: '50% 50%',
    type: 'image',
  },
  {
    number: '04',
    label: 'Collaboration',
    title: 'Collaborative',
    body: 'They should know how to listen, work with others, share ideas, and grow together.',
    image: '/images/smiling-schoolchildren-examining-globe.jpg',
    imagePosition: '52% 50%',
    type: 'image',
  },
  {
    number: '05',
    label: 'Courage',
    title: 'Courageous',
    body: 'They should have the courage to stand up for what is right, even when it is difficult.',
    image: '/images/children-giving-high-five.jpg',
    imagePosition: '48% 50%',
    type: 'image',
  },
  {
    number: '06',
    label: 'Future ready',
    title: 'Future-Ready',
    body: 'They should leave school not only with qualifications, but with the ability to build meaningful lives.',
    image: '/images/one.jpg',
    imagePosition: '50% 50%',
    type: 'image',
  },
  {
    number: '07',
    label: 'Purpose of DPS',
    title: 'Education prepares children for life.',
    body: 'That is DPS.',
    image: '',
    imagePosition: '50% 50%',
    type: 'final',
  },
]

export function BeyondGoodMarks() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 95,
    damping: 24,
    mass: 0.3,
  })

  const imageScale = useTransform(smoothProgress, [0, 1], [1.01, 1.035])

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const nextIndex = Math.min(
      slides.length - 1,
      Math.max(0, Math.floor(latest * slides.length))
    )

    setActiveIndex(nextIndex)
  })

  const activeSlide = slides[activeIndex]

  return (
    <section
      ref={sectionRef}
      id="beyond-marks"
      className="relative bg-[#f4f5f7] text-[#101828]"
      style={{ height: `${slides.length * 32}vh` }}
    >
      <div className="sticky top-0 h-[520px] overflow-hidden bg-[#f4f5f7]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(1,170,255,0.12),transparent_30%),radial-gradient(circle_at_90%_78%,rgba(243,160,0,0.10),transparent_32%)]" />

        <div className="relative z-10 mx-auto grid h-full max-w-[112rem] grid-cols-1 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="flex h-full items-center px-6 sm:px-10 lg:px-14 xl:px-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-[48rem]"
            >
              <p className="mb-4 text-[0.72rem] font-black uppercase tracking-[0.28em] text-[#01aaff]">
                Beyond marks
              </p>

              <h2 className="text-[clamp(1.85rem,2.75vw,3.65rem)] font-black uppercase leading-[0.95] tracking-[-0.055em] text-[#101828]">
                <span className="block whitespace-nowrap">
                  Every Parent Wants
                </span>
                <span className="block whitespace-nowrap">
                  <span className="text-[#01aaff]">More Than</span> Good Marks
                </span>
              </h2>

              <p className="mt-6 max-w-[40rem] text-[clamp(0.98rem,1.05vw,1.12rem)] font-medium leading-8 text-[#294467]">
                Parents want children who are confident, happy, resilient,
                collaborative, courageous, and ready to build meaningful lives.
              </p>
            </motion.div>
          </div>

          {/* RIGHT IMAGE BOX */}
          <div className="flex h-full items-center justify-center px-6 sm:px-10 lg:px-14 xl:px-20">
            <div className="relative h-[420px] w-full max-w-[48rem] overflow-hidden bg-[#101828]">
              <AnimatePresence mode="wait">
                {activeSlide.type === 'final' ? (
                  <motion.div
                    key="final-purpose"
                    initial={{
                      opacity: 0,
                      y: 24,
                      scale: 0.98,
                      filter: 'blur(8px)',
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      filter: 'blur(0px)',
                    }}
                    exit={{
                      opacity: 0,
                      y: -22,
                      scale: 0.98,
                      filter: 'blur(7px)',
                    }}
                    transition={{
                      duration: 0.58,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute inset-0 flex items-center justify-center bg-[#101828] px-8 text-center"
                  >
                    <div className="relative z-10 max-w-4xl">
                      <p className="mb-5 text-[0.72rem] font-black uppercase tracking-[0.28em] text-[#01aaff]">
                        Purpose of education
                      </p>

                      <h3 className="text-[clamp(2rem,3.7vw,4.4rem)] font-black uppercase leading-[0.9] tracking-[-0.06em] text-white">
                        Education prepares children for life.
                      </h3>

                      <p className="mt-7 text-[clamp(1.1rem,1.6vw,1.85rem)] font-semibold text-white/80">
                        That is DPS.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key={activeIndex}
                    initial={{
                      opacity: 0,
                      scale: 1.02,
                      filter: 'blur(7px)',
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      filter: 'blur(0px)',
                    }}
                    exit={{
                      opacity: 0,
                      scale: 1.01,
                      filter: 'blur(6px)',
                    }}
                    transition={{
                      duration: 0.55,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute inset-0"
                  >
                    <motion.div
                      style={{ scale: imageScale }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={activeSlide.image}
                        alt={activeSlide.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 48vw"
                        className="object-cover"
                        style={{ objectPosition: activeSlide.imagePosition }}
                        priority={activeIndex === 0}
                      />
                    </motion.div>

                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,24,40,0.82)_0%,rgba(16,24,40,0.55)_48%,rgba(16,24,40,0.22)_100%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,24,40,0.04)_0%,rgba(16,24,40,0.68)_100%)]" />

                    <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-8 lg:p-10 xl:p-12">
                      <motion.div
                        key={activeIndex + activeSlide.title}
                        initial={{
                          opacity: 0,
                          y: 24,
                          filter: 'blur(8px)',
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          filter: 'blur(0px)',
                        }}
                        transition={{
                          duration: 0.5,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="max-w-3xl"
                      >
                        <div className="mb-4 flex items-center gap-4">
                          <span className="grid h-11 w-11 place-items-center bg-[#01aaff] text-sm font-black text-white">
                            {activeSlide.number}
                          </span>

                          <span className="border border-white/20 bg-white/15 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white backdrop-blur-md">
                            {activeSlide.label}
                          </span>
                        </div>

                        <h3 className="text-[clamp(2.2rem,4vw,4.8rem)] font-black uppercase leading-[0.84] tracking-[-0.07em] text-white">
                          {activeSlide.title}
                        </h3>

                        <p className="mt-5 max-w-2xl text-[clamp(0.95rem,1.1vw,1.2rem)] font-medium leading-[1.5] text-white/84">
                          {activeSlide.body}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}