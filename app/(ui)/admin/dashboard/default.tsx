import dbConnect from "@/database/mongodb/connections/dbConnect";
import ShowCase from "@/database/mongodb/models/showcase/showcase.schema";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";

const Dashboard = async () => {
  // Dummy data for demonstration

  const revenueData = [
    { month: "Jan", revenue: 1000 },
    { month: "Feb", revenue: 1500 },
    { month: "Mar", revenue: 1300 },
    // Add more months as needed
  ];

  const userEngagementData = [
    { metric: "Page Views", value: "8,400" },
    { metric: "Session Duration", value: "3m 45s" },
    { metric: "Bounce Rate", value: "42%" },
  ];

  await dbConnect();
  const user = await currentUser();
  // const counts = await ShowCase.countDocuments({ user: user?.id });

  const counts = await ShowCase.aggregate([
    {
      $match: { user: user?.id },
    },
    {
      $group: {
        _id: null,
        totalDocuments: { $sum: 1 }, // Count total documents
        totalImages: { $sum: { $size: "$images" } }, // Count total images across all documents
      },
    },
    {
      $project: {
        _id: 0, // Exclude _id field from result
        totalDocuments: 1,
        totalImages: 1,
      },
    },
  ]);
  const result =
    counts.length > 0 ? counts[0] : { totalDocuments: 0, totalImages: 0 };
  const statsData = [
    { label: "Total folios", value: result.totalDocuments },
    { label: "Team members", value: "21" },
    { label: "Total testimonials", value: "11" },
    { label: "Total number of images", value: result.totalImages },
    { label: "Plan active", value: "Advance" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <header className="bg-white shadow mb-8">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Quick Stats */}
            {statsData.map((stat) => (
              <div key={stat.label} className="p-4 bg-white rounded-lg shadow">
                <h2 className="text-lg font-semibold text-gray-700">
                  {stat.label}
                </h2>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            ))}
            {/* Revenue Chart Placeholder */}
            <div className="md:col-span-2 lg:col-span-1 p-4 bg-white rounded-lg shadow">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Your Quotations
              </h2>
              {/* Replace this div with your actual chart component */}
              <div className="text-center text-gray-500">
                <Link href={"/pdf"}>Checkout pdf</Link>
              </div>
            </div>
            {/* User Engagement Placeholder */}
            <div className="md:col-span-2 lg:col-span-2 p-4 bg-white rounded-lg shadow">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                User Engagement
              </h2>
              <ul>
                {userEngagementData.map((data) => (
                  <li key={data.metric} className="flex justify-between py-2">
                    <span className="text-gray-600">{data.metric}:</span>
                    <span className="font-semibold text-gray-900">
                      {data.value}
                    </span>
                  </li>
                ))}
              </ul>
              {/* Additional placeholder for visual engagement data */}
              <div className="mt-4 text-center text-gray-500">
                [Engagement Chart Placeholder]
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
