import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { FaShoppingCart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import StyledBackgroundSection from "../cakesPage/SingleCakeBG";

function SingleCake() {
  const [clicked, setclicked] = useState(false);
  const handleClick = () => {
    setclicked(!clicked);
  };
  return (
    <Grid item lg={4} md={6} xs={12}>
      <article class="card cardbg">
        {/* <StyledBackgroundSection className="card__info-hover">

        </StyledBackgroundSection> */}
        <div class="card__info-hover">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            mollitia iste temporibus non officiis impedit rem iure qui nulla.
            Fuga, ut. Corporis ipsa vero dignissimos!
          </p>
        </div>
        <div class="card__img"></div>
        <a href="#" class="card_link">
          <div class="card__img--hover"></div>
        </a>
        <div class="card__info">
          <span class="card__category"> TAgline </span>
          <h3 class="card__title">Crisp Spanish tortilla Matzo brei</h3>
          <div class="card__cart">
            <div>
              <h6>$ 59</h6>
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
