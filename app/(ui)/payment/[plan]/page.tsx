"use client";
import React, { useState } from "react";

const PaymentForm = ({ params }: any) => {
  const { plan } = params;
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    mobileNumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(plan, "plan");
    if (plan == "basic" || plan == "advance") {
      const response = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: plan == "basic" ? 99 : plan == "advance" ? "299" : 1000,
        }),
      });
      console.log(response, "responseinhandle");
      const data = await response.json();
      console.log("🚀 ~ handleSubmit ~ data:", data);
      // redirect(new URL(data.url));
      window.open(data.url);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            onChange={handleChange}
            value={formData.name}
            name="name"
            id="name"
            type="text"
            placeholder="Your Name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="amount"
          >
            Plan
          </label>
          <input
            // onChange={handleChange}
            value={plan.toUpperCase()}
            name="plan"
            id="plan"
            type="plan"
            placeholder="Plan"
            disabled
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="mobileNumber"
          >
            Mobile Number
          </label>
          <input
            onChange={handleChange}
            value={formData.mobileNumber}
            name="mobileNumber"
            id="mobileNumber"
            type="tel"
            placeholder="9820462188"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={!formData.mobileNumber || !formData.name}
            aria-disabled={!formData.mobileNumber || !formData.name}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
