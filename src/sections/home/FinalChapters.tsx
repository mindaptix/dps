'use client'

import Image from 'next/image'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const reveal = { hidden: { opacity: 0, y: 42 }, visible: { opacity: 1, y: 0 } }

const futurePillars = ['Innovation', 'Technology', 'Leadership', 'Problem-solving']

export function FutureStillBeingWritten() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-4%', '4%'])
  const cardY = useTransform(scrollYProgress, [0, 1], [70, -70])

  return (
    <section ref={sectionRef} id="future" className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_20%_15%,rgba(159,138,79,.12)_0%,transparent_28%),linear-gradient(135deg,#e4eddd_0%,#dfe9d9_48%,#e8efe1_100%)] px-4 py-14 text-[#244f39] md:px-8 md:py-18">
      <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(49,88,68,.10)_1px,transparent_1px),linear-gradient(90deg,rgba(49,88,68,.10)_1px,transparent_1px)] [background-size:54px_54px]" />
      <motion.div aria-hidden="true" animate={{ x: [0, 35, 0], y: [0, -22, 0] }} transition={{ duration: 12, repeat: Infinity }} className="absolute -right-24 top-16 h-80 w-80 rounded-full bg-[#75ad68]/30 blur-[90px]" />
      <motion.div aria-hidden="true" animate={{ x: [0, -28, 0], y: [0, 26, 0] }} transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }} className="absolute -left-32 bottom-10 h-72 w-72 rounded-full bg-[#9f8a4f]/16 blur-[85px]" />
      <div className="relative mx-auto max-w-[90rem]">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8 }} variants={reveal} className="mb-8 font-serif text-[clamp(2.2rem,4vw,4.4rem)] leading-[0.98] tracking-[-0.045em] xl:whitespace-nowrap">Preparing Children for a Future Still Being Written</motion.h2>
        <div className="relative min-h-[42rem] overflow-hidden rounded-[2.2rem] border border-white/55 bg-[#193c2c] shadow-[0_35px_100px_rgba(49,88,68,.30)] md:min-h-[45rem]">
          <motion.div style={{ y: imageY }} className="absolute -inset-y-[8%] inset-x-0"><Image src="/images/future-still-being-written.png" alt="Students creating a sustainable city model in a future-ready learning studio" fill sizes="100vw" className="object-cover object-center" /></motion.div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,37,25,.88)_0%,rgba(24,62,42,.72)_38%,rgba(24,62,42,.12)_70%),linear-gradient(0deg,rgba(10,29,21,.62),transparent_48%)]" />
          <motion.div aria-hidden="true" animate={{ x: ['-35%', '135%'] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-0 z-10 h-full w-1/3 bg-[linear-gradient(90deg,transparent,rgba(255,236,166,.22),transparent)] blur-sm" />
          <div className="relative z-20 flex min-h-[42rem] max-w-3xl flex-col justify-center px-7 py-10 md:min-h-[45rem] md:px-14 lg:px-20">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.45 }} transition={{ staggerChildren: 0.12 }} className="rounded-[2rem] border border-white/18 bg-[#123225]/55 p-6 shadow-2xl backdrop-blur-md md:p-8">
              <motion.div variants={reveal} className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#d8c892]/40 bg-[#d8c892]/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#e6d9ad]">
                <span className="h-2 w-2 rounded-full bg-[#d8c892] shadow-[0_0_16px_rgba(216,200,146,.65)]" />
                Future readiness lab
              </motion.div>
              <div className="space-y-5 text-lg leading-relaxed text-white/82 md:text-xl">
              {['The careers our children will enter may not yet exist.', 'The challenges they will face cannot always be predicted.', 'That is why future readiness is not about teaching children what to think.'].map((line) => <motion.p key={line} variants={reveal}>{line}</motion.p>)}
              <motion.p variants={reveal} className="border-l-2 border-[#d8c892] pl-5 font-serif text-3xl leading-tight text-white md:text-5xl">It is about teaching them how to think.</motion.p>
              </div>
              <motion.div variants={reveal} className="mt-7 flex flex-wrap gap-3">
                {futurePillars.map((pillar, index) => (
                  <motion.span
                    key={pillar}
                    animate={{ y: [0, index % 2 ? 6 : -6, 0] }}
                    transition={{ duration: 2.8 + index * 0.25, repeat: Infinity, ease: 'easeInOut' }}
                    className="rounded-full border border-white/20 bg-white/12 px-4 py-2 text-sm font-medium text-white shadow-lg backdrop-blur-md"
                  >
                    {pillar}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>
          <motion.div style={{ y: cardY }} initial={{ opacity: 0, x: 120, rotate: 7 }} whileInView={{ opacity: 1, x: 0, rotate: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 1, type: 'spring', bounce: 0.18 }} className="absolute bottom-7 right-7 z-30 hidden w-[42%] max-w-xl overflow-hidden rounded-3xl border border-[#c9b36f]/35 bg-[#eaf0e3]/92 p-6 shadow-2xl backdrop-blur-xl lg:block">
            <div className="mb-4 flex items-center gap-4">
              <motion.span animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }} className="grid h-14 w-14 place-items-center rounded-full bg-[#315844] font-serif text-2xl text-[#d8c892]">∞</motion.span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8b7830]">Learning loop</p>
                <p className="font-serif text-2xl text-[#315844]">Think. Build. Reflect.</p>
              </div>
            </div>
            <p className="text-base leading-relaxed text-[#486452]">Through innovation, entrepreneurship, technology, financial literacy, sustainability, leadership, and problem-solving, we prepare students for a world of constant change.</p>
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 z-30 p-7 lg:hidden"><p className="rounded-2xl border border-[#c9b36f]/35 bg-[#eaf0e3]/92 p-5 text-sm leading-relaxed text-[#344f42] backdrop-blur-xl">Through innovation, entrepreneurship, technology, financial literacy, sustainability, leadership, and problem-solving, we prepare students for a world of constant change.</p></div>
        </div>
      </div>
    </section>
  )
}

