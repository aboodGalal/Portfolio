import { motion } from 'framer-motion';
import Links from '../links/Links';
import imgCode from '../../assets/source-code.png'

function Navbar({ navOpen, setNavOpen }) {
  return (
    <nav
      id='Home'
      className={`w-full transition-all ease-linear duration-500 
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
        className={`container flex justify-between items-center px-2 py-5 mx-auto relative z-40`}
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
            className={`w-[25px] h-[4px] bg-white border-solid border-[1px] border-black`}
          ></motion.div>
          {navOpen ? null : <motion.div className={`w-[25px] h-[4px] 
          bg-white border-solid border-[1px] border-black`}></motion.div>}
          <motion.div
            initial={{ rotate: '0deg', y: '0px' }}
            animate={{ rotate: `${navOpen ? '45deg' : '0deg'}`, y: `${navOpen ? '-5px' : '0px'}` }}
            className={`w-[25px] h-[4px] bg-white border-solid border-[1px] border-black`}
          ></motion.div>
        </div>
        <Links navOpen={navOpen} setNavOpen={setNavOpen} />
      </motion.div>
    </nav>
  );
}

export default Navbar;