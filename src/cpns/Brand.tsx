import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const Brand = () => {
  const lineRef = useRef<HTMLSpanElement | null>(null);
  const imgRef = useRef<HTMLSpanElement | null>(null);
  const boxRef = useRef<HTMLDivElement | null>(null);

  const minH = 200;
  const maxH = 500;

  const minScale = 1.1;
  const maxScale = 1.8;

  useGSAP(() => {
    const line = lineRef.current;
    const box = boxRef.current;
    const img = imgRef.current;

    const leftTxtTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".brand .trigger1",
        start: "top center",
      },
    });

    const rightTxtTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".brand .txt",
        start: "top center",
        toggleActions: "play reverse reverse reverse",
      },
    });

    const rightTxtTl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".brand .trigger2",
        start: "top center",
        toggleActions: "play reverse reverse reverse",
      },
    });

    gsap.to(".brand .sec_title", {
      x: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: ".brand .trigger1",
        start: "top center",
      },
    });
    gsap.to(".brand .line1", {
      width: "100%",
      duration: 1,
      scrollTrigger: {
        trigger: ".brand .trigger1",
        start: "top center",
      },
    });
    gsap.to(".brand .line2", {
      duration: 1,
      scrollTrigger: {
        trigger: ".brand",
        start: "top center",
        onUpdate: (self) => {
          const p = Math.max(0, Math.min(1, self.progress as number));
          const height = minH + (maxH - minH) * p;
          if (line) {
            line.style.height = `${height}px`;
          }
        },
        onEnter: (self) => {
          const p = Math.max(0, Math.min(1, self.progress as number));
          const height = minH + (maxH - minH) * p;
          if (line) {
            line.style.height = `${height}px`;
          }
        },
      },
    });
    gsap.to(".txt", {
      duration: 1,
      scrollTrigger: {
        trigger: ".brand",
        start: "top center",
        onUpdate: (self) => {
          const p = Math.max(0, Math.min(1, self.progress as number));
          const top = minH + (maxH - minH) * p;
          if (box) {
            box.style.top = `${top + 30}px`;
          }
        },
        onEnter: (self) => {
          const p = Math.max(0, Math.min(1, self.progress as number));
          const top = minH + (maxH - minH) * p;
          if (box) {
            box.style.top = `${top + 30}px`;
          }
        },
      },
    });

    leftTxtTl.to(".left_txt .t1", { opacity: 1, y: 0, duration: 0.5, delay: 1.3 });
    leftTxtTl.to(".left_txt .t2", { opacity: 1, y: 0, duration: 0.5 });
    leftTxtTl.to(".left_txt .t3", { opacity: 1, x: 0, duration: 0.5 });
    leftTxtTl.to(".right_txt", { opacity: 1, x: 0, duration: 0.5 });

    rightTxtTl.to(".right_txt .t1 span", { y: "100%" });
    rightTxtTl.to(".right_txt .t2 span", { y: 0, delay: 0.2 });

    rightTxtTl2.to(".right_txt .t2 span", { y: "100%" });

    gsap.to(".content .img span", {
      scrollTrigger: {
        trigger: ".brand",
        start: "top center",
        onUpdate: (self) => {
          const p = Math.max(0, Math.min(1, self.progress as number));
          const scale = maxScale - (maxScale - minScale) * p;
          if (img) {
            img.style.scale = `${scale}`;
          }
        },
        onEnter: (self) => {
          const p = Math.max(0, Math.min(1, self.progress as number));
          const scale = maxScale - (maxScale - minScale) * p;
          if (img) {
            img.style.scale = `${scale}`;
          }
        },
      },
    });
  });
  return (
    <div className="brand relative">
      <div className="trigger trigger1 absolute size-0 -top-40"></div>
      <div className="trigger trigger2 absolute left-0 top-160 size-0"></div>
      <div className="content pl-50">
        <div className="relative">
          <span className="sec_title absolute top-4 left-0 text-xl -translate-x-12 opacity-0">Brand</span>
          <span className="line1 absolute top-0 left-0 h-[1px] w-0 bg-black"></span>
          <span ref={lineRef} className="line2 absolute top-0 left-40 h-0 w-[1px] bg-black duration-1000"></span>
          <div ref={boxRef} className="txt z-20 absolute left-0 top-50 w-full overflow-x-hidden flex gap-100 duration-1000">
            <ul className="left_txt">
              <li className="overflow-hidden">
                <span className="block ul_txt t1 text-[80px] indent-25 opacity-0 translate-y-full">THE ONLY ONE,</span>
              </li>
              <li className="overflow-hidden">
                <span className="block ul_txt t2 text-[80px] opacity-0 translate-y-full">POETIC CLASS</span>
              </li>
              <li className="ul_txt t3 text-[80px] text-[#ce6455] -translate-x-4 opacity-0">THE BLANZ</li>
            </ul>
            <div className="right_txt flex-auto opacity-0 translate-x-4 relative">
              <div className="t1 absolute min-w-1">
                {[
                  "가장 빛나는 삶의 존재감으로 1",
                  "더블란츠는 세상에 없던 최상의 주거 문화를 창조하고 1",
                  "자연과 함께하는 최고의 공간과 지금껏 경험한 적 없던 1",
                  "유일한 삶의 유려하고 독창적인 가장 시적인 순간을 선사합니다",
                ].map((txt, index) => (
                  <p key={index} className="overflow-hidden h-7">
                    <span className="block">{txt}</span>
                  </p>
                ))}
              </div>
              <div className="t2 absolute min-w-1">
                {[
                  "가장 빛나는 삶의 존재감으로",
                  "더블란츠는 세상에 없던 최상의 주거 문화를 창조하고",
                  "자연과 함께하는 최고의 공간과 지금껏 경험한 적 없던",
                  "유일한 삶의 유려하고 독창적인 가장 시적인 순간을 선사합니다",
                ].map((txt, index) => (
                  <p key={index} className="overflow-hidden h-7">
                    <span className="block translate-y-full">{txt}</span>
                  </p>
                ))}
              </div>
              <div className="t3 absolute min-w-1">
                {new Array(4).fill(0).map((_, index) => (
                  <p key={index} className="h-7"></p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="size-full  pt-[700px] pl-40">
          <div className="img overflow-hidden w-full h-120">
            <span ref={imgRef} className="block size-full bg-[url('/brand-bg.jpg')] bg-cover"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
