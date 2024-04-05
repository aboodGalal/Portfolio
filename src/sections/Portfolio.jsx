import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Projects from '../Projects'

function Portfolio({portfolioScrollY, setPortfolioScrollY}) {
    const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });
    const prtRef = useRef()

    const getScrollPosition = () => {
      const { top, left } = prtRef.current.getBoundingClientRect();
      return { x: left, y: top };
    };
  
    useEffect(() => {
      const handleScroll = () => {
        const position = getScrollPosition();
        setScrollPosition(Math.trunc(position.y));
        if(Math.trunc(position.y) < 1){
            setPortfolioScrollY(true)
        }else if(Math.trunc(position.y) > 1){
            setPortfolioScrollY(false)
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [scrollPosition]);

    return (
        <section ref={prtRef} id='Portfolio' className='w-full h-fit overflow-hidden'>
            <div className='container flex flex-col py-14 items-center gap-24 mx-auto'>
                <motion.h1 className='text-[deepskyblue] font-bold text-[50px] md:text-[80px]
                 duration-1000 '
                    initial={{
                        scale: 3
                    }}
                    whileInView={{
                        scale: 1
                    }}
                >Portfolio</motion.h1>
                <div className='flex flex-row-reverse flex-wrap gap-10 items-center justify-center'>
                    {Projects.map((prj) => (
                        <div key={prj.name} className='flex flex-col gap-4 px-5'>
                            <iframe className='w-[330px]  h-[400px] overflow-x-hidden border-solid border-2 border-[deepskyblue]
                            rounded-[20px] self-center' src={prj.link} title={prj.name}></iframe>
                            <h3 className='text-red-500 text-[20px] font-bold'>{prj.name}</h3>
                            <div className='flex flex-wrap gap-3'>
                                {prj.tools.map((tool, index) => (
                                    <span key={index} className='py-1 px-2 bg-gray-600 text-white
                                    w-fit rounded-lg'>{tool}</span>
                                ))}
                            </div>
                            <a href={prj.link} target='_blank' className='w-full bg-[#25262b] flex justify-center
                            items-center text-[white] py-2 rounded-sm mt-3'>&#10149; Preview</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio