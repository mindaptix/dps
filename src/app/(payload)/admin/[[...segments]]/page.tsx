import config from '@/payload.config'
import { generatePageMetadata, RootPage } from '@payloadcms/next/views'
import { importMap } from '../importMap'

type PayloadAdminPageProps = {
  params: Promise<{
    segments: string[]
  }>
  searchParams: Promise<{
    [key: string]: string | string[]
  }>
}

export const generateMetadata = ({ params, searchParams }: PayloadAdminPageProps) =>
  generatePageMetadata({ config, params, searchParams })

export default function PayloadAdminPage({ params, searchParams }: PayloadAdminPageProps) {
  return RootPage({ config, importMap, params, searchParams })
}
