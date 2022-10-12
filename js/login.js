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
       if(listUsuarios[i].correo == emailLog && emailLog.length > 0){
        if(listUsuarios[i].password == passLog && passLog.length > 0){
            flagInicio = true;
            localStorage.setItem("userLogged", i)
            localStorage.setItem("loggedIn", "true")
            break;
        }//verificar usuario y contrasena existan y coincidan
       }        
    }//for para validar todos los usuarios

    if (flagInicio) {  
        Swal.fire({
            background: '#FFF9E3',
            position: 'center',
            icon: 'success',
            title: '¡Gracias por formar parte de nuestra comunidad!',
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true
            })
        setTimeout( ()=>{location.href = "http://127.0.0.1:5501/index.html";}, 2500);  
        
        
    }else{ 
        Swal.fire({
            background: '#FFF9E3',
            position: 'center',
            icon: 'error',
            title: 'ERROR: Verifique los campos por favor.',
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true
            })
        campoEmailLog.value = "";
        campoPassLog.value = "";
        

    }//si el usuario y contrasena existen, se anaden las clases de validacion y se manda a local storage el id del usuario logeado.
}
});

