const express = require('express');
const app = express();
const pool = require('./db/index');

const PORT = process.env.PORT || 5000;
const IP = process.env.IP || "192.168.178.1";

app.use(express.json());
app.get("/",(request,response) => {
    response.json({
        success:true,
        message:"api is working..."
    });
})

//Searching in the branch name of the data
app.get("/api/branches/autocomplete",(request,response) => {
    let {q,limit,offset} = request.query;

    if(!limit) {
        limit = 10;
    }
    if(!offset) {
        offset = 0;
    }

    if(!q) {
        return response.status(400).json({
            success:false,
            message:"Please enter the branch name"
        });
    }

    pool.query(
        `SELECT * FROM branches
    WHERE branch ILIKE '%${q}%'
    ORDER BY ifsc
    LIMIT ${limit}
    OFFSET ${offset};`,
    (err,result)=> {
        if(err) {
            return result.json({error:err.message});
        }
        response.status(200).json({
            success: true,
            branches:result.rows
        })
    });
    // response.send("hello");
});

//searchin across all columns and rows in the data
app.get("/api/branches", (request,response) => {
    let {q,limit,offset} = request.query;

    if(!limit) {
        limit = 10;
    }
    if(!offset) {
        offset = 0;
    }
    if(!q) {
        return response.status(400).json({
            success:false,
            message:"Please enter the branch name"
        });
    }

    pool.query(`
    SELECT * FROM branches as b
    WHERE   b.ifsc ILIKE '%${q}%' OR
        b.address ILIKE '%${q}%' OR
        b.city ILIKE '%${q}%' OR
        b.district ILIKE '%${q}%' OR
        b.state ILIKE '%${q}%'
    ORDER BY ifsc
    LIMIT ${limit}
    OFFSET ${offset};
    `, 
    (err,result) => {
        if(err) {
            return response.status(400).json({
                success:false,
                message:err.message
            });
        }

        response.status(200).json({
            success:true,
            branches:result.rows
        });
    });
});

app.listen(PORT,() => {
    console.log(`Listening on http://${IP}:${PORT}`);
});