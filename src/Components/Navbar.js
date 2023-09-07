import React from "react";
import Logo from "../Assets/Logo.svg";
const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
