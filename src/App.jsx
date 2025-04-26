import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Community from "./Components/Pages/Community";
import AllProject from "./Components/Pages/AllProject";
import WebLayout from "./Components/Layout/WebLayout";
import Register from "./Components/Pages/Register";
import PrivacyPolicy from "./Components/Pages/PrivacyPolicy";
import TermCondition from "./Components/Pages/TermCondition";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<WebLayout />}>
          <Route path="/WebXV-Clone" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/community" element={<Community />} />
          <Route path="/register" element={<Register />} />
          <Route path="/allproject" element={<AllProject />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/termCondition" element={<TermCondition />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
