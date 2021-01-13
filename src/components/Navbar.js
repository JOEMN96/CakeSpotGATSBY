import React, { useState } from "react";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import { FiShoppingCart } from "react-icons/fi";

const query = graphql`
  query logo {
    file(name: { eq: "logo" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

function Navbar() {
  const data = useStaticQuery(query);

  const [navOpen, setnavOpen] = useState(false);

  const triggerHandle = () => {
    setnavOpen(!navOpen);
    console.log(navOpen);
  };

  return (
    <nav>
      <div className="smallMenu">
        <div className="nav__level1__items__Logo">
          <Image className="logo" fluid={data.file.childImageSharp.fluid} />
        </div>
        <div
          onClick={triggerHandle}
          className={`nav__level1__items__Trigger ${navOpen && "navOpen"}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="bigscrennNav">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/cakes">Cakes</Link>
        <Link to="/surpricePacks">SurpricePacks</Link>
        <Link to="/">
          <span className="cartICon">
            <FiShoppingCart />
          </span>
        </Link>
        <Link to="/">Contact Us</Link>
      </div>
      <div
        className={`nav__level1__items__Home ${
          navOpen ? "navisOpen" : "navisClosed"
        } `}
      >
        <Image className="sidelogo" fluid={data.file.childImageSharp.fluid} />
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/cakes">Cakes</Link>
        <Link to="/surpricePacks">SurpricePacks</Link>
        <Link to="/">
          <span className="cartICon">
            <FiShoppingCart />
          </span>
        </Link>
        <Link to="/">Contact Us</Link>
      </div>
    </nav>
  );
}

export default Navbar;
