import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [navbarBackground, setNavbarBackground] = React.useState(false);

  if (window !== undefined) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setNavbarBackground(true);
      } else {
        setNavbarBackground(false);
      }
    });
  }

  return (
    <nav
      className={`d-flex align-items-center justify-content-between px-5 py-3 ${
        navbarBackground ? "bg-white " : ""
      }`}
    >
      <div className="logo">
        <img src={logo} alt="" />
        {/* <h3 className="fw-bold">LOGO</h3> */}
      </div>
      <h6 className="fw-bold py-1 px-3">Menu</h6>
    </nav>
  );
};

export default Navbar;
