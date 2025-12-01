import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import React, { useEffect, useRef, useState } from "react"

gsap.registerPlugin(ScrollTrigger)

const Brand = () => {
  const lineRef = useRef<HTMLSpanElement | null>(null)
  const imgRef = useRef<HTMLSpanElement | null>(null)
  const boxRef = useRef<HTMLDivElement | null>(null)
  const rightTxt1Ref = useRef<HTMLDivElement | null>(null)
  const rightTxt2Ref = useRef<HTMLDivElement | null>(null)

  const minH = 200
  const maxH = 550

  const minScale = 1.1
  const maxScale = 1.8

  const updateOnScroll = (self: ScrollTrigger) => {
    const p = Math.max(0, Math.min(1, self.progress as number))
    const yMove = minH + (maxH - minH) * p
    const scale = maxScale - (maxScale - minScale) * p
    if (lineRef.current) {
      lineRef.current.style.height = `${yMove}px`
    }
    if (boxRef.current) {
      boxRef.current.style.top = `${yMove + 30}px`
    }
    if (imgRef.current) {
      imgRef.current.style.transform = `translate(0, -${yMove * 0.02}px) scale(${scale})`
    }
  }

  useGSAP(() => {
    const brandTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".brand",
        start: "top 40%"
      }
    })

    brandTl.to(".brand .line1", { width: "100%", duration: 1 }, 0)
    brandTl.to(".brand .sec_title", { x: 0, opacity: 1, duration: 1 }, 0.3)
    brandTl.to(".brand .t1", { y: 0, duration: 0.4, ease: "none" })
    brandTl.to(".brand .t2", { y: 0, duration: 0.4, ease: "none" })
    brandTl.to(".brand .t3", { x: 0, opacity: 1, duration: 0.4, ease: "none" })
    brandTl.to(".brand .right_txt", { x: 0, opacity: 1, duration: 0.4 })

    new ScrollTrigger({
      trigger: ".brand",
      start: "top 40%",
      onUpdate: updateOnScroll
    })
  })

  useEffect(() => {
    function brand_active() {
      if (window.scrollY <= 2200) {
        rightTxt1Ref.current?.classList.add("on")
      } else {
        rightTxt1Ref.current?.classList.remove("on")
      }

      if (window.scrollY > 2200 && window.scrollY <= 2500) {
        rightTxt2Ref.current?.classList.add("on")
      } else {
        rightTxt2Ref.current?.classList.remove("on")
      }
    }

    if (window) {
      window.addEventListener("scroll", brand_active)
    }
  }, [])

  return (
    <section className="brand relative">
      <div className="trigger trigger1 absolute size-0 -top-40"></div>
      <div className="trigger trigger2 absolute left-0 top-160 size-0"></div>
      <div className="content pl-50">
        <div className="relative">
          <span className="sec_title absolute top-4 left-0 text-xl -translate-x-12 opacity-0">
            Brand
          </span>
          <span className="line1 absolute top-0 left-0 h-[1px] w-0 bg-black"></span>
          <span
            ref={lineRef}
            className="line2 absolute top-0 left-40 h-0 w-[1px] bg-black duration-1000"
          ></span>
          <div
            ref={boxRef}
            className="txt z-20 absolute left-0 top-50 w-full overflow-x-hidden flex gap-100 duration-1000 will-change-scroll"
          >
            <ul className="left_txt">
              <li className="overflow-hidden">
                <span className="block ul_txt t1 text-[80px] indent-25 translate-y-full">
                  THE ONLY ONE,
                </span>
              </li>
              <li className="overflow-hidden">
                <span className="block ul_txt t2 text-[80px] translate-y-full">POETIC CLASS</span>
              </li>
              <li className="ul_txt t3 text-[80px] text-[#ce6455] -translate-x-4 opacity-0">
                THE BLANZ
              </li>
            </ul>
            <div className="right_txt flex-auto opacity-0 translate-x-4 relative text-[#555]">
              <div className="t1 absolute min-w-1" ref={rightTxt1Ref}>
                {[
                  "가장 빛나는 삶의 존재감으로 1",
                  "더블란츠는 세상에 없던 최상의 주거 문화를 창조하고 1",
                  "자연과 함께하는 최고의 공간과 지금껏 경험한 적 없던 1",
                  "유일한 삶의 유려하고 독창적인 가장 시적인 순간을 선사합니다"
                ].map((txt, index) => (
                  <p key={index} className="overflow-hidden h-7">
                    <span className="block translate-y-full duration-500">{txt}</span>
                  </p>
                ))}
              </div>
              <div className="t2 absolute min-w-1" ref={rightTxt2Ref}>
                {[
                  "가장 빛나는 삶의 존재감으로",
                  "더블란츠는 세상에 없던 최상의 주거 문화를 창조하고",
                  "자연과 함께하는 최고의 공간과 지금껏 경험한 적 없던",
                  "유일한 삶의 유려하고 독창적인 가장 시적인 순간을 선사합니다"
                ].map((txt, index) => (
                  <p key={index} className="overflow-hidden h-7">
                    <span className="block translate-y-full duration-500">{txt}</span>
                  </p>
                ))}
              </div>
              <div className="t3 absolute min-w-1">
                {new Array(4).fill(0).map((_, index) => (
                  <p key={index} className="h-7"></p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="size-full  pt-[700px] pl-40">
          <div className="img overflow-hidden w-full h-120">
            <span
              ref={imgRef}
              className="block size-full bg-[url('/brand-bg.jpg')] bg-cover"
            ></span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Brand
