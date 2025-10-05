export type Arrow = "left" | "up" | "down" | "right";

interface Note {
  time: number;
  arrow: Arrow;
}

export const exampleMap: Note[] = [
  { time: 0, arrow: "left" },
  { time: 500, arrow: "down" },
  { time: 1000, arrow: "up" },
  { time: 1500, arrow: "right" },
  { time: 2000, arrow: "left" },
  { time: 2500, arrow: "up" },
  { time: 3000, arrow: "down" },
  { time: 3500, arrow: "right" },
];
