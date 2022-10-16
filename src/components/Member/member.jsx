import React from "react";
import "./member.css";
import { ImArrowRight2 } from "react-icons/im";
import MemberItem from "./memberItem";
import iconBasic from "../../images/m__basic_icon.png";
import iconStandard from "../../images/m__standard_icon.png";
import iconGold from "../../images/m__gold_icon.png";
import iconPlatinum from "../../images/m__platinum_icon.png";

function Member() {
  
  return (
    <section className="member" id="membership">
      <div className="container section--padding">
        <div className="row justify-content-evenly">
          <div className="col-lg-7 col-md-8 col-12 mb-md-0 mb-5 text-center">
            <span className="section__title">membership</span>
            <h2 className="section__subtitle">
            PEAQOCK Membership Packages
            </h2>
            <p className="section__description">
              This page will highlight the different membership packages and the
              benefits and costs of each package. The initial plans to be
              configured are as presented below. The table should be
              configurable to update the sections with different feature,
              benefits and costs from time to time.
            </p>
            <button className="btn member--btn btn--rounded">
              PACKAGES DETAILS <ImArrowRight2 className="icon ms-2"/>
            </button>
          </div>
        </div>
        <div className="row justify-content-evenly">
          <MemberItem
            icon={iconBasic}
            title={"Basic"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem lectus pulvinar massa quam mollis at luctus nunc"
            }
            price="Free"
            color={"primary"}
          />
          <MemberItem
            icon={iconGold}
            title={"Gold"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem lectus pulvinar massa quam mollis at luctus nunc"
            }
            price="$ 2.500"
            color={"yellow"}
          />
          <MemberItem
            icon={iconStandard}
            title={"Standard"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem lectus pulvinar massa quam mollis at luctus nunc"
            }
            price="$ 1.500"
            color={"blue"}
          />
          <MemberItem
            icon={iconPlatinum}
            title={"Platinum"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem lectus pulvinar massa quam mollis at luctus nunc"
            }
            price="$ 5.000"
            color={"violet"}
          />
        </div>
      </div>
    </section>
  );
}

export default Member;
