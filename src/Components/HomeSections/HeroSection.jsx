import React from "react";
import Button from "../Buttons/Button";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import FormBtn from "../Buttons/FormBtn";
import { NavLink } from "react-router";

const HeroSection = () => {
  return (
    <div className="pt-6">
      <div className="grid grid-cols-12 gap-5">
        <div className="lg:col-span-6 col-span-12  py-5 px-3">
          <div className="flex flex-col gap-8 lg:max-w-[80%] h-full justify-center items-center text-center lg:items-start lg:text-start">
            <h1 className="font-bold lg:text-6xl sm:text-5xl text-3xl text-white">
              Welcome to WebXV
            </h1>
            <p className="font-medium md:text-lg text-base text-white">
              Meet cool WEB3 projects and connect with other crypto enthusiasts!
            </p>
            <div>
              <Button btnValue={"Register Now"} />
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 col-span-12 py-5 w-full flex justify-center items-center">
          <div className="register-form w-full max-w-[450px] rounded-2xl px-6 py-4 bg-[#0E151B] flex flex-col gap-8">
            <div className="font-bold text-3xl text-white text-center">
              Welcome Back
            </div>
            <div className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Username or Email"
                className="bg-[#18222F] text-[#E2E6E7] text-base font-medium py-2 px-2 rounded-lg placeholder:text-[#E2E6E7]"
              />
              <div className="flex justify-between bg-[#18222F] rounded-lg items-center px-2">
                <input
                  type="text"
                  placeholder="Password"
                  className="grow text-[#E2E6E7] text-base font-medium py-2 placeholder:text-[#E2E6E7]"
                />
                <div className="text-white text-lg">
                  <RiEyeLine className="hidden" />
                  <RiEyeOffLine />
                </div>
              </div>
              <div className="">
                <FormBtn btnValue={"Login"} />
              </div>

              <div className="text-center">
                <span className="text-[#E2E6E7] font-medium text-sm cursor-pointer">
                  Forgotten your password?
                </span>
              </div>

              <div className="text-center">
                <p className="text-lg font-medium text-[#E2E6E7]">
                  Don't have an account?
                  <NavLink
                    to={"/register"}
                    className="text-[#335DD2] ms-1 cursor-pointer"
                  >
                    Register
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
