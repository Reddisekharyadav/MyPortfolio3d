import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import Waves from "./canvas/Waves";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import useTypewriter from "../hooks/useTypewriter";

const Hero = () => {
  const [screenSize, setScreenSize] = useState("desktop");
  const [scrollY, setScrollY] = useState(0);
  
  const typedText = useTypewriter("Proficient in Python, Java, React, Next.js, Node.js, Prisma and passionate about end-to-end software development.", 50);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 500) setScreenSize("mobile");
      else if (window.innerWidth < 900) setScreenSize("tablet");
      else setScreenSize("desktop");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden pt-28">
      {/* Waves Background */}
      <div className="absolute inset-0 z-0">
        <Waves
          lineColor="#a480ff"
          backgroundColor="#0b0418"
          style={{ opacity: 0.9 }}
        />
      </div>

      {/* Blur Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-[#0f051d] backdrop-blur-[1px] z-10" />

      {/* Hero Content */}
      <div 
        className="relative z-30 max-w-7xl mx-auto h-full flex flex-col items-center justify-center px-6 sm:px-10 text-center"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          opacity: Math.max(1 - scrollY / 400, 0)
        }}
      >

        {/* Profile Image with Ultra Animation */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="relative flex flex-col items-center mt-2 mb-4"
        >
          <div className="relative w-56 h-56 flex items-center justify-center rounded-full bg-black/20 group">

            {/* Glowing Outer Ping Ring */}
            <div className="absolute w-64 h-64 rounded-full bg-gradient-to-tr from-[#00d9ff99] via-[#39ff1499] to-white opacity-20 blur-2xl animate-ping z-0" />

            {/* Animated Gradient Orbit Ring */}
            <div className="absolute inset-0 rounded-full animate-[spin_6s_linear_infinite] z-0 border-[6px] border-transparent bg-[conic-gradient(at_top_left,_#00d9ff,_#39ff14,_#ffffff,_#00d9ff)] blur-sm opacity-60" />

            {/* Halo Glow Effect */}
            <div className="absolute w-[280px] h-[280px] border border-[#00d9ff44] rounded-full blur-md animate-pulse z-0" />

            {/* Actual Profile Image with subtle scale animation */}
            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative z-10 w-48 h-48 rounded-full p-[4px] bg-white/10 backdrop-blur-md shadow-[0_8px_32px_rgba(145,94,255,0.35)]"
            >
              <img
                src="/Profile.jpg"
                alt="Marugani Reddi Sekhar"
                title="Marugani Reddi Sekhar"
                className="w-full h-full rounded-full object-cover border-[3px] border-white shadow-xl transition-transform transform hover:scale-105"
                style={{ objectPosition: "center top" }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Intro Text */}
        <div className={`${styles.paddingX} flex flex-col items-center`}>
          <h1 className={`${styles.heroHeadText} text-white text-center`}>
            Hi, I'm <span className="text-[#00d9ff]">Marugani Reddi Sekhar</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 text-center text-base sm:text-lg md:text-xl`}>
            Integrated M.Tech (CSE) Student · Software & Full-Stack Developer
            <br className="sm:block hidden" />
            <span className="block text-base sm:text-lg md:text-xl text-gray-400 min-h-[60px]">
              {typedText}<span className="animate-pulse">|</span>
            </span>
          </p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.8 }}
          className="mt-6 flex gap-4 flex-wrap justify-center z-[60] relative"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-lg bg-[#00d9ff] text-black font-medium hover:bg-[#39ff14] transition"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-2 rounded-lg border border-[#00d9ff] text-[#00d9ff] hover:bg-[#00d9ff] hover:text-black transition"
          >
            Let's Talk
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="mt-5 sm:mt-4 flex gap-6 justify-center text-white text-xl z-[50]"
        >
          <a
            href="https://github.com/Reddisekharyadav"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00d9ff] transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/marugani-reddi-sekhar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#39ff14] transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:reddisekharmarugani@gmail.com"
            className="hover:text-[#00d9ff] transition"
          >
            <FaEnvelope />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
