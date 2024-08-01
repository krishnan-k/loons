import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../component-css/brand.css";
import brandProducts from "../collection-products/Brandproducts"
const Brand = () => {
  return (
    <div className="container mt-4 mb-4 pt-4 pt-4 brand">
      <div className="card_heading mb-4 pb-2">
        <h4 className="mb-0">Brands You Love</h4>
        <a className="text-uppercase fw-bolder text-decoration-none" href="#">
          view all
        </a>
      </div>
      <Swiper slidesPerView={5.5} spaceBetween={30}>
        {brandProducts.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt="brand-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brand;
