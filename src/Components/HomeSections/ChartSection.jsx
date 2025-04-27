import React from "react";
import image1 from "../../../public/Images/home-images/Chart-section/image1.png";
import image2 from "../../../public/Images/home-images/Chart-section/image2.png";
import image3 from "../../../public/Images/home-images/Chart-section/image3.png";
import image4 from "../../../public/Images/home-images/Chart-section/image4.png";
import image5 from "../../../public/Images/home-images/Chart-section/image5.jpg";
import graph from "../../../public/Images/home-images/Chart-section/Graph.png";
import vector1 from "../../../public/Images/home-images/Chart-section/vector1.png";
import vector2 from "../../../public/Images/home-images/Chart-section/vector2.png";

const ChartSection = () => {
  const arr = [
    {
      image: image1,
      price: "$42,122.00",
      percent: "-2.93%",
      vector: vector1,
      name: "Bitcoin",
      currency: "BTC / USD",
    },
    {
      image: image4,
      price: "$2,214.77",
      percent: "-2.22%",
      vector: vector1,
      name: "Ethereum",
      currency: "ETH / USD",
    },
    {
      image: image5,
      price: "$0.9999",
      percent: "0.04%",
      vector: vector2,
      name: "Tether",
      currency: "USDT / USD",
    },
    {
      image: image3,
      price: "$107.41",
      percent: "-11.20%",
      vector: vector1,
      name: "Solana",
      currency: "SOL / USD",
    },
    {
      image: image2,
      price: "$0.6183",
      percent: "-3.09%",
      vector: vector1,
      name: "XRP",
      currency: "XRP / USD",
    },
  ];

  return (
    <div className="py-12 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-[#335DD2] font-bold text-sm tracking-widest uppercase mb-2">
          Cryptocurrencies
        </h2>
        <h1 className="text-white text-3xl sm:text-5xl font-bold capitalize mb-10 text-center">
          Top Crypto Chart
        </h1>

        <div className="w-full max-w-[1000px] bg-[#0E151B] rounded-2xl overflow-hidden shadow-md border border-[#18222F]">
          <div className="grid grid-cols-3 py-4 px-6 text-[#A1A1A1] text-sm font-semibold border-b border-[#18222F]">
            <div>Name</div>
            <div>Price</div>
            <div>Graph</div>
          </div>

          {arr.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-3 items-center px-6 py-4 text-white text-sm border-b border-[#18222F] hover:bg-[#111921] transition-all"
            >
              {/* Name */}
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-8 h-8 sm:w-11 sm:h-11 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <p className="font-semibold text-sm sm:text-base">
                    {item.name}
                  </p>
                  <span className="text-[#4C5357] text-xs sm:text-sm">
                    {item.currency}
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-center gap-2">
                <p className="font-semibold text-sm sm:text-base">
                  {item.price}
                </p>
                <span
                  className={`text-sm ${
                    item.percent.includes("-")
                      ? "text-[#EA3943]"
                      : "text-[#335DD2]"
                  }`}
                >
                  {item.percent}
                </span>
                <img src={item.vector} alt="trend" className="w-3 h-3" />
              </div>

              {/* Graph */}
              <div className="flex justify-start">
                <img src={graph} alt="Graph" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChartSection;
