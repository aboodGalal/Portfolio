import React from 'react'
import { motion } from 'framer-motion'
import Links from '../links/Links'

function Sidebar({navOpen}) {
  
  return (
    <motion.section 
    initial={{
        right: '0px',
        top: '0px',
        width: '100%',
        height: '100%',
        borderRadius: '50%'
    }}
    animate={{
        borderRadius: navOpen ? ['50% 50% 50% 50%','30% 10% 10% 50%','0% 0% 0% 10%','0%'] : '50%',
        width: navOpen ? '500px' : '100%',
        height: navOpen ? '100vh' : '100%',
        top: navOpen ? '-20px' : '0px',
        right: navOpen ? '-50px' : '0px',
    }}

    className={`absolute flex justify-center items-center bg-[white] z-[-1] ${navOpen ? 'right-[-45px] top-[-20px] w-[500px] h-[100vh]' : 'right-[0px] top-[0px] w-full h-full rounded-full'}`} layout>
      <Links navOpen={navOpen}/>
    </motion.section>
  )
}

export default Sidebar