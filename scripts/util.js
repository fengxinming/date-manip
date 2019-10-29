'use strict';

const spawn = require('cross-spawn');

function exec(args) {
  spawn('npm', args, { stdio: 'inherit', env: process.env });
}

module.exports = {
  exec
};