const campusSpaces = [
  {
    title: 'Spaces to learn.',
    src: '/images/why-we-exist-question-lab.png',
    alt: 'Students learning through hands-on inquiry in a school lab',
    position: '42% 50%',
  },
  {
    title: 'Spaces to create.',
    src: '/images/learning-that-matters.png',
    alt: 'Students creating and experimenting in an active learning space',
    position: '50% 50%',
  },
  {
    title: 'Spaces to perform.',
    src: '/images/dps-campus-life.png',
    alt: 'Students taking part in campus activities and performances',
    position: '50% 46%',
  },
  {
    title: 'Spaces to collaborate.',
    src: '/images/education-beyond-marks.png',
    alt: 'Students collaborating in a classroom environment',
    position: '52% 50%',
  },
  {
    title: 'Spaces to play.',
    src: '/images/journey-of-growth.png',
    alt: 'Children playing and growing together on campus',
    position: '50% 50%',
  },
  {
    title: 'Spaces to reflect.',
    src: '/images/child-we-hope-to-nurture.png',
    alt: 'A calm reflective learning environment for children',
    position: '50% 50%',
  },
]

export function CampusDesignedAroundChildren() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeSpace, setActiveSpace] = useState(0)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.08])
  const activeCampusSpace = campusSpaces[activeSpace]

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSpace((current) => (current + 1) % campusSpaces.length)
    }, 1500)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <section ref={sectionRef} id="campus" className="overflow-hidden bg-[#e6ede0] px-4 py-14 text-[#14382a] md:px-8 md:py-18">
      <div className="mx-auto max-w-[90rem]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.8 }} variants={reveal} className="mb-8 grid items-end gap-4 lg:grid-cols-[1fr_auto]"><h2 className="font-serif text-[clamp(2.3rem,4vw,4.3rem)] leading-[.98] tracking-[-.045em] xl:whitespace-nowrap">A Campus Designed Around Children</h2><p className="font-serif text-xl italic text-[#5c775f] md:text-2xl">Every space tells a story.</p></motion.div>
        <div className="relative min-h-[42rem] overflow-hidden rounded-[2.5rem] bg-[#183a2b] shadow-[0_30px_80px_rgba(35,59,42,.2)] md:min-h-[47rem]">
          <motion.div style={{ scale: imageScale }} className="absolute inset-0">
            <AnimatePresence initial={false} mode="sync">
              <motion.div
                key={activeCampusSpace.src}
                initial={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.04, filter: 'blur(8px)' }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={activeCampusSpace.src}
                  alt={activeCampusSpace.alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  style={{ objectPosition: activeCampusSpace.position }}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,22,14,.08)_30%,rgba(4,22,14,.88)_100%)]" />
          <div className="absolute inset-x-5 bottom-44 z-10 grid grid-cols-2 gap-3 md:inset-x-10 md:bottom-36 md:grid-cols-3 lg:inset-x-14 lg:flex lg:h-40">
            {campusSpaces.map((space, index) => {
              const isActive = activeSpace === index

              return (
                <motion.button
                  type="button"
                  key={space.title}
                  initial={{ opacity: 0, y: index % 2 ? 80 : -70, rotate: index % 2 ? 5 : -5 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  animate={{ flexGrow: isActive ? 1.7 : 1, scale: isActive ? 1.035 : 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.68, delay: index * 0.05, type: 'spring', stiffness: 130, damping: 18 }}
                  onMouseEnter={() => setActiveSpace(index)}
                  onFocus={() => setActiveSpace(index)}
                  className={`group relative min-h-28 overflow-hidden rounded-2xl border text-left shadow-xl md:min-h-32 lg:min-w-0 ${isActive ? 'z-20 border-[#d8c892] shadow-[0_24px_60px_rgba(0,0,0,.32)]' : 'border-white/35'}`}
                >
                  <motion.div animate={{ scale: isActive ? 1.06 : 1 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="absolute inset-0">
                    <Image
                      src={space.src}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 50vw, 18vw"
                      className="object-cover"
                      style={{ objectPosition: space.position }}
                    />
                  </motion.div>
                  <div className={`absolute inset-0 transition duration-700 ${isActive ? 'bg-gradient-to-t from-[#10271f]/88 via-[#10271f]/18 to-transparent' : 'bg-gradient-to-t from-[#10271f]/90 via-[#10271f]/38 to-transparent'}`} />
                  <motion.span animate={{ y: isActive ? -5 : 0 }} className="absolute inset-x-4 bottom-4 font-serif text-base leading-tight text-white md:text-lg">
                    {space.title}
                  </motion.span>
                  <motion.span animate={{ scaleX: isActive ? 1 : 0 }} className="absolute bottom-0 left-4 right-4 h-1 origin-left rounded-full bg-[#d8c892]" />
                </motion.button>
              )
            })}
          </div>
          <motion.p initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }} className="absolute inset-x-6 bottom-6 z-10 max-w-5xl text-sm leading-relaxed text-white/80 md:inset-x-12 md:bottom-10 md:text-lg">Every classroom, laboratory, studio, sports facility, and outdoor environment has been intentionally designed to support the way children learn best.</motion.p>
        </div>
      </div>
    </section>
  )
}

