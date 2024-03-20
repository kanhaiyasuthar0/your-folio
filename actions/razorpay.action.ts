"use server";
export default async function actionRazorPay(amount: number) {
  let url = process.env.BASE_URL + "/api/payment/razorpay";
  const response = await fetch(url, {
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
