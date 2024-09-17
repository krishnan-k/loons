import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../component-css/cardcollectionnew.css";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteCart } from "../store/Cartslice";

const Womentrends = () => {
  const product = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const addCart = (item) => {
    dispatch(addToCart(item));
  };
  const deleteFromCart = (item) => {
    dispatch(deleteCart(item));
  };
  const [bunndleProduct, setBundle] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/gettrending`)
      .then(res => res.json())
      .then((data) => setBundle(data))
  }, [])
  return (
    <div className="card_collection_one card_trend mt-4 mb-4 pt-2 pb-2">
      <div className="Card_Swiper_Carousel_One container">
        <div className="card_heading mb-4 pb-2">
          <h4 className="mb-0">Trending now</h4>
        </div>
        <Swiper
          className="mySwiper"
          navigation={true}
          modules={[Navigation]}
          slidesPerView={4}
          spaceBetween={30}
        >
          {bunndleProduct.map((item) => (
            <SwiperSlide>
              <div class="card border-0 p-0 card-product" key={item._id}>
                <div className="product-image">
                  <img src={item.productImg} alt="image" />
                  <div className="add-to-cart-button">
                    {product.find((items) => items._id === item._id) ? (
                      <div className="add">
                        <Link
                          to="/cart"
                          className="view-cart text-center text-decoration-none text-white text-capitalize"
                        >
                          view cart
                        </Link>
                        <div
                          className="delete-cart text-center text-white text-capitalize"
                          onClick={() => deleteFromCart(item)}
                        >
                          delete cart <MdDeleteForever />
                        </div>{" "}
                      </div>
                    ) : (
                      <div
                        className="add-to-cart text-center text-decoration-none text-white text-capitalize shine-effect"
                        onClick={() => addCart(item)}
                      >
                        add to cart
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title text-uppercase mb-1">{item.productTitle}</h5>
                <p class="card-text mb-1">{item.productDesc}</p>
                <p className="product_price mb-0">
                  ₹{item.productPrice}
                  <span className="product_price text-decoration-line-through text-black-50 fw-bolder">
                    ₹{item.comparePrice}
                  </span>
                  <span className="special_offer text-uppercase ">35%off</span>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Womentrends;
