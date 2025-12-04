import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { menu, close } from "../assets";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { navLinks } from "../constants";
import { styles } from "../styles";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderNavLinks = (isMobile = false) =>
    navLinks.map((nav) => (
      <li
        key={nav.id}
        className={`${
          isMobile
            ? "font-poppins font-medium cursor-pointer text-[16px]"
            : "hover:text-white text-[18px] font-medium cursor-pointer"
        } ${active === nav.title ? "text-white" : "text-secondary"}`}
        onClick={() => {
          if (isMobile) setToggle(false);
          setActive(nav.title);
        }}
      >
        <a href={`#${nav.id}`}>{nav.title}</a>
      </li>
    ));

  return (
    <nav
      className={`
        ${styles?.paddingX || ""}
        w-full flex items-center py-5 fixed top-0 z-[100]
        ${scrolled ? "bg-black/60 backdrop-blur-md" : "bg-transparent"}
      `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[#00d9ff] blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-full"></div>
            <img 
              src="/Logo1.png" 
              alt="logo1" 
              className="w-9 h-9 object-contain relative z-10 drop-shadow-[0_0_8px_rgba(0,217,255,0.6)] group-hover:drop-shadow-[0_0_15px_rgba(57,255,20,0.8)] transition-all duration-300 group-hover:scale-110" 
            />
          </div>
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Marugani Reddi Sekhar&nbsp;
            <span className="lg:block hidden">| Developer</span>
          </p>
        </Link>

        {/* Desktop Nav */}
        <div className="flex items-center gap-10">
          <ul className="list-none hidden lg:flex flex-row gap-10">
            {renderNavLinks(false)}
          </ul>
          <div className="hidden lg:flex gap-4 items-center">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-[#00d9ff] text-black font-medium hover:bg-[#39ff14] transition"
            >
              Resume
            </a>
            <a
              href="https://github.com/Reddisekharyadav"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-secondary text-2xl transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/marugani-reddi-sekhar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-secondary text-2xl transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain z-[110]"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-[99] rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {renderNavLinks(true)}
              <li>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-secondary text-xl font-medium"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Reddisekharyadav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-secondary text-xl flex items-center gap-2"
                >
                  <FaGithub /> GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/marugani-reddi-sekhar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-secondary text-xl flex items-center gap-2"
                >
                  <FaLinkedin /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
