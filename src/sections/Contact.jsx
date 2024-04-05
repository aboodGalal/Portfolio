import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Lottie from 'lottie-react';
import messageAnimation from '../assets/Animation - 1712281222449.json' 

function Contact({setContactScrollY}) {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });
  const cntRef = useRef()


  const getScrollPosition = () => {
    const { top, left } = cntRef.current.getBoundingClientRect();
    return { x: left, y: top };
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = getScrollPosition();
      setScrollPosition(Math.trunc(position.y));
      if(Math.trunc(position.y) < 1){
          setContactScrollY(true)
      }else if(Math.trunc(position.y) > 1){
          setContactScrollY(false)
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);
    return (
        <section ref={cntRef} id='Contact me' className='w-full h-fit overflow-hidden bg-[#18181b]'>
            <div className='flex flex-col py-14 items-center gap-16 mx-auto'>
                <motion.h1 className='text-[deepskyblue] font-bold text-[50px] md:text-[80px]
                 duration-1000 '
                    initial={{
                        scale: 3
                    }}
                    whileInView={{
                        scale: 1
                    }}
                >Contact me</motion.h1>
                <div className='flex flex-col-reverse md:flex-row justify-center w-full md:gap-7'>
                    <form action="" className='flex flex-col justify-center items-center
                     gap-5 text-[#a0a0a9] w-full md:w-[50%] px-2'>
                        <div className='flex flex-col gap-4 w-full'>
                            <label htmlFor="email">Email Adress</label>
                            <input className='bg-[#18181b] border-[1px] border-solid border-[#3f3f46]
                             hover:border-[deepskyblue] focus:border-white px-2 py-3
                             rounded-lg transition-all duration-300' required
                                type="email" id='email' placeholder='Your email' />
                        </div>
                        <div className='flex flex-col gap-4 w-full'>
                            <label htmlFor="message" className=''>Write a message</label>
                            <textarea className='bg-[#18181b] border-[1px] border-solid border-[#3f3f46]
                             hover:border-[deepskyblue] focus:border-white px-2 py-3
                             rounded-lg h-[150px] resize-y transition-all duration-300' required
                                name="message" id="message">Your message</textarea>
                        </div>
                        <button className='w-[40%] md:w-full flex justify-center items-center text-white text-[17px]
                        bg-[#18181b] border-[1px] border-solid border-[#3f3f46] py-4 rounded-lg '
                            type="submit">Submit</button>
                    </form>
                    <div className='w-[150px] h-[200px] md:w-[300px] md:h-[400px] self-end'>
                        <Lottie
                            animationData={messageAnimation}>
                        </Lottie>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact