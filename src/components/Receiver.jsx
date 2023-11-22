import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { GoogleLogin } from '@react-oauth/google';

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Receiver = () => {
  return (
    <div
      className={`xl:mt-12 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "", 0.2, 1)}
        className='bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Admin Dashboard</p>
        <h3 className={styles.sectionHeadText}>Received Messages</h3>
        <div className="rounded-2xl w-full">
          <GoogleLogin onSuccess={credentialResponse => {console.log(credentialResponse);}} onError={() => {console.log('Login Failed');}} />
        </div>
        
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Receiver, "receiver");
