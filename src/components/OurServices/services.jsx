import React from "react";
import "./services.css";
import servicesImg from "../../images/services.png"; 

function Services() {
  return (
    <section className="services" id="services">
      <div className="container section--padding">
        <div className="row justify-content-evenly align-items-center">
          <div className="col-lg-5 col-md-5 mb-md-0 mb-5 text-md-start text-center">
            <span className="section__title">OUR SERVICES</span>
            <h2 className="section__subtitle">
              <span>Trade</span> Simple,
            </h2>
            <p className="section__description">
              Discover a world of trade opportunities in one place with detailed
              information about imports, market dynamics, tariffs, regulatory
              requirements, potential buyers and more.
            </p>
            <button className="btn services--btn btn--rounded">Discover Now</button>
          </div>
          <div className="col-lg-4  col-md-4 col-sm-6 col-8">
            <img src={servicesImg} className="img-fluid" alt="our services" /> 
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
