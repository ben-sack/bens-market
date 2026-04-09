import { GetStaticPaths, GetStaticProps } from 'next'
import SEO from '../../components/SEO'
import Box from '../../components/Box'
import Text from '../../components/Text'
import { craftItems, CraftItem } from '../../lib/data'
import { slugify } from '../../lib/utils'

interface Props {
  item: CraftItem & { id: string }
}

export default function CraftDetail({ item }: Props) {
  return (
    <>
      <SEO title={item.title} />
      <Box css={{ pt: '$2' }}>
        <Text as="h1" size="20" weight="500" css={{ mb: '$2' }}>
          {item.title}
        </Text>
        <Text color="gray11" css={{ mb: '$4' }}>
          {item.date}
        </Text>

        <Box
          css={{
            br: 12,
            overflow: 'hidden',
            border: '1px solid $gray5',
            background: '$gray2',
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            src={item.src}
            style={{ display: 'block', width: '100%' }}
          />
        </Box>
      </Box>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = craftItems.map((item) => ({
    params: { id: slugify(item.title) },
  }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const id = params?.id as string
  const item = craftItems.find((c) => slugify(c.title) === id)
  if (!item) return { notFound: true }
  return { props: { item: { ...item, id } } }
}
