'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const navItems = [
  ['Our Vision', '#vision'],
  ['Learning Journey', '#journey'],
  ['The Child We Nurture', '#child'],
  ['Campus', '#campus'],
  ['Admissions', '#admissions'],
  ['Insights', '#insights'],
  ['Connect', '#connect'],
]

export function Header() {
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const updateVisibility = () => {
      const currentY = window.scrollY
      const scrollingDown = currentY > lastScrollY.current
      const scrolledPastThreshold = currentY > 80

      if (scrolledPastThreshold && scrollingDown) {
        setHidden(true)
      } else {
        setHidden(false)
      }

      lastScrollY.current = currentY
    }

    lastScrollY.current = window.scrollY
    window.addEventListener('scroll', updateVisibility, { passive: true })

    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-2 z-50 text-[#173628] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none md:top-3 ${
        hidden ? '-translate-y-[120%] opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
      }`}
    >
      <div className="px-3 pt-0">
        <div className="mx-auto flex max-w-[112rem] items-center gap-2 rounded-[1.2rem] border border-[#d5e3cf] bg-white px-2 py-0 shadow-[0_18px_60px_rgba(22,51,37,0.12)] md:px-3 lg:px-4">
          <Link href="/" className="flex shrink-0 items-center">
            <span className="relative ml-3 block h-[5.2rem] w-48 shrink-0 overflow-hidden md:ml-4 md:h-[5.8rem] md:w-60 lg:ml-5 lg:h-[6.4rem] lg:w-[17rem]">
              <Image
                src="/images/schoollogo.png.png"
                alt="Delhi Public School SPR Gurugram"
                fill
                loading="eager"
                sizes="(max-width: 768px) 14rem, (max-width: 1024px) 16rem, 18rem"
                className="object-contain"
              />
            </span>
          </Link>

          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-4 text-[0.74rem] font-bold uppercase tracking-[0.12em] text-[#1f1f1f] xl:flex">
            {navItems.map(([item, href]) => (
              <a
                key={item}
                href={href}
                className="relative whitespace-nowrap transition duration-300 hover:text-[#000000] after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-[#000000] after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="ml-auto mr-2 flex shrink-0 items-center gap-2">
            <a
              href="#admissions"
              className="hidden rounded-full border border-[#6ea565]/20 bg-gradient-to-r from-[#75ad68] to-[#639958] px-4 py-1.5 text-[0.64rem] font-bold uppercase tracking-[0.14em] text-white shadow-[0_12px_30px_rgba(99,153,88,0.28)] transition duration-300 hover:-translate-y-0.5 hover:from-[#86be79] hover:to-[#6ea565] hover:shadow-[0_16px_36px_rgba(99,153,88,0.34)] md:inline-flex"
            >
              Schedule A Visit
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
