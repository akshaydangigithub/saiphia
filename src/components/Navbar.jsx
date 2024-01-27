import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="d-flex align-items-center justify-content-between px-5 py-3">
      <div className="logo">
        <img src={logo} alt="" />
        {/* <h3 className="fw-bold">LOGO</h3> */}
      </div>
      <h6 className="fw-bold py-1 px-3">Menu</h6>
    </nav>
  );
};

export default Navbar;
