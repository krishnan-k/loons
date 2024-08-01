import React from "react";
import kidsBanner from '../image/kidsbanner.jpeg'
import "../component-css/promobanner.css";
const Kidsbanner = () => {
  return (
    <div className="container mt-4 mb-5  pt-2 pb-0 promobanner">
      <img src={kidsBanner} alt="promobanner" />
    </div>
  );
};

export default Kidsbanner;
