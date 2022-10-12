let campoNombre=document.getElementById("Nombre");
let Correo = document.getElementById("Correo");
let tel = document.getElementById("Numero");
let msg = document.getElementById("msgArea");
let btnEnviar = document.getElementById("btnEnviar");
let alertSend = document.getElementById("alertSend");
let alertYes = document.getElementById("alertYes");
let form = document.getElementById("formulario");


//Validar Nombre
campoNombre.addEventListener("keyup",function(e){    
    e.preventDefault();
    validarNombre();
});
function validarNombre(){
    let flag = false;
    let regex = /^[\sA-Záéíóú']{3,50}$/i;
    let testNombre = regex.test(campoNombre.value);

    if(testNombre && isNaN(campoNombre.value)){
        campoNombre.classList.remove("is-invalid");
        campoNombre.classList.add("is-valid");
        flag=true;
    }else{
        campoNombre.classList.remove("is-valid");
        campoNombre.classList.add("is-invalid");
    }
    return flag;
}
//validacion de correo, minimo un arroba y un punto.
Correo.addEventListener("keyup", function(e){
    e.preventDefault();
    validarCorreo();
});
function validarCorreo() {
    let flag = false;
    let regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,5})+$/;
    let testCorreo = regex.test(Correo.value);
    if(testCorreo) {
        Correo.classList.remove("is-invalid");
        Correo.classList.add("is-valid");
        flag=true;
    }else{
        Correo.classList.remove("is-valid");
        Correo.classList.add("is-invalid");
    }
    return flag;
}
//Validacion de numero
tel.addEventListener("keyup", function (e) {
    e.preventDefault()    
    validarTel();
});
function validarTel() {
    let flag = false;
    let telValor = tel.value;
    let regex = /^[\d]{10}$/;
    let testTel = regex.test(telValor);
    //validando campo usuario
    if(testTel){
        tel.classList.remove("is-invalid");
        tel.classList.add("is-valid");
        flag=true;
    }else{
        tel.classList.remove("is-valid");
        tel.classList.add("is-invalid");
    }
    return flag;
};
//Validacion mensaje
msg.addEventListener("keyup", function (e) {
    e.preventDefault();    
    validarMsg();
});
function validarMsg() {
    let flag = false;
    let msgValor = msg.value;  
    if(msgValor.length > 5 && msgValor.length<=280 && isNaN(msgValor)){
        msg.classList.remove("is-invalid");
        msg.classList.add("is-valid");
        flag=true;
    }else{
        msg.classList.remove("is-valid");
        msg.classList.add("is-invalid");
    };
    return flag;
};
btnEnviar.addEventListener("click", function (e){
    e.preventDefault();
    
    if(validarNombre() && validarCorreo() && validarTel() && validarMsg()){
    
   
    let sendNombre = campoNombre.value;
    let sendCorreo = Correo.value;
    let sendAsunto = "Pregunta-Contacto ";
    let sendCuerpo = "-El correo del usuario es: " + sendCorreo;
    
    sendCuerpo += " -El nombre del usuario es:  " +sendNombre+" -Y su mensaje es: " + msg.value;
   
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "hola.drlomito@gmail.com",
        Password : "D2688BAD0F83F061575A92C02049DCD40FEE",
        To : "hola.drlomito@gmail.com",
        From : "hola.drlomito@gmail.com",
        Subject : sendAsunto,
        Body : sendCuerpo
      }).then(
        Swal.fire({
            background: '#FFF9E3',
            position: 'center',
            icon: 'success',
            title: 'Gracias por tus comentarios, pronto estaremos en contacto contigo.',
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true
            })
        );
        setTimeout(() => {
            campoNombre.value = "";
            Correo.value = "";
            tel.value = "";
            msg.value = "";
            campoNombre.classList.remove("is-valid");
            Correo.classList.remove("is-valid");
            tel.classList.remove("is-valid");
            msg.classList.remove("is-valid");            
        }, 2500);
       

    }else{
    validarNombre();
    validarCorreo();
    validarTel();
    validarMsg();
    Swal.fire({
        background: '#FFF9E3',
        position: 'center',
        icon: 'error',
        title: 'ERROR: Verifique los campos por favor.',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true
      })
    }
})

