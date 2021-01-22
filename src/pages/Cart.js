import React from "react";
import Layout from "../components/Layout";
import { useSelector } from "react-redux";

function Cart() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <Layout>
      <div>
        <h1>Cart</h1>
      </div>
    </Layout>
  );
}

export default Cart;
