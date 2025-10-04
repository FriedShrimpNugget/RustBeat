import { onClick } from "./components/utils/domController";
import Window from "./components/Window";
import React from "react";

function initDOM() {
  onClick("Play", () => {
    let Display;
    if (Display == "block") {
      Display = "none";
    } else {
      Display = "block";
    }
  })
}
export default initDOM;