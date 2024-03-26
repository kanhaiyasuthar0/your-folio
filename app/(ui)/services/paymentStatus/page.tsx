"use client";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function PaymentStatus() {
  const router = useRouter();

  useEffect(() => {
    const { payment_id, payment_status } = router.query;
    // Verify payment here using Razorpay API or by checking the status
    if (payment_status === "success") {
      // Handle successful payment
    } else {
      // Handle payment failure
    }
  }, [router.query]);

  return <div>{/* Render payment status information here */}</div>;
}
