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

    // Check if the screen width is greater than 768 pixels (adjust as needed)
    const isDesktop = window.innerWidth > 768;

    if (isDesktop) {
      ctx.timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          scrub: 1,
          pin: true,
        },
      });

      ctx.timeline
        .to(".content", { transform: "translateX(-100%)", opacity: 0 }, "same")
        .to(".text2", { transform: "translateX(100%)", opacity: 0 }, "same")
        .to(
          ".ring",
          { rotationY: 180, scale: "3 !important", opacity: 0 },
          "same"
        )
        .to(".hero_content", { opacity: 0 }, "same");

      return () => {
        ctx.timeline.kill();
      };
    }
  }, []); // Empty dependency array ensures that this effect runs only once on component mount

  return (
    <>
      <div className="hero d-flex align-items-center justify-content-center">
        <div className="content">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, type: "spring" }}
          >
            Saiphia <br className="d-md-block d-none" /> Group
          </motion.h1>
          <motion.h6
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, type: "spring" }}
          >
            Our equipment, <span style={{color:'#17A134'}}>Services & system </span>  for you
          </motion.h6>

          <div className="d-flex align-items-center gap-5 mt-md-5 mt-3">
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

        <h6 className="text2">
        <span style={{color:'#17A134'}}> "Saiphia Group</span>   is a beacon of growth, rapidly emerging as a leading entity in India and
beyond. Renowned for delivering top-tier Engineering and equipment manufacturing
services, our influence spans key sectors such as Cement, Mining, Casting,
Manufacturing, Bionics (Bio-mechanical), Power, and Aerospace Engineering. With an
unwavering commitment to excellence, we propel industries forward through
cutting-edge solutions, marking our ascent as a powerhouse in the global business
landscape.
"
        </h6>

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
