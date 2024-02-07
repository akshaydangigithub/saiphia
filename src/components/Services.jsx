import React from 'react'
import { TbSolarElectricity } from 'react-icons/tb'
import {
  GiDeliveryDrone,
  GiEarthAfricaEurope,
  GiIronCross,
  GiMining
} from 'react-icons/gi'
import { MdOutlineEngineering, MdOutlineFlight } from 'react-icons/md'
import { GrCloudSoftware } from 'react-icons/gr'
import { FaHands, FaPeopleCarry } from 'react-icons/fa'
import { FaHandshake } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import VerificationIcon from '../assets/VerificationIcon'
import NoMoreIcon from '../assets/NoMoreIcon'

const Services = () => {
  return (
    <div className='services py-5'>
      <div className='row pt-3' style={{ paddingLeft: '5vmax' }}>
      <center>
            <h5>
              <VerificationIcon color='#17A134' marginTop='-30px' />
              <b>
              &nbsp; Innovation, Development, Environment are the <br /> focus areas of the
              Saiphia Group &nbsp;
              </b>
              <NoMoreIcon color='#17A134' className='nomoreicon' />
            </h5>
          </center>
        <div className='col services_head position-relative mt-5'>
          <h5 className='fw-semibold m-0'  style={{color:'#17a134'}}>Our Services :-</h5>
          <h2 className='fw-bold mt-2 d-flex'>Delivering <div style={{color:'#17a134'}}>&nbsp; satisfaction</div> , guaranteed service.</h2>
        </div>
      </div>

      <div className='row px-5 mt-5 pb-5'>
        <div className='col-md-3 mt-md-0'>
          <motion.div
            className='d-flex services_div position-relative align-items-center gap-4 bg-white shadow py-3 px-3 rounded-4'
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.1 }}
          >
            <div class='effectcardno1'></div>
            <div class='effectcardno2'></div>
            <div class='effectcardno3'></div>
            <div class='effectcardno4'></div>
           <div  className='service_icon d-flex align-items-center justify-content-center rounded-2' style={{background:'#17a134'}}>
              <TbSolarElectricity className='fs-2' />
            </div>
            <h6 className='fw-semibold m-0'>Power</h6>
          </motion.div>
        </div>
        <div className='col-md-3 mt-md-0 mt-4'>
          <motion.div
            className='d-flex services_div position-relative align-items-center gap-4 bg-white shadow py-3 px-3 rounded-4'
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.12 }}
          >
            <div class='effectcardno1'></div>
            <div class='effectcardno2'></div>
            <div class='effectcardno3'></div>
            <div class='effectcardno4'></div>
           <div  className='service_icon d-flex align-items-center justify-content-center rounded-2' style={{background:'#17a134'}}>
              <GiMining className='fs-2' />
            </div>
            <h6 className='fw-semibold m-0'>Mining</h6>
          </motion.div>
        </div>

        <div className='col-md-3 mt-md-0 mt-4'>
          <motion.div
            className='d-flex services_div position-relative align-items-center gap-4 bg-white shadow py-3 px-3 rounded-4'
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.14 }}
          >
            <div class='effectcardno1'></div>
            <div class='effectcardno2'></div>
            <div class='effectcardno3'></div>
            <div class='effectcardno4'></div>
           <div  className='service_icon d-flex align-items-center justify-content-center rounded-2' style={{background:'#17a134'}}>
              <GiMining className='fs-2' />
            </div>
            <h6 className='fw-semibold m-0'>Cement </h6>
          </motion.div>
        </div>

        <div className='col-md-3 mt-md-0 mt-4'>
          <motion.div
            className='d-flex services_div position-relative align-items-center gap-4 bg-white shadow py-3 px-3 rounded-4'
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.16 }}
          >
            <div class='effectcardno1'></div>
            <div class='effectcardno2'></div>
            <div class='effectcardno3'></div>
            <div class='effectcardno4'></div>
           <div  className='service_icon d-flex align-items-center justify-content-center rounded-2' style={{background:'#17a134'}}>
              <GiMining className='fs-2' />
            </div>
            <h6 className='fw-semibold m-0'>Casting </h6>
          </motion.div>
        </div>

        <div className='col-md-3 mt-4'>
          <motion.div
            className='d-flex services_div position-relative align-items-center gap-4 bg-white shadow py-3 px-3 rounded-4'
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.18 }}
          >
            <div class='effectcardno1'></div>
            <div class='effectcardno2'></div>
            <div class='effectcardno3'></div>
            <div class='effectcardno4'></div>
            <div  className='service_icon d-flex align-items-center justify-content-center rounded-2' style={{background:'#17a134'}}>
              <GiIronCross className='fs-2' />
            </div>
            <h6 className='fw-semibold m-0'>Iron and Steel</h6>
          </motion.div>
        </div>

        <div className='col-md-3 mt-4'>
          <motion.div
            className='d-flex services_div  position-relative align-items-center gap-4 bg-white  shadow py-3 px-3 rounded-4' 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.2 }}
          >
            <div class='effectcardno1'></div>
            <div class='effectcardno2'></div>
            <div class='effectcardno3'></div>
            <div class='effectcardno4'></div>
            <div className='service_icon d-flex align-items-center justify-content-center rounded-2' style={{background:'#17a134'}}>
              <MdOutlineFlight className='fs-2' />
            </div>
            <h6 className='fw-semibold m-0'>Aerospace </h6>
          </motion.div>
        </div>

        <div className='col-md-3 mt-4'>
          <motion.div
            className='d-flex services_div position-relative align-items-center gap-4 bg-white shadow py-3 px-3 rounded-4'
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.22 }}
          >
            <div class='effectcardno1'></div>
            <div class='effectcardno2'></div>
            <div class='effectcardno3'></div>
            <div class='effectcardno4'></div>
           <div  className='service_icon d-flex align-items-center justify-content-center rounded-2' style={{background:'#17a134'}}>
              <GrCloudSoftware className='fs-2' />
            </div>
            <h6 className='fw-semibold m-0'>Software </h6>
          </motion.div>
        </div>

        <div className='col-md-3 mt-4'>
          <motion.div
            className='d-flex services_div position-relative align-items-center gap-4 bg-white shadow py-3 px-3 rounded-4'
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.24 }}
          >
            <div class='effectcardno1'></div>
            <div class='effectcardno2'></div>
            <div class='effectcardno3'></div>
            <div class='effectcardno4'></div>
           <div  className='service_icon d-flex align-items-center justify-content-center rounded-2' style={{background:'#17a134'}}>
              <FaPeopleCarry className='fs-2' />
            </div>
            <h6 className='fw-semibold m-0'>Training and Capacity Building</h6>
          </motion.div>
        </div>

        <div className='col-md-3 mt-4'>
          <motion.div
            className='d-flex services_div position-relative align-items-center gap-4 bg-white shadow py-3 px-3 rounded-4'
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.26 }}
          >
            <div class='effectcardno1'></div>
            <div class='effectcardno2'></div>
            <div class='effectcardno3'></div>
            <div class='effectcardno4'></div>
           <div  className='service_icon d-flex align-items-center justify-content-center rounded-2' style={{background:'#17a134'}}>
              <FaHandshake className='fs-2' />
            </div>
            <h6 className='fw-semibold m-0'>Consultancy </h6>
          </motion.div>
        </div>

        <div className='col-md-3 mt-4'>
          <motion.div
            className='d-flex services_div position-relative align-items-center gap-4 bg-white shadow py-3 px-3 rounded-4'
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.28 }}
          >
            <div class='effectcardno1'></div>
            <div class='effectcardno2'></div>
            <div class='effectcardno3'></div>
            <div class='effectcardno4'></div>
           <div  className='service_icon d-flex align-items-center justify-content-center rounded-2' style={{background:'#17a134'}}>
              <GiEarthAfricaEurope className='fs-2' />
            </div>
            <h6 className='fw-semibold m-0'>Environment </h6>
          </motion.div>
        </div>

        <div className='col-md-3 mt-4'>
          <motion.div
            className='d-flex services_div position-relative align-items-center gap-4 bg-white shadow py-3 px-3 rounded-4'
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.3 }}
          >
            <div class='effectcardno1'></div>
            <div class='effectcardno2'></div>
            <div class='effectcardno3'></div>
            <div class='effectcardno4'></div>
           <div  className='service_icon d-flex align-items-center justify-content-center rounded-2' style={{background:'#17a134'}}>
              <MdOutlineEngineering className='fs-2' />
            </div>
            <h6 className='fw-semibold m-0'>Engineering Services </h6>
          </motion.div>
        </div>

        <div className='col-md-3 mt-4'>
          <motion.div
            className='d-flex services_div position-relative align-items-center gap-4 bg-white shadow py-3 px-3 rounded-4'
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.32 }}
          >
            <div class='effectcardno1'></div>
            <div class='effectcardno2'></div>
            <div class='effectcardno3'></div>
            <div class='effectcardno4'></div>
           <div  className='service_icon d-flex align-items-center justify-content-center rounded-2' style={{background:'#17a134'}}>
              <GiDeliveryDrone className='fs-2' />
            </div>
            <h6 className='fw-semibold m-0'>Drones </h6>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Services
