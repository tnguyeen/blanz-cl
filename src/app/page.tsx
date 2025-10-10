"use client"

import About from "@/cpns/About"
import Brand from "@/cpns/Brand"
import Footer from "@/cpns/Footer"
import Gallery from "@/cpns/Gallery"
import Header from "@/cpns/Header"
import KeyVisual from "@/cpns/KeyVisual"
import Location from "@/cpns/Location"
import Poetic from "@/cpns/Poetic"
import Typo from "@/cpns/typo/Typo"
import View from "@/cpns/View"

export default function Home() {
  return (
    <main className="h-dvh">
      <Header />
      <KeyVisual />
      <About />
      <Brand />
      <Typo />
      <Location />
      <View />
      <Poetic />
      <Gallery />
      <Footer />
    </main>
  )
}
