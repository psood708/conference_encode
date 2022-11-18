import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "../assets/css/theme.css"
import aiml from "../assets/images/themes/ai-ml.jpg"

export default function Theme() {
  return (
    <div style={{backgroundColor: "#f5f5f5"}}>
      <Navbar />

      <h1 className="themes-heading">Themes</h1>

      <div className="wrapper">
        <div className="cols">
          <div className="col" ontouchstart="this.classList.toggle('hover');">
            <div className="container">
              <div
                className="front"
                style={{
                  backgroundImage:
                    "url(https://f000.backblazeb2.com/file/hp-cloud/theme-1.jpg)",
                }}
              >
                <div className="inner">
                  <p>Hydrogen Production and Catalysis</p>
                  {/* <span>Lorem ipsum</span> */}
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>
                    <ul>
                      <li>
                      Hydrogen production using renewable energy
                      </li>
                      <li>
                      Bifunctional catalysts for water splitting
                      </li>
                      <li>
                      Catalysts for HER
                      </li>
                      <li>
                      OER and ORR
                      </li>
                      <li>
                      Electrocatalysis
                      </li>
                      <li>
                        Electrodes
                      </li>
                    </ul> 
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col" ontouchstart="this.classList.toggle('hover');">
            <div className="container">
              <div
                className="front"
                style={{
                  backgroundImage:
                    "url(https://f000.backblazeb2.com/file/hp-cloud/theme-2.jpg)",
                }}
              >
                <div className="inner">
                  <p>Fuel Cells</p>
                  {/* <span>Lorem ipsum</span> */}
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>
                    <ul>
                      <li>Fuel Cell</li>
                      <li> Reversible Fuel Cell</li>
                      <li> Membrane for fuel cell and electrolyser</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col" ontouchstart="this.classList.toggle('hover');">
            <div className="container">
              <div
                className="front"
                style={{
                  backgroundImage:
                    "url(https://f000.backblazeb2.com/file/hp-cloud/theme-3.jpg)",
                }}
                // style="background-image: url(https://unsplash.it/502/502/)"
              >
                <div className="inner">
                  <p>Hydrogen Storage</p>
                  {/* <span>Lorem ipsum</span> */}
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>
                    <li>Solid</li>
                    <li>Liquid and Gaseous H2 storage</li>
                    <li> H2 compressor</li>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col" ontouchstart="this.classList.toggle('hover');">
            <div className="container">
              <div
                className="front"
                style={{
                  backgroundImage:
                    "url(https://f000.backblazeb2.com/file/hp-cloud/theme-4.jpg)",
                }}
                // style="background-image: url(https://unsplash.it/503/503/)"
              >
                <div className="inner">
                  <p>Hydrogen Transportation</p>
                  {/* <span>Lorem ipsum</span> */}
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>
                    <ul>
                      <li>In-line Transportation</li>
                      <li>By road transportation</li>
                      <li>Filling stations</li>
                      <li>Roadmaps</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col" ontouchstart="this.classList.toggle('hover');">
            <div className="container">
              <div
                className="front"
                style={{
                  backgroundImage:
                    "url(https://f000.backblazeb2.com/file/hp-cloud/theme-5.jpg)",
                }}
                // style="background-image: url(https://unsplash.it/504/504/"
              >
                <div className="inner">
                  <p>Hydrogen Economy, Strategy, and Policy</p>
                  {/* <span>Lorem ipsum</span> */}
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>
                    <ul>
                      <li>H2 based economy</li>
                      <li> strategies and Policies inside India and outside India</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col" ontouchstart="this.classList.toggle('hover');">
            <div className="container">
              <div
                className="front"
                style={{
                  backgroundImage:
                    "url(https://f000.backblazeb2.com/file/hp-cloud/theme-6.jpg)",
                }}
                // style="background-image: url(https://unsplash.it/505/505/)"
              >
                <div className="inner">
                  <p>Hydrogen Utilization</p>
                  {/* <span>Lorem ipsum</span> */}
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>
                    <ul>
                      <li>H2 in households</li>
                      <li>vehicles</li>
                      <li>industries</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col" ontouchstart="this.classList.toggle('hover');">
            <div className="container">
              <div
                className="front"
                style={{
                  backgroundImage:
                    "url(https://f000.backblazeb2.com/file/hp-cloud/theme-7.jpg)",
                }}
                // style="background-image: url(https://unsplash.it/506/506/)"
              >
                <div className="inner">
                  <p>Carbon capture, utilization, and storage</p>
                  {/* <span>Lorem ipsum</span> */}
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>
                    <ul>
                      <li>CO2 capture</li>
                      <li>CO2 sequestration</li>
                      <li>CO2 storage</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col" ontouchstart="this.classList.toggle('hover');">
            <div className="container">
              <div
                className="front"
                style={{
                  backgroundImage:
                    "url(https://f000.backblazeb2.com/file/hp-cloud/theme-8.jpg)",
                }}
                // style="background-image: url(https://unsplash.it/508/508/)"
              >
                <div className="inner">
                  <p>Sustainable Hydrogen Technologies</p>
                  {/* <span>Lorem ipsum</span> */}
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>
                    <ul>
                      <li>Green hydrogen infrastructure and utilization for future</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col" ontouchstart="this.classList.toggle('hover');">
            <div className="container">
              <div
                className="front"
                style={{
                  backgroundImage:
                    "url(https://f000.backblazeb2.com/file/hp-cloud/theme-9.jpg)",
                }}
                // style="background-image: url(https://unsplash.it/508/508/)"
              >
                <div className="inner">
                  <p>Waste to Hydrogen Energy</p>
                  {/* <span>Lorem ipsum</span> */}
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>
                    <ul>
                      <li>H2 production from biomass</li>
                      <li>Other wastes</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col" ontouchstart="this.classList.toggle('hover');">
            <div className="container">
              <div
                className="front"
                style={{
                  backgroundImage:
                    "url(https://f000.backblazeb2.com/file/hp-cloud/ai-ml.jpg",
                }}
                // style="background-image: url(https://unsplash.it/508/508/)"
              >
                <div className="inner">
                  <p>AI/ML & Big Data</p>
                  {/* <span>Lorem ipsum</span> */}
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>
                    <ul>
                      <li>AI and ML approach for water splitting and CO2 sequestration and storage</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
