import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Stats from "@/components/Stats"
import WhatsApp from "@/components/WhatsApp"
import Footer from "@/components/Footer"
import Services from "@/sections/Services"
import Process from "@/sections/Process"
import Portfolio from "@/sections/Portfolio"
import Pricing from "@/sections/Pricing"

export default function App() {
  return (
    <div>
      <Navbar c2={"#F5F0E8"} display="PLUMAR" />
      <Hero c1={"#7F1D1D"} c2={"#F5F0E8"} display="PLUMAR" segment="Editora" motto="Histórias que inspiram" />
      <Stats c2={"#F5F0E8"} />
      <Process c2={"#F5F0E8"} />
      <Services c2={"#F5F0E8"} />
      <Portfolio c2={"#F5F0E8"} />
      <Pricing c2={"#F5F0E8"} />
      <Footer />
      <WhatsApp />
    </div>
  )
}
