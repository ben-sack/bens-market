import { useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import Link from 'next/link'
import SEO from '../components/SEO'
import Box from '../components/Box'
import { css, keyframes, styled } from '../stitches.config'
import { assetUrl, clamp } from '../lib/utils'

// ─── Shuffle letters ───────────────────────────────────────────────────────
function shuffleLetters(el: HTMLElement, options: { iterations?: number } = {}) {
  const { iterations = 8 } = options
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
  const original = el.textContent ?? ''
  const letters = original.split('')
  const nonSpace = letters.reduce<number[]>((acc, c, i) => {
    if (!/\s/.test(c)) acc.push(i)
    return acc
  }, [])
  let timer: ReturnType<typeof setTimeout>
  function step(round: number) {
    if (round > nonSpace.length) { el.textContent = original; return }
    const cur = [...letters]
    for (let i = Math.max(round, 0); i < nonSpace.length; i++) {
      cur[nonSpace[i]] = i < round + iterations
        ? chars[Math.floor(Math.random() * chars.length)]
        : ''
    }
    el.textContent = cur.join('')
    timer = setTimeout(() => step(round + 1), 1000 / 30)
  }
  step(-iterations)
  return () => clearTimeout(timer)
}

// ─── Types ─────────────────────────────────────────────────────────────────
interface CarouselItem {
  type: string
  title: string
  href: string
  src: string
}

// ─── Data ──────────────────────────────────────────────────────────────────
const ITEMS: CarouselItem[] = [
  { type: 'Shader', title: 'Gooey', href: '/craft', src: assetUrl('gooey.mp4') },
  { type: 'Shader', title: 'Stripes', href: '/craft', src: assetUrl('stripes.mp4') },
  { type: 'Shader', title: 'Flume', href: '/craft', src: assetUrl('flume.mp4') },
  { type: 'Shader', title: 'Peach', href: '/craft', src: assetUrl('peach.mp4') },
  { type: 'Shader', title: 'Rainbow', href: '/craft', src: assetUrl('rainbow.mp4') },
]

const ITEM_WIDTH = 340
const ITEM_GAP = 12
const STEP = ITEM_WIDTH + ITEM_GAP

// ─── Styled ────────────────────────────────────────────────────────────────
const carouselItemCss = css({
  '--blur': '0px',
  width: 'auto',
  minWidth: ITEM_WIDTH,
  listStyle: 'none',
  height: 'fit-content',
  position: 'relative',
  overflow: 'hidden',
  filter: 'grayscale(1) blur(var(--blur))',
  transition: 'filter 500ms ease',
  transform: 'translateZ(0)',
  outline: 0,
  cursor: 'pointer',
  '&:hover': {
    filter: 'grayscale(0) blur(var(--blur))',
    '[data-fake-button]': { opacity: 1 },
  },
  'video': {
    display: 'block',
    width: '100%',
    height: ITEM_WIDTH,
    objectFit: 'cover',
  },
})

const FadePanel = styled('div', {
  width: '20vw',
  height: '100%',
  position: 'fixed',
  bottom: 0,
  zIndex: 3,
  opacity: 1,
  minWidth: 120,
  backdropFilter: 'blur(4px)',
  pointerEvents: 'none',
  $$fadeColor: 'rgba(255, 255, 255, 0.00001)',
  '.dark &': { $$fadeColor: 'rgba(22, 22, 22, 0.00001)' },
  variants: {
    side: {
      left: {
        background: 'linear-gradient(to left, $$fadeColor, $colors$gray1)',
        maskImage: 'linear-gradient(to right, $colors$gray1, $$fadeColor)',
        left: -24,
      },
      right: {
        background: 'linear-gradient(to right, $$fadeColor, $colors$gray1)',
        maskImage: 'linear-gradient(to left, $colors$gray1, $$fadeColor)',
        right: 0,
      },
    },
  },
})

const DarkenOverlay = styled('div', {
  background: '$gray1',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 5,
  pointerEvents: 'none',
  transform: 'translateZ(0)',
  mixBlendMode: 'darken',
  '.dark &': { mixBlendMode: 'lighten' },
})

// ─── Arrow icon ─────────────────────────────────────────────────────────────
function ArrowIcon() {
  return (
    <svg
      data-arrow=""
      width="16px"
      height="16px"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      fill="none"
      color="currentColor"
    >
      <path
        d="M6 12h12.5m0 0l-6-6m6 6l-6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// ─── Carousel item ──────────────────────────────────────────────────────────
function VideoCard({ src, title, type, href }: CarouselItem) {
  const itemRef = useRef<HTMLAnchorElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [inView, setInView] = useState(false)

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

  useEffect(() => {
    if (!inView && videoRef.current) {
      videoRef.current.currentTime = 0
      Array.from(document.querySelectorAll('[carousel-item]')).forEach((el) => {
        ;(el as HTMLElement).style.setProperty('--blur', '0px')
      })
    }
  }, [inView])

  function handleEnter() {
    videoRef.current?.play()
    Array.from(document.querySelectorAll('[carousel-item]'))
      .filter((el) => el !== itemRef.current)
      .forEach((el) => (el as HTMLElement).style.setProperty('--blur', '2px'))
  }

  function handleLeave() {
    videoRef.current?.pause()
    Array.from(document.querySelectorAll('[carousel-item]')).forEach((el) => {
      ;(el as HTMLElement).style.setProperty('--blur', '0px')
    })
  }

  const isExternal = href.startsWith('https')

  return (
    <a
      ref={itemRef}
      aria-label={`${title}, ${type}`}
      tabIndex={-1}
      href={href}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      carousel-item=""
      className={carouselItemCss()}
      onClick={handleEnter}
      onPointerEnter={handleEnter}
      onPointerLeave={handleLeave}
      {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
    >
      {src && (
        <video
          ref={videoRef}
          playsInline
          loop
          muted
          src={inView ? src : undefined}
        />
      )}
      <Box
        data-fake-button=""
        css={{
          position: 'absolute',
          bottom: 16,
          left: 16,
          size: 32,
          br: 9999,
          background: 'rgba(0, 0, 0, 0.2)',
          backdropFilter: 'blur(16px)',
          center: true,
          opacity: 0,
          transition: 'opacity 200ms ease',
          svg: { transform: 'rotate(-45deg)', size: 16, color: 'white' },
        }}
      >
        <ArrowIcon />
      </Box>
    </a>
  )
}

// ─── Infinite carousel ───────────────────────────────────────────────────────
function Carousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef(0)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const totalWidth = STEP * ITEMS.length

    function onWheel(e: WheelEvent) {
      scrollRef.current += e.deltaX + e.deltaY
      if (scrollRef.current >= totalWidth) scrollRef.current = 0
      if (scrollRef.current < 0) scrollRef.current = totalWidth - 1
      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${-scrollRef.current}px, 0, 0) translateZ(0)`
      }
    }

    function onKey(e: KeyboardEvent) {
      const speed = e.shiftKey ? 500 : 250
      if (e.key === 'ArrowRight') scrollRef.current += speed
      if (e.key === 'ArrowLeft') scrollRef.current -= speed
      if (scrollRef.current >= totalWidth) scrollRef.current = 0
      if (scrollRef.current < 0) scrollRef.current = totalWidth - 1
      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${-scrollRef.current}px, 0, 0) translateZ(0)`
      }
    }

    window.addEventListener('wheel', onWheel)
    document.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('wheel', onWheel)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  // Sync opacity with scroll for light mode
  useEffect(() => {
    if (resolvedTheme === 'light' && trackRef.current) {
      trackRef.current.style.opacity = '0.5'
    }
  }, [resolvedTheme])

  const cards = ITEMS.map((item) => <VideoCard key={item.title} {...item} />)

  return (
    <motion.div
      style={{ height: 'fit-content', position: 'relative' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.15 }}
    >
      <FadePanel aria-hidden side="left" />
      <FadePanel aria-hidden side="right" />

      <div
        ref={trackRef}
        data-carousel=""
        style={{
          display: 'flex',
          gap: ITEM_GAP,
          alignItems: 'center',
          opacity: 0.5,
          transform: 'translate3d(0px, 0, 0) translateZ(0)',
          willChange: 'transform',
        }}
      >
        {cards}
        <div style={{ display: 'flex', gap: ITEM_GAP, alignItems: 'center' }}>
          {cards}
        </div>
      </div>
    </motion.div>
  )
}

// ─── BEN SVG ─────────────────────────────────────────────────────────────────
function BenLetters() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const scrollMV = useMotionValue(0)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    let scroll = 0
    function onWheel(e: WheelEvent) {
      scroll = clamp(scroll + e.deltaX + e.deltaY, -5000, 5000)
      scrollMV.set(scroll)
    }
    window.addEventListener('wheel', onWheel)
    return () => window.removeEventListener('wheel', onWheel)
  }, [scrollMV])

  const i = useTransform(scrollMV, (n) => (n < -250 ? -n - 250 : n))
  const blurStr = useTransform(i, (iv) => `blur(${clamp(0.2 * iv, 0, 250)}px)`)

  const nY = useTransform(i, (iv) => clamp(iv, 0, 150))
  const nScale = useTransform(i, (iv) => clamp(1 - 0.003 * iv, 0, 1))

  const eY = useTransform(i, (iv) => -clamp(iv / 4, 0, 150))
  const eScale = useTransform(i, (iv) => clamp(1 - 0.004 * iv, 0, 1))

  const bY = useTransform(i, (iv) => clamp(iv / 5, 0, 150))
  const bScale = useTransform(i, (iv) => clamp(1 - 0.005 * iv, 0, 1))

  const isDark = mounted && resolvedTheme === 'dark'

  return (
    <svg
      viewBox="0 0 672 509"
      aria-hidden
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        maxWidth: 672,
        height: 'auto',
        zIndex: 4,
        pointerEvents: 'none',
        mixBlendMode: isDark ? 'color-dodge' : 'multiply',
        color: isDark ? 'white' : 'var(--colors-gray9)',
      }}
    >
      {/* N */}
      <motion.path
        d="M606.722 391.901H528.179V195.543H508.543V391.901H430V117H606.722V391.901Z"
        fill="currentColor"
        style={{ y: nY, scale: nScale, filter: blurStr }}
      />
      {/* E */}
      <motion.path
        d="M435 117V195.571H318.333V215.214H435V293.786H318.333V313.429H435V392H225V117H435Z"
        fill="currentColor"
        style={{ y: eY, scale: eScale, filter: blurStr }}
      />
      {/* B */}
      <motion.path
        d="M116.667 195.571H93.3333V215.214H116.667V195.571ZM116.667 313.429V293.786H93.3333V313.429H116.667ZM0 117H210V225.036L163.333 264.321H210V392H0V117Z"
        fill="currentColor"
        style={{ y: bY, scale: bScale, filter: blurStr }}
      />
    </svg>
  )
}

