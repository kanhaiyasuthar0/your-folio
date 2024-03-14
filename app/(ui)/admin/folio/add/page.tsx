// "use client";
import { submitFolio } from "@/actions/submitFolio.action";

import React, { FormEvent } from "react";

const AddFolio = async () => {
  async function submitAction(formData: FormData) {
    "use server";
    await submitFolio(formData);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Add a New Folio
        </h2>
        <form className="mt-8 space-y-6" action={submitAction}>
          <div className="rounded-md shadow-sm space-y-4">
            <input
              type="text"
              name="title"
              required
              placeholder="Title"
              // value={formData.title}
              // onChange={handleChange}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
            <textarea
              name="description"
              rows={4}
              placeholder="Description"
              // value={formData.description}
              // onChange={handleChange}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            ></textarea>
            <input
              type="file"
              name="images"
              multiple
              // onChange={handleChange}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
            <div>
              <input
                type="text"
                name="address.street"
                placeholder="Street"
                // value={formData.address.street}
                // onChange={handleChange}
                className="input"
              />
            </div>
            <div>
              <input
                type="text"
                name="address.city"
                placeholder="City"
                // value={formData.address.city}
                // onChange={handleChange}
                className="input"
              />
            </div>
            <div>
              <input
                type="text"
                name="address.state"
                placeholder="State"
                // value={formData.address.state}
                // onChange={handleChange}
                className="input"
              />
            </div>
            <div>
              <input
                type="text"
                name="address.zipCode"
                placeholder="Zip Code"
                // value={formData.address.zipCode}
                // onChange={handleChange}
                className="input"
              />
            </div>
            <div>
              <input
                type="text"
                name="address.country"
                placeholder="Country"
                // value={formData.address.country}
                // onChange={handleChange}
                className="input"
              />
            </div>
            <input
              type="text"
              name="tags"
              placeholder="Tags (comma-separated)"
              // value={formData.tags}
              // onChange={handleChange}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              // value={formData.category}
              // onChange={handleChange}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
            <input
              type="date"
              name="completionDate"
              placeholder="Completion Date"
              // value={formData.completionDate}
              // onChange={handleChange}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
            <select
              name="status"
              // value={formData.status}
              // onChange={handleChange}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            >
              <option value="">Select Status</option>
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
            </select>
            <select
              name="visibility"
              // value={formData.visibility}
              // onChange={handleChange}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            >
              <option value="">Visibility</option>
              <option value="private">Private</option>
              <option value="public">Public</option>
            </select>
            <input
              type="text"
              name="budget"
              placeholder="Budget"
              // value={formData.budget}
              // onChange={handleChange}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
            <input
              type="text"
              name="client-name"
              placeholder="Client name"
              // value={formData.contactInfo}
              // onChange={handleChange}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
            <input
              type="text"
              name="client-phone"
              placeholder="Client Phone"
              // value={formData.contactInfo}
              // onChange={handleChange}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
            {/* Add more fields as necessary */}
          </div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddFolio;
