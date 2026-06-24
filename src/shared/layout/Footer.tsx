import Image from 'next/image'

const quickLinks = [
  ['Our Vision', '/our-vision'],
  ['Learning Journey', '#journey'],
  ['Campus', '#campus'],
  ['Admissions', '#admissions'],
  ['Families', '#families'],
  ['Connect', '#connect'],
]

const socialLinks = [
  { icon: 'f', label: 'Facebook', href: '#' },
  { icon: 'x', label: 'Twitter', href: '#' },
  { icon: 'ig', label: 'Instagram', href: '#' },
  { icon: 'yt', label: 'YouTube', href: '#' },
]

export function Footer() {
  return (
    <footer id="connect" className="relative overflow-hidden bg-[#102f21] text-[#fff8eb]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(216,188,101,0.18),transparent_28%),radial-gradient(circle_at_86%_72%,rgba(168,205,160,0.14),transparent_30%)]" />
      <div className="relative h-1 bg-gradient-to-r from-transparent via-[#d8bc65] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-12">
        <div className="mb-8 grid gap-8 md:grid-cols-2 lg:grid-cols-5 lg:gap-10">
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center rounded-[1.4rem] border border-white/10 bg-white/[0.06] p-4 backdrop-blur">
              <span className="relative block h-20 w-72 max-w-full shrink-0 rounded-xl bg-white/90">
                <Image
                  src="/images/schoollogo.png.png"
                  alt="Delhi Public School SPR Gurugram"
                  fill
                  sizes="18rem"
                  className="object-contain object-left"
                />
              </span>
            </div>
            <p className="mb-4 max-w-lg text-sm leading-relaxed text-white/68">
              A child-first school environment for learning, confidence, character and future-ready growth.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/10 text-[0.6rem] font-bold text-[#f5d28a] shadow-[0_10px_24px_rgba(0,0,0,0.14)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#d8bc65] hover:text-[#102f21]"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-[#d8bc65]">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-x-5 gap-y-2 lg:grid-cols-1">
              {quickLinks.map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="inline-block text-sm text-white/65 transition duration-300 hover:translate-x-1 hover:text-[#d8bc65]"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-[#d8bc65]">Contact</h3>
            <div className="space-y-3 text-sm text-white/65">
              <div>
                <p className="mb-1 text-xs text-white/42">Email</p>
                <a
                  href="mailto:admissions@dpsgurugram.edu"
                  className="break-all transition duration-300 hover:text-[#d8bc65]"
                >
                  admissions@dpsgurugram.edu
                </a>
              </div>
              <div>
                <p className="mb-1 text-xs text-white/42">Phone</p>
                <a href="tel:+910000000000" className="transition duration-300 hover:text-[#d8bc65]">
                  +91 00000 00000
                </a>
              </div>
              <div>
                <p className="mb-1 text-xs text-white/42">Hours</p>
                <p>Mon - Sat</p>
                <p>School Hours</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-[#d8bc65]">Location</h3>
            <div className="space-y-2 text-sm text-white/65">
              <p>Delhi Public School</p>
              <p>SPR Gurugram</p>
              <p className="text-xs text-white/42">Haryana, India</p>
            </div>
          </div>
        </div>

        <div className="mb-5 h-px bg-gradient-to-r from-transparent via-[#d7bd7d] to-transparent" />

        <div className="flex flex-col gap-4 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} DPS Gurugram. All rights reserved.</p>
          <p className="font-semibold text-[#d8bc65]">Every Child Has a Story Waiting to Unfold.</p>
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-[#d8bc65]">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-[#d8bc65]">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>

      <div className="relative h-1 bg-gradient-to-r from-transparent via-[#d8bc65] to-transparent" />
    </footer>
  )
}
