import "../assets/css/contact.css"

const Contact = () => {
  return (
    <div className="contactus">
      <div className="con-title">
        <h1>Contacts</h1>
      </div>
      <div className="con-content">
        <ul>
          <li>
            <p>General Inquiries & Sponsorship</p>
            <a className="url" href="mailto:Green.hydrogen@pdpu.ac.in">
              Email Id: Green.hydrogen@pdpu.ac.in
            </a>
          </li>
          <li>
            <p>Technical & Paper Submissions: </p>
            <a className="url" href="mailto:greenhydrogenpdpu@gmail.com">
              Email Id: greenhydrogenpdpu@gmail.com
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
    </div>
  )
}

export default Contact
