import Head from 'next/head'
import { useRouter } from 'next/router'

const BASE_URL = 'https://bens.market'

interface SEOProps {
  title?: string
  description?: string
  ogImage?: string
}

export default function SEO({
  title,
  description = 'Creating products that make people feel something.',
  ogImage,
}: SEOProps) {
  const router = useRouter()
  const { id } = router.query
  const canonicalUrl = `${BASE_URL}${router.route}`
  const ogUrl = id ? `${BASE_URL}/craft/${id}` : BASE_URL
  const ogImageUrl = ogImage ? `${BASE_URL}${ogImage}` : `${BASE_URL}/og.png`

  return (
    <Head>
      {title && <title>{title}</title>}
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      {title && <meta property="og:title" content={title} />}
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
    </Head>
  )
}
