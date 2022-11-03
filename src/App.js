// // <<<<<<< HEAD
// import Navbar from "./Components/Navbar"
// import Main from "./Components/Main"
// import CountDown from "./Components/CountDown"
// import Section2 from "./Components/Section2"
// import Sponsor from "./Components/sponsor"
// import Footer from "./Components/footer"
// import Carousel from "./Components/Carousel"
 
// =======
import Contact from "./Components/Contact"
import FirstPage from "./Pages/FirstPage"
import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import CommingSoon from "./Components/CommingSoon"
import Committee from "./Components/Committee"
import Theme from "./Components/Theme"
// >>>>>>> c6472818015580578ce3c1d5b0fc9c5d13cf5276
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/conference" element={<FirstPage />} />
        <Route exact path="/conference/committee" element={<Committee />} />
        <Route exact path="/conference/themes" element={<Theme />} />
        <Route exact path="/conference/CommingSoon" element={<CommingSoon />} />
        <Route exact path="/conference/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
