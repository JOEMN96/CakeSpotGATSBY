import React from "react";
import styled from "styled-components";

import BackgroundImage from "gatsby-background-image";

const BackgroundSection = ({ className, image, children }) => {
  return (
    <BackgroundImage Tag="div" fluid={image} className={className}>
      {children}
    </BackgroundImage>
  );
};

const BgHover = styled(BackgroundSection)``;

export default BgHover;
