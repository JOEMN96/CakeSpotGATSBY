import React from "react";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";

function Navbar() {
  const data = useStaticQuery(graphql`
    query logo {
      file(name: { eq: "logo" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  console.log(data);

  return (
    <nav>
      <div className="smallMenu">
        <div className="nav__level1__items__Logo">
          <Image className="logo" fluid={data.file.childImageSharp.fluid} />
        </div>
        <div className="nav__level1__items__Trigger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="nav__level1__items__Home">
        <Link to="/">Home</Link>
        <Link to="/cakes">Cakes</Link>
        <Link to="/surpricePacks">SurpricePacks</Link>
      </div>
    </nav>
  );
}

export default Navbar;
