import React from "react";
import "../component-css/navbar.css";
import logo from "../image/logo_pantaloons.svg";
import { Link } from "react-router-dom";
import { IoBagHandleOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { useSelector } from "react-redux";
export const Navbar = () => {
  const product = useSelector((state) => state.cart.cartItems);
  const headerNavigation = document.querySelector(".navbar_section");
  if (headerNavigation) {
    const navigationContent =
      headerNavigation.querySelector(".cart-icon .cart");
    navigationContent.addEventListener("click", () => {
      navigationContent.classList.add("active");
    });
  }
  const totalAmout = product.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
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
                <div className="megamenu-section">
                  <div className="megamenu-content container p-3">
                    <div className="mega-content">
                      <div className="mega-menu">
                        <h4 className="text-uppercase fw-bolder mb-3">women</h4>
                        <ul>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              westernwear
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              Ethnicwear
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              Sports & Activewear
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              Sleepwear & Lingerie
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              Bags,wallets & Clutches
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              Footwear
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              Shop By Occasion
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              Shop By Brand
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="mega-menu">
                        <h4 className="text-uppercase fw-bolder mb-3">men</h4>
                        <ul>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              Top Wear
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              Bottom Wear
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              Ethnic Wear
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              Accessories
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              Sports And Activewear
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              Footwear
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              Innerwear And Sleepwear
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              Bags And Backpacks
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              Shop By Occasion
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              Shop By Brand
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="mega-menu">
                        <h4 className="text-uppercase fw-bolder mb-3">kids</h4>
                        <ul>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              Boys Topwear
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              Baby Bottomwear
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              Girls Bottomwear
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              Girls Topwear
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              Boys Bottomwear
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              Boys Innerwear And Sleepwear
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              Girls Innerwear And Sleepwear
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              Baby Innerwear And Sleepwear
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              Girls Bags And Backpacks
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              Baby Footwear
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              Boys Bags And Backpacks
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="mega-menu">
                        <h4 className="text-uppercase fw-bolder mb-3">home</h4>
                        <ul>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              Bath
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              Bed
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              Decor
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              Kitchenware
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              Shop By Product
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              Shop By Brand
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="mega-menu">
                        <h4 className="text-uppercase fw-bolder mb-3">brand</h4>
                        <ul>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              celio
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              louis philippe
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              zink
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              peter england
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="mega-menu">
                        <h4 className="text-uppercase fw-bolder mb-3">
                          beauty
                        </h4>
                        <ul>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              Makeup
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              Mens Fragrances
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              Womens Fragrances
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              Shop By Brand
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="mega-menu">
                        <h4 className="text-uppercase fw-bolder mb-3">about</h4>
                        <ul>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              About Us
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              Greencard
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              Store Locator
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              Payment Options
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              Investor Relations
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="mega-menu">
                        <h4 className="text-uppercase fw-bolder mb-3">
                          customer
                        </h4>
                        <ul>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              Track Order
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              FAQs
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              Customer Support
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              Returns & Exchange Policy
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-dark text-capitalize"
                              href=""
                            >
                              Shipping Policy
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
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
                  to="admin"
                >
                  admin
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="account-icon ms-4 me-0">
          <Link to="account">
            <FiUser />
          </Link>
        </div>
        <div className="cart-icon ms-4 me-0">
          <Link to="cart" className="cart">
            <IoBagHandleOutline />
            <div className="product-count">{product.length}</div>
          </Link>

          <div className="cart_total ms-2">
            <p className="text-white description m-0 text-capitalize">cart total</p>
            <p className="text-white m-0">₹ {totalAmout}</p>
          </div>
        </div>
      </nav>
    </div>
  );
};
