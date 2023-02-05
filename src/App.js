import { Header } from "./components/header/header";
import "./index.scss";
import { useEffect, useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Main } from "./components/main/main";
import { About } from "./components/about/about";
import { Preloader } from "./components/preloader/preloader";
import gsap from "gsap";
import { block1Anim } from "./components/scrollAnimation";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "./theme";
import { observer } from "mobx-react-lite";
import state from "./store/state";


const App = observer(()=>{

  useEffect(()=>{
    // Hide preloader after 1 seconds
    const tl = gsap.timeline();
    tl.to(".preloader__anim", { display: "none", duration: 0.1, delay: 1 });

    // Start animation after hide preloader
    setTimeout(()=>{
      block1Anim();
    },700); 

    // Set theme
    if(!localStorage.getItem('theme')) state.setTheme('dark');
    else state.setTheme(localStorage.getItem('theme'));
    
  },[]);




  return (  
    <BrowserRouter>
    <ThemeProvider theme = {state.theme === "dark"? darkTheme : lightTheme}>
      <GlobalStyles />
      <Preloader />
        <Header />
        <Routes>
          <Route path="/crypush" element={<Main />} />
          <Route path="/crypush/about" element={<About />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
});

export default App;





