'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const traits = [
  {
    title: 'Curious Thinkers',
    image: '/images/dps-learning-different.png',
    position: 'left-[3%] top-[3%]',
    enter: { x: -180, y: -90, rotate: -15 },
  },
  {
    title: 'Creative Problem Solvers',
    image: '/images/early-years.png',
    position: 'right-[3%] top-[4%]',
    enter: { x: 180, y: -100, rotate: 14 },
  },
  {
    title: 'Compassionate Leaders',
    image: '/images/primary-school.png',
    position: 'left-0 top-[36%]',
    enter: { x: -210, y: 0, rotate: -12 },
  },
  {
    title: 'Confident Communicators',
    image: '/images/leadership.png',
    position: 'right-0 top-[36%]',
    enter: { x: 210, y: 0, rotate: 12 },
  },
  {
    title: 'Responsible Citizens',
    image: '/images/dps-campus-life.png',
    position: 'bottom-[4%] left-[7%]',
    enter: { x: -150, y: 140, rotate: -14 },
  },
  {
    title: 'Ethical Decision Makers',
    image: '/images/dps-founding-families.png',
    position: 'bottom-[4%] right-[7%]',
    enter: { x: 150, y: 140, rotate: 14 },
  },
  {
    title: 'Lifelong Learners',
    image: '/images/university.png',
    position: 'bottom-0 left-[calc(50%_-_8rem)]',
    enter: { x: 0, y: 190, rotate: 0 },
  },
]

const ease = [0.22, 1, 0.36, 1] as const

