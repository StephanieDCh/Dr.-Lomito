let campoNombre=document.getElementById("Nombre");
let campoApellido=document.getElementById("Apellido");
let Correo = document.getElementById("Correo");
let tel = document.getElementById("Numero");
let msg = document.getElementById("msgArea");
let btnEnviar = document.getElementById("btnEnviar");
let alertSend = document.getElementById("alertSend");

let flagArroba = false;
let flagPunto = false;
let flagChar = false;

campoNombre.addEventListener("blur",function(e){    
    e.preventDefault();
//solo letras, incluyendo espacios y acentos. 
if(
    (campoNombre.value.length>=3)&&(campoNombre.value.length<=20)    
    ){ //validacion nombre
    campoNombre.classList.remove("is-invalid");
    campoNombre.classList.add("is-valid");
}else{
    campoNombre.classList.remove("is-valid");
    campoNombre.classList.add("is-invalid");
}
//validación caracteres en Nombre
    for (let i = 0; i < campoNombre.value.length; i++) {
        if(
                    
            ((campoNombre.value.toUpperCase().charCodeAt(i)<65)
            || //or
            (campoNombre.value.toUpperCase().charCodeAt(i)>90))

            && ((campoNombre.value.toUpperCase().charCodeAt(i)!=32))
            && ((campoNombre.value.toUpperCase().charCodeAt(i)!=193))
            && ((campoNombre.value.toUpperCase().charCodeAt(i)!=201))
            && ((campoNombre.value.toUpperCase().charCodeAt(i)!=205))
            && ((campoNombre.value.toUpperCase().charCodeAt(i)!=211))
            && ((campoNombre.value.toUpperCase().charCodeAt(i)!=209))      )
        {
            
            campoNombre.classList.remove("is-valid");
            campoNombre.classList.add("is-invalid"); 
            break;
            
        }else{
         
            console.log(campoNombre.value.charAt(i));
        }
    }
});//fin funcion anonima y boton

campoApellido.addEventListener("blur",function(e){    
    e.preventDefault();

if((campoApellido.value.length>=3)&&(campoApellido.value.length<=50)){ //validacion apellido
    campoApellido.classList.remove("is-invalid");
    campoApellido.classList.add("is-valid");
}else{
    campoApellido.classList.remove("is-valid");
    campoApellido.classList.add("is-invalid");
}
//validación caracteres en Apellido
    for (let i = 0; i < campoApellido.value.length; i++) {  

        if(
                      
            ((campoApellido.value.toUpperCase().charCodeAt(i)<65)
            || //or
            (campoApellido.value.toUpperCase().charCodeAt(i)>90))

            && ((campoApellido.value.toUpperCase().charCodeAt(i)!=32))
            && ((campoApellido.value.toUpperCase().charCodeAt(i)!=193))
            && ((campoApellido.value.toUpperCase().charCodeAt(i)!=201))
            && ((campoApellido.value.toUpperCase().charCodeAt(i)!=205))
            && ((campoApellido.value.toUpperCase().charCodeAt(i)!=211))
            && ((campoApellido.value.toUpperCase().charCodeAt(i)!=209))      )
        {
            
            campoApellido.classList.remove("is-valid");
            campoApellido.classList.add("is-invalid"); 
            break;            

        }else{

            console.log(campoApellido.value.charAt(i));
        }
    }
});//fin funcion anonima y boton

//validacion de correo, minimo un arroba y un punto.
Correo.addEventListener("blur", function(e){
    e.preventDefault()
    flagArroba=false;
    flagChar=false;
    flagPunto=false;   

    Correo.classList.remove("is-invalid");
    Correo.classList.add("is-valid");

    if ( (Correo.value.length<3) || (Correo.value.length>70) ){
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
    Correo.classList.remove("is-valid");
    Correo.classList.add("is-invalid");
 }

});
//Validacion de numero
tel.addEventListener("blur", function (e) {
    e.preventDefault()
    
    let telValor = tel.value;

    //validando campo usuario
    if(telValor.length==10 && !isNaN(telValor)){
        tel.classList.remove("is-invalid")
        tel.classList.add("is-valid")

    }else{
        tel.classList.remove("is-valid")
        tel.classList.add("is-invalid")
    }
});
//Validacion mensaje
msg.addEventListener("blur", function (e) {
    e.preventDefault()
    
    let msgValor = msg.value;

    //validando campo usuario
    if(msgValor.length> 0 && msgValor.length<=280){
        msg.classList.remove("is-invalid")
        msg.classList.add("is-valid")

    }else{
        msg.classList.remove("is-valid")
        msg.classList.add("is-invalid")
    }
});
btnEnviar.addEventListener("click", function (e){
    e.preventDefault();

    let sendNombre = campoNombre.value + " " + campoApellido.value;
    let sendCorreo = Correo.value;
    let sendAsunto = "Pregunta-Contacto ";
    let sendCuerpo = "-El correo del usuario es: " + sendCorreo;
    
    sendCuerpo += " -El nombre del usuario es:  " +sendNombre+" -Y su mensaje es: " + msg.value;
   
     if(campoNombre.value!="" && campoApellido.value !="" && Correo.value != "" && msg.value != ""){ 
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
 
});