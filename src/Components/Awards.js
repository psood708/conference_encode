import React from "react"
import "../assets/css/Awards.css"
import Footer from "./Footer"
import Navbar from "./Navbar"
import "../assets/css/Awards.css"

const Awards = () => {
  return (
    <>
      <Navbar />
      <div className="awards">
        <h1>Global Distinguished Awards 2023 </h1>
        <p>
          The Organizing Committee of 1st International Conference on Green
          Hydrogen for Global Decarbonization with distinguished academicians
          collaborated from all around the world to recognize the potential &
          bestowed International Talents who contributed distinguishably in the
          areas of Emerging Technologies, related areas of Industry Applications
          Society to achieve Sustainable Development Goals for the world.
          Nominations are Invited for following categories:
        </p>
        <div className="awards-lists">
          <ul>A. For Researcher:</ul>
          <li>1. Global Research Excellence Awards</li>
          <li>2. Global Distinguished Researcher Awards</li>
          <li>3. Global Distinguished Young Scientists Awards</li>
        </div>
        <div className="awards-lists">
          <ul>B. For Academician/ Academic Leaders:</ul>
          <li>1. Global Distinguished Educators Awards</li>
          <li>2. Global Distinguished Academic Leaders Awards</li>
          <li>3. Global Lifetime Achievement Awards</li>
        </div>
        <div className="awards-lists">
          <ul>C. For Institutions:</ul>
          <li>1. Global Academic Excellence Awards for Institutions</li>
          <li>2. Global Research Excellence Awards for Institutions</li>
          <li>3. Global Distinguished Vice-Chancellors Awards</li>
        </div>
        <div className="awards-lists">
          <ul>D. For Industry:</ul>
          <li>1. Global Sustainable Development Award</li>
          <li>2. Global Renewable Energy Development award</li>
          <li>3. Global Hydrogen Energy Development award</li>
          <li>4. Global Distinguished Edu-Preneurs Awards</li>
        </div>

        <h2 className="awards-submission">
          {" "}
          The last date for Nomination is 28th February 2023{" "}
        </h2>
        <div className="awards-lists">
          <ul>Please Note: </ul>
          <li>1. Award nomination Registration fee is 500 USD.</li>
          <li>2. Self-nomination is not allowed.</li>
          <li>3. Award will only be delivered to the attendees.(in person)</li>
          <li>
            4. Awardee should be registered for the conference at 200 USD.
          </li>
          <li>
            5. For any Registration and queries, contact us at{" "}<br />
            Email id : <a href="mailto:green.hydrogen@pdpu.ac.in">
              green.hydrogen@pdpu.ac.in
            </a> <br />
            Email id : <a href="mailto:greenhydrogenpdpu@gmail.com">
            greenhydrogenpdpu@gmail.com
            </a>
          </li>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Awards
