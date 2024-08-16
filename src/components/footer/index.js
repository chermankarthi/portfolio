import React from "react";
import "../footer/style.css";
import { Bio } from "../../data/details";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="  profile-name">{Bio.name}</div>
          <div className="nav-links-div">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
          </div>
          <div className="nav-links-div">
            <a href={Bio.linkedin}>
              <LinkedInIcon />
            </a>
            <a href={Bio.twitter}>
              <TwitterIcon />
            </a>
            <a href={Bio.insta}>
              <InstagramIcon />
            </a>
            <a href={Bio.facebook}>
              <FacebookIcon />
            </a>
          </div>
          <div>2024 cherman.All rights reserved</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
