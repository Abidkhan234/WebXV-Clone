import React from "react";
import image1 from "../../../public/Images/All-Projects-Images/Main-images/image1.png";
import image2 from "../../../public/Images/All-Projects-Images/Main-images/image2.png";
import image3 from "../../../public/Images/All-Projects-Images/Main-images/image3.png";
import image4 from "../../../public/Images/All-Projects-Images/Main-images/image4.png";
import star1 from "../../../public/Images/All-Projects-Images/Main-images/star1.png";
import star3 from "../../../public/Images/All-Projects-Images/Main-images/star3.png";
import star4 from "../../../public/Images/All-Projects-Images/Main-images/star4.png";

const ProjectSection = () => {
  const cardArr = [
    {
      image: image1,
      stars: star1,
      name: "Decentraland",
      rating: "3.94 / 5",
      votes: "Based on 16 votes",
      description: `Decentraland is a 3D virtual world browser-based platform.
                    Users may buy virtual plots of land in the platform as NFTs
                    via the MANA cryptocurrency, which uses the Ethereum
                    blockchain. Designers can create and sell clothes and
                    accessories for the avatars to be used in the virtual world.`,
      indicator: "Show less",
    },
    {
      image: image2,
      stars: star1,
      name: "House of Degenarates",
      rating: "3.94 / 5",
      votes: "Based on 19 votes",
      description: `Buckle up, fellow degens, because the House of Degenerates ($HOD) is here to redefine the Web3 experience! Embark on the Ultimate Gaming Odyssey...`,
      indicator: "Learn more",
    },
    {
      image: image3,
      stars: star3,
      name: "Axie Infinity",
      rating: "3.44 / 5",
      votes: "Based on 16 votes",
      description: `Axie Infinity is a non-fungible token-based online video game developed by Vietnamese studio Sky Mavis, known for its in-game economy which uses...`,
      indicator: "Learn more",
    },
    {
      image: image4,
      stars: star4,
      name: "EVCoin",
      rating: "3.65 / 5",
      votes: "3.65 / 5",
      description: `EverestCoin’s Play to Earn Game, PeakXV is changing the way blockchain games are played, by bringing fun into the picture. Earn while you play, but...`,
      indicator: "Learn more",
    },
  ];

  return (
    <div className="bg-[#0B0E12]">
      <div className="back-image-overlay-2 w-full pt-20 flex flex-col gap-13 pb-8">
        <div className="flex justify-center">
          <h1 className="lg:text-5xl text-4xl font-semibold text-white">
            All Projects
          </h1>
        </div>
        <div className="flex flex-col w-full items-center gap-6">
          {cardArr.map((v, i) => {
            return (
              <div
                className="register-form w-full max-w-[650px] bg-[#10171E] rounded-xl py-3 px-4"
                key={i}
              >
                <div className="flex gap-3">
                  <div className="">
                    <img
                      src={v.image}
                      alt=""
                      className="sm:w-80 w-[420px] max-[480px]:w-[520px]"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <h2 className="font-semibold text-3xl text-white">
                        {v.name}
                      </h2>
                      <p className="text-[#E2E6E7] font-medium text-base">
                        {v.rating}
                      </p>
                      <p className="font-medium text-sm text-[#A7B5C3]">
                        {v.votes}
                      </p>
                      <img
                        src={v.stars}
                        alt=""
                        className="w-20 object-contain"
                      />
                    </div>
                    <div className="flex flex-col gap-5">
                      <p className="text-[#A7B5C3] font-medium sm:text-base text-sm text-justify leading-7">
                        {v.description}
                      </p>
                      <div className="flex gap-8 items-center flex-wrap">
                        <span className="text-[#335DD2] text-sm font-medium cursor-pointer">
                          {v.indicator} &gt;
                        </span>
                        <span className="text-[#335DD2] text-sm font-medium cursor-pointer">
                          Go To Website &gt;
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
