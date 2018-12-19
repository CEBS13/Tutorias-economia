$(document).ready(function(){
    $.ajax({
        url:"/sesion",
        data:"",
        method:"GET",
        dataType:"json",
        success:function(respuesta){
            $("#nombre-usuario-span").html(respuesta.nombre);
            $("#nombre-perfil").html(respuesta.nombre);
            $("#usuario-perfil").html(respuesta.usuario);
            $("#identidad-perfil").html(respuesta.identidad);
            $("#cuenta-perfil").html(respuesta.numCuenta);
            $("#correo-perfil").html(respuesta.correo);
            $("#carrera-perfil").html(respuesta.carrera);
            $("#descripcion-perfil").html(respuesta.descripcion);
			console.log(respuesta);
        }
    });
	

    
	
});