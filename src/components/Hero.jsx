import React, { useEffect } from "react";
import ring from "../assets/ring.png";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Hero = () => {
  const ctx = {};

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Create a GSAP timeline for the H1 and ring animations
    ctx.timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        // end: "bottom += 1000px",
        scrub: 1,
        pin: true,
        // markers: true,
      },
    });

    // Animate the first h1
    ctx.timeline
      .to(
        "h1:nth-child(1)",
        {
          transform: "translateX(-100%)",
          opacity: 0,
        },
        "same"
      )
      .to(
        "h1:nth-child(2)",
        {
          transform: "translateX(100%)",
          opacity: 0,
        },
        "same"
      )
      .to(
        ".ring",
        {
          rotationY: 180,
          opacity: 0,
          scale: 4,
        },
        "same"
      )
      .to(
        ".hero_content",
        {
          opacity: 0,
        },
        "same"
      );

    // Return a cleanup function to clear the animations
    return () => {
      ctx.timeline.kill(); // Kill the animations
    };
  }, []);

  return (
    <>
      <div className="hero d-flex justify-content-end ">
        <h1>Saiphia</h1>
        <h1>Group</h1>

        <img src={ring} alt="" className="ring" />
        <div className="hero_content">
          <h6 className="fw-bold text-white ">
            Saiphia Group is one of the fastest growing company in India &
            abroad providing Engineering and equipment manufacturing Services
            for Cement, Mining, Casting, Manufacturing, Bionics
            (Bio-mechanical), Power and Aerospace Engineering sectors
          </h6>
        </div>
      </div>
      {/* <div className="spacer"></div> */}
    </>
  );
};

export default Hero;
