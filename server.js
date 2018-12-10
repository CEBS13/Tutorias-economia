var express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var cookieParser = require("cookie-parser");

//variables
var app = express();
var mysql = require('mysql');

//Midlewares
 app.use(express.static("public")); //Middlewares
 app.use(bodyParser.json());
 app.use(cookieParser());//Middleware para parsera las cookies en el JSON request.cookies
 app.use(bodyParser.urlencoded({extended:true}));
 app.use(session({secret:"AsjFJ%!FJa",resave:true, saveUninitialized:true}));

 var publicHome = express.static("./glint/dashboard");

 
 var dbconfig = require('./public/config/db');
 var conexion = mysql.createConnection(dbconfig.connection);

 
 


require('./public/config/routes')(app);
 app.listen(8001);

 