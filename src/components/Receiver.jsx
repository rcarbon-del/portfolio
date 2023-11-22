import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useGoogleLogin, googleLogout} from '@react-oauth/google';

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Receiver = () => {

  const login = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
    flow: 'auth-code',
  });

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
        <div className='flex flex-row justify-between items-center mt-5 gap-5'>
          <button onClick={() => login()} className="w-1/2 text-xl rounded-2xl text-tertiary outline-none bg-white font-bold shadow-md shadow-primary py-5 mx-auto " >
            <FontAwesomeIcon icon={faGoogle} className='text-2xl mr-1' /> Sign in with Google
          </button>
          <button onClick={() => googleLogout()} className="w-1/2 text-xl rounded-2xl text-tertiary outline-none bg-white font-bold shadow-md shadow-primary py-5 mx-auto" >
            Logout
          </button>
        </div>

        
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Receiver, "receiver");
