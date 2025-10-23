import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/SplitText"
import { useEffect, useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(SplitText, ScrollTrigger)

const TypoText = () => {
  const textRef = useRef(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const split = new SplitText(textRef.current, { type: "chars", tag: "span" })
    const chars = split.chars

    chars.forEach((char) => {
      char.setAttribute("style", `transform: translateY(100%);`)
    })

    new ScrollTrigger({
      trigger: textRef.current,
      start: "top 80%",
      onUpdate: (self) => {
        chars.forEach((char, index) => {
          const progress = self.progress
          const delay = index * 0.03
          const charProgress = Math.min(Math.max(progress - delay, 0), 1) * 2

          char.setAttribute(
            "style",
            `transform: translateY(${Math.max((1 - charProgress) * 80, 0)}%);`
          )

          wrapperRef.current?.setAttribute(
            "style",
            `top: ${-80 - progress * 100}px; scale: ${1 - progress * 0.14};`
          )
        })
      }
    })
  }, [])

  return (
    <div
      ref={wrapperRef}
      className="absolute -top-20 left-1/2 -translate-x-1/2 w-4/5 h-140 flex justify-center overflow-hidden"
    >
      <p>
        <span ref={textRef} className="text-[340px] text-[#b9b9b9] select-none flex">
          BLANZ
        </span>
      </p>
    </div>
  )
}

export default TypoText
