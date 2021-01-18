import React from "react";
import { graphql } from "gatsby";
import Layout from "../Layout";

const BlogSingleTemplate = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <main className="singleBlog">
        <h1>Hello</h1>
      </main>
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
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;

export default BlogSingleTemplate;
