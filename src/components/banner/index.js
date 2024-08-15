import React from "react";
import "../banner/style.css";
import profileImage from "../../images/profileImage.jpg";
import { Typewriter } from "react-simple-typewriter";
import { Bio } from "../../data/details";

const Banner = () => {
  return (
    <div className="banner" id="about">
      <div className="container">
        <div className="row">
          <div className="bannerDetails">
            <h1 className="intro">Hi , I am </h1>
            <h1 className="intro">Cherman </h1>
            <h1 className="role">
              <Typewriter
                words={["Front-End Developer"]}
                loop={5}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              ></Typewriter>
            </h1>
            <p className="description">{Bio.description}</p>
            <button className="resumeBtn">Check Resume</button>
          </div>
          <div className="bannerImage">
            <div className="photoDiv">
              {/* <img src={profileImage} className="profileImage"></img> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
