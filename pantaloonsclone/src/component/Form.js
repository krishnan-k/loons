import React, { useState } from "react";
import "../component-css/account.css";

export const Account = () => {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: ''
  });
  const [error, setErrors] = useState({});

  // Validate individual fields
  const validateField = (name, value) => {
    let errorMessage = '';
    
    if (name === 'userName') {
      if (!value) errorMessage = 'User name is required';
    } else if (name === 'email') {
      if (!value) {
        errorMessage = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        errorMessage = 'Email is invalid';
      }
    } else if (name === 'password') {
      if (!value) {
        errorMessage = 'Password is required';
      } else if (value.length < 8) {
        errorMessage = 'Password must be at least 8 characters';
      } else if (!/[A-Z]/.test(value) || !/[a-z]/.test(value) || !/[!@#$%^&*()_+[\]{}|;:'",.<>?]/.test(value)) {
        errorMessage = 'Password must include uppercase, lowercase, and special characters';
      }
    }
    
    return errorMessage;
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
      [name]: validateField(name, value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      userName: validateField('userName', formData.userName),
      email: validateField('email', formData.email),
      password: validateField('password', formData.password)
    };

    if (Object.values(newErrors).every(error => !error)) {
      console.log('Form data is valid:', formData);
      alert('Form is valid');
    } else {
      setErrors(newErrors);
      alert('Form is invalid');
      console.log('Form data is invalid:', formData);
    }
  };

  return (
    <div className="container-fluid account">
      <div className="account-section">
        <div className="account-content">
          <p className="description m-0">
            Pantaloons <b>Sale</b> is here! Get Upto <b>60% Off</b> +
            <b> Extra <br /> Rs.1500 Off</b>* on order value of Rs.5999, Code: SALE1500
          </p>
          <div className="heading-content">
            <h3 className="heading pt-3 pb-3 m-0">Login/Register to wishlist</h3>
            <form onSubmit={handleSubmit}>
              <div className="account-settings pt-3 pb-3">
                <div className="account-details acc-user">
                  <label className="text-start form-label text-capitalize">User name <span className="mandatory_field">*</span> </label>
                  <input
                    className="accout-input form-control text-capitalize text-start"
                    type="text"
                    name="userName"
                    value={formData.userName}
                    onChange={handleChange}
                    placeholder="Enter your user name"
                  />
                  {error.userName && <p className="error text-start">{error.userName}</p>}
                </div>
                <div className="account-details acc-mail">
                  <label className="text-start form-label text-capitalize">Mail id <span className="mandatory_field">*</span> </label>
                  <input
                    className="accout-input form-control text-start"
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your mail id"
                  />
                  {error.email && <p className="error text-start">{error.email}</p>}
                </div>
                <div className="account-details acc-password">
                  <label className="text-start form-label text-capitalize">Password <span className="mandatory_field">*</span> </label>
                  <input
                    className="accout-input form-control text-capitalize text-start"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                  />
                  {error.password && <p className="error text-start">{error.password}</p>}
                </div>
                <button type="submit" className="btn text-uppercase mt-3">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
