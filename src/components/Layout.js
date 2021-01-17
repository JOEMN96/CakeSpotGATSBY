import React from "react";
import Navbar from "./Navbar";
import Footer from "../components/homepage/Footer";

function Layout({ children }) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}

export default Layout;
