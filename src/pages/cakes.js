import React from "react";
import Layout from "../components/Layout";
import Grid from "@material-ui/core/Grid";
import SingleCake from "../components/cakesPage/singleCake";

function cakes() {
  return (
    <Layout>
      <section className="cakespg__main">
        <Grid spacing={2} container className="containerMAin">
          <SingleCake />
          <SingleCake />
          <SingleCake />
          <SingleCake />
        </Grid>
      </section>
    </Layout>
  );
}

export default cakes;
