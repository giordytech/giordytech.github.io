// Runs after `next build`. Next 16's static export writes each route segment's prefetch file in nested
// folders (`profile/__next.profile/__PAGE__.txt`), while the browser asks for one flat, dotted name
// (`profile/__next.profile.__PAGE__.txt`); on a plain static host every prefetch then fails with a 404. This
// writes a flat copy beside each nested one, so any static host serves them.
// Usage: node scripts/flattenSegments.mts [build folder, default out]
import fs from 'node:fs';
import path from 'node:path';

const buildDir = path.resolve(process.argv[2] ?? 'out');

const nestedSegmentFiles = (dir: string): string[] =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? nestedSegmentFiles(full) : [full];
  });

let written = 0;
const walk = (dir: string) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (!entry.isDirectory()) {
      continue;
    }
    if (entry.name.startsWith('__next.')) {
      for (const file of nestedSegmentFiles(full)) {
        const flat = path.relative(dir, file).split(path.sep).join('.');
        fs.copyFileSync(file, path.join(dir, flat));
        written++;
      }
    } else if (entry.name !== '_next') {
      walk(full);
    }
  }
};

walk(buildDir);
console.log(
  `flattenSegments: wrote ${written} flat segment files in ${buildDir}`,
);
