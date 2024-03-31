import React, { useState, useEffect } from 'react';
import '../links/Links.css'




function Links({navOpen, setNavOpen}) {
  const links = ['Home', 'Skills', 'Portfolio', 'Contact me']
  const [activeLink, setActiveLink] = useState(""); // Initialize activeLink state
  // ... other code


useEffect(() => {
  const pathname = window.location.pathname; // Get current pathname
  const linkMatch = links.find((link) => pathname.startsWith(`/${link}`)); // Find matching link
  setActiveLink(linkMatch || ""); // Set activeLink if found, otherwise empty string
}, [links, setActiveLink]); // Run effect when links or setActiveLink change

// ... other code

// const handleScroll = (linkOrId) => {
//    // Set activeLink based on clicked link or section ID
//   // ... other code
// };



  const handleScroll = (link ,linkOrId) => {
    setActiveLink(linkOrId) // Update activeLink state when a link is clicked
    setNavOpen(false); // Close the navigation
    if (link === "Home") {
      window.scrollTo(0, 0); // Scroll to the top of the page when "Home" link is clicked
    }
  };
  


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
      ${link === activeLink || link === window.location.hash.slice(1) ? 'active md:activeMd' : ''}  li md:border-b-[0px] border-gray-700`}
  >
    <a
      className={`py-4 mx-0 md:my-0 text-white text-lg block w-full h-full 
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