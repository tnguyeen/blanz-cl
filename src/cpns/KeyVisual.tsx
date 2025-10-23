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
    const visTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".vis",
        start: "60% 70%",
        end: "40% 30%"
      }
    })

    visTl.to(".vis .vis_txt p", { y: 0, duration: 0.8 }, 0.2)
    visTl.to(".vis_sd", { scale: 0.3, duration: 1 }, 1)
    visTl.to(".vis_sd", { scale: 1, duration: 1 }, 2)
    visTl.to(".rotate", { opacity: 1, bottom: "6%", duration: 0.4 }, 2.2)
    visTl.to(".rotate .txt", { rotate: 360, repeat: -1, duration: 10, ease: "none" }, 2.2)
    visTl.to(".vis .vis_txt.t1", { scale: 1, top: 250, right: "50%", duration: 1 }, 2)
    visTl.to(".vis .vis_txt.t2", { scale: 1, top: 250, left: "50%", duration: 1 }, 2)
  }, [])

  return (
    <div className="cont vis relative">
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
        className="vis_sd size-full origin-bottom scale-0"
      >
        {[VisBg1, VisBg2, VisBg3].map((img, index) => (
          <SwiperSlide key={index} className="size-full">
            <Image src={img} alt="" className="vis_img size-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="vis_txt t1 origin-center z-20 absolute top-100 scale-[4] right-[42%] overflow-hidden">
        <p className="leading-10 translate-y-[50px] text-4xl font-bold">THE ONLY ONE,</p>
      </div>
      <div className="vis_txt t2 origin-center z-20 absolute top-140 scale-[4] left-[42%] overflow-hidden">
        <p className="leading-10 translate-y-[50px] text-4xl font-bold">&nbsp;POETIC CLASS</p>
      </div>

      <div className="rotate scroll absolute left-3/4 bottom-1/12 z-20 h-[5.52vw] w-[5.52vw]">
        <Image src={RotateArrWh} alt="" className="absolute" />
        <Image src={RotateTxtWh} alt="" className="txt" />
      </div>
    </div>
  )
}

export default KeyVisual
