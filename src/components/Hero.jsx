import {motion} from "framer-motion";

import ReactTyped from "react-typed";
import {styles} from "../styles";
import {ComputersCanvas} from "./canvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faInstagram, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I am <span className='text-[#915EFF]'>Radge Daryll A. Carbonel</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a &nbsp;
            <ReactTyped strings={["Student", "Gamer", "Rookie Developer"]} typeSpeed={100} loop backSpeed={50} />
          </p>
          
        </div>
      </div>

      <ComputersCanvas />

    <div className={`absolute left-[9rem] top-[16rem] w-full flex `}>
      <div className='flex flex-row justify-start items-center mt-5'>
            <a href='https://www.facebook.com/rcarbondel/' target='_blank' rel="norefferer">
              <FontAwesomeIcon icon={faFacebook} className='text-[#915EFF] text-2xl mr-5' />
            </a>
            <a href='https://github.com/rcarbon-del' target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={faGithub} className='text-[#915EFF] text-2xl mr-5' />
            </a>
            <a href='https://www.instagram.com/rcarbon.ig/' target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={faInstagram} className='text-[#915EFF] text-2xl mr-5' />
            </a>
            <a href='https://twitter.com/rcarbontwt/' target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={faTwitter} className='text-[#915EFF] text-2xl mr-5' />
            </a>
            <a href='https://www.linkedin.com/in/rcarbon/' target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={faLinkedin} className='text-[#915EFF] text-2xl mr-5' />
            </a>
          </div>
          </div>
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
    
  );
};

export default Hero;
