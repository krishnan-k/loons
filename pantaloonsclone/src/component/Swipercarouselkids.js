import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../component-css/swipercarousel.css";
import kidsSlider from "../collection-products/Kidsslider";
const Swipercarouselkids = () => {
  const imaClassName = "image_class";
  const pagination = {
    clickable: true,
  };
  return (
    <div className="SwiperCarousel">
      <Swiper
        pagination={pagination}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {kidsSlider.map((item) => (
          <SwiperSlide key={item.id}>
            <img className={imaClassName} src={item.image} alt="slider-image" />
            <a class="text-decoration-none text-dark mt-3 mb-3" href="">
              {item.description}
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Swipercarouselkids;
