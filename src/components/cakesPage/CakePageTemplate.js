import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../Layout";
import { MdKeyboardArrowRight } from "react-icons/Md";

function CakePageTemplate({ data }) {
  let {
    strapiCakes: { Description, Price, Tagline, name, slider },
  } = data;

  return (
    <Layout>
      <section className="SingleCakePage">
        <div className="breadCrumbs">
          <Link to="/">Home</Link>
          <MdKeyboardArrowRight />
          <Link to="/cakes">Cakes</Link>
          <MdKeyboardArrowRight />
          {name}
        </div>
        <h1>HEy</h1>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query MyQuery($slug: String) {
    strapiCakes(name: { eq: $slug }) {
      Description
      Price
      Tagline
      name
      slider {
        img {
          childImageSharp {
            fluid {
              base64
            }
          }
        }
      }
    }
  }
`;

export default CakePageTemplate;
