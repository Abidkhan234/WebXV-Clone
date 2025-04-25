import React from "react";

const FormBtn = ({ btnValue, icon, isClass }) => {
  return (
    <div>
      <button
        className={
          isClass
            ? `bg-[#131A23] font-semibold tracking-wide sm:text-lg text-base text-white py-2 px-3 rounded-md transition-all cursor-pointer w-full uppercase flex justify-center items-center gap-3`
            : `font-semibold tracking-wide sm:text-lg text-base bg-[#335DD2] text-white py-2 px-3 rounded-md transition-all cursor-pointer w-full uppercase`
        }
      >
        {icon}
        {btnValue}
      </button>
    </div>
  );
};

export default FormBtn;
