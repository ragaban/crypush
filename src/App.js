import { Block1 } from "./components/block1/block1";
import { Block2 } from "./components/block2/block2";
import { Header } from "./components/header/header";
import "./index.scss";

function App() {
  return (
    <div className="App">
        <Header />
        <Block1 />
        <Block2 />
    </div>
  );
}

export default App;
