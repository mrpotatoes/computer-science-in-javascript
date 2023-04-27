/* eslint-disable max-len */
// const { defaults } = require('jest-config')

module.exports = {
  testEnvironment: 'node',
  rootDir: '../',
  roots: [
    '<rootDir>/src/',
  ],
  testMatch: null,
  testRegex:
    '^.*(spec|test).*$',
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '<rootDir>/src/design-patterns/',
  ],
  moduleFileExtensions: ['js'],
  clearMocks: true,
}
