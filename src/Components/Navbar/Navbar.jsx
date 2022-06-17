import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";

const Menu = () => {
  return (
    <ul className="navbar__list">
      <li className="navbar__item">
        <a href="/" className="navbar__link active">
          HOME
        </a>
      </li>
      <li className="navbar__item">
        <a href="/" className="navbar__link">
          VISION
        </a>
      </li>
      <li className="navbar__item">
        <a href="/" className="navbar__link">
          ROADMAP
        </a>
      </li>
      <li className="navbar__item">
        <a href="/whitepaper" className="navbar__link">
          WHITEPAPER
        </a>
      </li>
    </ul>
  );
};

const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar__logo_container">
        <h3 onClick={handleClick}>DIMENSION</h3>
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
