import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Image, { StaticImageData } from "next/image"
import React, { useRef } from "react"

export interface CardProps {
  id?: number
  mainTypo: string
  subText: string
  bg: StaticImageData
}

const Card = ({ mainTypo, subText, bg, id }: CardProps) => {
  const dimmedRef = useRef<HTMLDivElement | null>(null)
  const fisrtCharRef = useRef<HTMLSpanElement | null>(null)
  const restCharRef = useRef<HTMLSpanElement | null>(null)
  const subTextRef = useRef<HTMLSpanElement | null>(null)

  const tl = useRef<GSAPTimeline>(gsap.timeline({ paused: true }))

  const handleEnter = () => {
    gsap.to(fisrtCharRef.current, { color: "#ce6455", duration: 0.2 })
    tl.current.timeScale(1)
    tl.current.play()
  }

  const handleLeave = () => {
    gsap.to(fisrtCharRef.current, { color: "#fff", duration: 0.2 })
    tl.current.timeScale(1.4)
    tl.current.reverse()
  }

  useGSAP(() => {
    gsap.to(fisrtCharRef.current, {
      opacity: 1,
      delay: 0.2,
      scrollTrigger: {
        trigger: ".typo .trigger1",
        start: "top 25%"
      }
    })
    tl.current.to(dimmedRef.current, { opacity: 0.8, duration: 0.2 })
    tl.current.to(fisrtCharRef.current, { scale: 1, duration: 0.3 })
    tl.current.to(restCharRef.current, { width: "auto", opacity: 1, duration: 0.6 })
    tl.current.to(subTextRef.current, { y: 0, duration: 0.3 })
  })
  return (
    <>
      <Image
        src={bg}
        alt={mainTypo}
        className="bg_img z-10 absolute top-0 left-0 size-full object-cover"
      />
      <div
        ref={dimmedRef}
        className={`absolute z-20 top-0 left-0 size-full bg-black opacity-0`}
      ></div>
      <div
        className="relative card_txt z-30 size-full text-white"
        id="hover_trigger"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <p className="absolute w-full flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl">
          <span ref={fisrtCharRef} className="opacity-0 inline-block scale-700">
            {mainTypo[0]}
          </span>
          <span
            ref={restCharRef}
            className="inline-block w-0 opacity-0 overflow-hidden text-nowrap"
          >
            {mainTypo.slice(1)}
          </span>
        </p>
        <p
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden"
          style={{ top: "calc(50% + 32px)" }}
        >
          <span ref={subTextRef} className="block translate-y-full text-sm">
            {subText}
          </span>
        </p>
      </div>
    </>
  )
}

export default Card
