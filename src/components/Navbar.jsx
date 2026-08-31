import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { menu, close } from "../assets";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { navLinks } from "../constants";
import { styles } from "../styles";

const resumeUrl =
  "https://drive.google.com/file/d/1fJOuYfUMh11mZ_ToBSDJENsFfzehyXob/view?usp=sharing";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      let current = "";
      navLinks.forEach((nav) => {
        const section = document.getElementById(nav.id);
        if (section && window.scrollY >= section.offsetTop - 180) {
          current = nav.title;
        }
      });
      if (current) setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderNavLinks = (isMobile = false) =>
    navLinks.map((nav) => (
      <li
        key={nav.id}
        className={`${
          isMobile
            ? "font-medium cursor-pointer text-[17px]"
            : "text-[16px] font-medium cursor-pointer"
        } ${active === nav.title ? "text-white" : "text-white/65 hover:text-white"}`}
        onClick={() => {
          if (isMobile) setToggle(false);
          setActive(nav.title);
        }}
      >
        <a href={`#${nav.id}`} className={`nav-link ${active === nav.title ? "active" : ""}`}>
          {nav.title}
        </a>
      </li>
    ));

  return (
    <nav
      className={`
        ${styles?.paddingX || ""}
        w-full flex items-center py-4 fixed top-0 z-[100] transition-all duration-300
        ${scrolled ? "bg-[#050816]/75 backdrop-blur-xl border-b border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.25)]" : "bg-transparent"}
      `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 group"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[#00d9ff] blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-full" />
            <img
              src="/Logo1.png"
              alt="logo1"
              className="w-9 h-9 object-contain relative z-10 drop-shadow-[0_0_8px_rgba(0,217,255,0.6)] group-hover:drop-shadow-[0_0_15px_rgba(57,255,20,0.8)] transition-all duration-300 group-hover:scale-110"
            />
          </div>
          <p className="text-white text-[17px] font-display font-bold cursor-pointer flex">
            Reddi Sekhar
            <span className="lg:block hidden text-white/50 font-sans font-medium">&nbsp;· Developer</span>
          </p>
        </Link>

        <div className="flex items-center gap-8">
          <ul className="list-none hidden lg:flex flex-row gap-8">{renderNavLinks(false)}</ul>
          <div className="hidden lg:flex gap-3 items-center">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine px-4 py-2 rounded-full bg-gradient-to-r from-[#00d9ff] to-[#39ff14] text-black font-semibold text-sm hover:scale-105 transition-transform"
            >
              Resume
            </a>
            <a
              href="https://github.com/Reddisekharyadav"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#00d9ff] text-xl transition-colors"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/marugani-reddi-sekhar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#39ff14] text-xl transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="lg:hidden flex flex-1 justify-end items-center">
          <button
            type="button"
            className="z-[110] p-1"
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle menu"
          >
            <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain" />
          </button>
          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0, y: -12, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.96 }}
                className="p-6 glass-panel absolute top-20 right-4 min-w-[200px] z-[99] rounded-2xl"
              >
                <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                  {renderNavLinks(true)}
                  <li>
                    <a
                      href={resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#00d9ff] text-[16px] font-semibold"
                    >
                      Resume
                    </a>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