export function TogetherWithFamilies() {
  return (
    <section id="families" className="relative isolate overflow-hidden bg-[#e7f0e3] px-4 py-12 text-[#14382a] md:px-8 md:py-16">
      <div aria-hidden="true" className="absolute -left-40 top-20 h-96 w-96 rounded-full border border-[#7da573]/30" /><div aria-hidden="true" className="absolute -left-24 top-36 h-64 w-64 rounded-full border border-[#7da573]/35" />
      <div className="relative mx-auto grid max-w-[90rem] items-center gap-10 lg:grid-cols-[1.12fr_.88fr] lg:gap-20">
        <motion.div initial={{ opacity: 0, x: -120, rotate: -3 }} whileInView={{ opacity: 1, x: 0, rotate: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1, type: 'spring', bounce: 0.15 }} className="relative min-h-[30rem] overflow-hidden rounded-[45%_45%_2rem_2rem/28%_28%_2rem_2rem] shadow-[0_30px_80px_rgba(35,70,47,.22)] md:min-h-[36rem]"><Image src="/images/together-with-families.png" alt="Parents, teachers and children learning together in a school workshop" fill sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#102d20]/55 via-transparent to-transparent" /></motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ staggerChildren: 0.13 }} className="relative">
          <motion.h2 variants={reveal} className="font-serif text-[clamp(2.6rem,4.4vw,4.8rem)] leading-[.94] tracking-[-.05em] md:whitespace-nowrap">Together with Families</motion.h2>
          <div className="mt-10 space-y-5 text-lg leading-relaxed text-[#486553] md:text-xl"><motion.p variants={reveal}>A child&apos;s education is strongest when school and home work together.</motion.p><motion.p variants={reveal}>We believe parents are partners in the learning journey.</motion.p><motion.p variants={reveal}>Through open communication, meaningful engagement, parent workshops, and a culture of trust, we build a community where every child feels supported.</motion.p></div>
          <motion.p variants={reveal} className="mt-10 border-t border-[#779578]/45 pt-8 font-serif text-3xl italic leading-tight text-[#234c35] md:text-5xl">Because it takes a village to raise a child.</motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export function BeginTheJourney() {
  return (
    <section id="admissions" className="relative isolate flex min-h-[72vh] items-center overflow-hidden bg-[#e7eee0] px-5 py-16 text-[#244f39] md:px-10">
      <motion.div initial={{ scale: 1.18, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }} className="absolute inset-0"><Image src="/images/begin-the-journey.png" alt="A family beginning their school journey together" fill sizes="100vw" className="object-cover object-center" /></motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,253,246,.97)_0%,rgba(249,246,228,.90)_40%,rgba(255,255,255,.08)_72%),linear-gradient(0deg,rgba(240,233,203,.30),transparent_60%)]" />
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} transition={{ staggerChildren: 0.14 }} className="relative z-10 mx-auto w-full max-w-[90rem]"><div className="max-w-3xl">
        <motion.h2 variants={reveal} className="font-serif text-[clamp(3rem,5vw,5.2rem)] leading-[.92] tracking-[-.05em] md:whitespace-nowrap">Begin The Journey</motion.h2>
        <div className="mt-9 max-w-2xl space-y-4 text-lg leading-relaxed text-[#4c6755] md:text-xl"><motion.p variants={reveal}>Choosing a school is one of the most important decisions a family will make.</motion.p><motion.p variants={reveal}>We invite you to visit, explore, ask questions, and experience the DPS difference for yourself.</motion.p><motion.p variants={reveal}>Come and discover a school where children are known, valued, challenged, and inspired.</motion.p></div>
        <motion.div variants={reveal} className="mt-10 flex flex-col gap-4 sm:flex-row"><motion.a whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.98 }} href="#connect" className="rounded-full bg-[#d5b763] px-8 py-4 text-center text-sm font-bold tracking-[.16em] text-[#315844] shadow-[0_15px_45px_rgba(213,183,99,.25)]">SCHEDULE A VISIT</motion.a><motion.a whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.98 }} href="mailto:admissions@dpsgurugram.edu" className="rounded-full border border-[#73916d]/45 bg-white/72 px-8 py-4 text-center text-sm font-bold tracking-[.16em] text-[#315844] backdrop-blur-md">ENQUIRE NOW</motion.a></motion.div>
      </div></motion.div>
    </section>
  )
}
