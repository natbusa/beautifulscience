#!/bin/bash
cd "`dirname "$0"`"
PIDFILE=nginx.pid
if [ -e "$PIDFILE" ]; then
    set -x
    kill `cat "$PIDFILE"`
    rm -f "$PIDFILE"
else
    echo "No pidfile found at $PIDFILE"
fi
