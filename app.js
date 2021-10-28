const express = require('express');
const app = express();
const pool = require('./db/index');

const PORT = process.env.PORT || 5000;
const IP = process.env.IP || "192.168.178.1";

app.use(express.json());

app.get("/",(request,response) => {

    // pool.query('SELECT * FROM branches',(err,res)=> {
    //     if(err) {
    //         return res.json({error:err.message});
    //     }
    //     res.json({
    //         success: true,
    //         res
    //     })
    // });
    res.send("hello");
});
// app.get("/api/branches/autocomplete?", (request,response) => {

// })

app.listen(PORT,() => {
    console.log(`Listening on http://${IP}:${PORT}`);
});