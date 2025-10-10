import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import React, { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

const View = () => {
  const bgScrollRef = useRef<HTMLSpanElement | null>(null)
  useGSAP(() => {
    const bgScroll = bgScrollRef.current

    const imgTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".view",
        start: "top center"
      }
    })
    imgTl.to(".view .bg", { opacity: 1, scale: 1, duration: 0.8 })
    imgTl.to(".view .txt strong", { opacity: 1, x: 0, duration: 0.8 })
    imgTl.to(".view .txt .t2 span", { y: 0 })
    imgTl.to(".view .txt .t3 span", { y: 0 })
    imgTl.to(".view .line_txt", { width: 484, delay: -0.5 })
    imgTl.to(".view .line_txt em", { width: 135 })
    imgTl.to(".view .line_txt span", { opacity: 1, x: 0 })

    gsap.to(".brand .line2", {
      duration: 1,
      scrollTrigger: {
        trigger: ".view .box2",
        start: "top bottom",
        onUpdate: (self) => {
          if (bgScroll) {
            bgScroll.style.backgroundPositionY = `${self.progress * 80}%`
          }
        }
      }
    })
  })

  return (
    <div className="view pt-50 pb-75">
      <div className="content flex items-end gap-[110px]">
        <div className="img w-[960px] relative">
          <div className="box box1 overflow-hidden w-full h-[366px]">
            <span className="bg block size-full bg-[url('/brand-area4-1.jpg?ver=5')] opacity-0 scale-150"></span>
          </div>
          <div className="box box2 overflow-hidden w-full h-[245px] mt-5">
            <span
              ref={bgScrollRef}
              className="bg block size-full bg-[url('/brand-area4-2.jpg')] opacity-0 scale-150"
            ></span>
          </div>
          <div className="line_txt absolute top-12 left-160 w-0 bg-[#ce6455] overflow-hidden origin-right">
            <div className="flex items-end gap-2 py-2.5 px-3.5">
              <em className="w-0 h-[1px] bg-white" />
              <span className="text-white block -translate-x-5 opacity-0">
                PERMANENT&nbsp;&nbsp;PANORAMIC&nbsp;&nbsp;RIVER&nbsp;&nbsp;VIEW
              </span>
            </div>
          </div>
        </div>
        <div className="txt pb-10">
          <strong className="block mb-15 text-[32px] leading-12.5 font-normal translate-x-10 opacity-0">
            한강을 따라 형성되는
            <br />
            초고가 리치벨트의 새로운 중심
          </strong>
          <div className="t2 text-[#555] leading-8 mb-5">
            {[
              "한강을 따라 강남, 청담에서 한남/용산, 마포를 중심으로",
              "이동하는 초고가 리치벨트 Stream의 새로운 중심",
              "글로벌 여의도의 가치를 품고, 한강 영구조망과 함께",
              "자연 속에서 가장 극적이고 가장 시적인 삶을 누리는"
            ].map((txt, index) => (
              <p key={index} className="overflow-hidden">
                <span className="block translate-y-full">{txt}</span>
              </p>
            ))}
          </div>
          <div className="t3 text-lg">
            <p className="overflow-hidden">
              <span className="block translate-y-full">
                오직 13세대만을 위한 유려하고 독창적인 아트워크를 빛내다
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default View
