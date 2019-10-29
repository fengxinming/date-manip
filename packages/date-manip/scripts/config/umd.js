'use strict';

const camelize = require('celia/camelize');
const { resolve } = require('../util');
const pkg = require('../../package.json');

function configure(input, output, name) {
  return {
    isProd: true,
    inputOptions: {
      input
    },
    outputOptions: {
      name: name || camelize(pkg.name),
      file: output,
      format: 'umd',
      legacy: false,
      esModule: false
    }
  };
}

module.exports = [
  configure(resolve('src/index.js'), resolve(`npm/${pkg.name}.umd.js`))
];
