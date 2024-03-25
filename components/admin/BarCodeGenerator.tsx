"use client";
import React, { useRef } from "react";
// import bwipjs from "bwip-js";
import QRCode from "qrcode.react";
const BarCodeGenerator = ({ url }: { url: string }) => {
  //   const result = await bwipjs.toBuffer({
  //     bcid: "qrcode", // Barcode type
  //     text: url, // Text to encode
  //     scale: 3, // 3x scaling factor
  //     height: 10, // Bar height, in millimeters
  //     includetext: true, // Show human-readable text
  //     textxalign: "center", // Center-align the text
  //   });

  //   const convertBufferToDataURL = (buffer) => {
  //     // Assuming buffer is a Buffer or array of bytes
  //     // Create a blob from the buffer and return an object URL
  //     const blob = new Blob([buffer], { type: "image/png" });
  //     return URL.createObjectURL(blob);
  //   };

  //   const dataUrl = convertBufferToDataURL(result);
  //   console.log("🚀 ~ BarCodeGenerator ~ dataUrl:", dataUrl);

  //   console.log("🚀 ~ BarCodeGenerator ~ result:", result);
  const qrRef = useRef(null);

  const downloadQRCode = () => {
    // Create a new canvas element
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;

    // Set the dimensions for the new canvas
    canvas.width = 200; // Adjust based on your requirements
    canvas.height = 300; // Adjust based on your requirements

    // Optional: Set background color
    ctx.fillStyle = "#FFFFFF"; // White background
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the title
    ctx.fillStyle = "#000000"; // Black text
    ctx.font = "16px Arial";
    ctx.fillText("Your YourFolio QR Code", 10, 30); // Adjust positioning as needed

    // Draw the QR code

    const qrCanvas = document.querySelector("canvas")!;
    ctx.drawImage(qrCanvas, 36, 50, 128, 128); // Adjust positioning and size as needed

    // Draw the description
    ctx.font = "12px Arial";
    ctx.fillText(
      "Share your unique QR code to access your portfolio directly.",
      10,
      210,
      180
    ); // Adjust positioning as needed, wrap text if necessary

    // Convert the canvas to an image and download it
    const image = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    const link = document.createElement("a");
    link.href = image;
    link.download = "yourFolio.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  //   const downloadQRCode = () => {
  //     const canvas = document.querySelector("canvas")!;
  //     const image = canvas
  //       .toDataURL("image/png")
  //       .replace("image/png", "image/octet-stream");
  //     const link = document.createElement("a");
  //     link.href = image;
  //     link.download = "yourFolio.png";
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //   };

  const copyToClipboard = () => {
    navigator.clipboard
      ?.writeText(url)
      .then(() => {
        // Consider using a more user-friendly feedback mechanism in production, like a tooltip or a toast message.
        alert("URL copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy URL: ", err);
      });
  };
  return (
    <div className="flex flex-col items-center align-middle gap-5">
      <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="text-lg text-gray-700 font-semibold mb-2">
          Your YourFolio QR Code
        </div>
        <div ref={qrRef} className="p-4 bg-white rounded-full">
          <QRCode value={url} size={128} level={"H"} />
        </div>
        <div className="mt-4">
          <span className="text-sm text-gray-600">
            Share your unique QR code to access your portfolio directly.
          </span>
        </div>
      </div>
      {/* <button
        onClick={() => copyToClipboard()}
        className="text-white bg-blue-500 hover:bg-blue-700 font-medium py-2 px-4 rounded transition duration-150 ease-in-out"
      >
        Copy URL
      </button> */}
      <button
        onClick={downloadQRCode}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out"
      >
        Download QR Code
      </button>
    </div>
  );
};

export default BarCodeGenerator;
