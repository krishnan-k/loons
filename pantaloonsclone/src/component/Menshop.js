import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../component-css/womenshop.css";
import menShopProducts from "../collection-products/Menshopproducts";

const Menshop = () => {
  return (
    <div className="womenshop card_collection_one mt-4 mb-4 pt-4 pb-4">
      <div className="Card_Swiper_Carousel_One container">
        <div className="card_heading mb-4 pb-2">
          <h4 className="mb-0">Shop By Occasion</h4>
        </div>
        <Swiper
          className="mySwiper"
          navigation={true}
          modules={[Navigation]}
          slidesPerView={4}
          spaceBetween={30}
        >
          {menShopProducts.map((item) => (
            <SwiperSlide>
              <div class="card p-0 border-0" key={item.id}>
                <div className="image-section">
                  <img src={item.image} alt="image" />
                </div>
                <div class="card-body">
                  <h5 class="card-title text-capitalize mb-1 text-center fw-normal m-2">
                    {item.title}
                  </h5>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Menshop;
