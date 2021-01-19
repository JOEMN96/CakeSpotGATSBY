import React from "react";
import styled from "styled-components";

import BackgroundImage from "gatsby-background-image";

const BackgroundSection = ({ className, image }) => {
  // console.log();

  return (
    <BackgroundImage
      Tag="div"
      fluid={image}
      className={className}
      backgroundColor={`#040e18`}
    ></BackgroundImage>
  );
};

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
  height: 100%;
`;

export default StyledBackgroundSection;
