import React from "react";

export function Input({ ...props }) {
  return (
    <input
      className="border-0 h-9 mb-4 rounded px-2 outline-none text-gray-500"
      {...props}
    />
  );
}
