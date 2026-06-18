'use client'

import { motion } from 'framer-motion'

const orbitLabels = [
  { label: 'Leadership', icon: 'users', left: '50%', top: '10%' },
  { label: 'Innovation', icon: 'bulb', left: '86%', top: '32%' },
  { label: 'Character', icon: 'shield', left: '90%', top: '58%' },
  { label: 'Compassion', icon: 'heart', left: '82%', top: '82%' },
  { label: 'Excellence', icon: 'star', left: '18%', top: '66%' },
  { label: 'Global Citizenship', icon: 'globe', left: '22%', top: '39%' },
]

export function HomeHero() {
  return (
    <section id="vision" className="relative min-h-screen overflow-hidden bg-[#06130f] text-white">
      <div className="absolute inset-0 bg-[url('/images/dps-hero-students.png')] bg-cover bg-[64%_center]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,13,10,0.92)_0%,rgba(4,18,13,0.78)_34%,rgba(4,18,13,0.30)_58%,rgba(4,18,13,0.08)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.02)_42%,rgba(0,0,0,0.38)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_43%,rgba(210,177,102,0.18),transparent_28%),radial-gradient(circle_at_28%_50%,rgba(138,188,123,0.14),transparent_32%)]" />
      <div className="floating-grain pointer-events-none absolute inset-0 opacity-20" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-[112rem] items-center px-6 pb-16 pt-32 md:px-10 lg:grid-cols-[0.52fr_0.48fr] lg:px-20 lg:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[56rem]"
        >
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#d9b96f]">
            Welcome to DPS Gurugram
          </p>

          <h1 className="mt-6 max-w-[16ch] font-serif text-5xl font-medium leading-[1.03] text-[#d9b96f] md:text-6xl lg:text-7xl">
            <span className="mt-3 block">A Place Where Children Discover Who They Can Become.</span>
          </h1>

          <p className="mt-8 max-w-3xl text-base font-medium leading-8 text-white/86 md:text-lg">
            A nurturing ecosystem that inspires curiosity, builds character and prepares children
            for a future without limits.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-7">
            <a
              href="#admissions"
              className="group inline-flex min-w-64 items-center justify-center gap-8 rounded-md bg-[#d2b166] px-7 py-4 text-xs font-black uppercase tracking-[0.08em] text-[#06130f] shadow-[0_18px_46px_rgba(210,177,102,0.25)] transition hover:bg-[#e0c57b]"
            >
              Schedule a Campus Visit
              <span className="text-lg leading-none transition group-hover:translate-x-1">-&gt;</span>
            </a>

            <a href="#vision" className="inline-flex items-center gap-4" aria-label="Watch our story">
              <span className="grid h-14 w-14 place-items-center rounded-full border border-[#d2b166] bg-[#06130f]/34 text-[#d2b166] backdrop-blur">
                <span className="ml-1 h-0 w-0 border-y-[6px] border-l-[9px] border-y-transparent border-l-current" />
              </span>
              <span className="text-xs font-black uppercase tracking-[0.14em] text-white">
                Watch Our Story
              </span>
            </a>
          </div>
        </motion.div>

        <div className="relative hidden min-h-[42rem] lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d2b166]/55 shadow-[0_0_34px_rgba(210,177,102,0.22),inset_0_0_34px_rgba(210,177,102,0.08)]"
          />
          <div className="absolute left-1/2 top-1/2 h-[25rem] w-[25rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d2b166]/18" />

          {orbitLabels.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 14, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.18 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -translate-x-1/2 -translate-y-1/2 text-center"
              style={{ left: item.left, top: item.top }}
            >
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-[#d2b166]/60 bg-[#06130f]/58 text-[#f2d889] shadow-[0_0_26px_rgba(210,177,102,0.22)] backdrop-blur">
                <OrbitIcon name={item.icon} />
              </div>
              <p className="mt-2 max-w-[8rem] text-[0.72rem] font-black uppercase leading-tight tracking-[0.04em] text-white">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 text-center text-white/72 md:block">
        <div className="mx-auto mb-2 grid h-10 w-7 place-items-center rounded-full border border-white/45">
          <span className="h-3 w-px rounded-full bg-white/70" />
        </div>
        <p className="text-[0.62rem] font-black uppercase tracking-[0.16em]">Scroll to explore</p>
      </div>
    </section>
  )
}

function OrbitIcon({ name }: { name: string }) {
  const common = {
    className: 'h-5 w-5',
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    strokeWidth: 1.8,
    viewBox: '0 0 24 24',
  }

  if (name === 'users') {
    return (
      <svg {...common}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
        <circle cx="9.5" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  }

  if (name === 'bulb') {
    return (
      <svg {...common}>
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2a7 7 0 0 0-4 12.7c.7.5 1 1.2 1 2.1V18h6v-1.2c0-.9.4-1.6 1.1-2.1A7 7 0 0 0 12 2Z" />
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
        <path d="m12 3 2.5 5.2 5.7.8-4.1 4 1 5.7-5.1-2.7-5.1 2.7 1-5.7-4.1-4 5.7-.8L12 3Z" />
      </svg>
    )
  }

  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.4 2.5 3.5 5.5 3.5 9S14.4 18.5 12 21c-2.4-2.5-3.5-5.5-3.5-9S9.6 5.5 12 3Z" />
    </svg>
  )
}
