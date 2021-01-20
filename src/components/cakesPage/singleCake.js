import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { FaShoppingCart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import StyledBackgroundSection from "../cakesPage/SingleCakeBG";
import BgHover from "../cakesPage/bgHover";
import { useStaticQuery, graphql, Link } from "gatsby";

let query = graphql`
  {
    allStrapiCakes {
      nodes {
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

function SingleCake({ Description, Price, Tagline, name, id, mainImg }) {
  const [clicked, setclicked] = useState(false);

  const handleClick = () => {
    setclicked(!clicked);
  };

  let {
    allStrapiCakes: { nodes },
  } = useStaticQuery(query);

  let {
    childImageSharp: { fluid: image },
  } = mainImg;

  return (
    <Grid item lg={4} md={6} xs={12}>
      <article className="card cardbg">
        <Link to={`/allCakes/${id}`}>
          <StyledBackgroundSection
            image={nodes[0].mainImg.childImageSharp.fluid}
            className="card__info-hover"
          >
            <p>{Description}</p>
          </StyledBackgroundSection>
          <div className="card__img"></div>
          <a href="#" className="card_link">
            {/* <div className="card__img--hover"></div> */}
            <BgHover image={image} className="card__img--hover"></BgHover>
          </a>
          <div className="card__info">
            <span className="card__category"> {Tagline} </span>
            <h3 className="card__title">{name}</h3>
            <div className="card__cart">
              <div>
                <h6>$ {Price}</h6>
                <span onClick={handleClick}>
                  {clicked ? <FaCartPlus /> : <FaShoppingCart />}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </article>
    </Grid>
  );
}

export default SingleCake;
