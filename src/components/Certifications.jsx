/* eslint-disable react/prop-types */
import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { certifications, technicalActivities } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import GlitchText from './GlitchText';

const LinkChip = ({ label, url }) => (
  <a
    href={url}
    target='_blank'
    rel='noopener noreferrer'
    className='px-3 py-1.5 rounded-full text-[12px] font-semibold tracking-wide bg-black/30 border border-white/20 text-white hover:bg-cyan-500/20 hover:border-cyan-300 transition-all duration-300'
  >
    {label}
  </a>
);

const CertificationCard = ({ index, name, issuer, date, description, links = [] }) => {
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
      className='bg-tertiary/70 backdrop-blur-sm border border-cyan-400/20 p-6 rounded-2xl w-full sm:w-[360px] shadow-card'
    >
      <div className='relative w-full'>
        <motion.div 
          className='bg-gradient-to-r from-[#0ea5e9] via-[#14b8a6] to-[#22c55e] rounded-xl p-4 mb-4'
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
          <p className='text-cyan-100 text-[16px] font-semibold'>{issuer}</p>
          <p className='text-secondary text-[14px] mt-1'>{date}</p>
          <p className='mt-3 text-white-100 text-[14px] leading-[20px]'>
            {description}
          </p>
          {links.length > 0 && (
            <div className='mt-4 flex flex-wrap gap-2'>
              {links.map((link) => (
                <LinkChip key={`${name}-${link.label}`} {...link} />
              ))}
            </div>
          )}
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
  const [activeTab, setActiveTab] = React.useState("certs");

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}><GlitchText className="inline-block">Recognition & Learning</GlitchText></p>
        <h2 className={`${styles.sectionHeadText}`}><GlitchText className="inline-block">Certifications & Activities.</GlitchText></h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          A structured timeline of certifications, workshops, and technical activities with direct proof links.
        </motion.p>
      </div>

      <div className='mt-8 flex gap-3'>
        <button
          onClick={() => setActiveTab("certs")}
          className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
            activeTab === "certs"
              ? "bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] text-white"
              : "bg-tertiary text-secondary hover:text-white"
          }`}
        >
          Certifications
        </button>
        <button
          onClick={() => setActiveTab("activities")}
          className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
            activeTab === "activities"
              ? "bg-gradient-to-r from-[#14b8a6] to-[#22c55e] text-white"
              : "bg-tertiary text-secondary hover:text-white"
          }`}
        >
          Technical Activities
        </button>
      </div>

      <div className='mt-12 flex flex-wrap gap-7 justify-center'>
        {(activeTab === "certs" ? certifications : technicalActivities).map((item, index) => (
          <CertificationCard
            key={`${activeTab}-${index}`}
            index={index}
            name={item.name || item.title}
            issuer={item.issuer || "Technical Activity"}
            date={item.date || "2024-2025"}
            description={item.description}
            links={item.links}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
