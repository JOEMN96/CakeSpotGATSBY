import React from "react";
import StripeCheckout from "react-stripe-checkout";

export default class TakeMoney extends React.Component {
  onToken = (token) => {
    console.log(token);
  };

  render() {
    return (
      <StripeCheckout
        description="Cake Spot HomeBake" // the pop-in header subtitle
        token={this.onToken}
        amount={1000 * 100}
        stripeKey={process.env.GATSBY_STRIPE_PUBLIC}
        currency="INR"
        locale="in"
      />
    );
  }
}
