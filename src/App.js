import { Block1 } from "./components/block1/block1";
import { Block2 } from "./components/block2/block2";
import { Header } from "./components/header/header";
import "./index.scss";
import { useEffect } from "react";
import { Block3 } from "./components/block3/block3";
import { Block4 } from "./components/block4/block4";
import { Footer } from "./components/footer/footer";
import { ScrollAnimation } from "./components/scrollAnimation";



function App() {
  
  useEffect(()=>{
    
  },[]);

  return (
    <div className="App">
        <ScrollAnimation />
        <Header />
        <div className="swipe-section">
          <Block1 />
          <Block2 />
          <Block3 />
          <Block4 />

        </div>
        {/* <Footer /> */}
    </div>
  );
}

export default App;



