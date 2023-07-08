#!/bin/bash
####################################################

GREEN='\033[0;32m' #green
YELLOW='\033[33m' #yellow
WHITE='\033[97m' #white
GRAY='\033[37m' #light gray
NC='\033[0m' #no-color
OPTIONS="${YELLOW}site${NC}, or ${YELLOW}purge${NC}"
MALFUNCTION="👨‍🚀 Huston... We have a problem! Make sure you use ${OPTIONS}"
FRESH="🧼 Scrubbed ${WHITE}node_modules${NC}, ${WHITE}dist/${NC}, ${WHITE}all caches${NC} & ${GRAY}lock files${NC}, ✨"
SITE="🧼 Scrubbed ${WHITE}dist/${NC} , ${WHITE}_site/${NC} & ${WHITE}all cache${NC} directories ✨"
PURGE="${GREEN}🧹 All Clean ✨${NC} ${FRESH}${NC} Run ${YELLOW}npm install${NC} to start fresh 🤩"
OOPS="🚀💥🔥 OOPS! We need a valid option – Try using ${OPTIONS}"
DEVFILES="dist/ _site/ .jekyll-cache .cache/ .pnpm-debug.log .parcel-cache/ .jampack/ assets/styles assets/js"
NODEFILES="node_modules package-lock.json pnpm-lock.yaml yarn.lock"
RUBYFILES=".bundle/ .sass-cache/ .jekyll-metadata vendor/ Gemfile.lock"

################## DONT EDIT BELOW  👀 ########################
if [ $# -eq 0 ]
  then
    echo -e "$MALFUNCTION"
elif [ "$1" == "site" ]
  then
    (rm -rf ${DEVFILES} || del ${DEVFILES})
    echo -e ${SITE}
  elif [ "$1" == "purge" ]
    then
      (rm -rf ${DEVFILES} ${NODEFILES} ${RUBYFILES} || del ${DEVFILES} ${NODEFILES} ${RUBYFILES})
      echo -e ${PURGE}
  else
    echo -e "$OOPS"
fi
