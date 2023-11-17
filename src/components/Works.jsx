import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  image,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full transition-all'
      >
        <div className='relative w-full h-[200px]'>
          <img
            src={image}
            alt='project_image'
            className=' h-full object-cover rounded-2xl mx-auto'
          />
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[18px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[12px]'>{description}</p>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Portfolio</p>
        <h2 className="text-white font-black md:text-[40px] sm:text-[40px] xs:text-[40px] text-[40px]" >My Achievements</h2>
      </motion.div>

      <div className='flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "portfolio");
