#!/bin/bash

database="bank_branches"

echo "Configuring database: $database" 

dropdb -U root $database 
createdb -U root $database 

psql -U root $database < ./sql/branches.sql 

echo "$database configured"