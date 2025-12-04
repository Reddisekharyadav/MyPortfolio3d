import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import GlitchText from './GlitchText';

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_url,
}) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full relative overflow-hidden group'
    >
        {/* Holographic overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00d9ff]/20 via-transparent to-[#39ff14]/20 animate-pulse"></div>
          <div 
            className="absolute inset-0" 
            style={{
              background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 217, 255, 0.1) 2px, rgba(0, 217, 255, 0.1) 4px)',
              animation: 'hologram 3s linear infinite'
            }}
          ></div>
        </div>
        
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover gap-2'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
            {live_url && (
              <div
                onClick={() => window.open(live_url, "_blank")}
                className='bg-gradient-to-r from-[#00d9ff] to-[#39ff14] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                title='View Live Demo'
              >
                <svg
                  className='w-5 h-5 text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                  />
                </svg>
              </div>
            )}
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
    </Tilt>
  );
};

const Works = () => {
  const [filter, setFilter] = React.useState("All");
  
  // Get unique technologies from all projects
  const allTags = ["All", ...new Set(projects.flatMap(project => 
    project.tags.map(tag => tag.name)
  ))];
  
  // Filter projects based on selected tag
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => 
        project.tags.some(tag => tag.name === filter)
      );

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}><GlitchText className="inline-block">My work</GlitchText></p>
        <h2 className={`${styles.sectionHeadText}`}><GlitchText className="inline-block">Projects.</GlitchText></h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      {/* Filter Buttons */}
      <div className='mt-10 flex flex-wrap gap-3 justify-center'>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setFilter(tag)}
            className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
              filter === tag
                ? 'bg-gradient-to-r from-[#00d9ff] to-[#39ff14] text-black shadow-lg scale-105'
                : 'bg-tertiary text-secondary hover:text-white hover:bg-tertiary/80'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {filteredProjects.map((project, index) => (
          <motion.div
            key={`project-${index}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              ease: "easeOut"
            }}
          >
            <ProjectCard index={index} {...project} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
