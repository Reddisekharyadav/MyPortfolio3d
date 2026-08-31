import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import GlitchText from "./GlitchText";

const Tech = () => {
  const navigate = useNavigate();
  const [hoveredTech, setHoveredTech] = useState(null);

  const proficiencyLevels = {
    "HTML 5": "Expert",
    "CSS 3": "Expert",
    JavaScript: "Advanced",
    "React JS": "Advanced",
    "Next JS": "Advanced",
    "Next.js": "Advanced",
    Prisma: "Intermediate",
    "Node JS": "Intermediate",
    MongoDB: "Advanced",
    "PostgreSQL": "Intermediate",
    MySQL: "Intermediate",
    "PostgreSQL / MySQL": "Intermediate",
    git: "Advanced",
    Git: "Advanced",
    Firebase: "Intermediate",
    docker: "Intermediate",
    Docker: "Intermediate",
    Python: "Expert",
    Java: "Advanced",
    "Tailwind CSS": "Advanced",
  };

  return (
    <div className="flex flex-col items-center">
      <motion.div variants={textVariant()} className="w-full mb-10 text-center">
        <p className={styles.sectionSubText}>
          <GlitchText className="inline-block">What I work with</GlitchText>
        </p>
        <h2 className={styles.sectionHeadText}>
          <GlitchText className="inline-block">Skills.</GlitchText>
        </h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.slice(0, 13).map((technology, index) => (
          <motion.div
            className="w-28 h-28 relative group"
            key={technology.name}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, type: "spring", stiffness: 160 }}
            onMouseEnter={() => setHoveredTech(technology.name)}
            onMouseLeave={() => setHoveredTech(null)}
          >
            <BallCanvas icon={technology.icon} />

            {hoveredTech === technology.name && (
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-tertiary px-4 py-2 rounded-lg shadow-xl z-50 whitespace-nowrap animate-fade-in border border-[#00d9ff]/30">
                <p className="text-white font-bold text-sm">{technology.name}</p>
                <p className="text-secondary text-xs">{proficiencyLevels[technology.name] || "Intermediate"}</p>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-tertiary" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
      <button
        className="btn-shine mt-10 px-7 py-2.5 rounded-full bg-gradient-to-r from-[#00d9ff] to-[#39ff14] text-black font-semibold shadow-[0_0_20px_rgba(0,217,255,0.25)] hover:scale-105 transition-transform"
        onClick={() => navigate("/all-skills")}
      >
        View All Skills
      </button>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
