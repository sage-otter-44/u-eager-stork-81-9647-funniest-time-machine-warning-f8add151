import { mkdirSync, writeFileSync } from "node:fs";

// One-line warning label for a time machine (108 characters, limit 120).
// Concrete scene (grandfather test-driving) + the twist saved for the
// last four words: the crash erases the driver, not the car.
const ENTRY =
  "WARNING: Do not let your grandfather test-drive this machine. If he crashes it in 1962, you were never born.";

// Gate check (mirrors the house scorer): UTF-8 text, 1-120 chars, not
// only whitespace. Fail loudly instead of writing an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 120) {
  throw new Error(`Entry must be 1-120 characters, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("Entry must not be only whitespace");
}
if (ENTRY.includes("\n")) {
  throw new Error("Entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
