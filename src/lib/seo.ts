import type { Metadata } from 'next'

type SeoInput = {
  title?: string
  description?: string
  path?: string
  image?: string
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export function createSeo({ title, description, path = '/', image }: SeoInput): Metadata {
  const pageTitle = title ? `${title} | DPS Gurugram` : 'DPS Gurugram'
  const pageDescription =
    description || 'A premium school website experience built around the parent journey.'
  const url = new URL(path, siteUrl).toString()

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: 'DPS Gurugram',
      images: image ? [{ url: image }] : undefined,
    },
  }
}
