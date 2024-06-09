import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Particless from '../components/Particless';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import img from '../assets/Picsart_24-02-01_23-19-57-785.jpg'
import SkeltonLoader from '../components/SkeltonLoader';
import MenuBar from '../components/MenuBar';


function Home() {
  const [loading, setLoading] = useState(true);

  const [text] = useTypewriter({
    words: ['React.JS Developer', 'Front-End Developer'],
    loop: Infinity,
    typeSpeed: 30,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);


  return (
    <section className={`bg-black w-full md:h-fit pt-7 relative`}>
      <div className="w-[120%] h-[100%] absolute top-[-50px] left-[-100px] right-[-100px]">
        <Particless />
      </div>
      <div
        className={`container mx-auto flex flex-col-reverse md:flex-row-reverse gap-20 lg:gap-[0px]
       justify-center md:justify-around  items-center`}
      >
        {loading ? (
          <SkeltonLoader />
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
              className="img lg:w-[350px] lg:h-[450px] mx-3 md:mx-0 mb-10  min-w-[200px] h-[350px] flex justify-center items-center"
            >
              <img
                className="rounded-[20px] w-full h-full"
                src={img}
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
              className="text-[white] md:self-start md:mt-10 flex flex-col justify-center items-center min-w-[330px] h-full md:justify-start md:items-start">
              <p className="text-[18px] text-[deepskyblue] ml-2 md:ml-0 mb-1 pb-0 self-start">
                Hi, my name is
              </p>
              <div className="text-[45px] lg:text-[55px] flex flex-col lg:flex-row items-center lg:gap-3 font-bold">
                <h2>Abdelrahman</h2>
                <h2 className="translate-y-[-25px] lg:translate-y-[0px]">Galal</h2>
              </div>
              <h3 className="text-[30px] md:text-[35px] mt-0 mb-1 lg:mt-1 h-[20px] text-[deepskyblue]">
                {text}
                <Cursor cursorColor="#deepskyblue" />
              </h3>
              <div className={`w-full flex flex-col justify-between items-center lg:items-start 
                md:flex-row-reverse lg:flex-col`}>
                <a href="https://drive.google.com/file/d/1erBWKc2OH9oHV_46Y05K0qlXKrEV6vnf/view?usp=sharing" target="_blank"
                  className={`text-white my-12 px-3 py-1 text-[18px] md:text-[25px] border-x-[1px] rounded-md
                  hover:bg- [deepskyblue] hover:text- black hover:border-[deepskyblue] hover:shadow-lg hover:shadow-[deepskyblue] 
                  shadow-md shadow-[deepskyblue] transition-all duration-150 w-fit`}>View CV</a>
                <MenuBar />
              </div>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}

export default Home;