'use client'

import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

const values = [
  { label: 'Leadership', icon: 'people', x: '52%', y: '6%' },
  { label: 'Innovation', icon: 'bulb', x: '88%', y: '26%' },
  { label: 'Character', icon: 'shield', x: '89%', y: '55%' },
  { label: 'Compassion', icon: 'heart', x: '83%', y: '78%' },
  { label: 'Excellence', icon: 'star', x: '18%', y: '64%' },
  { label: 'Global Citizenship', icon: 'globe', x: '20%', y: '39%' },
]

export function HomeHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const orbitRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!sectionRef.current || !imageRef.current || !orbitRef.current) {
      return
    }

    const section = sectionRef.current

    const context = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: 'power4.out' } })

      timeline
        .from('[data-hero-eyebrow]', { opacity: 0, y: 18, duration: 0.55 })
        .from('[data-hero-title] > span', { opacity: 0, yPercent: 105, stagger: 0.08, duration: 0.9 }, '-=0.2')
        .from('[data-hero-copy]', { opacity: 0, y: 22, duration: 0.65 }, '-=0.42')
        .from(imageRef.current, { opacity: 0, scale: 1.08, x: 40, duration: 1.1 }, '-=0.9')
        .from('[data-value-chip]', { opacity: 0, scale: 0.55, stagger: 0.06, duration: 0.48 }, '-=0.55')
        .from('[data-scroll-cue]', { opacity: 0, y: 16, duration: 0.45 }, '-=0.2')

      gsap.to(orbitRef.current, {
        rotate: 360,
        duration: 58,
        ease: 'none',
        repeat: -1,
      })

      gsap.to('[data-hero-spark]', {
        y: 'random(-28, 28)',
        x: 'random(-18, 18)',
        opacity: 'random(0.25, 0.9)',
        duration: 'random(2.2, 4.6)',
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: 0.08,
      })

      gsap.to(imageRef.current, {
        scale: 1.07,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      })
    }, section)

    const handleMove = (event: MouseEvent) => {
      const bounds = section.getBoundingClientRect()
      const x = (event.clientX - bounds.left) / bounds.width - 0.5
      const y = (event.clientY - bounds.top) / bounds.height - 0.5

      gsap.to(imageRef.current, {
        x: x * 20,
        y: y * 12,
        duration: 0.8,
        ease: 'power3.out',
      })
    }

    section.addEventListener('mousemove', handleMove)

    return () => {
      section.removeEventListener('mousemove', handleMove)
      context.revert()
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-[#06130f] text-white">
      <div
        ref={imageRef}
        className="absolute inset-0 bg-[url('/images/dps-hero-students.png')] bg-cover bg-[center_top]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,12,9,0.54)_0%,rgba(3,18,13,0.36)_34%,rgba(4,20,15,0.14)_62%,rgba(2,10,8,0.22)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_36%,rgba(231,197,119,0.18),transparent_31%),linear-gradient(180deg,rgba(0,0,0,0.16),transparent_48%,rgba(0,0,0,0.2))]" />
      <div className="video-sheen pointer-events-none absolute inset-0 opacity-18" />
      <div className="floating-grain pointer-events-none absolute inset-0 opacity-22" />

      {[...Array(22)].map((_, index) => (
        <span
          key={index}
          data-hero-spark
          className="absolute z-10 h-1 w-1 rounded-full bg-[#e9ca80]/75"
          style={{
            left: `${7 + ((index * 19) % 86)}%`,
            top: `${17 + ((index * 13) % 70)}%`,
          }}
        />
      ))}

      <div className="relative z-20 mx-auto flex min-h-screen max-w-[96rem] items-center px-6 pb-20 pt-32 lg:px-16">
        <div className="max-w-[43rem] translate-y-2 drop-shadow-[0_3px_18px_rgba(0,0,0,0.65)] lg:ml-0">
          <p data-hero-eyebrow className="text-sm font-bold uppercase tracking-[0.34em] text-[#d9bd80]">
            Welcome to DPS Gurugram
          </p>
          <h1 data-hero-title className="hero-title mt-5 overflow-hidden font-semibold">
            <span className="block text-white">Not Just a School.</span>
            <span className="mt-3 block text-[#dfc47c]">A Place Where Children</span>
            <span className="block text-[#dfc47c]">Discover Who They Can Become.</span>
          </h1>
          <p data-hero-copy className="mt-6 max-w-[37rem] text-sm leading-7 text-white/80 md:text-base md:leading-8">
            A nurturing ecosystem that inspires curiosity, builds character and prepares children
            for a future without limits.
          </p>
          <div data-hero-actions className="relative z-40 mt-8 flex flex-wrap items-center gap-5">
            <a
              href="#admissions"
              className="group inline-flex min-w-64 items-center justify-center gap-5 rounded-md border border-[#edcd88]/60 bg-[#d4ad68] px-7 py-4 text-xs font-black uppercase tracking-[0.08em] text-[#06130f] opacity-100 shadow-[0_18px_55px_rgba(212,173,104,0.55)] transition hover:bg-[#e2c17f]"
            >
              Schedule a Campus Visit
              <span className="transition group-hover:translate-x-1">-&gt;</span>
            </a>
            <a
              href="#vision"
              className="grid h-14 w-14 place-items-center rounded-full border border-[#d9bd80]/85 bg-black/20 text-[#d9bd80] backdrop-blur transition hover:bg-[#d9bd80] hover:text-[#06130f]"
              aria-label="Watch campus story"
            >
              <span className="ml-0.5 text-[0.7rem] font-black uppercase tracking-[0.08em]">Play</span>
            </a>
            <span className="text-xs font-black uppercase tracking-[0.16em] text-white/82">
              Watch Our Story
            </span>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute right-[3vw] top-[12vh] z-20 hidden aspect-square w-[min(41vw,42rem)] xl:block">
        <div
          ref={orbitRef}
          className="absolute inset-[5%] rounded-full border border-[#f6dc96]/75 shadow-[0_0_18px_rgba(246,220,150,0.6),0_0_54px_rgba(246,220,150,0.26)]"
        />
        <div className="absolute inset-[5%] rounded-full bg-[conic-gradient(from_205deg,transparent_0deg,rgba(246,220,150,0.22)_32deg,transparent_72deg,transparent_360deg)] opacity-80" />
        {values.map((value) => (
          <motion.div
            key={value.label}
            data-value-chip
            whileHover={{ scale: 1.08, y: -5 }}
            className="pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2 text-center"
            style={{ left: value.x, top: value.y }}
          >
            <div className="mx-auto grid h-13 w-13 place-items-center rounded-full border border-[#f6dc96]/80 bg-[#07140f]/62 text-[#f6dc96] shadow-[0_0_18px_rgba(246,220,150,0.52)] backdrop-blur">
              <OrbitIcon name={value.icon} />
            </div>
            <p className="mt-2 max-w-32 text-[0.68rem] font-black uppercase leading-4 tracking-[0.045em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.82)]">
              {value.label}
            </p>
          </motion.div>
        ))}
      </div>

      <div data-scroll-cue className="absolute bottom-10 left-1/2 z-20 hidden -translate-x-1/2 text-center text-white lg:block">
        <div className="mx-auto grid h-10 w-6 place-items-center rounded-full border border-white/70">
          <span className="h-2 w-1 rounded-full bg-white" />
        </div>
        <p className="mt-3 text-[0.66rem] font-bold uppercase tracking-[0.16em] text-white/85">
          Scroll to explore
        </p>
      </div>
    </section>
  )
}

function OrbitIcon({ name }: { name: string }) {
  const common = {
    className: 'h-7 w-7',
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    strokeWidth: 1.8,
    viewBox: '0 0 24 24',
  }

  if (name === 'people') {
    return (
      <svg {...common}>
        <path d="M16 11a4 4 0 1 0-8 0" />
        <path d="M5 20a7 7 0 0 1 14 0" />
        <path d="M18 9a3 3 0 0 1 3 3" />
        <path d="M3 12a3 3 0 0 1 3-3" />
      </svg>
    )
  }

  if (name === 'bulb') {
    return (
      <svg {...common}>
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M8 14a6 6 0 1 1 8 0c-1 1-1 2-1 4H9c0-2 0-3-1-4Z" />
      </svg>
    )
  }

  if (name === 'shield') {
    return (
      <svg {...common}>
        <path d="M12 3 19 6v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3Z" />
        <path d="m9.5 12 1.7 1.7 3.5-4" />
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

  if (name === 'star') {
    return (
      <svg {...common}>
        <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />
      </svg>
    )
  }

  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c3 3 3 15 0 18" />
      <path d="M12 3c-3 3-3 15 0 18" />
    </svg>
  )
}
