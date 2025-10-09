import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

const TypoText = () => {
  const textRef = useRef(null);
  const dasf = useRef<HTMLDivElement>(null);
  // const tl = useRef(null);
  const tl = useRef<GSAPTimeline>(
    gsap.timeline({
      paused: true,
    })
  );
  const lastY = useRef(0);
  const scrollTimeout = useRef(
    setTimeout(() => {
      tl.current.pause();
    }, 50)
  );

  // useGSAP(() => {
  //   // Split text into characters
  //   const split = new SplitText(textRef.current, { type: "chars" });

  //   if (window) {
  //     lastY.current = window.scrollY;
  //   }

  //   tl.current.fromTo(
  //     split.chars,
  //     {
  //       y: 300,
  //       opacity: 0,
  //     },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       stagger: 0.08,
  //       delay: 0.3,
  //       scrollTrigger:{
  //         one
  //       }
  //     }
  //   );

  //   const handleScroll = () => {
  //     const y = window.scrollY;
  //     const delta = y - lastY.current;

  //     if (Math.abs(delta) < 2) return; // ignore tiny movements

  //     if (delta > 0) {
  //       // scrolling down → play forward
  //       tl.current.play();
  //     } else {
  //       // scrolling up → reverse
  //       tl.current.reverse();
  //     }

  //     lastY.current = y;

  //     // if user stops scrolling → pause after short delay
  //     clearTimeout(scrollTimeout.current);
  //     scrollTimeout.current = setTimeout(() => {
  //       tl.current.pause();
  //     }, 50);
  //   };

  //   window.addEventListener("scroll", handleScroll, { passive: true });

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //     clearTimeout(scrollTimeout.current);
  //   };
  // }, []);

  useGSAP(() => {
    // Split text into characters
    const split = new SplitText(textRef.current, { type: "chars" });
    const chars = split.chars;

    // Create timeline (paused)
    // tl.current = gsap.timeline({ paused: true });
    tl.current.fromTo(
      chars,
      { yPercent: 120, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.05,
      }
    );

    // Scroll listener
    const handleScroll = () => {
      const y = window.scrollY;
      console.log(y);

      if (y < 2800 || y > 3600) return;
      const delta = y - lastY.current;

      if (Math.abs(delta) < 2) return; // ignore micro scrolls

      if (delta > 0) {
        // scroll down → play forward
        tl.current.play();
      } else {
        // scroll up → reverse
        tl.current.reverse();
      }

      lastY.current = y;

      // Pause when user stops scrolling
      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => tl.current.pause(), 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      split.revert();
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <div ref={dasf} className="absolute -top-28 left-1/2 -translate-x-1/2 w-4/5 h-100 flex justify-center">
      <p>
        <span ref={textRef} className="text-[340px] text-[#b9b9b9] select-none">
          BLANZ
        </span>
      </p>
    </div>
  );
};

export default TypoText;
