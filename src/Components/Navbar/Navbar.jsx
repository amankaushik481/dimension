import { React, useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";

const Menu = () => {
  return (
    <ul className="navbar__list">
      <li className="navbar__item">
        <a href="/" className="navbar__link active">
          Home
        </a>
      </li>
      <li className="navbar__item">
        <a href="/" className="navbar__link">
          Vision
        </a>
      </li>
      <li className="navbar__item">
        <a href="/" className="navbar__link">
          Roadmap
        </a>
      </li>
      <li className="navbar__item">
        <a href="/" className="navbar__link">
          Invest
        </a>
      </li>
    </ul>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar__logo_container">
        <h3>Dimension</h3>
      </div>
      <div className="navbar__menu_container">
        <Menu />
      </div>
      <div className="mobile__menu">
        {toggleMenu ? (
          <RiCloseLine
            className="closeline"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            className="closeline"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && <Menu />}
      </div>
    </div>
  );
};

export default Navbar;
