let listVet = [];//Arreglo de objetos JSON, 1 por cada veterinario
let listUser = [];//Arreglo de objetos JSON, 1 por cada usuario
let itemsContainer = document.getElementById("list-items");
let checkFilter = document.getElementsByClassName("custom-control-input");
let btnFiltrar = document.getElementById("btnFiltrar");
let filter = false;

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
   
    static total = 0;

    constructor (categoria, img, nombre, especialidad, calificacion, descripcion, direccion, telLocal1, telPersonal, correo, costoConsulta, servicios, horAteIni, horaAteCierre, urgencia24_7, verMas){
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

        veterinario.total++;
        this.id = veterinario.total;
    } //constructor
    

}//class veterinario

listVet.push(
(new veterinario("vetG",'../src/8.png','Juan Pérez','Veterinario general','4.8 estrellas','Especialista en Medicina y Cirugía en Perros y Gatos', 'Calle Lazaro Cardenas #204','33 3852-7890', '33 7865-7890', 'josue.chavezlomeli@gmail.com', 600,'Estetica Canina $250 mxn', '7am', '8pm','true','../pages/doctorVerMas.html')),
(new veterinario("vetRep",'../src/9.png','Josué Chávez','Veterinario Reptiles','5 estrellas','Especialista en Medicina y Cirugía en Perros y Gatos', 'Calle Lazaro Cardenas #204','33 3852-7890', '33 7865-7890', 'josue.chavezlomeli@gmail.com', 550,'Estetica Canina $250 mxn', '7am', '8pm','true','../pages/doctorVerMas.html')),
(new veterinario("vetAv",'../src/6.png','Juan Carlos Rojas','Veterinario Aviar','4.5 estrellas','Especialista en Medicina y Cirugía en Perros y Gatos', 'Calle Lazaro Cardenas #204','33 3852-7890', '33 7865-7890', 'josue.chavezlomeli@gmail.com', 350,'Estetica Canina $250 mxn', '7am', '8pm','true','../pages/doctorVerMas.html')),
(new veterinario("vetGan",'../src/7.png','José Toledo','Veterinario Ganadero','3 estrellas','Especialista en Medicina y Cirugía en Perros y Gatos', 'Calle Lazaro Cardenas #204','33 3852-7890', '33 7865-7890', 'josue.chavezlomeli@gmail.com', 370,'Estetica Canina $250 mxn', '7am', '8pm','true','../pages/doctorVerMas.html')),
(new veterinario("vetOrt",'../src/8.png','Akari Gutierrez','Veterinario Ortopedista','5 estrellas','Especialista en Medicina y Cirugía en Perros y Gatos', 'Calle Lazaro Cardenas #204','33 3852-7890', '33 7865-7890', 'josue.chavezlomeli@gmail.com', 300,'Estetica Canina $250 mxn', '7am', '8pm','true','../pages/doctorVerMas.html')),
(new veterinario("vetCir",'../src/9.png','Rubí Sandoval','Veterinario Cirujano','5 estrellas','Especialista en Medicina y Cirugía en Perros y Gatos', 'Calle Lazaro Cardenas #204','33 3852-7890', '33 7865-7890', 'josue.chavezlomeli@gmail.com', 600,'Estetica Canina $250 mxn', '7am', '8pm','true','../pages/doctorVerMas.html')),
(new veterinario("vetOnc",'../src/3.png','Mario Zarate','Veterinario Oncólogo','3 estrellas','Especialista en Medicina y Cirugía en Perros y Gatos', 'Calle Lazaro Cardenas #204','33 3852-7890', '33 7865-7890', 'josue.chavezlomeli@gmail.com', 450,'Estetica Canina $250 mxn', '7am', '8pm','true','../pages/doctorVerMas.html')),
(new veterinario("vetOft",'../src/4.png','Christian Mendoza','Veterinario Oftalmólogo','5 estrellas','Especialista en Medicina y Cirugía en Perros y Gatos', 'Calle Lazaro Cardenas #204','33 3852-7890', '33 7865-7890', 'josue.chavezlomeli@gmail.com', 390,'Estetica Canina $250 mxn', '7am', '8pm','true','../pages/doctorVerMas.html')),
(new veterinario("vetFis",'../src/6.png','Stephanie Diaz','Veterinario Fisioterapeuta','5 estrellas','Especialista en Medicina y Cirugía en Perros y Gatos', 'Calle Lazaro Cardenas #204','33 3852-7890', '33 7865-7890', 'josue.chavezlomeli@gmail.com', 200,'Estetica Canina $250 mxn', '7am', '8pm','true','../pages/doctorVerMas.html')),
(new veterinario("vetDer",'../src/8.png','Jaime Lopez','Veterinario Dermatólogo','5 estrellas','Especialista en Medicina y Cirugía en Perros y Gatos', 'Calle Lazaro Cardenas #204','33 3852-7890', '33 7865-7890', 'josue.chavezlomeli@gmail.com', 150,'Estetica Canina $250 mxn', '7am', '8pm','true','../pages/doctorVerMas.html')),
(new veterinario("otros",'../src/7.png','Gustavo Reyes','Veterinario Animales Exoticos','5 estrellas','Especialista en Medicina y Cirugía en Perros y Gatos', 'Calle Lazaro Cardenas #204','33 3852-7890', '33 7865-7890', 'josue.chavezlomeli@gmail.com', 1000,'Estetica Canina $250 mxn', '7am', '8pm','true','../pages/doctorVerMas.html')),
(new veterinario("vetG",'../src/4.png','Francisco Sandoval','Veterinario general','3.8 estrellas','Especialista en Medicina y Cirugía en Perros y Gatos', 'Calle Lazaro Cardenas #204','33 3852-7890', '33 7865-7890', 'josue.chavezlomeli@gmail.com', 400,'Estetica Canina $250 mxn', '7am', '8pm','true','../pages/doctorVerMas.html')));

