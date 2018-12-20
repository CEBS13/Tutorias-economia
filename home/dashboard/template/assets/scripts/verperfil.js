$(document).ready(function(){
    $.ajax({
        url:"/informacion-usuario",
        data:"",
        method:"GET",
        dataType:"json",
        success:function(respuesta){
            $("#nombre-usuario-span").html(respuesta[0].txt_nombre);
            $("#nombre-perfil").html(respuesta[0].txt_nombre);
            $("#usuario-perfil").html(respuesta[0].txt_nombre_usuario);
            $("#identidad-perfil").html(respuesta[0].txt_identidad);
            $("#cuenta-perfil").html(respuesta[0].txt_num_cuenta);
            $("#correo-perfil").html(respuesta[0].txt_correo);
            $("#carrera-perfil").html(respuesta[0].txt_carrera);
            $("#descripcion-perfil").html(respuesta[0].txt_descripcion);
			console.log(respuesta[0]);
        }
    });
	

    
	
});