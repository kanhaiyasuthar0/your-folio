import SidebarSection from "@/components/generics/SideBarSectionRequirement";

function RequirementsHome() {
  // Inline SVG for the sort icon, similar to ArrowUpDownIcon
  const SortIcon = () => (
    <svg
      className="w-4 h-4 mr-2"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 4a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm0 8a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm0 8a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z"
      ></path>
    </svg>
  );

  // Simulate a list of 20 dummy items
  const dummyItems = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    title: `Requirement Title ${i + 1}`,
    description:
      "This is a brief description of the requirement. It provides an overview of what needs to be done.",
    status: i % 2 === 0 ? "Public" : "Private",
    publisher: `Publisher ${i + 1}`,
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <section className="grid md:grid-cols-[300px_1fr] gap-6">
        <aside className="space-y-4 p-4 bg-white rounded-lg shadow">
          <SidebarSection title="Location Filters">
            <input
              className="border p-2 rounded w-full mb-2"
              type="text"
              placeholder="State"
            />
            <input
              className="border p-2 rounded w-full mb-2"
              type="text"
              placeholder="District"
            />
            <input
              className="border p-2 rounded w-full"
              type="text"
              placeholder="Pincode"
            />
          </SidebarSection>

          <SidebarSection title="Property Type">
            <div className="flex flex-col">
              <label className="cursor-pointer">
                <input type="checkbox" className="mr-2" />
                1BHK
              </label>
              <label className="cursor-pointer">
                <input type="checkbox" className="mr-2" />
                2BHK
              </label>
              <label className="cursor-pointer">
                <input type="checkbox" className="mr-2" />
                Flat
              </label>
              <label className="cursor-pointer">
                <input type="checkbox" className="mr-2" />
                Building
              </label>
            </div>
          </SidebarSection>

          <SidebarSection title="Price Range">
            {/* Implement a slider or two inputs for min and max price */}
            <input
              className="border p-2 rounded w-full mb-2"
              type="number"
              placeholder="Min Price"
            />
            <input
              className="border p-2 rounded w-full"
              type="number"
              placeholder="Max Price"
            />
          </SidebarSection>

          <SidebarSection title="Tags">
            {/* Example tag inputs, could be dynamically generated */}
            <div className="flex flex-wrap gap-2">
              <label className="cursor-pointer">
                <input type="checkbox" className="mr-2" />
                Tag 1
              </label>
              <label className="cursor-pointer">
                <input type="checkbox" className="mr-2" />
                Tag 2
              </label>
              {/* Add more tags as needed */}
            </div>
          </SidebarSection>

          {/* Add more filters as needed */}
        </aside>

        {/* Main content area */}
        <main>
          {/* Sorting options */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Requirements</h1>
            <button className="flex items-center p-2 border border-gray-300 rounded-md">
              <SortIcon />
              Sort
            </button>
          </div>

          {/* List of requirement cards */}
          <div className="grid md:grid-cols-1 gap-4">
            {dummyItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-lg shadow-lg flex flex-col md:flex-row justify-between"
              >
                <div className="mb-4 md:mb-0">
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                <div className="text-sm">
                  <p>
                    Status:{" "}
                    <span
                      className={`font-semibold ${
                        item.status === "Public"
                          ? "text-green-600"
                          : "text-yellow-600"
                      }`}
                    >
                      {item.status}
                    </span>
                  </p>
                  <p>Publisher: {item.publisher}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </section>
    </div>
  );
}

export default RequirementsHome;
