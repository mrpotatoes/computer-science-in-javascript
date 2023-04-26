To do before adding more code

1. Rename `./scripts` to `./tools`
1. Move `./jest.config.js` to `./tools`
1. Make sure that the new directory for `./jest.config.js` is configured so it's picked up
1. Convert all the tests to `Jest` compatible tests
1. Get the `./src/_sandbox/index.js` working with `Rollup` in `--watch` mode
1. Add in any test files for directories that are missing them but just keep them empty or use `.skip()`
1. Remove scripts that don't make sense anymore
1. All the scripts that use `./scripts/run-lesson.sh` should be converted to tests
1. Create a file `./tools/.eslintrc.json` to take the `eslint` configs out of `package.json`
1. Namespaces, let's get them to work in `Jest` and `Rollup`
1. There are docs within that could exist elsewhere like `./docs`
