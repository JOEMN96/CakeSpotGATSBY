import * as React from "react";
import { Link } from "gatsby";

const NotFoundPage = (props) => {
  return (
    <main>
      <h1>404</h1>
      <Link to={"/"}> back to home </Link>
    </main>
  );
};

export default NotFoundPage;
