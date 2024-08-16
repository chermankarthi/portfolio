import React from "react";
import "../../modal/project/style.css";
import CloseIcon from "@mui/icons-material/Close";

const ProjectModal = ({ openModal, setOpenModal }) => {
  const project = openModal.project;
  return (
    <>
      {openModal && (
        <div className="projectModal">
          <div className="container">
            <div className="row">
              <div className="projectModalCard">
                <div>
                  <div
                    className="modalCloseBtn"
                    onClick={() =>
                      setOpenModal({ state: false, project: null })
                    }
                  >
                    <CloseIcon />
                  </div>
                </div>
                <div className="projectModalImageDiv">
                  <img src={project.image} className="projectModalImage"></img>
                </div>
                <div>{project.title}</div>
                <div>{project.date}</div>
                <div className="projectTagsDiv">
                  {project.tags.map((item) => (
                    <div className="projectTags">{item}</div>
                  ))}
                </div>
                <div className="projectDescription">{project.description}</div>
                <div className="projectModalBtns">
                  <div className="projectCodeBtn">View Code</div>
                  <div className="projectLiveBtn">Live App</div>
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
