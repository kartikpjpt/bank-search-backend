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
app.get("/api/branches/autocomplete",(request,response) => {
    let {q,limit,offset} = request.query;

    if(!limit) {
        limit = 10;
    }
    if(!offset) {
        offset = 0;
    }

    pool.query(`SELECT * FROM branches LIMIT ${limit}`,(err,result)=> {
        if(err) {
            return result.json({error:err.message});
        }
        response.json({
            success: true,
            query_string:request.query,
            res:result.rows
        })
    });
    // response.send("hello");
});
// app.get("/api/branches/autocomplete?", (request,response) => {

// })

app.listen(PORT,() => {
    console.log(`Listening on http://${IP}:${PORT}`);
});