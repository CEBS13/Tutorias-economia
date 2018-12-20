$(document).ready(function(){
    $.ajax({
        url:"/sesion",
        data:"",
        method:"GET",
        dataType:"json",
        success:function(respuesta){
            $("#nombre-usuario-span").html(respuesta.nombre);
            $("#nombre-usuario").html(respuesta.nombre);
            $("#nombre-usuario-ed").val(respuesta.usuario);
            $("#identidad-usuario-ed").val(respuesta.identidad);
            $("#cuenta-usuario-ed").val(respuesta.numCuenta);
            $("#correo-usuario-ed").val(respuesta.correo);
            $("#carrera-usuario-ed").val(respuesta.carrera);
            $("#descripcion-usuario-ed").val(respuesta.descripcion);
			console.log(respuesta);
        }
    });
	

    
	
});


$("#guardar-perfil").click(function(){
    
    var parametros = "usuario="+$("#nombre-usuario-ed").val() + "&" +
                     "identidad="+$("#identidad-usuario-ed").val() + "&" +
                     "cuenta="+$("#cuenta-usuario-ed").val() + "&" +
                     "correo="+$("#correo-usuario-ed").val() + "&" +
                     "carrera="+$("#carrera-usuario-ed").val() + "&" +
                     "descripcion="+$("#descripcion-usuario-ed").val() + "&" +
                     "nombre="+$("#nombre-usuario-ed").val();
    
	$.ajax({
		url:"/actualizar-perfil",
		method:"POST",
		data:parametros,
		dataType:"json",
		success:function(respuesta){
			if (respuesta.affectedRows==1){
                console.log(respuesta);
                $('#cambio-exitoso').modal();
			}
			console.log(respuesta);
			
		}
	});
});
