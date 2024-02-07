import React, { useLayoutEffect, useRef, useState } from "react";
import { FaPeopleRobbery } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AiFillLike } from "react-icons/ai";
import { MdWorkHistory } from "react-icons/md";
import { FaUsers } from "react-icons/fa";

const Success = () => {
  const firstCount = useRef(null);
  const secondCount = useRef(null);
  const thirdCount = useRef(null);
  const fourthCount = useRef(null);
  const [firstCountValue, setFirstCountValue] = useState(0);
  const [secondCountValue, setSecondCountValue] = useState(0);
  const [thirdCountValue, setThirdCountValue] = useState(0);
  const [fourthCountValue, setFourthCountValue] = useState(0);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // creating a timeline
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".success",
        start: "top center",
        end: "bottom top",
        // scrub: 1,
        // markers: true,
      },
    });

    // increasing the count onscroll

    tl.to(
      firstCount.current,
      {
        innerHTML: "15+", // Set this to the maximum value you want
        duration: 1,
        ease: "none",
        onUpdate: () => {
          setFirstCountValue(Math.round(firstCount.current.innerHTML));
        },
      },
      "same"
    );

    tl.to(
      secondCount.current,
      {
        innerHTML: "150+", // Set this to the maximum value you want
        duration: 1,
        ease: "none",
        onUpdate: () => {
          setSecondCountValue(Math.round(secondCount.current.innerHTML));
        },
      },
      "same"
    );

    tl.to(
      thirdCount.current,
      {
        innerHTML: "100+", // Set this to the maximum value you want
        duration: 1,
        ease: "none",
        onUpdate: () => {
          setThirdCountValue(Math.round(thirdCount.current.innerHTML));
        },
      },
      "same"
    );

    tl.to(
      fourthCount.current,
      {
        innerHTML: "25+", // Set this to the maximum value you want
        duration: 1,
        ease: "none",
        onUpdate: () => {
          setFourthCountValue(Math.round(fourthCount.current.innerHTML));
        },
      },
      "same"
    );
  }, []);

  return (
    <div className="success position-relative">
      <div className="back_img">
        <img
          src="https://images.unsplash.com/photo-1521111756787-d2f69136cedf?w=2069&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGZhY3RvcnklMjBidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
      </div>
      <div className="row success_row h-100 px-5">
        <div className="col-md-3 d-flex align-items-center justify-content-center flex-column">
          <div className="s_icon d-flex align-items-center justify-content-center" style={{border:'2px solid #00173C'}}>
            <MdWorkHistory color="#17A134" className="fs-3 " />
          </div>
          <h3 className="fw-bold text-dark mt-3" ref={firstCount}>
            {firstCountValue}+
          </h3>
          <h6 className="fw-bold text-dark">Years Experiance</h6>
        </div>
        <div className="col-md-3 d-flex align-items-center justify-content-center flex-column">
          <div className="s_icon d-flex align-items-center justify-content-center" style={{border:'2px solid #00173C'}}>
            <AiFillLike color="#17A134" className="fs-3" />
          </div>
          <h3 className="fw-bold text-dark mt-3" ref={secondCount}>
            {secondCountValue}+
          </h3>
          <h6 className="fw-bold text-dark">Project done</h6>
        </div>
        <div className="col-md-3 d-flex align-items-center justify-content-center flex-column">
          <div className="s_icon d-flex align-items-center justify-content-center" style={{border:'2px solid #00173C'}}>
            <FaPeopleRobbery color="#17A134" className="fs-3" />
          </div>
          <h3 className="fw-bold text-dark mt-3" ref={thirdCount}>
            {thirdCountValue}+
          </h3>
          <h6 className="fw-bold text-dark">Happy clients</h6>
        </div>
        <div className="col-md-3 d-flex align-items-center justify-content-center flex-column">
          <div className="s_icon d-flex align-items-center justify-content-center" style={{border:'2px solid #00173C'}}>
            <FaUsers color="#17A134" className="fs-3" />
          </div>
          <h3 className="fw-bold text-dark mt-3" ref={fourthCount}>
            {fourthCountValue}+
          </h3>
          <h6 className="fw-bold text-dark">Experts member</h6>
        </div>
      </div>
    </div>
  );
};

export default Success;
