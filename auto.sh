#!/usr/bin/env bash

[[ ! -f node_modules/.bin/webpack ]] && echo "Building npm modules:" && npm rebuild

npm run $*