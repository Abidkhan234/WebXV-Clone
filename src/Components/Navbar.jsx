import React, { useState } from "react";
import logo from "../../public/Images/Logo.png";
import { NavLink } from "react-router";
import { FaBars } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import Button from "./Buttons/Button";

const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  const navbarElements = [
    {
      name: "Web XV",
      path: "/",
    },
    {
      name: "All Projects",
      path: "/allproject",
    },
    {
      name: "Community",
      path: "/community",
    },
    {
      name: "About us",
      path: "/about",
    },
  ];

  return (
    <div>
      <nav className="w-full py-6 sm:px-10 px-5 bg-[#0b0e12]">
        <div className="flex justify-between items-center w-full">
          <div className="logo">
            <img src={logo} alt="logo" className="w-full h-full object-cover" />
          </div>
          <div className="max-[992px]:hidden">
            <ul className="flex gap-8">
              {navbarElements.map((v, i) => {
                return (
                  <li key={i}>
                    <NavLink
                      className={({ isActive }) =>
                        `font-medium text-lg ${
                          isActive ? "text-gray-500" : "text-white"
                        }`
                      }
                      to={v.path}
                    >
                      {v.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* For Sidebar */}
          <div
            className={`${
              toggleNavbar ? "opacity-100 visible" : "opacity-0 invisible"
            } fixed top-0 right-0 h-screen w-full max-w-[300px] max-[425px]:max-w-full bg-[#10171E] flex flex-col transition-opacity`}
          >
            <div className="side-close absolute top-5 left-[50%] translate-x-[-50%]">
              <button
                className="w-8 h-8 flex justify-center items-center bg-white border-0 rounded-full text-xl font-bold cursor-pointer"
                onClick={() => setToggleNavbar(!toggleNavbar)}
              >
                <IoCloseSharp />
              </button>
            </div>
            <div className="sideBar-logo flex justify-center w-full mt-24">
              <img src={logo} alt="logo" />
            </div>
            <ul className="flex flex-col gap-15 items-center mt-15">
              <li>
                <NavLink className={"font-medium text-xl text-white"} to={"/"}>
                  Web XV
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={"font-medium text-xl text-white"}
                  to={"/allproject"}
                >
                  All Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={"font-medium text-xl text-white"}
                  to={"/community"}
                >
                  Community
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={"font-medium text-xl text-white"}
                  to={"/about"}
                >
                  About us
                </NavLink>
              </li>
            </ul>
          </div>
          {/* For Sidebar */}
          <div className="flex max-[425px]:gap-3.5 gap-5 items-center">
            <div className="sideBar-open min-[992px]:hidden flex items-center">
              <button
                className="text-2xl text-white cursor-pointer"
                onClick={() => setToggleNavbar(!toggleNavbar)}
              >
                <FaBars />
              </button>
            </div>
            <Button btnValue={"Register"} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
