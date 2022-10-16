import React from "react";

function MemberItem(props) {
  return (
    <div className="col-xl-5 mb-5">
      <div className="member__package">
        <div className="member__img__block">
          <img src={props.icon} className="member__img" alt={props.title} />
        </div>
        <div>
          <h3 className={`member__title title--${props.color}`}>{props.title}</h3>
          <p className="member__description">{props.description}</p>
        </div>
        <button className={`btn member--btn-package btn--${props.color}`}>
          View Details
          <span className="member__price">{props.price}</span>
        </button>
      </div>
    </div>
  );
}

export default MemberItem; 
