#!/bin/sh

clear

DIRECTORY=$1
TOPIC=$2
WATCH="--watch"

# Not working when passing arguments from an NPM script to here for some reason.
if [[ $@ =~ "--watch" || $@ =~ "-w" ]];
  then
    WATCH="--watch"
fi

indent() {
  local unindented
  unindented="$(< /dev/stdin)"
  echo "  ${unindented//$'\n'/$'\n'  }."
}

# if [[ $DIRECTORY == "list" ]]
if [[ $# -eq 0 || $DIRECTORY == "list" ]]
  then
    echo "TOPICS:"
    find \
      ./src${TOPIC} -mindepth 1 -maxdepth 1 -type d \( ! -iname ".*" \) -not -path "./src/_sandbox" \
      | sed 's|^\./src/||g' \
      | sort \
      | indent
    echo ""
    exit
fi

if [ -z "$TOPIC" ]
  # Topic (sub directory) isn't set
  then
    ./node_modules/.bin/jest \
      --config=tools/jest.config.js \
      --testPathPattern=src/${DIRECTORY}/ \
      $WATCH
  else
    ./node_modules/.bin/jest \
      --config=tools/jest.config.js \
      --testPathPattern=src/${DIRECTORY}/${TOPIC} \
      $WATCH
fi
