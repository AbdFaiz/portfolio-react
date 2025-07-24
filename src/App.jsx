import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "./components/Fragments/Hero";
import About from "./components/Fragments/About";
import Skill from "./components/Fragments/Skill";
import Project from "./components/Fragments/Project";
import Footer from "./components/Layouts/Footer.jsx";
import Navbar from "./components/Layouts/Navbar.jsx";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Project />
      <Footer />
    </>
  );
}

export default App;
