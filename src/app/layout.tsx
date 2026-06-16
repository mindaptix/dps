import type { Metadata } from 'next'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { SmoothScroll } from '@/components/layout/SmoothScroll'
import './globals.css'

export const metadata: Metadata = {
  title: 'DPS Gurugram',
  description: 'A premium school website experience built around the parent journey.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-[#f6f1e8] font-sans text-[#10271f] antialiased">
        <SmoothScroll />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
