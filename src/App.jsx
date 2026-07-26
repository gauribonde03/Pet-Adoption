import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyAdopt from "./components/WhyAdopt";
import PetSlider from "./components/PetSlider";
import Quote from "./components/Quote";

import Adopt from "./pages/Adopt";
import About from "./pages/About";
import Contact from "./pages/Contact";

function Home() {
  return (
    <>
      <Hero />
      <WhyAdopt />
      <PetSlider />
      <Quote />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
       
      </Routes>
    </>
  );
}

export default App;