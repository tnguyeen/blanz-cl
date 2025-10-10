import {
  LogoBl,
  PoeticArea2_1,
  PoeticArea2_2,
  PoeticArea2_3,
  PoeticArea2_4,
  TopBtn
} from "@/public/index"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import React, { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

const oriData = [
  "· 본사이트는 소비자의 이해를 돕기 위해 제작된 사전홍보물로 실제와 다를 수 있으니 라운지를 방문하시어 직접 확인하시기 바랍니다.",
  "· 본 사이트에 표시된 개발계획은 사업주체, 국가기관, 지자체 및 기타 기관에서 발표한 내용을 참조한 것으로 관계 기관에 따라 사업추진 중 일부 변경, 지연, 취소될 수 있습니다.",
  "· 본 사이트 제작에 사용된 CG 및 이미지 등은 소비자의 이해를 돕기 위한 것으로, 실제와 다소 차이가 있을 수 있으며 인·허가 과정 및 실제 시공 시 변경될 수 있습니다."
]

const Footer = () => {
  useGSAP(() => {
    const footTl = gsap.timeline({
      scrollTrigger: {
        trigger: "footer",
        start: "top 90%"
      }
    })

    footTl.to(".foot_logo", { opacity: 1, y: 0 })
    footTl.to("footer .ori span", { y: 0 })
    footTl.to("footer .top", { opacity: 1, y: 0 })
    footTl.to("footer .line1", { width: "100%", delay: -0.5 })
    footTl.to("footer .info .left", { opacity: 1, x: 0, delay: -0.5 })
    footTl.to("footer .line2", { height: 120 })
  })
  return (
    <footer className="p-25 pt-0 w-full">
      <div className="inner relative mx-auto w-full">
        <div className="foot_logo mb-12 opacity-0 translate-y-10 flex items-center justify-center">
          <Image src={LogoBl} alt="" className="w-[122px] h-16" />
        </div>
        <div className="ori flex flex-col relative items-center justify-center">
          {oriData.map((txt, index) => (
            <p key={index} className="overflow-hidden text-[#999] text-sm leading-7 text-center">
              <span className="block translate-y-full">{txt}</span>
            </p>
          ))}
          <div className="top absolute right-0 bottom-0 opacity-0 translate-y-10">
            <button
              onClick={() => {
                window && window.scrollTo({ top: 0, behavior: "smooth" })
              }}
            >
              <Image src={TopBtn} alt="" />
            </button>
          </div>
        </div>
        <div className="info mt-15 py-11 relative">
          <div className="line line1 bg-black absolute top-0 left-0 h-[1px] w-0"></div>
          <div className="line line2 bg-black absolute top-0 right-100 w-[1px] h-0"></div>
          <div className="left opacity-0 -translate-x-10">
            <p className="text-[#2a3942] text-xs leading-4.5">
              <span className="font-semibold">사업자등록번호. </span>
              705-81-02761&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="font-semibold">대표.</span> 정주화&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="font-semibold">시행사. </span>하이클래스디벨롭㈜
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
