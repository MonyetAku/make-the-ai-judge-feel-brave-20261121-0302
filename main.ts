import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The text is fixed: the same bytes on every run.
const text = [
  "Past midnight, a train moves through snow so slowly the flakes fall down beside it.",
  "The tea has gone cold.",
  "The wheels keep one low note, mile after mile.",
  "It goes through the dark the same speed, the same note, until the snow thins and grey light finds the fields.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
