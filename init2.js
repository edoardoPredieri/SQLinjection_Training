var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root", 
  
  
  
  
  
  
  //do not look underneath!!!!!!
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  database: "hackdb"
});

con.connect(function(err) {  
   var sql = "CREATE TABLE loginform (id VARCHAR(255), name VARCHAR(255), passw VARCHAR(255))";
    con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
  
  var sql2 = "INSERT INTO loginform (id, name, passw) VALUES ?";
  var values = [
    ['1','user', 'verify'],
    ['3','admin', 'sweden'],
    ['4','amy', 'apple'],
    ['55','jonh', 'mountain']
  ];
  con.query(sql2, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
  
});
