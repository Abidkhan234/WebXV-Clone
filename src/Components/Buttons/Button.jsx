import React from "react";

const Button = ({ btnValue}) => {
  return (
    <div>
      <button
        className={`font-medium tracking-wide text-lg bg-[#335DD2] text-white py-1 px-3 rounded-md border-2 border-[#335DD2] hover:bg-transparent hover:shadow-md shadow-[#335DD2] transition-all cursor-pointer uppercase`}
      >
        {btnValue}
      </button>
    </div>
  );
};

export default Button;
