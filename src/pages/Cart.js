import React from "react";
import Layout from "../components/Layout";
import { useSelector } from "react-redux";
import SingleCartItem from "../components/cartPage/singleCartItem";
import Grid from "@material-ui/core/Grid";

function Cart() {
  let localCart = JSON.parse(localStorage.getItem("cart"));
  let cart = useSelector((state) => state.cart);

  cart = cart.length ? cart : localCart;

  if (cart.length < 1) {
    return (
      <Layout>
        <section className="cartWrapper ">
          <div className="emptyCart">
            <h2>Your Cart Is Empty !</h2>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="cartWrapper">
        <Grid container>
          <Grid item xs={12} md={6} lg={6}>
            {cart.map((item, index) => {
              return <SingleCartItem key={index} {...item} />;
            })}
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <h3>addresss</h3>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <h3>Checkout</h3>
          </Grid>
        </Grid>
      </section>
    </Layout>
  );
}

export default Cart;
