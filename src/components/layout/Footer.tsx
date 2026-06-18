import Image from 'next/image'

const quickLinks = [
  ['Our Vision', '#vision'],
  ['Learning Journey', '#journey'],
  ['Campus', '#campus'],
  ['Admissions', '#admissions'],
  ['Insights', '#insights'],
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
    <footer id="connect" className="relative bg-gradient-to-b from-[#edf5ea] to-[#dfeedd] text-[#173628]">
      <div className="h-1 bg-gradient-to-r from-transparent via-[#78af6f] to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-12 grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center">
              <span className="relative block h-40 w-40 shrink-0 md:h-48 md:w-48 lg:h-56 lg:w-56">
                <Image
                  src="/images/schoollogo.png.png"
                  alt="Delhi Public School SPR Gurugram"
                  fill
                  sizes="(max-width: 768px) 10rem, (max-width: 1024px) 12rem, 14rem"
                  className="object-contain"
                />
              </span>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-[#527062]">
              A child-first school environment for learning, confidence, character and future-ready growth.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[0.62rem] font-bold shadow-[0_12px_30px_rgba(22,51,37,0.08)] transition duration-300 hover:bg-[#6ea565] hover:text-white"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-[#6ea565]">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="inline-block text-sm text-[#527062] transition duration-300 hover:translate-x-1 hover:text-[#6ea565]"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-[#6ea565]">Contact</h3>
            <div className="space-y-4 text-sm text-[#527062]">
              <div>
                <p className="mb-1 text-xs text-[#6f877b]">Email</p>
                <a
                  href="mailto:admissions@dpsgurugram.edu"
                  className="break-all transition duration-300 hover:text-[#6ea565]"
                >
                  admissions@dpsgurugram.edu
                </a>
              </div>
              <div>
                <p className="mb-1 text-xs text-[#6f877b]">Phone</p>
                <a href="tel:+910000000000" className="transition duration-300 hover:text-[#6ea565]">
                  +91 00000 00000
                </a>
              </div>
              <div>
                <p className="mb-1 text-xs text-[#6f877b]">Hours</p>
                <p>Mon - Sat</p>
                <p>School Hours</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-[#6ea565]">Location</h3>
            <div className="space-y-4 text-sm text-[#527062]">
              <p>Delhi Public School</p>
              <p>SPR Gurugram</p>
              <p className="text-xs text-[#6f877b]">Haryana, India</p>
            </div>
          </div>
        </div>

        <div className="mb-8 h-px bg-gradient-to-r from-transparent via-[#c9dcc4] to-transparent" />

        <div className="flex flex-col gap-4 text-xs text-[#6f877b] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} DPS Gurugram. All rights reserved.</p>
          <p className="font-semibold text-[#6ea565]">Nurturing minds. Building futures.</p>
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-[#6ea565]">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-[#6ea565]">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 h-1 bg-gradient-to-r from-transparent via-[#78af6f] to-transparent" />
    </footer>
  )
}
