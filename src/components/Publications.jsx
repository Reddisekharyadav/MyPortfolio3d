/* eslint-disable react/prop-types */
import React from "react";
import { motion } from "framer-motion";
import GlitchText from "./GlitchText";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { publications } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const PublicationCard = ({ publication, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.9)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      className='relative overflow-hidden w-full rounded-3xl border border-cyan-400/20 bg-tertiary/70 backdrop-blur-sm p-7'
    >
      <div className='absolute -top-16 -right-16 w-40 h-40 rounded-full bg-cyan-500/10 blur-2xl' />
      <div className='absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-emerald-500/10 blur-2xl' />

      <p className='text-[12px] uppercase tracking-[0.2em] text-cyan-300/80 font-semibold'>
        Publication {index + 1}
      </p>

      <h3 className='mt-2 text-white text-[24px] font-bold leading-tight'>
        {publication.title}
      </h3>

      <p className='mt-3 text-emerald-300 text-[15px] font-semibold'>
        {publication.venue}
      </p>

      <p className='mt-4 text-white/85 leading-7 text-[15px]'>
        {publication.description}
      </p>

      <div className='mt-6 flex flex-wrap gap-2'>
        {publication.links.map((link) => (
          <a
            key={`${publication.title}-${link.label}`}
            href={link.url}
            target='_blank'
            rel='noopener noreferrer'
            className='px-4 py-2 rounded-full text-[13px] font-semibold bg-black/30 border border-white/20 text-white hover:bg-cyan-500/20 hover:border-cyan-300 transition-all duration-300'
          >
            {link.label}
          </a>
        ))}
      </div>
    </motion.div>
  );
};

const Publications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          <GlitchText className='inline-block'>Research & Innovation</GlitchText>
        </p>
        <h2 className={styles.sectionHeadText}>
          <GlitchText className='inline-block'>Publications.</GlitchText>
        </h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Accepted IEEE publications and deployment-backed research work spanning computer vision and speech intelligence.
        </motion.p>
      </div>

      <div className='mt-12 grid grid-cols-1 gap-7'>
        {publications.map((publication, index) => (
          <PublicationCard
            key={publication.title}
            publication={publication}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Publications, "publications");
