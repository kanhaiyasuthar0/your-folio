"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";
import Link from "next/link";
import actionRazorPay from "@/actions/razorpay.action";
import { redirect } from "next/navigation";

export function AnimatedPinDemo(props: any) {
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const makePayment = async () => {
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    // Make API call to the serverless API
    const data = await fetch("/api/razorpay", { method: "POST" }).then((t) =>
      t.json()
    );
    console.log(data);
    var options = {
      key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      name: "Manu Arora Pvt Ltd",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thankyou for your test donation",
      image: "https://manuarora.in/logo.png",
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "Manu Arora",
        email: "manuarorawork@gmail.com",
        contact: "9999999999",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  // const handleSubmit = async (e, amount: number) => {
  //   e.preventDefault();
  //   const response = await fetch("/api/payment", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ amount }),
  //   });
  //   console.log(response, "responseinhandle");
  //   const data = await response.json();
  //   console.log("🚀 ~ handleSubmit ~ data:", data);
  //   // redirect(new URL(data.url));
  //   window.open(data.url);
  // };

  async function handleRazorPay(formData: FormData, price: number) {
    console.log("🚀 ~ handleRazorPay ~ formData:", formData);
    const response = await actionRazorPay(price);
    console.log("🚀 ~ handleRazorPay ~ response14:", response);
    window.open(response);
  }
  return (
    <>
      <div
        className="h-[35rem] flex items-center justify-center"
        key={props.plan.name}
      >
        {/* <Link href={`/payment/${props.plan.price == 99 ? "basic" : "advance"}`}> */}
        <PinContainer
          title={`your-folio@ ₹${props.plan.price}`}
          href="www.google.com"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[30rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              {props.plan.name}
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">₹{props.plan.price}</span>
            </div>
            {props.plan.features.map((feature: string, index: number) => (
              <li key={index} className="text-sm mb-2">
                ✓ {feature}
              </li>
            ))}

            <div className="flex justify-center items-center w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 p-4">
              <form
                // onSubmit={(e) => handleSubmit(e, props.plan.price)}
                action={(formData) =>
                  handleRazorPay(formData, props.plan.price)
                }
                className="w-full"
              >
                <button
                  className="w-full text-white font-bold py-2 px-4 rounded hover:bg-purple-700"
                  type="submit"
                >
                  Subscribe for {props.plan.price}
                </button>
              </form>
            </div>
          </div>
        </PinContainer>
        {/* </Link> */}
      </div>
    </>
  );
}
