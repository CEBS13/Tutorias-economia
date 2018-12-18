$("#categoria-tutor").on('change', function() {
    var categoria = $("#categoria-tutor").val();
    if(categoria == 1){
        $("#contenedor-tutores").html("");
        $("#contenedor-tutores").append(
            `
            <div class="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 d-none d-sm-block">
						<div class="tutores">
							<div class="foto">
								<img src="assets/img/user3.png" alt="">
							</div>
							<div class="contenido-tutor">
								<h3 class="titulo-tutor">Gabriela Mejía</h3>
								<span class="descripcion-tutor">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint tenetur inventore cupiditate deleniti dolores non dolorum atque voluptate quis deserunt debiti</span>
								<br>
								<span class="descripcion-tutor"><b>Tutorías en:</b> Matemáticas, Química, Física.</span>
								<br>
								<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i>
							</div>
							<ul class="opciones-tutor">
								<li><a href="">Contactar</a></li>
								<li><a href="">Ver más...</a></li>
							</ul>
						</div>
             </div>
                    

             <div class="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 d-none d-sm-block">
							<div class="tutores">
								<div class="foto">
									<img src="assets/img/user4.png" alt="">
								</div>
								<div class="contenido-tutor">
									<h3 class="titulo-tutor">Luisa Rodriguez</h3>
									<span class="descripcion-tutor">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint tenetur inventore cupiditate deleniti dolores non dolorum atque voluptate quis deserunt debiti</span>
									<br>
									<span class="descripcion-tutor"><b>Tutorías en:</b> Ingles, Italiano, Matemáticas.</span>
									<br>
									<i class="fas fa-star"></i>
									<i class="fas fa-star"></i><i class="fas fa-star-half"></i>
								</div>
								<ul class="opciones-tutor">
									<li><a href="">Contactar</a></li>
									<li><a href="">Ver más...</a></li>
								</ul>
							</div>
			    </div>

            `
        );
    }else if(categoria == 2){
        $("#contenedor-tutores").html("");
        $("#contenedor-tutores").append(
            `
            <div class="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 d-none d-sm-block">
            <div class="tutores">
                <div class="foto">
                    <img src="assets/img/user3.png" alt="">
                </div>
                <div class="contenido-tutor">
                    <h3 class="titulo-tutor">Gabriela Mejía</h3>
                    <span class="descripcion-tutor">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint tenetur inventore cupiditate deleniti dolores non dolorum atque voluptate quis deserunt debiti</span>
                    <br>
                    <span class="descripcion-tutor"><b>Tutorías en:</b> Matemáticas, Química, Física.</span>
                    <br>
                    <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i>
                </div>
                <ul class="opciones-tutor">
                    <li><a href="">Contactar</a></li>
                    <li><a href="">Ver más...</a></li>
                </ul>
            </div>
        </div>


        <div class="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 d-none d-sm-block">
                <div class="tutores">
                    <div class="foto">
                        <img src="assets/img/user1.png" alt="">
                    </div>
                    <div class="contenido-tutor">
                        <h3 class="titulo-tutor">Luis Padilla</h3>
                        <span class="descripcion-tutor">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint tenetur inventore cupiditate deleniti dolores non dolorum atque voluptate quis deserunt debiti</span>
                        <br>
                        <span class="descripcion-tutor"><b>Tutorías en:</b> Química, Física.</span>
                        <br>
                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i>
                    </div>
                    <ul class="opciones-tutor">
                        <li><a href="">Contactar</a></li>
                        <li><a href="">Ver más...</a></li>
                    </ul>
                </div>
        </div>

        <div class="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 d-none d-sm-block">
                <div class="tutores">
                    <div class="foto">
                        <img src="assets/img/user2.png" alt="">
                    </div>
                    <div class="contenido-tutor">
                        <h3 class="titulo-tutor">Julio Maradiaga</h3>
                        <span class="descripcion-tutor">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint tenetur inventore cupiditate deleniti dolores non dolorum atque voluptate quis deserunt debiti</span>
                        <br>
                        <span class="descripcion-tutor"><b>Tutorías en:</b> Física.</span>
                        <br>
                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                    </div>
                    <ul class="opciones-tutor">
                        <li><a href="">Contactar</a></li>
                        <li><a href="">Ver más...</a></li>
                    </ul>
                </div>
        </div>
            `
        );
    }else if(categoria == 3){
        $("#contenedor-tutores").html("");
        $("#contenedor-tutores").append(
            `
            <div class="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 d-none d-sm-block">
            <div class="tutores">
                <div class="foto">
                    <img src="assets/img/user3.png" alt="">
                </div>
                <div class="contenido-tutor">
                    <h3 class="titulo-tutor">Gabriela Mejía</h3>
                    <span class="descripcion-tutor">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint tenetur inventore cupiditate deleniti dolores non dolorum atque voluptate quis deserunt debiti</span>
                    <br>
                    <span class="descripcion-tutor"><b>Tutorías en:</b> Matemáticas, Química, Física.</span>
                    <br>
                    <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i>
                </div>
                <ul class="opciones-tutor">
                    <li><a href="">Contactar</a></li>
                    <li><a href="">Ver más...</a></li>
                </ul>
            </div>
        </div>


        <div class="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 d-none d-sm-block">
                <div class="tutores">
                    <div class="foto">
                        <img src="assets/img/user1.png" alt="">
                    </div>
                    <div class="contenido-tutor">
                        <h3 class="titulo-tutor">Luis Padilla</h3>
                        <span class="descripcion-tutor">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint tenetur inventore cupiditate deleniti dolores non dolorum atque voluptate quis deserunt debiti</span>
                        <br>
                        <span class="descripcion-tutor"><b>Tutorías en:</b> Química, Física.</span>
                        <br>
                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i>
                    </div>
                    <ul class="opciones-tutor">
                        <li><a href="">Contactar</a></li>
                        <li><a href="">Ver más...</a></li>
                    </ul>
                </div>
        </div>
            `
        );
    }else if(categoria == 4){
        $("#contenedor-tutores").html("");
        $("#contenedor-tutores").append(
            `
            <div class="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 d-none d-sm-block">
            <div class="tutores">
                <div class="foto">
                    <img src="assets/img/user4.png" alt="">
                </div>
                <div class="contenido-tutor">
                    <h3 class="titulo-tutor">Luisa Rodriguez</h3>
                    <span class="descripcion-tutor">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint tenetur inventore cupiditate deleniti dolores non dolorum atque voluptate quis deserunt debiti</span>
                    <br>
                    <span class="descripcion-tutor"><b>Tutorías en:</b> Ingles, Italiano, Matemáticas.</span>
                    <br>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i><i class="fas fa-star-half"></i>
                </div>
                <ul class="opciones-tutor">
                    <li><a href="">Contactar</a></li>
                    <li><a href="">Ver más...</a></li>
                </ul>
            </div>
    </div>

            `
        );
    }else if(categoria == 5){
        $("#contenedor-tutores").html("");
        $("#contenedor-tutores").append(
            `
            <div class="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 d-none d-sm-block">
            <div class="tutores">
                <div class="foto">
                    <img src="assets/img/user3.png" alt="">
                </div>
                <div class="contenido-tutor">
                    <h3 class="titulo-tutor">Gabriela Mejía</h3>
                    <span class="descripcion-tutor">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint tenetur inventore cupiditate deleniti dolores non dolorum atque voluptate quis deserunt debiti</span>
                    <br>
                    <span class="descripcion-tutor"><b>Tutorías en:</b> Matemáticas, Química, Física.</span>
                    <br>
                    <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i>
                </div>
                <ul class="opciones-tutor">
                    <li><a href="">Contactar</a></li>
                    <li><a href="">Ver más...</a></li>
                </ul>
            </div>
        </div>


        <div class="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 d-none d-sm-block">
                <div class="tutores">
                    <div class="foto">
                        <img src="assets/img/user1.png" alt="">
                    </div>
                    <div class="contenido-tutor">
                        <h3 class="titulo-tutor">Luis Padilla</h3>
                        <span class="descripcion-tutor">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint tenetur inventore cupiditate deleniti dolores non dolorum atque voluptate quis deserunt debiti</span>
                        <br>
                        <span class="descripcion-tutor"><b>Tutorías en:</b> Química, Física.</span>
                        <br>
                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i>
                    </div>
                    <ul class="opciones-tutor">
                        <li><a href="">Contactar</a></li>
                        <li><a href="">Ver más...</a></li>
                    </ul>
                </div>
        </div>

        <div class="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 d-none d-sm-block">
                <div class="tutores">
                    <div class="foto">
                        <img src="assets/img/user2.png" alt="">
                    </div>
                    <div class="contenido-tutor">
                        <h3 class="titulo-tutor">Julio Maradiaga</h3>
                        <span class="descripcion-tutor">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint tenetur inventore cupiditate deleniti dolores non dolorum atque voluptate quis deserunt debiti</span>
                        <br>
                        <span class="descripcion-tutor"><b>Tutorías en:</b> Física.</span>
                        <br>
                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                    </div>
                    <ul class="opciones-tutor">
                        <li><a href="">Contactar</a></li>
                        <li><a href="">Ver más...</a></li>
                    </ul>
                </div>
        </div>

        <div class="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 d-none d-sm-block">
                <div class="tutores">
                    <div class="foto">
                        <img src="assets/img/user4.png" alt="">
                    </div>
                    <div class="contenido-tutor">
                        <h3 class="titulo-tutor">Luisa Rodriguez</h3>
                        <span class="descripcion-tutor">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint tenetur inventore cupiditate deleniti dolores non dolorum atque voluptate quis deserunt debiti</span>
                        <br>
                        <span class="descripcion-tutor"><b>Tutorías en:</b> Ingles, Italiano, Matemáticas.</span>
                        <br>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i><i class="fas fa-star-half"></i>
                    </div>
                    <ul class="opciones-tutor">
                        <li><a href="">Contactar</a></li>
                        <li><a href="">Ver más...</a></li>
                    </ul>
                </div>
        </div>



            `
        );
    }
  });