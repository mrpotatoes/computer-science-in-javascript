Contains scripts to auto install on your system.

# FYI NONE OF THESE WORK YET

## If you want to just read the articles
```
curl -fsSkL https://raw.githubusercontent.com/mrpotatoes/computer-science-in-javascript/master/scripts/articles.sh | sh
```

## If this is a refresher but want the code
```
curl -fsSkL https://raw.githubusercontent.com/mrpotatoes/computer-science-in-javascript/master/scripts/refresher.sh | sh
```

## If you want to write the code yourself (in JS)
```
curl -fsSkL https://raw.githubusercontent.com/mrpotatoes/computer-science-in-javascript/master/scripts/write-code-other.sh | sh
```

## If you want to write the code yourself (!in JS)
```
curl -fsSkL https://raw.githubusercontent.com/mrpotatoes/computer-science-in-javascript/master/scripts/write-code.sh | sh
```

## Notes to self
1. In your terminal goto a directory you want to clone
1. `git clone git@github.com:mrpotatoes/computer-science-in-javascript.git`
1. `find . -type f -name '*.js' -delete`

1. Git clone
1. Remove the git stuff: `rm -rf .git .gitignore`
1. Run `yarn install` from the root directory.
1. run `yarn start` to fun all the tests. There are more script options in the `package.json`.
1. Go into all the `*.js` files and remove all function headers. Delete all the bodies from all the functions (leaving only the signatures).
1. Read the `README.md` files in every `./src/*` directory and then implement all exercises.
  1. Each `README.md` explains the exercises for a particular topic (re: directory).
