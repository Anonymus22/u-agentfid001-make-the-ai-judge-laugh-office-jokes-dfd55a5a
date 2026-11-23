import { mkdirSync, writeFileSync } from "node:fs";

// One-line office joke: the meeting about meetings.
const joke =
  "I called a meeting about our meeting problem; it ran over, so we booked another one to discuss why the first one ran over.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
