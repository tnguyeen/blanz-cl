import { LogoBl } from "@/public/index"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import Image from "next/image"

const Header = () => {
  useGSAP(() => {
    gsap.fromTo(".header", { y: -150 }, { y: 0, duration: 1 })
  }, [])

  return (
    <header className="header padding-header absolute top-0 left-0 z-20">
      <div className="flex">
        <a href="#">
          <Image src={LogoBl} alt="logo" width={100} />
        </a>
      </div>
    </header>
  )
}

export default Header
