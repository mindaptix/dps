import Image from 'next/image'
import Link from 'next/link'

const quickLinks = [
  ['Our Vision', '#vision'],
  ['Learning Journey', '#journey'],
  ['Campus', '#campus'],
  ['Admissions', '#admissions'],
  ['Insights', '#insights'],
  ['Connect', '#connect'],
]

const socialLinks = [
  { icon: '𝕗', label: 'Facebook', href: '#' },
  { icon: '𝕏', label: 'Twitter', href: '#' },
  { icon: '📷', label: 'Instagram', href: '#' },
  { icon: '▶', label: 'YouTube', href: '#' },
]

export function Footer() {
  return (
    <footer id="connect" className="relative bg-gradient-to-b from-[#06130f] to-[#000a08] text-white">
      {/* Top Decorative Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#d9bd80] to-transparent"></div>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Main Grid */}
        <div className="grid gap-12 lg:grid-cols-5 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="relative block h-12 w-10 shrink-0">
                <Image
                  src="/images/school-crest.png"
                  alt="Delhi Public School SPR Gurugram"
                  fill
                  sizes="2.5rem"
                  className="object-contain"
                />
              </span>
              <div>
                <p className="font-serif text-2xl font-semibold uppercase tracking-wide">DPS</p>
                <p className="text-xs font-bold uppercase tracking-widest text-[#d9bd80]">
                  Gurugram
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/70 mb-6">
              A child-first school environment for learning, confidence, character and future-ready
              growth.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xs font-bold transition duration-300 hover:bg-[#d9bd80] hover:text-[#06130f]"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#d9bd80] mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-white/70 transition duration-300 hover:text-[#d9bd80] hover:translate-x-1 inline-block"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#d9bd80] mb-6">
              Contact
            </h3>
            <div className="space-y-4 text-sm text-white/70">
              <div>
                <p className="text-xs text-white/50 mb-1">Email</p>
                <a
                  href="mailto:admissions@dpsgurugram.edu"
                  className="transition duration-300 hover:text-[#d9bd80] break-all"
                >
                  admissions@dpsgurugram.edu
                </a>
              </div>
              <div>
                <p className="text-xs text-white/50 mb-1">Phone</p>
                <a href="tel:+910000000000" className="transition duration-300 hover:text-[#d9bd80]">
                  +91 00000 00000
                </a>
              </div>
              <div>
                <p className="text-xs text-white/50 mb-1">Hours</p>
                <p>Mon - Sat</p>
                <p>School Hours</p>
              </div>
            </div>
          </div>

          {/* Location/Info */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#d9bd80] mb-6">
              Location
            </h3>
            <div className="space-y-4 text-sm text-white/70">
              <p>Delhi Public School</p>
              <p>SPR Gurugram</p>
              <p className="text-xs text-white/50">Haryana, India</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-xs text-white/50">
          <p>© {new Date().getFullYear()} DPS Gurugram. All rights reserved.</p>
          <p className="text-[#d9bd80] font-semibold">Nurturing minds. Building futures.</p>
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-white">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#d9bd80] to-transparent mt-8"></div>
    </footer>
  )
}
