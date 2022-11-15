import React from "react";
import Navbar from "./Navbar";
import ".././assets/css/committee.css";
import Footer from "./Footer";

const Committee = () => {
  return (
    <div>
      <Navbar />
      <div className="committeewrap">
        <h1 className="title">
          {" "}
          International Conference on Green Hydrogen for global decarbonization
        </h1>
        <div>
          <h3 className="subheading">Organizing Committee</h3>
          <div className="names">
            <p>
              <u>Chief Patron</u>
              <br />
              <span>
                Prof. S. Sundar Manoharan <br /> Director General <br /> Pandit
                Deendayal Energy University Gandhinagar
              </span>
            </p>
            <p>
              <u>Patron</u>
              <br />
              <span>
                Dr. Anirbid B Sircar <br /> Director <br /> School of Energy
                Technology <br /> Pandit Deendayal Energy University,
                Gandhinagar
              </span>
              <br />
              <br />
              <span>
                Prof. Dhaval Pujara <br /> Director SOT <br /> PDEU Gandhinagar
              </span>
            </p>
            <p>
              <u>Chairman</u>
              <br />
              <span>
                Dr. Uttam Kumar Bhui <br /> Head of Department <br /> Petroleum
                Engineering <br /> School of Energy Technology <br /> Pandit
                Deendayal Energy University, Gandhinagar
              </span>
            </p>
            <p>
              <u>Convener</u>
              <br />
              <span>
                Dr. Rohit Srivastava <br /> School of Energy Technology <br />{" "}
                Pandit Deendayal Energy University, Gandhinagar
              </span>
            </p>
            <p>
              <u>Treasurer</u>
              <br />
              <span>
                Dr. Hari S <br /> School of Energy Technology <br /> Pandit
                Deendayal Energy University, Gandhinagar
              </span>
              <br />
              <br />
              <span>
                Mr. Hari Pavan Yalamati <br /> School of Energy Technology{" "}
                <br /> Pandit Deendayal Energy University, Gandhinagar
              </span>
            </p>
          </div>
        </div>
        <div>
          <h3 className="subheading">International Advisory Committee</h3>
          <div className="gridname">
            <p>Prof. Japan Trivedi, University of Alberta, Canada</p>
            <p>Prof. Ryosuke Okuno, The University of Texas at Austin, USA</p>
            <p>
              Prof. Pravin Linga, National University of Singapore, Singapore
            </p>
            <p>Dr. Hussein Hoteit, KAUST, Kingdom of Saudi Arabia</p>
          </div>
        </div>
        <div>
          <h3 className="subheading">National Advisory Committee</h3>
          <div className="gridname-delegates">
            <p>Prof. Tarun Shah, Registrar, PDEU Gandhinagar</p>
            <p>Prof. T.P. Singh, PDEU Gandhinagar</p>
            <p>Prof. R.K. Vij, PDEU Gandhinagar</p>
            <p>Prof. Surendra Singh Kachhwaha, Dean SOT, PDEU Gandhinagar</p>
            <p>Dr. Praghnesh Bhatt, Dean SOET, PDEU Gandhinagar</p>
            <p>Dr. Bhawanisingh Desai, Dean R&D, PDEU Gandhinagar</p>
            <p>Prof. Ranjan Sengupta, PDEU Gandhinagar</p>
            <p>Dr. Ramesh Guduru, PDEU Gandhinagar</p>
            <p>Dr. Nitin Chaudhury, PDEU Gandhinagar</p>
            <p>Prof. Arnab Dutta, IIT Bombay</p>
            <p>Prof. D.N. Srivastava, CSIR-CSMCRI Bhavnagar</p>
            <p>Dr. Ajay Mandal, IIT(ISM) Dhanbad</p>
            <p>Prof. Anugrah Singh, IIT Guwahati</p>
            <p>Dr. Jayeeta Chattopadhyay, Amity University, Ranchi</p>
            <p>Dr. Ajay Kumar, IIT Tirupati</p>
            <p>Dr. Pankaj Khanna, IIT Gandhinagar</p>
            <p>Dr. Arup Ray, IIT Bhilai</p>
          </div>
        </div>
        <div>
          <h3 className="subheading">
            Organizing Committee
          </h3>
          <div className="names">
            <p>Dr. Vivek Ramalingam, PDEU</p>
            <p>Dr. Amit Verma, PDEU</p>
            <p>Dr. Paul Naveen, PDEU</p>
            <p>Dr. Balanagalu Basupalli, PDEU</p>
            <p>Dr. Abhishek Kumar Gupta, PDEU</p>
            <p>Dr. Ankur Solanki, PDEU</p>
            <p>Dr. Rajat Saxena, PDEU</p>
            <p>Mr. Gaurav Hazarika, PDEU</p>
            <p>Dr. Lakshmann Rao Jeeru, PDEU</p>
            <p>Dr. Shanker Krishna, PDEU</p>
            <p>Dr. Maunish Shah, PDEU</p>
            <p>Dr. Namrata, PDEU</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Committee;
