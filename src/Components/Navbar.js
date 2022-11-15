import React, {useState} from "react"
import logo from "../assets/images/logo.png"
import "../assets/css/navbar.css"
import {Link} from "react-router-dom"
// import Theme from "./Theme";

// import { useRef,useEffect } from "react"
export default function Navbar() {
  const hamburgerr = document.querySelector(".hamburger")
  const navMenu = document.querySelector(".nav-main-menu")
  const [switchToggled, setSwitchToggled] = useState(false)
  const ToggleSwitch = () => {
    switchToggled ? setSwitchToggled(false) : setSwitchToggled(true)
    if (switchToggled === true) {
      hamburgerr.classList.toggle("active")
      navMenu.classList.toggle("active")
    } else {
      hamburgerr.classList.toggle("active")
      navMenu.classList.toggle("active")
    }
  }

  //this below is the old toggle
  // const toggle = () => {
  //     hamburgerr.classList.toggle("active");
  //     navMenu.classList.toggle("active");

  //  };

  return (
    <div className="header">
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="links">
          {/* <ul className="nav-up">
            <li>
              <Link to="/commingsoon" className="upLinks">
                SPONSOR
              </Link>
            </li>
            <li>
              <Link to="/commingsoon" className="upLinks">
                REGISTER
              </Link>
            </li>
          </ul> */}

          <ul className="nav-main-menu">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/themes" className="nav-link">
                THEME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/keynotespeakers" className="nav-link">
                KEYNOTE SPEAKERS
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/committee" className="nav-link">
                COMMITTEES
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/commingsoon" className="nav-link">
                CALL FOR PAPER
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                CONTACT US
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/registration" className="nav-link">
                REGISTRATION
              </Link>
            </li>
          </ul>
        </div>

        <div id="hamburger" className="hamburger" onClick={ToggleSwitch}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </div>
  )
}
