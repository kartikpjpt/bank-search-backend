const express = require('express');
const app = express();
const pool = require('./db/index');

const PORT = process.env.PORT || 5000;
const IP = process.env.IP || "192.168.178.1";

app.use(express.json());

app.get("/",(req,res) => {
    res.json({success:true,app:"working"});
})
app.get("/hello", (request,response) => {
    response.status(200).json({
        success:true,
        message:"Hello there!"
    });
});

app.listen(PORT,() => {
    console.log(`Listening on http://${IP}:${PORT}`);
});