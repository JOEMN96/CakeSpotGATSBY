import { graphql, Link } from "gatsby";
import React, { useState } from "react";
import Layout from "../Layout";
import { MdKeyboardArrowRight } from "react-icons/Md";
import Grid from "@material-ui/core/Grid";
import Slider from "./Slider";
import { FaShoppingCart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";

function CakePageTemplate({ data }) {
  let localCart = JSON.parse(localStorage.getItem("cart"));

  const dispatch = useDispatch();

  let {
    strapiCakes: { Description, Price, Tagline, name, slider, mainImg, id },
  } = data;

  let inCart = localCart.find((item) => {
    return item.id === id;
  });

  const [clicked, setclicked] = useState(inCart?.name);

  const handleClick = () => {
    setclicked(!clicked);
    !clicked
      ? dispatch({
          type: "ADDTOCART",
          item: { Description, Price, Tagline, name, mainImg, id },
        })
      : dispatch({ type: "REMOVEFROMCART", id });
  };

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
      mainImg {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      id
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
