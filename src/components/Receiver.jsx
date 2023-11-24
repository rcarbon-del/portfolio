import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useGoogleLogin, googleLogout} from '@react-oauth/google';

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import { getInbox } from "../hooks";

const Receiver = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const saved = localStorage.getItem('isLoggedIn');
    const initialValue = JSON.parse(saved);
    return initialValue || false;
  });

  const [emails, setEmails] = useState([]);

  useEffect(() => {
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  const login = useGoogleLogin({
    scope: 'https://mail.google.com/',
    onSuccess: (response) => {
      console.log(response);
      localStorage.setItem('access_token', response.access_token);
      useEffect(() => {
        const access_token = localStorage.getItem('access_token');
        getInbox(access_token)
          .then(data => setEmails(data))
          .catch(error => console.error(error));
      }, []);
      setIsLoggedIn(true);
    },
    onFailure: (error) => console.log(error),
  });

  return (
    <>
      <div
        className={`xl:mt-12 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "", 0.2, 1)}
          className='bg-black-100 p-8 rounded-2xl'
        >
          {isLoggedIn ? (
            <div>
              <p className={styles.sectionSubText}>Admin Dashboard</p>
              <h3 className={styles.sectionHeadText}>Received Messages</h3>
            </div>
          ) : (
            <div>
              <p className={styles.sectionSubText}>Dashboard</p>
              <h3 className={styles.sectionHeadText}>Login to Admin</h3>
            </div>
          )}
          <div className='mt-5'>
          {isLoggedIn ? (
            <button onClick={() => {googleLogout(); localStorage.removeItem('accessToken'); setIsLoggedIn(false);}} className="w-full text-xl rounded-2xl text-tertiary outline-none bg-white font-bold shadow-md shadow-primary py-5 mx-auto">
              Logout
            </button>
          ) : (
            <button onClick={() => login()} className="w-full text-xl rounded-2xl text-tertiary outline-none bg-white font-bold shadow-md shadow-primary py-5 mx-auto">
              <FontAwesomeIcon icon={faGoogle} className='text-2xl mr-1' /> Sign in with Google
            </button>
          )}
          </div>
          
        </motion.div>
        <div
        className={`mt-10 overflow-hidden`}
      >
            {isLoggedIn ? (
              <motion.div
              variants={slideIn("left", "", 0.2, 1)}
              className='bg-black-100 p-8 rounded-2xl'
            >
              <div>
                {emails.map((email, index) => {
                  const subject = email.payload.headers.find(header => header.name === 'Subject').value;
                  const from = email.payload.headers.find(header => header.name === 'From').value;
          
                  return (
                    <div key={index}>
                      <h2>{subject}</h2>
                      <p>{from}</p>
                    </div>
                  );
                })}
              </div>
              </motion.div>
            ) : (
              <div>
              </div>
            )}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Receiver, "receiver");
