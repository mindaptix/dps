'use client'

import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'

const parentQuestions = [
  {
    question: 'Will my child feel safe?',
    answer: 'Answered through care you can see.',
    icon: 'shield',
    accent: 'bg-[#eaf3ef] text-[#123627] border-[#cddfd5]',
  },
  {
    question: 'Will my child be happy?',
    answer: 'Answered through belonging, friendships, and joy.',
    icon: 'smile',
    accent: 'bg-[#fff1ca] text-[#7b560d] border-[#e6c877]',
  },
  {
    question: 'Will confidence grow here?',
    answer: 'Answered through voice, challenge, and encouragement.',
    icon: 'spark',
    accent: 'bg-[#f9e8ee] text-[#7a2634] border-[#e7bfca]',
  },
  {
    question: 'Will teachers truly care?',
    answer: 'Answered through attention, mentoring, and trust.',
    icon: 'heart',
    accent: 'bg-[#e9edf8] text-[#08246c] border-[#c6d0ea]',
  },
  {
    question: 'Will future doors open?',
    answer: 'Answered through strong learning and character.',
    icon: 'door',
    accent: 'bg-[#efe8dc] text-[#6a4311] border-[#d7c4a9]',
  },
]

const ease = [0.22, 1, 0.36, 1] as const

export function WhySchoolExists() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 82, damping: 24, mass: 0.32 })
  const headingY = useTransform(smoothProgress, [0, 0.5, 1], [70, 0, -52])
  const cardsY = useTransform(smoothProgress, [0, 0.5, 1], [90, 0, -34])
  const ringY = useTransform(smoothProgress, [0, 1], [48, -70])

  return (
    <section ref={sectionRef} id="why-school-exists" className="relative isolate overflow-hidden bg-[#f6f1e6] px-5 py-20 text-[#071827] sm:px-8 lg:px-12 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_15%,rgba(216,188,101,0.16),transparent_28%),radial-gradient(circle_at_90%_80%,rgba(23,35,58,0.08),transparent_30%)]" />
      <motion.div style={{ y: ringY }} className="pointer-events-none absolute -left-28 top-24 h-80 w-80 rounded-full border border-[#d8bc65]/35" />
      <motion.div style={{ y: ringY }} className="pointer-events-none absolute -right-40 bottom-10 h-[34rem] w-[34rem] rounded-full border border-[#d8bc65]/24" />

      <div className="relative mx-auto max-w-[112rem]">
        <motion.div
          style={{ y: headingY }}
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease }}
          className="mx-auto max-w-5xl text-center"
        >
          <p className="text-xs font-black uppercase tracking-[0.42em] text-[#9b6b22]">
            What parents truly ask
          </p>
          <h2 className="mt-6 text-[clamp(3rem,5.8vw,6.3rem)] font-black leading-[1.02] tracking-normal text-[#071827]">
            Built Around The Feelings Behind Every Admission Decision
          </h2>
        </motion.div>

        <motion.div style={{ y: cardsY }} className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {parentQuestions.map((item, index) => (
            <motion.article
              key={item.question}
              initial={{ opacity: 0, y: 42, rotate: index % 2 ? 1.6 : -1.6 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.72, delay: index * 0.07, ease }}
              whileHover={{ y: -12, rotate: index % 2 ? -1.2 : 1.2 }}
              className="group relative min-h-[20rem] overflow-hidden rounded-[1.7rem] border border-[#dfd2b9] bg-white px-7 py-8 shadow-[0_22px_70px_rgba(23,35,58,0.10)] transition duration-500 hover:border-[#d8bc65] hover:shadow-[0_30px_90px_rgba(23,35,58,0.16)]"
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(216,188,101,0.12),transparent_42%)] opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#d8bc65] via-[#9b6b22] to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="relative flex items-center justify-between">
                <span className="block h-1.5 w-14 rounded-full bg-[#d8bc65]" />
                <span className={`grid h-13 w-13 place-items-center rounded-2xl border ${item.accent} transition duration-500 group-hover:-translate-y-1 group-hover:rotate-3`}>
                  <QuestionIcon name={item.icon} />
                </span>
              </div>

              <div className="relative mt-12">
                <span className="absolute -right-4 -top-16 text-[7rem] font-black leading-none text-[#071827]/[0.035]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="max-w-[13rem] text-2xl font-black leading-[1.08] tracking-[-0.02em] text-[#071827]">
                  {item.question}
                </h3>
                <p className="mt-7 text-base font-medium leading-7 text-[#5d6872]">
                  {item.answer}
                </p>
              </div>

              <div className="absolute bottom-5 right-5 grid h-10 w-10 place-items-center rounded-full border border-[#d8bc65]/55 text-[#9b6b22] opacity-0 transition duration-500 group-hover:opacity-100">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                  <path d="M7 17 17 7" />
                  <path d="M8 7h9v9" />
                </svg>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function QuestionIcon({ name }: { name: string }) {
  const common = {
    className: 'h-6 w-6',
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    strokeWidth: 1.8,
    viewBox: '0 0 24 24',
  }

  if (name === 'shield') {
    return (
      <svg {...common}>
        <path d="M12 3 19 6v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3Z" />
        <path d="m9.5 12 1.7 1.7 3.5-4" />
      </svg>
    )
  }

  if (name === 'smile') {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M8.5 10h.01M15.5 10h.01" />
        <path d="M8.5 14.5c1.8 1.7 5.2 1.7 7 0" />
      </svg>
    )
  }

  if (name === 'spark') {
    return (
      <svg {...common}>
        <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
        <path d="M5 16l.7 1.6L7.5 18l-1.8.4L5 20l-.7-1.6L2.5 18l1.8-.4L5 16Z" />
      </svg>
    )
  }

  if (name === 'heart') {
    return (
      <svg {...common}>
        <path d="M20.5 8.8c0 5.1-8.5 9.7-8.5 9.7S3.5 13.9 3.5 8.8A4.4 4.4 0 0 1 12 6.9a4.4 4.4 0 0 1 8.5 1.9Z" />
      </svg>
    )
  }

  return (
    <svg {...common}>
      <path d="M5 20V8l7-4 7 4v12" />
      <path d="M9 20v-6h6v6" />
      <path d="M9 10h.01M15 10h.01" />
    </svg>
  )
}
