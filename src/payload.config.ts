import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { Blogs } from './collections/Blogs'
import { Enquiries } from './collections/Enquiries'
import { Events } from './collections/Events'
import { Gallery } from './collections/Gallery'
import { Leadership } from './collections/Leadership'
import { Media } from './collections/Media'
import { News } from './collections/News'
import { Pages } from './collections/Pages'
import { Testimonials } from './collections/Testimonials'
import { Users } from './collections/Users'
import { Footer } from './globals/Footer'
import { Header } from './globals/Header'
import { SiteSettings } from './globals/SiteSettings'

export default buildConfig({
  admin: {
    user: Users.slug,
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
