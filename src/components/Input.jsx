import React from "react";

const Input = ({ field ,type }) => {
  return (
    <div className="my-4 text-white">
      <input
        placeholder={field}
        type={type}
        className="px-2 py-3 w-full border border-gray-600 bg-black rounded-md"
      />
    </div>
  );
};

export default Input;
