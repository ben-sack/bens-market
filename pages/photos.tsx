import SEO from '../components/SEO'
import Box from '../components/Box'
import Text from '../components/Text'

export default function Photos() {
  return (
    <>
      <SEO title="Photos" />
      <Box
        css={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(440px, 1fr))',
          gap: 8,
          '@mobile': {
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          },
        }}
      >
        <Box
          css={{
            br: 12,
            overflow: 'hidden',
            border: '1px solid $gray5',
            background: '$gray2',
            height: 700,
            center: true,
            '@mobile': { height: 420 },
          }}
        >
          <Text color="gray11" size="13">
            Photos coming soon
          </Text>
        </Box>
      </Box>
    </>
  )
}
