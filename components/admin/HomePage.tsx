import React from "react";
import Link from "next/link";

const AdminHomePage = () => {
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-white">
        <div className="flex flex-col space-y-4 p-4">
          <>
            <Link
              href="/admin/dashboard"
              className="text-lg font-medium text-gray-900 hover:bg-gray-100 p-2 rounded"
            >
              Dashboard
            </Link>
          </>
          <>
            <Link
              href="/admin/folio-management"
              className="text-lg font-medium text-gray-900 hover:bg-gray-100 p-2 rounded"
            >
              Folio Management
            </Link>
          </>
          <>
            <Link
              href="/admin/account-management"
              className="text-lg font-medium text-gray-900 hover:bg-gray-100 p-2 rounded"
            >
              Account Management
            </Link>
          </>
          {/* Add more links as needed */}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">
            Admin Dashboard
          </h1>

          {/* Example Data Section */}
          <section className="bg-white p-6 rounded shadow-sm mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Quick Overview
            </h2>
            {/* Placeholder for data visualization or summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-100 rounded">Total Users</div>
              <div className="p-4 bg-green-100 rounded">Active Portfolios</div>
              <div className="p-4 bg-red-100 rounded">Pending Actions</div>
            </div>
          </section>

          {/* Additional Data Sections */}
          {/* Consider adding more sections with relevant data or functionality as needed */}
        </div>
      </main>
    </div>
  );
};

export default AdminHomePage;
