import React from "react";
import "../skills/style.css";
import { skills } from "../../data/details";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="container">
        {skills.map((skill) => (
          <>
            <h1 className="heading-skills">SKILLS</h1>
            <div className="row">
              <div className="skills-box">
                <div>
                  <h2 className="heading-role">{skill.title}</h2>
                </div>
                <div className="skill-items">
                  {skill.skills.map((item) => (
                    <>
                      <div className="skill-set">
                        <div className="skill-logo">
                          <img src={item.image} className="skill-image"></img>
                        </div>
                        <div className="skill-name">{item.name}</div>
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
