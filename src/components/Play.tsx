// ./src/components/Play.tsx
import React from "react";
import Song from "./Song";
import style from "./Styles/Play.module.css";

import { onClick, getById, onKeyDown } from "./utils/domController";
type PlayingNotesProps = {
  up: string;
  down: string;
  left: string;
  right: string;
};

// A simple type describing all four arrow states
export type Arrows = {
  up: string;
  down: string;
  left: string;
  right: string;
};

export const PlayingNotes: React.FC<PlayingNotesProps> = ({
  up,
  down,
  left,
  right,
}) => {
  return (
    <div className={style.play}>
      <div id="left">
        <img src={left} style={{ transform: "rotate(-90deg)" }} />
      </div>
      <div id="up">
        <img src={up} style={{ transform: "rotate(0deg)" }} />
      </div>
      <div id="down">
        <img src={down} style={{ transform: "rotate(180deg)" }} />
      </div>
      <div id="right">
        <img src={right} style={{ transform: "rotate(90deg)" }} />
      </div>
    </div>
  );
};

// Song list content
export const content1: React.ReactNode = (
  <div>
    <Song artist="No One" song="Example" />
    <Song
      artist="xi"
      song="Happy end of the world (please someone help me map this)"
    />
    <Song artist="You" song="Fork and make more songs, lol" />
  </div>
);
