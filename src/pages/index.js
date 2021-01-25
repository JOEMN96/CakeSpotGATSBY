import * as React from "react";
import "../styles.scss";
import "../static/grid.css";
import Layout from "../components/Layout";
import HeroSwiper from "../components/homePage/LandingPageHero";
import WhoWeAre from "../components/homePage/WhoWeAre";
import FeaturedItems from "../components/homePage/FeaturedItems";
import Delivery from "../components/homePage/Delivery";
import Blog from "../components/homePage/Blog";
import { useDispatch } from "react-redux";
import firebase from "gatsby-plugin-firebase";
import Checkout from "../stripe/checkout";

// Setting up cart in local storage
if (!localStorage.getItem("cart")) {
  localStorage.setItem("cart", JSON.stringify([]));
}

// markup
const IndexPage = () => {
  const dispatch = useDispatch();

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log(user);
      let { displayName, photoURL } = user;
      dispatch({
        type: "USERDETAIL",
        payload: { name: displayName, picture: photoURL },
      });
    } else {
      // No user is signed in.
      console.log("logged out");
      dispatch({
        type: "LOGGEDOUT",
      });
    }
  });
  return (
    <Layout>
      <main className="indexPage">
        <div className="LandingPageHero">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <HeroSwiper />
              </div>
              <div className="col-md-6 headerText">
                <h1>Heading</h1>
                <p>
                  Some Text HEre Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Dicta autem iure veritatis voluptates
                  mollitia laborum esse ipsum voluptate architecto sint!{" "}
                </p>
                <h2>Sub heading</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio, consequuntur eos ut corporis vitae neque hic quasi
                  labore nemo omnis itaque. Accusantium dicta id nulla suscipit
                  aliquid repellendus odio, iusto repudiandae a? Repudiandae
                  quasi saepe blanditiis eveniet! Rerum, aliquam fuga.
                </p>
                <Checkout />
              </div>
            </div>
          </div>
        </div>
        <WhoWeAre />
        <FeaturedItems />
        <Delivery />
        <Blog />
      </main>
    </Layout>
  );
};

export default IndexPage;
