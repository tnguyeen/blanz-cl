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
    visTl.to(".rotate", { opacity: 1, y: "0", duration: 0.4 }, 2.2)
    visTl.to(".rotate .txt", { rotate: 360, repeat: -1, duration: 10, ease: "none" }, 2.2)
    visTl.to(".vis .vis_txt.t1", { scale: 1, top: 250, x: "0%", duration: 1 }, 2)
    visTl.to(".vis .vis_txt.t2", { scale: 1, top: 250, x: "50%", duration: 1 }, 2)
  }, [])

  return (
    <section className="cont vis relative">
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
      <div className="vis_txt t1 z-20 absolute top-100 scale-[2] lg:scale-[4] right-1/2 translate-x-1/2 overflow-hidden">
        <p className="leading-10 translate-y-[50px] text-xl lg:text-4xl lg:font-bold text-nowrap">
          THE ONLY ONE,
        </p>
      </div>
      <div className="vis_txt t2 z-20 absolute top-120 lg:top-140 scale-[2] lg:scale-[4] left-1/2 -translate-x-1/2 overflow-hidden">
        <p className="leading-10 translate-y-[50px] text-xl lg:text-4xl lg:font-bold text-nowrap">
          &nbsp;POETIC CLASS
        </p>
      </div>

      <div className="rotate scroll absolute left-3/4 bottom-[4%] lg:bottom-[6%] -translate-y-3 z-20 size-18 lg:h-[5.52vw] lg:w-[5.52vw]">
        <Image src={RotateArrWh} alt="" className="absolute" />
        <Image src={RotateTxtWh} alt="" className="txt" />
      </div>
    </section>
  )
}

export default KeyVisual
