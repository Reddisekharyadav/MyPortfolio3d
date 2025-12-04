import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllSkills from "./components/AllSkills";
import ScrollToTop from "./components/ScrollToTop";
import ScrollProgress from "./components/ScrollProgress";
import MatrixRain from "./components/MatrixRain";
import CustomCursor from "./components/CustomCursor";
import ClickRipple from "./components/ClickRipple";
import FloatingCode from "./components/FloatingCode";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, Certifications, StarsCanvas } from "./components";

const MainContent = () => (
  <div className='relative z-0 bg-primary'>
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
        <div className='relative z-20'>
          <Experience />
        </div>
        <div className='relative z-20'>
          <Tech />
        </div>
        <div className='relative z-20'>
          <Works />
        </div>
        <div className='relative z-20'>
          <Certifications />
        </div>
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          {/* Footer directly below Contact, above StarsCanvas */}
          <footer
            className="w-full text-center py-6 mt-8"
            style={{
              background: "rgba(10,10,19,0.3)",
              backdropFilter: "blur(2px)",
              color: "#fff",
              fontWeight: 600,
              letterSpacing: "0.03em",
              fontSize: "1.1rem"
            }}
          >
            <span
              className="text-white/70"
              style={{ display: "inline-block", marginBottom: "16px" }}
            >
              Copyright &copy; {new Date().getFullYear()} <span style={{fontWeight:700}}>Marugani Reddi Sekhar</span>. All rights reserved.
            </span>
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