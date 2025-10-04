import "./App.css";
import Start from "./components/Start.tsx";
import initDOM from './main.ts';
import { useEffect } from "react";


function App() {
  useEffect(() => {
    initDOM();
  }, []);
  return (
    <>
      <Start/>
    </>
  )
}

export default App;