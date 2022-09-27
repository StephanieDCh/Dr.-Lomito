let campoNombre = document.getElementById("inputNombre");
let campoCorreo = document.getElementById("inputCorreo");
let campoCont1 = document.getElementById("inputCont1");
let campoCont2 = document.getElementById("inputCont2");
let btnRegistro = document.getElementById("btnRegistro");//Botón


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
let regex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[$@$!%?&_-])([A-Za-z\d$@$!%?&_-]|[^ ]){8,15}/$;
let result = regex.test(campoCont1);
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
    campoCont2.classList.remove("is-valid");
    campoCont2.classList.add("is-invalid");
    flag = false;
}


});