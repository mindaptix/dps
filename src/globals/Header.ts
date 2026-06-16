import type { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',
  fields: [
    { name: 'logoText', type: 'text', defaultValue: 'DPS Gurugram' },
    {
      name: 'navItems',
      type: 'array',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'href', type: 'text', required: true },
      ],
    },
    { name: 'ctaLabel', type: 'text', defaultValue: 'Schedule a Visit' },
    { name: 'ctaHref', type: 'text', defaultValue: '#admissions' },
  ],
}
