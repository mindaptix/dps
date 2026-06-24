'use client'

import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'

const ease = [0.22, 1, 0.36, 1] as const

export function LearningThatMatters() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.35 })
  const headingY = useTransform(smoothProgress, [0, 0.5, 1], [80, 0, -70])
  const copyY = useTransform(smoothProgress, [0, 0.5, 1], [120, 0, -92])
  const lineScale = useTransform(smoothProgress, [0.12, 0.62], [0, 1])

  return (
    <section ref={sectionRef} id="journey" className="relative min-h-screen overflow-hidden bg-white px-5 py-24 text-[#16182d] sm:px-8 lg:px-12 lg:py-32">
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full border border-[#16182d]/10" />
      <div className="pointer-events-none absolute -right-56 top-10 h-[44rem] w-[44rem] rounded-full border border-[#16182d]/10" />

      <div className="mx-auto grid min-h-[70vh] max-w-[112rem] items-center gap-12 lg:grid-cols-[0.48fr_0.52fr]">
        <div className="grid gap-10 lg:grid-cols-[4rem_1fr] lg:items-center">
          <div className="hidden h-[22rem] items-center justify-center lg:flex">
            <div className="flex h-full flex-col items-center gap-6">
              <p className="origin-center -rotate-90 whitespace-nowrap text-sm font-black uppercase tracking-[0.22em] text-[#16182d]">
                Study with us
              </p>
              <motion.span style={{ scaleY: lineScale }} className="h-20 w-px origin-top bg-[#16182d]" />
            </div>
          </div>

          <motion.div
            style={{ y: headingY }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, ease }}
          >
            <p className="mb-5 text-xs font-black uppercase tracking-[0.32em] text-[#9b6b22] lg:hidden">
              Study with us
            </p>
            <h2 className="font-serif text-[clamp(3rem,5.5vw,6rem)] font-medium uppercase leading-[0.94] tracking-[0.12em] text-[#16182d]">
              Learning That Matters
            </h2>
          </motion.div>
        </div>

        <motion.div
          style={{ y: copyY }}
          initial={{ opacity: 0, y: 46 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.82, delay: 0.08, ease }}
          className="max-w-3xl"
        >
          <p className="text-[clamp(1.35rem,2vw,2rem)] font-medium leading-[1.42] text-[#16182d]">
            At DPS, children actively engage with meaningful learning, thoughtfully designed to
            encourage academic curiosity. They work in classrooms where they ask, and are asked,
            challenging questions to deepen their understanding.
          </p>

          <p className="mt-7 text-[clamp(1.15rem,1.6vw,1.45rem)] font-medium leading-[1.55] text-[#33364f]">
            They explore ideas, investigate questions, solve problems, create solutions,
            collaborate with others, and reflect on their experiences. They learn not simply to
            remember information, but to understand, apply, innovate, and contribute.
          </p>

          <motion.a
            href="#child"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10 inline-flex items-center gap-6 bg-[#16182d] px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white"
          >
            Approach to learning
            <span className="text-2xl leading-none">-&gt;</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export const ChildGrowthTimeline = LearningThatMatters
