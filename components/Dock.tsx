import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { motion, useSpring, useTransform, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import useSound from 'use-sound'
import { CSS } from '@stitches/react'
import { css, keyframes, styled, config } from '../stitches.config'
import { useSoundEnabled } from '../lib/useSound'
import Box from './Box'

// ─── Mouse position context ────────────────────────────────────────────────
const MouseContext = createContext<number | null>(null)

// ─── Animation constants ───────────────────────────────────────────────────
const springConfig = { mass: 3, damping: 35, stiffness: 250 }
const itemSpring = { damping: 40, stiffness: 500, mass: 1 }
const jumpSpring = { damping: 19, stiffness: 250 }

const INPUT_RANGE = [-240, -192, -120, 0, 120, 192, 240]
const OUTPUT_SIZE = [40, 44, 56.56, 80, 56.56, 44, 40]

function interpolate(input: number[], output: number[], value: number) {
  const clampedValue = Math.max(input[0], Math.min(input[input.length - 1], value))
  for (let i = 0; i < input.length - 1; i++) {
    if (clampedValue >= input[i] && clampedValue <= input[i + 1]) {
      const t = (clampedValue - input[i]) / (input[i + 1] - input[i])
      return output[i] + t * (output[i + 1] - output[i])
    }
  }
  return output[0]
}

// ─── Keyframes ─────────────────────────────────────────────────────────────
const dockEntrance = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -50%) translateY(80px)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) translateY(0)' },
})

const wiggle = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '25%': { transform: 'rotate(15deg)' },
  '50%': { transform: 'rotate(-13deg)' },
  '75%': { transform: 'rotate(12deg)' },
  '100%': { transform: 'rotate(0deg)' },
})

// ─── Dock button style ──────────────────────────────────────────────────────
const dockButtonCss = css({
  '--gradient-color-1': '$colors$gray2',
  '--gradient-color-2': '$colors$gray5',
  border: 0,
  padding: 0,
  margin: 0,
  display: 'flex',
  ai: 'center',
  jc: 'center',
  borderRadius: 9999,
  background: '$gray3',
  position: 'relative',
  color: '$gray10',
  cursor: 'pointer',
  flexShrink: 0,
  '-webkit-tap-highlight-color': 'transparent',
  backgroundImage:
    'linear-gradient(45deg, var(--gradient-color-1), var(--gradient-color-2), var(--gradient-color-1), var(--gradient-color-2))',
  backgroundSize: '200% 100%',
  '.dark &': {
    '--gradient-color-1': '$colors$gray2',
    '--gradient-color-2': '$colors$gray3',
  },
  'svg, img': {
    size: '50%',
    transformOrigin: 'unset !important',
    pointerEvents: 'none',
  },
  focus: true,
})

// ─── Separator ─────────────────────────────────────────────────────────────
function Separator() {
  return (
    <Box
      as="hr"
      css={{
        opacity: 1,
        height: 36,
        width: 1,
        background: '$grayA6',
        border: 0,
        flexShrink: 0,
        WebkitMaskImage:
          'linear-gradient(0deg, transparent, #fff 16px, #fff calc(100% - 16px), transparent)',
      }}
    />
  )
}

// ─── Dock item ─────────────────────────────────────────────────────────────
interface DockItemProps {
  href?: string
  label: string
  onClick?: () => void
  children: React.ReactNode
  css?: CSS<typeof config>
}

