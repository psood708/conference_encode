import Contact from "./Components/Contact"
import FirstPage from "./Pages/FirstPage"
import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import CommingSoon from "./Components/CommingSoon"
import Committee from "./Components/Committee"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/CommingSoon" element={<CommingSoon />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/committee" element={<Committee />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
