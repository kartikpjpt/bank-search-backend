#!/bin/bash

database="bank_branches"

echo "Configuring database: $database" 

dropdb -U root bank_branches 
createdb -U root bank_branches 

psql -U root bank_branches < ./sql/branches.sql 

echo "$database configured"