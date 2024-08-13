import React from "react";
import "../../cards/education/style.css";

const EducationCard = ({ educations }) => {
  return (
    <div className="educationCard">
      <div className="educationOrg">
        <img src={educations.img} className="educationLogo"></img>
        <div>
          <h4>{educations.school}</h4>
          <h4>{educations.degree}</h4>
          <h6>{educations.date}</h6>
        </div>
      </div>
      <div>Grade:{educations.grade}</div>
      <div className="educationDesc">{educations.desc}</div>
    </div>
  );
};

export default EducationCard;
