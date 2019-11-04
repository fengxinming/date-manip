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
    },
    aliases: {
      'date-manip': resolve('src/index.js')
    }
  };
}

module.exports = [
  configure(resolve('src/index.js'), resolve(`npm/${pkg.name}.umd.js`)),
  configure(resolve('src/packages/date-chain.js'), resolve(`npm/date-chain.umd.js`), 'DateChain')
];
