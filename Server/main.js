var express = require('express');
var cors = require('cors');
var app = express();
var fs = require("fs");

var orders;

app.use(cors());

/* api call To get orders.json file data */
app.get('/getAllBooks', function (req, res) {
    var fileData = fs.readFileSync(__dirname + "/" + "books.json");
    orders = JSON.parse(fileData);
    // fs.readFile( __dirname + "/" + "orders.json", 'utf8', function (err, data) {
    //             console.log( data );
    //             res.end( data );
    //         });
    res.send( orders );
 });

/* api call to add new entry to the orders.json file */
 var order = {
    "order4" : {
        "type" : "pizza",
        "orderedBy" : "SR",
        "store" : 8,
        "id": 4
    }
};
 
 app.get('/addorder', function (req, res) {
        orders.order4 = order.order4;
        fs.writeFileSync( __dirname + "/" + "orders.json", JSON.stringify(orders,null,2));
        res.end( fs.readFileSync(__dirname + "/" + "orders.json") );
 });

 var server = app.listen(8789, function () {
    
      var host = server.address().address;
      var port = server.address().port;
    
      console.log("Example app listening at http://%s:%s", host, port);
    
    });

// var http = require("http");

/* api call To get users.json file data */
app.get('/getAllUsers', function (req, res) {
    var fileData = fs.readFileSync(__dirname + "/" + "users.json");
    var users = JSON.parse(fileData);
    res.send( users );
 });

// http.createServer(function (request, response) {
//     // Send the HTTP header 
//     // HTTP Status: 200 : OK
//     // Content Type: text/plain
//     response.writeHead(200, {'Content-Type': 'text/plain'});
    
//     // Send the response body as "Hello World"
//     response.end('Hello World\n');
//  }).listen(8789);
 
//  // Console will print the message
//  console.log('Server running at http://127.0.0.1:8081/');