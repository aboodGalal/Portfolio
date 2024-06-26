import Home from "./sections/Home";
import './App.css'
import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Skills from "./sections/Skills";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [disableScroll, setDisableScroll] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (disableScroll || window.innerWidth > 768) {
        setNavOpen(false);
      }
      if (disableScroll) {
        window.scrollTo(0, 0);
      }
    };
  

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll); 
    };
  }, [disableScroll]);


  useEffect(() => {
    setDisableScroll(true);
    setTimeout(() => {
      setDisableScroll(false);
    }, 500);
  }, []);


  return (
    <div className={`relative`}>
      <div className={`${navOpen? 'absolute':'hidden'} fixed  w-[100%] h-[100%] top-0 left-0 bg-[#2c2c33] opacity-95 z-10`}></div>
      <Navbar navOpen={navOpen} setNavOpen={setNavOpen} />
      <div className={`transition-all ease-linear  duration-100 relative`}>
        <div className={`upper-bg ${navOpen? 'bg-[#2c2c33] opacity-95':'bg-black opacity-100'}`}></div>
        <Home />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;