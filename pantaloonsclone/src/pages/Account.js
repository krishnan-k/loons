import React from "react";
import "../component-css/account.css";
export const Account = () => {
  return (
    <div className="container-fluid account">
      <div className="account-section">
        <div className="account-content">
          <p className="description m-0">
            Pantaloons <b>Sale</b> is here! Get Upto <b>60% Off</b> + 
            <b> Extra <br/> Rs.1500 Off</b>* on order value of Rs.5999, Code: SALE1500
          </p>
          <div className="heading-content">
          <h3 className="heading pt-3 pb-3 m-0">Login/Register to wishlist</h3>
          <form>
            <div className="account-settings pt-3 pb-3">
              <label for="number" className="form-label text-capitalize">enter mobile number <span class="mandatory_field">*</span> </label>
              <input id="mobile_text" className="accout-input form-control text-capitalize text-center" type="text" placeholder="mobile number"></input>
              <button type="button" className="btn text-uppercase mt-3">get otp</button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};
