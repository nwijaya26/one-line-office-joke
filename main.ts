import { mkdirSync, writeFileSync } from "node:fs";

// One-line office joke for the One-Line Office Joke Laugh-Off.
// Premise: the Escape key — the one key whose name promises a way out.
// The punchline turns on the double meaning: Escape lets you leave a window,
// a meeting, a job. Worn smooth means somebody has been pressing it a lot.
const LINE =
  "My Escape key is worn smooth — it's the only thing in the office that actually lets you leave.";

const len = [...LINE].length;
if (len < 1 || len > 200) {
  throw new Error(`entry length ${len} outside 1-200`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry is only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
