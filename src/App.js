import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import CountDown from "./Components/CountDown";
import Section2 from "./Components/Section2";
import Sponsor from "./Components/sponsor";
import Footer from "./Components/footer";
import Carousel from "./Components/Carousel";
import Contact from "./Components/Contact";
<<<<<<< HEAD
import Cards from "./Components/Cards";
import FirstPage from './Pages/FirstPage'
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CommingSoon from "./Components/CommingSoon";

=======
import Committee from "./Components/Committee";
>>>>>>> f6b7c745a202735e4c25dbfb1018fb956bde9912
function App() {
  return (
    // <div className="landing-page">
    //   <Navbar />
    //   <Main />
    //   <CountDown />
    //   <Cards />
    //   <Section2 />
    //   <Carousel />
    //   <Sponsor />
    //   <Contact />
    //   <Footer />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element = { <FirstPage /> } />
        <Route path="/CommingSoon" element = { <CommingSoon /> }/>
        <Route path="/Contact" element = { <Contact /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
