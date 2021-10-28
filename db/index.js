const {Pool} = require('pg');

const pool = new Pool({
    user:'root',
    host:'localhost',
    database:'bank_branch',
    password:'root',
    port:5432
});

module.exports = pool;