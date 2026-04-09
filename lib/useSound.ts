/**
 * Shared sound-enabled state persisted to localStorage.
 * All components read/write through this hook so the toggle
 * actually affects every sound in the app.
 */
import { useCallback, useEffect, useRef, useState } from 'react'

const KEY = '__sound_enabled__'

function readStorage(): boolean {
  if (typeof window === 'undefined') return true
  try {
    const raw = localStorage.getItem(KEY)
    return raw === null ? true : JSON.parse(raw)
  } catch {
    return true
  }
}

// Shared subscribers so all hook instances stay in sync within one tab
const subscribers = new Set<(v: boolean) => void>()

export function useSoundEnabled(): [boolean, () => void] {
  const [enabled, setEnabled] = useState<boolean>(true)
  const mounted = useRef(false)

  // Read real value after hydration
  useEffect(() => {
    setEnabled(readStorage())
    mounted.current = true

    const onStorage = (e: StorageEvent) => {
      if (e.key === KEY) setEnabled(e.newValue ? JSON.parse(e.newValue) : true)
    }
    window.addEventListener('storage', onStorage)

    const sub = (v: boolean) => setEnabled(v)
    subscribers.add(sub)

    return () => {
      window.removeEventListener('storage', onStorage)
      subscribers.delete(sub)
    }
  }, [])

  const toggle = useCallback(() => {
    setEnabled((prev) => {
      const next = !prev
      try {
        localStorage.setItem(KEY, JSON.stringify(next))
      } catch {}
      subscribers.forEach((s) => s !== setEnabled && s(next))
      return next
    })
  }, [])

  return [enabled, toggle]
}
