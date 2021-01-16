import React from "react";
import FeaturedItemsCard from "./FeaturedItemsCard";
import { useStaticQuery, graphql } from "gatsby";

let query = graphql`
  {
    allStrapiFeaturedContents {
      nodes {
        id
        description
        price
        url
        title
        image {
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

function FeaturedItems() {
  const {
    allStrapiFeaturedContents: { nodes },
  } = useStaticQuery(query);
  return (
    <section className="featuredItms">
      <h1>Featured Products</h1>

      <div className="container">
        <div className="row">
          {nodes.map((node) => {
            return (
              <div key={node.id} className="col-md-6 col-lg-4">
                <FeaturedItemsCard {...node} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturedItems;
