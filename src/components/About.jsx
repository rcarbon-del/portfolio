import React from "react";
import { Tilt } from "react-tilt";
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
        I am Radge Daryll Carbonel, currently 18 years old and born in Baguio City, Benguet. I am a first-year student at University of the Cordilleras who is currently taking the course of Bachelor of Science in Computer Science.
        I also graduated from Baguio City National Science High School at rank 15 and Manuel L. Quezon Elementary School at rank 13.
      </motion.p>
    </>
  )
}

export default About
