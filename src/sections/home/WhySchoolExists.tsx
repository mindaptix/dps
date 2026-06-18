'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const pillars = [
  {
    title: 'Safe & Caring Environment',
    copy: 'A place where children feel protected, heard, and emotionally supported.',
    icon: 'shield',
  },
  {
    title: 'Future Ready Growth',
    copy: 'From early learning to higher goals, children are prepared for real life.',
    icon: 'spark',
  },
]

export function WhySchoolExists() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!sectionRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const context = gsap.context(() => {
      gsap.from('[data-why-heading], [data-why-copy]', {
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

      gsap.from('[data-why-card]', {
        y: 34,
        scale: 0.97,
        duration: 0.8,
        ease: 'power4.out',
        clearProps: 'transform',
        stagger: 0.09,
        scrollTrigger: {
          trigger: '[data-why-card-grid]',
          start: 'top 84%',
          once: true,
        },
      })

      gsap.to('[data-why-parallax]', {
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

      gsap.to('[data-why-orb]', {
        y: (index) => [18, -12, 10][index] ?? 0,
        x: (index) => [-8, 12, -10][index] ?? 0,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.35,
      })
    }, sectionRef)

    return () => context.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="why-school-exists"
      className="relative overflow-hidden bg-[#f6f2ea] px-5 py-16 text-[#173628] sm:px-6 lg:px-10 lg:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(134,185,125,0.14),transparent_28%),radial-gradient(circle_at_84%_72%,rgba(110,165,101,0.09),transparent_30%),linear-gradient(180deg,#f7f3ec_0%,#f2ede3_55%,#f7f3ec_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(110,165,101,0.06)_1px,transparent_1px),linear-gradient(180deg,rgba(110,165,101,0.05)_1px,transparent_1px)] bg-[size:88px_88px] opacity-30" />
      <div className="floating-grain pointer-events-none absolute inset-0 opacity-08" />

      <div
        data-why-orb
        className="pointer-events-none absolute left-10 top-16 h-28 w-28 rounded-full bg-[#8ebf80]/12 blur-3xl"
      />
      <div
        data-why-orb
        className="pointer-events-none absolute right-12 top-28 h-36 w-36 rounded-full bg-[#6ea565]/10 blur-3xl"
      />
      <div
        data-why-orb
        className="pointer-events-none absolute bottom-10 left-1/4 h-24 w-24 rounded-full bg-[#b9d7b2]/14 blur-3xl"
      />

      <div className="relative mx-auto max-w-[96rem]">
        <div className="grid gap-8 xl:grid-cols-[0.42fr_0.58fr] xl:items-center">
          <div className="relative overflow-hidden rounded-[2.2rem] border border-[#d8e6d2] bg-white/86 shadow-[0_28px_90px_rgba(22,51,37,0.08)] backdrop-blur-xl">
            <div className="relative min-h-[34rem] sm:min-h-[40rem]">
              <div
                data-why-parallax
                className="absolute inset-0 bg-[url('/images/dps-hero-students.png')] bg-cover bg-[center_18%]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(7,26,19,0.06)_55%,rgba(7,26,19,0.34)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_16%,rgba(255,255,255,0.16),transparent_26%)]" />

              <div className="absolute left-6 top-6 rounded-full border border-white/45 bg-white/82 px-4 py-2 text-[0.62rem] font-black uppercase tracking-[0.16em] text-[#6ea565] backdrop-blur">
                Child-first school
              </div>

              <div className="absolute right-6 top-6 max-w-[10rem] rounded-[1rem] border border-white/35 bg-white/78 p-3 text-[#173628] shadow-[0_18px_44px_rgba(22,51,37,0.12)] backdrop-blur-xl">
                <p className="text-[0.58rem] font-black uppercase tracking-[0.18em] text-[#6ea565]">
                  Warm welcome
                </p>
                <p className="mt-2 text-xs leading-5 text-[#5c7267]">
                  A child arriving with smiles, safety, and belonging.
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                <div className="rounded-[1.5rem] border border-white/35 bg-white/82 p-5 shadow-[0_18px_50px_rgba(22,51,37,0.12)] backdrop-blur-xl">
                  <p className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-[#6ea565]">
                    Emotional start
                  </p>
                  <p className="mt-2 text-2xl font-semibold leading-tight text-[#173628]">
                    Children feel welcomed the moment they arrive.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="max-w-3xl">
              <p
                data-why-heading
                className="text-[0.72rem] font-black uppercase tracking-[0.42em] text-[#6ea565]"
              >
                Why This School Exists
              </p>
              <h2
                data-why-heading
                className="mt-5 text-[clamp(2.4rem,4vw,4.8rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-[#173628]"
              >
                Because every child deserves more than just education.
              </h2>
              <p data-why-copy className="mt-6 max-w-xl text-base leading-7 text-[#5c7267] md:text-[1.05rem]">
                We exist to create a place where children feel safe, confident, curious, and ready
                for the future - not only with good marks, but with good values, life skills, and
                self-belief.
              </p>
              <p data-why-copy className="mt-4 max-w-xl text-base leading-7 text-[#5c7267] md:text-[1.05rem]">
                Every child enters school with dreams, questions, fears, and hidden potential. Our
                purpose is to help them discover who they can become.
              </p>

              <div
                data-why-card-grid
                className="mt-7 grid max-w-2xl gap-3 md:grid-cols-2"
              >
                {pillars.map((pillar) => (
                  <article
                    key={pillar.title}
                    data-why-card
                    className="group rounded-[1.4rem] border border-[#d8e6d2] bg-white/86 p-4.5 shadow-[0_18px_48px_rgba(22,51,37,0.08)] backdrop-blur-xl transition duration-500 will-change-transform hover:-translate-y-1 hover:shadow-[0_24px_64px_rgba(22,51,37,0.12)]"
                  >
                    <div className="mb-3.5 flex items-center justify-between">
                      <div className="grid h-9 w-9 place-items-center rounded-full border border-[#8ebf80]/18 bg-[#f3f9f0] text-[#6ea565] shadow-[0_10px_24px_rgba(22,51,37,0.06)]">
                        <PillarIcon name={pillar.icon} />
                      </div>
                      <div className="h-1.5 w-12 rounded-full bg-gradient-to-r from-[#8ebf80] to-[#cfe4c9]" />
                    </div>
                    <h3 className="text-base font-semibold leading-tight text-[#173628]">
                      {pillar.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-6 text-[#5c7267]">{pillar.copy}</p>
                  </article>
                ))}
              </div>

              <div className="mt-7 inline-flex rounded-full border border-[#8ebf80]/24 bg-white/72 px-4.5 py-2 text-[0.64rem] font-black uppercase tracking-[0.18em] text-[#5e8f56] shadow-[0_14px_36px_rgba(22,51,37,0.06)] backdrop-blur">
                Discover Our Approach
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PillarIcon({ name }: { name: string }) {
  const common = {
    className: 'h-5 w-5',
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    strokeWidth: 1.9,
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

  if (name === 'book') {
    return (
      <svg {...common}>
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5Z" />
        <path d="M7 7h9" />
        <path d="M7 10h9" />
      </svg>
    )
  }

  if (name === 'heart') {
    return (
      <svg {...common}>
        <path d="M20.5 8.5c0 5-8.5 10-8.5 10s-8.5-5-8.5-10a4.5 4.5 0 0 1 8.5-2 4.5 4.5 0 0 1 8.5 2Z" />
      </svg>
    )
  }

  return (
    <svg {...common}>
      <path d="M12 3v5" />
      <path d="M12 16v5" />
      <path d="M3 12h5" />
      <path d="M16 12h5" />
      <path d="m6.5 6.5 3 3" />
      <path d="m17.5 6.5-3 3" />
    </svg>
  )
}
