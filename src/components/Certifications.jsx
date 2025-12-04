import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { certifications } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import GlitchText from './GlitchText';

const CertificationCard = ({ index, name, issuer, date, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(0, 217, 255, 0.3)",
        transition: { duration: 0.3 }
      }}
      className='bg-tertiary p-6 rounded-2xl w-full sm:w-[320px] shadow-card cursor-pointer'
    >
      <div className='relative w-full'>
        <motion.div 
          className='bg-gradient-to-r from-[#00d9ff] to-[#39ff14] rounded-xl p-4 mb-4'
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
        >
          <h3 className='text-white font-bold text-[20px] text-center'>
            {name}
          </h3>
        </motion.div>

        <div className='mt-4'>
          <p className='text-secondary text-[16px] font-semibold'>{issuer}</p>
          <p className='text-secondary text-[14px] mt-1'>{date}</p>
          <p className='mt-3 text-white-100 text-[14px] leading-[20px]'>
            {description}
          </p>
        </div>

        <div className='mt-4 flex justify-center'>
          <motion.div 
            className='w-12 h-12 rounded-full bg-gradient-to-r from-[#00d9ff] to-[#39ff14] flex items-center justify-center'
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <svg
              className='w-6 h-6 text-white'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='M9 2a1 1 0 000 2h2a1 1 0 100-2H9z' />
              <path
                fillRule='evenodd'
                d='M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                clipRule='evenodd'
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}><GlitchText className="inline-block">Recognition & Learning</GlitchText></p>
        <h2 className={`${styles.sectionHeadText}`}><GlitchText className="inline-block">Certifications.</GlitchText></h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          These certifications showcase my commitment to continuous learning and
          professional development. Each certification represents a milestone in
          my journey to master new technologies and enhance my skills across
          various domains including cloud computing, programming, and project
          management.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7 justify-center'>
        {certifications.map((certification, index) => (
          <CertificationCard
            key={`certification-${index}`}
            index={index}
            {...certification}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
