import type { CollectionConfig } from 'payload'

export const News: CollectionConfig = {
  slug: 'news',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'summary', type: 'textarea' },
    { name: 'image', type: 'upload', relationTo: 'media' },
    { name: 'publishedAt', type: 'date' },
  ],
}