// ─── Time / location ─────────────────────────────────────────────────────────
function Dot() {
  return <Box css={{ size: 2, br: 9999, bc: '$gray8', flexShrink: 0 }} />
}

function TimeLocation() {
  const headerRef = useRef<HTMLDivElement>(null)
  const timeRef = useRef<HTMLSpanElement>(null)
  const locationRef = useRef<HTMLSpanElement>(null)
  const lastVisitorRef = useRef<HTMLSpanElement>(null)
  const [mounted, setMounted] = useState(false)
  const [time, setTime] = useState('')
  const [visitor, setVisitor] = useState<{ city: string; country: string } | null>(null)
  const [countryName, setCountryName] = useState<string | null>(null)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    function tick() {
      return new Date().toLocaleTimeString('en-US', {
        timeZone: 'America/Los_Angeles',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
      })
    }
    setTime(tick())
    const id = setInterval(() => setTime(tick()), 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then((r) => r.json())
      .then((d) => {
        if (d.city && d.country_code) setVisitor({ city: d.city, country: d.country_code })
      })
      .catch(() => {})
  }, [])

  useEffect(() => {
    if (!visitor?.country) return
    const dn = new Intl.DisplayNames(['en'], { type: 'region' })
    setCountryName(dn.of(visitor.country) ?? visitor.country)
  }, [visitor])

  useEffect(() => {
    if (!mounted) return
    if (headerRef.current) headerRef.current.style.opacity = '1'
    if (timeRef.current) shuffleLetters(timeRef.current, { iterations: 10 })
    if (locationRef.current) shuffleLetters(locationRef.current, { iterations: 10 })
    if (lastVisitorRef.current) shuffleLetters(lastVisitorRef.current, { iterations: 10 })
  }, [mounted])

  // Keep a stable placeholder height before mount to avoid layout shift
  if (!mounted) return <div style={{ height: 28, marginBottom: 12 }} />

  const textStyle: React.CSSProperties = {
    fontSize: 14,
    color: 'var(--colors-gray10)',
    fontFamily: 'var(--fonts-body)',
  }

  return (
    <header
      ref={headerRef}
      style={{
        opacity: 0,
        marginBottom: 12,
        height: 28,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        transition: 'opacity 200ms ease',
      }}
    >
      <span ref={timeRef} style={{ ...textStyle, fontVariantNumeric: 'tabular-nums', minWidth: 90 }}>
        {time}
      </span>

      <Dot />

      <span ref={locationRef} style={textStyle}>
        Venice, California
      </span>

      {visitor && countryName && (
        <>
          <Dot />
          <span ref={lastVisitorRef} style={textStyle}>
            Last visit from{' '}
            <a
              href={`https://en.wikipedia.org/wiki/${visitor.city.replace(/ /g, '_')}`}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--colors-gray12)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '')}
              style={{ transition: 'color 150ms ease' }}
            >
              {visitor.city}, {countryName}
            </a>
          </span>
        </>
      )}
    </header>
  )
}

