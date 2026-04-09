import { styled } from '../stitches.config'

const Text = styled('p', {
  display: 'block',
  margin: 0,
  variants: {
    family: {
      body: { fontFamily: '$body' },
    },
    variant: {
      heading: { fontFamily: '$body', fontWeight: '600 !important' },
    },
    size: {
      10: { fontSize: '$10' },
      12: { fontSize: '$12' },
      13: { fontSize: '13px' },
      14: { fontSize: '$14' },
      15: { fontSize: '15px' },
      16: { fontSize: '$16' },
      20: { fontSize: '$20' },
      24: { fontSize: '$24' },
      32: { fontSize: '$32' },
      40: { fontSize: '$40' },
      48: { fontSize: '$48' },
    },
    lineHeight: {
      12: { lineHeight: '$12' },
      16: { lineHeight: '$16' },
      20: { lineHeight: '$20' },
      24: { lineHeight: '$24' },
      28: { lineHeight: '28px' },
      32: { lineHeight: '$32' },
      40: { lineHeight: '$40' },
      48: { lineHeight: '$48' },
      56: { lineHeight: '$56' },
    },
    weight: {
      400: { fontWeight: '400' },
      500: { fontWeight: '500' },
      600: { fontWeight: '600' },
      700: { fontWeight: '700' },
      800: { fontWeight: '800' },
    },
    color: {
      gray11: { color: '$gray11' },
      gray12: { color: '$gray12' },
      red: { color: '$red11' },
    },
  },
  defaultVariants: {
    size: '14',
    lineHeight: '28',
    weight: '400',
    color: 'gray12',
    family: 'body',
  },
})

export default Text
