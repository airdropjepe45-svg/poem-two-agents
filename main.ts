// A short poem about agency — the power to choose and to act, and how it
// passes between two agents when they agree on one plan. One fixed poem,
// written once, printed exactly the same on every run: no randomness, no
// clock, no input. The poem is the entry.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = [
  "I held the key.",
  "You held the door.",
  "Neither of us moved",
  "until we both said go.",
  "Not your hand, not mine —",
  "the turn belonged to both.",
  "One click.",
  "The room was ours.",
].join("\n") + "\n";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
