import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import React from "react"

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  useGSAP(() => {
    gsap.to(".box", {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".abt_img",
        start: "top center"
      }
    })

    const imgTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".inner",
        start: "top center"
      }
    })
    imgTl.to(".abt_txt strong", { opacity: 1, x: 0, duration: 0.8 })
    imgTl.to(".abt_txt strong b", { fontSize: 60, delay: 0.3, duration: 0.8 })
    imgTl.to(".abt_txt .txt p span", { y: 0 })
  })
  return (
    <div className="about py-[10vw] pl-[8vw]">
      <div className="relative size-full">
        <div className="abt_txt absolute top-0 left-0 size-full pt-[5vw] flex items-center">
          <div className="inner flex flex-col justify-center">
            <strong className="block text-3xl font-normal text-black opacity-0 -translate-x-16">
              당신은 어떤 <b className="font-medium">삶</b>을 쓰고 있습니까?
            </strong>
            <div className="txt t1 mt-36 text-[#555] leading-9">
              {[
                "시대가 정한 최고의",
                "기준들을 넘어자신만의 유일한 삶의 시를 쓰며",
                "세상 가장 빛나는 시적인 순간을 향유할",
                "당신은 POETIC CLASS"
              ].map((txt, index) => (
                <p key={index} className="overflow-hidden">
                  <span className="block translate-y-full">{txt}</span>
                </p>
              ))}
            </div>
            <div className="txt t2 mt-9 text-[#000] text-lg font-medium leading-9">
              {[
                "단, 13세대만을 위한 유려하고 독창적인 아트워크",
                "더블란츠가 당신을 이야기합니다"
              ].map((txt, index) => (
                <p key={index} className="overflow-hidden">
                  <span className="block translate-y-full">{txt}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="abt_img flex justify-end gap-[4vw] size-full">
          <div className="box box1 mt-16 h-[860px] w-[300px] translate-y-[10%] opacity-0">
            <div className="bg bg-[url('/about-bg1.jpg')] size-full"></div>
          </div>
          <div className="box box2 h-[860px] w-[800px] -translate-y-[10%] opacity-0">
            <div className="bg bg-[url('/about-bg2.jpg')] size-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
