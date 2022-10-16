import React from "react";
import './newsletter.css'; 

import { ImArrowRight2 } from "react-icons/im";


function Newsletter() {
  return (
    <section className="newsltter my-5">
      <div className="container">
        <div className="row justify-content-evenly">
          <div className="col-lg-3 mb-lg-0 mb-5">
            <h2 className="section__subtitle border--bottom text-uppercase">newsletter</h2>
          </div>

          <div className="col-lg-5">
            <form action="">
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control newsletter__input"
                  placeholder="Your email adress"
                  aria-label="Your email adress"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn newsletter--btn btn--rounded btn--primary"
                  type="button"
                  id="button-addon2"
                >
                  Subscribe
                  <ImArrowRight2 className="newsletter__icon ms-3"/>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
