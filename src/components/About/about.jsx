import React from "react";
import "./about.css";
import aboutImg from "../../images/about.png";

function About() {
  return (
    <section className="about" id="about">
      <div className="container section--padding">
        <div className="row justify-content-evenly align-items-center">
          <div className="col-lg-5 col-md-6 mb-md-0 mb-5 text-md-start text-center">
            <span className="section__title">About us</span>
            <h2 className="section__subtitle">
              PEAQOCK is a member driven network
            </h2>
            <p className="section__description">
              The purpose of TRADAR Club is to be a network of international
              businesses and executives dedicated to transforming Africa through
              the vehicles of trade and investment. TRADAR Club Members are
              global industry leaders, African corporates, intergovernmental
              organisations, policy makers and other influential stakeholders
              committed to the shared objective of unlocking growth and
              development for the African continent
            </p>
            <button className="btn about--btn btn--rounded">
            learn more
            </button>
          </div>
          <div className="col-lg-4 col-md-6 col-10">
            <img src={aboutImg} className="img-fluid" alt="our services" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
