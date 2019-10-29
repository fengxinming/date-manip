'use strict';

const { join } = require('path');
const { exec } = require('./util');

const cwd = process.cwd();

['date-manip'].forEach(
  (packageName) => {
    process.chdir(join(__dirname, '..', 'packages', packageName));
    const [, , name, ...args] = process.argv;
    const testArgs = name !== packageName ? [] : args;
    exec(['run', 'test', ...testArgs]);
  }
);

process.chdir(cwd);
