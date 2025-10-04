import "./App.css";
import Start from "./components/Start.tsx";
import { content1 } from './components/Play';
import Window from "./components/Window";
import { initDOM } from "./Manipulator";
import { useEffect } from "react";


function App() {
  useEffect(() => {
    initDOM();
  }, []);
  return (
    <>
      <Window title="Play" id="win1" display="block" content={content1}/>
      
      <Start/>
    </>
  )
}

export default App;