# js-scripts 🛠️
A collection of utility scripts for JavaScript/Node.js development to automate common tasks and enhance workflow efficiency.

## 📦 Current Scripts
### yarn-up.js 🔄
Updates both dependencies and devDependencies to their absolute latest versions in Yarn v4+ projects, bypassing the semantic version constraints that yarn up respects.

__Why This Exists__
Yarn v4's yarn up command respects semantic versioning ranges (like ^1.0.0 or ~2.3.0) and only updates to the latest version that satisfies those ranges. This means it won't upgrade to newer major versions or versions outside your specified range. This script force-updates every package to the absolute latest version available, regardless of your current version constraints.

__When to Use__
- When you want to test your project with the absolute latest versions of all dependencies

- When preparing for a major version upgrade

- When you need to check if newer versions break your code

__Warning__: This can introduce breaking changes. Use with caution!

### 🚀 Quick Start
```Bash
curl -fsSL https://raw.githubusercontent.com/zero-red-dev/js-scripts/refs/heads/zero/yarn-up.js | bash -s <PathToPackage.json>
```

#### 🔧 Requirements
Node.js 14+
Yarn v4+ (for __yarn-up.js__)
Works on macOS, Linux, and Windows (with Git Bash/WSL)


## 🤝 Contributing
Want to add your own useful script? Here's how:

1. Fork this repository

2. Add your script with a clear, descriptive name

3. Include in your script:

    - A comment header explaining its purpose

    - Error handling

    - Usage instructions in comments

4. Update this README with:

    - Script description

    - Usage examples

    - Any requirements/dependencies

5. Submit a pull request

### Script Guidelines
- Keep scripts focused on single tasks

- Add proper error handling and user feedback

- Use ES modules (import/export)

- Include argument validation

- Add #!/usr/bin/env node shebang for direct execution


## ⚠️ Disclaimer
These scripts are provided as-is. Always review scripts before running them, especially when they modify files or run commands. Test in a safe environment first. The maintainer is not responsible for any issues caused by running these scripts.


Maintained with ❤️ for the JavaScript community
