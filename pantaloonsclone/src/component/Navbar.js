import React, { useState } from "react";
import "../component-css/navbar.css";
import logo from "../image/logo_pantaloons.svg";
import { Link } from "react-router-dom";
import { IoBagHandleOutline, IoSearch } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { useSelector } from "react-redux";
import { MdDarkMode } from "react-icons/md";
import { login } from '../pages/Authentication'
export const Navbar = () => {

  const headerNavigation = document.querySelector(".navbar_section");
  if (headerNavigation) {
    const navigationContent =
      headerNavigation.querySelector(".cart-icon .cart");
    navigationContent.addEventListener("click", () => {
      navigationContent.classList.add("active");
    });
  }
  const product = useSelector((state) => state.cart.cartItems);
  const totalQuantity = product.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalAmout = product.reduce(
    (total, item) => total + item.productPrice * item.quantity,
    0
  );
  const [isLoggedIn, setLoggedIn] = useState((localStorage.getItem('token') ? true : false));
  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
  }
  return (
    <div id="navbarsection" className="navbar_section">
      <nav className="navbar navbar-expand-lg container">
        <div className="container-fluid p-0">
          <Link className="navbar-brand" to="/">
            <img src={logo} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navigation navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-uppercase ms-3 me-3 fw-normal text-white"
                  aria-current="page"
                  to="women"
                >
                  women
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-uppercase ms-3 me-3 fw-normal text-white"
                  to="men"
                >
                  men
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-uppercase ms-3 me-3 fw-normal text-white"
                  to="kids"
                >
                  kids
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-uppercase ms-3 me-3 fw-normal text-white"
                  to="/"
                >
                  home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-uppercase ms-3 me-3 fw-normal text-white"
                  to="brand"
                >
                  brands
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-uppercase ms-3 me-3 fw-normal text-white"
                  to="beauty"
                >
                  beauty
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-uppercase ms-3 me-3 fw-normal text-white"
                  to="admindashboard"
                >
                  admin
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="right_content">
          <Link to='search' className="search-page">
            <IoSearch />
          </Link>

          <div className="account-icon ms-4 me-0">
            <FiUser />
            {(isLoggedIn) ?
              (<div
                className="nav-link text-uppercase  ms-2 me-2 fw-normal"
                onClick={handleLogout}
              >
                logout
              </div>) : (<div className="account_login">
                <Link
                  className="nav-link text-uppercase  ms-2 me-2 fw-normal"
                  to="/login"
                >
                  login
                </Link>
              </div>)
            }
          </div>
          <div className="cart-icon ms-4 me-0">
            <div className="cart_sec">
              <Link to="cart" className="cart">
                <IoBagHandleOutline />
                <div className="product-count">{totalQuantity}</div>
              </Link>

              <div className="cart_total ms-2">
                <p className="text-white description m-0 text-capitalize">
                  cart total
                </p>
                <p className="text-white m-0">₹ {totalAmout}</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
