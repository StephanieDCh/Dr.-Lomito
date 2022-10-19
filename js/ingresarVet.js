

import { veterinario } from "../js/classes.js";
let btnAgregar = document.getElementById("btnAgregar");
let campoNombre = document.getElementById("inputNombre"); //trae valor string
let campoEspecialidad = document.getElementById("inputEspecialidad"); //ya
let campoDescripcion = document.getElementById("inputDescripcion");//ya
let campoServicios = document.getElementById("inputServicios"); //ya
let campoDireccion = document.getElementById("inputDireccion"); //ya 
let campoConsulta = document.getElementById("inputConsulta");//ya  
let campoCorreo = document.getElementById("inputCorreo");//ya
let campoTelLocal = document.getElementById("inputTelLocal");//ya
let campoTelPersonal = document.getElementById("inputTelPersonal");//ya
let campoHoraIni = document.getElementById("inputHoraIni"); //ya
let campoHoraCie = document.getElementById("inputHoraCie");//ya
let campoCategoria = document.getElementById("listCat");
let campo247 = document.getElementById("input247");

let listVetsAdd = [];
let imagenTemp = "../src/veterinarios/vet17.jpg"; 
let puntuacionTemp = 5;
let indexVets = 0;
let passVet = "";//Aquí guardamos la contrasena ingresada por el usuario en la pagina de registro

window.addEventListener("load", function(e){
    if(localStorage.getItem("nameRegisterVet") && localStorage.getItem("correoRegisterVet") && localStorage.getItem("passRegisterVet")){
        campoNombre.value = localStorage.getItem("nameRegisterVet");
        campoCorreo.value = localStorage.getItem("correoRegisterVet");
        passVet = localStorage.getItem("passRegisterVet");
    }
})

//validar nombre
campoNombre.addEventListener("keyup", function (e) {
    e.preventDefault();
    validarNombre();
})
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

//validar correo
campoCorreo.addEventListener("keyup", function (e) {
    e.preventDefault();
    validarCorreo();
})
function validarCorreo(){
let flag = false;
let regex = /^\w+([.-_+]?\w+)@\w+([.-]?\w+)(\.\w{2,5})+$/;
let testCorreo = regex.test(campoCorreo.value);
if(testCorreo) {
    campoCorreo.classList.remove("is-invalid");
    campoCorreo.classList.add("is-valid");
    flag=true;
}else{
    campoCorreo.classList.remove("is-valid");
    campoCorreo.classList.add("is-invalid");
}
return flag;
}
//validar categoria  
campoCategoria.addEventListener("click", function (e) {
    e.preventDefault();
    validarCategoria();
})
function validarCategoria(){
    let flag = false;
    if (campoCategoria.selectedIndex != 0) {
        campoCategoria.classList.remove("is-invalid");
        campoCategoria.classList.add("is-valid");
        flag = true;
    } else {
        campoCategoria.classList.remove("is-valid");
        campoCategoria.classList.add("is-invalid");
    } 
    return flag;
}
//validar especialidad
campoEspecialidad.addEventListener("keyup", function (e) {
    e.preventDefault();
    validarEspecialidad();
})
function validarEspecialidad(){
    let flag = false;
    let valorEspecialidad = campoEspecialidad.value;
    if (valorEspecialidad.length >= 5 && valorEspecialidad.length <=100 && isNaN(valorEspecialidad)) {
        campoEspecialidad.classList.remove("is-invalid");
        campoEspecialidad.classList.add("is-valid");
        flag = true;
    }
    else {
        campoEspecialidad.classList.remove("is-valid");
        campoEspecialidad.classList.add("is-invalid");
    }
    return flag;
}
//validar consulta
campoConsulta.addEventListener("keyup", function (e) {
    e.preventDefault();
   validarConsulta();
})
function validarConsulta(){
    let flag = false;
    let regex = /^[0-9]{1,4}\.[0-9]{2}$/;
    let testCostoConsulta = regex.test(campoConsulta.value);   
    if (testCostoConsulta) {
        campoConsulta.classList.remove("is-invalid");
        campoConsulta.classList.add("is-valid");
        flag = true;
    } else {
        campoConsulta.classList.remove("is-valid");
        campoConsulta.classList.add("is-invalid");
    }
    return flag;
}

