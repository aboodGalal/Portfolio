import Home from "./pages/Home";
import './App.css'
import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Skills from "./pages/Skills";

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
    window.addEventListener('resize', handleScroll); // Add resize event listener

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll); // Remove resize event listener
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
      <Navbar navOpen={navOpen} setNavOpen={setNavOpen} />
      <div className={`transition-all ease-linear  duration-100 relative ${navOpen ? '' : ''}`}>
        <div className="upper-bg"></div>
        <Home navOpen={navOpen} setNavOpen={setNavOpen} />
        <Skills />
      </div>
    </div>
  );
}

export default App;