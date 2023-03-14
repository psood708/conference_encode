import React, {useState, useEffect} from "react"
import logo from "../assets/images/logo.png"
import logo2 from "../assets/images/logo2.png"
import "../assets/css/navbar.css"
import {Link} from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faChevronDown} from "@fortawesome/free-solid-svg-icons"
import Theme from "./Theme"
import Marquee from "react-fast-marquee"
import Update from "./Update"
import axios from "axios"

// import { useRef,useEffect } from "react"
export default function Navbar() {
  const [fetchedData, setFetchedData] = useState([])
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/updates")
      .then((res) => {
        // console.log(res.data)
        setFetchedData(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

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
          <div className="logo-container">
            <img className="icghd-logo" src={logo2} alt="Logo2" />
            <img className="pdeu-logo" src={logo} alt="Logo" />
          </div>
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
              {/* <div className="dropdown">
                <button className="dropdown-button">
                  For Authors
                </button>
                <div className="dropdown-content">
                <Link to="/callforpapers" className="nav-link">
                  CALL FOR PAPER
                </Link>
                <Link to="/registration" className="nav-link">
                  REGISTRATION
                </Link>
                </div>
              </div> */}
              <li class="dropdown">
                <div class="dropbtn">
                  FOR AUTHORS
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="down-arrow-icon"
                  />
                </div>
                <div class="dropdown-content">
                  <Link to="/callforpapers" className="nav-link">
                    CALL FOR PAPER
                  </Link>
                  <Link to="/registration" className="nav-link">
                    REGISTRATION
                  </Link>
                </div>
              </li>
            </li>
            <li className="nav-item">
              <Link to="/awards" className="nav-link">
                NEWS
              </Link>
            </li>
            <li className="nav-item">
              <a
                href="https://drive.google.com/file/d/1vMPKQjEftY37k_AI7zozjw3l9VUHeZxl/view?usp=sharing"
                className="nav-link"
                target="_blank"
                rel="noreferrer"
              >
                ITINERARY
              </a>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                CONTACT US
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

      <Marquee gradient={false} style={{color: "white"}}>
        {fetchedData.map((data) => (
          <Update update={data.update} />
        ))}
      </Marquee>
    </div>
  )
}
