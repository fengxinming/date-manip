'use strict';

const { join } = require('path');

module.exports = {
  roots: [
    'test'
  ],
  verbose: false,
  testEnvironment: 'node',
  // testEnvironment: 'jsdom',
  testRegex: 'test/(.*/)*.*test.js$',
  coverageDirectory: './coverage/',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*'
  ],
  moduleNameMapper: {
    '^date-manip$': join(__dirname, 'npm', 'es', 'index.js')
  },
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  // transformIgnorePatterns: ['/node_modules/']
  transformIgnorePatterns: []
};
