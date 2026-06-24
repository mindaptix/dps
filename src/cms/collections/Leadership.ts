import type { CollectionConfig } from 'payload'

export const Leadership: CollectionConfig = {
  slug: 'leadership',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'designation', type: 'text', required: true },
    { name: 'bio', type: 'richText' },
    { name: 'photo', type: 'upload', relationTo: 'media' },
    { name: 'sortOrder', type: 'number', defaultValue: 0 },
  ],
}
