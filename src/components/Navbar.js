import React, { useState } from "react";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch } from "react-redux";

const query = graphql`
  {
    sidelogo: file(name: { eq: "logosidenav" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    logo: file(name: { eq: "logo" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

function Navbar() {
  const [navOpen, setnavOpen] = useState(false);
  const data = useStaticQuery(query);

  let dispatch = useDispatch();

  data && dispatch({ type: "LOGO", logo: data.logo.childImageSharp.fluid });

  const triggerHandle = () => {
    setnavOpen(!navOpen);
  };

  window.addEventListener("scroll", () => {
    let nav = document.querySelector("nav");
    if (window.scrollY > 100 && window.scrollY < 300) {
      nav.style.height = "0px";
    }
    nav.style.height = "60px";
    nav.classList.toggle("sticky", window.scrollY > 300);
  });

  return (
    <nav>
      <div className="smallMenu">
        <div className="nav__level1__items__Logo">
          <Image className="logo" fluid={data.logo.childImageSharp.fluid} />
        </div>
        {/* Trigger */}
        <button
          onClick={triggerHandle}
          className={`nav__level1__items__Trigger ${navOpen && "navOpen"}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Large Screen  Menu  */}

      <div className="bigscrennNav">
        <Link className="shine" to="/">
          Home
        </Link>
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
      {/* Small screen Menu */}
      <div
        className={`nav__level1__items__Home ${
          navOpen ? "navisOpen" : "navisClosed"
        } `}
      >
        <Image
          className="sidelogo"
          fluid={data.sidelogo.childImageSharp.fluid}
        />
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
