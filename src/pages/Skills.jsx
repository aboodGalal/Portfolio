import React from 'react'
import { motion } from 'framer-motion'
import Icon from '../components/Icon';

function Skills() {
  const Icons = [{ link: 'src/assets/html-1.svg', name: 'html', },
  { link: 'src/assets/file-type-css-icon-1806x2048-r5fwjl3p.png', name: 'css' },
  { link: 'src/assets/React-icon.svg.png', name: 'react' },
  { link: 'src/assets/javascript-js-icon-2048x2048-nyxvtvk0.png', name: 'javascript' },
  { link: 'src/assets/tailwind-css-icon-2048x1229-u8dzt4uh.png', name: 'tailwind' },
  { link: 'src/assets/framer-motion.svg', name: 'farmer motion' },
  { link: 'src/assets/redux-icon.webp', name: 'redux-toolkit' }]



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