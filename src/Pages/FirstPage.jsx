import React from "react"
import Cards from "../Components/Cards"
import Carousel from "../Components/Carousel"
import CountDown from "../Components/CountDown"
import Footer from "../Components/Footer"
import Main from "../Components/Main"
import Navbar from "../Components/Navbar"
import Section2 from "../Components/Section2"
import Sponsor from "../Components/Sponsor"

const FistPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <Main />
      <CountDown />
      <Cards />
      <Section2 />
      <Carousel />
      <Sponsor />
      <Footer />
    </div>
  )
}

export default FistPage
