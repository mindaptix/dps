'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import { ChildGrowthTimeline } from './ChildGrowthTimeline'

const childQualities = [
  ['Curious', 'Asks better questions and learns through discovery.', '/images/early-years.png'],
  ['Confident', 'Speaks, performs, presents and participates.', '/images/middle-school.png'],
  ['Compassionate', 'Builds respect, empathy and strong character.', '/images/primary-school.png'],
  ['Future-ready', 'Uses knowledge, technology and judgment together.', '/images/leadership.png'],
]

const learningPillars = [
  ['Concept mastery', 'Learning starts from understanding, not memorising.'],
  ['Labs and projects', 'Children build, test, fail, improve and present.'],
  ['Communication', 'Every learner develops voice, confidence and clarity.'],
  ['Sports discipline', 'Energy becomes teamwork, resilience and focus.'],
  ['Arts expression', 'Imagination becomes form, confidence and identity.'],
  ['Mentorship', 'Teachers track the child, not only the syllabus.'],
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

const visionSignals = [
  ['Safe', 'Calm routines, known adults and visible care.'],
  ['Seen', 'Teachers notice the child beyond marks.'],
  ['Prepared', 'Every stage points toward a bigger future.'],
]

const parentQuestions = [
  'Will my child be happy here?',
  'Will they be safe?',
  'Will learning feel alive?',
  'Will this prepare them for tomorrow?',
]

export function HomeExperience() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!rootRef.current) {
      return
    }

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-home-reveal]').forEach((item) => {
        gsap.from(item, {
          autoAlpha: 0,
          y: 52,
          filter: 'blur(12px)',
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 82%',
          },
        })
      })

      gsap.utils.toArray<HTMLElement>('[data-home-parallax]').forEach((image) => {
        gsap.to(image, {
          yPercent: -8,
          scale: 1.06,
          ease: 'none',
          scrollTrigger: {
            trigger: image.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        })
      })

      gsap.to('[data-orbit-line]', {
        rotate: 360,
        duration: 42,
        ease: 'none',
        repeat: -1,
      })

      gsap.to('[data-vision-float]', {
        y: 'random(-16, 16)',
        x: 'random(-10, 10)',
        rotate: 'random(-2, 2)',
        duration: 'random(2.6, 4.4)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.16,
      })

      gsap.to('[data-vision-orbit]', {
        rotate: 360,
        duration: 36,
        ease: 'none',
        repeat: -1,
      })

      gsap.to('[data-nurture-gear]', {
        rotate: (index) => (index % 2 === 0 ? 360 : -360),
        ease: 'none',
        scrollTrigger: {
          trigger: '[data-nurture-scene]',
          start: 'top 78%',
          end: 'bottom 20%',
          scrub: 1,
        },
      })

      gsap.to('[data-nurture-track]', {
        x: () => {
          const track = rootRef.current?.querySelector<HTMLElement>('[data-nurture-track]')
          return track ? Math.min(0, -(track.scrollWidth - window.innerWidth)) : 0
        },
        ease: 'none',
        scrollTrigger: {
          trigger: '[data-nurture-scene]',
          start: 'top top',
          end: () => {
            const track = rootRef.current?.querySelector<HTMLElement>('[data-nurture-track]')
            return track ? `+=${Math.max(900, track.scrollWidth - window.innerWidth)}` : '+=180%'
          },
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })
    }, rootRef)

    return () => context.revert()
  }, [])

  return (
    <div ref={rootRef} className="overflow-hidden bg-white text-[#073626]">
      <section id="vision" className="relative min-h-screen overflow-hidden bg-white px-6 py-24 md:py-32">
        <SoftGrid />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[#11734f]/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-28 bottom-10 h-80 w-80 rounded-full bg-[#d9bd80]/16 blur-3xl" />

        <div className="relative mx-auto grid min-h-[74vh] max-w-[92rem] gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div data-home-reveal className="relative z-10">
            <SectionKicker>Why this school exists</SectionKicker>
            <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.035em] md:text-7xl">
              Because a child needs more than a campus. They need a planned environment.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#52665e]">
              The school exists to turn care, learning, confidence and future preparation into one
              continuous journey parents can understand.
            </p>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {parentQuestions.map((question, index) => (
                <motion.div
                  key={question}
                  data-vision-float
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="rounded-lg border border-[#d7e6dc] bg-white/82 px-5 py-4 shadow-[0_18px_55px_rgba(7,54,38,0.08)] backdrop-blur"
                >
                  <p className="text-[0.65rem] font-black uppercase tracking-[0.18em] text-[#11734f]">
                    Parent question 0{index + 1}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#073626]">{question}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div data-home-reveal className="relative min-h-[42rem]">
            <div data-vision-orbit className="absolute left-1/2 top-1/2 hidden h-[33rem] w-[33rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#11734f]/14 lg:block">
              {visionSignals.map(([signal], index) => (
                <span
                  key={signal}
                  className="absolute left-1/2 top-0 h-5 w-px origin-[50%_16.5rem] bg-[#11734f]/38"
                  style={{ transform: `rotate(${index * 120}deg)` }}
                />
              ))}
            </div>

            <motion.div
              data-vision-float
              whileHover={{ y: -12, scale: 1.015 }}
              className="absolute left-0 top-10 z-20 hidden w-64 rounded-lg border border-[#11734f]/18 bg-white/86 p-5 shadow-[0_28px_80px_rgba(7,54,38,0.16)] backdrop-blur-xl md:block"
            >
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#11734f]">Parent lens</p>
              <p className="mt-5 text-3xl font-semibold leading-tight">Care first. Learning follows.</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8, scale: 1.01 }}
              className="relative ml-auto min-h-[38rem] max-w-[58rem] overflow-hidden rounded-lg bg-[#073626] shadow-[0_44px_140px_rgba(7,54,38,0.24)]"
            >
              <Image
                src="/images/dps-hero-students.png"
                alt="Students at DPS Gurugram"
                fill
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,28,20,0.88),rgba(4,28,20,0.34)_48%,rgba(4,28,20,0.08)),linear-gradient(180deg,transparent_34%,rgba(4,28,20,0.86))]" />
              <div className="video-sheen pointer-events-none absolute inset-0 opacity-18" />
              <div className="floating-grain pointer-events-none absolute inset-0 opacity-28" />

              <div className="absolute left-7 top-7 rounded-full border border-white/16 bg-white/10 px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-[#d9bd80] backdrop-blur">
                Planned environment
              </div>

              <div className="absolute bottom-7 left-7 right-7 grid gap-3 md:grid-cols-3">
                {visionSignals.map(([signal, text], index) => (
                  <motion.div
                    key={signal}
                    data-vision-float
                    whileHover={{ y: -8, scale: 1.03 }}
                    className="rounded-md border border-white/18 bg-white/12 px-4 py-4 text-white backdrop-blur"
                  >
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#d9bd80]">
                      0{index + 1} {signal}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-white/74">{text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              data-vision-float
              whileHover={{ y: -10, rotate: 0 }}
              className="absolute -right-2 bottom-16 z-20 hidden w-72 rotate-2 rounded-lg border border-[#d9bd80]/35 bg-[#073626] p-5 text-white shadow-[0_30px_95px_rgba(7,54,38,0.32)] lg:block"
            >
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#d9bd80]">Outcome map</p>
              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                {['Care', 'Confidence', 'Future'].map((item) => (
                  <div key={item} className="rounded-md bg-white/10 px-3 py-4">
                    <p className="text-[0.66rem] font-black uppercase tracking-[0.12em] text-white/74">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section data-nurture-scene className="relative h-screen overflow-hidden bg-[#0b0704] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_68%_14%,rgba(202,142,44,0.2),transparent_25%),linear-gradient(180deg,#0b0704,#100905_62%,#0b0704)]" />
        <div className="floating-grain pointer-events-none absolute inset-0 opacity-16" />

        <div className="pointer-events-none absolute left-[-6rem] top-[-8rem] h-[19rem] w-[19rem] text-[#a36f22]/50">
          <GearShape />
        </div>
        <div className="pointer-events-none absolute right-[7vw] top-[-9rem] h-[22rem] w-[22rem] text-[#a36f22]/58">
          <GearShape reverse />
        </div>

        <div data-nurture-track className="relative z-10 flex h-full w-max items-center">
          <div className="flex h-full w-screen shrink-0 flex-col justify-between px-6 py-8 md:px-16">
            <div className="flex items-start justify-between gap-8">
              <p className="text-xs font-bold uppercase tracking-[0.44em] text-[#e3aa45]">
                The child we nurture
              </p>
              <p className="hidden text-xs font-bold uppercase tracking-[0.34em] text-white/42 md:block">
                Four traits. One balanced child.
              </p>
            </div>

            <div data-home-reveal className="max-w-6xl">
              <p className="font-mono text-sm font-bold tracking-[0.3em] text-[#e3aa45]">01 / 04</p>
              <h2 className="mt-8 max-w-6xl text-5xl font-semibold leading-[0.95] tracking-[-0.035em] md:text-8xl">
                Not just toppers. Children with curiosity, confidence and character.
              </h2>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/58">
                This section moves like a gallery because every child trait needs a different space,
                rhythm and evidence of growth.
              </p>
            </div>

            <div className="h-px w-full bg-white/12" />
          </div>

          <div className="flex h-full w-max items-center gap-10 pr-[24vw]">
            {childQualities.map(([title, text, image], index) => (
              <article
                key={title}
                className="group relative flex h-[74vh] w-[min(78vw,60rem)] shrink-0 flex-col justify-between"
              >
                <div className="flex items-center justify-between px-1">
                  <p className="font-mono text-sm font-bold tracking-[0.34em] text-[#e3aa45]">
                    {String(index + 1).padStart(2, '0')} / 04
                  </p>
                  <p className="hidden text-xs font-bold uppercase tracking-[0.28em] text-white/38 md:block">
                    Child trait active
                  </p>
                </div>

                <motion.div
                  whileHover={{ y: -10, scale: 1.015 }}
                  transition={{ type: 'spring', stiffness: 190, damping: 24 }}
                  className="relative mt-8 h-[58vh] overflow-hidden rounded-lg border border-[#d9a94f]/18 bg-[#15100b] shadow-[0_34px_110px_rgba(0,0,0,0.42)]"
                >
                  <Image
                    src={image}
                    alt={`${title} child profile`}
                    fill
                    sizes="(min-width: 1024px) 60rem, 78vw"
                    className="object-cover opacity-[0.86] transition duration-700 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_28%,rgba(8,5,3,0.9)_100%),linear-gradient(90deg,rgba(8,5,3,0.38),transparent_58%)]" />
                  <div className="video-sheen pointer-events-none absolute inset-0 opacity-14" />
                  <div className="absolute left-7 top-7 rounded-full bg-[#e3aa45] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#120b05]">
                    0{index + 1}
                  </div>
                  <h3 className="absolute bottom-7 left-7 font-serif text-6xl leading-none text-white md:bottom-9 md:left-9 md:text-8xl">
                    {title}
                  </h3>
                </motion.div>

                <div className="mt-7 grid gap-5 md:grid-cols-[0.72fr_0.28fr] md:items-start">
                  <p className="max-w-3xl text-xl leading-8 text-white/62 md:text-2xl">{text}</p>
                  <div className="rounded-md border border-[#d9a94f]/18 bg-white/6 p-4 text-right backdrop-blur">
                    <p className="text-[0.64rem] font-black uppercase tracking-[0.16em] text-[#e3aa45]">
                      Parent sees
                    </p>
                    <p className="mt-3 text-sm font-semibold leading-6 text-white/76">
                      Visible growth, not vague promises.
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f7fbf8] px-6 py-24 md:py-32">
        <SoftGrid />
        <div className="relative mx-auto max-w-[90rem]">
          <div data-home-reveal className="grid gap-8 lg:grid-cols-[0.7fr_0.3fr] lg:items-end">
            <div>
              <SectionKicker>What makes learning different</SectionKicker>
              <h2 className="mt-5 max-w-5xl text-4xl font-semibold leading-[1.02] tracking-[-0.035em] md:text-7xl">
                Learning is designed as an ecosystem, not a timetable.
              </h2>
            </div>
            <p className="text-lg leading-8 text-[#52665e]">
              Every pillar supports the next, so growth feels connected from classroom to campus life.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {learningPillars.map(([title, text], index) => (
              <motion.article key={title} data-home-reveal whileHover={{ y: -8 }} className="motion-card rounded-lg border border-[#d7e6dc] bg-white p-6 shadow-[0_22px_70px_rgba(7,54,38,0.08)]">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#11734f]">0{index + 1}</p>
                <h3 className="mt-10 text-3xl font-semibold tracking-[-0.03em]">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#52665e]">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <ChildGrowthTimeline />

      <section className="relative overflow-hidden bg-white px-6 py-24 md:py-32">
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

      <section id="campus" className="relative overflow-hidden bg-[#073626] px-6 py-24 text-white md:py-32">
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
              <motion.article key={place} data-home-reveal whileHover={{ y: -10, scale: 1.015 }} className="group overflow-hidden rounded-lg border border-white/12 bg-white/8">
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

      <section className="relative min-h-[85vh] overflow-hidden bg-[#06130f] px-6 py-24 text-white md:py-32">
        <div data-home-parallax className="absolute inset-0 bg-[url('/images/dps-founding-families.png')] bg-cover bg-center opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06130f] via-[#06130f]/76 to-[#06130f]/30" />
        <div className="relative mx-auto flex min-h-[62vh] max-w-[90rem] items-end">
          <div data-home-reveal className="max-w-5xl">
            <SectionKicker light>Founding families</SectionKicker>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.035em] md:text-7xl">
              Some families do not wait for proof. They recognise promise.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
              The earliest families become part of the school&apos;s origin story and help shape the culture children inherit.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f7fbf8] px-6 py-24 md:py-32">
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

      <section id="insights" className="relative overflow-hidden bg-white px-6 py-24 md:py-32">
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

      <section id="admissions" className="relative overflow-hidden bg-[#e7f2ea] px-6 py-24 text-[#073626] md:py-32">
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
