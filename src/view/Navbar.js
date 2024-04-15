import React from "react";
import logo from "../img/logo.png";
//css
import "../css/navbar.css";
//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div className="navbar-container d-flex align-items-center justify-content-between p-2 px-3 sticky-top">
      <div className="logo">
        <img src={logo} className="logo" alt="webdeveloper" />
      </div>
      <div className="nav-call">
        <FontAwesomeIcon icon={faPhoneVolume} className="me-2" />
        9861801177
      </div>
    </div>
  );
}
