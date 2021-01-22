// Import Swiper React components
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Scrollbar, Navigation } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import Image from "gatsby-image";

SwiperCore.use([Autoplay, Scrollbar, Navigation]);

export default ({ slider }) => {
  console.log(slider);
  return (
    <Swiper
      className="CakeSldier"
      loop
      navigation
      grabCursor={true}
      spaceBetween={0}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 5000 }}
      breakpoints={{
        // when window width is >= 640px
        240: {
          slidesPerView: 1,
        },
        // when window width is >= 768px
        968: {
          slidesPerView: 1,
        },
      }}
    >
      {slider.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <Image fluid={item.img.childImageSharp.fluid} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
