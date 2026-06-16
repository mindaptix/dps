import type { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  fields: [
    { name: 'description', type: 'textarea' },
    { name: 'address', type: 'textarea' },
    { name: 'email', type: 'email' },
    { name: 'phone', type: 'text' },
    {
      name: 'socialLinks',
      type: 'array',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'href', type: 'text', required: true },
      ],
    },
  ],
}
