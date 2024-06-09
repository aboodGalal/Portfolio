import React from 'react'
import { motion } from 'framer-motion'

function MenuBar() {
    return (
        <div className="flex justify-center items-center gap-7 text-[30px]" style={{ perspective: '1000px' }}>
            <motion.a href="https://www.facebook.com/abood.mohemadgalal" target="_blank"
                style={{ perspective: '1000px' }}
                whileHover={{ translateZ: -50 }} className="icon-facebook w-7 h-7 hover:text-[deepskyblue] transition-all ease-linear duration-100">
            </motion.a>
            <motion.a href="https://github.com/aboodGalal" target="_blank"
                style={{ perspective: '1000px' }}
                whileHover={{ translateZ: -50 }} className="icon-github w-7 h-7 hover:text-[deepskyblue] transition-all ease-linear duration-100">
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/abood-galal-6a0229278/" target="_blank"
                style={{ perspective: '1000px' }}
                whileHover={{ translateZ: -50 }} className="icon-linkedin w-7 h-7  hover:text-[deepskyblue] transition-all ease-linear duration-100">
            </motion.a>
        </div>
    )
}

export default MenuBar