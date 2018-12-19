$(document).ready(function(){
    cargarTutores();
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

function cargarTutores(){
	$.ajax({
		url:"/obtener-tutores",
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
				$("#contenedor-tutores").append(
					`
					<div class="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 d-none d-sm-block">
						<div class="tutores">
							<div class="foto">
								<img src="assets/img/user3.png" alt="">
							</div>
							<div class="contenido-tutor">
								<h3 id="nombre-tutor" class="titulo-tutor">${respuesta[i].txt_nombre}</h3>
								<span id="descripcion-tutor" class="descripcion-tutor">${respuesta[i].txt_descripcion}</span>
								<br>
								
							</div>
							<ul class="opciones-tutor">
								<li><a href="">Contactar</a></li>
								<li><a href="">Ver más...</a></li>
							</ul>
						</div>`
				);
			}
		}
	});
}
