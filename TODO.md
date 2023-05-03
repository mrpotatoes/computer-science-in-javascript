To do before adding more code

1. Get the `./src/_sandbox/index.js` working with `Rollup` in `--watch` mode
  - Will likely need the [@rollup/plugin-run](https://www.npmjs.com/package/@rollup/plugin-run) plugin
1. Create a file `./tools/.eslintrc.json` to take the `eslint` configs out of `package.json`
1. For documentation generation I will most likely use [HyperBook](https://hyperbook.openpatch.org/)
  - Since I do not want to completely convert my repo just for `HyperBook` I plan to write a script to copy over all the `markdown` files to a website directory following the folder structure I already have
  - Requires me to change the filenames of many/all of the `markdown` files. I can't use `README.md` for all the files anymore as I would prefer to use a generator and not Github Repo viewer to show the documentation
