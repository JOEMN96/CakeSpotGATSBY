import { graphql, Link } from "gatsby";
import React, { useState } from "react";
import Layout from "../Layout";
import { MdKeyboardArrowRight } from "react-icons/Md";
import Grid from "@material-ui/core/Grid";
import Slider from "./Slider";
import { FaShoppingCart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";

function CakePageTemplate({ data }) {
  const [clicked, setclicked] = useState(false);

  const handleClick = () => {
    setclicked(!clicked);
  };

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
        <Grid container>
          <Grid item xs={12} md={6} lg={6}>
            <Slider slider={slider} />
          </Grid>
          <Grid className="singleCakeDes" item xs={12} md={6} lg={6}>
            <h1>{name}</h1>
            <h4>{Tagline}</h4>
            <p>{Description}</p>
            <div className="acionPlace">
              <h2>₹ {Price}</h2>
              <button onClick={handleClick}>
                {clicked ? <FaCartPlus /> : <FaShoppingCart />}
              </button>
            </div>
          </Grid>
        </Grid>
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
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

export default CakePageTemplate;
