/* eslint-disable max-len */
// const { defaults } = require('jest-config')

module.exports = {
  testEnvironment: 'node',
  roots: [
    '<rootDir>/src',
  ],
  testMatch: null,
  testRegex: '(/src/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
  ],
  moduleFileExtensions: ['js'],
  clearMocks: true,
}
