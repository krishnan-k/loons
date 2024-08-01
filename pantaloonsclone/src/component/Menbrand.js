import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../component-css/brand.css";
import menBrand from "../collection-products/Menbrandlogo"

const Menbrand = () => {
  return (
    <div className="container mt-3 mb-4 pt-4 pb-5 brand women-brand">
      <div className="card_heading mb-4 pb-2">
        <h4 className="mb-0">Brands You Love</h4>
        <a className="text-uppercase fw-bolder text-decoration-none" href="#">
          view all
        </a>
      </div>
      <Swiper loop={true} slidesPerView={5} spaceBetween={30}>
        {menBrand.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt="brand-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Menbrand;
