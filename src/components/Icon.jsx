import React, { useState } from 'react'
import { motion } from 'framer-motion';

function Icon({ icon }) {
    const [hoveredIcon, setHoveredIcon] = useState(false);
    return (
        <motion.div className='w-[100px] h-[120px] relative'
            initial={{
                rotate: 0,
            }}
            whileHover={{
                rotate: '360deg'
            }}
            onMouseEnter={() => setHoveredIcon(true)}
            onMouseLeave={() => setHoveredIcon(false)}>
            <span
                className={`bg-gray-900 p-3 w-fit h-5 text-[12px] flex justify-center items-center 
  flex-nowrap text-white absolute opacity-0 left-0 duration-100 ease-linear transition-all
  ${hoveredIcon ? 'top-[-35px] left-[50%] -translate-x-1/2 opacity-100' : 'top-10'}`}
                style={{ whiteSpace: 'nowrap' }}>
                {icon.name}
            </span>
            <img src={icon.link} alt="" />
        </motion.div>
    )
}

export default Icon