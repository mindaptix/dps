'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const qualities = [
  {
    title: 'Confident Speaker',
    copy: 'Speaks clearly, presents ideas, and grows voice.',
    image: '/images/primary-school.png',
    x: '-8%',
    y: '8%',
  },
  {
    title: 'Curious Learner',
    copy: 'Asks better questions and enjoys discovery.',
    image: '/images/early-years.png',
    x: '80%',
    y: '10%',
  },
  {
    title: 'Kind Leader',
    copy: 'Leads with empathy, patience, and respect.',
    image: '/images/leadership.png',
    x: '-10%',
    y: '66%',
  },
  {
    title: 'Creative Thinker',
    copy: 'Turns ideas into expression and problem solving.',
    image: '/images/dps-learning-different.png',
    x: '78%',
    y: '62%',
  },
  {
    title: 'Strong Values',
    copy: 'Understands discipline, responsibility, and care.',
    image: '/images/middle-school.png',
    x: '16%',
    y: '2%',
  },
  {
    title: 'Future Ready',
    copy: 'Grows with confidence for the world ahead.',
    image: '/images/university.png',
    x: '60%',
    y: '80%',
  },
]

export function ChildWeNurture() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!sectionRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const context = gsap.context(() => {
      gsap.from('[data-child-kicker], [data-child-title], [data-child-copy]', {
        opacity: 0,
        y: 28,
        duration: 0.85,
        ease: 'power4.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 82%',
          once: true,
        },
      })

      gsap.from('[data-float-card]', {
        opacity: 0,
        y: 34,
        scale: 0.95,
        duration: 0.9,
        ease: 'power4.out',
        stagger: 0.09,
        scrollTrigger: {
          trigger: '[data-child-stage]',
          start: 'top 82%',
          once: true,
        },
      })

      gsap.from('[data-float-card]', {
        rotate: (index) => [-2, 1.5, -1.25, 1.15, -1.6, 1.4][index] ?? 0,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.09,
        scrollTrigger: {
          trigger: '[data-child-stage]',
          start: 'top 82%',
          once: true,
        },
      })

      gsap.to('[data-central-image]', {
        yPercent: -8,
        scale: 1.06,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })

      gsap.to('[data-orb]', {
        y: (index) => [16, -18, 10, -12][index] ?? 0,
        x: (index) => [-12, 10, 8, -8][index] ?? 0,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.4,
      })

      gsap.to('[data-glow-ring]', {
        rotate: 360,
        duration: 28,
        repeat: -1,
        ease: 'none',
      })
    }, sectionRef)

    return () => context.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="child"
      className="relative overflow-hidden bg-[#f4f8f3] px-5 py-16 text-[#173628] sm:px-6 lg:px-10 lg:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(134,185,125,0.15),transparent_28%),radial-gradient(circle_at_86%_74%,rgba(110,165,101,0.11),transparent_34%),linear-gradient(180deg,#f4f8f3_0%,#eef5eb_50%,#f4f8f3_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(110,165,101,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(110,165,101,0.06)_1px,transparent_1px)] bg-[size:88px_88px] opacity-30" />
      <div
        data-orb
        className="pointer-events-none absolute left-8 top-12 h-28 w-28 rounded-full bg-[#8ebf80]/12 blur-3xl"
      />
      <div
        data-orb
        className="pointer-events-none absolute right-10 top-32 h-36 w-36 rounded-full bg-[#6ea565]/10 blur-3xl"
      />
      <div
        data-orb
        className="pointer-events-none absolute bottom-10 left-1/3 h-24 w-24 rounded-full bg-[#b9d7b2]/14 blur-3xl"
      />
      <div className="floating-grain pointer-events-none absolute inset-0 opacity-10" />

      <div className="relative mx-auto max-w-[96rem]">
        <div className="grid gap-8 xl:grid-cols-[0.34fr_0.66fr] xl:items-start">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#d8e6d2] bg-white/86 p-6 shadow-[0_28px_90px_rgba(22,51,37,0.08)] backdrop-blur-xl sm:p-8 lg:p-10 xl:sticky xl:top-28">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.97),transparent_45%),radial-gradient(circle_at_20%_0%,rgba(134,185,125,0.12),transparent_30%)]" />
            <div className="relative">
              <p
                data-child-kicker
                className="text-[0.7rem] font-black uppercase tracking-[0.42em] text-[#6ea565]"
              >
                The Child We Nurture
              </p>
              <h2
                data-child-title
                className="mt-5 max-w-md text-[clamp(2.4rem,4vw,4.8rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-[#173628]"
              >
                Confident, curious, kind, creative, and future ready.
              </h2>
              <p data-child-copy className="mt-5 max-w-sm text-base leading-8 text-[#567063]">
                We shape children who can speak up, think clearly, lead gently, and grow with
                discipline.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-[1.15rem] bg-[#f3f9f0] p-4">
                  <p className="text-[0.62rem] font-black uppercase tracking-[0.18em] text-[#6ea565]">
                    Parent focus
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#3f5f4c]">
                    A child you can feel proud of.
                  </p>
                </div>
                <div className="rounded-[1.15rem] bg-[#f3f9f0] p-4">
                  <p className="text-[0.62rem] font-black uppercase tracking-[0.18em] text-[#6ea565]">
                    Growth lens
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#3f5f4c]">
                    Clear, steady development over time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            data-child-stage
            className="relative min-h-[78rem] overflow-hidden rounded-[2.1rem] border border-[#d8e6d2] bg-white/72 p-5 shadow-[0_34px_110px_rgba(22,51,37,0.08)] backdrop-blur-xl sm:p-7 lg:p-10"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.7),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.34),rgba(255,255,255,0.16))]" />
            <div className="pointer-events-none absolute inset-x-10 top-10 h-px bg-gradient-to-r from-transparent via-[#8ebf80]/60 to-transparent" />
            <div
              data-glow-ring
              className="pointer-events-none absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8ebf80]/18"
            />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8ebf80]/12" />

            <div className="relative mx-auto flex min-h-[72rem] max-w-[72rem] items-center justify-center">
              <div className="relative h-[36rem] w-[24rem] overflow-hidden rounded-[2.5rem] border border-white/55 bg-white shadow-[0_34px_120px_rgba(22,51,37,0.12)] sm:h-[42rem] sm:w-[28rem]">
                <div
                  data-central-image
                  className="absolute inset-0 bg-[url('/images/dps-hero-students.png')] bg-cover bg-[center_top]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(7,26,19,0.08)_46%,rgba(7,26,19,0.34)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_14%,rgba(255,255,255,0.14),transparent_30%)]" />

                <div className="absolute left-6 top-6 rounded-full border border-white/50 bg-white/82 px-4 py-2 text-[0.62rem] font-black uppercase tracking-[0.16em] text-[#6ea565] backdrop-blur">
                  Central child image
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="rounded-[1.5rem] border border-white/30 bg-white/82 p-5 backdrop-blur-xl">
                    <p className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-[#6ea565]">
                      Growing center
                    </p>
                    <p className="mt-2 text-2xl font-semibold leading-tight text-[#173628]">
                      The child becomes the story.
                    </p>
                  </div>
                </div>
              </div>

              {qualities.map((item, index) => (
                <FloatingCard key={item.title} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FloatingCard({
  item,
  index,
}: {
  item: (typeof qualities)[number]
  index: number
}) {
  return (
    <div
      data-float-card
      className="motion-card group absolute z-20 w-[14rem] sm:w-[15.5rem]"
      style={{ left: item.x, top: item.y }}
    >
      <div className="rounded-[1.4rem] border border-[#d8e6d2] bg-white/76 p-3 shadow-[0_18px_60px_rgba(22,51,37,0.12)] backdrop-blur-xl transition duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_24px_70px_rgba(22,51,37,0.16)]">
        <div className="relative h-28 overflow-hidden rounded-[1rem]">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="16rem"
            className="object-cover transition duration-700 group-hover:scale-[1.08]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_20%,rgba(7,26,19,0.24)_100%)]" />
        </div>

        <div className="mt-3 flex items-start justify-between gap-3">
          <div>
            <p className="text-[0.6rem] font-black uppercase tracking-[0.2em] text-[#6ea565]">
              Quality 0{index + 1}
            </p>
            <h3 className="mt-1 text-sm font-semibold leading-tight text-[#173628]">
              {item.title}
            </h3>
          </div>
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#8ebf80]/20 bg-[#f3f9f0] text-[#6ea565]">
            <span className="text-[0.6rem] font-black uppercase">+</span>
          </div>
        </div>

        <p className="mt-2 text-xs leading-5 text-[#567063]">{item.copy}</p>
      </div>
    </div>
  )
}
