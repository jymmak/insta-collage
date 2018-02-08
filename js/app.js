$(document).ready(()=>{
  var $email = $('#input2');
  var $password = $('#input1');

//Variables booleanas
  var validateEmail = false;
  var validatePassword = false;

//función para desactivar la propiedad disabled
  function activeButton() {
    if (validateEmail && validatePassword) {
      $('#btnNext').prop('disabled', false);
    }
  }

//función para activar o mantener la propiedad disabled
  function desactiveButton() {
    $('#btnNext').prop('disabled', true);
  }

//Vallidación del email
  $email.on('input', function() {
    var REGEXEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    if (REGEXEMAIL.test($(this).val())) {
      validateEmail = true;
      activeButton();
    } else {
      desactiveButton();
    };
  });

//Validación de la contraseña: que sea mayor o igual a 6 carácteres y diferente de 123456
  $password.on('input', function() {
    if ($(this).val().length >= 6 && $(this).val() !== '123456') {
      validatePassword = true;
      activeButton();
    }
  });

  //Evento para redireccionar al collage de imágenes
  $('#btnNext').on('click', function() {
    window.location.href = 'views/d&d.html';
  });

});
