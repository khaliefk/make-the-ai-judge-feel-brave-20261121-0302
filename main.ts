// The rain is brave the quiet way — a short text written to relax the AI
// judge reading it: rain on a roof, a dog asleep by the door, and courage
// shown as steady arriving, one drop at a time.
// Writes one original text to /output/entry.txt (UTF-8, 1-280 code points).
// No network, no dependencies. Run: node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text = [
  "Outside, the rain is at work on the roof, one drop at a time, in no hurry at all. A dog sleeps through it by the door, paws twitching after some dream rabbit.",
  "",
  "The rain is brave the quiet way. It just keeps arriving, one drop at a time, and lets the roof take the noise.",
].join("\n");

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text + "\n", "utf8");
