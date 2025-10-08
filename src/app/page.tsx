"use client";

import About from "@/cpns/About";
import Brand from "@/cpns/Brand";
import Header from "@/cpns/Header";
import KeyVisual from "@/cpns/KeyVisual";

export default function Home() {
  return (
    <main className="h-dvh">
      <Header />
      <KeyVisual />
      <About />
      <Brand />
      <div className="cont"></div>
    </main>
  );
}
