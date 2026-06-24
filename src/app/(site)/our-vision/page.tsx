import type { Metadata } from 'next'
import { VisionPage } from '@/features/vision/VisionPage'

export const metadata: Metadata = {
  title: 'Our Vision | DPS Gurugram',
  description:
    'Why DPS exists: a future-focused, deeply human education where every child is known, challenged, supported, and inspired.',
}

export default function OurVisionPage() {
  return <VisionPage />
}