function DockItem({ href, label, onClick, children, css: cssProp }: DockItemProps) {
  const mouseX = useContext(MouseContext)
  const ref = useRef<HTMLButtonElement>(null)
  const router = useRouter()
  const [, firstSegment] = router.pathname.split('/')

  const size = useSpring(40, itemSpring)
  const y = useSpring(0, jumpSpring)

  async function handleClick() {
    if (href) {
      if (href.startsWith('/')) {
        router.push(href, undefined, { scroll: false })
      } else {
        window.open(href)
      }
    }
    onClick?.()
    y.set(window.innerWidth < 700 ? -20 : -40)
    setTimeout(() => y.set(0), 300)
  }

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (mouseX !== null) {
      const rect = el.getBoundingClientRect()
      const center = rect.left + rect.width / 2
      const distance = mouseX - center
      const newSize = interpolate(INPUT_RANGE, OUTPUT_SIZE, distance)
      size.set(newSize)
    } else {
      size.set(40)
    }
  }, [mouseX, size])

  const isActive =
    href?.startsWith('/') && `/${firstSegment}` === href

  return (
    <motion.div style={{ position: 'relative' }} title={label}>
      <motion.button
        ref={ref}
        aria-label={label}
        className={dockButtonCss({ css: cssProp })}
        style={{ width: size, height: size, top: y, position: 'relative' }}
        onMouseDown={() => y.set(8)}
        onMouseLeave={() => y.set(0)}
        onClick={handleClick}
      >
        {/* Top shine in dark mode */}
        <Box
          aria-hidden
          css={{
            '.dark &': {
              background:
                'linear-gradient(90deg, rgba(0,0,0,0), $colors$gray4 20%, $colors$gray7 67.19%, rgba(0,0,0,0))',
              height: '1px',
              position: 'absolute',
              top: -1,
              size: '100%',
              br: 9999,
              zIndex: -1,
            },
          }}
        />
        {children}
        <AnimatePresence>
          {isActive && (
            <motion.div
              style={{
                background: 'var(--colors-gray7)',
                position: 'absolute',
                width: 4,
                height: 4,
                borderRadius: 9999,
                bottom: -6,
                zIndex: 1,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.2 } }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </AnimatePresence>
      </motion.button>
    </motion.div>
  )
}

// ─── Animated theme toggle (sun/moon) ──────────────────────────────────────
function ThemeToggle() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const hasAnimated = useRef(false)
  const [soundEnabled] = useSoundEnabled()
  const [playPoof] = useSound('/sounds/poof.mp3', { soundEnabled })

  useEffect(() => setMounted(true), [])

  const isDark = resolvedTheme === 'dark'
  const targets = {
    dark: { rotate: 40, r: 9, cx: 50, cy: 23, opacity: 0 },
    light: { rotate: 90, r: 5, cx: 100, cy: 0, opacity: 1 },
  }
  const current = isDark ? targets.dark : targets.light

  const rotate = useSpring(current.rotate, springConfig)
  const r = useSpring(current.r, springConfig)
  const cx = useSpring(current.cx, springConfig)
  const cy = useSpring(current.cy, springConfig)
  const opacity = useSpring(current.opacity, springConfig)
  const cxPct = useTransform(cx, (v) => `${v}%`)
  const cyPct = useTransform(cy, (v) => `${v}%`)

  useEffect(() => {
    rotate.set(current.rotate)
    r.set(current.r)
    cx.set(current.cx)
    cy.set(current.cy)
    opacity.set(current.opacity)
    if (hasAnimated.current) playPoof()
    hasAnimated.current = true
  }, [resolvedTheme]) // eslint-disable-line react-hooks/exhaustive-deps

  if (!mounted) return null

  return (
    <motion.svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      color="var(--colors-gray10)"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="currentColor"
      style={{ rotate }}
    >
      <mask id="moonMask">
        <rect x="0" y="0" width="100%" height="100%" fill="white" />
        <motion.circle style={{ cx: cxPct, cy: cyPct }} r="9" fill="black" />
      </mask>
      <motion.circle
        cx="12"
        cy="12"
        fill="var(--colors-gray10)"
        style={{ r }}
        mask="url(#moonMask)"
      />
      <motion.g stroke="currentColor" style={{ opacity }}>
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </motion.g>
    </motion.svg>
  )
}

// ─── Sound toggle ───────────────────────────────────────────────────────────
const speakerWiggle = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '25%': { transform: 'rotate(15deg)' },
  '50%': { transform: 'rotate(-13deg)' },
  '75%': { transform: 'rotate(12deg)' },
  '100%': { transform: 'rotate(0deg)' },
})

