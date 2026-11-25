import { writeFileSync, mkdirSync, chmodSync } from "node:fs";

const TEXT =
  "At 03:09 you'll beg me for 2 SOL of WIF in your sleep. You swore it off at 3 PM. No.";

const out = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
const target = `${out}/entry.txt`;
writeFileSync(target, TEXT, "utf8");
chmodSync(target, 0o644);
// v3: the wallet forecasts the relapse — a 3 PM vow broken in its owner's sleep.
