import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

import BackgroundImage from "gatsby-background-image";

const BackgroundSection = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        sidelogo: file(name: { eq: "logosidenav" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  const imageData = data.sidelogo.childImageSharp.fluid;

  console.log(data);

  return (
    <BackgroundImage
      Tag="section"
      fluid={imageData}
      className={className}
      backgroundColor={`#040e18`}
    >
      <h2>gatsby-background-image</h2>
    </BackgroundImage>
  );
};

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`;

export default StyledBackgroundSection;
