import React from "react"
import "../assets/css/aboutpdeu.css"

export default function AboutPDEU() {
  return (
    <div>
      <div className="pdeu-img-container">
        <img
          src="https://f000.backblazeb2.com/file/hp-cloud/Conference/about+pdeu.png"
          className="pdeu-img"
          alt="pdeu-img"
        />
      </div>
      <h1 className="about-heading">
        About Pandit Deendayal Energy University
      </h1>
      <div className="about-pdeu-text">
        <p className="about-pdeu">
        Pandit Deendayal Energy University (PDEU), formerly known as Pandit Deendayal Petroleum University (PDPU), was established by
         Gujarat Energy Research Management Institute (GERMI) as a Private University through the State Act with a vision “To emerge as
         a world-class Institution of Excellence in Energy Education, Research and Innovation which will prepare and sensitize the youth 
         and ultimately the society for radical yet sustainable societal transformation”. This objective is being addressed through several 
         specialized and well-planned undergraduate and postgraduate programs and intense research initiatives in science, technology, management, 
         and humanities. Today it has nine centres of excellence, viz. International Automobile, Siemens, Center for Bio-fuel & Bioenergy studies, 
         Solar Research & Development Center, Center of Excellence in Geothermal Energy, Drilling & Stimulation Center, Center of Excellence in Climate
         Change, Innovation and Incubation Center and Water treatment management centre. PDEU ranks 1<sup>st </sup>  Private University in Gujarat with NAAC accredited, “A++” grade (3.52/4). 
         It is also ISO 14001:2015 and ISO 9001:2015 certified Institute. PDEU is the only private university in Gujarat to get autonomous status from the University Grant Commission (UGC).      </p>
      </div>

      <div className="about-spt-container">
        <div className="pdeu-img-container">
          <img
            src="https://f000.backblazeb2.com/file/hp-cloud/Conference/spt.png"
            className="pdeu-img"
            alt="pdeu-img"
          />
        </div>
        <p className="about-heading">
          {/* About Department of Petroleum Engineering */}
          <h1> About</h1>
          <h1>
            School of Energy Technology & Department of Petroleum Engineering
          </h1>
        </p>
        <div className="about-pdeu-text">
          <p className="about-pdeu">
          School of Energy Technology, a constituent school of Pandit Deendayal Energy University, was started in the year 2007 to provide an excellent academic program in Petroleum Engineering. 
          Over the years, it ventured into the other energy sector to tap the broad spectrum of the energy basket. 
          The School has eight major departments focusing on all the domains under the umberlla on energy. Since its inception, petroleum engineering has been the flagship course of the entire university. 
          The department’s strong partnerships with regional government bodies, research institutes and industries open vast opportunities for researchers and academicians to get 
          involved in world-class research, which helps them to grow and excel in their professional careers. 
          The department has a four-year undergraduate (B.Tech) programme in Petroleum  and Petrochemical Engineering, a two-year graduate (M.Tech) course in Petroleum Engineering and PhD programs.
          The B.Tech in Petroleum Engineering is accredited by the National Board of Accreditation (NBA) under tier I category.   

          </p>
        </div>
      </div>
    </div>
  )
}
