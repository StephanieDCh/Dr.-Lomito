import { usuario, veterinario } from "./classes.js";
let campoNombre = document.getElementById("inputNombre");
let campoCorreo = document.getElementById("inputCorreo");
let campoCont1 = document.getElementById("inputCont1");
let campoCont2 = document.getElementById("inputCont2");
let btnRegistro = document.getElementById("btnRegistro");//Botón
let usuarios = [];
let indexUser = 0;
let alertExito = document.getElementById("alertExito");
let alertError = document.getElementById("alertError");
let vetCheck = document.getElementById("vetCheck");

window.addEventListener("load", function(e){
    e.preventDefault();
    if(localStorage.getItem("users")){
        let savedUsers = JSON.parse(localStorage.getItem("users"));
        usuarios = savedUsers;
        indexUser = usuarios.length;
        }
});

//validación nombre:
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
        btnRegistro.disabled=false;
    }else{
        campoNombre.classList.remove("is-valid");
        campoNombre.classList.add("is-invalid");
    }
    return flag;
}

//validacion de correo, minimo un arroba y un punto.
campoCorreo.addEventListener("keyup", function(e){
    e.preventDefault();
    validarCorreo();
});
function validarCorreo() {
    let flag = false;
    let regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,5})+$/;
    let testCorreo = regex.test(campoCorreo.value);
    if(testCorreo) {
        campoCorreo.classList.remove("is-invalid");
        campoCorreo.classList.add("is-valid");
        flag=true;
        btnRegistro.disabled=false;
    }else{
        campoCorreo.classList.remove("is-valid");
        campoCorreo.classList.add("is-invalid");
    }
    return flag;
}

//Validacion de contraseña
campoCont1.addEventListener("keyup", function (e) {
    e.preventDefault()    
    validarPass();
});
function validarPass() {
    let flag = false;
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?#$&_-])[A-Za-z\d$@$!%*?#&_-]{8,15}$/;
let result = regex.test(campoCont1.value);
if(result){
    campoCont1.classList.remove("is-invalid");
    campoCont1.classList.add("is-valid");
    flag = true;
    btnRegistro.disabled=false;
} 
else {
    campoCont1.classList.remove("is-valid");
    campoCont1.classList.add("is-invalid");
    
    
}
    return flag;
};

//Validacion de confirmacion de contraseña
campoCont2.addEventListener("keyup", function (e) {
    e.preventDefault()    
    validarPassCon();
});
function validarPassCon() {
    let flag = false;
    if(Password.value==campoCont2.value && campoCont2.value.length > 0){
        campoCont2.classList.remove("is-invalid");
        campoCont2.classList.add("is-valid");
        flag = true;
        btnRegistro.disabled=false;
    } 
    else {
        campoCont2.classList.remove("is-valid");
        campoCont2.classList.add("is-invalid");         
    }
    return flag;
};






btnRegistro.addEventListener("click", function (e) {
    e.preventDefault();

    let flag = true;

    let valorNombre = document.getElementById("inputNombre").value;
    let valorCorreo = document.getElementById("inputCorreo").value;
    let valorCont1 = document.getElementById("inputCont1").value;
    let valorCont2 = document.getElementById("inputCont2").value;
 








    

//no tocar
if(flag){

    let flag2 = true    
    usuarios.forEach(e => {
        if(e.correo==valorCorreo){
            flag2 = false;       
        }
    });//pregunta si el correo se ha repetido

    if(flag2){
            if(vetCheck.checked){
                location.href = "http://127.0.0.1:5501/pages/ingresarVet.html"
                localStorage.setItem("nameRegisterVet", valorNombre);
                localStorage.setItem("correoRegisterVet", valorCorreo);
                localStorage.setItem("passRegisterVet", valorCont1);
               
                /* indexUser++;
                usuarios.push(new veterinario("true",indexUser, valorNombre, valorCorreo, valorCont1));
                localStorage.setItem("users", JSON.stringify(usuarios)); */
            }else{
                let sendCuerpo = "Bienvenido a Dr. Lomito, tu usuario es: " + valorCorreo+ " y tu contraseña es: " +valorCont1;
                indexUser++;
                usuarios.push(new usuario("false",indexUser, valorNombre, valorCorreo, valorCont1));
                localStorage.setItem( "users", JSON.stringify(usuarios));
                    
                    alertExito.style.display = "block";
                    setTimeout( ()=>{alertExito.style.display = "none"}, 5000);
            
                    Email.send({
                        Host : "smtp.elasticemail.com",
                        Username : "hola.drlomito@gmail.com",
                        Password : "D2688BAD0F83F061575A92C02049DCD40FEE",
                        To : valorCorreo,
                        From : "hola.drlomito@gmail.com",
                        Subject : "Bienvenido a Dr. Lomito",
                        Body : sendCuerpo
                    })/* .then(
                    message => alert("Correo enviado con éxito")
                    ); */
            }  

    campoNombre.value = "";
    campoCorreo.value = "";
    campoCont1.value = "";
    campoCont2.value = "";
    if(vetCheck.checked){
        vetCheck.click();
    }
    campoNombre.classList.remove("is-valid");
    campoCorreo.classList.remove("is-valid");
    campoCont1.classList.remove("is-valid");
    campoCont2.classList.remove("is-valid");

    }else{
        campoCorreo.classList.add("is-invalid");
        alertError.style.display = "block";
        setTimeout( ()=>{alertError.style.display = "none"}, 5000);

    }//si ya existe el correo envia el alert de que ya existe
}

});
