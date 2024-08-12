import React from "react";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Skills from "./components/skills";
import Experience from "./components/experience";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Banner />
      <Skills />
      <Experience />
    </BrowserRouter>
  );
};

export default App;
