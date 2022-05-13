import "./index.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
      <ul>
      <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/frye">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/samulijarvinen/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC4Qj7hoaRZYkPivIAocNtiA">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </li>
        <li>
          <NavLink to="contact">
            <FontAwesomeIcon icon={faEnvelope} />
          </NavLink>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
