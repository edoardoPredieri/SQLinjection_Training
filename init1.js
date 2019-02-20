var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root", 
  password: "biar"  //to modify with your machine password
  
  
  
  
  
  //do not look underneath!!!!!!
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
  con.query("CREATE DATABASE hackdb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
