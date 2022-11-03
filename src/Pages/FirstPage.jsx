import React from "react";
import Cards from "../Components/Cards";
import Carousel from "../Components/Carousel";
import CountDown from '../Components/CountDown';
import Contact from "../Components/Contact";
import Footer from "../Components/footer";
import Main from "../Components/Main";
import Navbar from "../Components/Navbar";
import Section2 from "../Components/Section2";
import Sponsor from "../Components/sponsor";

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
     );
}
 
export default FistPage;