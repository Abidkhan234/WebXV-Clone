import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbar";
import Footer from "../Footer";

const WebLayout = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Determining scroll direction
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 100);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);
  return (
    <div>
      <div
        className={`sticky top-0 right-0 left-0 transition-all duration-200 z-50 ${
          visible ? "translate-y-[0px]" : "translate-y-[-100px]"
        }`}
      >
        <Navbar />
      </div>

      <Outlet />

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default WebLayout;
