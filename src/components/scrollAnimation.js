import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { observer } from "mobx-react-lite";
import state from "../store/state";

export const ScrollAnimation = observer(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

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

  useEffect(() => {
    window.addEventListener("wheel", scrollHandler);

    return () => {
       window.removeEventListener("wheel", scrollHandler);
    }
      
  }, []);

  return <></>;
});

export function block1Anim() {
  const tl = gsap.timeline();
  tl.from(".block1__anim", {opacity: 0, duration: 0.1, delay: 0.1});
  tl.from(".block1__anim1", { y: 100, opacity: 0, duration: 0.3, delay: 0.1 })
    .from(".block1__anim2", { y: 100, opacity: 0, duration: 0.4 }, "-=0.2")
    .from(".block1__anim3", { y: 100, opacity: 0, duration: 0.4 }, "-=0.2")
    .from(".block1__anim4", { y: 100, opacity: 0, duration: 0.4 }, "-=0.2")
    .from(".block1__anim5", { y: 100, opacity: 0, duration: 0.4 }, "-=0.2")
    .from(".block1__anim6", { y: 100, opacity: 0, duration: 0.4 }, "-=0.2")
    .from(".block1__anim7", { scale: 0, opacity: 0, duration: 1 }, "-=1")
    .from(".block1__anim8", { opacity: 0, duration: 2 }, "-=1");
}
export function block2Anim() {
  const tl = gsap.timeline();
  tl.from(".block2__anim3", { x: -200, opacity: 0, duration: 0.4, delay: 0.3 })
    .from(".block2__anim4", { x: 200, opacity: 0, duration: 0.4 }, "-=0.3")
    .from(".block2__anim1", { x: -100, opacity: 1, duration: 1.5 }, "-=0.6")
    .from(".block2__anim2", { y: 100, opacity: 0, duration: 0.4 }, "-=1");
}
export function block3Anim() {
  const tl = gsap.timeline();
  tl.from(".block3__anim1", { x: -200, opacity: 0, duration: 0.4, delay: 0.3 })
    .from(".block3__anim2", { x: 200, opacity: 0, duration: 0.4 }, "-=0.3")
    .from(".block3__anim3", { opacity: 0, duration: 0.4 }, "-=0.3");
}
export function block4Anim() {
  const tl = gsap.timeline();
  tl.from(".block4__anim1", { x: 200, opacity: 0, duration: 0.4, delay: 0.3 })
    .from(".block4__anim2", { x: -200, opacity: 0, duration: 0.4}, "-=0.4")
    .from(".block4__anim3", { opacity: 0, duration: 1}, "-=0.2");
}
export function block5Anim() {
  const tl = gsap.timeline();
  tl.to(".block5__anim", { y: "0%", duration: 0.4})
  tl.to(".block4__anim3", { y: -100, scale: 0.7, duration: 0.4}, "-=0.4")
  tl.to(".block4__anim1", { y: -100, duration: 0.4}, "-=0.4")
  tl.to(".block4__anim2", { y: -100, duration: 0.4}, "-=0.4")
}
export function block5Anim2() {
  const tl = gsap.timeline();
  tl.to(".block5__anim", { y: "120%", duration: 0.4})
  tl.to(".block4__anim3", { y: 0, scale: 1, duration: 0.4}, "-=0.4")
  tl.to(".block4__anim1", { y: 0, duration: 0.4}, "-=0.4")
  tl.to(".block4__anim2", { y: 0, duration: 0.4}, "-=0.4")
}

