import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Grid from "@material-ui/core/Grid";
import Image from "gatsby-image";

const query = graphql`
  {
    file(name: { eq: "delivery" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

function Delivery() {
  let {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query);

  return (
    <section className="delivery">
      <h1>we deliver to your doorstep</h1>
      <Grid container>
        <Grid item xs={12} md={6} lg={6}>
          <div>
            <h2>We Deliver 24x7</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
              facilis sapiente alias expedita? Nobis, earum ex! Necessitatibus
              sequi exercitationem atque?
            </p>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <div className="imageContainer">
            <Image fluid={fluid} />
          </div>
        </Grid>
      </Grid>
    </section>
  );
}

export default Delivery;
