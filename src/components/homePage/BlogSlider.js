// Import Swiper React components
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Scrollbar } from "swiper";
import "swiper/swiper.scss";
import StyledBackgroundSection from "./ImageCheck";

// import Image from "gatsby-image";

SwiperCore.use([Autoplay, Scrollbar]);

export default () => {
  return (
    <Swiper
      className="BlogSldier"
      spaceBetween={50}
      slidesPerView={2}
      scrollbar={{ draggable: true }}
      loop
      autoplay={{ delay: 3000 }}
    >
      <SwiperSlide>
        <StyledBackgroundSection />
      </SwiperSlide>

      <SwiperSlide>
        <div className="blog-card">
          <div className="meta">
            <div
              className="photo"
              style={{
                backgroundImage:
                  "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)",
              }}
            ></div>
            <ul className="details">
              <li className="author">John Doe</li>
              <li className="date">Aug. 24, 2015</li>
              <li className="tags">
                <ul>
                  <li>Learn</li>
                  <li>Code</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="description">
            <h1>Learning to Code</h1>
            <h2>Opening a door to the future</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
              dolorum architecto obcaecati enim dicta praesentium, quam nobis!
              Neque ad aliquam facilis numquam. Veritatis, sit.
            </p>
            <p className="read-more">
              <a href="#">Read More</a>
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
