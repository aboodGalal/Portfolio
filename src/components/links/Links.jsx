import React from 'react'
import '../links/Links.css'



function Links({navOpen, setNavOpen}) {
  const links = ['Home', 'Skills', 'Portfolio', 'Contact me']

  const handleScroll = (lnk) => {
    setNavOpen(false)
    if (lnk === "Home") {
      window.scrollTo(0, 0);
    }
  };


  return (
    <ul
    className={` md:flex md:flex-row md:items-center md:static w-[120%] md:w-auto absolute left-[-10%] md:py-0 py-7 md:pl-0 pl-16 pt-16 md:pt-0 md:opacity-100
      ${navOpen ? 'top-[0px] ' : 'top-[-400px] opacity-0'}  sm:z-[1] md:z-[400] transition-all ease-in duration-200 bg-[#14191b]  md:bg-transparent overflow-hidden`}
  >
    {links.map((link, index) => (
      <li key={link} className='mx-4 my-6 md:my-0 hover:md:translate-x-0 hover:translate-x-6 transition-all duration-1000 py-0'>
        <a
          className={`text-white text-lg block w-full h-full py-2
           hover:text-[deepskyblue] transition-all duration-200 relative ${link}`}
          href={`#${link}`}
          onClick={() => handleScroll(link)}
        >
          {link}
        </a>
      </li>
    ))}
  </ul>
  )
}

export default Links