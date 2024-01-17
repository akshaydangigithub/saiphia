import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="d-flex align-items-center justify-content-between px-5 py-3">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <h5>Menu</h5>
    </nav>
  );
};

export default Navbar;
