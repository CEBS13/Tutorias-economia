$(document).ready(function(){
	$.ajax({
        url:"/sesion",
        data:"",
        method:"GET",
        dataType:"json",
        success:function(respuesta){
			$("#nombre-usuario-span").html(respuesta.nombre);
			console.log(respuesta);
        }
    });
	
});
