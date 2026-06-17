import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Education from "../sections/Education";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";


import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      
    </>
  );
}

export default Home;