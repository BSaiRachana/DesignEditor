const express = require('express');
const http = require('http');
const app = express();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "designs"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get('/getDesigns', function(req, res){
  con.query('SELECT * FROM designs_data', function(err, rows){
    res.send(rows);
  });
});

app.post('/addDesign', function (req, res) {
 
  let design = req.body.design;

  if (!design) {
      return res.status(400).send({ error:true, message: 'Please provide a design' });
  }

  con.query("INSERT INTO designs SET ? ", { design: design }, function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'New design has been added successfully.' });
  });
});

const server = http.createServer(app);

server.listen(3000, () => console.log(`Server running on localhost:3000`));
