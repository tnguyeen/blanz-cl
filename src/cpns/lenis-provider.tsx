// src/app/providers/lenis-provider.tsx
"use client"

import { LenisRef, ReactLenis } from "lenis/react"
import { FC, useEffect, useRef } from "react"
import gsap from "gsap"

type LenisScrollProviderProps = {
  children: React.ReactNode
}

const LenisScrollProvider: FC<LenisScrollProviderProps> = ({ children }) => {
  const lenisRef = useRef<LenisRef>(null)

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }
    gsap.ticker.add(update)
    return () => gsap.ticker.remove(update)
  }, [])

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        duration: 1
      }}
    >
      {children}
    </ReactLenis>
  )
}

export default LenisScrollProvider
