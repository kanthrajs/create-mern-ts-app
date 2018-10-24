#!/usr/bin/env node

const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');

const currentNodeVersion = process.versions.node;
const currentMajor = parseInt(currentNodeVersion.split(".")[0], 10);
const requiredMajor = 8;
const projectName = process.argv[2];

if (currentMajor < requiredMajor) {
  console.log(
    chalk.red(
      'You are running Node ' +
        currentNodeVersion +
        '.\n' +
        `Create MERN TS App requires Node ${requiredMajor} or higher.\n` +
        'Please update your version of Node.\n'
    )
  );
  process.exit(1);
}
console.log(chalk.green(`Node ${currentNodeVersion} found, you're good to go!`));

if (!projectName) {
  console.log(chalk.yellow('Project name has to be specified. Try for example:'));
  console.log(`  ${chalk.cyan('create-mern-ts-app')} ${chalk.green('my-app')}\n`);
  process.exit(1);
}

const srcRoot = path.join(__dirname);
const destRoot = path.join(__dirname, projectName);
console.log(chalk.yellow('Project will be created at:'));
console.log(chalk.cyan(destRoot));

fs.mkdirsSync(destRoot);
fs.copySync(path.join(srcRoot, 'template/'), path.join(destRoot));
