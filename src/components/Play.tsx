import React from "react";
import Song from "./Song";
export let Playing: React.ReactNode = (
  <div>
    <div id="left">
      <img src="../assets/Arrow.svg" />
    </div>
    <div id="up">
      <img src="../assets/Arrow.svg" />
    </div>
    <div id="down">
      <img src="../assets/Arrow.svg" />
    </div>
    <div id="right">
      <img src="../assets/Arrow.svg" />
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