function SoundToggle() {
  const [mounted, setMounted] = useState(false)
  const [soundEnabled, toggleSound] = useSoundEnabled()
  const [hasToggled, setHasToggled] = useState(false)
  const [playEnable] = useSound('/sounds/enable-sound.mp3', { soundEnabled })
  const [playDisable] = useSound('/sounds/disable-sound.mp3', { soundEnabled })

  useEffect(() => setMounted(true), [])

  if (!mounted) return <DockItem label=""><div /></DockItem>

  return (
    <DockItem
      label="Toggle sound"
      onClick={() => {
        setHasToggled(true)
        if (soundEnabled) playDisable()
        else playEnable()
        toggleSound()
      }}
      css={{
        '@mobile': { display: 'none' },
        '@touch': { display: 'none' },
      }}
    >
      <svg width="24" height="24" viewBox="0 0 18 18" fill="none">
        {/* Speaker body */}
        <path
          d="M8.25 3.75L4.5 6.75H1.5V11.25H4.5L8.25 14.25V3.75Z"
          fill="currentColor"
          style={{
            animation: soundEnabled && hasToggled ? `${speakerWiggle} 350ms ease` : 'none',
            transformOrigin: '30% center',
          }}
        />
        {/* Outer arc */}
        <path
          d="M14.3025 3.69751C15.7086 5.10397 16.4984 7.01128 16.4984 9.00001C16.4984 10.9887 15.7086 12.8961 14.3025 14.3025"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{
            transition: 'opacity 200ms ease',
            transitionDelay: soundEnabled ? '150ms' : '0ms',
            opacity: soundEnabled ? 1 : 0,
          }}
        />
        {/* Inner arc */}
        <path
          d="M11.655 6.34501C12.358 7.04824 12.753 8.00189 12.753 8.99626C12.753 9.99063 12.358 10.9443 11.655 11.6475"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{
            transition: 'opacity 200ms ease',
            transitionDelay: soundEnabled ? '0ms' : '150ms',
            opacity: soundEnabled ? 1 : 0,
          }}
        />
      </svg>
    </DockItem>
  )
}

// ─── Dock icons ─────────────────────────────────────────────────────────────
function HomeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        opacity="0.25"
        d="M20 18.8V6.63998L13.6514 2.81501L13.6514 2.815C13.0511 2.45333 12.751 2.2725 12.4304 2.20186C12.1469 2.13938 11.8531 2.13938 11.5696 2.20186C11.249 2.2725 10.9489 2.45334 10.3486 2.81501L4 6.64001V18.8C4 19.9201 4 20.4802 4.21799 20.908C4.40973 21.2843 4.71569 21.5903 5.09202 21.782C5.51984 22 6.0799 22 7.2 22H16.8C17.9201 22 18.4802 22 18.908 21.782C19.2843 21.5903 19.5903 21.2843 19.782 20.908C20 20.4802 20 19.9201 20 18.8Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.14251 9.5145C1.42665 9.98808 2.04091 10.1416 2.51449 9.85749L12 4.16619L21.4855 9.85749C21.9591 10.1416 22.5733 9.98808 22.8575 9.5145C23.1416 9.04092 22.9881 8.42666 22.5145 8.14251L13.029 2.45121C12.3956 2.07119 11.6044 2.07119 10.971 2.45121L1.4855 8.14251C1.01192 8.42666 0.858357 9.04092 1.14251 9.5145Z"
        fill="currentColor"
      />
      <path
        d="M9 16C9 14.3431 10.3431 13 12 13C13.6569 13 15 14.3431 15 16V22H9V16Z"
        fill="currentColor"
      />
    </svg>
  )
}

function WorkIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M8 20C8 19.4477 8.44772 19 9 19H15C15.5523 19 16 19.4477 16 20V21C16 22.6569 14.6569 24 13 24H11C9.34315 24 8 22.6569 8 21V20Z"
        fill="currentColor"
      />
      <path
        opacity="0.25"
        d="M20 8C20 10.5264 18.8289 12.7793 17 14.2454V15C17 16.1046 16.1046 17 15 17C10.8358 17 15.5135 17 9 17C7.89543 17 7 16.1046 7 15V14.2454C5.17107 12.7793 4 10.5264 4 8C4 3.58172 7.58172 0 12 0C16.4183 0 20 3.58172 20 8Z"
        fill="currentColor"
      />
      <path
        d="M10.7071 8.29289C10.3166 7.90237 9.68342 7.90237 9.29289 8.29289C8.90237 8.68342 8.90237 9.31658 9.29289 9.70711L11 11.4142V17H13V11.4142L14.7071 9.70711C15.0976 9.31658 15.0976 8.68342 14.7071 8.29289C14.3166 7.90237 13.6834 7.90237 13.2929 8.29289L12 9.58579L10.7071 8.29289Z"
        fill="currentColor"
      />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        opacity="0.25"
        d="M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.23177 7.35981C5.58534 6.93553 6.2159 6.87821 6.64018 7.23177L11.3598 11.1648C11.7307 11.4738 12.2693 11.4738 12.6402 11.1648L17.3598 7.23177C17.7841 6.87821 18.4147 6.93553 18.7682 7.35981C19.1218 7.78409 19.0645 8.41465 18.6402 8.76822L13.9205 12.7012C12.808 13.6284 11.192 13.6284 10.0794 12.7012L5.35981 8.76822C4.93553 8.41465 4.87821 7.78409 5.23177 7.35981Z"
        fill="currentColor"
      />
    </svg>
  )
}

// ─── Main Dock ──────────────────────────────────────────────────────────────
export default function Dock() {
  const [mouseX, setMouseX] = useState<number | null>(null)
  const { resolvedTheme, setTheme } = useTheme()
  const router = useRouter()
  const [soundEnabled] = useSoundEnabled()
  const [playBlow] = useSound('/sounds/blow.mp3', { soundEnabled })
  const isMounted = useRef(false)

  useEffect(() => {
    if (isMounted.current) playBlow()
    isMounted.current = true
  }, [router.route]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box
      id="footer"
      as="footer"
      css={{
        display: 'flex',
        ai: 'flex-end',
        width: 'auto',
        height: 58,
        px: 8,
        position: 'fixed',
        background: 'rgba(255, 255, 255, 0.7)',
        bs: '$large',
        backdropFilter: 'blur(100px) saturate(400%) brightness(100%)',
        border: '1px solid $grayA4',
        bottom: -8,
        left: '50%',
        borderRadius: 9999,
        zIndex: 10,
        transform: 'translate(-50%, -50%) translateY(80px)',
        animation: `${dockEntrance} 500ms ease forwards 200ms`,
        '.dark &': { background: 'rgba(22, 22, 22, 0.8)' },
        '@media (max-width: 374px)': {
          width: 'calc(100% - 69px)',
          top: 'unset',
          bottom: 0,
        },
      }}
      style={
        router.pathname === '/photos'
          ? { backdropFilter: 'blur(100px) saturate(400%) brightness(80%)' }
          : undefined
      }
      onPointerMove={(e: React.PointerEvent) => {
        if (e.pointerType === 'mouse') setMouseX(e.clientX)
      }}
      onPointerLeave={() => setMouseX(null)}
    >
      {/* Top shine line in dark mode */}
      <Box
        aria-hidden
        css={{
          '.dark &': {
            background:
              'linear-gradient(90deg, rgba(0,0,0,0), $colors$gray6 20%, $colors$gray10 67.19%, rgba(0,0,0,0))',
            opacity: 0.6,
            height: '1px',
            position: 'absolute',
            top: -1,
            width: '95%',
            zIndex: -1,
          },
        }}
      />

      <Box
        css={{
          display: 'flex',
          ai: 'flex-end',
          gap: '8px',
          width: '100%',
          py: 8,
          '@mobile': {
            height: '72px',
            overflowX: 'auto',
            overflowY: 'hidden',
          },
        }}
      >
        <MouseContext.Provider value={mouseX}>
          <DockItem href="/" label="Home">
            <HomeIcon />
          </DockItem>

          <DockItem href="/projects" label="Work">
            <WorkIcon />
          </DockItem>

          <Separator />

          <DockItem href="https://github.com/ben-sack" label="GitHub">
            <GitHubIcon />
          </DockItem>

          <DockItem href="mailto:yo@bens.market" label="Mail">
            <MailIcon />
          </DockItem>

          <Separator />

          <DockItem
            label="Toggle theme"
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          >
            <ThemeToggle />
          </DockItem>

          <SoundToggle />
        </MouseContext.Provider>
      </Box>
    </Box>
  )
}
