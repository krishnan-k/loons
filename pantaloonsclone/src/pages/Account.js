import React, { useState } from "react";
import "../component-css/account.css";
export const Account = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [error, setErrors] = useState({});
  const formValidation = (name, value) => {
    let newErrors = "";
    if (name === "userName") {
      if (!value) newErrors = "User name is required";
    } else if (name === "email") {
      if (!value) {
        newErrors = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        newErrors = "Email is invalid";
      }
    } else if (name === "password") {
      if (!value) {
        newErrors = "Password is required";
      } else if (value.length < 8) {
        newErrors = "Password must be at least 8 characters";
      } else if (
        !/[A-Z]/.test(value) ||
        !/[a-z]/.test(value) ||
        !/[!@#$%^&*()_+[\]{}|;:'",.<>?]/.test(value)
      ) {
        newErrors =
          "Password must include uppercase, lowercase, and special characters";
      }
    }
    return newErrors;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Validate the field that changed
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: formValidation(name, value)
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errrorMessage = {
      userName: formValidation('userName', formData.userName),
      email: formValidation('email', formData.email),
      password: formValidation('password', formData.password)
    }
    //const validationErrors = formValidation();
    if (Object.values(errrorMessage).every(error => !error)) {
      console.log("Form data is valid:", formData);
      alert("Form is valid");
    } else {
      setErrors(errrorMessage);
      alert("Form is Invalid");
      console.log("Form data is Invalid:", formData);
    }
  };
  return (
    <div className="container-fluid account">
      <div className="account-section">
        <div className="account-content">
          <p className="description m-0">
            Pantaloons <b>Sale</b> is here! Get Upto <b>60% Off</b> +
            <b>
              {" "}
              Extra <br /> Rs.1500 Off
            </b>
            * on order value of Rs.5999, Code: SALE1500
          </p>
          <div className="heading-content">
            <h3 className="heading pt-3 pb-3 m-0">
              Register to wishlist
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="account-settings pt-3 pb-3">
                <div className="account-details acc-user">
                  <label className="text-start form-label text-capitalize">
                    User name <span class="mandatory_field">*</span>{" "}
                  </label>
                  <input
                    className="accout-input form-control text-capitalize text-start"
                    type="text"
                    name="userName"
                    value={formData.userName}
                    onChange={handleChange}
                    placeholder="Enter your user name"
                  ></input>
                  {error.userName && (
                    <p className="error text-start">{error.userName}</p>
                  )}
                </div>
                <div className="account-details acc-mail">
                  <label className="text-start form-label text-capitalize">
                    Mail id <span class="mandatory_field">*</span>{" "}
                  </label>
                  <input
                    className="accout-input form-control text-start"
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your mail id"
                  ></input>
                  {error.email && (
                    <p className="error text-start">{error.email}</p>
                  )}
                </div>
                <div className="account-details acc-password">
                  <label className="text-start form-label text-capitalize">
                    Password <span class="mandatory_field">*</span>{" "}
                  </label>
                  <input
                    className="accout-input form-control text-capitalize text-start"
                    type="text"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                  ></input>
                  {error.password && (
                    <p className="error text-start">{error.password}</p>
                  )}
                </div>
<<<<<<< HEAD
                <button type="submit" className="btn text-uppercase mt-3">
                  submit
                </button>
=======
                <button type="submit" className="btn text-uppercase mt-3">submit</button>
>>>>>>> 9ef09ae48e24cce72002a8650ca19b02fa2fa527
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
