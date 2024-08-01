import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../component-css/grid.css";
import gridProducts from "../collection-products/Gridproducts";

const Grid = () => {
  return (
    <div className="container grid_section">
      <Swiper slidesPerView={2} spaceBetween={30}>
        {gridProducts.map((item) => (
          <SwiperSlide key={item.image}>
            <img src={item.image} alt="gridiamge" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Grid;
