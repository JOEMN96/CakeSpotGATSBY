// Import Swiper React components
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Scrollbar } from "swiper";
import "swiper/swiper.scss";

import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";

SwiperCore.use([Autoplay, Scrollbar]);

const query = graphql`
  {
    allStrapiHeroslider {
      nodes {
        slider1 {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        AdditionalImg {
          Imgs {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`;

export default () => {
  const data = useStaticQuery(query);

  let {
    allStrapiHeroslider: { nodes },
  } = data;

  let AdditionalImg = nodes[0].AdditionalImg;
  return (
    <Swiper
      className="heroSlider"
      spaceBetween={10}
      slidesPerView={1}
      scrollbar={{ draggable: true }}
      loop
      autoplay={{ delay: 3000 }}
    >
      <SwiperSlide>
        <Image
          style={{ height: "100%" }}
          imgStyle={{ objectFit: "cover" }}
          fluid={nodes[0].slider1.childImageSharp.fluid}
        />
      </SwiperSlide>

      {AdditionalImg.map((element, index) => {
        {
          return (
            <SwiperSlide key={index}>
              <Image
                style={{ height: "100%" }}
                imgStyle={{ objectFit: "cover" }}
                fluid={element.Imgs.childImageSharp.fluid}
              />
            </SwiperSlide>
          );
        }
      })}
    </Swiper>
  );
};
