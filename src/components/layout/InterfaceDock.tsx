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
          className="h-full bg-gradient-to-r from-[#8ebf80] via-[#cfe6c7] to-[#6ea565] shadow-[0_0_24px_rgba(110,165,101,0.35)]"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <aside className="fixed right-5 top-1/2 z-50 hidden -translate-y-1/2 xl:block">
        <div className="surface-lift-dark edge-highlight overflow-hidden rounded-[1.25rem] border border-[#d4e2d0] bg-white/85 p-2 text-[#173628] shadow-[0_24px_80px_rgba(22,51,37,0.12)] backdrop-blur-xl">
          <div className="px-3 pb-3 pt-2">
              <p className="text-[0.55rem] font-black uppercase tracking-[0.16em] text-[#6ea565]">
              Explore
            </p>
          </div>
          <nav className="grid gap-1">
            {quickLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group grid h-12 w-24 place-items-center rounded-[0.9rem] border border-transparent text-[0.64rem] font-black uppercase tracking-[0.12em] text-[#567063] transition hover:border-[#cfe2cb] hover:bg-[#e7f1e5] hover:text-[#6ea565]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="mailto:admissions@dpsgurugram.edu"
            className="mt-2 grid h-12 place-items-center rounded-[0.9rem] bg-[#6ea565] px-4 text-[0.62rem] font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#82b874]"
          >
            Talk
          </a>
        </div>
      </aside>

      <nav className="fixed bottom-4 left-4 right-4 z-50 grid grid-cols-4 gap-2 rounded-[1.2rem] border border-[#d4e2d0] bg-white/88 p-2 text-[#173628] shadow-[0_24px_80px_rgba(22,51,37,0.12)] backdrop-blur-xl xl:hidden">
        {quickLinks.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="grid min-h-11 place-items-center rounded-[0.85rem] text-[0.62rem] font-black uppercase tracking-[0.1em] text-[#567063] transition hover:bg-[#e7f1e5] hover:text-[#6ea565]"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </>
  )
}
