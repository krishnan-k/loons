import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "../component-css/cardcollection.css";
import "swiper/css";
import "swiper/css/navigation";
import flashImage from "../image/flash.svg";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteCart } from "../store/Cartslice";
import { Link } from "react-router-dom";
import { Bounce, toast, ToastContainer } from "react-toastify";
export const Cardcollection = () => {
  const [bunndleProduct, setBundle] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/getwomen`)
      .then(res => res.json())
      .then((data) => {
        setBundle(data.product)
      })


  }, []);
  const product = useSelector(state =>
    state.cart.cartItems
  );

  const dispatch = useDispatch();
  const addCart = (item) => {
    dispatch(addToCart(item));
    toast.success('Product added successfully!', {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }
  const deleteFromCart = (item) => {
    dispatch(deleteCart(item));
    toast.error('Product delete successfully!', {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }
  return (
    <div className="card_collection_section mt-5 mb-0 pt-5 pb-5">
      <div className="CardSwiperCarousel container">
        <div className="card_heading mb-4 pb-2">
          <h4 className="mb-0">deal of the day</h4>
          <a className="text-uppercase fw-bolder text-decoration-none" href="#">
            view all
          </a>
        </div>
        <Swiper
          className="mySwiper"
          navigation={true}
          modules={[Navigation]}
          slidesPerView={4}
          spaceBetween={30}

        >
          {bunndleProduct.map((item) => (
            <SwiperSlide key={item._id}>
              <div className="card border-0 card-product">
                <div className="product-image">
                  <Link to={`/women/${item._id}`}>
                    <img src={(item.productImg.startsWith('http')) ? item.productImg : `http://localhost:5000${item.productImg}`} alt={item.productTitle} />
                  </Link>
                  <div className="add-to-cart-button">
                    {product.find(items => items._id === item._id)
                      ? <div className="add">
                        <Link to="/cart" className="view-cart text-center text-decoration-none text-white text-capitalize">view cart</Link>
                        <div className="delete-cart text-center text-white text-capitalize" onClick={() => deleteFromCart(item)}>delete cart <MdDeleteForever /></div> </div> :
                      <div className="add-to-cart text-center text-decoration-none text-white text-capitalize shine-effect" onClick={() => addCart(item)}>add to cart</div>
                    }
                  </div>
                </div>
                <div class="card-body">
                  <div className="offer-tag">
                    <div className="offer-percentage ">
                      <span className="offer-text text-uppercase">{item.comparePrice > 0 ? 
                      (((item.comparePrice - item.productPrice) / (item.comparePrice)) * 100).toFixed()
                      :
                      ('0')
                      }
                      %off</span>
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
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <ToastContainer autoClose={1000} />
    </div>
  );
};