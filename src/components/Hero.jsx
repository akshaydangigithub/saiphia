import React, { useEffect, useLayoutEffect } from "react";
import logo from "../assets/logo.png";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { IoMdPlay } from "react-icons/io";
import { motion } from "framer-motion";

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
          scale: "3 !important",
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
      );

    return () => {
      ctx.timeline.kill();
    };
  }, []);

  return (
    <>
      <div className="hero d-flex align-items-center justify-content-center">
        <div className="content">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, type: "spring" }}
          >
            Saiphia <br /> Group
          </motion.h1>
          <motion.h6
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, type: "spring" }}
          >
            Our equipment, Services & system for you
          </motion.h6>

          <div className="d-flex align-items-center gap-5 mt-5">
            <motion.button
              className="py-2 px-4"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, type: "spring" }}
            >
              Contact us
            </motion.button>
            <motion.div
              className="play d-flex align-items-center justify-content-center"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9, type: "spring" }}
            >
              <IoMdPlay className="fs-4" />
              <span class="ripple"></span>
            </motion.div>
          </div>
        </div>

        <motion.h6
          className="text2"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, type: "spring" }}
        >
          "Saiphia Group is one of the fastest growing company in India & abroad
          providing Engineering and equipment manufacturing Services for Cement,
          Mining, Casting, Manufacturing, Bionics (Bio-mechanical), Power and
          Aerospace Engineering sectors"
        </motion.h6>

        {/* <div className="waveWrapper waveAnimation">
          <div className="waveWrapperInner bgMiddle">
            <div
              className="wave waveMiddle"
              style={{
                backgroundImage:
                  'url("http://front-end-noobs.com/jecko/img/wave-mid.png")',
              }}
            />
          </div>
        </div> */}

        <img src={logo} alt="logo" className="ring" />
      </div>
      {/* <div className="spacer"></div> */}
    </>
  );
};

export default Hero;
