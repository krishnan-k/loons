import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "../component-css/cardcollection.css";
import "swiper/css";
import "swiper/css/navigation";
import womenDealDayProduct from "../collection-products/Womendealdayproducts";
import { IoBagHandleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const Womendeal = () => {
  const autoplay = {
    delay: 2500,
    disableOnInteraction: false,
  };
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
          modules={[Navigation, Autoplay]}
          slidesPerView={4.5}
          spaceBetween={30}
          autoplay={autoplay}
          loop={true}
        >
          {womenDealDayProduct.map((item) => (
            <SwiperSlide>
              <div className="card border-0" key={item.id}>
                <div className="product-image">
                  <img src={item.image} alt="image" />
                  <div className="add-to-cart-button">
                    <Link to="cart">
                      <IoBagHandleOutline />
                    </Link>
                  </div>
                </div>
                <div class="card-body">
                  <h5 class="card-title text-uppercase mb-1">{item.title}</h5>
                  <p class="card-text mb-1">{item.description}</p>
                  <p className="product_price mb-0">
                    ₹{item.price}
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
    </div>
  );
};

export default Womendeal;
