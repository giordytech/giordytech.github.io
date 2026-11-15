/**
 * Makes .claude/skills point at .agents/skills, so Claude Code finds the synced skills.
 *
 * Runs on `yarn install` (postinstall). Safe to run again: an existing correct link is left alone.
 * On Windows it creates a directory junction, which needs no administrator rights.
 */
import {
  existsSync,
  lstatSync,
  mkdirSync,
  readlinkSync,
  symlinkSync,
} from 'node:fs';
import path from 'node:path';

const repoRoot = path.resolve(import.meta.dirname, '..');
const target = path.join(repoRoot, '.agents', 'skills');
const linkPath = path.join(repoRoot, '.claude', 'skills');

const pointsAtTarget = () => {
  const resolved = path.resolve(path.dirname(linkPath), readlinkSync(linkPath));
  return path.normalize(resolved) === path.normalize(target);
};

if (!existsSync(target)) {
  console.error(
    'linkClaudeSkills: .agents/skills is missing; run `yarn sync:skills` first.',
  );
  process.exit(1);
}

mkdirSync(path.dirname(linkPath), { recursive: true });

let existing: ReturnType<typeof lstatSync> | undefined;
try {
  existing = lstatSync(linkPath);
} catch {
  existing = undefined;
}

if (existing === undefined) {
  if (process.platform === 'win32') {
    symlinkSync(target, linkPath, 'junction');
  } else {
    symlinkSync(path.relative(path.dirname(linkPath), target), linkPath, 'dir');
  }
  console.log('linkClaudeSkills: linked .claude/skills -> .agents/skills');
} else if (existing.isSymbolicLink() && pointsAtTarget()) {
  // Already correct.
} else {
  console.error(
    'linkClaudeSkills: .claude/skills exists but is not a link to .agents/skills; left untouched.',
  );
  process.exit(1);
}
