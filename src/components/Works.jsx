import React, { useState, useRef } from "react";
import Tilt from "react-parallax-tilt";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import GlitchText from "./GlitchText";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  live_url,
  index,
}) => {
  const [imgError, setImgError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const hasImage = Boolean(image) && !imgError;
  const initials =
    name
      .replace(/[^a-zA-Z0-9 ]/g, "")
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0].toUpperCase())
      .join("") || "MR";

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: 15, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay: (index % 3) * 0.15,
        type: "spring",
        stiffness: 80,
        damping: 18,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ perspective: "1200px" }}
    >
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        scale={1.03}
        transitionSpeed={450}
        glareEnable
        glareMaxOpacity={0.15}
        glareColor="#00d9ff"
        className="bg-tertiary/80 p-5 rounded-2xl sm:w-[360px] w-full relative overflow-hidden group border border-white/5 hover:border-[#00d9ff]/30 transition-all duration-500"
      >
        {/* Animated border glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          animate={
            isHovered
              ? {
                  boxShadow: [
                    "0 0 20px rgba(0,217,255,0.15), inset 0 0 20px rgba(0,217,255,0.05)",
                    "0 0 40px rgba(57,255,20,0.2), inset 0 0 30px rgba(57,255,20,0.05)",
                    "0 0 20px rgba(164,128,255,0.15), inset 0 0 20px rgba(164,128,255,0.05)",
                    "0 0 20px rgba(0,217,255,0.15), inset 0 0 20px rgba(0,217,255,0.05)",
                  ],
                }
              : { boxShadow: "0 0 0px transparent" }
          }
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Animated gradient overlay on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00d9ff]/15 via-transparent to-[#39ff14]/15" />
        </div>

        {/* Scanning line animation on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl"
          style={{ zIndex: 2 }}
        >
          {isHovered && (
            <motion.div
              className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00d9ff] to-transparent"
              initial={{ top: "-2px" }}
              animate={{ top: "100%" }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          )}
        </motion.div>

        <div className="relative w-full h-[230px] overflow-hidden rounded-2xl">
          {hasImage ? (
            <motion.img
              src={image}
              alt={name}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover rounded-2xl"
              whileHover={{ scale: 1.12 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
          ) : (
            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#0b1120] via-[#111c33] to-[#050816] border border-white/5 flex flex-col items-center justify-center gap-3 relative overflow-hidden">
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_20%,rgba(0,217,255,0.25),transparent_45%),radial-gradient(circle_at_75%_80%,rgba(57,255,20,0.18),transparent_40%)]" />
              <motion.span
                className="relative text-5xl font-display font-black tracking-tight bg-gradient-to-r from-[#00d9ff] via-[#39ff14] to-[#a480ff] bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(0,217,255,0.35)]"
                animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                {initials}
              </motion.span>
              <span className="relative text-[11px] uppercase tracking-[0.25em] text-white/40">
                Visual coming soon
              </span>
            </div>
          )}

          {/* Image overlay with shimmer */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-[#050816]/80 via-transparent to-transparent rounded-2xl"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />

          {/* Floating particles on card hover */}
          {isHovered && (
            <>
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute w-1 h-1 rounded-full"
                  style={{
                    background: i % 2 === 0 ? "#00d9ff" : "#39ff14",
                    left: `${15 + i * 14}%`,
                    bottom: 0,
                  }}
                  initial={{ y: 0, opacity: 0 }}
                  animate={{
                    y: [0, -80 - Math.random() * 60],
                    opacity: [0, 1, 0],
                    x: [0, (Math.random() - 0.5) * 40],
                  }}
                  transition={{
                    duration: 1.5 + Math.random() * 0.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeOut",
                  }}
                />
              ))}
            </>
          )}

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
            <motion.button
              type="button"
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center"
              aria-label={`${name} source code`}
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
            </motion.button>
            {live_url && (
              <motion.button
                type="button"
                onClick={() => window.open(live_url, "_blank")}
                className="bg-gradient-to-r from-[#00d9ff] to-[#39ff14] w-10 h-10 rounded-full flex justify-center items-center"
                title="View Live Demo"
                aria-label={`${name} live demo`}
                whileHover={{ scale: 1.2, rotate: -360 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.button>
            )}
          </div>
        </div>

        <div className="mt-5">
          <motion.h3
            className="text-white font-display font-bold text-[22px]"
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {name}
          </motion.h3>
          <p className="mt-2 text-secondary text-[14px] leading-6">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, tagIdx) => (
            <motion.span
              key={`${name}-${tag.name}`}
              className={`text-[12px] px-2.5 py-1 rounded-full bg-black/30 border border-white/10 ${tag.color}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: tagIdx * 0.08 + 0.3 }}
              whileHover={{
                scale: 1.1,
                borderColor: "rgba(0, 217, 255, 0.5)",
                boxShadow: "0 0 12px rgba(0, 217, 255, 0.2)",
              }}
            >
              #{tag.name}
            </motion.span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [filter, setFilter] = React.useState("All");
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const tagCounts = projects.reduce((acc, project) => {
    project.tags.forEach((tag) => {
      acc[tag.name] = (acc[tag.name] || 0) + 1;
    });
    return acc;
  }, {});

  const topTags = Object.entries(tagCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 9)
    .map(([tag]) => tag);

  const allTags = ["All", ...topTags];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((project) => project.tags.some((tag) => tag.name === filter));

  return (
    <div ref={sectionRef}>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>
          <GlitchText className="inline-block">My work</GlitchText>
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          <GlitchText className="inline-block">Projects.</GlitchText>
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Selected builds that show how I ship — from full-stack products and IoT systems to research-backed AI apps,
          each with a repo and, where possible, a live demo.
        </motion.p>
      </div>

      {/* Animated filter bar */}
      <div className="mt-10 flex flex-wrap gap-3 justify-center">
        {allTags.map((tag, idx) => (
          <motion.button
            key={tag}
            onClick={() => setFilter(tag)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.04, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
              filter === tag
                ? "bg-gradient-to-r from-[#00d9ff] to-[#39ff14] text-black shadow-[0_0_20px_rgba(0,217,255,0.3)] scale-105"
                : "bg-tertiary text-secondary hover:text-white hover:bg-tertiary/80 border border-white/5"
            }`}
          >
            {tag}
          </motion.button>
        ))}
      </div>

      <motion.p
        className="mt-6 text-center text-sm text-white/40"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Showing <span className="text-[#00d9ff] font-semibold">{filteredProjects.length}</span> of {projects.length} projects
        {filter !== "All" && (
          <span>
            {" "}
            tagged <span className="text-[#39ff14] font-semibold">#{filter}</span>
          </span>
        )}
      </motion.p>

      <motion.div layout className="mt-10 flex flex-wrap gap-7 justify-center">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.name} index={index} {...project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Works, "projects");
