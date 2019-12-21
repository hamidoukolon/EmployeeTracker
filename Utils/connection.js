// create the connection information for the sql database
var mysql = require("mysql");
var util = require('util');
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Senegal21!",
  database: "Employee_tracker"
});

connection.query = util.promisify(connection.query)


// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
 
});

module.exports = connection;