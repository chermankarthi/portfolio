import React from "react";
import "../skills/style.css";
import { skills } from "../../data/details";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="container">
        {skills.map((skill) => (
          <>
            <h1 className="headingSkills">SKILLS</h1>
            <div className="row">
              <div className="skillsBox">
                <div>
                  <h2 className="headingRole">{skill.title}</h2>
                </div>
                <div className="skillItems">
                  {skill.skills.map((item) => (
                    <>
                      <div className="skillSet">
                        <div className="skillLogo">
                          <img src={item.image} className="skillImage"></img>
                        </div>
                        <div className="skillName">{item.name}</div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Skills;
