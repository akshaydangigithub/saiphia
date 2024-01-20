import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { motion } from "framer-motion";

const About = () => {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);

  const handleActive1 = () => {
    setActive1(!active1);
    setActive2(false);
    setActive3(false);
  };

  const handleActive2 = () => {
    setActive2(!active2);
    setActive1(false);
    setActive3(false);
  };

  const handleActive3 = () => {
    setActive3(!active3);
    setActive1(false);
    setActive2(false);
  };
  return (
    <div className="about position-relative">
      <div className="edge-top-figure-1"></div>

      <div className="about-content">
        <motion.h5
          className="m-0 mb-3 text-uppercase "
          initial={{ opacity: 0, scale: 0.5, y: -100 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, type: "spring" }}
        >
          About US
        </motion.h5>

        <motion.h3

          initial={{ opacity: 0, scale: 0.5, y: 100 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, type: "spring" }}

        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
          repellendus, eius velit itaque, debitis amet officia eum eaque sint
          quas ipsum voluptatem ratione dolorum cumque quidem soluta dignissimos
          aperiam assumenda aliquam facere molestiae deserunt doloribus.
          Reprehenderit repellat, cupiditate sunt architecto est qui in
          reiciendis nisi, exercitationem suscipit facilis velit animi?
        </motion.h3>

        <hr className="m-0 mt-5" />
        <div
          className={`about_faq mt-3 ${active1 === true ? "active" : ""}`}
          onClick={() => setActive1(handleActive1)}
        >
          <div className="about_faq_inner d-flex align-items-center justify-content-between">
            <h5 className="m-0">OUR MISSION</h5>
            {active1 === true ? (
              <FaMinus className="fs-4" />
            ) : (
              <FaPlus className="fs-4" />
            )}
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
            aliquam adipisci sequi earum, suscipit maxime nesciunt eius.
            Assumenda, fugiat magnam deserunt tenetur tempore odio cupiditate
            molestias consectetur veritatis, placeat consequuntur esse
            architecto non itaque suscipit molestiae vel excepturi possimus?
            Voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quaerat eaque repellat commodi harum cumque blanditiis, saepe
            quis omnis doloribus debitis eum magni minima nam suscipit maiores
            odit. Eum laudantium officiis earum optio cupiditate aspernatur
            architecto harum, repellat incidunt placeat consectetur maxime
            eligendi fugit, nostrum quidem dolorum iure velit ea magnam.
          </p>
        </div>
        <hr />
        <div
          className={`about_faq mt-3 ${active2 === true ? "active" : ""}`}
          onClick={() => setActive2(handleActive2)}
        >
          <div className="about_faq_inner d-flex align-items-center justify-content-between">
            <h5 className="m-0">OUR STORY</h5>
            {active2 === true ? (
              <FaMinus className="fs-4" />
            ) : (
              <FaPlus className="fs-4" />
            )}
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
            aliquam adipisci sequi earum, suscipit maxime nesciunt eius.
            Assumenda, fugiat magnam deserunt tenetur tempore odio cupiditate
            molestias consectetur veritatis, placeat consequuntur esse
            architecto non itaque suscipit molestiae vel excepturi possimus?
            Voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quaerat eaque repellat commodi harum cumque blanditiis, saepe
            quis omnis doloribus debitis eum magni minima nam suscipit maiores
            odit. Eum laudantium officiis earum optio cupiditate aspernatur
            architecto harum, repellat incidunt placeat consectetur maxime
            eligendi fugit, nostrum quidem dolorum iure velit ea magnam.
          </p>
        </div>
        <hr />
        <div
          className={`about_faq mt-3 ${active3 === true ? "active" : ""}`}
          onClick={() => setActive3(handleActive3)}
        >
          <div className="about_faq_inner d-flex align-items-center justify-content-between">
            <h5 className="m-0">OUR SUCCESS</h5>
            {active3 === true ? (
              <FaMinus className="fs-4" />
            ) : (
              <FaPlus className="fs-4" />
            )}
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
            aliquam adipisci sequi earum, suscipit maxime nesciunt eius.
            Assumenda, fugiat magnam deserunt tenetur tempore odio cupiditate
            molestias consectetur veritatis, placeat consequuntur esse
            architecto non itaque suscipit molestiae vel excepturi possimus?
            Voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quaerat eaque repellat commodi harum cumque blanditiis, saepe
            quis omnis doloribus debitis eum magni minima nam suscipit maiores
            odit. Eum laudantium officiis earum optio cupiditate aspernatur
            architecto harum, repellat incidunt placeat consectetur maxime
            eligendi fugit, nostrum quidem dolorum iure velit ea magnam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
