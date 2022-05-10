import "./index.scss";
import React from "react";
import LogoSam from "../../assets/images/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEnvelope,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <header className="header-container">
      <Link className="logo" to="/">
        <img src={LogoSam} alt="Logo" />
      </Link>
      <div>
        <div className="nav-list">
          <NavLink
            exact="true"
            activeclassname="active"
            className="home-link"
            to="/"
          >
            <FontAwesomeIcon icon={faHome} />
          </NavLink>

          <NavLink activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} />
          </NavLink>
          <NavLink
            activeclassname="active"
            className="project-link"
            to="/projects"
          >
            <FontAwesomeIcon icon={faListCheck} />
          </NavLink>
          <NavLink
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
