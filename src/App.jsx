import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import CaseStudy from './components/CaseStudy';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <CaseStudy />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}