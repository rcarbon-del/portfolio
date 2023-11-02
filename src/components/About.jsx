import React from "react";
import Tilt from "react-tilt";
import {motion} from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About Me</p>
        <h2 className={styles.sectionHeadText}>Radge Daryll A. Carbonel</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I am a full-stack web developer with a passion for learning and creating. 
         am currently a 4th year student at the University of the Philippines Los 
         Baños taking up a degree in Computer Science. I am also a member of the 
         UPLB Computer Science Society and the UPLB Data Science Guild.
      </motion.p>
    </>
  )
}

export default About