import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "../assets/css/section_2.css"

export default function Keynote() {
  return (
    <div>
      <Navbar />
      <div className="heading">Keynote Speakers</div>
      <div className="card-container">
        <div className="cards">
          <div className="img-container">
            <img
              src="keynote-speakers/image-5.png"
              alt="speaker"
              className="speaker-img"
            />
            {/* <div className="img-overlay"></div> */}
          </div>

          <div className="speaker-information">
            <h1>Prof. AM Kannan</h1>
            <h2>Arizona State University, USA</h2>
            {/* <p>Some text</p> */}
          </div>
        </div>
        {/* <div className="cards">
          <img
            src="keynote-speakers/image-4.png"
            alt="speaker"
            className="speaker-img"
          />
          <div className="speaker-information">
            <h1>Dr. Marta Duenas Diez</h1>
            <h2>LIFTE H2, Boston, USA</h2>
            <p>Some text</p>
          </div>
        </div> */}
        <div className="cards">
          <img
            src="keynote-speakers/image-2.png"
            alt="speaker"
            className="speaker-img"
          />
          <div className="speaker-information">
            <h1>Prof. Rama Prabhu S.</h1>
            <h2>IIT Chennai</h2>
            {/* <p>Some text</p> */}
          </div>
        </div>
        {/* <div className="cards">
          <img
            src="keynote-speakers/image-6.png"
            alt="speaker"
            className="speaker-img"
          />
          <div className="speaker-information">
            <h1>Prof. Damaraju</h1>
            <h2>ONGC Energy Center, Faridabad</h2>
            <p>Some text</p>
          </div>
        </div> */}
        <div className="cards">
          <img
            src="keynote-speakers/image-3.png"
            alt="speaker"
            className="speaker-img"
          />
          <div className="speaker-information">
            <h1>Prof. S Bandopadhyay</h1>
            <h2>IIT Bombay</h2>
            {/* <p>Some text</p> */}
          </div>
        </div>
        <div className="cards">
          <img
            src="keynote-speakers/image.png"
            alt="speaker"
            className="speaker-img"
          />
          <div className="speaker-information">
            <h1>Prof. S Basu</h1>
            <h2>IIT Delhi</h2>
            {/* <p>Some text</p> */}
          </div>
        </div>
        {/* <div className="cards">
          <img
            src="keynote-speakers/image.png"
            alt="speaker"
            className="speaker-img"
          />
          <div className="speaker-information">
            <h1>Name</h1>
            <h2>University</h2>
            <p>Some text</p>
          </div>
        </div>
        <div className="cards">
          <img
            src="keynote-speakers/image.png"
            alt="speaker"
            className="speaker-img"
          />
          <div className="speaker-information">
            <h1>Name</h1>
            <h2>University</h2>
            <p>Some text</p>
          </div>
        </div>
        <div className="cards">
          <img
            src="keynote-speakers/image.png"
            alt="speaker"
            className="speaker-img"
          />
          <div className="speaker-information">
            <h1>Name</h1>
            <h2>University</h2>
            <p>Some text</p>
          </div>
        </div> */}
      </div>
      <div className="heading"> Enlighting Talk</div>
      <Footer />
    </div>
  )
}
