import React from "react";
import logo from "../../public/Images/Logo.png";
import { NavLink } from "react-router";

const Footer = () => {
  const arr = [
    {
      name: "Home",
      url: "/WebXV-Clone",
    },
    {
      name: "About us",
      url: "/about",
    },
    {
      name: "Projects",
      url: "/allproject",
    },
    {
      name: "Community",
      url: "/community",
    },
    {
      name: "Privacy Policy",
      url: "/privacyPolicy",
    },
    {
      name: "Terms & Conditions",
      url: "/termCondition",
    },
  ];

  const social = ["TikTok", "Twitter", "YouTube", "Telegram"];

  return (
    <div>
      <footer className="w-full bg-[#0B0E12] sm:px-10 px-5">
        <div className="grid grid-cols-12 gap-5">
          <div className="md:col-span-6 col-span-12 py-5 px-2">
            <div className="flex flex-col gap-5">
              <div className="logo flex max-[767px]:justify-center">
                <img src={logo} alt="logo" />
              </div>
              <div className="flex flex-col gap-3 text-[#A7B5C3] lg:max-w-[65%] text-justify max-[767px]:items-center max-[767px]:text-center">
                <p className="font-medium text-sm tracking-wide leading-6">
                  A SocialFi platform for Web3.0 projects to connect with users.
                </p>
                <p className="font-medium text-sm tracking-wide leading-6">
                  WebXV is a decentralized social platform for Web3.0 users to
                  meet and connect with one another
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 col-span-12 py-5 px-2">
            <div className="flex lg:gap-8 gap-10 md:justify-start justify-between flex-wrap max-[330px]:justify-center">
              <div className="flex flex-col lg:gap-3">
                <h3 className="text-2xl text-white font-semibold">Company</h3>
                <ul className="flex flex-col gap-4">
                  {arr.map((v, i) => {
                    return (
                      <NavLink
                        key={i}
                        className={({ isActive }) =>
                          `font-medium text-base ${
                            isActive ? "text-[#A7B5C3]" : "text-white"
                          }`
                        }
                        to={v.url}
                      >
                        {v.name}
                      </NavLink>
                    );
                  })}
                </ul>
              </div>
              <div className="flex flex-col gap-4 max-[325px]:grow max-[325px]:ms-14">
                <div className="">
                  <h3 className="text-2xl text-white font-semibold">Social</h3>
                </div>
                {social.map((v, i) => {
                  return (
                    <span
                      className="font-medium text-base text-[#A7B5C3]"
                      key={i}
                    >
                      {v}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-3">
          <p className="text-base font-medium text-[#A7B5C3] min-[425px]:text-center">
            © Copyright 2025 XV Clone | All Rights Reserved | WhitePaper
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
