#!/bin/bash
set -e

rm -R ./data || true
curl -L https://github.com/umpirsky/country-list/archive/master.tar.gz | tar -xf - '*/country.json'
find . -name 'country.json' -exec bash -c 'mv $1 $(echo $1 | sed -e "s/\/country\.json/\.json/g")' -- {} \;
mv country-list-master/data ./data
rmdir country-list-master
ls -A -d data/*/ | xargs rmdir
node ./bin/build-language-file.js > languages.json