window.addEventListener("load", function(){
    listVet.forEach(item => {
        itemsContainer.innerHTML += `
        <div class="card ${item.categoria} all col-md-5 m-1">
            <div class="row no-gutters d-flex">
                    <div class="col-sm-4" >
                        <img id="imagenTest" src="${item.img}" class="card-img-top"  alt="..." >
                    </div>
                    <div class="col-sm-8">
                        <div class="card-body">                    
                            <h5 class="card-title">${item.nombre}</h5>
                            <p class="card-text">${item.especialidad}</p> 
                            <p class="card-text">${item.calificacion}</p>
                            <p class="card-text">${item.descripcion}</p>
                            <p class="card-text">Consulta General<strong> $${item.costoConsulta}.00 MXN</strong></p>
                            <a href = "${item.verMas}" class="btn btn-dark" >Ver más</a>
                            
                        </div>
                    </div>
            </div>
        </div>  
                   
        <br/>`
     });//sacar todos los elementos del arreglo para mostrar las cards
});

btnFiltrar.addEventListener("click", function(event){    
    if(checkFilter[0].checked){
        checkFilter[0].click();
    }
})//filtrar por especialidad

checkFilter[0].addEventListener("click", checkAll);//limpia los checkboxes
checkFilter[1].addEventListener("click", checkStatus);
checkFilter[2].addEventListener("click", checkStatus);
checkFilter[3].addEventListener("click", checkStatus);
checkFilter[4].addEventListener("click", checkStatus);
checkFilter[5].addEventListener("click", checkStatus);
checkFilter[6].addEventListener("click", checkStatus);
checkFilter[7].addEventListener("click", checkStatus);
checkFilter[8].addEventListener("click", checkStatus);
checkFilter[9].addEventListener("click", checkStatus);
checkFilter[10].addEventListener("click", checkStatus);
checkFilter[11].addEventListener("click", checkStatus);

function checkAll(event) {    

    for(i=1; i<checkFilter.length; i++){
        if(checkFilter[i].checked){
            checkFilter[i].click();
        }
    }//recorre todos los checkbox y si están activos los desactiva
      
    let elementos = Array.from(document.getElementsByClassName(event.target.value));
        elementos.forEach((e)=>{
            if(event.target.checked){
                e.classList.remove("d-none");
                e.classList.add("d-block");
               // e.style.display = "block";
            }else {
                e.classList.remove("d-block");
                e.classList.add("d-none");
                //e.style.display = "none";
            }
        })//recorre todas las cards

}//Si presiono el de mostrar todos, deselecciona los demás

function checkStatus(event) {    
      
    let elementos = Array.from(document.getElementsByClassName(event.target.value));
        elementos.forEach((e)=>{
            if(event.target.checked){
                e.classList.remove("d-none");
                e.classList.add("d-block");
               // e.style.display = "block";
            }else {
                e.classList.remove("d-block");
                e.classList.add("d-none");
                //e.style.display = "none";
            }
        })

}//identifica la categoria seleccionada con los checkbox y los muestra u oculta

