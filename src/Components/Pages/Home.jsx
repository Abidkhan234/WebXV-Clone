import React from "react";
import HeroSection from "../HomeSections/HeroSection";
import AboutSection from "../HomeSections/AboutSection";
import PartnerSection from "../HomeSections/PartnerSection";
import LastSection from "../HomeSections/LastSection";
import ChartSection from "../HomeSections/ChartSection";
import LoginForm from "../Form/LoginForm";

const Home = () => {
  return (
    <div className="bg-[#0B0E12] flex flex-col gap-15 md:px-10 px-5">
      {/* Hero-section start */}
      <div className="">
        <HeroSection LoginForm={<LoginForm/>} />
      </div>
      {/* Hero-section end */}

      {/* Partner-section start */}
      <div className="">
        <PartnerSection />
      </div>
      {/* Partner-section end */}

      {/* About-section start */}
      <div className="">
        <AboutSection heading={"About Us"} />
      </div>
      {/* About-section end */}

      {/* chart-section start */}
      <div className="">
        <ChartSection />
      </div>
      {/* chart-section end */}

      {/* Last-section start */}
      <div>
        <LastSection />
      </div>
      {/* Last-section end */}
    </div>
  );
};

export default Home;
