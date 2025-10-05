// ./src/Manipulator.ts
import { onClick, getById, onKeyDown } from "./components/utils/domController";
import ReactNode from "react";
import ArrowH from "./assets/ArrowHollow.svg";
import Arrow from "./assets/Arrow.svg";
export let isClicked = {
    up: ArrowH,
    down: ArrowH,
    left: ArrowH,
    right: ArrowH,
  }
export function initDOM() {
  onClick("Play", () => {
    const PlayWindow = getById<HTMLElement>("win1");
    PlayWindow.classList.toggle("hidden");
    PlayWindow.classList.toggle("visible"); // optional
    console.log("play clicked");
  });
  
}
export function initDOM2() {
  
  onKeyDown("up", event => {
    if (event.key == "ArrowUp") {
      isClicked.up = Arrow;
    } else if (event.key == "ArrowDown") {
      isClicked.down = Arrow;
    } else if (event.key == "ArrowLeft") {
      isClicked.left = Arrow;
    } else if (event.key == "ArrowRight") {
      isClicked.right = Arrow;
    } else {
      isClicked.up = ArrowH;
      isClicked.down = ArrowH;
      isClicked.left = ArrowH;
      isClicked.right = ArrowH;
    }
  })
}