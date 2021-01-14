// Import Swiper React components
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Autoplay, Scrollbar } from "swiper";

// Import Swiper styles
import "swiper/swiper.scss";

SwiperCore.use([Autoplay, Scrollbar]);

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      loop
      slidesPerView={1}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 3000 }}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};
