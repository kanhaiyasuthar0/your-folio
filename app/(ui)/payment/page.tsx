"use client";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Chela_One } from "next/font/google";

// Load your publishable key
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);
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

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.error(error);
      setLoading(false);
    } else {
      console.log("PaymentMethod", paymentMethod);
      // Here you would call your API to create a payment intent
      // and finalize the payment process
      setLoading(false);
    }
  };

  return (
    <form>
      <CardElement />
      <button onClick={handleSubmit}>Pay</button>
    </form>
  );
};

const StripeWrapper = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default StripeWrapper;