export function ChildWeNurture() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const orbitScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1.04, 0.96])
  const centerY = useTransform(scrollYProgress, [0, 1], ['4%', '-5%'])
  const centerRotate = useTransform(scrollYProgress, [0, 1], [-4, 4])

  return (
    <section
      ref={sectionRef}
      id="child"
      className="relative isolate overflow-hidden bg-[#e8efe1] px-5 py-10 text-[#102f22] sm:px-6 lg:px-10 lg:py-12"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_56%_44%,rgba(104,151,91,0.22),transparent_30%),radial-gradient(circle_at_8%_12%,rgba(150,124,65,0.08),transparent_24%),radial-gradient(circle_at_92%_84%,rgba(88,132,79,0.14),transparent_25%),linear-gradient(180deg,#eef3e8_0%,#dfeadd_52%,#e9efe2_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.1] [background-image:radial-gradient(circle,rgba(64,109,80,0.32)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(circle_at_50%_45%,black,transparent_76%)]" />
      <motion.div
        aria-hidden="true"
        animate={{ x: ['-26%', '128%'] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute inset-y-0 z-10 w-1/5 bg-[linear-gradient(90deg,transparent,rgba(255,238,180,.34),transparent)] blur-md"
      />

      <div className="pointer-events-none absolute inset-0 hidden place-items-center lg:grid">
        <motion.div
          aria-hidden="true"
          style={{ scale: orbitScale }}
          animate={{ rotate: 360 }}
          transition={{ duration: 44, repeat: Infinity, ease: 'linear' }}
          className="relative h-[36rem] w-[36rem] rounded-full border border-[#79ad6e]/22"
        >
          <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-[#8f7a43] shadow-[0_0_22px_rgba(143,122,67,0.45)]" />
          <span className="absolute bottom-[10%] left-[12%] h-2 w-2 rounded-full bg-[#79ad6e] shadow-[0_0_20px_rgba(121,173,110,0.7)]" />
          <span className="absolute right-[14%] top-[18%] h-2 w-2 rounded-full bg-white shadow-[0_0_22px_rgba(255,255,255,0.85)]" />
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-[98rem]">
        <motion.div
          initial={{ opacity: 0, y: 38 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease }}
          className="mx-auto max-w-[82rem] text-center lg:translate-x-8"
        >
          <p className="mx-auto mb-4 inline-flex items-center gap-3 rounded-full border border-[#9f8a4f]/35 bg-[#eef3e8]/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#476f45] shadow-lg backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#8f7a43] shadow-[0_0_16px_rgba(143,122,67,.5)]" />
            Student profile
          </p>
          <h2 className="text-[clamp(2.5rem,4.3vw,4.6rem)] font-semibold leading-[0.94] tracking-[-0.055em] xl:whitespace-nowrap">
            The Child We Hope To Nurture
          </h2>
          <div className="mx-auto mt-5 max-w-4xl space-y-2 text-base leading-7 text-[#587064] sm:text-lg sm:leading-8">
            <p>Our ambition is not to create one type of student.</p>
            <p>Our ambition is to help every child become the best version of themselves.</p>
          </div>
          <p className="mt-5 font-serif text-2xl font-medium text-[#6a9d60] sm:text-3xl">
            Children who are:
          </p>
        </motion.div>

        <div className="relative mt-5 hidden h-[41rem] translate-x-10 lg:block xl:translate-x-14">
          <div className="absolute inset-0 grid place-items-center">
            <motion.div
              aria-hidden="true"
              animate={{ opacity: [0.16, 0.42, 0.16], scale: [0.88, 1.12, 0.88] }}
              transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute h-[28rem] w-[28rem] rounded-full border border-[#8f7a43]/24 shadow-[0_0_80px_rgba(143,122,67,.14)]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.72, rotate: -8, filter: 'blur(16px)' }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0, filter: 'blur(0px)' }}
              style={{ y: centerY, rotate: centerRotate }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{ duration: 1.1, ease }}
              className="relative h-[29rem] w-[24rem] overflow-hidden rounded-[11rem] border-[8px] border-white bg-[#173628] shadow-[0_42px_130px_rgba(22,51,37,0.24)]"
            >
              <Image
                src="/images/child-we-hope-to-nurture.png"
                alt="Children becoming the best version of themselves through varied learning experiences"
                fill
                sizes="28rem"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071a13]/42 via-transparent to-white/5" />
              <motion.div
                aria-hidden="true"
                animate={{ y: ['-120%', '120%'] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-x-0 h-1/3 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,.22),transparent)]"
              />
            </motion.div>
          </div>

          {traits.map((trait, index) => (
            <TraitCard key={trait.title} trait={trait} index={index} desktop />
          ))}
        </div>

        <div className="mt-10 lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.88 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease }}
            className="relative mx-auto mb-5 h-[28rem] max-w-xl overflow-hidden rounded-[2rem] border-4 border-white shadow-[0_30px_90px_rgba(22,51,37,0.2)]"
          >
            <Image
              src="/images/child-we-hope-to-nurture.png"
              alt="Children becoming the best version of themselves through varied learning experiences"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {traits.map((trait, index) => (
              <TraitCard key={trait.title} trait={trait} index={index} />
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 38, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.85, ease }}
          className="mx-auto mt-8 max-w-[38ch] text-center font-serif text-[clamp(1.8rem,3vw,3.2rem)] font-medium leading-[1.04] text-[#315844] lg:mt-6"
        >
          Because the future belongs to those who never stop growing.
        </motion.p>
      </div>
    </section>
  )
}

function TraitCard({
  trait,
  index,
  desktop = false,
}: {
  trait: (typeof traits)[number]
  index: number
  desktop?: boolean
}) {
  const entry = desktop ? trait.enter : { x: index % 2 === 0 ? -70 : 70, y: 55, rotate: 0 }

  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.72, ...entry }}
      whileInView={{ opacity: 1, x: 0, y: 0, rotate: desktop ? (index % 2 === 0 ? -2 : 2) : 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.9,
        delay: 0.12 + index * 0.08,
        ease,
      }}
      whileHover={{ y: -10, rotate: 0, scale: 1.035, zIndex: 30 }}
      className={
        desktop
          ? `absolute z-20 h-40 w-64 ${trait.position}`
          : 'relative h-52 overflow-hidden rounded-[1.4rem] border-4 border-white shadow-[0_20px_60px_rgba(22,51,37,0.16)]'
      }
    >
      <motion.div
        animate={desktop ? { y: [0, index % 2 === 0 ? -8 : 8, 0] } : undefined}
        transition={desktop ? { duration: 4.6 + index * 0.25, repeat: Infinity, ease: 'easeInOut' } : undefined}
        className={
          desktop
            ? 'relative h-full overflow-hidden rounded-[1.35rem] border-4 border-white bg-[#173628] shadow-[0_24px_70px_rgba(22,51,37,0.22)]'
            : 'relative h-full'
        }
      >
        <Image
          src={trait.image}
          alt={trait.title}
          fill
          sizes={desktop ? '16rem' : '(min-width: 640px) 50vw, 100vw'}
          className="object-cover transition duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071a13]/88 via-[#071a13]/8 to-transparent" />
        <h3 className="absolute bottom-4 left-4 right-4 text-lg font-semibold leading-tight text-white">
          {trait.title}
        </h3>
      </motion.div>
    </motion.article>
  )
}