//validar direccion
campoDireccion.addEventListener("keyup", function (e) {
    e.preventDefault();
    validarDireccion();
})
function validarDireccion(){
    let flag = false;
    let valorDireccion = campoDireccion.value;
    if (valorDireccion.length >= 6 && valorDireccion.length <= 100 && isNaN(valorDireccion)) {
        campoDireccion.classList.remove("is-invalid");
        campoDireccion.classList.add("is-valid");
        flag = true;
    } else {
        campoDireccion.classList.remove("is-valid");
        campoDireccion.classList.add("is-invalid");
    }
    return flag;
}
//validar descripción
campoDescripcion.addEventListener("keyup", function (e) {
    e.preventDefault();
    validarDescripcion();
})
function validarDescripcion(){
    let flag = false;
    let valorDescripcion = campoDescripcion.value;
    if ((valorDescripcion.length >= 5 && valorDescripcion.length <=700) && isNaN(valorDescripcion)) {
        campoDescripcion.classList.remove("is-invalid");
        campoDescripcion.classList.add("is-valid");
        flag = true;
    } else {
        campoDescripcion.classList.remove("is-valid");
        campoDescripcion.classList.add("is-invalid");
    }
    return flag;
}

//validar servicio
campoServicios.addEventListener("keyup", function (e) {
    e.preventDefault();
    validarServicios();
})
function validarServicios(){
    let flag = false;
    let valorServicios = campoServicios.value;
    if (valorServicios.length >= 5  && valorServicios.length <= 300 && isNaN(valorServicios)) {
        campoServicios.classList.remove("is-invalid");
        campoServicios.classList.add("is-valid");
        flag = true;
    } else {
        campoServicios.classList.remove("is-valid");
        campoServicios.classList.add("is-invalid");
    }
    return flag;
}

//validar telefono local
campoTelLocal.addEventListener("keyup", function (e) {
e.preventDefault();
validarTelLocal();
})
function validarTelLocal() {
    let flag = false;
    let telValor = campoTelLocal.value;
    let regex = /^[\d]{10}$/;
    let testTel = regex.test(telValor);
    //validando campo usuario
    if(testTel){
        campoTelLocal.classList.remove("is-invalid");
        campoTelLocal.classList.add("is-valid");
        flag=true;
    }else{
        campoTelLocal.classList.remove("is-valid");
        campoTelLocal.classList.add("is-invalid");
    }
    return flag;
};

//validar telefono personal
campoTelPersonal.addEventListener("keyup", function (e) {
e.preventDefault();
validarTelPersonal();
})
function validarTelPersonal(){
    let flag = false;
    let telPerValor = campoTelPersonal.value;
    let regex = /^[\d]{10}$/;
    let testTelPer = regex.test(telPerValor);   
    if(testTelPer){
        campoTelPersonal.classList.remove("is-invalid");
        campoTelPersonal.classList.add("is-valid");
        flag=true;
    }else{
        campoTelPersonal.classList.remove("is-valid");
        campoTelPersonal.classList.add("is-invalid");
    }
    return flag;
};

//validar hora de inicio
campoHoraIni.addEventListener("keyup", function (e) {
e.preventDefault();
validarHoraIni();
})
function validarHoraIni(){
let flag = false;
let valorHoraIni = campoHoraIni.value;
if (valorHoraIni.length <= 2 && valorHoraIni.length >= 1 && valorHoraIni >= 0 && valorHoraIni <=24 && !valorHoraIni.includes(" ")){
    campoHoraIni.classList.remove("is-invalid");
    campoHoraIni.classList.add("is-valid");
    flag = true;
}
else {
    campoHoraIni.classList.remove("is-valid");
    campoHoraIni.classList.add("is-invalid");
}
return flag;
}

