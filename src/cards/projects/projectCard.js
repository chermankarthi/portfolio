import React, { useState } from "react";
import "../../cards/projects/style.css";

const ProjectCard = ({ project, openModal, setOpenModal }) => {
  return (
    <div
      className="project-card"
      onClick={() => setOpenModal({ state: true, project: project })}
    >
      <div className="card">
        <div>
          <img src={project.image} className="project-image"></img>
        </div>
        <div className="project-tags-div">
          {project.tags.map((item) => (
            <div className="project-tags">{item}</div>
          ))}
        </div>
        <div>{project.title}</div>
        <div>{project.date}</div>
        <div className="project-description">{project.description}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
