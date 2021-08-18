#!/bin/bash


rsync -av --delete output/ ros1.osuosl.org:/var/www/beta.ros.org --exclude .well-known