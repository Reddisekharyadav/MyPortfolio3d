import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import Waves from "./canvas/Waves";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import useTypewriter from "../hooks/useTypewriter";
import { letterContainer, letterItem } from "../utils/motion";

const resumeUrl =
  "https://drive.google.com/file/d/1fJOuYfUMh11mZ_ToBSDJENsFfzehyXob/view?usp=drive_link";

const stats = [
  { value: "9+", label: "Projects" },
  { value: "2", label: "IEEE papers" },
  { value: "5+", label: "Roles" },
  { value: "7+", label: "Certs" },
];

const socials = [
  { href: "https://github.com/Reddisekharyadav", icon: FaGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/marugani-reddi-sekhar", icon: FaLinkedin, label: "LinkedIn" },
  { href: "mailto:reddisekharmarugani@gmail.com", icon: FaEnvelope, label: "Email" },
];

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const typedText = useTypewriter(
    "Proficient in Python, Java, React, Next.js, Node.js, Prisma and passionate about end-to-end software development.",
    42
  );

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const name = "Marugani Reddi Sekhar";

  return (
    <section className="relative w-full min-h-screen mx-auto overflow-hidden pt-24">
      <div className="absolute inset-0 z-0">
        <Waves lineColor="#a480ff" backgroundColor="#0b0418" style={{ opacity: 0.9 }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-[#0f051d] backdrop-blur-[1px] z-10" />

      <div
        className="relative z-30 max-w-7xl mx-auto min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center px-6 sm:px-10 text-center pb-24"
        style={{
          transform: `translateY(${scrollY * 0.28}px)`,
          opacity: Math.max(1 - scrollY / 520, 0),
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative flex flex-col items-center mb-5"
        >
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center rounded-full">
            <div className="absolute w-60 h-60 rounded-full bg-gradient-to-tr from-[#00d9ff66] via-[#39ff1444] to-transparent opacity-50 blur-2xl animate-pulse" />
            <div className="absolute inset-[-8px] rounded-full animate-[spin_10s_linear_infinite] bg-[conic-gradient(from_90deg,#00d9ff,#39ff14,#a480ff,#00d9ff)] opacity-70" />
            <div className="absolute inset-[-2px] rounded-full bg-[#0b0418]" />
            <motion.img
              src="/Profile.jpg"
              alt="Marugani Reddi Sekhar"
              title="Marugani Reddi Sekhar"
              className="relative z-10 w-[168px] h-[168px] sm:w-48 sm:h-48 rounded-full object-cover border-[3px] border-white/20 shadow-[0_0_40px_rgba(0,217,255,0.28)]"
              style={{ objectPosition: "center top" }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#00d9ff]/30 bg-[#00d9ff]/10 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-[#00d9ff]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#39ff14] animate-pulse" />
          Open to opportunities
        </motion.span>

        <p className={`${styles.heroSubText} text-white/80`}>Hi, I&apos;m</p>
        <motion.h1
          variants={letterContainer}
          initial="hidden"
          animate="show"
          className={`${styles.heroHeadText} flex flex-wrap justify-center gap-x-3`}
        >
          {name.split(" ").map((word) => (
            <span key={word} className="inline-flex">
              {word.split("").map((char, i) => (
                <motion.span key={`${word}-${i}`} variants={letterItem} className="gradient-text inline-block">
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className={`${styles.heroSubText} mt-3 text-white-100 max-w-3xl`}
        >
          Integrated M.Tech (CSE) Student · Software & Full-Stack Developer
          <span className="block mt-2 font-mono text-[14px] sm:text-[16px] text-[#9aa4c7] min-h-[52px]">
            {typedText}
            <span className="animate-pulse text-[#00d9ff]">|</span>
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="mt-7 flex gap-4 flex-wrap justify-center z-[60] relative"
        >
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine px-7 py-2.5 rounded-full bg-gradient-to-r from-[#00d9ff] to-[#39ff14] text-black font-semibold shadow-[0_0_24px_rgba(0,217,255,0.35)] hover:shadow-[0_0_36px_rgba(57,255,20,0.45)] hover:scale-[1.03] transition-all"
          >
            View Resume
          </a>
          <a
            href="#contact"
            className="px-7 py-2.5 rounded-full border border-[#00d9ff]/70 text-[#00d9ff] hover:bg-[#00d9ff] hover:text-black transition-all duration-300 hover:scale-[1.03]"
          >
            Let&apos;s Talk
          </a>
          <a
            href="#projects"
            className="px-7 py-2.5 rounded-full border border-white/15 text-white/80 hover:border-white/40 hover:text-white transition-all duration-300"
          >
            See Projects
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95 }}
          className="mt-6 flex gap-3 justify-center"
        >
          {socials.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="h-11 w-11 rounded-full glass-panel flex items-center justify-center text-white text-lg hover:text-[#00d9ff] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,217,255,0.35)] transition-all"
            >
              <Icon />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05 }}
          className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="glass-panel rounded-2xl px-4 py-3">
              <p className="font-display text-2xl font-bold gradient-text">{stat.value}</p>
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/55 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 text-white/50 hover:text-[#00d9ff] transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <span className="h-10 w-6 rounded-full border border-white/25 flex items-start justify-center p-1.5">
          <span className="h-2 w-1 rounded-full bg-[#00d9ff] animate-pulse" />
        </span>
      </motion.a>
    </section>
  );
};

export default Hero;
