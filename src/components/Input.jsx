import React from "react";

const Input = ({ field ,type, refer }) => {
  return (
    <div className="mt-4 mb-2 text-white">
      <input
      ref={refer}
        placeholder={field}
        type={type}
        className="px-2 py-3 w-full border border-gray-600 bg-black rounded-md"
      />
    </div>
  );
};

export default Input;
