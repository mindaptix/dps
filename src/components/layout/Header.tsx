import Image from 'next/image'
import Link from 'next/link'

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
  return (
    <header className="fixed inset-x-0 top-0 z-50 text-white">
      <div className="relative flex h-16 w-full items-center gap-8 bg-black/68 px-8 shadow-[0_16px_50px_rgba(0,0,0,0.34)] backdrop-blur-md">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <span className="relative block h-11 w-9 shrink-0">
            <Image
              src="/images/school-crest.png"
              alt="Delhi Public School SPR Gurugram"
              fill
              priority
              sizes="2.25rem"
              className="object-contain"
            />
          </span>
          <span className="leading-none">
            <span className="block font-serif text-[1.7rem] font-semibold uppercase tracking-[0.08em]">
              DPS
            </span>
            <span className="mt-1 block text-[0.6rem] font-bold uppercase tracking-[0.28em]">
              Gurugram
            </span>
          </span>
        </Link>
        <div className="hidden h-8 w-px shrink-0 bg-white/28 md:block" />
        <p className="hidden w-32 shrink-0 text-[0.56rem] font-bold uppercase leading-4 tracking-[0.08em] text-white/78 md:block">
          Nurturing minds. Building futures.
        </p>
        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-8 text-[0.57rem] font-bold uppercase tracking-[0.03em] text-white/86 lg:flex">
          {navItems.map(([item, href]) => (
            <a
              key={item}
              href={href}
              className="whitespace-nowrap transition hover:text-[#d5b36c]"
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex shrink-0 items-center gap-4">
          <a
            href="#admissions"
            className="hidden rounded-[0.18rem] bg-[#b89555] px-7 py-3.5 text-[0.6rem] font-bold uppercase tracking-[0.04em] text-white shadow-[0_10px_32px_rgba(184,149,85,0.28)] transition hover:bg-[#caa66a] md:inline-flex"
          >
            Schedule A Visit
          </a>
          <button
            type="button"
            aria-label="Open menu"
            className="grid h-8 w-8 place-items-center rounded-full border border-white/25 text-white/82 transition hover:border-[#d5b36c] hover:text-[#d5b36c]"
          >
            <span className="grid gap-1">
              <span className="block h-px w-3.5 bg-current" />
              <span className="block h-px w-3.5 bg-current" />
              <span className="block h-px w-3.5 bg-current" />
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}
