import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../component-css/cardcollectionnew.css";
import kidsRecommendedProducts from "../collection-products/Kidsrecommendedproducts";
import { IoBagHandleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const Kidsrecommended = () => {
  const autoplay = {
    delay: 2500,
    disableOnInteraction: false,
  };
  return (
    <div className="card_collection_one mt-4 mb-3 pt-5 pb-2">
      <div className="Card_Swiper_Carousel_One container">
        <div className="card_heading mb-4 pb-2">
          <h4 className="mb-0">Styles Recommended for You</h4>
        </div>
        <Swiper
          className="mySwiper"
          navigation={true}
          modules={[Navigation, Autoplay]}
          slidesPerView={4.5}
          spaceBetween={15}
          loop={true}
          autoplay={autoplay}
        >
          {kidsRecommendedProducts.map((item) => (
            <SwiperSlide>
              <div class="card border-0" key={item.id}>
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
                  <p className="product_price mb-0">₹{item.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Kidsrecommended;
