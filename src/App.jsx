import Home from "./pages/Home";
import './App.css'
import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Skills from "./pages/Skills";

function App() {
  const [navOpen, setNavOpen] = useState(false)

    //   useEffect(() => {
    //    const handleResize = () => {
    //      if (window.innerWidth >= 768) {
    //        setNavOpen(false);
    //      }
    //    };
   
    //    window.addEventListener('resize', handleResize);
   
    //    return () => {
    //      window.removeEventListener('resize', handleResize);
    //    };

    //  }, []);

     const [disableScroll, setDisableScroll] = useState(false);

     useEffect(() => {
       const handleScroll = () => {
         if (disableScroll) {
           window.scrollTo(0, 0);
         }
       };
   
       handleScroll();
   
       window.addEventListener('scroll', handleScroll);
   
       return () => {
         window.removeEventListener('scroll', handleScroll);
       };
     }, [disableScroll]);
   
     useEffect(() => {
       setDisableScroll(true);
       setTimeout(() => {
         setDisableScroll(false);
       }, 500); // Adjust the timeout duration as needed
     }, []);


  return (
    <div className={`relative`}>
      <Navbar navOpen={navOpen} setNavOpen={setNavOpen}/>
      <div className={`transition-all ease-linear  duration-100 relative ${navOpen ? '' : ''}`}>
      <div className="upper-bg"></div>
      <Home navOpen={navOpen} setNavOpen={setNavOpen}/>
        <Skills />
      </div>
    </div>
  );
}

export default App;