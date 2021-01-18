// Import Swiper React components
import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Scrollbar } from "swiper";
import "swiper/swiper.scss";
import StyledBackgroundSection from "./BgBlogImg";
import { AiOutlineUser } from "react-icons/Ai";
import { BiTimeFive } from "react-icons/Bi";

SwiperCore.use([Autoplay, Scrollbar]);

const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        author
        content
        date(fromNow: true)
        heading
        subHeading
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

export default () => {
  const {
    allStrapiBlogs: { nodes },
  } = useStaticQuery(query);

  let blogCards = nodes.map((blog) => {
    let {
      image: {
        childImageSharp: { fluid },
      },
    } = blog;

    return (
      <SwiperSlide key={blog.heading}>
        <div className="blog-card">
          <div className="meta">
            <StyledBackgroundSection image={fluid} className="photo" />
            <ul className="details">
              <li className="author">
                <AiOutlineUser /> {blog.author}
              </li>
              <li className="date">
                <BiTimeFive /> {blog.date}
              </li>
              <li className="tags">
                <ul>
                  <li>{blog.subHeading}</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="description">
            <h2>{blog.heading}</h2>
            <h3>{blog.subHeading}</h3>
            <p>{blog.content}</p>
            <p className="read-more">
              <Link to={`Blogs/${blog.heading}`}>Read More</Link>
            </p>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      className="BlogSldier"
      loop
      grabCursor={true}
      spaceBetween={10}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 8000 }}
      breakpoints={{
        // when window width is >= 640px
        240: {
          slidesPerView: 1,
        },
        // when window width is >= 768px
        968: {
          slidesPerView: 2,
        },
      }}
    >
      {blogCards}
    </Swiper>
  );
};
