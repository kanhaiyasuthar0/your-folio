"use client";
import React, { useState } from "react";
import jsPDF from "jspdf";
import logo from "@/public/placeholder-user.jpg"; // Import SVG logo

const CreatePdfFromTable = ({ profileData }: any) => {
  console.log("🚀 ~ CreatePdfFromTable ~ profileData:", profileData);
  let url = profileData?.profilePicture;
  const [tableData, setTableData] = useState([
    // Initial table data with default headings
    ["Sr. No.", ""],
    ["1", ""], // Initial row
  ]);

  const addRow = () => {
    // Add a new row with empty cells
    setTableData([...tableData, Array(tableData[0].length).fill("")]);
  };

  const addColumn = () => {
    // Add a new column with empty cells
    setTableData(tableData.map((row) => [...row, ""]));
  };

  const handleCellChange = (rowIndex: number, colIndex: number, event: any) => {
    // Update the value of the cell
    const newData = [...tableData];
    newData[rowIndex][colIndex] = event.target.value;
    setTableData(newData);
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    let yPos = 5;

    // Create image element from SVG logo
    const img = new Image();
    img.src = logo.src;
    console.log(url);
    // Add logo at the top
    img.onload = () => {
      doc.addImage(profileData?.profilePicture, "png", 10, 5, 20, 20);
      // Add company description
      const companyDescription = profileData?.companyDescription;
      const descriptionLines = doc.splitTextToSize(
        companyDescription,
        doc.internal.pageSize.width - 50
      );

      // Calculate height needed for description
      const descriptionHeight = doc.getTextDimensions(descriptionLines).h;

      // Add description with dynamic height adjustment
      doc.text(descriptionLines, 40, yPos + 5, {
        maxWidth: doc.internal.pageSize.width - 50,
      });

      // Update yPos for next content
      yPos += descriptionHeight + 20; // Adjust 20 according to your needs
      // Add current date in the header
      const currentDate = new Date().toLocaleDateString();
      doc.text(`Date: ${currentDate}`, 10, 80);

      // Add table data
      yPos += 40; // Adjust yPos to leave space for logo and date
      tableData.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
          doc.text(cell, 10 + colIndex * 40, yPos + rowIndex * 10);
        });
      });

      // Add space for signature at the bottom
      doc.text("Signature:", 10, doc.internal.pageSize.height - 20);

      doc.save("data.pdf");
    };
  };

  return (
    <div className="my-4">
      <h2 className="text-xl font-bold mb-4">Customize Table</h2>
      <div className="mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={addRow}
        >
          Add Row
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={addColumn}
        >
          Add Column
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              {tableData[0].map((heading, index) => (
                <th key={index} className="border border-gray-300 px-4 py-2">
                  <input
                    type="text"
                    value={heading}
                    onChange={(event) => handleCellChange(0, index, event)}
                    className="w-full"
                  />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.slice(1).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, colIndex) => (
                  <td
                    key={colIndex}
                    className="border border-gray-300 px-4 py-2"
                  >
                    <input
                      type="text"
                      value={cell}
                      onChange={(event) =>
                        handleCellChange(rowIndex + 1, colIndex, event)
                      }
                      className="w-full"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={generatePDF}
      >
        Generate PDF
      </button>
    </div>
  );
};

export default CreatePdfFromTable;
