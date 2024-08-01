import React from "react";
import "../component-css/greencard.css";
import greencard from '../image/greencard.png'
const Greencard = () => {
  return (
    <div className="container greencard mt-5 mb-5">
      <div className="greencard-content-section">
        <div className="greencard-content one">
          <h4 className="heading pb-5 mb-0">
            Get Green Listed with our Greencard <br/>loyalty program
          </h4>
          <img src={greencard} className="green-card-image" alt="green-card" />
        </div>
        <div className="greencard-content two">
          <h4 className="heading mb-3">
            Style your change with India’s <br/> most rewarding program
          </h4>
          <p className="description mb-3">
            Members of the loyalty program will enjoy unique benefits, including
            special offers, additional discounts, bonus points and customized
            product information
          </p>
          <a href="#" className="button mb-4 text-uppercase fw-bolder text-decoration-none">
            read now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Greencard;
