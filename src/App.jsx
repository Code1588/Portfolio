import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Learning from "./sections/Learning";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Journey from "./sections/Journey";
import Goals from "./sections/Goals";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Learning />
        <Projects />
        <Services />
        <Journey />
        <Goals />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
