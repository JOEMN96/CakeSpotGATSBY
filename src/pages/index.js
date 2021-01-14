import * as React from "react";
import "../styles.scss";
import Layout from "../components/Layout";
import HeroSwiper from "../components/homePage/LandingPageHero";
import WhoWeAre from "../components/homePage/WhoWeAre";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <main>
        <div className="LandingPageHero">
          <HeroSwiper />
          <WhoWeAre />
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;
