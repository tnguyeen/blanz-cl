import { PoeticArea2_1, PoeticArea2_2, PoeticArea2_3, PoeticArea2_4 } from "@/public/index"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import React, { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

const imgData = [PoeticArea2_1, PoeticArea2_2, PoeticArea2_3, PoeticArea2_4]

const Gallery = () => {
  const imgRef = useRef<(HTMLLIElement | null)[]>([])
  useGSAP(() => {
    gsap.to(".gallery .img", {
      width: "100%",
      duration: 1.2,
      scrollTrigger: { trigger: ".gallery", start: "top 30%" }
    })

    new ScrollTrigger({
      trigger: ".gallery .trigger1",
      start: "top 80%",
      end: "top 30%",
      onUpdate: (sefl) => {
        if (imgRef.current[1] && imgRef.current[3]) {
          imgRef.current[1].style.translate = `0 -${sefl.progress * 30}px`
          imgRef.current[3].style.translate = `0 -${sefl.progress * 30}px`
        }
      }
    })
  })
  return (
    <section className="gallery py-100 px-24 pb-60">
      <ul className="flex gap-4.5 list-none relative">
        {imgData.map((img, index) => (
          <li
            ref={(li) => {
              imgRef.current[index] = li
            }}
            key={index}
            className={`w-1/4 h-[700px] ${index % 2 === 1 ? "up" : ""}`}
          >
            <Image src={img} alt="" className="img h-full w-0 object-cover" />
          </li>
        ))}
        <span className="block trigger1 size-0 absolute left-0 bottom-0"></span>

      </ul>
    </section>
  )
}

export default Gallery
