import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();
const includeRoots = ["src", "tests", "scripts", "public", ".github", "README.md", "ASSETS.md"];
const excludedSegments = new Set([
  "node_modules",
  "dist",
  "build",
  "coverage",
  ".vite",
  "test-results",
  "playwright-report",
]);
const excludedFiles = new Set([
  "bun.lock",
  "bun.lockb",
  "npm-shrinkwrap.json",
  "package-lock.json",
  "pnpm-lock.yaml",
  "yarn.lock",
]);
const countedExtensions = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".mjs",
  ".json",
  ".md",
  ".yml",
  ".yaml",
  ".css",
  ".html",
]);
const minimumLines = Number(process.env.MIN_SOURCE_LINES ?? 20_000);

let total = 0;
const files = [];

for (const entry of includeRoots) {
  walk(join(root, entry));
}

files.sort((a, b) => b.lines - a.lines);
for (const file of files) {
  total += file.lines;
}

console.log(`Counted ${total} tracked source/content/test lines across ${files.length} files.`);
for (const file of files.slice(0, 12)) {
  console.log(`${String(file.lines).padStart(5, " ")}  ${file.path}`);
}

if (total < minimumLines) {
  console.error(`Expected at least ${minimumLines} counted lines.`);
  process.exit(1);
}

function walk(path) {
  let stats;
  try {
    stats = statSync(path);
  } catch {
    return;
  }
  const rel = relative(root, path).replaceAll("\\", "/");
  const segments = rel.split("/");
  if (segments.some((segment) => excludedSegments.has(segment))) {
    return;
  }
  if (stats.isDirectory()) {
    for (const child of readdirSync(path)) {
      walk(join(path, child));
    }
    return;
  }
  if (excludedFiles.has(segments.at(-1))) {
    return;
  }
  if (segments.at(-1)?.endsWith(".tsbuildinfo")) {
    return;
  }
  if (!countedExtensions.has(extension(path))) {
    return;
  }
  const content = readFileSync(path, "utf8");
  const lines = content.length === 0 ? 0 : content.split(/\r?\n/).length;
  files.push({ path: rel, lines });
}

function extension(path) {
  const index = path.lastIndexOf(".");
  return index === -1 ? "" : path.slice(index);
}
