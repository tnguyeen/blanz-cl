import React from "react";
import Card, { CardProps } from "./Card";
import { BrandCard1, BrandCard2, BrandCard3, BrandCard4, BrandCard5 } from "@/public/index";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TypoText from "./TypoText";

gsap.registerPlugin(ScrollTrigger);

const cardData: CardProps[] = [
  {
    mainTypo: "BILLIANT & BOLD",
    subText: "빛남/탁월/견고",
    bg: BrandCard1,
  },
  {
    mainTypo: "LEADER",
    subText: "빛남/탁월/견고",
    bg: BrandCard2,
  },
  {
    mainTypo: "AUTHENTIC",
    subText: "빛남/탁월/견고",
    bg: BrandCard3,
  },
  {
    mainTypo: "NATURE",
    subText: "빛남/탁월/견고",
    bg: BrandCard4,
  },
  {
    mainTypo: "ZENITH",
    subText: "빛남/탁월/견고",
    bg: BrandCard5,
  },
];

const Typo = () => {
  useGSAP(() => {
    const cardTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".typo .trigger1",
        start: "top center",
      },
    });

    cardTl.to(".cards li div", {
      width: "100%",
    });
    cardTl.to(".ori span", {
      y: 0,
      delay: 0.1,
    });

    for (let index = 0; index < cardData.length; index++) {
      gsap.to(`.card-${index}`, { y: (2 - Math.abs(2 - index)) * -20, scrollTrigger: { trigger: ".typo .trigger2", start: "top center", toggleActions: "play none none reverse" } });
    }
  });
  return (
    <div className="cont typo relative py-40 px-50">
      <div className="trigger1 absolute size-0 left-0 -top-3"></div>
      <div className="trigger2 absolute size-0 left-0 bottom-1/20"></div>
      <div className="relative inner w-full">
        <TypoText />
        <ul className="cards flex gap-4 pt-52">
          {cardData.map((card, index) => (
            <li key={card.mainTypo} className={`w-1/5 overflow-hidden translate-y-0 card-${index}`}>
              <div className="relative h-[395px] w-0">
                <Card mainTypo={card.mainTypo} bg={card.bg} subText={card.subText} id={index} />
              </div>
            </li>
          ))}
        </ul>
        <div className="ori mt-4">
          <p className="overflow-hidden">
            <span className="block translate-y-full text-[#999]">BRINGING YOU THE MOST POETIC MOMENTS OF YOUR UNIQUE LIFE</span>
          </p>
          <p className="overflow-hidden">
            <span className="block translate-y-full text-[#999]">WITH THE MOST SHINING PRESENCE OF LIFE IN THIS ERA</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Typo;
