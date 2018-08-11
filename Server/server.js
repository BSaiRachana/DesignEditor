const express = require('express');
// const path = require('path');
const http = require('http');
const app = express();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root@12345",
  database: 'designs',
  insecureAuth: false
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// Point static path to dist
// app.use(express.static(path.join(__dirname, 'dist')));

// Catch all other routes and return the index file
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

/**
 * Get port from environment and store in Express.
 */

// const port = process.env.PORT || '4520';
// app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(3000, () => console.log(`Server running on localhost:3000`));
