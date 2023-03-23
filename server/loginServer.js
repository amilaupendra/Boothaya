const express = require("express");
const app= express();
const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database:'farmer-app',
});

app.post("/create", (req,res) =>{
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    db.query('INSERT INTO user(email, username, password) VALUES(?,?,?)', 
    [email, username, password], 
    (err, result) =>{
        if (err){
            console.log(err);
        }
        else{
            res.send("Values Inserted");
        }
    });

});

app.listen(4000, () => {
    console.log("server is running on port 4000")
});