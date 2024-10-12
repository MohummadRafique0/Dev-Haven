import FeatureSection from "./Components/FeatureSection/FeatureSection"
import Footer from "./Components/Footer/Footer"
import HeroSection from "./Components/HeroSection/HeroSection"
import Navbar from "./Components/Navbar/Navbar"
import Pricing from "./Components/Pricing/Pricing"
import Testimonials from "./Components/Testimonials Section/Testimonials"
import Workflow from "./Components/WorkFlow/Workflow"
function App() {
  return (
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto pt-20 px-6"></div>
   <HeroSection/>
   <FeatureSection/>
    <Workflow/>
    <Pricing/>
    <Testimonials/>
    <Footer/>
    </>
  )
}

export default App
