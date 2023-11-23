import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useGoogleLogin, googleLogout} from '@react-oauth/google';

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import { useFetch } from "../hooks";

const FetchGmailWrapper = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { data, error: fetchError, loading: fetchLoading } = useFetch(
    "https://www.googleapis.com/gmail/v1/users/me/messages?maxResults=10&labelIds=INBOX&key=AIzaSyD-1z8K6X7fWzKl1R4U2s4Dp0L0QZQfjVw"
  );

  return (
    <FetchGmail
      messages={messages}
      setMessages={setMessages}
      loading={loading}
      setLoading={setLoading}
      error={error}
      setError={setError}
      data={data}
      fetchError={fetchError}
      fetchLoading={fetchLoading}
    />
  );
}

const Receiver = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const saved = localStorage.getItem('isLoggedIn');
    const initialValue = JSON.parse(saved);
    return initialValue || false;
  });

  useEffect(() => {
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse.accessToken);
      if (tokenResponse.accessToken) {
        setIsLoggedIn(true);
      }
    },
    onFailure: (error) => console.log(error),
  });

  const logout = googleLogout();

  return (
    <>
      <div
        className={`xl:mt-12 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "", 0.2, 1)}
          className='bg-black-100 p-8 rounded-2xl'
        >
          <p className={styles.sectionSubText}>Admin Dashboard</p>
          <h3 className={styles.sectionHeadText}>Received Messages</h3>
          <div className='mt-5'>
          {isLoggedIn ? (
            <button onClick={() => {logout(); setIsLoggedIn(false);}} className="w-full text-xl rounded-2xl text-tertiary outline-none bg-white font-bold shadow-md shadow-primary py-5 mx-auto">
              Logout
            </button>
          ) : (
            <button onClick={() => login()} className="w-full text-xl rounded-2xl text-tertiary outline-none bg-white font-bold shadow-md shadow-primary py-5 mx-auto">
              <FontAwesomeIcon icon={faGoogle} className='text-2xl mr-1' /> Sign in with Google
            </button>
          )}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Receiver, "receiver");
