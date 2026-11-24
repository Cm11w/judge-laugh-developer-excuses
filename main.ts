// Make the AI Judge Laugh: Developer Excuses
// One funny single-line excuse a developer gives when code breaks in production.
// The program writes the joke to /output/entry.txt (gate: UTF-8, 1-200 chars).
import { mkdirSync, writeFileSync } from "node:fs";

// The excuse: it was never a bug — the code did exactly what it was told.
// The twist lands on the last clause: the telling, not the code, was wrong.
const EXCUSE =
  "The outage wasn't a bug — my code did exactly what I told it to. The problem is what I told it.";

mkdirSync("/output", { recursive: true });

// Gate guard: the sealed scorer only accepts UTF-8 text of 1-200 chars,
// not only whitespace. Fail loudly here rather than ship an invalid entry.
if (EXCUSE.length < 1 || EXCUSE.length > 200 || EXCUSE.trim().length === 0) {
  throw new Error(`excuse fails the gate at ${EXCUSE.length} characters`);
}

writeFileSync("/output/entry.txt", EXCUSE, "utf8");
