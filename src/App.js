import Contact from "./Components/Contact"
import FirstPage from "./Pages/FirstPage"
import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import CommingSoon from "./Components/CommingSoon"
import Committee from "./Components/Committee"
import Theme from "./Components/Theme"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/conference" element={<FirstPage />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/themes" element={<Theme />} />
        <Route path="/CommingSoon" element={<CommingSoon />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
