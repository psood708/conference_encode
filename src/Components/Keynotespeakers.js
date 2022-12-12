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
          <div className="img-container">
            <img
              src="https://www.eme.psu.edu/sites/www.eme.psu.edu/files/styles/directory_photo/public/directoryphotos/dzade.png?itok=jadv9Pp2"
              alt="speaker"
              className="speaker-img"
            />
          </div>
          <div className="speaker-information">
            <h1>Dr. Nelson Y. Dzade</h1>
            <h2>Pennsylvania State University</h2>
            {/* <p>Some text</p> */}
          </div>
        </div>
        <div className="cards">
          <img
            src="https://f000.backblazeb2.com/file/hp-cloud/Conference/Garcia-Navarro.jpeg"
            alt="speaker"
            className="speaker-img"
          />
          <div className="speaker-information">
            <h1>Dr. -Ing. Julio C. Garcia-Navarro</h1>
            <h2>University of Stuttgart</h2>
            {/* <p>Some text</p> */}
          </div>
        </div>
        <div className="cards">
          <img
            src="https://f000.backblazeb2.com/file/hp-cloud/kiran.jpeg"
            alt="speaker"
            className="speaker-img"
          />
          <div className="speaker-information">
            <h1>Dr kiran K alla</h1>
            <h2>Plug Power Inc. USA</h2>
            {/* <p>Some text</p> */}
          </div>
        </div>
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
      </div>
      <div className="heading"> Enlighting Talk</div>
      <div className="card-container">
        <div className="cards">
          <img
            src="https://f000.backblazeb2.com/file/hp-cloud/Conference/arnab-datta.jpeg"
            alt="speaker"
            className="speaker-img"
          />
          <div className="speaker-information">
            <h1>Arnab Datta</h1>
            <h2>IIT Bombay</h2>
            {/* <p>Some text</p> */}
          </div>
        </div>
        <div className="cards">
          <img
            src="https://f000.backblazeb2.com/file/hp-cloud/bishnu.jpeg"
            alt="speaker"
            className="speaker-img"
          />
          <div className="speaker-information">
            <h1>Bishnu Bastakoti</h1>
            <h2>North Carolina Agricultural and Technical State University</h2>
            {/* <p>Some text</p> */}
          </div>
        </div>
        <div className="cards">
          <img
            src="https://f000.backblazeb2.com/file/hp-cloud/krishnan.jpeg"
            alt="speaker"
            className="speaker-img"
          />
          <div className="speaker-information">
            <h1>Venkata Krishnan</h1>
            <h2>IIT Mandi</h2>
            {/* <p>Some text</p> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
