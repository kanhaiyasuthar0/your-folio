"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";
import Link from "next/link";

export function AnimatedPinDemo(props: any) {
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
  return (
    <div
      className="h-[35rem] flex items-center justify-center"
      key={props.plan.name}
    >
      <Link href={`/payment/${props.plan.price == 99 ? "basic" : "advance"}`}>
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
              {/* <form
              onSubmit={(e) => handleSubmit(e, props.plan.price)}
              className="w-full"
            >
              <button
                className="w-full text-white font-bold py-2 px-4 rounded hover:bg-purple-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                type="submit"
              >
                Subscribe for {props.plan.price}
              </button>
            </form> */}
            </div>
          </div>
        </PinContainer>
      </Link>
    </div>
  );
}
