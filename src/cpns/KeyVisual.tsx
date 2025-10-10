import React from "react"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"

// import required modules
import { EffectFade, Autoplay } from "swiper/modules"
import { RotateArrWh, RotateTxtWh, VisBg1, VisBg2, VisBg3 } from "@/public/index"
import Image from "next/image"

const KeyVisual = () => {
  useGSAP(() => {
    gsap.fromTo(".txt_1", {}, { scale: 1, top: 300, right: "50%", delay: 3, duration: 1 })
    gsap.fromTo(".txt_2", {}, { scale: 1, top: 300, left: "50%", delay: 3, duration: 1 })
    gsap.fromTo(".scroll", {}, { bottom: "6%", delay: 3.2, duration: 1 })
    gsap.fromTo(".vis_txt p", { y: 50 }, { y: 0, duration: 2 })
    gsap.to(".rotate", { rotate: 360, repeat: -1, ease: "none", duration: 7 })

    const swiperTl = gsap.timeline()
    swiperTl.to(".mySwiper", { scale: 0.3, delay: 1.5, duration: 1 })
    swiperTl.to(".mySwiper", { scale: 1, delay: 0.5, duration: 1, ease: "power4.out" })
  }, [])

  return (
    <div className="cont relative">
      <Swiper
        effect={"fade"}
        autoplay={{
          delay: 4000
        }}
        fadeEffect={{
          crossFade: true
        }}
        speed={4000}
        modules={[Autoplay, EffectFade]}
        className="mySwiper size-full origin-bottom scale-0"
      >
        {[VisBg1, VisBg2, VisBg3].map((img, index) => (
          <SwiperSlide key={index} className="size-full">
            <Image src={img} alt="" className="vis_img size-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="vis_txt txt_1 origin-center z-20 absolute top-80 scale-[4] right-[42%] overflow-hidden">
        <p className="leading-10 translate-y-[50px] text-4xl font-bold">THE ONLY ONE,</p>
      </div>
      <div className="vis_txt txt_2 origin-center z-20 absolute top-122 scale-[4] left-[42%] overflow-hidden">
        <p className="leading-10 translate-y-[50px] text-4xl font-bold">&nbsp;POETIC CLASS</p>
      </div>

      <div className="scroll absolute left-3/4 bottom-1/12 z-20 h-[5.52vw] w-[5.52vw]">
        <Image src={RotateArrWh} alt="" className="absolute" />
        <Image src={RotateTxtWh} alt="" className="rotate" />
      </div>
    </div>
  )
}

export default KeyVisual
