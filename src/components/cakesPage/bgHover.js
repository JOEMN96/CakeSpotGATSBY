import React from "react";
import styled from "styled-components";

import BackgroundImage from "gatsby-background-image";

const BackgroundSection = ({ className, image }) => {
  return (
    <BackgroundImage
      Tag="div"
      fluid={image}
      className={className}
    ></BackgroundImage>
  );
};

const BgHover = styled(BackgroundSection)`
  position: absolute !important;
`;

export default BgHover;
