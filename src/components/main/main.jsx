import gsap from 'gsap';
import React, { useEffect } from 'react';
import state from '../../store/state';
import { Block1 } from '../block1/block1';
import { Block2 } from '../block2/block2';
import { Block3 } from '../block3/block3';
import { Block4 } from '../block4/block4';
import { Footer } from '../footer/footer';
import { block1Anim, block2Anim, block3Anim, block4Anim, block5Anim, block5Anim2, ScrollAnimation } from '../scrollAnimation';


export const Main = ()=>{

    useEffect(()=>{

      // Scroll to top before first render
        gsap.to(window, {
            scrollTo: {
              y: 0,
              autoKill: false,
            },
            duration: 0,
            overwrite: true,
          });
        state.setStateScroll(0);

    //Scroll function to main
    const scrollHandler = (el)=>{  
    if (el.deltaY < 0) {
      if (state.stateScroll > 0 && !state.scrollTween) {
        state.setStateScroll(state.stateScroll - 1);
        state.setScrollTween(true);
        if(state.stateScroll === 0) block1Anim();
        if(state.stateScroll === 1) block2Anim();
        if(state.stateScroll === 2) block3Anim();
        if(state.stateScroll === 3) block5Anim2();
        
        gsap.to(window, {
          scrollTo: {
            y: state.stateScroll * window.innerHeight,
            autoKill: false,
          },
          duration: state.stateScroll === 3? 0.4 : 1,
          onComplete: () => state.setScrollTween(false),
          overwrite: true,
        });
      }
    }
    if (el.deltaY > 0) {
        if (state.stateScroll < 4 && !state.scrollTween) {
        state.setStateScroll(state.stateScroll + 1);
        state.setScrollTween(true);
        if(state.stateScroll === 0) block1Anim();
        if(state.stateScroll === 1) block2Anim();
        if(state.stateScroll === 2) block3Anim();
        if(state.stateScroll === 3) block4Anim();
        if(state.stateScroll === 4) block5Anim();
        
        gsap.to(window, {
          scrollTo: {
            y: state.stateScroll * window.innerHeight,
            autoKill: false,
          },
          duration: state.stateScroll === 4? 0.6 : 1,
          onComplete: () => state.setScrollTween(false),
          overwrite: true,
        });
      }
    }
    }
    // Add\remove scroll events
    window.addEventListener("wheel", scrollHandler);
    return () => {window.removeEventListener("wheel", scrollHandler);}
    },[]);

    return(
        <>
        <ScrollAnimation />
        <Block1 />
        <Block2 />
        <Block3 />
        <Block4 />
        <Footer />
        </>
    )
}