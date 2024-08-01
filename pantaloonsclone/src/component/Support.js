import React from "react";
import "../component-css/support.css";
import supportImage from "../collection-products/Supportimage";
const Support = () => {
  return (
    <div className="support pt-5 pb-5">
      <div className="container">
        <div className="row">
          {supportImage.map((item) => (
            <div className="col col-2 support-block text-center" key={item.id}>
              <img src={item.image} alt="gridiamge" />
              <p className="description text-uppercase fw-bolder mt-3 mb-0">
                easy return
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Support;
