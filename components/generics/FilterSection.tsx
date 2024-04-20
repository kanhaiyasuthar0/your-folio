import React from "react";
import InputForFilter from "./InputForFilter";

const FilterSection = ({ stateKey }: { stateKey: string }) => {
  return (
    <div className="sticky top-0 p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>
      <div className="mb-4">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <InputForFilter stateKey={stateKey} />
      </div>
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Date Range</h3>
        <input
          type="date"
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <span className="mx-2">to</span>
        <input
          type="date"
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Type</h3>
        <select className="w-full p-2 border border-gray-300 rounded-lg">
          <option value="">All Types</option>
          <option value="photography">Photography</option>
          <option value="design">Design</option>
          <option value="art">Art</option>
        </select>
      </div>
      {/* Additional filters as needed */}
    </div>
  );
};

export default FilterSection;
