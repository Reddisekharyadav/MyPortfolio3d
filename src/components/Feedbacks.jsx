import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { activities } from "../constants";

const ActivityCard = ({
  index,
  role,
  organization,
  points = [],
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <div className='mt-1'>
      <p className='text-white font-bold text-[18px]'>{role}</p>
      <p className='text-secondary text-[14px] mb-2'>{organization}</p>
      <ul className="list-disc pl-5 space-y-2">
        {points.map((point, i) => (
          <li key={i} className="text-white text-[15px]">{point}</li>
        ))}
      </ul>
    </div>
  </motion.div>
);
const Activities = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Beyond Academics</p>
          <h2 className={styles.sectionHeadText}>Leadership & Extra Activities</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {activities.map((activity, index) => (
          <ActivityCard key={activity.role + index} index={index} {...activity} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Activities, "");