function validateForm(){
	 /* Escribe tú código aquí */
      var name = document.getElementById("name").value;
      var nameError = document.getElementById("nameError");
      var lastname = document.getElementById("lastname").value;
      var lastnameError = document.getElementById("lastnameError");
      var email= document.getElementById("input-email").value;
      var emailError = document.getElementById("emailError");
      var tipobici= document.getElementById("tipobici").selectedIndex;
      var tipobiciError = document.getElementById("tipobiciError");
      var password= document.getElementById("input-password").value;
      var passwordError = document.getElementById("passwordError");
      var form1 = document.getElementsByName("form1")[0];
      var camposO = document.getElementsByClassName("form-span")


      if (name.length == 0 || lastname.length == 0 || email.length ==0 || password.length == 0){
        alert ("Ingresa tus datos en todos los campos obligatorios");
        return false;
      }
      if (name.length != 0 && lastname.length != 0 && email.length !=0 && password.length != 0){
        if(tipobici == 0 ) {
          tipobiciError.innerHTML = "Selecciona tu tipo de Bici";
          alert ("Selecciona tu tipo de Bici");
          return false;
        }else{
          tipobiciError.innerHTML = "";
        }
      }
      if(!(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(name))) {
        nameError.innerHTML = "Utilice solo letras (el primer caracter debe ser mayúscula)";
        document.getElementById("name").value="";
        document.getElementById("name").focus();
        alert ("Ingresa un nombre válido");
        return false;
      }else{
        nameError.innerHTML = "";
      }

      if(!(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(lastname))) {
        lastnameError.innerHTML = "Utilice solo letras (el primer caracter debe ser mayúscula)";
        document.getElementById("lastname").value="";
        document.getElementById("lastname").focus();
        alert ("Ingresa un apellido válido");
        return false;
      }else{
        lastnameError.innerHTML = "";
      }

      if(!(/^[\w]+@{1}[\w]+\.+[a-z]{2,3}$/.test(email))) {
        emailError.innerHTML = "Ingrese un correo válido. Ejem: rosa.perez@gmail.com";
        document.getElementById("input-email").value="";
        document.getElementById("input-email").focus();
        alert ("Ingresa un email válido");
        return false;
      }else{
        emailError.innerHTML = "";
      }

      if(password.length < 6 ) {
        passwordError.innerHTML = "Ingresa un password con al menos 6 caracteres";
        document.getElementById("input-password").value="";
        document.getElementById("input-password").focus();
        alert ("Ingresa un password válido");
        return false;
      }else{
        passwordError.innerHTML = "";
      }

      if(password.toLowerCase() =="password" || password=="123456" || password =="098754") {
        document.getElementById("input-password").value="";
        document.getElementById("input-password").focus();
        passwordError.innerHTML = 'Contraseña segura es diferente a: "password", "123456", "098754 "';
        alert ("Ingresa una contraseña segura");
        return false;
      }else{
        passwordError.innerHTML = "";
      }

      form1.reset();
      alert ("Gracias. Sus Datos han sido ingresados correctamente");
      for (var i = 0; i < camposO.length; i++) {
        camposO[i].innerHTML ="(*)Campo Obligatorio.";
      }
      return false;
}
