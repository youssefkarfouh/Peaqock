import React from "react";
import "./footer.css";

import scrollTop from "../../images/scrollTop__icon.png";
import africaImg from "../../images/africa__img.png";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer py-5">

        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5 mb-4 mb-lg-0 footer__contact">
              <h3 className="footer__title">Contact us</h3>
              <p className="footer__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Condimentum lectus nunc, sagittis, eros.
              </p>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="footer__links">
                    <FaMapMarkerAlt className="icon footer__icon" /> Imm le Zenith II, Lotissement Attaoufik,
                    Route de Nouacer, Sidi Maarouf, Casablanca, 20640, Maroc
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__links">
                    <FaEnvelope className="icon footer__icon" />
                    info@peaqock.com
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__links">
                    <FaPhoneAlt className="icon footer__icon" /> +20-2-24564100/1/2/3
                  </a>
                </li>

                <li>
                  <a href="#" className="footer__links">
                    <FaPhoneAlt className="icon footer__icon" /> +20-2-24515201/2
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 mb-4 mb-lg-0 footer__about">
              <h3 className="footer__title">About Peaqock</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="footer__links">
                    Privacy Statement
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__links">
                    Term and condition
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__links">
                    Accessibility
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__links">
                    F.A.Q.
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__social">
                    <FaFacebookF className="icon footer__icon" />
                  </a>
                  <a href="#" className="footer__social">
                    <FaYoutube className="icon footer__icon" />
                  </a>
                  <a href="#" className="footer__social">
                    <FaTwitter className="icon footer__icon" />
                  </a>
                  <a href="#" className="footer__social">
                    <FaLinkedinIn className="icon footer__icon" />
                  </a>
                  <a href="#" className="footer__social">
                    <FaInstagram className="icon footer__icon" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 mb-4 mb-lg-0">
              <h3 className="footer__title">Locations</h3>
              <div className="footer__block__img">
                <img src={africaImg} alt="africa" />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="d-flex">
                <button className="btn btn__footer btn--rounded">Support</button>
                <a href="#">
                  <img src={scrollTop} alt="" />
                </a>
              </div>
            </div>
          </div>
          <p className="footer__copyright text-center mt-5">Copyright © 2022 . All Rights Reserved.</p>
        </div>
      
    </footer>
  );
}

export default Footer;
