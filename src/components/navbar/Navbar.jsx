import { motion } from 'framer-motion';
import Sidebar from '../sidebar/Sidebar';
import Links from '../links/Links';
import { useEffect, useState, useRef } from 'react';

function Navbar({ navOpen, setNavOpen }) {
  // const [scrollBackground, setScrollBackground] = useState(false);
  const navbarRef = useRef(null);


  return (
    <nav
      id='Home'
      ref={navbarRef}
      className={`w-full bg-black transition-all ease-linear duration-500 
      bg-opacity-50 backdrop-filter backdrop-blur sticky top-0  z-40
      `}
    >
      <motion.div
        initial={{
          translateY: '-550%',
        }}
        animate={{
          translateY: 0,
        }}
        className={`container bg-[#1f 1f1f] flex justify-between items-center px-2 py-5 mx-auto relative z-40`}
      >
        <p className='my-0 mx-5 z-[400] text-[deepskyblue] text-[35px] font-bold'>
          <a href=''>Galal</a>
        </p>
        <div
          className={`inline-flex justify-center items-center flex-col md:hidden gap-1
             cursor-pointer rounded-full bg-transparent absolute right-5 z-[400]`}
          onClick={() => setNavOpen(!navOpen)}
        >
          <motion.div
            initial={{ rotate: '0deg', y: '0px' }}
            animate={{ rotate: `${navOpen ? '-45deg' : '0deg'}`, y: `${navOpen ? '3px' : '0px'}` }}
            className={`w-[25px] h-[2px] bg-white`}
          ></motion.div>
          {navOpen ? null : <motion.div className={`w-[25px] h-[2px] bg-white`}></motion.div>}
          <motion.div
            initial={{ rotate: '0deg', y: '0px' }}
            animate={{ rotate: `${navOpen ? '45deg' : '0deg'}`, y: `${navOpen ? '-3px' : '0px'}` }}
            className={`w-[25px] h-[2px] bg-white`}
          ></motion.div>
        </div>
        <Links navOpen={navOpen} setNavOpen={setNavOpen} />
      </motion.div>
    </nav>
  );
}

export default Navbar;