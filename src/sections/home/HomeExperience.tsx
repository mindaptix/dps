'use client'

import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChildGrowthTimeline } from './ChildGrowthTimeline'
import { WhatMakesLearningDifferent } from './WhatMakesLearningDifferent'

const childQualities = [
  ['Curious', 'Asks better questions and learns through discovery.', '/images/early-years.png'],
  ['Confident', 'Speaks, performs, presents and participates.', '/images/middle-school.png'],
  ['Compassionate', 'Builds respect, empathy and strong character.', '/images/primary-school.png'],
  ['Future-ready', 'Uses knowledge, technology and judgment together.', '/images/leadership.png'],
]

const futureTracks = ['AI and coding', 'JEE foundation', 'Design thinking', 'Olympiads', 'Leadership labs', 'Global readiness']

const campusSpaces = [
  ['Learning Commons', 'A quiet engine for reading, research and reflection.', '/images/dps-campus-life.png'],
  ['Science Labs', 'Questions turn into experiments children can see.', '/images/dps-learning-different.png'],
  ['Arts Studios', 'Imagination finds voice, colour and performance.', '/images/early-years.png'],
  ['Sports Ecosystem', 'Discipline, teamwork and courage become daily habits.', '/images/leadership.png'],
]

const parentVoices = [
  ['The school understood our child before judging marks.', 'Parent of Grade 4'],
  ['Confidence changed first. Academics followed naturally.', 'Parent of Grade 8'],
  ['We felt there was a plan from nursery to senior school.', 'Parent of Grade 11'],
]

const insights = [
  ['Choosing a school in 2026', 'What parents should look beyond buildings and brochures.'],
  ['Confidence before competition', 'Why children perform better when they feel secure.'],
  ['Future-ready without pressure', 'How preparation can be serious without becoming harsh.'],
]

