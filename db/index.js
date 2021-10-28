const {Pool} = require('pg');

const pool = new Pool({
    user:'sclkahwpyexxye',
    host:'ec2-3-217-234-137.compute-1.amazonaws.com',
    database:'dei6idbs84gtrc',
    password:'947e0272abe8fa2b5b7db123d03bf34938949a802e941889c6a414b18cbf1dd6',
    port:5432
});

module.exports = pool;