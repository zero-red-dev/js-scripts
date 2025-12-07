#!/usr/bin/env node

/**
 * yarn-up.js - Force update all dependencies to latest versions in Yarn v4+ projects
 * 
 * This script bypasses Yarn's semantic versioning constraints and updates all packages
 * to their absolute latest versions, regardless of current version ranges.
 * 
 * WARNING: This is a destructive operation that may introduce breaking changes.
 * Always run in a clean git state and test thoroughly after updating.
 * 
 * Usage: node yarn-up.js [path-to-package.json]
 * Example: node yarn-up.js ./package.json
 * 
 * @param {string} packageJsonPath - Path to package.json file (relative or absolute)
 * 
 * Behavior:
 * 1. Reads the specified package.json file
 * 2. Extracts all dependency names from both `dependencies` and `devDependencies`
 * 3. Runs `yarn add` for each dependency to update to latest version
 * 
 * Differences from `yarn up`:
 * - `yarn up` respects semantic versioning and stays within version constraints
 * - `yarn-up.js` updates to absolute latest versions, even major version bumps
 * 
 * Example before/after:
 * Before:  "react": "^17.0.0"
 * After:   "react": "^18.2.0" (if 18.2.0 is latest)
 */

import {
  existsSync,
  readFileSync,
} from "fs"
import { execSync } from "child_process"
import path from "path"


export const pathExists = (path) => existsSync(path)
export const readFile = (path) =>
  readFileSync(path, { encoding: "utf8" })
export const cmd = (command, path = process.cwd()) =>
  execSync(command, {
    stdio: [0, 1, 2],
    cwd: path,
  })

const packageJsonPath = process.argv[2]

if (!pathExists(packageJsonPath)) {
  console.error(`❌ package.json not found` +
    `Expected at: ${packageJsonPath}\n` +
    `Make sure you're in the correct directory or initialize the project first.`
  )

  process.exit(1);
}

const packageJsonFile = packageJsonPath.endsWith('package.json')
  ? packageJsonPath
  : path.join(packageJsonPath, 'package.json');

const packageJsonStr = readFile(packageJsonFile);

const packageJson = JSON.parse(packageJsonStr)

if (packageJson.dependencies) {
  const deps = Object.keys(packageJson.dependencies).join(" ")
  cmd(`yarn add ${deps}`)
}


if (packageJson.devDependencies) {
  const devDeps = Object.keys(packageJson.devDependencies).join(" ")
  cmd(`yarn add ${devDeps} --dev`)
}

