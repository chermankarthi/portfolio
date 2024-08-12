import React from "react";
import "../experience/style.css";
import { experiences } from "../../data/details";

const Experience = () => {
  return (
    <div className="experience">
      <div className="container">
        <h1 className="headingExperience">Experiences</h1>
        <div className="row">
          {experiences.map((exp) => (
            <>
              <div className="experienceCard">
                <div className="experienceOrg">
                  <div className="expOrgDiv">
                    <img src={exp.img} className="expOrgLogo"></img>
                  </div>
                  <div className="experienceDetails">
                    <div>
                      <h2>{exp.role}</h2>
                    </div>
                    <div>
                      <h4>{exp.company}</h4>
                    </div>
                    <div>
                      <h6>{exp.date}</h6>
                    </div>
                  </div>
                </div>

                <div className="experienceDesc">
                  <div>
                    <p>{exp.desc}</p>
                  </div>
                  <div className="expSkills">
                    <b>Skills:</b>
                    {exp.skills.map((skill) => (
                      <div className="expSkill">.{skill}</div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
