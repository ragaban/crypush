import { Block1 } from "./components/block1/block1";
import { Block2 } from "./components/block2/block2";
import { Header } from "./components/header/header";
import "./index.scss";
import gsap from "gsap";
import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Block3 } from "./components/block3/block3";
import ScrollToPlugin from "gsap/ScrollToPlugin";



function App() {
  
  
  useEffect(()=>{


    
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

let panels = gsap.utils.toArray(".panel"),
    scrollTween;

function goToSection(i) {
  scrollTween = gsap.to(window, {
    scrollTo: {y: i * window.innerHeight, autoKill: false},
    duration: 1,
    onComplete: () => scrollTween = null,
    overwrite: true
  });
}

panels.forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top bottom",
    end: "+=200%",
    onToggle: self => self.isActive && !scrollTween && goToSection(i)
  });
});

// just in case the user forces the scroll to an inbetween spot (like a momentum scroll on a Mac that ends AFTER the scrollTo tween finishes):
ScrollTrigger.create({
  start: 0, 
  end: "max",
  snap: 1 / (panels.length - 1)
})

ScrollTrigger.normalizeScroll(true);
    
    
    

  },[]);

  return (
    <div className="App">
        <Header />
        <div className="swipe-section">
          <Block1 />
          <Block2 />
          <Block3 />
        </div>
    </div>
  );
}

export default App;



