import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import GlitchText from "./GlitchText";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    tiltMaxAngleX={12}
    tiltMaxAngleY={12}
    scale={1.03}
    transitionSpeed={450}
    glareEnable
    glareMaxOpacity={0.18}
    glareColor="#00d9ff"
    className="xs:w-[250px] w-full"
  >
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12, type: "spring", stiffness: 110 }}
      className="w-full green-pink-gradient p-[1px] rounded-[22px] shadow-card"
    >
      <div className="bg-tertiary/90 rounded-[22px] py-6 px-10 min-h-[280px] flex justify-evenly items-center flex-col group">
        <motion.img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain drop-shadow-[0_0_16px_rgba(0,217,255,0.45)]"
          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.08 }}
          transition={{ duration: 0.5 }}
        />
        <h3 className="text-white text-[20px] font-display font-bold text-center group-hover:gradient-text transition-all">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>
          <GlitchText>Overview.</GlitchText>
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Computer Science student pursuing an Integrated M.Tech at{" "}
        <span className="text-white">VIT-AP University</span> (in collaboration with Virtusa).
        Proficient in <span className="text-[#00d9ff]">Python</span>,{" "}
        <span className="text-[#00d9ff]">Java</span>, HTML/CSS, and experienced with{" "}
        <span className="text-white">React</span>, Next.js, Prisma, Firebase, Node.js, Spring Boot,
        and MongoDB. Skilled in team collaboration, UI/UX design, and agile development.
        Passionate about software innovation and end-to-end product building.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
