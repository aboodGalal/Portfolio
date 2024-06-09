import React from 'react';
import '../links/Links.css'


function Links({ navOpen, setNavOpen }) {
  const links = ['Home', 'Skills', 'Portfolio', 'Contact me']

  const handleScroll = (link) => {
    setNavOpen(false);
    if (link === "Home") {
      window.scrollTo(0, 0);
    }
  };

  return (
    <ul
      className={` md:flex md:flex-row md:items-center md:static md:w-auto fixed left-[3%] transform 
      md:-translate-x-[0px] md:py-0 md:pl-0 pl-0 pt-14 md:pt-0 md:opacity-100 
      ${navOpen ? 'bump top-[20px] w-[95%] h-[310px]' : 'scale-0 md:scale-100 md:h-full opacity-0'} 
      origin-center sm:z-50 md:z-[400] bg-[#14191b] md:bg-transparent overflow-hidden rounded-lg`}
    >
      {links.map((link) => (
        <li
          key={link}
          className={`hover:md:translate-x-0 hover:translate-x-6 transition-all duration-500 ml-8 
          ${link === 'Contact me' ? 'border-b-[0px] ' : 'border-b-[1px]'} 
          li md:border-b-[0px] border-gray-700`}>
          <a
            className={`py-4 mx-0 md:my-0 text-lg block w-full h-full a 
          hover:text-[deepskyblue] transition-all duration-200 relative text-white ${link}`}
            href={`#${link}`}
            onClick={() => handleScroll(link)}>
            {link}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Links