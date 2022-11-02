import Navbar from "./Components/Navbar"
import Main from "./Components/Main"
import CountDown from "./Components/CountDown"
import Section2 from "./Components/Section2"
import Sponsor from "./Components/sponsor"
import Footer from "./Components/footer"
import Carousel from "./Components/Carousel"
 
function App() {
  return (
    <div className="landing-page">  
      <Navbar /> 
      <Main />
      <CountDown />
      <Section2 />
      <Carousel />
      <Sponsor /> 
      <Footer />
    </div>
  )
}

export default App
