import React, { useState } from 'react'
import { motion } from 'framer-motion'
const About = () => {
  return (
    <div className='about position-relative  py-5'>
      <div className='row px-5 py-4'>
        <motion.div
          className='col-md-6 position-relative'
          initial={{ x: -200, opacity: 0, y: 100 }}
          whileInView={{ x: 0, opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className='about_img1 rounded-4 overflow-hidden'>
            <img
              src='https://images.unsplash.com/photo-1547895749-888a559fc2a7?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt=''
            />
          </div>
          <div className='about_img2'>
            <img
              src='https://images.unsplash.com/photo-1508188609340-e8068b599193?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt=''
            />
          </div>
        </motion.div>
        <motion.div
          className='col-md-6 mt-md-0 mt-4 position-relative d-flex flex-column justify-content-center'
          initial={{ x: 200, opacity: 0, y: 100 }}
          whileInView={{ x: 0, opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h5 className='fw-semibold' style={{color:'#17a134'}}>About Us :-</h5>
          <h2 className='fw-bold mb-4'>
            We are committed to give <br /> our best services
          </h2>

          <div className='subheading_sec bg-white shadow py-4 px-3 mb-4 position-relative'>
            <h5 className='m-0 fw-semibold' >
              Local operations team <span  style={{color:'#17a134'}}>on-call 24 hours a day</span> , available to work at
              a moment’s notice.
            </h5>
          </div>
          <p className='m-0 mb-4 fw-semibold'>
            Saiphia Group stands as a dynamic force in the global business
            landscape, experiencing rapid growth as a leading provider of
            Engineering and equipment manufacturing services in India and
            abroad. Our commitment to excellence is reflected across three
            distinct segments.
            <br />
            <br />
            Saiphia Casting specializes in ferrous and non-ferrous castings,
            employing advanced sand and lost wax technologies for precision
            components. The QC lab ensures the highest standards through
            comprehensive testing, and our heat treatment furnace offers
            carburizing capabilities.
            <br />
            <br />
            Saiphia Technology boasts cutting-edge German CNC machines,
            supported by 3D CMM, Surfcom, Contruracord, and Roundcom machines
            for quality assurance. Our CNC plasma and Oxy cutting machine,
            coupled with versatile welding facilities, underscores our
            dedication to innovation. Our in-house design and development
            department utilizes 5 Axes CAM software and Solid modeling for
            tailored solutions.
            <br />
            <br />
            With a focus on optimization and upgradation, Saiphia Group aligns
            with customer needs, delivering excellence through state-of-the-art
            machines, a well-equipped QC Lab, and a skilled team. Upholding
            values of the right attitude, honesty, and unwavering commitment, we
            continually set benchmarks in the industry
          </p>
          <div className='d-flex flex-md-row flex-column-reverse align-md-items-center gap-md-5'>
            <button className='border-0 py-2 px-4 mt-md-0 mt-3'>
              CONTACT US
            </button>
            <div>
              <p className='m-0 mb-1'>Get Free Estimate</p>
              <h6 className='fw-bold'>+91 87545 65465</h6>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