// ─── Hero text ───────────────────────────────────────────────────────────────
function HeroText() {
  return (
    <>
      <h1 className="vh">
        Sack Benjamin. Creating products that make people feel something. Data engineer
        unsatisfiably curious about novel interfaces. Currently at Disney. Previously at
        Progressive.
      </h1>
      <p
        aria-hidden
        style={{
          color: 'var(--colors-gray12)',
          fontSize: 25,
          lineHeight: '35px',
          letterSpacing: '-0.5px',
          textTransform: 'lowercase',
          position: 'relative',
          userSelect: 'none',
          fontFamily: 'var(--fonts-body)',
          marginBottom: '64px',
        }}
      >
        <span style={{ color: 'var(--colors-gray11)' }}>Bens Market.</span>{' '}
        Creating products that make people feel something. Data engineer — Currently at{' '}
        <a
          href="https://disneystreaming.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'inherit' }}
        >
          Disney
        </a>{' '}
        Previously at{' '}
        <a
          href="https://progressive.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'inherit' }}
        >
          Progressive
        </a>
        .
      </p>
    </>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    document.body.style['overscroll-behavior-x' as never] = 'none'
    return () => {
      document.body.style.overflow = ''
      document.body.style['overscroll-behavior-x' as never] = ''
    }
  }, [])

  useEffect(() => setMounted(true), [])

  return (
    <>
      <SEO
        title="Ben"
        description="Creating products that make people feel something."
      />

      <Box
        css={{
          maxWidth: 672,
          margin: '0 auto',
          mb: 64,
          position: 'relative',
          zIndex: 10,
          '@mobile': { mt: 0, mb: 32, mx: 'unset' },
        }}
      >
        <TimeLocation />
        <HeroText />
      </Box>

      {mounted && <Carousel />}

      <BenLetters />

      <DarkenOverlay aria-hidden />
    </>
  )
}
