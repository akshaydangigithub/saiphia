import React, { useEffect, useLayoutEffect } from "react";
import logo from "../assets/logo.png";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { IoMdPlay } from "react-icons/io";

const Hero = () => {
  const ctx = {};

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

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

    ctx.timeline
      .to(
        ".content",
        {
          transform: "translateX(-100%)",
          opacity: 0,
        },
        "same"
      )
      .to(
        ".text2",
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
          scale: 3,
          opacity: 0,
          // display: "none",
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

    return () => {
      ctx.timeline.kill();
    };
  }, []);

  return (
    <>
      <div className="hero d-flex justify-content-end ">
     
        <div className="content">
          <h1>
            Saiphia <br /> Group
          </h1>
          <h6>Our equipment, Services & system for you</h6>

          <div className="d-flex align-items-center gap-5 mt-5">
            <button className="py-2 px-4">Contact us</button>
            <div className="play d-flex align-items-center justify-content-center">
              <IoMdPlay className="fs-4" />
              <span class="ripple"></span>
            </div>
          </div>
        </div>

        <h6 className="text2">
          "Saiphia Group is one of the fastest growing company in India & abroad
          providing Engineering and equipment manufacturing Services for Cement,
          Mining, Casting, Manufacturing, Bionics (Bio-mechanical), Power and
          Aerospace Engineering sectors"
        </h6>

        <div className="waveWrapper waveAnimation">
          <div className="waveWrapperInner bgMiddle">
            <div
              className="wave waveMiddle"
              style={{
                backgroundImage:
                  'url("http://front-end-noobs.com/jecko/img/wave-mid.png")',
              }}
            />
          </div>
        </div>

        <img src={logo} alt="logo" className="ring" />
      </div>
      <div className="spacer"></div>
    </>
  );
};

export default Hero;
