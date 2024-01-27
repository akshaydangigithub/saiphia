import React from "react";
import c1 from "../assets/cr1.jpg";
import c2 from "../assets/cr2.jpg";
import c3 from "../assets/cr3.jpg";
import { motion } from "framer-motion";

const Certificate = () => {
  return (
    <div className="certificate">
      <div className="px-5 py-5 d-md-flex align-items-center justify-content-between">
        <div className="mb-md-0 mb-4">
          <div className="certi position-relative overflow-hidden">
            <motion.img
              className=""
              src={c1}
              alt=""
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </div>
        </div>
        <div className="mb-md-0 mb-4">
          <div className="certi">
            <motion.img
              className=""
              src={c2}
              alt=""
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
          </div>
        </div>
        <div className="mb-md-0 mb-4">
          <div className="certi overflow-hidden">
            <motion.img
              src={c3}
              className="img3 mb-2"
              alt=""
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
