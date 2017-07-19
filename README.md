# Computer Science in JavaScript
Who doesn't want to learn Computer Science? It's really easy but the problem is that is is hidden behind many layers of complexity and that can be a problem for different types of learners. For instance I can grasp concepts in no time but to cement them I need to actually do the work. So, for a reference to myself but a study guide for others I've created this repository.

I use it as both a study guide and a reference.

## What this repo is not
1. A cheat sheet
    * This is just a reference/study guide so use it accordingly.
    * Not meant to accommodate all languages. If you want that use the READMEs as a start and write it in your preferred language. Please tell me so that I can link it somewhere in here.
1. A reference guide or how-to for setups of different techs. re:
    * How to setup React + Redux + Redux Sagas
    * How to install and setup Node JS, MongoDB & Express.
    * et cetra.
1. Production ready code.
    * This is for learning/referencing not to reuse professionally. I mean, if you're going to implement your own linked list then you, my friend, are an idiot.

# How to use as a for self learning
When I finish this reference for myself my intention is to make a new repo of this exact structure but empty out all the document headers, functions and tests and allow you to do the exercises yourself. Until then to do the study guide I suggest:

1. Git clone
1. Remove the git stuff: `rm -rf .git .gitignore`
1. Run `yarn install` from the root directory.
1. run `yarn start` to fun all the tests. There are more script options in the `package.json`.
1. Go into all the `*.js` files and remove all function headers. Delete all the bodies from all the functions (leaving only the signatures).
1. Read the `README.md` files in every `./src/*` directory and then implement all exercises.
    1. Each `README.md` explains the exercises for a particular topic (re: directory).

## What's in this repository?
This repository is my personal reference and refresher course for computer science. Under the `./src/` directory I have a few different topics and they are all done in JavaScript. More to come eventually when they hit my fancy.

- Data structures
- Sorting
- Recursion
- Regex
- Sorting
- Interview Questions

### A good way to compare all of them

Unlike the data structures all sorting algorithms have the same goal and they can all take the same input data. So, for every sorting algorithms of the series, we are going sort an `array` of 10 numbers from 1 to 10. This is important for the fixtures as they are all will sort the same array and get the same results.

By doing so we will be able to compare the different sorting algorithms more easily. Sorting algorithms are very sensitive to the input data so we will also try different input data to see how they affect the performances.

# Notes
1. Currently all documentation is in `./docs/` but this isn't ideal. I will move this to each topic instead.
1. Project assumes you have `node` and `npm/yarn` installed. If not go ahead and do that now.
1. I'm using: [Babel Namespace Plugin](https://github.com/yudhasetiawan/babel-plugin-namespace)
    * This is important so I don't need to keep typing `../../`. It isn't 1980 anymore.

# Links 2 comb through
* https://github.com/eyas-ranjous/datastructures-js
* https://github.com/nzakas/computer-science-in-javascript
* [Friday Algorithms: Sorting a Set of Integers](http://bit.ly/2tGbxHy)
* [Difference Between PHP and JavaScript](http://bit.ly/2tGh0OD)
* [JS: Interview Questions - khan4019.github.io](http://bit.ly/2tFZU3x)

* https://github.com/Olical/tuple => https://oli.me.uk/2013/07/12/tuples-in-javascript/
* https://gist.github.com/samwize/8877226
* http://exercism.io/languages/javascript/exercises
