'use strict';

const { join } = require('path');
const { exec } = require('./util');

const cwd = process.cwd();

['date-manip'].forEach(
  (packageName) => {
    process.chdir(join(__dirname, '..', 'packages', packageName));
    exec(['run', 'build']);
  }
);

process.chdir(cwd);
