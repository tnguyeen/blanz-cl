"use client";

import About from "@/cpns/About";
import Brand from "@/cpns/Brand";
import Header from "@/cpns/Header";
import KeyVisual from "@/cpns/KeyVisual";
import Location from "@/cpns/Location";
import Typo from "@/cpns/typo/Typo";

export default function Home() {
  return (
    <main className="h-dvh">
      <Header />
      <KeyVisual />
      <About />
      <Brand />
      <Typo />
      <Location />

      <div className="cont"></div>
    </main>
  );
}
