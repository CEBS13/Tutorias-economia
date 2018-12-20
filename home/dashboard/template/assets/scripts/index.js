$(document).ready(function(){
    cargarPosts();
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


$("#boton-post").click(function(){
	var parametros = "post="+$("#contenido-post").val();
	$.ajax({
		url:"/nuevo-post",
		method:"POST",
		data:parametros,
		dataType:"json",
		success:function(respuesta){
			if (respuesta.affectedRows==1){
				//cargarArchivos();
                //cargarCarpetas();
                $("#muro-posts").html("");
                cargarPosts();
			}
			console.log(respuesta);
			
		}
	});
});


function cargarPosts(){
	$.ajax({
		url:"/obtener-posts",
		dataType:"json",
		success:function(respuesta){
			console.log(respuesta);
			//$("#div-archivos").html("");
			/*$("#div-archivos").append(
				`<div style="background-color: #FCA745; width:100%" class="content col-xl-12 col-lg-12 col-md-12 col-xs-12 col-12">
				<label class="direccion"><i class="fas fa-folder"></i>  Mis archivos / <i class="fas fa-folder"></i>  Archivos de prueba</label>
			</div>`
			);*/
			for(var i=0; i<respuesta.length; i++){
               
                console.log(respuesta);
				$("#muro-posts").append(
					`<div class="publicacion col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 " >
                    <div id="post-head">
                    
                        <h3 id="nombreUsuario-post"><b>${respuesta[i].txt_nombre}</b></h3>
                        <h4 id="fecha-post">${respuesta[i].fecha}</h4>
                    </div>
                    <hr>
                    <div id="post-body">
                        <p>
                            ${respuesta[i].post}
                        </p>
						<div class="text-center"><a onClick="seleccionarUsuario(${respuesta[i].id_usuario_pk});" href="#" class="btn btn-primary">Ver perfil</a></div>
                    </div>
            </div>`
				);
			}
		}
	});
}

function seleccionarUsuario(codigoUsuario){
	$.ajax({
		url:"/guardar-codigo-usuario",
		method:"POST",
		data:"codigo_usuario="+codigoUsuario,
		dataType:"json",
		success:function(respuesta){
			window.location.href = "page-profile-user.html";
			console.log(respuesta);
		}
	})
}