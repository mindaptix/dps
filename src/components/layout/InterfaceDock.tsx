'use client'

import { useEffect, useState } from 'react'

const quickLinks = [
  { label: 'Journey', href: '#journey' },
  { label: 'Child', href: '#child' },
  { label: 'Campus', href: '#campus' },
  { label: 'Apply', href: '#admissions' },
]

export function InterfaceDock() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const nextProgress = scrollable > 0 ? window.scrollY / scrollable : 0
      setProgress(Math.min(1, Math.max(0, nextProgress)))
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)

    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-[70] h-1 bg-[#061813]/20">
        <div
          className="h-full bg-gradient-to-r from-[#d9bd80] via-[#f2dea7] to-[#0b513c] shadow-[0_0_24px_rgba(217,189,128,0.55)]"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <aside className="fixed right-5 top-1/2 z-50 hidden -translate-y-1/2 xl:block">
        <div className="surface-lift-dark edge-highlight overflow-hidden rounded-[1.25rem] border border-white/12 bg-[#061813]/72 p-2 text-white shadow-[0_24px_80px_rgba(0,0,0,0.34)] backdrop-blur-xl">
          <div className="px-3 pb-3 pt-2">
            <p className="text-[0.55rem] font-black uppercase tracking-[0.16em] text-[#d9bd80]">
              Explore
            </p>
          </div>
          <nav className="grid gap-1">
            {quickLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group grid h-12 w-24 place-items-center rounded-[0.9rem] border border-white/0 text-[0.64rem] font-black uppercase tracking-[0.12em] text-white/68 transition hover:border-[#d9bd80]/30 hover:bg-[#d9bd80]/12 hover:text-[#f2dea7]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="mailto:admissions@dpsgurugram.edu"
            className="mt-2 grid h-12 place-items-center rounded-[0.9rem] bg-[#d9bd80] px-4 text-[0.62rem] font-black uppercase tracking-[0.12em] text-[#061813] transition hover:bg-[#f2dea7]"
          >
            Talk
          </a>
        </div>
      </aside>

      <nav className="fixed bottom-4 left-4 right-4 z-50 grid grid-cols-4 gap-2 rounded-[1.2rem] border border-white/12 bg-[#061813]/82 p-2 text-white shadow-[0_24px_80px_rgba(0,0,0,0.34)] backdrop-blur-xl xl:hidden">
        {quickLinks.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="grid min-h-11 place-items-center rounded-[0.85rem] text-[0.62rem] font-black uppercase tracking-[0.1em] text-white/72 transition hover:bg-[#d9bd80]/14 hover:text-[#f2dea7]"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </>
  )
}
