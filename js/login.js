////////////////////////////////// Animación
function toggleForm(){
    section = document.querySelector("section");
    container = document.querySelector(".container");
    container.classList.toggle("active");
    section.classList.toggle("active");
  }
////////////////////////////////// Login

let campoEmailLog = document.getElementById("emailLog");
let campoPassLog = document.getElementById("passLog");
let btnInicio = document.getElementById("btnInicio");
let alertLogInError = document.getElementById("alertLogInError");
let alertLogInExito = document.getElementById("alertLogInExito");
let flagReady = false;
let listUsuarios = [];


window.addEventListener("load", function (e){
    if(localStorage.getItem("users")){
        let temporal = JSON.parse(localStorage.getItem("users"));
        listUsuarios = temporal;
        console.log(listUsuarios);
        flagReady = true;
    }
})

btnInicio.addEventListener("click", function (e){
e.preventDefault();

emailLog = campoEmailLog.value;
passLog = campoPassLog.value;

let flagInicio = false;

if(flagReady){

    for (let i = 0; i < listUsuarios.length; i++) {
       if(listUsuarios[i].correo == emailLog){
        if(listUsuarios[i].password == passLog){
            flagInicio = true;
            localStorage.setItem("userLogged", i)
            localStorage.setItem("loggedIn", "true")
            break;
        }//verificar usuario y contrasena existan y coincidan
       }        
    }//for para validar todos los usuarios

    if (flagInicio) {  
        console.log("CORRECTO");
        alertLogInExito.style.display = "block";
        setTimeout( ()=>{alertLogInExito.style.display = "none"}, 5000);  
        location.href = "http://127.0.0.1:5501/index.html";
        
    }else{

        console.log("ERROR");
        alertLogInError.style.display = "block";
        setTimeout( ()=>{alertLogInError.style.display = "none"}, 5000);     

        campoEmailLog.value = "";
        campoPassLog.value = "";
        

    }//si el usuario y contrasena existen, se anaden las clases de validacion y se manda a local storage el id del usuario logeado.
}
});

