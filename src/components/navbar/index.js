import React, { useState } from "react";
import "../navbar/style.css";
import { Bio } from "../../data/details";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div class="container">
        <div className="row">
          <div className="logo">
            <a href="#about" className="link-logo">
              Portfolio
            </a>
          </div>
          <div className="mobile-icon">
            <FaBars onClick={() => setIsOpen(!isOpen)} />
          </div>
          <div className="menu">
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#experience">Experiences</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#education">Education</a>
              </li>
            </ul>
          </div>
          <div className="git-button-div">
            <a className="git-link-btn">GitHub Profile</a>
          </div>
        </div>
        {isOpen && (
          <div>
            <ul className="row-mobile-nav">
              <li onClick={() => setIsOpen(!isOpen)}>
                <a href="#about">About</a>
              </li>
              <li onClick={() => setIsOpen(!isOpen)}>
                <a href="#skills">Skills</a>
              </li>
              <li onClick={() => setIsOpen(!isOpen)}>
                <a href="#experience">Experiences</a>
              </li>
              <li onClick={() => setIsOpen(!isOpen)}>
                <a href="#projects">Projects</a>
              </li>
              <li onClick={() => setIsOpen(!isOpen)}>
                <a href="#education">Education</a>
              </li>
              <li onClick={() => setIsOpen(!isOpen)}>
                <a href="">GitHub Profile</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
