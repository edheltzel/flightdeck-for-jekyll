#!/bin/bash

# Load environment variables from .env file
if [ -f ./.env ]; then
  export $(cat ./.env | sed 's/#.*//g' | xargs)
fi

################## CHANGE ME ########################
TO_DEPLOY="./_site" #Build path of Jekyll - default: _site
USER="$SERVER_USER" #SERVER user goes here - if not root
REMOTE="$SERVER_IP" #SERVER IP goes here
REMOTE_PATH="$SERVER_PATH" #PATH on REMOTE SERVER
REMOTE2="$REMOTE"
REMOTE_PATH2="$REMOTE_PATH"
EXCLUDE=('.*')
####################################################


################## DONT EDIT BELOW  👀 ########################

for misfits in "${EXCLUDE[@]}"; do
  EXCLUDES="$EXCLUDE --exclude=$misfits"
done


if [ $# -eq 0 ]
  then
    echo "$MALFUNCTION"
elif [ "$1" == "ready" ]
  then
    if [[ -z "$2" ]]
      then
        echo "Running prelaunch ✅ check to 🪐 $REMOTE..."
        rsync --dry-run -az --force --delete --stats --human-readable --info=progress2 $EXCLUDES -e "ssh -p22" $TO_DEPLOY "$USER"@"$REMOTE":"$REMOTE_PATH"
    elif [ "$2" == "go" ]
      then
        echo "And we have 🚀 Liftoff to 🪐 - $REMOTE2..."
        rsync -az --force --delete --stats --human-readable --info=progress2 $EXCLUDES -e "ssh -p22" $TO_DEPLOY "$USER"@"$REMOTE2":"$REMOTE_PATH2"
    else
      echo "$MALFUNCTION"
    fi
  else
    echo -e "$OOPS"
fi
