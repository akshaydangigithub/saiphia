import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Cards from "../components/Cards";
import Services from "../components/Services";
import Success from "../components/Success";
import Certificate from "../components/Certificate";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import logo from "../assets/logo.png";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Success />
      <Certificate />
      <Cards />
      <Contact />
      <Footer />
      <FloatingWhatsApp
        phoneNumber="918435119144"
        accountName="SHAIPHIA"
        allowClickAway
        notification
        notificationDelay={60000}
        avatar={logo}
      />
    </>
  );
};

export default Homepage;
