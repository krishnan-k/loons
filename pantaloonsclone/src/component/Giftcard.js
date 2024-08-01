import React from "react";
import "../component-css/giftcard.css";
import giftcard from "../image/giftcard.png";
const Giftcard = () => {
  const giftCardImage = "gift-card-image";
  return (
    <div className="container giftcard mt-5 mb-5">
      <div className="giftcard-content-section">
        <div className="greencard-content one">
          <img src={giftcard} className="green-card-image" alt="green-card" />
          <h4 className="heading pt-5 mb-0">
            Pantaloons Gift Card <br />
            With Our loyalty program
          </h4>
        </div>
        <div className="greencard-content two">
          <h4 className="heading mb-3">
            Style your change with India’s <br /> most rewarding program
          </h4>
          <p className="description mb-3">
            Give your loved ones the joy to choose
          </p>
          <a
            href="#"
            className="button mb-4 text-uppercase fw-bolder text-decoration-none"
          >
            explore now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Giftcard;
