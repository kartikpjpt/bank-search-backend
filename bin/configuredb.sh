#!/bin/bash

database="bank_branch"

echo "Configuring database: $database" 

dropdb -U root bank_branch 
createdb -U root bank_branch 

psql -U root bank_branch < ./bin/sql/branches.sql 

echo "$database configured"