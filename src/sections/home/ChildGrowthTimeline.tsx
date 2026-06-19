'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

export function LearningThatMatters() {
  return (
    <section
      id="journey"
      className="relative isolate overflow-hidden bg-[#e8efe1] px-5 py-12 text-[#102f22] sm:px-6 lg:px-10 lg:py-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_20%,rgba(150,124,65,0.08),transparent_25%),radial-gradient(circle_at_88%_76%,rgba(98,145,88,0.16),transparent_28%),linear-gradient(180deg,#edf3e8_0%,#dde8d8_56%,#e8efe1_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.1] [background-image:linear-gradient(rgba(62,105,76,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(62,105,76,0.12)_1px,transparent_1px)] [background-size:92px_92px] [mask-image:linear-gradient(to_bottom,black,transparent_76%)]" />

      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 50, 0], y: [0, -28, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-[4rem] border-[3.5rem] border-[#8cc27a]/10"
      />

      <div className="relative mx-auto max-w-[98rem]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.42 }}
          transition={{ duration: 0.9, ease }}
          className="grid gap-7 lg:grid-cols-[0.52fr_0.48fr] lg:items-center"
        >
          <h2 className="text-[clamp(2.5rem,4vw,4.5rem)] font-semibold leading-[0.92] tracking-[-0.055em] lg:whitespace-nowrap">
            Learning That Matters
          </h2>
          <div className="max-w-[38rem] border-l-2 border-[#d2ad5c] pl-6 lg:justify-self-end">
            <p className="font-serif text-[clamp(1.65rem,2.7vw,3rem)] font-medium leading-[1.03] text-[#405f4e]">
              Learning is not preparation for life.
            </p>
            <p className="mt-3 font-serif text-[clamp(2rem,3.4vw,3.9rem)] font-medium leading-[0.95] text-[#6ea565]">
              Learning is life.
            </p>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.58fr_0.42fr] lg:items-stretch">
          <div className="relative min-h-[32rem] sm:min-h-[36rem]">
            <motion.div
              initial={{ opacity: 0, y: 150, scale: 0.82, rotate: -7, filter: 'blur(14px)' }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: -2, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 1.05, ease }}
              whileHover={{ rotate: 0, scale: 1.012 }}
              className="absolute inset-x-4 bottom-8 top-6 overflow-hidden rounded-[2rem] border-[7px] border-white bg-[#173628] shadow-[0_42px_130px_rgba(22,51,37,0.23)] sm:inset-x-12"
            >
              <Image
                src="/images/learning-that-matters.png"
                alt="Students exploring, investigating and creating solutions through meaningful learning"
                fill
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071a13]/38 via-transparent to-white/5" />
            </motion.div>

            <FlyingPhoto
              image="/images/dps-learning-different.png"
              className="left-0 top-0 h-36 w-48 sm:h-44 sm:w-60"
              initial={{ x: -220, y: -80, rotate: -20 }}
              finalRotate={-5}
              delay={0.22}
              float={-8}
            />
            <FlyingPhoto
              image="/images/primary-school.png"
              className="right-0 top-14 h-32 w-40 sm:h-40 sm:w-52"
              initial={{ x: 220, y: -60, rotate: 18 }}
              finalRotate={5}
              delay={0.36}
              float={9}
            />
            <FlyingPhoto
              image="/images/dps-campus-life.png"
              className="bottom-0 right-[8%] h-32 w-44 sm:h-40 sm:w-56"
              initial={{ x: 160, y: 190, rotate: 17 }}
              finalRotate={3}
              delay={0.5}
              float={-7}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 120, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.12, ease }}
            className="relative flex flex-col justify-center overflow-hidden rounded-[2rem] border border-[#cbd8c2] bg-[#eaf0e3] p-7 text-[#244f39] shadow-[0_32px_110px_rgba(42,70,48,0.13)] sm:p-9 lg:p-11"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(140,194,122,0.20),transparent_38%),linear-gradient(140deg,transparent,rgba(255,255,255,0.025))]" />
            <motion.div
              aria-hidden="true"
              animate={{ scale: [1, 1.18, 1], opacity: [0.12, 0.22, 0.12] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full border border-[#8cc27a]"
            />

            <motion.p
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.75, delay: 0.4, ease }}
              className="relative text-lg font-medium leading-8 text-[#3f5d4b] sm:text-xl sm:leading-9"
            >
              At DPS, children explore ideas, investigate questions, solve problems, create
              solutions, collaborate with others, and reflect on their experiences.
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.62, ease }}
              className="relative my-7 h-px origin-left bg-gradient-to-r from-[#8f7a43] via-[#6f9a62] to-transparent"
            />

            <motion.p
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.75, delay: 0.72, ease }}
              className="relative text-base leading-7 text-[#657666] sm:text-lg sm:leading-8"
            >
              They learn not simply to remember information, but to understand, apply, innovate,
              and contribute.
            </motion.p>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export const ChildGrowthTimeline = LearningThatMatters

function FlyingPhoto({
  image,
  className,
  initial,
  finalRotate,
  delay,
  float,
}: {
  image: string
  className: string
  initial: { x: number; y: number; rotate: number }
  finalRotate: number
  delay: number
  float: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.68, ...initial }}
      whileInView={{ opacity: 1, x: 0, y: 0, rotate: finalRotate, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.95, delay, ease }}
      whileHover={{ y: -12, rotate: 0, scale: 1.04, zIndex: 30 }}
      className={`absolute z-20 ${className}`}
    >
      <motion.div
        animate={{ y: [0, float, 0] }}
        transition={{ duration: 4.8 + delay, repeat: Infinity, ease: 'easeInOut' }}
        className="relative h-full overflow-hidden rounded-[1.3rem] border-4 border-white bg-[#173628] shadow-[0_22px_70px_rgba(22,51,37,0.24)]"
      >
        <Image src={image} alt="" fill sizes="15rem" className="object-cover" />
      </motion.div>
    </motion.div>
  )
}
