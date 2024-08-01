import React from "react";
import promobanner from "../image/promobanner.png";
import "../component-css/promobanner.css";
const Promobanner = () => {
  return (
    <div className="container mt-0 mb-5  pt-0 pb-0 promobanner">
      <img src={promobanner} alt="promobanner" />
    </div>
  );
};

export default Promobanner;
