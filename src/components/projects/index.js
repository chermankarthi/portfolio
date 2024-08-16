import React, { useState } from "react";
import "../projects/style.css";
import { projects } from "../../data/details";
import ProjectCard from "../../cards/projects/projectCard";

const Projects = ({ openModal, setOpenModal }) => {
  return (
    <div className="projects" id="projects">
      <div className="container">
        <h1 className="projects-heading">PROJECTS</h1>
        <div className="row">
          {projects.map((project) => (
            <ProjectCard
              project={project}
              openModal={openModal}
              setOpenModal={setOpenModal}
            ></ProjectCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
