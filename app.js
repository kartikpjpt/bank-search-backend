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

    const {q,limit,offset} = request.params;

    pool.query('SELECT * FROM branches LIMIT 1000',(err,result)=> {
        if(err) {
            return result.json({error:err.message});
        }
        response.json({
            success: true,
            que:data,
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