export function HomeExperience() {
  const rootRef = useRef<HTMLDivElement>(null)
  const childSectionRef = useRef<HTMLElement>(null)
  const [activeTrait, setActiveTrait] = useState(0)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!rootRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-home-reveal]').forEach((item, index) => {
        gsap.from(item, {
          opacity: 0,
          y: 72,
          rotate: index % 2 === 0 ? 1.5 : -1.5,
          scale: 0.965,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 86%',
            once: true,
          },
        })
      })

      gsap.utils.toArray<HTMLElement>('[data-home-section]').forEach((section) => {
        const media = section.querySelectorAll<HTMLElement>('[data-home-media]')
        media.forEach((item, index) => {
          gsap.from(item, {
            opacity: 0,
            y: 52,
            scale: 0.94,
            rotate: index % 2 === 0 ? -2 : 2,
            duration: 1.05,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 82%',
              once: true,
            },
          })

          gsap.to(item, {
            yPercent: index % 2 === 0 ? -7 : -4,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          })
        })
      })

      gsap.to('[data-orbit-line]', {
        rotate: 360,
        scale: 1.08,
        duration: 18,
        repeat: -1,
        ease: 'none',
      })

      if (childSectionRef.current) {
        ScrollTrigger.create({
          trigger: childSectionRef.current,
          start: 'top top',
          end: `+=${window.innerHeight * 1.5}`,
          pin: '[data-child-sticky]',
          scrub: 0.45,
          anticipatePin: 1,
          onUpdate: (self) => {
            const nextTrait = Math.min(childQualities.length - 1, Math.floor(self.progress * childQualities.length))
            setActiveTrait(nextTrait)
          },
        })

        gsap.to('[data-trait-track]', {
          xPercent: -28,
          ease: 'none',
          scrollTrigger: {
            trigger: childSectionRef.current,
            start: 'top top',
            end: `+=${window.innerHeight * 1.5}`,
            scrub: 0.45,
          },
        })

        gsap.from('[data-trait-card]', {
          opacity: 0,
          y: 34,
          scale: 0.94,
          duration: 0.8,
          ease: 'power4.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: childSectionRef.current,
            start: 'top 74%',
            once: true,
          },
        })
      }

      ScrollTrigger.refresh()
    }, rootRef)

    return () => context.revert()
  }, [])

  const [activeTitle, activeText, activeImage] = childQualities[activeTrait]

  return (
    <div ref={rootRef} className="overflow-x-hidden bg-[#06130f] text-[#073626]">
      <section
        ref={childSectionRef}
        data-home-section
        id="child"
        className="section-depth relative isolate overflow-hidden bg-[#0b0704] pb-14 text-white lg:pb-20"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeImage}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.38, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={activeImage}
              alt={`${activeTitle} background`}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_68%_14%,rgba(202,142,44,0.14),transparent_25%),linear-gradient(180deg,rgba(11,7,4,0.9),rgba(16,9,5,0.86)_64%,rgba(11,7,4,0.98)_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b0704] via-[#0b0704]/88 to-transparent" />
        <div className="floating-grain pointer-events-none absolute inset-0 opacity-16" />

        <div className="nurture-gear pointer-events-none absolute left-[-6rem] top-[-8rem] h-[19rem] w-[19rem] text-[#a36f22]/50">
          <GearShape />
        </div>
        <div className="nurture-gear nurture-gear-reverse pointer-events-none absolute right-[7vw] top-[-9rem] h-[22rem] w-[22rem] text-[#a36f22]/58">
          <GearShape reverse />
        </div>

        <div data-child-sticky className="relative z-10 min-h-screen overflow-hidden px-5 py-14 sm:px-6 md:px-12 lg:px-16">
          <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-[96rem] gap-7 lg:grid-cols-[0.48fr_0.52fr] lg:items-center">
            <div className="relative">
              <div className="flex items-center justify-between gap-6">
                <p className="text-xs font-bold uppercase tracking-[0.42em] text-[#e3aa45]">
                  The child we nurture
                </p>
                <p className="font-mono text-sm font-bold tracking-[0.3em] text-[#e3aa45]">
                  {String(activeTrait + 1).padStart(2, '0')} / 04
                </p>
              </div>

              <motion.div
                key={activeTitle}
                initial={{ opacity: 0, y: 32, filter: 'blur(12px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8"
              >
                <p className="text-[0.68rem] font-black uppercase tracking-[0.22em] text-white/46">
                  Graduate profile
                </p>
                <h2 className="mt-4 max-w-3xl text-[clamp(3.1rem,6vw,7.6rem)] font-semibold leading-[0.9] tracking-[-0.05em]">
                  {activeTitle}
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-8 text-white/66 md:text-xl">
                  {activeText}
                </p>
              </motion.div>

              <div className="mt-9 flex gap-2">
                {childQualities.map(([title], index) => (
                  <button
                    key={title}
                    type="button"
                    onClick={() => setActiveTrait(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      index === activeTrait ? 'w-16 bg-[#e3aa45]' : 'w-3 bg-white/24 hover:bg-white/42'
                    }`}
                    aria-label={`Show ${title}`}
                  />
                ))}
              </div>
            </div>

            <motion.article
              key={activeTitle}
              initial={{ opacity: 0, x: 72, scale: 0.94, rotate: 2 }}
              animate={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
              transition={{ duration: 0.76, ease: [0.22, 1, 0.36, 1] }}
              data-home-media
              className="group relative min-h-[33rem] overflow-hidden rounded-[1.6rem] border border-[#d9a94f]/28 bg-[#15100b] shadow-[0_34px_110px_rgba(0,0,0,0.42)] lg:min-h-[38rem]"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImage}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeImage}
                    alt={`${activeTitle} child profile`}
                    fill
                    sizes="(min-width: 1024px) 54vw, 100vw"
                    className="object-cover opacity-[0.82]"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_10%,rgba(8,5,3,0.92)_100%),linear-gradient(90deg,rgba(8,5,3,0.3),transparent_56%)]" />
              <div className="video-sheen pointer-events-none absolute inset-0 opacity-8" />
              <div className="absolute left-6 top-6 rounded-full bg-[#e3aa45] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#120b05] shadow-[0_12px_36px_rgba(227,170,69,0.32)]">
                {String(activeTrait + 1).padStart(2, '0')}
              </div>
              <div className="absolute bottom-7 left-7 right-7 md:bottom-9 md:left-9 md:right-9">
                <h3 className="font-serif text-6xl leading-none text-white md:text-8xl">
                  {activeTitle}
                </h3>
                <p className="mt-5 max-w-2xl text-xl leading-8 text-white/72 md:text-2xl">
                  {activeText}
                </p>
              </div>
            </motion.article>
          </div>

          <div className="pointer-events-none mx-auto mt-4 max-w-[96rem] overflow-hidden pb-2">
            <div data-trait-track className="flex w-max gap-4 will-change-transform">
            {childQualities.map(([title, text, image], index) => (
              <motion.button
                key={title}
                data-trait-card
                type="button"
                onClick={() => setActiveTrait(index)}
                whileHover={{ y: -8, scale: 1.015 }}
                className={`pointer-events-auto group grid min-h-30 w-[21rem] shrink-0 grid-cols-[6.5rem_1fr] gap-4 overflow-hidden rounded-[1rem] border p-3 text-left backdrop-blur transition md:w-[26rem] ${
                  index === activeTrait
                    ? 'border-[#e3aa45]/70 bg-white/[0.12] shadow-[0_20px_70px_rgba(227,170,69,0.12)]'
                    : 'border-white/10 bg-white/[0.055] hover:border-[#e3aa45]/36 hover:bg-white/[0.085]'
                }`}
              >
                <div className="relative min-h-28 overflow-hidden rounded-md bg-[#15100b]">
                  <Image
                    src={image}
                    alt={`${title} preview`}
                    fill
                    sizes="7.5rem"
                    className="object-cover opacity-[0.86] transition duration-700 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/56 via-black/12 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-[#e3aa45] px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.12em] text-[#120b05]">
                    0{index + 1}
                  </span>
                </div>
                <div className="self-center">
                  <p className="text-[0.64rem] font-black uppercase tracking-[0.18em] text-[#e3aa45]">
                    Child trait active
                  </p>
                  <h3 className="mt-2 text-xl font-semibold leading-tight text-white">{title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/60">{text}</p>
                </div>
              </motion.button>
            ))}
            </div>
          </div>
        </div>
      </section>

      <WhatMakesLearningDifferent />

      <ChildGrowthTimeline />

      <section data-home-section className="relative overflow-hidden bg-white px-6 py-24 md:py-32">
        <SoftGrid />
        <div className="relative mx-auto grid max-w-[90rem] gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
          <div data-home-reveal>
            <SectionKicker>Future-ready education</SectionKicker>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.035em] md:text-7xl">
              Serious preparation without losing childhood.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#52665e]">
              Children build academics, technology, communication and resilience together, so future
              choices feel wider and clearer.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {futureTracks.map((track, index) => (
              <motion.div key={track} data-home-reveal whileHover={{ x: 8 }} className="rounded-lg border border-[#d7e6dc] bg-[#f7fbf8] p-6">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#11734f]">Track {index + 1}</p>
                <p className="mt-8 text-3xl font-semibold">{track}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section data-home-section id="campus" className="relative overflow-hidden bg-[#073626] px-6 py-24 text-white md:py-32">
        <DarkMesh />
        <div className="relative mx-auto max-w-[90rem]">
          <div data-home-reveal className="max-w-5xl">
            <SectionKicker light>Campus of possibility</SectionKicker>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.035em] md:text-7xl">
              Every space has a role in the child&apos;s story.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-4">
            {campusSpaces.map(([place, text, image]) => (
              <motion.article key={place} data-home-reveal data-home-media whileHover={{ y: -10, scale: 1.015 }} className="group overflow-hidden rounded-lg border border-white/12 bg-white/8">
                <div className="relative h-72 overflow-hidden">
                  <Image src={image} alt={place} fill sizes="(min-width: 1024px) 25vw, 100vw" className="object-cover transition duration-700 group-hover:scale-[1.08]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06130f] to-transparent" />
                  <h3 className="absolute bottom-5 left-5 right-5 text-3xl font-semibold">{place}</h3>
                </div>
                <p className="p-5 text-sm leading-7 text-white/68">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section data-home-section className="relative overflow-hidden bg-[#06130f] px-6 py-24 text-white md:py-28">
        <div className="absolute inset-0 bg-[url('/images/dps-founding-families.png')] bg-cover bg-center opacity-34" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06130f] via-[#06130f]/82 to-[#06130f]/48" />
        <div className="relative mx-auto grid max-w-[90rem] gap-10 lg:grid-cols-[0.62fr_0.38fr] lg:items-center">
          <div data-home-reveal className="max-w-5xl">
            <SectionKicker light>Founding families</SectionKicker>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.035em] md:text-7xl">
              Some families do not wait for proof. They recognise promise.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
              The earliest families become part of the school&apos;s origin story and help shape the culture children inherit.
            </p>
          </div>
          <div data-home-media className="relative min-h-80 overflow-hidden rounded-lg border border-white/12 bg-[#0b0704] shadow-[0_32px_100px_rgba(0,0,0,0.34)]">
            <Image
              src="/images/dps-founding-families.png"
              alt="Founding families at DPS Gurugram"
              fill
              sizes="(min-width: 1024px) 34vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06130f]/72 to-transparent" />
          </div>
        </div>
      </section>

      <section data-home-section className="relative overflow-hidden bg-[#f7fbf8] px-6 py-24 md:py-32">
        <SoftGrid />
        <div className="relative mx-auto max-w-[90rem]">
          <div data-home-reveal className="max-w-4xl">
            <SectionKicker>Parent voices</SectionKicker>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.035em] md:text-7xl">
              Parents remember how the child changed.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {parentVoices.map(([quote, parent]) => (
              <motion.article key={quote} data-home-reveal whileHover={{ y: -8 }} className="rounded-lg border border-[#d7e6dc] bg-white p-7 shadow-[0_22px_70px_rgba(7,54,38,0.08)]">
                <p className="font-serif text-5xl text-[#11734f]">&quot;</p>
                <p className="mt-8 text-2xl font-semibold leading-9">{quote}</p>
                <p className="mt-8 text-xs font-black uppercase tracking-[0.18em] text-[#11734f]">{parent}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section data-home-section id="insights" className="relative overflow-hidden bg-white px-6 py-24 md:py-32">
        <div className="relative mx-auto max-w-[90rem]">
          <div data-home-reveal className="max-w-5xl">
            <SectionKicker>Insights for modern parents</SectionKicker>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.035em] md:text-7xl">
              Clear thinking for a high-stakes choice.
            </h2>
          </div>
          <div className="mt-12 flex gap-5 overflow-x-auto pb-6 [scrollbar-width:none]">
            {insights.map(([title, text], index) => (
              <motion.article key={title} data-home-reveal whileHover={{ y: -10, scale: 1.02 }} className="min-h-[25rem] w-[24rem] shrink-0 rounded-lg bg-[#073626] p-7 text-white">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#d9bd80]">Insight 0{index + 1}</p>
                <h3 className="mt-28 text-3xl font-semibold leading-tight">{title}</h3>
                <p className="mt-5 text-sm leading-7 text-white/66">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section data-home-section id="admissions" className="relative overflow-hidden bg-[#e7f2ea] px-6 py-24 text-[#073626] md:py-32">
        <div data-orbit-line className="absolute left-1/2 top-10 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full border border-[#11734f]/16" />
        <div className="relative mx-auto max-w-5xl text-center">
          <div data-home-reveal>
            <SectionKicker>Admissions call to action</SectionKicker>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.035em] md:text-7xl">
              Start the conversation about your child&apos;s future.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#52665e]">
              Visit the campus, meet the admissions team and understand the journey from nursery to university readiness.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <motion.a whileHover={{ y: -5, scale: 1.03 }} href="mailto:admissions@dpsgurugram.edu" className="rounded-md bg-[#073626] px-8 py-4 text-sm font-black uppercase tracking-[0.1em] text-white shadow-[0_20px_60px_rgba(7,54,38,0.2)]">
                Apply now
              </motion.a>
              <motion.a whileHover={{ y: -5, scale: 1.03 }} href="tel:+910000000000" className="rounded-md bg-white px-8 py-4 text-sm font-black uppercase tracking-[0.1em] text-[#073626] shadow-[0_20px_60px_rgba(7,54,38,0.12)]">
                Speak to admissions
              </motion.a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function SectionKicker({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`text-xs font-black uppercase tracking-[0.3em] ${light ? 'text-[#d9bd80]' : 'text-[#11734f]'}`}>
      {children}
    </p>
  )
}

function GearShape({ reverse = false }: { reverse?: boolean }) {
  return (
    <svg data-nurture-gear className="h-full w-full" viewBox="0 0 200 200" style={{ transform: reverse ? 'scaleX(-1)' : undefined }}>
      <circle cx="100" cy="100" r="59" fill="none" stroke="currentColor" strokeWidth="13" />
      {Array.from({ length: 12 }).map((_, tooth) => (
        <rect
          key={tooth}
          x="94"
          y="10"
          width="12"
          height="32"
          rx="3"
          fill="currentColor"
          transform={`rotate(${tooth * 30} 100 100)`}
        />
      ))}
    </svg>
  )
}

function SoftGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(7,54,38,0.045)_1px,transparent_1px),linear-gradient(180deg,rgba(7,54,38,0.035)_1px,transparent_1px),radial-gradient(circle_at_50%_0%,rgba(17,115,79,0.12),transparent_35%)] bg-[size:76px_76px,76px_76px,100%_100%]" />
  )
}

function DarkMesh() {
  return (
    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.03)_1px,transparent_1px),radial-gradient(circle_at_50%_0%,rgba(217,189,128,0.16),transparent_40%)] bg-[size:78px_78px,78px_78px,100%_100%]" />
  )
}
