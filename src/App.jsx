import SmoothScroll from "./components/SmoothScroll";
import Atmosphere from "./components/Atmosphere";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import FeaturedWork from "./components/FeaturedWork";
import CaseStudy from "./components/CaseStudy";
import MotionGraphics from "./components/MotionGraphics";
import About from "./components/About";
import Services from "./components/Services";
import WhatIDeliver from "./components/WhatIDeliver";
import Showreel from "./components/Showreel";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <SmoothScroll>
      <Atmosphere />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <FeaturedWork />
        <CaseStudy />
        <MotionGraphics />
        <About />
        <Services />
        <WhatIDeliver />
        <Showreel />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
