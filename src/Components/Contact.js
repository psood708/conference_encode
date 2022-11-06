import "../assets/css/contact.css"

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
              <p>General Inquiries</p>
              <p>Conference Chair, IEEE GlobConHT 2023</p>
              <a class="url" href="mailto:r.n.s@ieee.org">
                Email Id: r.n.s@ieee.org
              </a>
            </li>
            <li>
              <p>Technical & Paper Submissions: </p>
              <p>Technical Chair, IEEE GlobConHT 2023</p>
              <a class="url" href="mailto:globconht@gmail.com">
                Email Id: globconht@gmail.com
              </a>
            </li>
            <li>
              <p>Special Sessions, Tutorials, Workshops Proposals : </p>
              <p>Conference Secretary, IEEE GlobConHT 2023</p>
              <a class="url" href="mailto:university_conference@yahoo.com">
                Email Id: university_conference@yahoo.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Contact
