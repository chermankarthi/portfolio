import React from "react";
import "../../cards/education/style.css";

const EducationCard = ({ educations }) => {
  return (
    <div className="education-card">
      <div className="education-org">
        <div className="education-logo-div">
          <img src={educations.img} className="education-logo"></img>
        </div>
        <div className="edu-desc-div">
          <h4 className="edu-school" style={{ padding: "0px", margin: "0px" }}>
            {educations.school}
          </h4>
          <h4 className="edu-degree">{educations.degree}</h4>
          <h6>{educations.date}</h6>
        </div>
      </div>
      <div className="edu-grade">Grade:{educations.grade}</div>
      <div className="education-desc">{educations.desc}</div>
    </div>
  );
};

export default EducationCard;
