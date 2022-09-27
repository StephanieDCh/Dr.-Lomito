    let btnAgregar = document.getElementById("btnAgregar");

    let campoNombre = document.getElementById("inputNombre"); //trae valor string
    let campoApellido = document.getElementById("inputApellido"); // ya
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
   

let listVetsAdd = [];
let flag= true;
let imagenTemp = "../src/9.png"; 
let puntuacionTemp = "5 estrellas";
let indexVets = 0;

class veterinario{
    id = 0;
    categoria = "";
    img = "";
    nombre = "";
    especialidad = "";
    calificacion = "";
    descripcion = "";
    direccion = "";
    telLocal1 = 0;
    telPersonal = 0;      
    correo = 0;
    costoConsulta = 0;
    servicios = "";
    horAteIni = 0;
    horaAteCierre = 0;
    urgencia24_7 = false;
    verMas = "../pages/doctorVerMas.html" ;
   
   

    constructor (id, categoria, img, nombre, especialidad, calificacion, descripcion, direccion, telLocal1, telPersonal, correo, costoConsulta, servicios, horAteIni, horaAteCierre, urgencia24_7, verMas){
       this.id = id;
        this.categoria = categoria;
        this.img = img;
        this.nombre = nombre;   
        this.especialidad = especialidad;
        this.calificacion = calificacion;
        this.descripcion = descripcion;
        this.direccion = direccion;
        this.telLocal1 = telLocal1;
        this.telPersonal = telPersonal;
        this.correo = correo;
        this.costoConsulta = costoConsulta;
        this.servicios = servicios;
        this.horAteIni = horAteIni;
        this.horaAteCierre = horaAteCierre;
        this.urgencia24_7 = urgencia24_7;
        this.verMas = verMas;


       
    } //constructor
    

}//class veterinario


