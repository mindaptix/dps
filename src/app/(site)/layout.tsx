import type { Metadata } from 'next'
import { Footer } from '@/shared/layout/Footer'
import { Header } from '@/shared/layout/Header'
import '../globals.css'

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
      <body className="min-h-full bg-[#f7f1e6] font-sans text-[#17233a] antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
