import React, { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Cards = () => {
  const ctx = {};

  useLayoutEffect(() => {
    const timeline = gsap.timeline({
      defaults: {
        immediateRender: false,
      },
      scrollTrigger: {
        trigger: ".cards",
        start: "top bottom",
        end: "bottom center",
        scrub: 1,
        // markers: true,
      },
    });

    timeline.from(".cards_inner", {
      opacity: 0,
      scale: 0,
      stagger: 0.1,
    });

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <div className="cards d-flex align-items-center justify-content-center">
      <div className="cards_inner d-flex align-items-center justify-content-center gap-3">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
    </div>
  );
};

export default Cards;
