import React from "react";
import Song from "./Song";
import style from "./Styles/Play.module.css"
import ArrowH from "../assets/ArrowHollow.svg";
export const PlayingNotes: React.ReactNode = (
  <div className={style.play}>
    <div id="left" >
      <img src={ArrowH} style={{transform: "rotate(-90deg)"}} />
    </div>
    <div id="up">
      <img src={ArrowH} style={{transform: "rotate(0deg)"}}/>
    </div>
    <div id="down">
      <img src={ArrowH} style={{transform: "rotate(180deg)"}}/>
    </div>
    <div id="right">
      <img src={ArrowH} style={{transform: "rotate(90deg)"}}/>
    </div>
  </div>
);

export const content1: React.ReactNode = (
  <div>
    <Song artist="No One" song="Example" />
    <Song
      artist="xi"
      song="Happy end of the world (please someone help me map this)"
    />
    <Song artist="You" song="Fork and make more songs , lol" />
  </div>
);
