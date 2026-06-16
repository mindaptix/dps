'use client'

import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

const questions = [
  ['Happy', 'Will my child be happy here?', 'Belonging, friendships, joyful classrooms, and emotional safety.'],
  ['Safe', 'Will my child be safe?', 'Secure campus systems, attentive adults, wellbeing care, and trusted communication.'],
  ['Future', 'Will my child get into a good university?', 'Strong academics, guidance, profile-building, and future pathways.'],
  ['Different', 'What makes this school different?', 'A learning model built around character, creativity, leadership, and real-world readiness.'],
  ['Become', 'What kind of person will my child become here?', 'Curious thinker, compassionate leader, ethical decision maker, and global citizen.'],
  ['Worth', 'Is this school worth the investment?', 'Visible growth, parent partnership, outcomes, confidence, and lifelong capability.'],
]

export function ParentDecisionQuestions() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!sectionRef.current) {
      return
    }

    const context = gsap.context(() => {
      gsap.from('[data-question-heading] > *', {
        opacity: 0,
        y: 28,
        duration: 0.75,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 72%',
        },
      })

      gsap.from('[data-question-card]', {
        opacity: 0,
        y: 56,
        rotateX: -12,
        duration: 0.85,
        stagger: 0.08,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '[data-question-grid]',
          start: 'top 76%',
        },
      })
    }, sectionRef)

    return () => context.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#061813] px-6 py-20 text-white lg:py-24">
      <div className="absolute -left-24 top-12 h-80 w-80 rounded-full bg-[#caa66a]/12 blur-3xl" />
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_60%_35%,rgba(202,166,106,0.14),transparent_34%)]" />
      <div className="mx-auto max-w-[96rem]">
        <div data-question-heading className="grid gap-8 lg:grid-cols-[0.62fr_0.38fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#d9bd80]">
              Parent decision journey
            </p>
            <h2 className="mt-5 max-w-5xl text-[clamp(2.3rem,4vw,4.9rem)] font-semibold leading-[1.06] tracking-[-0.045em]">
              Every section of the website should answer what parents are really asking.
            </h2>
          </div>
          <p className="max-w-lg text-base leading-8 text-white/70">
            A parent does not only compare facilities. They imagine their child&apos;s happiness,
            safety, confidence, future and values. The homepage now starts from those questions.
          </p>
        </div>

        <div data-question-grid className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {questions.map(([tag, question, answer], index) => (
            <motion.article
              key={question}
              data-question-card
              whileHover={{ y: -10, rotateX: 4, scale: 1.018 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              className="motion-card premium-glow relative min-h-64 overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.045] p-7"
            >
              <div className="absolute right-6 top-6 text-6xl font-semibold leading-none text-[#d9bd80]/10">
                0{index + 1}
              </div>
              <p className="inline-flex rounded-full border border-[#d9bd80]/30 px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.18em] text-[#d9bd80]">
                {tag}
              </p>
              <h3 className="mt-8 max-w-sm text-2xl font-semibold leading-tight tracking-[-0.025em]">
                {question}
              </h3>
              <p className="mt-5 text-sm leading-7 text-white/66">{answer}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
