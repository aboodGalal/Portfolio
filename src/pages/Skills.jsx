import React from 'react'
import { motion } from 'framer-motion'
import Icon from '../components/Icon';
import html from '../assets/html-1.svg'
import css from '../assets/file-type-css-icon-1806x2048-r5fwjl3p.png'
import react from '../assets/React-icon.svg.png'
import js from '../assets/javascript-js-icon-2048x2048-nyxvtvk0.png'
import tailwind from '../assets/tailwind-css-icon-2048x1229-u8dzt4uh.png'
import framer_motion from '../assets/framer-motion.svg'
import redux_icon from '../assets/redux-icon.webp'

function Skills() {
  const Icons = [{ link: html, name: 'html', },
  { link: css, name: 'css' },
  { link: react, name: 'react' },
  { link: js, name: 'javascript' },
  { link: tailwind, name: 'tailwind' },
  { link: framer_motion, name: 'farmer motion' },
  { link: redux_icon, name: 'redux-toolkit' }]



  return (
    <div id='Skills' className='w-full h-fit md:h-screen bg-[rgb(28,35,33)]'>
      <div className='container flex flex-col py-14 items-center mx-auto'>
        <motion.h1 className='text-[deepskyblue] font-bold text-[70px] duration-1000 '
          initial={{
            scale: 5
          }}
          whileInView={{
            scale: 1
          }}
        >Skills</motion.h1>
        <p className='text-[22px] md:text-[40px] text-white'>- Put our service to the test -</p>
        <div className='flex gap-11 flex-wrap max-w-[600px] items-center justify-center mt-10'>
          {Icons.map((icon) => (
            <Icon icon={icon} key={icon.name} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills