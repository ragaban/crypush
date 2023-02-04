import { Block1 } from "./components/block1/block1";
import { Block2 } from "./components/block2/block2";
import { Header } from "./components/header/header";
import "./index.scss";
import { useEffect } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Main } from "./components/main/main";
import { About } from "./components/about/about";
import { Preloader } from "./components/preloader/preloader";
import gsap from "gsap";
import { block1Anim } from "./components/scrollAnimation";



function App() {

  useEffect(()=>{
      const tl = gsap.timeline();
      tl.to(".preloader__anim", { display: "none", duration: 0.1, delay: 1 });
    setTimeout(()=>{
      block1Anim();
    },900);   
  },[]);

  const content = [
    <BrowserRouter>
    <Preloader />
      <Header />
      <Routes>
        <Route path="/crypush/" element={<Main />} />
        <Route path="/crypush/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  ];

  return (  
    <BrowserRouter>
    <Preloader />
      <Header />
      <Routes>
        <Route path="/crypush/" element={<Main />} />
        <Route path="/crypush/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



