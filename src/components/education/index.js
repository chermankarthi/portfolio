import React from "react";
import { education } from "../../data/details";
import EducationCard from "../../cards/education";
import "../education/style.css";

const Education = () => {
  return (
    <div className="education" id="education">
      <div className="container">
        <h1 className="education-heading">EDUCATION</h1>
        <div className="row">
          {education.map((educations) => (
            <EducationCard educations={educations}></EducationCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
