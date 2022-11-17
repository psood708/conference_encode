import React from "react"
import Cards from "../Components/Cards"
import Carousel from "../Components/Carousel"
import CountDown from "../Components/CountDown"
import Footer from "../Components/Footer"
import Main from "../Components/Main"
import Navbar from "../Components/Navbar"
// import Section2 from "../Components/Section2"
import Sponsor from "../Components/Sponsor"
import AboutConference from "../Components/AboutConference"
import AboutPDEU from "../Components/AboutPDEU"

const FistPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <Main />
      <CountDown />
      <AboutConference />
      {/* <Cards /> */}
      {/* <Carousel /> */}
      <AboutPDEU />
      <Sponsor />
      <Footer />
    </div>
  )
}

export default FistPage
