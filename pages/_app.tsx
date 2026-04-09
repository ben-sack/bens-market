import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ThemeProvider } from 'next-themes'
import { CSS } from '@stitches/react'
import { globalStyles, darkTheme, config } from '../stitches.config'
import Box from '../components/Box'
import Dock from '../components/Dock'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const route = router.pathname

  const mainCss: CSS<typeof config> = {
    display: 'flex',
    fd: 'column',
    position: 'relative',
    minHeight: '100vh',
    px: '$3',
    py: '120px',
    margin: '0 auto',
    '@mobile': { pt: '40px' },
    ...(route === '/projects' || route.startsWith('/craft/') ? { maxWidth: 720 } : {}),
    ...(route === '/craft' ? { padding: '8px 0px 4px 4px' } : {}),
    ...(route === '/photos' ? { padding: 8 } : {}),
  }

  return (
    <>
      <Head>
        <title>Ben</title>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta name="author" content="Benjamin Sack" />
        <meta name="twitter:site" content="@bensack_" />
        <meta name="twitter:creator" content="@bensack_" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index,follow" />
        <link
          rel="preload"
          href="/X-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/X-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>

      <ThemeProvider
        disableTransitionOnChange
        attribute="class"
        value={{ dark: darkTheme.className }}
      >
        <Dock />
        <Box as="main" css={mainCss}>
          <Component {...pageProps} key={router.route} />
        </Box>
      </ThemeProvider>
    </>
  )
}
