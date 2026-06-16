'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const stages = [
  {
    id: 0,
    title: 'Early Years',
    year: 'Nursery',
    icon: '🧒',
    image: '/images/early-years.png',
    promise: 'A secure, joyful start',
    detail: 'Foundation for confidence, curiosity and social skills. Language, play and emotional development begin.',
    highlights: ['Play-based learning', 'Language development', 'Emotional confidence'],
    color: '#FFE4E1',
  },
  {
    id: 1,
    title: 'Primary School',
    year: 'Grades 1-5',
    icon: '📚',
    image: '/images/primary-school.png',
    promise: 'Strong academic foundations',
    detail: 'Building strong fundamentals in reading, numeracy and inquiry-based learning with structured classroom routines.',
    highlights: ['Core academics', 'Critical thinking', 'Classroom habits'],
    color: '#E4F4FF',
  },
  {
    id: 2,
    title: 'Middle School',
    year: 'Grades 6-8',
    icon: '🔬',
    image: '/images/middle-school.png',
    promise: 'Discovery with direction',
    detail: 'Project-based learning, science exploration, clubs and leadership opportunities shape emerging strengths.',
    highlights: ['STEM projects', 'Leadership', 'Self-discovery'],
    color: '#E4FFE4',
  },
  {
    id: 3,
    title: 'Innovation & Leadership',
    year: 'Grades 9-10',
    icon: '💻',
    image: '/images/leadership.png',
    promise: 'Focused academic excellence',
    detail: 'Advanced academics, mentorship programs, competitions and preparation for board exams with career guidance.',
    highlights: ['Advanced academics', 'Career planning', 'Board prep'],
    color: '#FFFFE4',
  },
  {
    id: 4,
    title: 'University Placements',
    year: 'Grades 11-12',
    icon: '🎓',
    image: '/images/university.png',
    promise: 'Future-ready launch',
    detail: 'Portfolio building, entrance exam preparation, university counseling and career readiness for global opportunities.',
    highlights: ['University prep', 'Global readiness', 'Career launch'],
    color: '#E4E4FF',
  },
]

export function LearningJourney() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrent((prev) => (prev + newDirection + stages.length) % stages.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="journey" className="relative overflow-hidden bg-gradient-to-b from-[#061813] via-[#0a1f1a] to-[#061813] px-6 py-20 text-white lg:py-28">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-[#d9bd80]/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-tr from-[#0b513c]/10 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[#d9bd80]">
            ↓ A CHILD&apos;S JOURNEY ↓
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Five Stages of Growth & Excellence
          </h2>
          <p className="mt-4 text-lg text-white/70">
            From early years to university placements, we nurture every stage of your child&apos;s development
          </p>
        </motion.div>

        {/* Timeline Dots */}
        <div className="mb-12 flex justify-center gap-3">
          {stages.map((stage, index) => (
            <motion.button
              key={stage.id}
              onClick={() => {
                setDirection(index > current ? 1 : -1)
                setCurrent(index)
              }}
              className={`h-3 rounded-full transition-all ${
                index === current
                  ? 'w-8 bg-[#d9bd80]'
                  : 'w-3 bg-white/30 hover:bg-white/50'
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>

        {/* Main Slider */}
        <div className="relative h-[600px] overflow-hidden rounded-3xl border border-[#d9bd80]/30 bg-black/40 shadow-2xl">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
              }}
              className="absolute inset-0"
            >
              <div className="grid h-full grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
                {/* Left: Image */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="relative overflow-hidden rounded-2xl"
                >
                  <Image
                    src={stages[current].image}
                    alt={stages[current].title}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Stage Badge */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="absolute bottom-6 left-6 right-6"
                  >
                    <div className="rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 text-center">
                      <p className="text-3xl">{stages[current].icon}</p>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Right: Content */}
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col justify-center"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className="h-1 w-12 bg-gradient-to-r from-[#d9bd80] to-transparent" />
                    <span className="text-sm font-bold uppercase tracking-widest text-[#d9bd80]">
                      Stage {stages[current].id + 1} of {stages.length}
                    </span>
                  </div>

                  <h3 className="mb-2 text-5xl font-bold">{stages[current].title}</h3>
                  <p className="mb-4 text-lg text-[#d9bd80]">{stages[current].year}</p>

                  <p className="mb-6 text-lg font-semibold text-white/90">
                    {stages[current].promise}
                  </p>

                  <p className="mb-8 leading-relaxed text-white/70">
                    {stages[current].detail}
                  </p>

                  {/* Highlights */}
                  <div className="mb-8 grid grid-cols-2 gap-4">
                    {stages[current].highlights.map((highlight, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 + idx * 0.1 }}
                        className="rounded-lg border border-[#d9bd80]/30 bg-[#d9bd80]/10 px-4 py-3 backdrop-blur"
                      >
                        <p className="text-sm font-semibold text-[#d9bd80]">✓ {highlight}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Progress Bar */}
                  <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${((current + 1) / stages.length) * 100}%` }}
                      transition={{ duration: 0.6 }}
                      className="h-full bg-gradient-to-r from-[#d9bd80] to-[#caa66a]"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <motion.button
            onClick={() => paginate(-1)}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 backdrop-blur transition hover:bg-white/20 lg:left-6"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          <motion.button
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 backdrop-blur transition hover:bg-white/20 lg:right-6"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {[
            { label: 'Stage-wise Clarity', desc: 'Each phase has clear learning outcomes' },
            { label: 'Parent Involvement', desc: 'Regular updates and parent takeaways' },
            { label: 'Future Planning', desc: 'Guided pathway to university & careers' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="rounded-xl border border-[#d9bd80]/30 bg-[#d9bd80]/5 p-6 backdrop-blur"
            >
              <p className="font-bold text-[#d9bd80]">{item.label}</p>
              <p className="mt-2 text-sm text-white/70">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

