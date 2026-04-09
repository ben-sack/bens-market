import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import Box from '../components/Box'
import Text from '../components/Text'
import { css, keyframes } from '../stitches.config'
import { projects } from '../lib/data'

// ─── Letter-shuffle library (inline minimal impl) ──────────────────────────
function shuffleLetters(el: HTMLElement, options: { iterations?: number } = {}) {
  const { iterations = 8, fps = 30 } = { fps: 30, ...options }
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
  const original = el.textContent ?? ''
  const letters = original.split('')
  const nonSpaceIndices = letters.reduce<number[]>((acc, c, i) => {
    if (!/\s/.test(c)) acc.push(i)
    return acc
  }, [])

  let timer: ReturnType<typeof setTimeout>
  function step(round: number) {
    if (round > nonSpaceIndices.length) {
      el.textContent = original
      return
    }
    const current = [...letters]
    for (let i = Math.max(round, 0); i < nonSpaceIndices.length; i++) {
      if (i < round + iterations) {
        current[nonSpaceIndices[i]] = chars[Math.floor(Math.random() * chars.length)]
      } else {
        current[nonSpaceIndices[i]] = ''
      }
    }
    el.textContent = current.join('')
    timer = setTimeout(() => step(round + 1), 1000 / fps)
  }
  step(-iterations)
  return () => clearTimeout(timer)
}

// ─── Keyframes ─────────────────────────────────────────────────────────────
const underlineDraw = keyframes({
  '0%': { background: 'transparent' },
  '50%': { background: '$gray10' },
  '100%': { width: '100%', background: '$gray5' },
})

const underlineFlash = keyframes({
  '0%': { background: 'transparent' },
  '50%': { background: '$gray10' },
  '100%': { width: '100%', background: 'transparent' },
})

// ─── Project row style ─────────────────────────────────────────────────────
const projectRowCss = css({
  display: 'flex',
  ai: 'center',
  gap: 12,
  width: 'calc(100% + 32px)',
  position: 'relative',
  overflow: 'hidden',
  padding: '12px',
  margin: -12,
  br: 12,
  outline: 0,
  textDecoration: 'none',
  color: 'inherit',
  '&:hover, &:focus': { background: '$gray3' },
})

// ─── Project component ─────────────────────────────────────────────────────
interface ProjectRowProps {
  name: string
  description: string
  href: string
  year: number
  index: number
}

function ProjectRow({ name, description, href, year, index }: ProjectRowProps) {
  const nameRef = useRef<HTMLSpanElement>(null)
  const descRef = useRef<HTMLSpanElement>(null)
  const yearRef = useRef<HTMLSpanElement>(null)
  const delay = index * 0.1
  const animDelay = `${index * 0.05}s`
  const isInternal = href.startsWith('/')

  useEffect(() => {
    if (nameRef.current) shuffleLetters(nameRef.current, { iterations: 10 })
    if (descRef.current) shuffleLetters(descRef.current, { iterations: 10 })
    if (yearRef.current) shuffleLetters(yearRef.current, { iterations: 10 })
  }, [])

  return (
    <motion.a
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      href={href}
      target={isInternal ? undefined : '_blank'}
      rel={isInternal ? undefined : 'noopener noreferrer'}
      className={projectRowCss()}
    >
      <Text
        ref={nameRef}
        as="span"
        color="gray12"
        weight="500"
        css={{ d: 'inline-block' }}
      >
        {name}
      </Text>

      <Text
        ref={descRef}
        as="span"
        color="gray11"
        css={{
          ml: -8,
          d: 'inline-block',
          '@mobile': { d: 'none' },
        }}
      >
        {description}
      </Text>

      {/* Underline line */}
      <Box
        as={motion.div}
        css={{
          flex: 1,
          position: 'relative',
          '&:after': {
            content: '',
            position: 'absolute',
            bottom: -1,
            height: 1,
            width: '0',
            animation: `${underlineDraw} 1s ease forwards`,
            animationDelay: animDelay,
          },
          '&:before': {
            content: '',
            position: 'absolute',
            bottom: -1,
            height: 1,
            width: '0',
            zIndex: 3,
            animation: `${underlineFlash} 1s ease forwards`,
            animationDelay: `${delay}s`,
          },
        }}
      />

      <Text ref={yearRef} as="span" css={{ color: '$gray9' }}>
        {String(year)}
      </Text>
    </motion.a>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────
export default function Projects() {
  return (
    <>
      <SEO title="Projects" />
      <Box
        css={{
          mt: '$4',
          display: 'flex',
          flexDirection: 'column',
          gap: 28,
        }}
      >
        {projects.map((project, i) => (
          <ProjectRow key={project.href} {...project} index={i} />
        ))}
      </Box>
    </>
  )
}
