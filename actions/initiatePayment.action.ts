"use server";
import axios from "axios";
import crypto from "crypto";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

// function base64EncodePayload(amount) {
//   const jsonString = JSON.stringify(data);
//   const base64Encoded = Buffer.from(jsonString).toString("base64");
//   return base64Encoded;
// }

export default async function callPaymentPage(amount: number) {
  const merchantTransactionId = "req.body.transactionId";
  const data = {
    merchantId: "PGTESTPAYUAT",
    merchantTransactionId: merchantTransactionId,
    merchantUserId: "nadkiu213nsdkbaksskfbaf123",
    name: " req.body.name",
    amount: amount * 100,
    redirectUrl: `http://localhost:5000/api/status/${merchantTransactionId}`,
    redirectMode: "POST",
    mobileNumber: 9820462188,
    paymentInstrument: {
      type: "PAY_PAGE",
    },
  };

  const payload = JSON.stringify(data);
  const payloadMain = Buffer.from(payload).toString("base64");
  const keyIndex = 1;
  const string =
    payloadMain + "/pg/v1/pay" + "099eb0cd-02cf-4e2a-8aca-3e6c6aff0399";
  const sha256 = crypto.createHash("sha256").update(string).digest("hex");
  const checksum = sha256 + "###" + keyIndex;

  const prod_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay";
  // const prod_URL = "https://api.phonepe.com/apis/hermes/pg/v1/pay";
  const options = {
    method: "POST",
    url: prod_URL,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      "X-VERIFY": checksum,
    },
    data: {
      request: payloadMain,
    },
  };

  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       console.log(response.data);
  //       // return res.redirect(response.data.data.instrumentResponse.redirectInfo.url)
  //       // redirect(response.data.data.instrumentResponse.redirectInfo.url);
  //       //   window.open(response.data.data.instrumentResponse.redirectInfo.url);
  //       //   redirect("/");
  //       //   return NextResponse.redirect(
  //       //     response.data.data.instrumentResponse.redirectInfo.url
  //       //   );
  //       return response.data.data.instrumentResponse.redirectInfo.url;
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });

  const response = axios.request(options);
  return response;

  // const encodedPayload = base64EncodePayload(data);

  // const response = await fetch(
  //   "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay",
  //   {
  //     method: "POST",
  //     headers: {
  //       accept: "text/plain",
  //       "Content-Type": "application/json",
  //     },
  //     body: encodedPayload,
  //   }
  // );
  // console.log(response);
  // axios
  //   .request(options)
  //     .then(function (response) {
  //           console.log(response.data);
  //       })
  //       .catch(function (error) {
  //           console.error(error);
  //       });
}
