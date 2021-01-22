import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { FaShoppingCart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import StyledBackgroundSection from "../cakesPage/SingleCakeBG";
import BgHover from "../cakesPage/bgHover";
import { Link } from "gatsby";
import { useDispatch } from "react-redux";

function SingleCake({ cake, inCart }) {
  let { Description, Price, Tagline, name, mainImg, id } = cake;
  const [clicked, setclicked] = useState(inCart);
  const dispatch = useDispatch();
  const handleClick = () => {
    setclicked(!clicked);
    !clicked
      ? dispatch({
          type: "ADDTOCART",
          item: { Description, Price, Tagline, name, mainImg, id },
        })
      : dispatch({ type: "REMOVEFROMCART", id });
  };

  let {
    childImageSharp: { fluid: image },
  } = mainImg;

  return (
    <Grid item lg={4} md={6} xs={12}>
      <article className="card cardbg">
        <Link to={`/allCakes/${name}`}>
          <StyledBackgroundSection image={image} className="card__info-hover">
            <p>{Description}</p>
          </StyledBackgroundSection>
          <div className="card__img"></div>
          <span className="card_link">
            <BgHover image={image} className="card__img--hover"></BgHover>
          </span>
        </Link>

        <div className="card__info">
          <span className="card__category"> {Tagline} </span>
          <Link to={`/allCakes/${name}`}>
            <h3 className="card__title">{name}</h3>
          </Link>

          <div className="card__cart">
            <div>
              <h6>$ {Price}</h6>
              <span onClick={handleClick}>
                {clicked ? <FaCartPlus /> : <FaShoppingCart />}
              </span>
            </div>
          </div>
        </div>
      </article>
    </Grid>
  );
}

export default SingleCake;
