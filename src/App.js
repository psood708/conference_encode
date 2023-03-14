import FirstPage from "./Pages/FirstPage"
import ContactPage from "./Pages/ContactPage"
import RegistrationFeePage from "./Pages/RegistrationFeePage"
// import {Routes, Route, HashRouter, BrowserRouter} from "react-router-dom"
import {Routes, Route, BrowserRouter} from "react-router-dom"
import CommingSoon from "./Components/CommingSoon"
import Committee from "./Components/Committee"
import Theme from "./Components/Theme"
import Keynote from "./Components/Keynotespeakers"
import CallForPaper from "./Components/CallForPaper"
import Awards from "./Components/Awards"
import UpdatePost from "./Pages/UpdatePost"
function App() {
  return (
    // <HashRouter>
    //   <Routes>
    //     {/* <Route exact path="/" element={<RegistrationFeePage />} /> */}
    //     <Route exact path="/" element={<FirstPage />} />
    //     <Route exact path="/conference/committee" element={<Committee />} />
    //     <Route exact path="/conference/themes" element={<Theme />} />
    //     <Route exact path="/conference/commingsoon" element={<CommingSoon />} />
    //     <Route exact path="/conference/contact" element={<ContactPage />} />
    //     <Route exact path="/conference/registration" element={<RegistrationFeePage />} />
    //   </Routes>
    // </HashRouter>
    // <BrowserRouter>
    <Routes>
      {/* <Route exact path="/" element={<RegistrationFeePage />} /> */}
      <Route exact path="/" element={<FirstPage />} />
      <Route exact path="/conference" element={<FirstPage />} />
      <Route exact path="/committee" element={<Committee />} />
      <Route exact path="/themes" element={<Theme />} />
      <Route exact path="/commingsoon" element={<CommingSoon />} />
      <Route exact path="/contact" element={<ContactPage />} />
      <Route exact path="/registration" element={<RegistrationFeePage />} />
      <Route exact path="/keynotespeakers" element={<Keynote />} />
      <Route exact path="/callforpapers" element={<CallForPaper />} />
      <Route exact path="/awards" element={<Awards />} />
      <Route exact path="/admin/updatepost" element={<UpdatePost />} />
    </Routes>
    // </BrowserRouter>
  )
}

export default App
