import React from "react";
import image from "../../../public/Images/home-images/About-section/image1.png";

const AboutSection = ({ heading}) => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-5">
        <div className="lg:col-span-6 col-span-12  py-5 px-3 lg:order-1 order-2">
          <div className="flex flex-col gap-3 lg:max-w-[80%] h-full justify-center items-center text-center lg:items-start lg:text-start">
            <h2 className="font-bold text-xl text-[#335DD2] uppercase">
              {heading}
            </h2>
            <div className="flex flex-col gap-3">
              <h1 className="font-bold lg:text-5xl sm:text-4xl text-3xl text-white">
                Who we are
              </h1>
              <p className="font-medium md:text-lg text-sm sm:leading-7 leading-6 text-[#828493]">
                XV is a community-focused project led by a highly experienced
                team of Web3 builders and traders. Our founder A On made his
                name in the industry moderating for several early crypto
                projects before the 2021 bull run.
              </p>
              <p className="font-medium md:text-lg text-sm sm:leading-7 leading-6 text-[#828493]">
                XV is also supported by several team members that are actively
                involved in the day-to-day running of the community. Join us on
                Telegram and Twitter.
              </p>
            </div>
          </div>
        </div>
        <div className="register-form lg:col-span-6 col-span-12 lg:order-2 order-1 rounded-2xl">
          <div className="w-full h-full flex items-center justify-center overflow-hidden">
            <img
              src={image}
              alt=""
              className="lg:max-w-full h-auto sm:max-w-[70%] max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
