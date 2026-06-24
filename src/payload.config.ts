import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import {
  Blogs,
  Enquiries,
  Events,
  Gallery,
  Leadership,
  Media,
  News,
  Pages,
  Testimonials,
  Users,
} from './cms/collections'
import { Footer, Header, SiteSettings } from './cms/globals'

export default buildConfig({
  admin: {
    meta: {
      titleSuffix: '- DPS Gurugram CMS',
    },
    user: Users.slug,
  },
  routes: {
    admin: '/admin',
    api: '/api',
    graphQL: '/api/graphql',
    graphQLPlayground: '/api/graphql-playground',
  },
  collections: [
    Users,
    Media,
    Pages,
    Blogs,
    News,
    Events,
    Gallery,
    Enquiries,
    Testimonials,
    Leadership,
  ],
  globals: [Header, Footer, SiteSettings],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  sharp,
})
