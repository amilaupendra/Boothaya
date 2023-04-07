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


  if(firstname !== "" && secondname !== ""){
  db.query(
    "INSERT INTO farmer(farmer_fname, farmer_sname, acre, fertilizer_quantity) VALUES(?,?,?,?)",
    [firstname, secondname, acres, quantity],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
}});

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

//update farmer

app.put('/updatefarmer/:id', (req, res) => {
  const id = req.params.id;
  //const { firstname, secondname, acres, quantity } = req.body;
  const firstname= req.body.firstname;
  const secondname = req.body.secondname;
  const acres = req.body.acres;
  const quantity = req.body.quantity;

  db.query('UPDATE farmer SET farmer_fname = ?, farmer_sname = ?, acre = ?, fertilizer_quantity =? WHERE farmer_id = ?', 
  [firstname, secondname,acres,quantity, id], 
  (err, result) => {
    if (err) {
      res.status(400).send("Failed to update farmer");
    } else {
      res.status(200).send("farmer updated successfully");
    }
  });
});


//----------------Distribution fertilzer --------------------------

app.post('/distribute', (req, res)=>{
  const {farmerId, fertilizerId, weight} = req.body;

  db.query('INSERT INTO distribution (farmer_id, fertilizer_id, weight) VALUES (?,?,?)',
  [farmerId, fertilizerId, weight],
  (err, result)=>{
    if(err){
      console.log(err);
    }else{
      db.query('UPDATE farmer SET status= ? WHERE farmer_id =?',
      ['done',farmerId],
      (err,result)=>{
        if(err){
          console.log(err);
          res.send(err);
        }else{
          db.query('UPDATE fertilizer SET fertilizer_quantity = fertilizer_quantity - ? WHERE fertilizer_id= ?',
          [weight, fertilizerId],
          (err, result)=>{
            if(err){
              console.log(err);
              res.send(err);
            }else{
              console.log("successfully updated fertilizer quantity");
              res.send("Values inserted and fertilizer quantity updated")
            }
          })
          console.log("status updated in farmer table");
        }
      });
      // res.send("values inserted");
    }

  });
});



//show distribution table

app.get('/showdistributions', (req, res)=>{
  db.query("SELECT * FROM distribution", (err,result)=>{
    if(err){
      console.log(err);
    }else{
      res.json(result);
    }axios ax
  })
})




app.listen(4000, () => {
  console.log("server is running on port 4000");
});
