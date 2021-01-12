import React from "react";
import { Link } from "gatsby";

function Navbar() {
  return (
    <nav>
      <div className="nav__level1__items__Home">
        <Link to="/">Home</Link>
      </div>
      <div className="nav__level1__items__Logo"></div>
    </nav>
  );
}

export default Navbar;
