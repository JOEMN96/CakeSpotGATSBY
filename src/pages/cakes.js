import React from "react";
import Layout from "../components/Layout";
import Grid from "@material-ui/core/Grid";
import SingleCake from "../components/cakesPage/singleCake";
import { useStaticQuery, graphql } from "gatsby";

let query = graphql`
  query allcakes {
    cakes: allStrapiCakes {
      nodes {
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
      }
    }
  }
`;

function Cakes() {
  let {
    cakes: { nodes: cakes },
  } = useStaticQuery(query);

  return (
    <Layout>
      <section className="cakespg__main">
        <Grid spacing={2} container className="containerMAin">
          {cakes.map((cake, index) => {
            return <SingleCake key={cake.index} {...cake} />;
          })}
        </Grid>
      </section>
    </Layout>
  );
}

export default Cakes;

// cakes: { Description, Price, Tagline, id, mainImg, name, slider },
