import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  fields: [
    { name: 'siteName', type: 'text', defaultValue: 'DPS Gurugram' },
    { name: 'siteUrl', type: 'text', defaultValue: 'http://localhost:3000' },
    { name: 'defaultMetaTitle', type: 'text' },
    { name: 'defaultMetaDescription', type: 'textarea' },
    { name: 'ogImage', type: 'upload', relationTo: 'media' },
  ],
}
