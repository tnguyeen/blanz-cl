import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import React, { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

const Poetic = () => {
  const titleRef = useRef<HTMLDivElement | null>(null)
  const textRef = useRef<HTMLDivElement | null>(null)
  const imgRef = useRef<HTMLDivElement | null>(null)

  const minYText = 0
  const maxYText = 300

  useGSAP(() => {
    const [title, text, img] = [titleRef.current, textRef.current, imgRef.current]

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".poetic",
        start: "top center"
      }
    })

    const contentTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".poetic",
        start: "top center"
      }
    })

    const mainTitTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".poetic .txt",
        start: "top 25%"
      }
    })

    titleTl.to(".poetic .line1", { width: "100%" })
    titleTl.to(".poetic .sec_tit", { x: 0, opacity: 1 })
    titleTl.to(".poetic .line2", { height: 120 })

    contentTl.to(".poetic .img .bg", { width: "100%" })
    contentTl.to(".poetic .txt strong", { x: 0, opacity: 1, delay: 0.3 })
    contentTl.to(".poetic .txt p", { x: 0, opacity: 1 })
    contentTl.to(".poetic .txt span", { x: 0, opacity: 1 })

    mainTitTl.to(".poetic .tit .t1 span", { y: 0 })
    mainTitTl.to(".poetic .tit .t2 span", { y: 0 })
    mainTitTl.to(".poetic .tit .t3 span", { y: 0, delay: -0.4 })

    new ScrollTrigger({
      trigger: ".poetic .img",
      start: "start 80%",
      end: "bottom 30%",
      onUpdate: (self) => {
        const p = Math.max(0, Math.min(1, self.progress as number))
        const top = minYText + (maxYText - minYText) * p

        if (title && text && img) {
          title.style.bottom = `-${100 + p * 100}px`
          text.style.translate = `0 ${top}px`
          img.style.backgroundPositionY = `${10 + p * 40}%`
        }
      }
    })
  })

  return (
    <section className="poetic !overflow-x-visible overflow-y-visible">
      <div className="area1 pl-50">
        <div className="inner relative my-0 mx-auto w-full">
          <div className="sec_tit left-0 top-4 text-[#2a3942] absolute opacity-0 -translate-x-10">
            CONCEPT
          </div>
          <div className="line line1 w-0 h-[1px] absolute top-0 right-0 bg-black"></div>
          <div className="line line2 absolute w-[1px] h-0 left-38 bg-black"></div>
          <div className="box pt-20 pl-58 relative flex gap-50">
            <div className="img size-[700px] relative overflow-hidden shrink-0">
              <div ref={imgRef} className="bg h-full w-0 bg-[url('/poetic-area1.jpg')]"></div>
            </div>
            <div
              ref={titleRef}
              className="tit absolute z-10 left-128 -bottom-25 pt-54 whitespace-nowrap"
            >
              <div className="t1 text-[32px] font-light overflow-hidden">
                <span className="block translate-y-full">포에틱 클래스</span>
              </div>
              <div className="t2 text-[100px] mt-2.5 overflow-hidden">
                <span className="block translate-y-full">POETIC CLASS</span>
              </div>
              <div className="t3 text-[#555] leading-8 mt-1">
                {[
                  "사회 경제적으로 성공을 이루고 익스클루시브한 감성과 창조적인 문화코드를 가지고,",
                  "자신만의 가장 극적이고 가장 시적인 삶의 아름다움을 사는 사람들"
                ].map((txt, index) => (
                  <p key={index} className="overflow-hidden">
                    <span className="block translate-y-full">{txt}</span>
                  </p>
                ))}
              </div>
            </div>
            <div ref={textRef} className="txt">
              <strong className="block text-[32px] font-thin leading-12 -translate-x-10 opacity-0">
                남다른 일상에 아름다운 영감을 누리며
                <br />
                남과 다른 유일한 삶을 추구하는 당신은
              </strong>
              <p className="text-[#555] leading-8 mt-15 -translate-x-10 opacity-0">
                자신의 안목과 가치를 믿으며
                <br />
                창조적인 문화코드를 지니고
                <br />
                자신만의 시를 쓰며
                <br />
                자연과 함께 가장 빛나는 삶을 향유하는
                <br />
                우리는
                <br />
                당신을
              </p>
              <span className="block text-lg mt-5 -translate-x-10 opacity-0">
                <em>POETIC CLASS</em>라 부릅니다
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Poetic
