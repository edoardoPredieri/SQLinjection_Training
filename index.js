var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "biar",
  database: "hackdb"
});

var http = require("http");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
 
// Running Server Details
var server = app.listen(8082, function () {
  var port = server.address().port
  console.log("SQLInjection app listening at localhost:%s Port", port)
});


app.get('/', function (req, res) {
  var html='';
  html += "<body>";
  html += "<label>SQL Injection Login Example made by Edoardo Predieri</label>";
  html += "<form action='/login'  method='post' name='form1'>";
  html += "<label>Name:</label><input type= 'text' name='name'>";
  html += "<br>";
  html += "<label>Passw:</label><input type='text' name='passw'>";
  html += "<br>";
  html += "<input type='submit' value='submit'>";
  html += "</form>";
  html += "</body>";
  res.send(html);
});

con.connect(function(err) {
    app.post('/login', urlencodedParser, function (req, res){
    var reply='';
    var username = req.body.name;
    var password = req.body.passw;
    
    
  
    if (err) throw err;
    con.query("SELECT * FROM loginform WHERE name =" +"'"+String(username)+"'" , function (err, result) {
        if (err) {
            reply+=String(err);
            res.send(reply);
            throw err
        }
        else{
            console.log(result);
            if(String(result[0].name)==username && String(result[0].passw)==password){
                reply+="connected!!!";
                res.send(reply);
            }
            else{
                reply+="<body>";
                for (i = 0; i < result.length; i++) {
                reply+="<label>Failed to login as "+String(result[i].name)+"</label>";
                reply+="<br>"
                }
                reply+="</body>";
                res.send(reply);
            };
        };   
    });
 });
});