/* function addItem(item){
    const itemHTML = `<div class="card col-sm-5 m-1 d-flex">
                <div class="row no-gutters ">
                <div class="col-sm-4" >
                    <img id="imagenTest" src="${item.img}" class="card-img-top"  alt="..." >
                </div>
                <div class="col-sm-8">
                    <div class="card-body">                    
                    <h5 class="card-title">${item.nombre}</h5>
                    <p class="card-text">${item.especialidad}</p> 
                    <p class="card-text">${item.calificacion}</p>
                    <p class="card-text">${item.descripcion}</p>
                    <a href = "${item.link}" class="btn btn-dark" >Ver más</a>
                    <p class="card-text"><strong>${item.consulta}</strong></p>
                    </div>
                </div>
                </div>
            </div> 
        <br/>`;
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
} */
   /*  addItem({'id': '2',
        'servicios': 'Cirugía Animal $700 mxn',
        'direccion': 'Londres #344, Coyoacán',
        'telLocal1': '55 67 34 34 77',
        'telPersonal': '55 78 90 32 45',
        'correo': 'cirugia_animal@gmail.com',
        'horAteIni': '9am',
        'horaAteCierre': '6pm',
        '24/7': 'true',
        'img':'../src/4.png',
        'calificacion':'5 estrellas', //mostrar con huellas o estrellas
        'nombre':'Juliana Hernández',
        'especialidad':'Cirugía Animal', //¿es el título del médico?
        'categoria':'vetAv', //tipo de servicio
        'descripcion':'Especialista en Medicina y Cirugía en Perros y Gatos',
        'consulta':'$700.00',
        'link':'../pages/doctorVerMas.html'
    }); 
    addItem({'id': '3',
        'servicios': 'Dermatología $800 mxn',
        'direccion': 'Colima #35, Roma Norte ',
        'telLocal1': '55 32 45 67 23',
        'telPersonal': '55 65 39 09 23',
        'correo': 'dermatología_animal@gmail.com',
        'horAteIni': '9am',
        'horaAteCierre': '6pm',
        '24/7': 'true',
        'img':'../src/6.png',
        'calificacion':'4 estrellas', //mostrar con huellas o estrellas
        'nombre':'Andrés Sánchez',
        'especialidad':'Dermatología Animal', //¿es el título del médico?
        'categoria':'vetRep', //tipo de servicio
        'descripcion':'Especialista en Dermatología Animal',
        'consulta':'$800.00',
        'link':'../pages/doctorVerMas.html'
    }); 
    addItem({'id': '4',
        'servicios': 'Oftalmología para Perros $1500 mxn',
        'direccion': 'Miguel Hidalgo #60, Tlalpan Cnetro',
        'telLocal1': '55 43 68 32 10',
        'telPersonal': '55 34 98 09 00',
        'correo': 'ojitosperrunos@gmail.com',
        'horAteIni': '10am',
        'horaAteCierre': '5pm',
        '24/7': 'true',
        'img':'../src/7.png',
        'calificacion':'5 estrellas', //mostrar con huellas o estrellas
        'nombre':'Octavio Flores',
        'especialidad':'Oftalmología Animal', //¿es el título del médico?
        'categoria':'vetGan', //tipo de servicio
        'descripcion':'Especialista en Oftalmología para Perros',
        'consulta':'$1500.00',
        'link':'../pages/doctorVerMas.html'
    }); 
    addItem({'id': '5',
        'servicios': 'Estetica Canina $400 mxn',
        'direccion': 'Av. Erasmo Castellanos Quinto #604',
        'telLocal1': '55 45 33 67 79',
        'telPersonal': '55 14 74 33 23',
        'correo': 'estetica_animal@gmail.com',
        'horAteIni': '9am',
        'horaAteCierre': '7pm',
        '24/7': 'true',
        'img':'../src/8.png',
        'calificacion':'3.5 estrellas', //mostrar con huellas o estrellas
        'nombre':'Alfonso Guutiérrez',
        'especialidad':'Veterinario general', //¿es el título del médico?
        'categoria':'vetOrt', //tipo de servicio
        'descripcion':'Especialista en Medicina y Estética en Perros y Gatos',
        'consulta':'$400.00',
        'link':'../pages/doctorVerMas.html'
    }); 
    addItem({'id': '6',
        'servicios': 'Herpetología $450 mxn',
        'direccion': 'Pirámide de la Luna',
        'telLocal1': '78 555 43 21',
        'telPersonal': '55 67 32 11 13',
        'correo': 'reptiles_bonitos@gmail.com',
        'horAteIni': '9am',
        'horaAteCierre': '5pm',
        '24/7': 'true',
        'img':'../src/9.png',
        'calificacion':'5 estrellas', //mostrar con huellas o estrellas
        'nombre':'Luis Alberto Piña',
        'especialidad':'Herpetología', //¿es el título del médico?
        'categoria':'vetCir', //tipo de servicio
        'descripcion':'Especialista en Medicina y Cirugía Herpetológica',
        'consulta':'$450.00',
        'link':'../pages/doctorVerMas.html'
    }); 
    addItem({'id': '7',
        'servicios': 'Estetica Canina $450 mxn',
        'direccion': 'Cumbres de Maltrata #88',
        'telLocal1': '33 3852-4562',
        'telPersonal': '55 34 21 56 87',
        'correo': 'belleza.canina@gmail.com',
        'horAteIni': '9am',
        'horaAteCierre': '5pm',
        '24/7': 'true',
        'img':'../src/3.png',
        'calificacion':'5 estrellas', //mostrar con huellas o estrellas
        'nombre':'Andrés Cosio',
        'especialidad':'Veterinario general', //¿es el título del médico?
        'categoria':'vetOnc', //tipo de servicio
        'descripcion':'Especialista en Medicina y Estética en Perros y Gatos',
        'consulta':'$450.00',
        'link':'../pages/doctorVerMas.html'
    }); 
    addItem({'id': '8',
        'servicios': 'Veterinario General $500 mxn',
        'direccion': 'Prolongación Div. del Norte #677',
        'telLocal1': '55 55 68 75 23',
        'telPersonal': '55 23 56 78 21',
        'correo': 'veterinaria_del_sur@gmail.com',
        'horAteIni': '7am',
        'horaAteCierre': '7pm',
        '24/7': 'true',
        'img':'../src/6.png',
        'calificacion':'5 estrellas', //mostrar con huellas o estrellas
        'nombre':'Lucía Morales',
        'especialidad':'Veterinario general', //¿es el título del médico?
        'categoria':'vetOft', //tipo de servicio
        'descripcion':'Especialista en Medicina y Cirugía en Perros y Gatos',
        'consulta':'$500.00',
        'link':'../pages/doctorVerMas.html'
    }); 
    addItem({'id': '9',
        'servicios': 'Oncología $800 mxn',
        'direccion': 'Retorno 11 #32, Colonia Avante',
        'telLocal1': '55 54 67 72 98',
        'telPersonal': '55 32 51 11 78',
        'correo': 'corazon_animal@gmail.com',
        'horAteIni': '10am',
        'horaAteCierre': '5pm',
        '24/7': 'true',
        'img':'https://media.discordapp.net/attachments/1012849492883681330/1022282035760480296/98902309-ilustracion-de-estilo-de-dibujos-animados-de-vector-de-personaje-de-medico-veterinario-feliz-con-ani.png',
        'calificacion':'4 estrellas', //mostrar con huellas o estrellas
        'nombre':'Atziri Obregón',
        'especialidad':'Oncología', //¿es el título del médico?
        'categoria':'vetFis', //tipo de servicio
        'descripcion':'Especialista en Oncología de canes y felinos pequeños',
        'consulta':'$300.00',
        'link':'../pages/doctorVerMas.html'
    }); 
    addItem({'id': '10',
        'servicios': 'Estetica Canina Iztapalapa $350 mxn',
        'direccion': 'Calzada Ermita Iztapalapa #234',
        'telLocal1': '55 66 92 34 65',
        'telPersonal': '55 43 56 78 54',
        'correo': 'perrunos_de_barrio@gmail.com',
        'horAteIni': '8am',
        'horaAteCierre': '7pm',
        '24/7': 'true',
        'img':'../src/9.png',
        'calificacion':'2 estrellas', //mostrar con huellas o estrellas
        'nombre':'Brayan López',
        'especialidad':'Veterinario general', //¿es el título del médico?
        'categoria':'vetDer', //tipo de servicio
        'descripcion':'Especialista en Medicina y Estética de Perros y Gatos',
        'consulta':'$350.00',
        'link':'../pages/doctorVerMas.html'
    });  */
    


    
    /* addItem({'id': '10',
    'servicios': 'Estetica Canina Iztapalapa $350 mxn',
    'direccion': 'Calzada Ermita Iztapalapa #234',
    'telLocal1': '55 66 92 34 65',
    'telPersonal': '55 43 56 78 54',
    'correo': 'perrunos_de_barrio@gmail.com',
    'horAteIni': '8am',
    'horaAteCierre': '7pm',
    '24/7': 'true',
    'img':'../src/9.png',
    'calificacion':'2 estrellas', //mostrar con huellas o estrellas
    'nombre':'Brayan López',
    'especialidad':'Veterinario general', //¿es el título del médico?
    'categoria':'vetDer', //tipo de servicio
    'descripcion':'Especialista en Medicina y Estética de Perros y Gatos',
    'consulta':'$350.00',
    'link':'../pages/doctorVerMas.html'
});  */


   /*  Estructura JSON class Usuario {perfil (string vet o user),
     id (number), categoria (string), imagen (img), nombre(string), 
     titulo (string), puntuacion (float), descripcion (string), 
     consulta (number), servicios (string), direccion (string), 
     telLocal1 (number), telPersonal (number), correo (string), 
     horAteIni (number), horAteCierre (number),  24_7 (bool)}
    
     Tarjeta: imagen, nombre, especialidad, puntuacion, descripcion, costo consulta
    Perfil: todo */

