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


btnRegistro.addEventListener("click", function (e) {
    e.preventDefault();

    let flag = true;

    let valorNombre = document.getElementById("inputNombre").value;
    let valorCorreo = document.getElementById("inputCorreo").value;
    let valorCont1 = document.getElementById("inputCont1").value;
    let valorCont2 = document.getElementById("inputCont2").value;
 

//Nombre 
for (let index = 0; index < valorNombre.length; index++) {

      if(!isNaN(valorNombre.charAt(index)) && valorNombre.charAt(index)!= " "){
        flag = false;
        
      }

    }
    console.log(flag);
   
    if (valorNombre.length >= 3 && valorNombre.length <= 80 && flag == true) {
        campoNombre.classList.remove("is-invalid");
         campoNombre.classList.add("is-valid");
        } 
    else {
        campoNombre.classList.remove("is-valid");
        campoNombre.classList.add("is-invalid");
        flag = false;
        }
        



//Correo
if ((valorCorreo.includes("@","")) && (valorCorreo.includes("."))) {
    campoCorreo.classList.remove("is-invalid");
    campoCorreo.classList.add("is-valid");
} 
else {
    campoCorreo.classList.remove("is-valid");
    campoCorreo.classList.add("is-invalid");
    flag = false;
}

//Cont1
let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?#$&_-])[A-Za-z\d$@$!%*?#&_-]{8,15}/;
let result = regex.test(valorCont1);
if(result){
    campoCont1.classList.remove("is-invalid");
    campoCont1.classList.add("is-valid");
    
} 
else {
    campoCont1.classList.remove("is-valid");
    campoCont1.classList.add("is-invalid");
    flag = false;
    
}
    
//Cont2
if (valorCont2 === valorCont1 && valorCont2 != "") {
    campoCont2.classList.remove("is-invalid");
    campoCont2.classList.add("is-valid");
} 
else {
    campoCont1.classList.remove("is-valid");
    campoCont1.classList.add("is-invalid");
    campoCont2.classList.remove("is-valid");
    campoCont2.classList.add("is-invalid");
    flag = false;
}

if(flag){

    let flag2 = true    
    usuarios.forEach(e => {
        if(e.correo==valorCorreo){
            flag2 = false;       
        }
    });//pregunta si el correo se ha repetido

    if(flag2){
            if(vetCheck.checked){
                location.href = "http://127.0.0.1:5501/pages/perfilUsuario.html"
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
