import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "../assets/css/theme.css"
export default function Theme() {
  return (
    <div>
      <Navbar />
      <div className="theme-head">
        <h1>Green Hydrogen, Zero Carbon Footprint and Catalyst</h1>

        <p>
          The first International Hydrogen Energy & Economy conference which is
          being organized by the Catalysis & Hydrogen Research lab from school
          of petroleum tech- nology in Pandit Deendayal Energy University,
          Gandhinagar, Gujarat. Pandit Deendayal Energy University, Gandhinagar
          is the one of the leading research insti- tutes in India in energy
          sector and various fields.
        </p>
        <p>
          Green hydrogen is expected to become a $ 12-15 trillion global
          industry by 2050. Green Hydrogen has the potential to become a vital
          component of the energy mix in the next few decades that has captured
          a clear investor interest in the 1st In- ternational conference on
          green hydrogen for global decarbonization.
        </p>
        <p className="last">
          The two-day 1st International conference on green hydrogen for global
          decar- bonization will bring together policymakers, regulators,
          innovators, oil and gas com- panies, infrastructure companies,
          technology providers, industry experts and inves- tors to present
          their perspectives and discuss projects to give further stimulus in
          shaping the future of green hydrogen. It will also provide a global
          platform for leading developers to showcase the project's innovations
          and technologies for producing green hydrogen on a commercial scale
          and explore the investor interest in financing their projects. The
          conference will provide a platform for expelling the latest develop-
          ment in types of equipment, compressors, devices, products,
          technologies and ser- vices in the hydrogen industry.
        </p>
        <div className="themeslist">
          <h3>Themes</h3>
          <ul>
            <li>Hydrogen Production and Catalysis</li>
            <li>Fuel Cells</li>
            <li>Fuel Cells</li>
            <li>Hydrogen Storage</li>
            <li>Hydrogen Transportation</li>
            <li>Hydrogen Economy, Strategy, and Policy</li>
            <li>Hydrogen Utilization</li>
            <li>Carbon capture, utilization, and storage</li>
            <li>Sustainable Hydrogen Technologies</li>
            <li>Waste to Hydrogen Energy</li>
            <li>AI/ML & Big Data</li>
          </ul>
        </div>
        <Footer />
      </div>
    </div>
  )
}
