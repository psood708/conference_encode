import "../assets/css/contact.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faB} from "@fortawesome/free-solid-svg-icons"
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons"
import ReactWhatsapp from "react-whatsapp"

const Contact = () => {
  return (
    <>
      <div className="contactus">
        <div className="con-title">
          <h1>Contacts</h1>
        </div>
        <div className="con-content">
          <ul>
            <li>
              <p>General Inquiries & Sponsorship</p>
              <a className="url" href="mailto:greenhydrogenpdpu@gmail.com">
                Email Id: greenhydrogenpdpu@gmail.com
              </a>
            </li>
            <li>
              <p>Technical, Awards & Paper Submissions: </p>
              <a className="url" href="mailto:Green.hydrogen@pdpu.ac.in">
                Email Id: Green.hydrogen@pdpu.ac.in
              </a>
            </li>
            <h1 className="student-organisers">Student Organisers</h1>
            <li>
              <p className="student-name">Hari Pavan Sriram Yalamati</p>
              <a className="url" href="mailto:Hari.yphd21@spt.pdpu.ac.in">
                Email Id: Hari.yphd21@spt.pdpu.ac.in
              </a>
              <p>Phone No. +919908242145 </p>
            </li>
            <li>
              <p className="student-name student2">Sneha Sandeep Lavate</p>
              <a className="url" href="mailto:Sneha.lphd20@spt.pdpu.ac.in">
                Email Id: Sneha.lphd20@spt.pdpu.ac.in
              </a>
              <p>Phone No. : +917218511311</p>
            </li>
          </ul>
        </div>
        <ReactWhatsapp number="+917218511311" message="">
          <div className="icon">
            <div className="whatsapp-icon">
              <img src="whatsapp.png" alt="whatsapp" />
            </div>
          </div>
        </ReactWhatsapp>
      </div>
    </>
  )
}

export default Contact
