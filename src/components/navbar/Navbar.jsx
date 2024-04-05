import { motion } from 'framer-motion';
import Sidebar from '../sidebar/Sidebar';
import Links from '../links/Links';
import { useEffect, useState, useRef } from 'react';
import imgCode from '../../assets/source-code.png'


function Navbar({ navOpen, setNavOpen }) {
  const [scrollBackgroundColor, setScrollBackgroundColor] = useState('bg-white');
  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay);
    };
  };

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (window.scrollY < 6050 && window.scrollY > 1400  && !navOpen) {
        setScrollBackgroundColor('bg-black');
      } else {
        setScrollBackgroundColor('bg-white');
      }
    }, 250);  // Debounce updates every 250ms
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navOpen]);


  return (
    <nav
      id='Home'
      className={`w-full  transition-all ease-linear duration-500 
      bg-opacity-50 backdrop-filter backdrop-blur sticky top-0  z-10
      `}
    >
      <motion.div
        initial={{
          translateY: '-550%',
        }}
        animate={{
          translateY: 0,
        }}
        className={`container  flex justify-between items-center px-2 py-5 mx-auto relative z-40`}
      >
        <div className='my-0 mx-5 z-[400] text-[deepskyblue] text-[35px] font-bold
         flex flex-row items-center gap-4'>
          <a href=''>Galal </a>
          <span className='w-[25px] overflow-hidden'><img className='pt-3' src={imgCode} alt="" /></span>
        </div>
        <div
          className={`inline-flex justify-center items-center flex-col md:hidden gap-1
             cursor-pointer rounded-full bg-transparent absolute right-5 z-[400]`}
          onClick={() => setNavOpen(!navOpen)}
        >
          <motion.div
            initial={{ rotate: '0deg', y: '0px' }}
            animate={{ rotate: `${navOpen ? '-45deg' : '0deg'}`, y: `${navOpen ? '3px' : '0px'}` }}
            className={`w-[25px] h-[2px]  ${navOpen? 'bg-white': ''} ${scrollBackgroundColor}`}
          ></motion.div>
          {navOpen ? null : <motion.div  className={`w-[25px] h-[2px]  ${navOpen? 'bg-white': ''} ${scrollBackgroundColor}`}></motion.div>}
          <motion.div
            initial={{ rotate: '0deg', y: '0px' }}
            animate={{ rotate: `${navOpen ? '45deg' : '0deg'}`, y: `${navOpen ? '-3px' : '0px'}` }}
            className={`w-[25px] h-[2px]  ${navOpen? 'bg-white': ''} ${scrollBackgroundColor}`}
          ></motion.div>
        </div>
        <Links navOpen={navOpen} setNavOpen={setNavOpen} debounce={debounce}/>
      </motion.div>
    </nav>
  );
}

export default Navbar;