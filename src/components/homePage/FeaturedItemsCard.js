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
      <div class="card">
        <img
          src="https://images.unsplash.com/photo-1601971935068-fb9281b6deec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          alt=""
        />
        <div class="card-body">
          <h5 class="card-title">
            <a href="#">Card Title</a>
          </h5>
          <div className="details">
            <div className="price">
              <p className="priceINN">
                Price <span>₹ 20</span>
              </p>
              <h4>Description</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                sunt libero modi ipsum vitae repellendus in nam earum
                voluptatibus dignissimos.
              </p>
            </div>
            <div className="cardView">
              <button>View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedItemsCard;
