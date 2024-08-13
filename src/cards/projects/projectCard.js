import React, { useState } from "react";
import "../../cards/projects/style.css";

const ProjectCard = ({ project, openModal, setOpenModal }) => {
  return (
    <div
      className="projectCard"
      onClick={() => setOpenModal({ state: true, project: project })}
    >
      <div>
        <img src={project.image} className="projectImage"></img>
      </div>
      <div className="projectTagsDiv">
        {project.tags.map((item) => (
          <div className="projectTags">{item}</div>
        ))}
      </div>
      <div>{project.title}</div>
      <div>{project.date}</div>
      <div className="projectDescription">{project.description}</div>
    </div>
  );
};

export default ProjectCard;
