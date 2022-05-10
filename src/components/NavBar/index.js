import './index.scss';
import React from "react";
import LogoSam from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="header-container">
      <Link className="logo" to="/">
        <img src={LogoSam} alt="Logo" />
      </Link>
      <div>
        <ul>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
