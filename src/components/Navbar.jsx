import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div id="navbar">
      <img className="nameLogo" src="/images/nameLogo.png" alt="" />
      <div id="navbarButtons">
        {/* <button>About</button>
      <button>Portfolio</button> */}
        <div className="btnWrapper">
          {/* <button>Resume</button>
          <button>Contact Me</button> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
