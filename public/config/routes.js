module.exports = function (app){
    const mysql = require("mysql");
    const dbconfig = require('./db');
    var express = require("express");
    
// sesion iniciada
// Funcion de logueo
var publicHome = express.static("../glint/dashboard");
app.use(
    function(peticion,respuesta,next){
        if (peticion.session.correo){
            //Significa que el usuario si esta logueado
            if (peticion.session.correo){
                publicHome(peticion,respuesta,next);
            }
                
        }
        else
            return next();
    }
);


    app.post("/registrar-usuario", function(request, response){
        console.log("Hola funcionó");
        console.log(request.body.correo);
        var sql_insertar = 'INSERT INTO usuario(id_tipo_usuario_fk,txt_nombre,txt_nombre_usuario,txt_contrasena,txt_identidad,txt_num_cuenta,txt_direccion,txt_carrera,int_edad,txt_genero,txt_foto,txt_correo)VALUES(?,?,?,?,?,?,?,?,?,?,?,?)';
        var sql_consultar = 'SELECT * FROM usuario where txt_correo = ?';
        const conexion = mysql.createConnection(dbconfig.connection);
        conexion.query(sql_consultar,[request.body.correo],function (err, data, fields) {      
            if(data.length>0){
                response.send({estatus:1, mensaje:"Ya hay una cuenta con este correo."});
                
            }else{
                
                conexion.query(
                    sql_insertar,
                    [request.body.tipoUsuario,request.body.nombre,request.body.nombreUsuario, 
                    request.body.contrasena," "," "," ", " "," ",request.body.genero,0, request.body.correo],
                    function(err, result){
                        console.log("entre");
                        if (err) throw err;
                        request.session.correo = request.body.correo; 
                        response.send(result);                       
                        //response.redirect('../glint/');
                        
                    });
                }
            }
            );
         });

         app.post("/Login", function(peticion, respuesta){
            const conexion = mysql.createConnection(dbconfig.connection);
            conexion.query("SELECT * FROM usuario WHERE txt_correo=? and txt_contrasena=?",
                [peticion.body.correo, peticion.body.contrasena],
                
                function(err, data, fields){

                        if (data.length>0){
                            
                            console.log("hvsh");
                            peticion.session.idUsuario = data[0].id_usuario_pk;
                            peticion.session.tipoUsuario = data[0].id_tipo_usuario_fk;
                            peticion.session.nombreUsuario = data[0].txt_nombre_usuario;
                            peticion.session.identidad = data[0].txt_identidad;    
                            peticion.session.numCuenta = data[0].txt_num_cuenta;     
                            peticion.session.direccion = data[0].txt_direccion;    
                            peticion.session.carrera = data[0].txt_carrera;  
                            peticion.session.edad = data[0].int_edad;
                            peticion.session.genero = data[0].txt_genero;
                            peticion.session.correo = data[0].txt_correo;                           
                            
                             data[0].estatus = 0;
                            // respuesta.cookie("carpeta", 0)
                            respuesta.send(data[0]); 
                            //console.log(peticion.session);
                            ;
                        }else{
                            respuesta.send({estatus:1, mensaje: "Login fallido"}); 
                        }
                        
                 }
            ); 
        });

        app.get("/sesion",function(peticion, respuesta){
            respuesta.send({codigo:peticion.session.codigoUsuario, nombre:peticion.session.nombre, apellido:peticion.session.apellido, correo:peticion.session.correo, codigo_plan:peticion.session.codigo_plan});
            //respuesta.send("Sesion eliminada");
        });        

}