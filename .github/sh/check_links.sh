#!/bin/bash

ua="Mozilla/5.0 (X11; Linux x86_64; rv:133.0) Gecko/20100101 Firefox/133.0"

muffet --rate-limit 4 -t 300 -b 16384 --skip-tls-verification \
  --header "User-Agent: ${ua}" \
  -e "\.(mkv|mp4|mpg|pdf)$" \
  -e "#" \
  -e "rdmo.*.de" \
  -e "twitter" \
  -e "www.ub.uni-rostock.de" \
  -e "www.ub.uni-potsdam.de" \
  https://rdmorganiser.github.io
