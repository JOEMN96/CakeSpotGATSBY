import React from "react";
import { graphql } from "gatsby";
import Layout from "../Layout";
import Image from "gatsby-image";
import Grid from "@material-ui/core/Grid";
import { BiTimeFive } from "react-icons/Bi";
import { AiOutlineUser } from "react-icons/Ai";

const BlogSingleTemplate = ({ data: { strapiBlogs } }) => {
  let { heading, content, created_at, author, image } = strapiBlogs;
  return (
    <Layout>
      <article className="singleBlog">
        <Grid container>
          <h1 className="heading"> {heading} </h1>
          <Grid className="blogHead" item xs={12} md={12} lg={12}>
            <div className="">
              <div>
                <BiTimeFive />
                <p>{created_at}</p>
              </div>
              <div>
                <AiOutlineUser />
                <p>{author}</p>
              </div>
            </div>
          </Grid>
          <Grid className="BlogImg" item xs={12} md={12} lg={12}>
            <Image fluid={image.childImageSharp.fluid} />
          </Grid>
          <Grid className="BlogExpanded" item xs={12} md={12} lg={12}>
            {content}
          </Grid>
        </Grid>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query SingleBlogQ($slug: String) {
    strapiBlogs(heading: { eq: $slug }) {
      heading
      content
      created_at(fromNow: true)
      author
      image {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;

export default BlogSingleTemplate;
