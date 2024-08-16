import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../component-css/mainproduct.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteCart, updateQuantity } from "../store/Cartslice";
import { MdDeleteForever } from "react-icons/md";
import flashImage from "../image/flash.svg";
import { FaMinus, FaPlus } from "react-icons/fa";
const Mainproduct = () => {
  const { id } = useParams();
  const [item, setSingleProduct] = useState({
    productTitle: "",
    productPrice: "",
    comparePrice: "",
    productImg: "",
    productDesc: "",
  });
  useEffect(() => {
    fetch(`http://localhost:5000/women/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  }, [id]);

  const product = useSelector(state =>
    state.cart.cartItems
  );
  const dispatch = useDispatch();
  const addCart = (item) =>{
    dispatch(addToCart(item));
  }
  const deleteFromCart = (item) =>{
    dispatch(deleteCart(item));
  }

  const IncrementQuantity = (id, quantity) =>{
    dispatch(updateQuantity({id, quantity: quantity + 1}));
  }
  const DecrementQuantity = (id, quantity) =>{
    if(quantity > 1){
        dispatch(updateQuantity({id, quantity: quantity - 1}));
    }
    
  }
  return (
    <div className="main-product">
      <div className="main-product-content" key={item._id}>
        <div className="product-image">
          <img
            src={
              item.productImg.startsWith("http")
                ? item.productImg
                : `http://localhost:5000${item.productImg}`
            }
            alt={item.productTitle}
          />
        </div>
        <div className="product-content">
            <div className="offer-content mb-2">
                <div className="offer-percentage ">
                    <span className="offer-text text-uppercase">{(((item.comparePrice - item.productPrice) / (item.comparePrice)) * 100).toFixed()}%off</span>
                </div>
                <div className="flash">
                    <img src={flashImage} alt="flash-image" />
                    <span className="flash-text text-capitalize ms-1 me-1">
                    flash deal
                    </span>
                </div>
            </div>
          <h2 className="text-uppercase">{item.productTitle}</h2>
          <p className="mb-1">{item.productDesc}</p>
          <p className="product_price mb-0">
            ₹{item.productPrice}
            <span className="product_price text-decoration-line-through text-black-50 fw-bolder">
              ₹{item.comparePrice}
            </span>
          </p>

          <div className="add-to-cart-button pt-2 mt-2">
          {product.find(items => items._id === item._id)
          ? 
          <div className="add">
          <div className="delete-cart text-center text-white text-capitalize" onClick={()=> deleteFromCart(item) }>delete cart <MdDeleteForever/></div> </div>   :
          <div className="add-to-cart text-center text-decoration-none text-white text-capitalize shine-effect" onClick={() => addCart(item)}>add to cart</div>
          } 
          
          <div className="quantity-buttons mt-2">
                      <button
                        type="button"
                        className="quantity_button"
                        onClick={() =>
                          DecrementQuantity(item.id, item.quantity)
                        }
                      >
                        <FaMinus />
                      </button>
                      {item.quantity}
                      <button
                        type="button"
                        className="quantity_button"
                        onClick={() =>
                          IncrementQuantity(item.id, item.quantity)
                        }
                      >
                        <FaPlus  />
                      </button>
                    </div>
   
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainproduct;
