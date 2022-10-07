let Nombre=document.getElementById("Nombre");
let Correo = document.getElementById("Email");
let Contrasena = document.getElementById("Password");
let PasswordCon = document.getElementById("PasswordCon");
let checkVet = document.getElementById("inlineCheckbox2");
let checkUsu = document.getElementById("inlineCheckbox3");

let btnEnviar = document.getElementById("btnEnviar");
let alertSend = document.getElementById("alertSend");

let flagArroba = false;
let flagPunto = false;
let flagChar = false;


let flagPasCon = false;
let flagPass = false;
let flagCorr = false;
let flagApe = false;
let flagNom = false;

Nombre.addEventListener("blur",function(e){    
    e.preventDefault();
    //solo letras, incluyendo espacios y acentos. 
    if(
        (Nombre.value.length>=10)&&(Nombre.value.length<=50)    
        ){ //validacion nombre
        flagNom = true;
        Nombre.classList.remove("is-invalid");
        Nombre.classList.add("is-valid");
    }else{
        flagNom = false;
        Nombre.classList.remove("is-valid");
        Nombre.classList.add("is-invalid");
    }

    //validación caracteres en Nombre
    for (let i = 0; i < Nombre.value.length; i++) {
        if(
                    
            ((Nombre.value.toUpperCase().charCodeAt(i)<65)
            || //or
            (Nombre.value.toUpperCase().charCodeAt(i)>90))

            && ((Nombre.value.toUpperCase().charCodeAt(i)!=32))
            && ((Nombre.value.toUpperCase().charCodeAt(i)!=193))
            && ((Nombre.value.toUpperCase().charCodeAt(i)!=201))
            && ((Nombre.value.toUpperCase().charCodeAt(i)!=205))
            && ((Nombre.value.toUpperCase().charCodeAt(i)!=211))
            && ((Nombre.value.toUpperCase().charCodeAt(i)!=209))      )
        {
            flagNom = false;
            Nombre.classList.remove("is-valid");
            Nombre.classList.add("is-invalid"); 
            break;
            
        }else{
         
            console.log(Nombre.value.charAt(i));
        }
    }
});//fin funcion anonima y boton



//validacion de correo, minimo un arroba y un punto.
Correo.addEventListener("blur", function(e){
    e.preventDefault()
    flagArroba=false;
    flagChar=false;
    flagPunto=false;   

    flagCorr = true;
    Correo.classList.remove("is-invalid");
    Correo.classList.add("is-valid");

    if ( (Correo.value.length<3) || (Correo.value.length>70) ){
        flagCorr = false;
        Correo.classList.remove("is-valid");
        Correo.classList.add("is-invalid");
    }//if

    for (let i = 0; i < Correo.value.length; i++) {

    if(Correo.value.charCodeAt(i)==64 && flagArroba ==false){
        flagArroba= true;        
    }if (Correo.value.charCodeAt(i)==46 && flagPunto ==false){
        flagPunto=true;
    }

    if(  (
             ( Correo.value.toLowerCase().charCodeAt(i)<97)
             ||
             (Correo.value.toLowerCase().charCodeAt(i)>122)
        )
        && ((Correo.value.toLowerCase().charCodeAt(i)!=32) ) // espacio
        && ((Correo.value.toLowerCase().charCodeAt(i)!=193) ) // Á
        && ((Correo.value.toLowerCase().charCodeAt(i)!=201) ) // É
        && ((Correo.value.toLowerCase().charCodeAt(i)!=205) ) // Í
        && ((Correo.value.toLowerCase().charCodeAt(i)!=211) ) // Ó
        && ((Correo.value.toLowerCase().charCodeAt(i)!=218) ) // Ú
        && ((Correo.value.toLowerCase().charCodeAt(i)!=209) ) // Ñ
        && ((Correo.value.toLowerCase().charCodeAt(i)!=64) )//@
        && ((Correo.value.toLowerCase().charCodeAt(i)!=46) )// .
   ) {      
        flagChar=true;
        break;
   }//if 
}; 

if(flagArroba==false || flagPunto==false || flagChar==true)
 {
    flagCorr = false;
    Correo.classList.remove("is-valid");
    Correo.classList.add("is-invalid");
 }

});
//Validacion de numero

Contrasena.addEventListener("blur", function (e) {
    e.preventDefault()
    
    let PasswordValor = Contrasena.value;

    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?#$&_-])[A-Za-z\d$@$!%*?#&_-]{8,15}/;
    let result = regex.test(PasswordValor);
    if(result){
        Contrasena.classList.remove("is-invalid");
        Contrasena.classList.add("is-valid");
        flagPasCon = true;
    } 
    else {
        Contrasena.classList.remove("is-valid");
        Contrasena.classList.add("is-invalid");
        flagPasCon = false;
    }

})


PasswordCon.addEventListener("blur", function (e) {
    e.preventDefault()

    PasswordConValor = PasswordCon.value;

    if ((PasswordValor === PasswordConValor) && PasswordConValor != "") {
        PasswordCon.classList.remove("is-invalid");
        PasswordCon.classList.add("is-valid");
        flagPasCon = true;
    } 
    else {
        PasswordCon.classList.remove("is-valid");
        PasswordCon.classList.add("is-invalid");
        flagPasCon = false;
    }
})

    if (checkVet.checked) {
        checkUsu.classList.remove("disabled");
        checkUsu.classList.add("disabled");
    }else if(checkUsu.checked){
        checkVet.classList.remove("disabled");
        checkVet.classList.add("disabled");
    }


btnEnviar.addEventListener("click", function (e){
    e.preventDefault();

    let sendNombre = campoNombre.value + " " + campoApellido.value;
    let sendCorreo = Correo.value;
    let sendAsunto = "Pregunta-Contacto ";
    let sendCuerpo = "-El correo del usuario es: " + sendCorreo;
    
    sendCuerpo += " -El nombre del usuario es:  " +sendNombre+" -Y su mensaje es: " + msg.value;
   
     if(
        (campoNombre.value!="" && campoApellido.value !="" && Correo.value != "" && msg.value != "")
        &&
        (flagMsg && flagTel && flagCorr && flagApe && flagNom)
        ){ 
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "hola.drlomito@gmail.com",
            Password : "D2688BAD0F83F061575A92C02049DCD40FEE",
            To : "hola.drlomito@gmail.com",
            From : "hola.drlomito@gmail.com",
            Subject : sendAsunto,
            Body : sendCuerpo
        }).then(
          message => alert("Correo enviado con éxito")
        );
    }else{
        alertSend.style.display = "block";
        setTimeout( ()=>{alertSend.style.display = "none"}, 5000);
  }    
 
})