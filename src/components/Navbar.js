import React, { useState } from "react";
import home from "./../assests/home.png";
import face from "./../assests/face.png";
import { Link } from "react-router-dom";

import "./Navbar.css";
const Navbar = () => {


  return (
    <div>
      <div className="navbar">
        <Link to="#" className="menu-bar">
          <span />
          <span />
          <span />
        </Link>
      </div>
      <nav className="nav-menu active">
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="/home" className="menu-bar">
              <img src={home} alt="icon" />
              Home
            </Link>
          </li>
          <li className="navbar-toggle">
            <Link to="/about" className="menu-bar">
              <img src={face} alt="icon" />
              About Me
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
