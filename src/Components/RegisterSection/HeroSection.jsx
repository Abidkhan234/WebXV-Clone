import React from "react";
import RegisterForm from "../Form/RegisterForm";
import image1 from "../../../public/Images/Community-images/image1.png";
import image2 from "../../../public/Images/Community-images/image2.png";
import image3 from "../../../public/Images/Community-images/image3.png";
import image4 from "../../../public/Images/Community-images/image4.png";
import image5 from "../../../public/Images/Community-images/image5.png";
import image6 from "../../../public/Images/Community-images/image6.png";
import image7 from "../../../public/Images/Community-images/image7.png";
import image8 from "../../../public/Images/Community-images/image8.png";
import image9 from "../../../public/Images/Community-images/image9.png";
import image10 from "../../../public/Images/Community-images/image10.png";
import image11 from "../../../public/Images/Register-images/image1.png";
import image12 from "../../../public/Images/Register-images/image2.png";
import image13 from "../../../public/Images/Register-images/image3.png";
import image14 from "../../../public/Images/Register-images/image4.png";
import image15 from "../../../public/Images/Register-images/image5.png";

const HeroSection = () => {
  const images = [
    image2,
    image3,
    image4,
    image5,
    image6,
    image12,
    image13,
    image11,
    image14,
    image15,
    image7,
    image10,
    image8,
    image9,
    image1,
  ];

  return (
    <div className="bg-[#0B0E12]">
      <div className="grid grid-cols-12 gap-5 md:px-10 px-5 py-22">
        <div className="lg:col-span-6 col-span-12">
          <div className="relative w-full h-full flex lg:justify-start md:justify-center">
            <div className="grid grid-cols-5 h-full rounded-2xl overflow-hidden md:w-[70%] lg:w-full">
              {images.map((v, i) => {
                return (
                  <div className="" key={i}>
                    <img
                      src={v}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                );
              })}
            </div>
            <div className="absolute flex flex-col gap-3 bottom-5 lg:left-5 md:left-40 left-0 min-[425px]:px-2 grow">
              <h1 className="lg:text-4xl sm:text-3xl max-[425px]:text-xl text-2xl text-white font-bold">
                Join our amazing community
              </h1>
              <p className="font-medium sm:text-sm sm:leading-6 text-[14px] text-justify text-white">
                Meet cool Web3 projects and connect with other crypto
                enthusiasts!
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 col-span-12">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
