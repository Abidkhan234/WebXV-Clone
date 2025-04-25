import React from "react";
import Button from "../Buttons/Button";

const LastSection = () => {
  return (
    <div className="mb-10">
      <div className="back-image-overlay w-full h-[80vh]">
        <div className="flex justify-center items-center h-full w-full">
          <div className="flex flex-col gap-7 items-center text-center">
            <h1 className="lg:text-6xl sm:text-5xl text-4xl font-bold md:leading-14 leading-10 lg:max-w-[65%] md:max-w-[70%] max-w-full text-white capitalize">
              With XV Token the possibilities are limitless
            </h1>
            <p className="text-lg font-medium text-[#E2E6E7] lg:max-w-[60%] md:max-w-[70%] max-w-full">
              One token for everything. $XV is the utility token for an
              ecosystem that has gotten bigger than ever before and is now fully
              community-oriented.
            </p>
            <Button btnValue={"Register Now"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastSection;
