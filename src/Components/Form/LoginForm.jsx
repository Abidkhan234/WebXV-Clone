import React from "react";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import FormBtn from "../Buttons/FormBtn";
import { FaGoogle } from "react-icons/fa";
import { NavLink } from "react-router";

const LoginForm = ({ isLoginForm }) => {
  return (
    <div>
      {isLoginForm ? (
        <div className="py-5 w-full flex justify-center items-center">
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

              <div className="text-center flex gap-2">
                <p className="text-lg font-medium text-[#E2E6E7]">
                  Don't have an account?
                </p>
                <NavLink
                  to={"/register"}
                  className="text-[#335DD2] ms-1 cursor-pointer text-lg"
                >
                  Register
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="py-5 w-full flex justify-center items-center">
          <div className="register-form w-full max-w-[450px] rounded-2xl px-6 py-4 bg-[#0E151B] flex flex-col gap-8">
            <div className="font-bold text-3xl text-white text-center">
              Login
            </div>
            <div className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Username or Email"
                className="bg-[#18222F] text-[#E2E6E7] text-base font-medium py-2 px-2 rounded-lg placeholder:text-[#E2E6E7] outline-none"
              />
              <div className="flex justify-between bg-[#18222F] rounded-lg items-center px-2">
                <input
                  type="text"
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
              <div className="">
                <FormBtn btnValue={"Login"} />
              </div>
              <div className="">
                <FormBtn
                  btnValue={"CONTINUE WITH GOOGLE"}
                  icon={<FaGoogle />}
                  isClass={true}
                />
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
      )}
    </div>
  );
};

export default LoginForm;
