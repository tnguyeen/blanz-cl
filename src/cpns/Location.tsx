import { BrandArea3_1, BrandArea3_2, LogoWh } from "@/public/index"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

const Location = () => {
  useGSAP(() => {
    gsap.to(".location .sec_title", {
      x: 0,
      opacity: 1,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".location .trigger1",
        start: "top center"
      }
    })
    gsap.to(".location .line1", {
      width: "75%",
      duration: 1,
      scrollTrigger: {
        trigger: ".location .trigger1",
        start: "top center"
      }
    })
    gsap.to(".location .line2", {
      height: 100,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".location .trigger1",
        start: "top center"
      }
    })

    gsap.to(".location .box .bg", {
      opacity: 1,
      duration: 1.5,
      backgroundPositionX: "50%",
      scrollTrigger: {
        trigger: ".location .trigger2",
        start: "top center"
      }
    })

    gsap.to(".location .content", {
      opacity: 1,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".location .trigger2",
        start: "top center"
      }
    })

    gsap.to(".location .box1 .logo", {
      opacity: 1,
      duration: 1,
      delay: 1.6,
      y: "50%",
      scrollTrigger: {
        trigger: ".location .trigger2",
        start: "top center"
      }
    })

    gsap.to(".location .box2 .logo", {
      opacity: 1,
      duration: 1,
      delay: 1.6,
      y: "-50%",
      scrollTrigger: {
        trigger: ".location .trigger2",
        start: "top center"
      }
    })

    gsap.to(".location .location_txt", {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".location .txt",
        start: "top 75%"
      }
    })
  })
  return (
    <section className="location relative">
      <div className="trigger trigger1 absolute size-0 left-0 -top-40"></div>
      <div className="trigger trigger2 absolute size-0 left-0 top-0"></div>
      <div className="relative bg-amber-100 w-full">
        <span className="sec_title absolute bottom-2.5 left-[37.5%] text-xl -translate-x-12 opacity-0">
          Location
        </span>
        <span className="line1 absolute bottom-0 right-0 h-[1px] w-0 bg-black"></span>
        <span className="line2 absolute bottom-0 left-[42%] h-0 w-[1px] bg-black"></span>
      </div>
      <div className="content pt-50 w-full opacity-0">
        <div className="box box1 relative overflow-hidden h-[350px] w-full">
          <div
            className="bg bg-[url('/brand-area3-1.jpg')] bg-cover size-full"
            style={{ backgroundPositionX: "80%" }}
          ></div>
          <div className="logo absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-full">
            <Image src={LogoWh} alt="" />
          </div>
        </div>
        <div className="box box2 relative overflow-hidden h-[350px] w-full">
          <div
            className="bg bg-[url('/brand-area3-2.jpg')] bg-cover size-full"
            style={{ backgroundPositionX: "20%" }}
          ></div>
          <div className="logo absolute left-1/2 -translate-x-1/2 top-0 -translate-y-full">
            <Image src={LogoWh} alt="" />
          </div>
        </div>
      </div>
      <div className="txt pr-50 pt-12">
        <dl className="text-right list-none">
          <dt className="location_txt text-[26px] mb-5 opacity-0 -translate-x-20">
            빛나는 여의도와 _ 아름다운 한강의 공존
          </dt>
          <dd className="location_txt text-[#72a5c7] text-[22px] leading-10 font-medium opacity-0 translate-x-20">
            한강을 영구히 품은
            <br />
            한강, 그 위에 서다
          </dd>
        </dl>
      </div>
    </section>
  )
}

export default Location
