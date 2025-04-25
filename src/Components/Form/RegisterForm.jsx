import React from "react";
import { FaGoogle } from "react-icons/fa";
import { NavLink } from "react-router";
import FormBtn from "../Buttons/FormBtn";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";

const RegisterForm = () => {
  return (
    <div>
      <div className="py-5 w-full flex justify-center items-center">
        <div className="register-form w-full max-w-[450px] rounded-2xl px-6 py-4 bg-[#0E151B] flex flex-col gap-8">
          <div className="font-bold text-3xl text-white text-center">Registration</div>
          <div className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Username"
              className="bg-[#18222F] text-[#E2E6E7] text-base font-medium py-2 px-2 rounded-lg placeholder:text-[#E2E6E7] outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-[#18222F] text-[#E2E6E7] text-base font-medium py-2 px-2 rounded-lg placeholder:text-[#E2E6E7] outline-none"
            />
            <input
              type="email"
              placeholder="Re-type email"
              className="bg-[#18222F] text-[#E2E6E7] text-base font-medium py-2 px-2 rounded-lg placeholder:text-[#E2E6E7] outline-none"
            />
            <div className="flex justify-between bg-[#18222F] rounded-lg items-center px-2">
              <input
                type="password"
                placeholder="Password"
                className="grow text-[#E2E6E7] text-base font-medium py-2 placeholder:text-[#E2E6E7] outline-none"
              />
              <div>
                <button className="text-white text-lg flex justify-center items-center cursor-pointer">
                  <RiEyeLine className="hidden" />
                  <RiEyeOffLine />
                </button>
              </div>
            </div>
            <div className="flex justify-between bg-[#18222F] rounded-lg items-center px-2">
              <input
                type="password"
                placeholder="Re-type password"
                className="grow text-[#E2E6E7] text-base font-medium py-2 placeholder:text-[#E2E6E7] outline-none"
              />
              <div>
                <button className="text-white text-lg flex justify-center items-center cursor-pointer">
                  <RiEyeLine className="hidden" />
                  <RiEyeOffLine />
                </button>
              </div>
            </div>
            <input
              type="text"
              placeholder="Wallet address"
              className="bg-[#18222F] text-[#E2E6E7] text-base font-medium py-2 px-2 rounded-lg placeholder:text-[#E2E6E7] outline-none"
            />
            <div className="">
              <FormBtn btnValue={"Register"} />
            </div>

            <div className="text-center">
              <span className="text-[#E2E6E7] font-medium text-sm cursor-pointer">
                Forgotten your password?
              </span>
            </div>

            <div className="text-center">
              <p className="text-lg font-medium text-[#E2E6E7]">
                Already have an account?
                <NavLink
                  to={"/community"}
                  className="text-[#335DD2] ms-1 cursor-pointer"
                >
                  Login
                </NavLink>
              </p>
            </div>

            <div className="">
              <FormBtn
                btnValue={"CONTINUE WITH GOOGLE"}
                icon={<FaGoogle />}
                isClass={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
