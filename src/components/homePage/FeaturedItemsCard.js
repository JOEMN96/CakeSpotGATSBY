import React from "react";
import "./FeaturedItemsCard.css";
import Image from "gatsby-image";

function FeaturedItemsCard({ description, title, price, url, image }) {
  let {
    childImageSharp: { fluid },
  } = image;

  return (
    <div className="cardparent">
      <div className="card">
        <div className="cardheaderImg">
          <Image fluid={fluid} />
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <a href="!#">{title}</a>
          </h5>
          <div className="details">
            <div className="price">
              <p className="priceINN">
                Price <span>₹ {price}</span>
              </p>
              <h4>Description</h4>
              <p>{description}</p>
            </div>
            <div className="cardView">
              <button>
                <a href={url}>View</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedItemsCard;
