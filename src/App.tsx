import "./App.css";
import Start from "./components/Start.tsx";
import { content1 , PlayingNotes} from './components/Play';
import Window from "./components/Window";
import { initDOM } from "./Manipulator";
import { useEffect } from "react";


function App() {
  useEffect(() => {
    initDOM();
  }, []);
  return (
    <>
      <Window title="Play" id="win1" content={content1}/>
      <Window title="Playthrough" id="win3" content={PlayingNotes} styles={{height: "90vh"}} />
      <Start/>
    </>
  )
}

export default App;