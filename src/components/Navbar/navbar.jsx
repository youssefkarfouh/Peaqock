import React , {useState} from "react";
import "./navbar.css";
import logoIcon from "../../images/logo.png";
import userIcon from "../../images/user.png";
import smsIcon from "../../images/sms.png";
import {IoMenuOutline , IoCloseOutline} from "react-icons/io5";

function Navbar() {
  const [colorChange, setColorchange] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const closeIcon = <IoCloseOutline onClick={()=>setIsOpen(!isOpen)} className="icon navbar__icon"/>
  const openIcon = <IoMenuOutline onClick={()=>setIsOpen(!isOpen)} className="icon navbar__icon"/>

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${colorChange?`scrolled`:""} `}>
      <div className="container">
        <a className="navbar__logo" href="#">
          <img src={logoIcon} alt="logo" />
        </a>
        <button
          className="navbar-toggler navbar__toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {isOpen ? closeIcon : openIcon}
        </button>
        <div
          className="collapse navbar-collapse navbar__links"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto me-0 me-lg-4 mb-2 mb-lg-0">
            <li className="navbar__item">
              <a className="navbar__link"  href="#about">
                about
              </a>
            </li>
            <li className="navbar__item">
              <a className="navbar__link"  href="#membership">
                membership
              </a>
            </li>
            <li className="navbar__item">
              <a className="navbar__link"  href="#">
                news & events
              </a>
            </li>
            <li className="navbar__item">
              <a className="navbar__link"  href="#contact">
                contact us
              </a>
            </li>
          </ul>
          <button className="navbar__btn">
            <img src={smsIcon} className="me-2" alt="sms icon" />
            Let's talk
          </button>
          <button className="navbar__btn ms-lg-0 ms-2">
            <img src={userIcon} alt="user icon" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
