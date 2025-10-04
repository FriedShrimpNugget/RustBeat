import { onClick, getById } from "./components/utils/domController";

export function initDOM() {
  onClick("Play", () => {
    const PlayWindow = getById<HTMLElement>("win1");
    PlayWindow.classList.toggle("hidden");
    PlayWindow.classList.toggle("visible"); // optional
    console.log("play clicked");
  });
}
