/* eslint-disable max-len */
// const { defaults } = require('jest-config')

module.exports = {
  testEnvironment: 'node',
  roots: [
    '<rootDir>/src',
  ],

  // setupFiles: [
  //   '<rootDir>/../apollo-server-env/dist/index.js',
  // ],
  // preset: 'babel-jest',
  testMatch: null,
  // testRegex: '/src/.*\\.spec\\.(js|ts)$',
  testRegex: '(/src/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',

  transform: {
    // '^.+\\.js$': 'babel-jest',
    '^.+\\.(js|jsx|ts)$': require.resolve('babel-jest'),
  },

  transformIgnorePatterns: ['<rootDir>/node_modules/'],

  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
  ],

  moduleFileExtensions: ['js'],
  // moduleFileExtensions: [...defaults.moduleFileExtensions, 'js', 'jsx'],
  // moduleNameMapper: {
  //   '^__mocks__/(.*)$': '<rootDir>/../../__mocks__/$1',
  //   // This regex should match the packages that we want compiled from source
  //   // through `ts-jest`, as opposed to loaded from their output files in
  //   // `dist`.
  //   // We don't want to match `apollo-server-env` and
  //   // `apollo-engine-reporting-protobuf`, because these don't depend on
  //   // compilation but need to be initialized from as parto of `prepare`.
  //   '^(?!apollo-server-env|apollo-engine-reporting-protobuf)(apollo-(?:federation|gateway|server|datasource|cache-control|tracing|engine)[^/]*|graphql-extensions)(?:/dist)?((?:/.*)|$)': '<rootDir>/../../packages/$1/src$2',
  // },
  clearMocks: true,
  // globals: {
  //   'ts-jest': {
  //     tsConfig: '<rootDir>/src/__tests__/tsconfig.json',
  //     diagnostics: false,
  //   },
  // },
}
