"use server";
export default async function actionRazorPay(amount: number) {
  const response = await fetch("http://localhost:3000/api/payment/razorpay", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ amount }),
  });
  const data = await response.json();
  console.log("🚀 ~ actionRazorPay ~ data:", data);
  console.log(response, "response13");
  return data.url;
}
