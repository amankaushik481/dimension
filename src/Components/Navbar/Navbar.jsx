import React from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo_container">
        <h3>Dimension</h3>
      </div>
      <div className="navbar__menu_container">
        <div className="navbar__close">
          <i className="bx bx-x"></i>
        </div>

        <ul className="navbar__list">
          <li className="navbar__item">
            <a href="#home" className="navbar__link active">
              Home
            </a>
          </li>
          <li className="navbar__item">
            <a href="#about" className="navbar__link">
              About
            </a>
          </li>
          <li className="navbar__item">
            <a href="#skills" className="navbar__link">
              Blog
            </a>
          </li>
          <li className="navbar__item">
            <a href="#contact" className="navbar__link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
