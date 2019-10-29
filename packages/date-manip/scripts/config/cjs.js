'use strict';

const { resolve, apiNames } = require('../util');
const pkg = require('../../package.json');

function configure(input, output) {
  const isDIR = Array.isArray(input);
  return {
    inputOptions: {
      input,
      external: (id) => {
        return /^celia/.test(id);
      }
    },
    outputOptions: {
      dir: isDIR ? output : undefined,
      file: isDIR ? undefined : output,
      format: 'cjs',
      legacy: false,
      esModule: false,
      interop: false
    }
  };
}

module.exports = [
  configure(resolve('src/index.js'), resolve(`npm/${pkg.name}.common.js`)),
  configure(apiNames.map(dir => resolve(`src/${dir}.js`)), resolve(`npm`))
];
