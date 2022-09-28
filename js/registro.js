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
//clase:
class usuario {
    id = 0;
    nombre = "";
    correo = "";
    password = "";
    constructor (id,nombre,correo,password){
    this.id = id;
    this.nombre = nombre.toUpperCase();
    this.correo = correo;
    this.password = password;
    }
}

btnRegistro.addEventListener("click", function (e) {
    e.preventDefault();

    flag = true;

    let valorNombre = document.getElementById("inputNombre").value;
    let valorCorreo = document.getElementById("inputCorreo").value;
    let valorCont1 = document.getElementById("inputCont1").value;
    let valorCont2 = document.getElementById("inputCont2").value;
 

//Nombre 
    if (valorNombre.length >= 3 && valorNombre.length <= 80 && isNaN(valorNombre)) {
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
let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&_-])[A-Za-z\d$@$!%*?&_-]{8,15}/;
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
if (valorCont2 === valorCont1) {
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
    });

    if(flag2){
    let sendCuerpo = "Bienvenido a Dr. Lomito, tu usuario es: " + valorCorreo+ " y tu contraseña es: " +valorCont1;
    indexUser++;
    usuarios.push(new usuario(indexUser, valorNombre, valorCorreo, valorCont1));
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

    }
}

});