import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Particless from '../components/Particless';
import React, { useEffect, useState } from 'react';
import { faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

function Home() {



  const [text] = useTypewriter({    
    words: ['React.JS Developer', 'Front-End Developer'],
    loop: Infinity,
    typeSpeed: 30,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);
  

  return (
    <div className={`bg-black w-full md:h-[90vh] pt-7 relative`}>
      <div className="w-[120%] h-[100%] absolute top-[-50px] left-[-100px] right-[-100px]">
        <Particless />
      </div>
      <div
        className={`container mx-auto flex flex-col-reverse md:flex-row-reverse gap-24 lg:gap-[0px]
       justify-center md:justify-around  items-center`}
      >
        {loading ? (
          <div className="skeleton-loader container mx-auto flex flex-col-reverse md:flex-row-reverse gap-24 lg:gap-[0px]
          justify-center md:justify-around  items-center animate-pulse opacity-30">
            <div
              style={{
                borderRadius: '20px',
                boxShadow: '5px 5px 20px 0px  rgba(128, 128, 128, 0.5)',
              }}
              className="bg-gray-800 opacity-70 animate-pulse z-10 lg:w-[250px] lg:h-[250px] mx-3 md:mx-0 mb-10  min-w-[250px] h-[400px]  flex justify-center items-center"
            >
              <span className='text-[40px] opacity-25'><FontAwesomeIcon icon={faCamera} /></span>
            </div>
            <div className="text-[white] md:self-start md:mt-10 flex flex-col justify-center items-center min-w-[330px] h-full md:justify-start md:items-start ">
              <span className='w-[300px] h-5 bg-gray-800 animate-pulse my-3 opacity-70'></span>
              <span className='w-[500px] h-10 bg-gray-800 animate-pulse my-3 opacity-70'></span>
              <span className='w-[350px] h-2 bg-gray-800 animate-pulse my-3 opacity-70'></span>
              <span className='w-[300px] h-5 bg-gray-800 animate-pulse my-3 opacity-70'></span>
              <span className='w-[300px] h-5 bg-gray-800 animate-pulse my-3 opacity-70'></span>
              <span className='w-[500px] h-10 bg-gray-800 animate-pulse my-3 opacity-70'></span>
              <span className='w-[350px] h-2 bg-gray-800 animate-pulse my-3 opacity-70'></span>
              <span className='w-[300px] h-5 bg-gray-800 animate-pulse my-3 opacity-70'></span>
            </div>
          </div>
        ) : (
          <>
            <motion.div
              style={{
                borderRadius: '20px',
                boxShadow: '5px 5px 20px 0px  rgba(128, 128, 128, 0.5)',
              }}
              initial={{
                translateX: '100%'
              }}
              animate={{
                translateX: 0
              }}
              className="img z-10 lg:w-[350px] lg:h-[450px] mx-3 md:mx-0 mb-10  min-w-[250px] h-[400px]  flex justify-center items-center"
            >
              <img
                className="rounded-[20px] w-full h-full"
                src="src\assets\Picsart_24-02-01_23-19-57-785.jpg"
                alt=""
              />
            </motion.div>
            <motion.div         
              initial={{
                translateX: '-100%'
              }}
              animate={{
                translateX: 0
              }}
             className="text-[white] md:self-start md:mt-10 flex flex-col justify-center items-center min-w-[330px] h-full md:justify-start md:items-start ">
              <p className="text-[18px] text-[deepskyblue] ml-2 md:ml-0 mb-1 pb-0 self-start">
                Hi, my name is
              </p>
              <div className="text-[45px] lg:text-[55px] flex flex-col lg:flex-row items-center lg:gap-3 font-bold">
                <h2>Abdelrahman</h2>
                <h2 className="translate-y-[-25px] lg:translate-y-[0px]">Galal</h2>
              </div>
              <h3 className="text-[30px] md:text-[35px] mt-0 mb-7 lg:mt-7 h-[20px] text-[deepskyblue]">
                {text}
                <Cursor cursorColor="#deepskyblue" />
              </h3>
              <div className="flex justify-center items-center gap-7 mt-10 text-[30px]" style={{perspective: '1000px'}}>
                <motion.a href="" target="_blank" 
                style={{perspective: '1000px'}}
                whileHover={{translateZ: -50}} className="hover:text-[deepskyblue] transition-all ease-linear duration-100">
                  <FontAwesomeIcon icon={faFacebookF} />
                </motion.a>
                <motion.a href="https://github.com/aboodGalal" target="_blank"
                style={{perspective: '1000px'}}
                whileHover={{translateZ: -50}}  className="hover:text-[deepskyblue] transition-all ease-linear duration-100">
                  <FontAwesomeIcon icon={faGithub} />
                </motion.a>
                <motion.a href="https://www.linkedin.com/in/abood-galal-6a0229278/" target="_blank"
                 style={{perspective: '1000px'}}
                 whileHover={{translateZ: -50}}  className="hover:text-[deepskyblue] transition-all ease-linear duration-100">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;