import React from "react";

const MainSection = ({ contentArr, isPrivacy }) => {
  return (
    <div className="bg-[#0B0E12] md:px-10 px-5">
      <div className="">
        {isPrivacy ? (
          <div className="back-image-overlay-2 w-full hfull pt-20 pb-8">
            <div className="flex flex-col items-center gap-8">
              <h1 className="lg:text-5xl text-4xl font-semibold text-white text-center">
                Privacy Policy
              </h1>
              <div className="flex flex-col gap-2 items-center">
                <h2 className="font-bold md:text-5xl text-4xl text-white">
                  WebXV
                </h2>
              </div>
              <div className="w-full sm:max-w-[750px] py-3 flex flex-col gap-4 px-2">
                <p className="font-medium sm:text-lg text-base md:leading-7 text-[#A1A1A1] text-justify">
                  At WebXV, we take your privacy seriously. This privacy policy
                  explains how we collect, use, and protect your personal
                  information.
                </p>
                <ul className="flex flex-col gap-5 list-disc text-white ps-4">
                  {contentArr.map((v, i) => {
                    return (
                      <li key={i}>
                        <h2 className="font-semibold text-xl text-white shrink-0">
                          {v.title}
                        </h2>
                        <p className="font-medium sm:text-lg text-base md:leading-7 text-[#A1A1A1] text-justify">
                          {v.text}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="back-image-overlay-2 w-full hfull pt-20 pb-8">
            <div className="flex flex-col items-center gap-8">
              <h1 className="lg:text-5xl text-4xl font-semibold text-white text-center">
                Terms And Conditions
              </h1>
              <div className="flex flex-col gap-2 items-center">
                <h4 className="font-semibold text-xl text-[#335DD2]">
                  WELCOME TO
                </h4>
                <h2 className="font-bold md:text-5xl text-4xl text-white">
                  WebXV
                </h2>
              </div>
              <div className="w-full sm:max-w-[750px] py-3 flex flex-col gap-4 px-2">
                <p className="font-medium sm:text-lg text-base md:leading-7 text-[#A1A1A1] text-justify">
                  By accessing or using our platform, you agree to be bound by
                  these terms and conditions. Please read them carefully.
                </p>
                <ul className="flex flex-col gap-5 list-disc text-white ps-4">
                  {contentArr.map((v, i) => {
                    return (
                      <li key={i}>
                        <h2 className="font-semibold text-xl text-white shrink-0">
                          {v.title}
                        </h2>
                        <p className="font-medium sm:text-lg text-base md:leading-7 text-[#A1A1A1] text-justify">
                          {v.text}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainSection;
