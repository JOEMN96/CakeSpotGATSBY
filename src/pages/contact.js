import React from "react";
import Layout from "../components/Layout";
import Grid from "@material-ui/core/Grid";

function contact() {
  return (
    <Layout>
      <section className="contactPage">
        <Grid container>
          <Grid item md={12} lg={12} xs={12} xl={12}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15796.172160622942!2d77.3839882!3d8.198419!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb5e745208c782e90!2sThe%20Cakespot%20Home%20bake!5e0!3m2!1sen!2sin!4v1611879736156!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ padding: "10px" }}
              frameborder="0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </Grid>
        </Grid>
        <h2>Contact US</h2>
      </section>
    </Layout>
  );
}

export default contact;
