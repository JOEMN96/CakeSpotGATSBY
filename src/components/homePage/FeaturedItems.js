import React from "react";
import FeaturedItemsCard from "./FeaturedItemsCard";

function FeaturedItems() {
  return (
    <section className="featuredItms">
      <h1>Featured Products</h1>

      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <FeaturedItemsCard />
          </div>
          <div className="col-md-6 col-lg-4">
            <FeaturedItemsCard />
          </div>
          <div className="col-md-6 col-lg-4">
            <FeaturedItemsCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedItems;
