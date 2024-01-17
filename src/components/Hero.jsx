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
        // end: "",
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
          scale: 7,
        },
        "same"
      )
      .to(
        ".hero_content",
        {
          opacity: 0,
        },
        "same"
      )
      .to(
        ".pro_btn button",
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
        <h1>Technology</h1>

        <img src={ring} alt="" className="ring" />

        <div className="pro_btn">
          <button className="d-flex flex-column align-items-center justify-content-center gap-3">
            <svg
              width="47"
              height="34"
              viewBox="0 0 47 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="svg"
            >
              <path
                d="M40.9824 27.5159L45.2008 11.9169C45.9366 9.19629 44.3248 6.40455 41.6008 5.6814L25.9824 1.53516"
                stroke-width="2"
              ></path>
              <path
                d="M44.8394 7.95507L1.49414 32.9805"
                stroke-width="2"
              ></path>
            </svg>
            <span> Let's talk</span>
            <div className="after"></div>
          </button>
        </div>

        <div className="hero_content">
          <h6 className="fw-bold text-white ">
            Saiphia Group is one of the fastest growing company in India &
            abroad providing Engineering and equipment manufacturing Services
            for Cement, Mining, Casting, Manufacturing, Bionics
            (Bio-mechanical), Power and Aerospace Engineering sectors
          </h6>
        </div>
      </div>
      <div className="cards">
        {/* <div className="card"></div> */}
      </div>
    </>
  );
};

export default Hero;
