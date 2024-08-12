import React from "react";
import "../navbar/style.css";
import { Bio } from "../../data/details";

const Navbar = () => {
  return (
    <nav>
      <div class="container">
        <div className="row">
          <div className="logo">
            <a href="#home" className="linkLogo">
              Portfolio
            </a>
          </div>
          <div className="menu">
            <ul>
              <li>
                <a href="#about" className="linkContent">
                  About
                </a>
              </li>
              <li>
                <a hre="#skills" className="linkContent">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="linkContent">
                  Experiences
                </a>
              </li>
              <li>
                <a href="#projects" className="linkContent">
                  Projects
                </a>
              </li>
              <li>
                <a hre="#education" className="linkContent">
                  Education
                </a>
              </li>
            </ul>
          </div>
          <div className="gitButton">
            <a className="gitLinkBtn">GitHub Profile</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
