import React, { useEffect, useState } from "react";
import { exampleMap, Note, Arrow } from "./Example";

const ARROW_DIRECTIONS: Arrow[] = ["left", "up", "down", "right"];
const NOTE_HIT_WINDOW_MS = 300;
const END_PADDING_MS = 500;
const INTERVAL_MS = 50;

const ARROW_ROTATION_MAP: Record<Arrow, string> = {
  left: "rotate(270deg)",
  up: "rotate(0deg)",
  down: "rotate(180deg)",
  right: "rotate(90deg)",
};

export const LiveMap: React.FC = () => {
  const [activeArrow, setActiveArrow] = useState<Note | null>(null);

  useEffect(() => {
    const start = Date.now();
    let noteIndex = 0;

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;

      // More performant way to find the active note
      while (
        noteIndex < exampleMap.length &&
        elapsed > exampleMap[noteIndex].time + NOTE_HIT_WINDOW_MS
      ) {
        noteIndex++;
      }

      if (noteIndex < exampleMap.length) {
        const note = exampleMap[noteIndex];
        if (elapsed >= note.time && elapsed < note.time + NOTE_HIT_WINDOW_MS) {
          setActiveArrow(note);
        } else {
          setActiveArrow(null);
        }
      } else {
        setActiveArrow(null);
      }

      if (elapsed > exampleMap[exampleMap.length - 1].time + END_PADDING_MS) {
        clearInterval(interval); // stop after the last note
      }
    }, INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Live Map</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        {ARROW_DIRECTIONS.map(dir => (
          <div key={dir} style={{ textAlign: "center" }}>
            <img
              src={`../assets/Arrow.svg`}
              style={{
                transform: ARROW_ROTATION_MAP[dir],
                width: "40px",
                height: "40px",
                opacity: activeArrow?.arrow === dir ? 1 : 0.3, // highlight active arrow
                transition: "opacity 0.1s",
              }}
            />
            <div>{dir}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
