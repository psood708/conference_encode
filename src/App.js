import FirstPage from "./Pages/FirstPage"
import ContactPage from "./Pages/ContactPage"
import RegistrationFeePage from "./Pages/RegistrationFeePage"
import {Routes, Route, HashRouter, Switch} from "react-router-dom"
import CommingSoon from "./Components/CommingSoon"
import Committee from "./Components/Committee"
import Theme from "./Components/Theme"
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<RegistrationFeePage />} />
        {/* <Route exact path="/" element={<FirstPage />} />
        <Route exact path="/conference/committee" element={<Committee />} />
        <Route exact path="/conference/themes" element={<Theme />} />
        <Route exact path="/conference/commingsoon" element={<CommingSoon />} />
        <Route exact path="/conference/contact" element={<ContactPage />} />
        <Route exact path="/conference/registration" element={<RegistrationFeePage />} /> */}
      </Routes>
    </HashRouter>
  )
}

export default App
