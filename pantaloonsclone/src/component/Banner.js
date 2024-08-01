import React from "react";
import "../component-css/Banner.css";
import Bannerimage from "../image/Banner.jpeg";
const Banner = () => {
  return (
    <div>
      <div className="container">
        <div className="banner-image mt-5 mb-5">
          <img src={Bannerimage} alt="banner-image" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
