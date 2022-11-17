import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "../assets/css/callforpaper.css"

export default function CallForPaper() {
  return (
    <div>
      <Navbar />
      <h1 className="callforpaper-heading">Call for Papers</h1>
      <div className="text-container">
        <img src="ijhe.jpeg" alt="ijhe" />
        <p className="callforpaper-text">
          The conference proceedings will be published in <br />
          <a href="https://www.sciencedirect.com/journal/international-journal-of-hydrogen-energy">
            {" "}
            "International Journal of Hydrogen Energy."
          </a>{" "}
          <br />
          (Impact Factor: 7.1)
        </p>
      </div>
      <h1 className="callforpaper-heading-1">
        {" "}
        Download the Abstract Template
      </h1>

      <p className="submission-text">
        Last date for submission of abstract is 31st January 2023.
      </p>
      <div className="button-container">
        <button className="callforpaper-button">
          <a href="https://hpurl.ga/abstract">Download the abstract template</a>
        </button>
      </div>

      <p className="mail-text">
        Please submit your abstracts to <br />
        <a href="mailto:green.hydrogen@pdpu.ac.in">green.hydrogen@pdpu.ac.in</a>
      </p>
      <Footer />
    </div>
  )
}
