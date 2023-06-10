#!/bin/bash
input1=$1

find -mindepth 1 -maxdepth 1 -type d -print0 | xargs -r0 rm -R

mkdir .temp

cd .temp

gclonecd() {
  git clone "$input1" && cd "$(basename "$input1" .git)"
}

gclonecd
