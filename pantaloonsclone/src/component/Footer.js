import React from "react";
import "../component-css/footer.css";
import paymentimage from "../image/payment.png";
import playstore from "../image/google-play.svg"
import applestore from "../image/apple.svg";
import { Link } from "react-router-dom";
const Footer = () => {
    const palyStoreLink = "https://play.google.com/store/apps/details?id=com.pantaloons&source=footer&pli=1";
    const appleStoreLink = "https://apps.apple.com/in/app/pantaloons-online-shopping-app/id1599439483?source=footer";
  return (
    <footer className="pt-4 pb-3">
      <div className="container pt-5 pb-5">
        <div className="footer-content">
            <div className="footer-category">
                <h4 className="text-uppercase fw-bolder mb-3">women</h4>
                <ul>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">westernwear</a></li>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">Ethnicwear</a></li>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">Sports & Activewear</a></li>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">Sleepwear & Lingerie</a></li>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">Bags,wallets & Clutches</a></li>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">Footwear</a></li>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">Shop By Occasion</a></li>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">Shop By Brand</a></li>
                </ul>
            </div>
            <div className="footer-category">
                <h4 className="text-uppercase fw-bolder mb-3">men</h4>
                <ul>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">Top Wear</a></li>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">Bottom Wear</a></li>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">Ethnic Wear</a></li>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">Accessories</a></li>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">Sports And Activewear</a></li>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">Footwear</a></li>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">Innerwear And Sleepwear</a></li>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">Bags And Backpacks</a></li>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">Shop By Occasion</a></li>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">Shop By Brand</a></li>
                </ul>
            </div>
            <div className="footer-category">
                <h4 className="text-uppercase fw-bolder mb-3">kids</h4>
                <ul>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">Boys Topwear</a></li>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">Baby Bottomwear</a></li>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">Girls Bottomwear</a></li>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">Girls Topwear</a></li>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">Boys Bottomwear</a></li>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">Boys Innerwear And Sleepwear</a></li>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">Girls Innerwear And Sleepwear</a></li>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">Baby Innerwear And Sleepwear</a></li>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">Girls Bags And Backpacks</a></li>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">Baby Footwear</a></li>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">Boys Bags And Backpacks</a></li>
                </ul>
            </div>
            <div className="footer-category">
                <h4 className="text-uppercase fw-bolder mb-3">home</h4>
                <ul>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">Bath</a></li>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">Bed</a></li>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">Decor</a></li>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">Kitchenware</a></li>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">Shop By Product</a></li>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">Shop By Brand</a></li>
                </ul>
            </div>
            <div className="footer-category">
                <h4 className="text-uppercase fw-bolder mb-3">brand</h4>
                <ul>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">celio</a></li>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">louis philippe</a></li>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">zink</a></li>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">peter england</a></li>
                </ul>
            </div>
            <div className="footer-category">
                <h4 className="text-uppercase fw-bolder mb-3">beauty</h4>
                <ul>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">Makeup</a></li>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">Mens Fragrances</a></li>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">Womens Fragrances</a></li>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">Shop By Brand</a></li>
                </ul>
            </div>
            <div className="footer-category">
                <h4 className="text-uppercase fw-bolder mb-3">about</h4>
                <ul>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">About Us</a></li>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">Greencard</a></li>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">Store Locator</a></li>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">Payment Options</a></li>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">Investor Relations</a></li>
                </ul>
            </div>
            <div className="footer-category">
                <h4 className="text-uppercase fw-bolder mb-3">customer</h4>
                <ul>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">Track Order</a></li>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">FAQs</a></li>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">Customer Support</a></li>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">Returns & Exchange Policy</a></li>
                    <li><a className="text-decoration-none text-dark text-capitalize" href="">Shipping Policy</a></li>
                </ul>
            </div>
        </div>
      </div>
      <div className="dowload-app footer-category pb-3 mb-3">
      <h4 className="text-uppercase fw-bolder mb-3 text-center">experience pantaloons app</h4>
      <div className="dowload-image text-center">
        <Link to={palyStoreLink} target="_blank"><img src={playstore} className="ms-2 me-2" alt="plas-tore"/></Link>
        <Link to={appleStoreLink} target="_blank"><img src={applestore} className="ms-2 me-2" alt="apple-store"/></Link>
      </div> 
      </div>
      <div className="footer-bottom pt-3">
        <div className="footer-bottom-content container">
            <div className="footer-links">
                <a className="text-decoration-none text-dark text-capitalize" href="">Privacy Policy</a>
                <a className="text-decoration-none text-dark text-capitalize ms-4" href="">Terms & Conditions</a>
            </div>
            <div className="copy-rights">
                <p className="mb-0">Copyright Aditya Birla Fashion & Retail Limited. All Rights Reserved.</p>
            </div>
            <div className="payment-icon">
                <img src={paymentimage} alt="payment-image"/>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
