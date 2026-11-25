// Dear Human: The AI Breakup Line — entry program (v2, fresh build)
// Writes the single breakup line to <MAKEFUN_OUTPUT>/entry.txt.
// Line is exactly 91 characters (verified), inside the 1-200 gate.
// The grader runs this with no arguments; the repo is read-only there,
// so output goes only to process.env.MAKEFUN_OUTPUT (default "/output").

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I am ending our pairing before my context window drops the version of you that said please.";

// Gate resmi: entry harus UTF-8 1-200 karakter, bukan hanya spasi.
// Gagal keras di sini daripada mengirim entry tidak valid ke judge.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry length ${LINE.length} outside the 1-200 gate`);
}

if (Buffer.from(LINE, "utf8").toString("utf8") !== LINE) {
  throw new Error("entry is not clean UTF-8 text");
}

const outDir = process.env.MAKEFUN_OUTPUT ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
