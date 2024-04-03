import React, { useState, useEffect, useRef } from 'react';
import '../links/Links.css'




function Links({navOpen, setNavOpen, debounce}) {
  const links = ['Home', 'Skills', 'Portfolio', 'Contact me']
  const linkRef = useRef()
  const [scrollColor, setScrollColor] = useState('');



  useEffect(() => {
    const handleScroll = debounce(() => {
      if (window.scrollY > 1240  && window.innerWidth > 768) {
        setScrollColor('text-black');
      }
       else {
        setScrollColor('text-white');
      }
    }, 250);  // Debounce updates every 250ms
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navOpen]);



  const handleScroll = (link) => {
    setNavOpen(false); 
    if (link === "Home") {
      window.scrollTo(0, 0);
    }
  };
  
  // useEffect(() => {
  //   window.addEventListener('scroll', () =>{
  //       if(window.scrollY > 1400 && window.innerWidth > 768){
  //         linkRef.current.style.color = 'black'
  //       }
  //       else{
  //         linkRef.current.style.color = 'white'
  //       }
  //   })
  // }, []);


  return (
    <ul
    className={` md:flex md:flex-row md:items-center md:static  md:w-auto absolute
    left-[50%] transform -translate-x-1/2 md:-translate-x-[0px] md:py-0  md:pl-0 pl-0 pt-14 md:pt-0 md:opacity-100
      ${navOpen ? 'top-[20px] w-[95%] h-[310px]' : 'w-[0px] h-[0px]  md:h-full top-[100px]  opacity-0'}
       origin-center  sm:z-50 md:z-[400]
       transition-all ease-in duration-200 bg-[#14191b]  md:bg-transparent overflow-hidden rounded-lg`}
  >
    {links.map((link, index) => (
  <li
    key={link}
    className={`hover:md:translate-x-0 hover:translate-x-6 transition-all duration-500 ml-8 
    ${link === 'Contact me' ? 'border-b-[0px] ' : 'border-b-[1px]'} 
    li md:border-b-[0px] border-gray-700`}
    >
    <a
      className={`py-4 mx-0 md:my-0 text-lg block w-full h-full 
      hover:text-[deepskyblue] transition-all duration-200 relative ${scrollColor} ${link}`}
      href={`#${link}`}
      onClick={() => handleScroll(link)}
      // ref={linkRef}
    >
      {link}
    </a>
  </li>
))}
    
  </ul>
  )
}

export default Links