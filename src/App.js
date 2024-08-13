import React, { useState } from "react";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Education from "./components/education";
import Footer from "./components/footer";
import ProjectModal from "./modal/project";

const App = () => {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <BrowserRouter>
      <Navbar />
      <Banner />
      <Skills />
      <Experience />
      <Projects openModal={openModal} setOpenModal={setOpenModal} />
      {openModal.state && (
        <ProjectModal
          openModal={openModal}
          setOpenModal={setOpenModal}
        ></ProjectModal>
      )}
      <Education />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
