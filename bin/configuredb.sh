#!/bin/bash

database="dei6idbs84gtrc"

echo "Configuring database: $database" 

dropdb -U root dei6idbs84gtrc 
createdb -U root dei6idbs84gtrc 

psql -U root dei6idbs84gtrc < ./sql/branches.sql 

echo "$database configured"