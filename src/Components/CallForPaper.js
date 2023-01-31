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
          The selected papers will be published in <br />
          <a href="https://www.journals.elsevier.com/international-journal-of-hydrogen-energy/call-for-papers/1st-international-conference-on-green-hydrogen-for-global-de-carbonization">
            {" "}
            "International Journal of Hydrogen Energy."
          </a>{" "}
          <br />
          (Impact Factor: 7.1)
        </p>
      </div>
      <p className="submission-text">
        Last date for submission of abstract is <s>31<sup>st</sup> January</s> 15<sup>th</sup> Feburary 2023.
      </p>
      <div className="button-container">
        <button className="callforpaper-button">
          <a href="https://hpurl.ga/abstract">Download the abstract template</a>
        </button>
      </div>

      <p className="mail-text">
        Please submit your abstracts to <a href="https://forms.gle/a7g4aAtJZuepZmNdA"> Google Form</a>
      </p>
      <Footer />
    </div>
  )
}