//validar hora de cierre
campoHoraCie.addEventListener("keyup", function (e) {
e.preventDefault();
validarHoraCie();
})
function validarHoraCie(){
let flag = false;
let valorHoraCie = campoHoraCie.value;
if (valorHoraCie.length <= 2 && valorHoraCie.length >= 1 && valorHoraCie >= 0 && valorHoraCie <=24 && !(valorHoraCie.includes(" "))) {
    campoHoraCie.classList.remove("is-invalid");
    campoHoraCie.classList.add("is-valid");
    flag = true;
}
else {
    campoHoraCie.classList.remove("is-valid");
    campoHoraCie.classList.add("is-invalid");
}
return flag;
}




btnAgregar.addEventListener("click", function (e) {
    e.preventDefault();    
    let categoria = campoCategoria.options[campoCategoria.selectedIndex].value;
    //let categoria = campoCategoria.option[campoCategoria.selectedIndex].value;
    
    if(validarNombre() && validarEspecialidad() && validarDescripcion() && validarCategoria()&& validarServicios() && validarDireccion()
    && validarConsulta() && validarTelLocal() && validarTelPersonal() && validarHoraIni() && validarHoraCie() && validarCorreo()){
       
        if(localStorage.getItem("users")){

            let savedVets = JSON.parse(localStorage.getItem("users"));
            listVetsAdd = savedVets;
            indexVets = listVetsAdd.length;
            console.log(listVetsAdd);
        }
            indexVets++;
            // (new veterinario("true", "1", 'Juan Pérez', 'josue.chavezlom0eli@gmail.com', "Batman33!", "vetG", '../src/veterinarios/vet5.jpg', 'Veterinario general',5 , 'Especialista en Medicina y Cirugía en Perros y Gatos', 'Calle Lázaro Cárdenas #204', '33 3852-7890', '33 7865-7890', 600, 'Estética Canina $250 mxn', '7am', '8pm', 'true'))
            listVetsAdd.push(new veterinario("true", indexVets, campoNombre.value ,campoCorreo.value, passVet, categoria , imagenTemp,  campoEspecialidad.value, puntuacionTemp, campoDescripcion.value,  campoDireccion.value, campoTelLocal.value, campoTelPersonal.value,  campoConsulta.value, campoServicios.value, campoHoraIni.value ,campoHoraCie.value, campo247.checked,"../pages/doctorVerMas.html"));
            console.log(listVetsAdd);
            localStorage.setItem("users", JSON.stringify(listVetsAdd));

            let sendCuerpo = "Bienvenido a Dr. Lomito, tu usuario es: " + campoCorreo.value+ " y tu contraseña es: " +passVet;
            Email.send({
                Host : "smtp.elasticemail.com",
                Username : "hola.drlomito@gmail.com",
                Password : "D2688BAD0F83F061575A92C02049DCD40FEE",
                To : campoCorreo.value,
                From : "hola.drlomito@gmail.com",
                Subject : "Bienvenido a Dr. Lomito",
                Body : sendCuerpo
            }).then(
                Swal.fire({
                    background: '#FFF9E3',
                    position: 'center',
                    icon: 'success',
                    title: 'Bienvenido a Dr. Lomito, se le envió un correo con su usuario y contraseña',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true
                    })
            );                
                
                setTimeout( ()=>{    
                    campoNombre.value = localStorage.removeItem("nameRegisterVet");
                    campoCorreo.value = localStorage.removeItem("correoRegisterVet");
                    passVet = localStorage.removeItem("passRegisterVet");            
                    location.href = "http://127.0.0.1:5501/pages/logIn.html";
            }, 3000);
        
       
        
    }else{
        validarNombre() ; validarEspecialidad() ; validarDescripcion() ; validarServicios() ; validarDireccion();
     validarConsulta() ; validarTelLocal() ; validarTelPersonal() ; validarHoraIni() ; validarHoraCie() ; validarCorreo()
     Swal.fire({
        background: '#FFF9E3',
        position: 'center',
        icon: 'error',
        title: 'ERROR: Verifique los campos por favor',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true
      })
    }
    
       
})