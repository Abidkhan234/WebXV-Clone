import React from "react";
import image1 from "../../../public/Images/home-images/Partner-Section/image1.png";
import image2 from "../../../public/Images/home-images/Partner-Section/image2.png";
import image3 from "../../../public/Images/home-images/Partner-Section/image3.png";
import image4 from "../../../public/Images/home-images/Partner-Section/image4.png";
import image5 from "../../../public/Images/home-images/Partner-Section/image5.png";
import image6 from "../../../public/Images/home-images/Partner-Section/image6.png";
import image7 from "../../../public/Images/home-images/Partner-Section/image7.png";

const PartnerSection = () => {
  return (
    <div>
      <div className="flex justify-center">
        <h2 className="font-bold text-2xl text-[#335DD2] uppercase">
          Our Partner
        </h2>
      </div>
      <div className="brand-container overflow-hidden my-5">
        <div className="brand flex gap-10 w-full">
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
          <img src={image4} alt="" />
          <img src={image5} alt="" />
          <img src={image6} alt="" />
          <img src={image7} alt="" />
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
          <img src={image4} alt="" />
          <img src={image5} alt="" />
          <img src={image6} alt="" />
          <img src={image7} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
