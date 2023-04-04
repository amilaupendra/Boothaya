const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "farmer-app",
});

app.post("/create", (req, res) => {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "INSERT INTO user(email, username, password) VALUES(?,?,?)",
    [email, username, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT user_id,username FROM user WHERE username =? AND password =?",
    [username, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      } else {
        if (result.length > 0) {
          res.send(result);
        } else {
          res.send({ message: "wrong username and password" });
        }
      }
    }
  );
});

// fertilizer table add
app.post("/addfertilizer", (req, res) => {
  const fertilizername = req.body.fertilizername;
  const fertilizerquantity = req.body.fertilizerquantity;

  db.query(
    "INSERT INTO fertilizer(fertilizer_name, fertilizer_quantity) VALUES(?,?)",
    [fertilizername, fertilizerquantity],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});


//fertilizer table show

app.get('/fertilizers', (req,res) =>{
  const sql= 'SELECT * FROM fertilizer';
   db.query(sql, (err,data) =>{
    if(err) {
      res.json("error");
    }else{
      res.json(data)
    }
   })
})

//delete fertilizer

app.delete('/delete/:id', (req, res)=>{
  const id= req.params.id
  db.query("DELETE FROM fertilizer WHERE fertilizer_id = ?",id, (err, result)=>{
    if(err){
      console.log("err");
    }else{
      res.send(result);
    }
  });
});



//------------------farmer-page-------------------

//add farmer
app.post("/addfarmer", (req, res) => {
  const firstname= req.body.firstname;
  const secondname = req.body.secondname;
  const acres = req.body.acres;
  const quantity = req.body.quantity;

  db.query(
    "INSERT INTO farmer(farmer_fname, farmer_sname, acre, fertilizer_quantity) VALUES(?,?,?,?)",
    [firstname, secondname, acres, quantity,],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

//delete farmer
app.delete('/deletefarmer', (req, res)=>{
  const id= req.body.id
  db.query("DELETE FROM farmer WHERE farmer_id = ?",id, (err, result)=>{
    if(err){
      console.log("err");
    }else{
      res.send(result);
    }
  });
});

//show table farmer

app.get('/showfarmers', (req,res) =>{
  const sql= 'SELECT * FROM farmer';
   db.query(sql, (err,data) =>{
    if(err) {
      res.json("error");
    }else{
      res.json(data)
    }
   })
})




app.listen(4000, () => {
  console.log("server is running on port 4000");
});
