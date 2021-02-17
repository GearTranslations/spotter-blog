#!/bin/bash

# Paths and processes
blog_path=$SPOTTER_BLOG_PATH
gemfile="$blog_path/Gemfile"
process="_scripts/git_hooks.rb"
bundle_command="/home/ubuntu/.rbenv/shims/bundle"

# Log files
log_folder="/home/ubuntu/log"
logfile="$log_folder/blog-listener-crontab.log"
server_logfile="$log_folder/blog-listener-server.log"

export BUNDLE_GEMFILE=$gemfile
makerun="$bundle_command exec ruby $blog_path/$process"

if ps ax | grep -v grep | grep -v bash | grep --quiet $process; then
  printf "Process '%s' is running.\n" "$process" >> $logfile
else
  printf "Starting process '%s' with command '%s'.\n" "$process" "$makerun" >> $logfile
  $makerun >> $server_logfile 2>&1 &
fi
exit
