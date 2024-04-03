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
import Lottie from 'lottie-react';
import LaptopAnimation from '../assets/Animation - 1711992329415.json'

function Skills() {
  const Icons = [{ link: html, name: 'html', },
  { link: css, name: 'css' },
  { link: react, name: 'react' },
  { link: js, name: 'javascript' },
  { link: tailwind, name: 'tailwind' },
  { link: framer_motion, name: 'farmer motion' },
  { link: redux_icon, name: 'redux-toolkit' }]



  return (
    <section id='Skills' className='w-full sm:h-fit lg:h-fit md:h-screen bg-[rgb(28,35,33)] overflow-hidden'>
      <div className='container flex flex-col py-14 items-center mx-auto'>
        <motion.h1 className='text-[deepskyblue] font-bold text-[50px] md:text-[80px] duration-1000 '
          initial={{
            scale: 3
          }}
          whileInView={{
            scale: 1
          }}
        >Tech Tapestry</motion.h1>
        <p className='text-[22px] md:text-[30px] text-white'>- Put our service to the test -</p>
        <div className='flex flex-row-reverse gap-12 justify-center items-center w-full '>
          <div className='hidden lg:flex'>
          <Lottie 
          style={{height: 355 ,width: 500}}
          animationData={LaptopAnimation}>
          </Lottie>
          </div>
          <div className='flex gap-11 flex-wrap max-w-[600px] items-center justify-center mt-10 h-fit'>
            {Icons.map((icon) => (
              <Icon icon={icon} key={icon.name} />
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills