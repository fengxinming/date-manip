'use strict';

const { resolve, apiNames } = require('../util');
const pkg = require('../../package.json');

function configure(input, output) {
  const isDIR = Array.isArray(input);
  return {
    inputOptions: {
      input,
      external(id) {
        return /^(celia)|(date-manip)/.test(id);
      }
    },
    outputOptions: {
      dir: isDIR ? output : undefined,
      file: isDIR ? undefined : output,
      format: 'es'
    }
  };
}

module.exports = [
  configure(apiNames.map(dir => resolve(`src/${dir}.js`)), resolve(`npm/es`)),
  configure(resolve('src/index.js'), resolve(`npm/${pkg.name}.esm.js`)),
  configure(resolve('src/packages/date-chain.js'), resolve(`npm/date-chain.esm.js`))
];
