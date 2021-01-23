import React from "react";
import Layout from "../components/Layout";
import Grid from "@material-ui/core/Grid";
import SingleCake from "../components/cakesPage/singleCake";
import { useStaticQuery, graphql } from "gatsby";
import { useSelector } from "react-redux";

let query = graphql`
  query allcakes {
    cakes: allStrapiCakes {
      nodes {
        Description
        Price
        Tagline
        name
        id
        mainImg {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

function Cakes() {
  let localCart = JSON.parse(localStorage.getItem("cart"));
  let cart = useSelector((state) => state.cart);
  cart = cart.length < 1 ? localCart : cart;

  let {
    cakes: { nodes: cakes },
  } = useStaticQuery(query);

  return (
    <Layout>
      <section className="cakespg__main">
        <Grid spacing={2} container className="containerMAin">
          {cakes.map((cake, index) => {
            let res = cart.find((item) => {
              return item.id == cake.id;
            });
            return <SingleCake key={index} inCart={res && true} cake={cake} />;
          })}
        </Grid>
      </section>
    </Layout>
  );
}

export default Cakes;

// cakes: { Description, Price, Tagline, id, mainImg, name, slider },
