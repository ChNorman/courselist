#Custom start up script for website

#!/bin/sh

# Enter the source directory to make sure the script runs where the user expects
cd "/home/site/wwwroot"

export NODE_PATH=$(npm root --quiet -g):$NODE_PATH
if [ -z "$PORT" ]; then
		export PORT=8080
fi

export NODE_OPTIONS='--require ./oryx-appinsightsloader.js ' $NODE_OPTIONS
export pm2 start --no-daemon /home/site/wwwroot
