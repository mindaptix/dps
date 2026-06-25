'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const navItems = [
  ['Our Vision', '/our-vision'],
  ['Learning Journey', '#journey'],
  ['The Child We Nurture', '#child'],
  ['Campus', '#campus'],
  ['Admissions', '#admissions'],
  ['Insights', '#insights'],
  ['Connect', '#connect'],
]

const tickerItems = [
  'Admissions open 2026-27',
  'Nursery to Grade XII',
  'Campus visits every Saturday',
  'Download prospectus',
  'Transport routes across Gurugram',
  'Scholarship interactions open',
]

export function Header() {
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const updateVisibility = () => {
      const currentY = window.scrollY
      const scrollingDown = currentY > lastScrollY.current
      const scrolledPastThreshold = currentY > 80

      setHidden(scrolledPastThreshold && scrollingDown)
      if (scrolledPastThreshold && scrollingDown) {
        setMenuOpen(false)
      }
      lastScrollY.current = currentY
    }

    lastScrollY.current = window.scrollY
    window.addEventListener('scroll', updateVisibility, { passive: true })

    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-[#17233a] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
        hidden ? 'pointer-events-none -translate-y-[120%] opacity-0' : 'translate-y-0 opacity-100'
      }`}
    >
      <div className="surface-lift edge-highlight w-full overflow-hidden border-b border-[#d6e5d1]/80 bg-[#fffdf8]/90 shadow-[0_16px_46px_rgba(23,35,58,0.13)] backdrop-blur-xl">
        <div className="overflow-hidden border-b border-[#d8bc65]/35 bg-[#026833]">
          <div className="admission-ticker flex w-max items-center py-1">
            {[...tickerItems, ...tickerItems].map((item, index) => (
              <a
                key={`${item}-${index}`}
                href="#admissions"
                className="mx-7 inline-flex items-center gap-2 whitespace-nowrap font-serif text-[0.78rem] font-black uppercase leading-none tracking-[0.03em] text-[#fff200] transition hover:text-white md:text-[0.9rem]"
              >
                <span>{item}</span>
                <span className="grid h-5 w-5 place-items-center rounded-full border border-[#fff200]/60 bg-white text-[#064126] shadow-[0_0_12px_rgba(255,242,0,0.35)]">
                  <NoticeIcon />
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex h-20 items-center gap-2 px-3 py-0 sm:h-[5.5rem] md:px-5 lg:h-24 lg:px-7 2xl:px-8">
          <Link href="/" className="flex min-w-0 shrink items-center xl:shrink-0" onClick={() => setMenuOpen(false)}>
            <span className="relative block w-[min(68vw,16rem)] shrink overflow-hidden sm:w-[19rem] xl:w-[16.25rem] 2xl:w-[20rem]">
              <Image
                src="/images/logo11.png"
                alt="Delhi Public School SPR Gurugram"
                width={1903}
                height={592}
                loading="eager"
                fetchPriority="high"
                sizes="(max-width: 640px) 68vw, (max-width: 1279px) 19rem, (max-width: 1535px) 16.25rem, 20rem"
                className="h-auto w-full object-contain object-left"
              />
            </span>
          </Link>

          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-1.5 text-[0.64rem] font-bold uppercase tracking-[0.08em] text-[#17233a] xl:flex 2xl:gap-3 2xl:text-[0.72rem] 2xl:tracking-[0.11em]">
            {navItems.map(([item, href]) => (
              <a
                key={item}
                href={href}
                className="relative whitespace-nowrap rounded-full px-1.5 py-1 transition duration-300 hover:bg-[#eef6eb] hover:text-[#143627] after:absolute after:-bottom-2 after:left-2 after:h-px after:w-0 after:bg-[#b9862f] after:transition-all after:duration-300 hover:after:w-[calc(100%-1rem)] 2xl:px-2"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-2">
            <a
              href="#admissions"
              className="interactive-ring hidden rounded-full border border-[#d6b56d]/45 bg-gradient-to-r from-[#143627] via-[#17233a] to-[#243d2d] px-3 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.12em] text-[#fff6df] shadow-[0_12px_30px_rgba(23,35,58,0.24)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(23,35,58,0.30)] sm:inline-flex lg:px-4 lg:text-[0.64rem] xl:px-3 2xl:px-4"
            >
              Schedule A Visit
            </a>

            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="interactive-ring grid h-10 w-10 place-items-center rounded-full border border-[#d6b56d]/45 bg-[#143627] text-[#fff6df] shadow-[0_10px_24px_rgba(23,35,58,0.18)] transition hover:-translate-y-0.5 xl:hidden"
            >
              <span className="relative block h-3.5 w-4">
                <span
                  className={`absolute left-0 h-0.5 w-4 rounded-full bg-current transition ${
                    menuOpen ? 'top-1.5 rotate-45' : 'top-0'
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 h-0.5 w-4 rounded-full bg-current transition ${
                    menuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute left-0 h-0.5 w-4 rounded-full bg-current transition ${
                    menuOpen ? 'top-1.5 -rotate-45' : 'top-3'
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        <div
          className={`border-t border-[#d6e5d1]/80 bg-[#fffdf8]/95 px-4 shadow-[0_18px_34px_rgba(23,35,58,0.12)] backdrop-blur-xl transition xl:hidden ${
            menuOpen ? 'max-h-96 py-4 opacity-100' : 'max-h-0 overflow-hidden py-0 opacity-0'
          }`}
        >
          <nav className="mx-auto grid max-w-3xl gap-2 sm:grid-cols-2">
            {navItems.map(([item, href]) => (
              <a
                key={item}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md border border-[#d6e5d1]/70 bg-white/70 px-4 py-3 text-sm font-bold uppercase tracking-[0.08em] text-[#17233a] transition hover:border-[#b9862f]/55 hover:bg-[#eef6eb] hover:text-[#143627]"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

function NoticeIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
      <path d="M5 16l.6 1.4L7 18l-1.4.6L5 20l-.6-1.4L3 18l1.4-.6L5 16Z" />
    </svg>
  )
}
