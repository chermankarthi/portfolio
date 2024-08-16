import React from "react";
import "../experience/style.css";
import { experiences } from "../../data/details";
import CircleIcon from "@mui/icons-material/Circle";

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <div className="container">
        <h1 className="heading-experience">EXPERIENCES</h1>
        <div className="row">
          {experiences.map((exp) => (
            <>
              <div className="experience-card">
                <div className="experience-org">
                  <div className="expOrgDiv">
                    <img src={exp.img} className="exp-org-logo"></img>
                  </div>
                  <div className="experience-details">
                    <div>
                      <h2 className="exp-role">{exp.role}</h2>
                    </div>
                    <div>
                      <h4 className="exp-company"> {exp.company}</h4>
                    </div>
                    <div>
                      <h6>{exp.date}</h6>
                    </div>
                  </div>
                </div>

                <div className="experience-desc">
                  <div className="exp-desc-details">
                    <p>{exp.desc}</p>
                  </div>
                  <div className="exp-skills">
                    <div>
                      <b>Skills:</b>
                    </div>
                    <div className="exp-skill-items">
                      {exp.skills.map((skill) => (
                        <div className="exp-skill">
                          <div>
                            <CircleIcon className="dot-icon" />
                          </div>
                          <div>{skill}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <a href={exp.doc}>
                  <img src={exp.doc} className="exp-doc"></img>
                </a>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
