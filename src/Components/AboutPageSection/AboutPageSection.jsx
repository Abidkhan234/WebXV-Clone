import React from "react";
import AboutSection from "../HomeSections/AboutSection";
import image1 from "../../../public/Images/About-images/image1.png";
import image2 from "../../../public/Images/About-images/image2.png";
import image3 from "../../../public/Images/About-images/image3.png";
import image4 from "../../../public/Images/About-images/image4.png";

const AboutPageSection = () => {
  const cardArr = [
    {
      title: "Create a Wallet",
      text: (
        <>
          Download Metamask App or any wallet
          <br />
          <br />
          Download the Google chrome extension
        </>
      ),
      image: image1,
    },
    {
      title: "Get ETH/BNB",
      text: (
        <>
          Have ETH or BNB in your wallet to swap to $XV
          <br />
          <br />
          If you don’t have any ETH, you can buy directly on Metamask
          <br />
          <br />
          Transfer from another wallet
        </>
      ),
      image: image2,
    },
    {
      title: "Go to Uniswap or PancakeSwap",
      text: (
        <>
          Connect to Uniswap if you're buying on ETH side or PancakeSwap
          <br />
          <br />
          Paste the $VX token address into Uniswap, select XV, and confirm.
          <br />
          <br />
          When Metamask prompts you for a wallet signature, sign.
        </>
      ),
      image: image3,
    },
    {
      title: "Swap your ETH or BNB for $XV",
      text: (
        <>
          Swap your ETH/BNB for $XV
          <br />
          <br />
          We have a 5% tax so you need to set your slippage a little above 6%
          specific slippage
          <br />
          <br />
          You may need to use higher slippage during times of market volatility
        </>
      ),
      image: image4,
    },
  ];

  return (
    <div className="bg-[#0B0E12]">
      <div className="back-image-overlay-2 w-full hfull pt-20 pb-8">
        <div className="flex justify-center">
          <h1 className="lg:text-5xl text-4xl font-semibold text-white">
            About Us
          </h1>
        </div>
        <div className="px-10 mt-16 flex flex-col gap-20">
          <div className="">
            <AboutSection heading={"About WEBXV"} />
          </div>
          <div className="flex justify-center">
            <h1 className="font-bold lg:text-5xl text-4xl text-white capitalize">
              How you Buy $XV Token
            </h1>
          </div>
          <div className="grid grid-cols-12 gap-5">
            {cardArr.map((v, i) => {
              return (
                <div
                  key={i}
                  className="register-form flex flex-col gap-7 sm:p-5 p-2.5 bg-[#10171E] rounded-xl md:col-span-6 col-span-12"
                >
                  <div className="w-full">
                    <img
                      src={v.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-center md:text-start text-center md:items-start gap-5 sm:py-5 py-2.5">
                    <h4 className="font-semibold sm:text-4xl text-3xl text-white">
                      {v.title}
                    </h4>
                    <p className="sm:text-base font-medium text-[#A7B5C3] text-sm">
                      {v.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageSection;
