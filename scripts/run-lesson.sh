#!/bin/sh

TOPIC=$1
LESSON=$2

if [[ $TOPIC = "list" ]]
  then
    ls -l ./src/ | grep "^d"
    exit
fi

if [[ $LESSON = "list" ]]
  then
    find ./src/${TOPIC} -mindepth 1 -maxdepth 1 -type d  \( ! -iname ".*" \) | sed 's|^\./||g'
    exit
fi

echo "----------------------------------------"
echo "Running tests: ${LESSON}"
echo "----------------------------------------"

./node_modules/.bin/mocha \
  --require babel-polyfill \
  --recursive ./src/${TOPIC}/${LESSON} \
  --compilers js:babel-register \
  --watch \
  --reporter mocha-clearscreen-reporter
