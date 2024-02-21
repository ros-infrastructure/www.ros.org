#!/bin/bash


# todo read --delete when excludes are verified

rsync -av output/ www.ros.org:/var/www/beta.ros.org --exclude-from=upload_exclusions.txt
