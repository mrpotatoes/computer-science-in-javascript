#!/bin/sh

TOPIC=$1
LESSON=$2

if [[ $LESSON = "list" ]]
  then
    find ./src/${TOPIC}/* -mindepth 1 -maxdepth 1 -type d  \( ! -iname ".*" \) | sed 's|^\./||g'
    exit
fi

if [[ $LESSON = "watch" ]]
  then
    ./node_modules/.bin/jest \
      --config=tools/jest.config.js \
      --testPathPattern=${TOPIC}/* \
      --watch
  else
    ./node_modules/.bin/jest \
      --config=tools/jest.config.js \
      --testPathPattern=${TOPIC}/*
fi