btnAgregar.addEventListener("click", function (e) {
    e.preventDefault();

    flag = true;

    
    let valorNombre = document.getElementById("inputNombre").value; //trae valor string
    let valorApellido = document.getElementById("inputApellido").value; // ya
    let valorEspecialidad = document.getElementById("inputEspecialidad").value; //ya
    let campoCategoria = document.getElementById("listCat");
    let cat = campoCategoria.options[campoCategoria.selectedIndex].value;
    
    
    let valorDescripcion = document.getElementById("inputDescripcion").value;//ya
    let valorServicios = document.getElementById("inputServicios").value; //ya
    let valorDireccion = document.getElementById("inputDireccion").value; //ya 
    let valorConsulta = parseInt(document.getElementById("inputConsulta").value);//ya  

    let valorCorreo = document.getElementById("inputCorreo").value;//ya
    let valorTelLocal = document.getElementById("inputTelLocal").value;//ya
    let valorTelPersonal = document.getElementById("inputTelPersonal").value;//ya

    let valorHoraIni = document.getElementById("inputHoraIni").value; //ya
    let valorHoraCie = document.getElementById("inputHoraCie").value;//ya
    let campo247 = document.getElementById("input247");//ya

//campo nombre
    if (valorNombre.length >= 3 && valorNombre.length <= 20 && isNaN(valorNombre))  { //se cumple la condición
        campoNombre.classList.remove("is-invalid");
        campoNombre.classList.add("is-valid");

    } else { //falla la condición
        campoNombre.classList.remove("is-valid");
        campoNombre.classList.add("is-invalid");
        flag = false;
    }//else

    //Apellido
    if (valorApellido.length >= 3 && valorApellido.length <= 50 && isNaN(valorApellido)) {
        campoApellido.classList.remove("is-invalid");
        campoApellido.classList.add("is-valid");

    } else {
        campoApellido.classList.remove("is-valid");
        campoApellido.classList.add("is-invalid");
        flag = false;

    }//else
    
    //Especialidad
    if (valorEspecialidad.length >= 5 && valorEspecialidad.length <=150 && isNaN(valorEspecialidad)) {
        campoEspecialidad.classList.remove("is-invalid");
        campoEspecialidad.classList.add("is-valid");
    }
    else {
        campoEspecialidad.classList.remove("is-valid");
        campoEspecialidad.classList.add("is-invalid");
        flag = false;
    }

    //categoria
    if (campoCategoria.selectedIndex != 0) {
        campoCategoria.classList.remove("is-invalid");
        campoCategoria.classList.add("is-valid");

    } else {

        campoCategoria.classList.remove("is-valid");
        campoCategoria.classList.add("is-invalid");
        flag = false;

    }  

    //descripcion
    if (valorDescripcion.length >= 5 && valorDescripcion.length <=300 && isNaN(valorDescripcion)) {
        campoDescripcion.classList.remove("is-invalid");
        campoDescripcion.classList.add("is-valid");

    } else {
        campoDescripcion.classList.remove("is-valid");
        campoDescripcion.classList.add("is-invalid");
        flag = false;
    }
    
    //Servicios
    if (valorServicios.length >= 6 && valorServicios.length <= 300 && isNaN(valorServicios)) {
        campoServicios.classList.remove("is-invalid");
        campoServicios.classList.add("is-valid");

    } else {
        campoServicios.classList.remove("is-valid");
        campoServicios.classList.add("is-invalid");
        flag = false;
    }

    //direccion
    if (valorDireccion.length >= 6 && valorDireccion.length <= 150 && isNaN(valorDireccion)) {
        campoDireccion.classList.remove("is-invalid");
        campoDireccion.classList.add("is-valid");
    } else {
        campoDireccion.classList.remove("is-valid");
        campoDireccion.classList.add("is-invalid");
        flag = false;
    }

    //consulta    
    if (!isNaN(valorConsulta)) {
        campoConsulta.classList.remove("is-invalid");
        campoConsulta.classList.add("is-valid");
    } else {
        campoConsulta.classList.remove("is-valid");
        campoConsulta.classList.add("is-invalid");
        flag = false;
    }

    //correo
    if ((valorCorreo.includes("@")) && (valorCorreo.includes(".com"))) {
        campoCorreo.classList.remove("is-invalid");
        campoCorreo.classList.add("is-valid");

    } else {
        campoCorreo.classList.remove("is-valid");
        campoCorreo.classList.add("is-invalid");
        flag = false;
    }    

    //teléfono local
        if (valorTelLocal.length == 10 && !isNaN(valorTelLocal)) {
        campoTelLocal.classList.remove("is-invalid");
        campoTelLocal.classList.add("is-valid");
    }
    else {
        campoTelLocal.classList.remove("is-valid");
        campoTelLocal.classList.add("is-invalid");
        flag = false;
    }

    //campoTelPersonal 
    if (valorTelPersonal.length == 10 && !isNaN(valorTelPersonal)) {
        campoTelPersonal.classList.remove("is-invalid");
        campoTelPersonal.classList.add("is-valid");
    }
    else {
        campoTelPersonal.classList.remove("is-valid");
        campoTelPersonal.classList.add("is-invalid");
        flag = false;
    }

    //campoHoraIni
    if (valorHoraIni.length <= 2 && valorHoraIni.length >= 1 && valorHoraIni >= 0 && valorHoraIni <=24 && !isNaN(valorHoraIni)){
        campoHoraIni.classList.remove("is-invalid");
        campoHoraIni.classList.add("is-valid");
    }
    else {
        campoHoraIni.classList.remove("is-valid");
        campoHoraIni.classList.add("is-invalid");
        flag = false;
    }
    
    //campoHoraCie   
    if (valorHoraCie.length <= 2 && valorHoraCie.length >= 1 && valorHoraCie >= 0 && valorHoraCie <=24 && !isNaN(valorHoraCie)) {
        campoHoraCie.classList.remove("is-invalid");
        campoHoraCie.classList.add("is-valid");
    }
    else {
        campoHoraCie.classList.remove("is-valid");
        campoHoraCie.classList.add("is-invalid");
        flag = false;
    }

    ///con que valor llegó la bandera despues de todas las validaciones
    if (flag == true) {        

        if(localStorage.getItem("vets")){

            let savedVets = JSON.parse(localStorage.getItem("vets"));
            listVetsAdd = savedVets;
            indexVets = listVetsAdd.length;

        }
        indexVets++;
        listVetsAdd.push(new veterinario(indexVets,cat, imagenTemp, valorNombre + " " + valorApellido, valorEspecialidad, puntuacionTemp, valorDescripcion,  valorDireccion, valorTelLocal, valorTelPersonal, valorCorreo, valorConsulta, valorServicios, valorHoraIni ,valorHoraCie, campo247.checked,"../pages/doctorVerMas.html"));
        
        localStorage.setItem("vets", JSON.stringify(listVetsAdd));
        
       
    }
});//campo boton