// useScrollDirection.tsx (TypeScript)
import { useEffect, useRef, useState } from "react"

export type ScrollDirection = "up" | "down" | "none"

export function useScrollDirection({
  threshold = 5, // px change before we consider it meaningful
  initial = "none", // initial state
  element = null // pass a scroll container (null => window)
}: {
  threshold?: number
  initial?: ScrollDirection
  element?: null | HTMLElement
} = {}) {
  const [direction, setDirection] = useState<ScrollDirection>(initial)
  const prevY = useRef<number>(
    element ? element.scrollTop : typeof window !== "undefined" ? window.scrollY : 0
  )
  const ticking = useRef(false)

  useEffect(() => {
    const target = element ?? window

    function update() {
      const currentY = element ? (element as HTMLElement).scrollTop : window.scrollY
      const delta = currentY - prevY.current
      if (Math.abs(delta) > threshold) {
        setDirection(delta > 0 ? "down" : "up")
        prevY.current = currentY
      }
      ticking.current = false
    }

    function onScroll() {
      if (!ticking.current) {
        ticking.current = true
        requestAnimationFrame(update)
      }
    }

    target.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      target.removeEventListener("scroll", onScroll)
    }
  }, [threshold, element])

  return direction
}
