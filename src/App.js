import { Block1 } from "./components/block1/block1";
import { Block2 } from "./components/block2/block2";
import { Header } from "./components/header/header";
import "./index.scss";
import { useEffect } from "react";
import { Block3 } from "./components/block3/block3";
import {scrollAnimation, showAnimation} from "./animation-gsap.js";



function App() {
  
  useEffect(()=>{
    scrollAnimation();
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



