import React from "react";
import "../component-css/cart.css";
import emptyCartIcon from "../image/empty-cart.jpg";
import Cardcollectiontrend from "../component/Cardcollectiontrend";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, updateQuantity } from "../store/Cartslice";
import { MdDeleteForever } from "react-icons/md";
import flashImage from "../image/flash.svg";
import { Link } from "react-router-dom";
import { FaMinus, FaPlus } from "react-icons/fa";
export const Cart = () => {
  const product = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const deleteFromCart = (item) => {
    dispatch(deleteCart(item));
  };
  const IncrementQuantity = (id, quantity) => {
      // if (typeof quantity !== "number") {
      //   quantity = 1;
      // }
    if(quantity === ''){
      quantity = 1;
    }
    dispatch(updateQuantity({ id, quantity: quantity + 1 }));
  };
  const DecrementQuantity = (id, quantity) => {
    // if (typeof quantity !== "number") {
    //   quantity = 1;
    // }
    if(quantity === ''){
      quantity = 1;
    }
    if (quantity > 1) {
      dispatch(updateQuantity({ id, quantity: quantity - 1 }));
    }
  };
  // const totalQuantity = product.reduce((total,item) => total + (item.quantity),0);
  //const totalAmout = product.reduce((total, item) => total + (item.price*item.quantity),0);
  return (
    <div className="container-fluid cart-page">
      <div className="empty-cart-page text-center pt-5 pb-2 mt-3 mb-1">
        {product.length === 0 ? (
          <div className="empty-cart-page">
            <img src={emptyCartIcon} alt="empty-cart-icon" />
            <div className="empty-cart-heading mt-5">
              <h3 className="empty-cart-heading">Oops!</h3>
              <p className="description">
                Its empty in here. <br />
                Let's find you your fashion fix
              </p>
              <button className="cart-empty-button mt-4 mb-4" type="button">
                <Link to="/" className="text-decoration-none text-white">
                  explore
                </Link>
              </button>
            </div>
          </div>
        ) : (
          <div className="cart-section container">
            {product.map((item) => (
              <div
                className="card border-0 cart-product mt-4 mb-4"
                key={item._id}
              >
                <div className="product-image">
                  <img src={item.productImg} alt="image" />
                </div>
                <div class="card-body text-start">
                  <div className="offer-tag">
                    <div className="offer-percentage ">
                      <span className="offer-text text-uppercase">30% off</span>
                    </div>
                    <div className="flash">
                      <img src={flashImage} alt="flash-image" />
                      <span className="flash-text text-capitalize ms-1 me-1">
                        flash deal
                      </span>
                    </div>
                  </div>
                  <h5 class="card-title text-uppercase mb-1">{item.productTitle}</h5>
                  <p class="card-text mb-1">{item.productDesc}</p>
                  <p className="product_price mb-0">
                    ₹{item.productPrice}
                    <span className="product_price text-decoration-line-through text-black-50 fw-bolder">
                      ₹{item.comparePrice}
                    </span>
                  </p>

                  <div className="quantity-buttons mt-2">
                    <button
                      type="button"
                      className="quantity_button"
                      onClick={() => DecrementQuantity(item._id, item.quantity)}
                    >
                      <FaMinus />
                    </button>
                    {item.quantity}
                    <button
                      type="button"
                      className="quantity_button"
                      onClick={() => IncrementQuantity(item._id, item.quantity)}
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
                <div className="add-to-cart-button cart-button">
                  <MdDeleteForever onClick={() => deleteFromCart(item)} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Cardcollectiontrend />
    </div>
  );
};
