import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import Masonry from 'react-masonry-css'
import SEO from '../../components/SEO'
import Box from '../../components/Box'
import Text from '../../components/Text'
import { css, keyframes } from '../../stitches.config'
import { craftItems } from '../../lib/data'
import { slugify } from '../../lib/utils'

// ─── Card styles ────────────────────────────────────────────────────────────
const cardCss = css({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: 12,
  border: '1px solid $gray5',
  background: '$gray2',
  cursor: 'pointer',
  display: 'block',
  marginBottom: 8,
  '&:hover [data-overlay]': {
    opacity: 1,
  },
  '&:hover video': {
    filter: 'none',
  },
  video: {
    display: 'block',
    width: '100%',
    aspectRatio: '1 / 1',
    objectFit: 'cover',
  },
})

const overlayGradient = css({
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(to top, hsla(0 0% 0% / 90%), 50%, hsla(0 0% 0% / 0))',
  opacity: 0,
  transition: 'opacity 200ms ease',
  zIndex: 1,
})

// ─── Individual card ─────────────────────────────────────────────────────────
interface CardProps {
  title: string
  date: string
  src: string
  id: string
  component?: boolean
  href?: string
}

function CraftCard({ title, date, src, id, href }: CardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [inView, setInView] = useState(false)
  const itemRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const el = itemRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: '200px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const target = href !== undefined ? href : `/craft/${id}`
  const isExternal = href?.startsWith('https')

  return (
    <a
      ref={itemRef}
      href={target || undefined}
      className={cardCss()}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      onPointerEnter={() => videoRef.current?.play()}
      onPointerLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause()
          videoRef.current.currentTime = 0
        }
      }}
    >
      <video
        ref={videoRef}
        playsInline
        loop
        muted
        src={inView ? src : undefined}
        style={{ filter: 'none' }}
      />

      <div className={overlayGradient()} data-overlay="" />

      <Box
        css={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          p: '12px 16px',
          zIndex: 2,
        }}
      >
        <Text
          size="14"
          weight="500"
          css={{ color: 'white', d: 'block', mb: 2 }}
        >
          {title}
        </Text>
        <Text size="12" css={{ color: 'rgba(255,255,255,0.6)', d: 'block' }}>
          {date}
        </Text>
      </Box>
    </a>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function Craft() {
  const breakpointCols = { default: 3, 960: 2, 480: 1 }

  return (
    <>
      <SEO title="Craft" />
      <Masonry
        breakpointCols={breakpointCols}
        className="grid"
        columnClassName="column"
      >
        {craftItems.map((item) => (
          <CraftCard
            key={item.title}
            title={item.title}
            date={item.date}
            src={item.src}
            id={slugify(item.title)}
            component={item.component}
            href={item.href}
          />
        ))}
      </Masonry>
    </>
  )
}
