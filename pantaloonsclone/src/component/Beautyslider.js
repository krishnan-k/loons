import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import beautySlider from "../collection-products/Beautyporducts"
import "swiper/css";
import "swiper/css/navigation";
import "../component-css/beautyslider.css";
const Beautyslider = () => {
  const imaClassName = "image_class";
  return (
    <div className="SwiperCarousel beauty_slider">
      <Swiper className="mySwiper" navigation={true} modules={[Navigation]}>
        {beautySlider.map((item) => (
          <SwiperSlide key={item.id}>
            <img className={imaClassName} src={item.image} alt="slider-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Beautyslider;
