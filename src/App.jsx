import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import AllSkills from "./components/AllSkills";
import ScrollToTop from "./components/ScrollToTop";
import ScrollProgress from "./components/ScrollProgress";
import MatrixRain from "./components/MatrixRain";
import CustomCursor from "./components/CustomCursor";
import ClickRipple from "./components/ClickRipple";
import FloatingCode from "./components/FloatingCode";
import PageLoader from "./components/PageLoader";
import ParticleField3D from "./components/ParticleField3D";
import FloatingGeometry3D from "./components/FloatingGeometry3D";
import DNAHelix3D from "./components/DNAHelix3D";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, Publications, Certifications, StarsCanvas } from "./components";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const MainContent = () => (
  <div className='relative z-0 bg-primary overflow-x-hidden'>
    <PageLoader />
    <div className="page-noise" />
    <div className="ambient-orb top-[20%] -left-24 h-72 w-72 bg-[#00d9ff] animate-orb-drift" />
    <div className="ambient-orb top-[58%] -right-24 h-80 w-80 bg-[#39ff14] animate-orb-drift" style={{ animationDelay: "2s" }} />
    <div className="ambient-orb bottom-[8%] left-1/3 h-64 w-64 bg-[#a480ff] animate-orb-drift" style={{ animationDelay: "4s" }} />
    <MatrixRain />
    <FloatingCode />
    <CustomCursor />
    <ClickRipple />
    <ScrollProgress />
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <Navbar />
      <div className='relative z-20'>
        <Hero />
      </div>
      <div className='relative z-20'>
        <About />
      </div>

      {/* 3D DNA Helix divider between About and Experience */}
      <div className='relative z-20'>
        <DNAHelix3D />
      </div>

      <div className='relative z-20'>
        <Experience />
      </div>

      {/* 3D Floating Geometry divider between Experience and Tech */}
      <div className='relative z-20'>
        <FloatingGeometry3D />
      </div>

      <div className='relative z-20'>
        <Tech />
      </div>

      {/* 3D Particle Field divider between Tech and Projects */}
      <div className='relative z-20'>
        <ParticleField3D />
      </div>

      <div className='relative z-20'>
        <Works />
      </div>

      {/* 3D DNA Helix divider between Projects and Publications */}
      <div className='relative z-20'>
        <DNAHelix3D />
      </div>

      <div className='relative z-20'>
        <Publications />
      </div>

      {/* 3D Floating Geometry divider between Publications and Certifications */}
      <div className='relative z-20'>
        <FloatingGeometry3D />
      </div>

      <div className='relative z-20'>
        <Certifications />
      </div>
      <Feedbacks />
      <div className='relative z-0'>
        <Contact />
        <footer className="relative z-10 w-full mt-8 border-t border-white/10 bg-[#050816]/70 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} <span className="text-white font-semibold">Marugani Reddi Sekhar</span>. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-white/70">
              <a href="https://github.com/Reddisekharyadav" target="_blank" rel="noopener noreferrer" className="hover:text-[#00d9ff] transition-colors" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/marugani-reddi-sekhar" target="_blank" rel="noopener noreferrer" className="hover:text-[#39ff14] transition-colors" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="mailto:reddisekharmarugani@gmail.com" className="hover:text-[#00d9ff] transition-colors" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </footer>
        <StarsCanvas />
      </div>
    </div>
    <ScrollToTop />
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/all-skills" element={<AllSkills />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
