// ./src/App.tsx
import React, { useEffect, useState } from "react";
import Start from "./components/Start";
import Window from "./components/Window";
import { content1, PlayingNotes } from "./components/Play";
import { initDOM } from "./Manipulator";
import ArrowH from "./assets/ArrowHollow.svg";
import Arrow from "./assets/Arrow.svg";

function App() {
  const [isClicked, setIsClicked] = useState({
    up: ArrowH,
    down: ArrowH,
    left: ArrowH,
    right: ArrowH,
  });

  useEffect(() => {
    initDOM();

    // Global key listener
    const handleKey = (e: KeyboardEvent) => {
      setIsClicked((prev) => ({
        up: e.key === "f" ? Arrow : ArrowH,
        down: e.key === "j" ? Arrow : ArrowH,
        left: e.key === "d" ? Arrow : ArrowH,
        right: e.key === "k" ? Arrow : ArrowH,
      }));
    };
    document.addEventListener("keydown", handleKey);
    document.addEventListener("keyup", handleKey);

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("keyup", handleKey);
    };
  }, []);

  return (
    <>
      <Window title="Play" id="win1" content={content1} />
      <Window
        title="Playthrough"
        id="win3"
        content=<PlayingNotes up={isClicked.up} down={isClicked.down} left={isClicked.left} right={isClicked.right} />

        styles={{ height: "90vh" }}
      />
      <Start />
    </>
  );
}

export default App;
