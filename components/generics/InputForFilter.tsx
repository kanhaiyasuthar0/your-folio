"use client";
import React, { useCallback } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

function debounce(fn: Function, delay: number) {
  let timeoutId: any;
  return function (...args: any) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const InputForFilter = ({ stateKey }: { stateKey: string }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const debouncedReplace = useCallback(
    debounce((searchString: string) => {
      replace(`${pathname}?${searchString}`);
    }, 300),
    [pathname, replace]
  ); // Adjust debounce time as needed

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const params = searchParams
      ? new URLSearchParams(searchParams)
      : new URLSearchParams();
    if (e.target.value) {
      params.set(stateKey, encodeURIComponent(e.target.value));
    } else {
      params.delete(stateKey);
    }
    debouncedReplace(params.toString());
  };

  return (
    <input
      type="text"
      id="search"
      className="w-full p-2 border border-gray-300 rounded-lg"
      placeholder={`Search ${stateKey}`}
      onChange={handleChange}
    />
  );
};

export default InputForFilter;
