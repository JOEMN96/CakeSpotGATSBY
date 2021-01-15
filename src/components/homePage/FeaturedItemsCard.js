import React, { useRef } from "react";
import "./FeaturedItemsCard.css";

function FeaturedItemsCard() {
  const card = useRef(null);
  let handleEnter = () => {
    card.current.classList.add("animate");
  };

  const handleLeave = () => {
    // card.current.id.removeAttribute("id");
    card.current.classList.remove("animate");
  };

  return (
    <div className="cardparent">
      <div
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        id="product-card"
        ref={card}
      >
        <div id="product-front">
          <div className="shadow"></div>
          <img
            src="https://livforcake.com/wp-content/uploads/2017/07/black-forest-cake-thumb-500x500.jpg"
            alt=""
          />
          <div className="image_overlay"></div>
          <div id="view_details">
            {" "}
            <a href="">View details</a>
          </div>
          <div className="stats">
            <div className="stats-container">
              <span className="product_price">$39</span>
              <span className="product_name">Chocolate cake</span>

              <div className="product-options">
                <strong>Available Sizes</strong>
                <span>
                  <span className="kg">1 Kg </span>
                  <span className="kg">2 Kg</span>
                </span>
                <strong>About</strong>
                <p>
                  Made with ..... Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Optio, unde!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedItemsCard;
