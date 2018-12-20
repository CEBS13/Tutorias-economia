module.exports = function (app){
    const mysql = require("mysql");
    const dbconfig = require('./db');
    var express = require("express");
    
// sesion iniciada
// Funcion de logueo
var publicHome = express.static("home");
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
        var sql_insertar = 'INSERT INTO usuario(id_tipo_usuario_fk,txt_nombre,txt_nombre_usuario,txt_contrasena,txt_identidad,txt_num_cuenta,txt_descripcion,txt_carrera,int_edad,txt_genero,txt_foto,txt_correo)VALUES(?,?,?,?,?,?,?,?,?,?,?,?)';
        var sql_consultar = 'SELECT * FROM usuario where txt_correo = ? or txt_nombre_usuario=?';
        const conexion = mysql.createConnection(dbconfig.connection);
        conexion.query(sql_consultar,[request.body.correo,request.body.nombreUsuario],function (err, data, fields) {      
            if(data.length>0){
                response.send({estatus:1, mensaje:"Ya hay una cuenta con este correo o ese usuario."});
                
            }else{
                
                conexion.query(
                    sql_insertar,
                    [request.body.tipoUsuario,request.body.nombre,request.body.nombreUsuario, 
                    request.body.contrasena,request.body.identidadUsuario,request.body.cuentaUsuario,request.body.descripcionUsuario,request.body.carreraUsuario," ",request.body.genero,0, request.body.correo],
                    function(err, result){
                        console.log("entre");
                        if (err) throw err;
                        //request.session.correo = request.body.correo; 
                        response.send(result);                       
                        
                        
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
                            console.log(data[0].txt_nombre_usuario);
                            peticion.session.idUsuario = data[0].id_usuario_pk;
                            peticion.session.tipoUsuario = data[0].id_tipo_usuario_fk;
                            peticion.session.usuario = data[0].txt_nombre_usuario;
                            peticion.session.nombreUsuario = data[0].txt_nombre;
                            peticion.session.identidad = data[0].txt_identidad;    
                            peticion.session.numCuenta = data[0].txt_num_cuenta;     
                            peticion.session.descripcion = data[0].txt_descripcion;    
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
            respuesta.send({codigo:peticion.session.idUsuario, nombre:peticion.session.nombreUsuario, correo:peticion.session.correo, usuario:peticion.session.usuario, 
                            identidad:peticion.session.identidad, numCuenta:peticion.session.numCuenta, carrera:peticion.session.carrera, descripcion:peticion.session.descripcion});
            //respuesta.send("Sesion eliminada");
        });        

        app.get("/logout",function(peticion, respuesta){
            peticion.session.destroy();
            respuesta.redirect("index.html");
            //respuesta.send("Sesion eliminada");
        });


        app.post("/nuevo-post", function(request, response){
            var conexion = mysql.createConnection(dbconfig.connection);
            var sql = `INSERT INTO 
                       posts(id_usuario_pk, post, tipo_post) 
                       VALUES (?,?,?)`;
            
            conexion.query(
                sql,
                [request.session.idUsuario, request.body.post,1],
                function(err, result){
                    if (err) throw err;
                    response.send(result);
                }
            ); 
        });


        app.get("/obtener-posts", function(request, response){
            var conexion = mysql.createConnection(dbconfig.connection);
            var sql = `SELECT b.id_usuario_pk, b.txt_nombre, a.post, a.fecha FROM posts AS a left JOIN usuario as b on a.id_usuario_pk = b.id_usuario_pk ORDER by a.fecha DESC`;
            var usuarios = [];
            conexion.query(sql)
            .on("result", function(resultado){
                usuarios.push(resultado);
            })
            .on("end",function(){
                response.send(usuarios);
            });   
        });

        app.get("/obtener-tutores", function(request, response){
            var conexion = mysql.createConnection(dbconfig.connection);
            var sql = `SELECT * FROM usuario WHERE id_tipo_usuario_fk = 1`;
            var usuarios = [];
            conexion.query(sql)
            .on("result", function(resultado){
                usuarios.push(resultado);
            })
            .on("end",function(){
                response.send(usuarios);
            });   
        });

       

        app.post("/actualizar-perfil", function(request, response){
            var conexion = mysql.createConnection(dbconfig.connection);
            var sql = 'UPDATE usuario SET txt_nombre_usuario = ?, txt_identidad = ?, txt_num_cuenta = ?, txt_descripcion = ?, txt_carrera = ?, txt_correo = ? WHERE id_usuario_pk = ?';
            
            conexion.query(
                sql,
                [request.body.usuario, request.body.identidad, request.body.cuenta, request.body.descripcion, request.body.carrera, request.body.correo, request.session.idUsuario],
                function(err, result){
                    if (err) throw err;
                    response.send(result);
                }
            ); 
        });

        app.post("/guardar-codigo-usuario", function(peticion, respuesta){
            respuesta.cookie("codigo", peticion.body.codigo_usuario);
            respuesta.send({mensaje:"Se guardo la cookie"});
        });
        
        app.get("/informacion-usuario", function(request, response){
            var conexion = mysql.createConnection(dbconfig.connection);
            var sql = `SELECT * FROM usuario WHERE id_usuario_pk = ?`;
            var usuarios = [];
            conexion.query(sql, [request.cookies.codigo])
            .on("result", function(resultado){
                usuarios.push(resultado);
            })
            .on("end",function(){
                response.send(usuarios);
            });   
        });
}