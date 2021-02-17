#!/bin/bash

# Script usage: ./_scripts/rebuild.sh <output build directory>
#
# NOTE: This script should be executed from this repository root folder, as
#       ./_scripts/rebuild.sh
# NOTE: This script is not recommended to be used on development mode, since
#       it may override your local changes.

# Arguments handling
command_format="rebuild.sh <output-dir> <branch>"
output="$1"
branch="$2"

if [ "$output" == "" ] || [ "$branch" == "" ]; then
  echo "Invalid arguments. Usage: $command_format"
  exit 1
fi

# Retrieve new changes from git
git checkout $branch
git pull origin $branch

# Install gems (if they're not present)
bundle install

# Recompile Jekyll
mkdir -p $output
bundle exec jekyll build -d $output

# Move to the previous branch
git checkout -
