import React from "react";
import "../../modal/project/style.css";
import CloseIcon from "@mui/icons-material/Close";

const ProjectModal = ({ openModal, setOpenModal }) => {
  const project = openModal.project;
  return (
    <>
      {openModal && (
        <div className="project-modal">
          <div className="container">
            <div className="row">
              <div className="project-modal-card">
                <div>
                  <div
                    className="modal-close-btn"
                    onClick={() =>
                      setOpenModal({ state: false, project: null })
                    }
                  >
                    <CloseIcon />
                  </div>
                </div>
                <div className="project-modal-image-div">
                  <img
                    src={project.image}
                    className="project-modal-image"
                  ></img>
                </div>
                <div>{project.title}</div>
                <div>{project.date}</div>
                <div className="project-tags-div">
                  {project.tags.map((item) => (
                    <div className="project-tags">{item}</div>
                  ))}
                </div>
                <div className="project-description">{project.description}</div>
                <div className="project-modal-btns">
                  <a
                    className="project-code-btn"
                    href={project?.github}
                    target="new"
                  >
                    View Code
                  </a>
                  <a
                    className="project-live-btn"
                    href={project?.webapp}
                    target="new"
                  >
                    Live App
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectModal;
