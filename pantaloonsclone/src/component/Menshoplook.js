import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../component-css/cardcollectionnew.css";
import menShoplook from "../collection-products/Menshoplookproducts";
const Menshoplook = () => {
  return (
    <div className="men-shop-look card_collection_one mt-3 mb-3 pt-3 pb-3">
      <div className="Card_Swiper_Carousel_One container">
        <div className="card_heading mb-4 pb-2">
          <h4 className="mb-0">Shop the look</h4>
        </div>
        <Swiper
          className="mySwiper"
          navigation={true}
          modules={[Navigation]}
          slidesPerView={3}
          spaceBetween={30}
        >
          {menShoplook.map((item) => (
            <SwiperSlide>
              <div class="card border-0" key={item.id}>
                <img src={item.image} alt="image" />
                <div class="card-body">
                  <h5 class="card-title text-capitalize fw-normal mb-1">
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

export default Menshoplook;
