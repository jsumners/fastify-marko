#!/bin/bash

export NODE_ENV=production
node index.js 1>/dev/null &
pid=$!

./node_modules/.bin/autocannon -c 100 -d 5 -p 10 localhost:3000/${1}
kill -TERM ${pid}
