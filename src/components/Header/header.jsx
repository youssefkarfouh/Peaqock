import React from "react";
import Navbar from "../Navbar/navbar";
import "./header.css";
import playIcon from '../../images/play__video__icon.png';
import { ImArrowRight2, ImArrowLeft2 } from "react-icons/im";

function Header() {
  return (
  
      <header className="header" id="header">
        <div className="overlay"></div>
        <div className="header__hero">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-3 mb-lg-0 mb-4">
                <h1 className="header__title">Manage operations</h1>
                <div className="header__details">
                  <button className="btn header--btn btn--rounded">
                    Learn More
                  </button>
                  <div>
                    <img src={playIcon} className="header__play__icon" alt="playIcon" />
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="header__slider">
                  <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item carousel__item active">
                        <h4 className="carousel__nbr">01.</h4>
                        <p className="carousel__description">
                          Discover market access rules, check regulatory
                          compliance, latest customs duties, shipping
                          requirements and other documentation. Africa-wide,
                          harmonized, and aggregated trade and investment
                          regulatory information i.e., Foreign Trade Regulations
                          (e.g., Customs procedures, certification, licensing,
                          etc.) and Market Access (trade agreements, tariffs,
                          and non-tariff measures etc.)
                        </p>
                      </div>
                      <div className="carousel-item carousel__item">
                        <h4 className="carousel__nbr">02.</h4>
                        <p className="carousel__description">
                          Discover market access rules, check regulatory
                          compliance, latest customs duties, shipping
                          requirements and other documentation. Africa-wide,
                          harmonized, and aggregated trade and investment
                          regulatory information i.e., Foreign Trade Regulations
                          (e.g., Customs procedures, certification, licensing,
                          etc.) and Market Access (trade agreements, tariffs,
                          and non-tariff measures etc.)
                        </p>
                      </div>
                      <div className="carousel-item carousel__item">
                        <h4 className="carousel__nbr">03.</h4>
                        <p className="carousel__description">
                          Discover market access rules, check regulatory
                          compliance, latest customs duties, shipping
                          requirements and other documentation. Africa-wide,
                          harmonized, and aggregated trade and investment
                          regulatory information i.e., Foreign Trade Regulations
                          (e.g., Customs procedures, certification, licensing,
                          etc.) and Market Access (trade agreements, tariffs,
                          and non-tariff measures etc.)
                        </p>
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev carousel__nav"
                      type="button"
                      data-bs-target="#carouselExampleControls"
                      data-bs-slide="prev"
                    >
                      <ImArrowLeft2 />
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next carousel__nav"
                      type="button"
                      data-bs-target="#carouselExampleControls"
                      data-bs-slide="next"
                    >
                      <ImArrowRight2 />
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
  );
}

export default Header;
