
(function ($) {
    "use strict";


    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
  
  
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    

})(jQuery);

$("#boton-registrarse").click(function(){
	
        var parametros = 
                    "nombre=" + $("#nombre").val() + "&" +
					 "nombreUsuario="+$("#nombreUsuario").val() + "&"+
                     "correo="+$("#email").val()+ "&"+
                     "contrasena="+$("#pass").val() + "&"+    
                     "genero="+$('select[name=selectSexo]').val() + "&"+         
                     "tipoUsuario=" +$('input:radio[name=optGenero]:checked').val();
        $.ajax({
            url:"/registrar-usuario",
            method:"POST",
            data:parametros,
            dataType:"json",
            success:function(response){
                if(response.estatus == 1){
                    $('#cuenta-existente').modal('show');
                    // /glint/Sigin/dashboard.html
                    ///glint/dashboard.html
                       
                    
                }else{
                    $('#registro-exitoso').modal('show');
                    
                                    
                }
                
            }
        });
});

$("#btnCuentaRegistrada").click(function(){
    window.location.href ="/glint/index.html";
});

