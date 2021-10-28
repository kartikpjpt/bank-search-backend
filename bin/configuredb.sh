#!/bin/bash

database="dei6idbs84gtrc"

echo "Configuring database: $database" 

dropdb -U sclkahwpyexxye dei6idbs84gtrc 
createdb -U sclkahwpyexxye dei6idbs84gtrc 

psql -U sclkahwpyexxye dei6idbs84gtrc < ./sql/branches.sql 

echo "$database configured"