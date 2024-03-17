"use client";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import { Chela_One } from "next/font/google";

// Load your publishable key
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const cardElementOptions = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};
// console.log(stripePromise, "stripePromise");

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);

  console.log(stripe, elements, "c123");
  const handleSubmit = async (event: any) => {
    console.log("123");
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setLoading(true);

    const cardElement = elements.getElement(CardElement)!;

    // const { error, paymentMethod } = await stripe.({
    //   //   type: "card",
    //   //   card: cardElement,
    //   type: "card",
    //   card: cardElement,
    // });

    const response = await fetch("/api/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Pass the amount here; consider validating/setting this server-side as well
      body: JSON.stringify({ amount: 9900 }), // Example for ₹99
    });
    const { clientSecret } = await response.json();
    console.log("🚀 ~ handleSubmit ~ clientSecret:", clientSecret);
    // console.log(response, response.clientSecret, "clientSecret");
    // let clientSecret = "";

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: "Jenny Rosen",
            address: {
              city: "mumbai",
              country: "in",
              line1: "12",
              line2: "1a",
              postal_code: "12134",
              state: "mh",
            },
            email: "kanhaiyasuthar0@gmail.com",
            phone: "897689231",
          },
        },
      }
    );

    if (error) {
      console.error(error);
      setLoading(false);
    } else {
      console.log("Payment successful", paymentIntent);
      // Handle successful payment here
      setLoading(false);
    }
  };

  return (
    <form>
      <label>
        Card number
        <CardNumberElement options={cardElementOptions} />
      </label>
      <label>
        Expiration date
        <CardExpiryElement options={cardElementOptions} />
      </label>
      <label>
        CVC
        <CardCvcElement options={cardElementOptions} />
      </label>
      <button onClick={handleSubmit}>
        {" "}
        {loading ? "loading..." : "Pay 99"}
      </button>
    </form>
  );
};

const StripeWrapper = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default StripeWrapper;
