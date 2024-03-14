"use client";

import { useState } from "react";

const SidebarSection = ({
  title,
  children,
}: {
  title: string;
  children: any;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        className="flex justify-between w-full text-left font-bold py-2 border-b-2 border-gray-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span>{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <div className="mt-2 pl-2">{children}</div>}
    </div>
  );
};

export default SidebarSection;
