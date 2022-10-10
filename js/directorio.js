import { veterinario } from "./classes.js";

let listUsersDir = [];//Arreglo de objetos JSON, 1 por cada veterinario
let itemsContainer = document.getElementById("list-items"); //la lista se llena con los veterinarios
let checkFilter = document.getElementsByClassName("custom-control-input"); //filtros por categorías
let btnFiltrar = document.getElementById("btnFiltrar");
let filter = false;
let indexVetsDir = 0;



window.addEventListener("load", function () {

    if (localStorage.getItem("users")) {

        let savedVetsDir = JSON.parse(localStorage.getItem("users"));
        listUsersDir = savedVetsDir;
        indexVetsDir = listUsersDir.length;

    } else {

        listUsersDir.push(
            (new veterinario("true", "1", 'Juan Pérez', 'josue.chavezlom0eli@gmail.com', "Batman33!", "vetG", '../src/veterinarios/vet5.jpg', 'Veterinario general',5 , 'Especialista en Medicina y Cirugía en Perros y Gatos', 'Calle Lázaro Cárdenas #204', '33 3852-7890', '33 7865-7890', 600, 'Estética Canina $250 mxn', '7am', '8pm', 'true')),
            (new veterinario("true", "2", 'Josué Chávez', 'josue.chavezlomeli@gmail.com', "Batman33!", "vetRep", '../src/veterinarios/vet2.jpg', 'Veterinario Reptiles', 3, 'Especialista en Medicina y Cirugía en Perros y Gatos', 'Calle Lázaro Cárdenas #204', '33 3852-7890', '33 7865-7890', 550, 'Estética Canina $250 mxn', '7am', '8pm', 'true')),
            (new veterinario("true", "3", 'Juan Carlos Rojas', 'josue.chavezlomeli@gmail.com', "Batman33!", "vetAv", '../src/veterinarios/vet3.jpg', 'Veterinario Aviar', 2, 'Especialista en Medicina y Cirugía en Perros y Gatos', 'Calle Lázaro Cárdenas #204', '33 3852-7890', '33 7865-7890', 350, 'Estética Canina $250 mxn', '7am', '8pm', 'true')),
            (new veterinario("true", "4", 'José Toledo', 'josue.chavezlomeli@gmail.com', "Batman33!", "vetGan", '../src/veterinarios/vet4.jpg', 'Veterinario Ganadero', 4, 'Especialista en Medicina y Cirugía en Perros y Gatos', 'Calle Lázaro Cárdenas #204', '33 3852-7890', '33 7865-7890', 370, 'Estética Canina $250 mxn', '7am', '8pm', 'true')),
            (new veterinario("true", "5", 'Akari Gutierrez', 'josue.chavezlomeli@gmail.com', "Batman33!", "vetOrt", '../src/veterinarios/vet1m.jpg', 'Veterinario Ortopedista', 5, 'Especialista en Medicina y Cirugía en Perros y Gatos', 'Calle Lázaro Cárdenas #204', '33 3852-7890', '33 7865-7890', 300, 'Estética Canina $250 mxn', '7am', '8pm', 'true')),
            (new veterinario("true", "6", 'Rubí Sandoval', 'josue.chavezlomeli@gmail.com', "Batman33!", "vetCir", '../src/veterinarios/vetm6.jpg', 'Veterinario Cirujano', 4, 'Especialista en Medicina y Cirugía en Perros y Gatos', 'Calle Lázaro Cárdenas #204', '33 3852-7890', '33 7865-7890', 600, 'Estética Canina $250 mxn', '7am', '8pm', 'true')),
            (new veterinario("true", "7", 'Mario Zarate', 'josue.chavezlomeli@gmail.com', "Batman33!", "vetOnc", '../src/veterinarios/vet12.jpg', 'Veterinario Oncólogo', 4, 'Especialista en Medicina y Cirugía en Perros y Gatos', 'Calle Lázaro Cárdenas #204', '33 3852-7890', '33 7865-7890', 450, 'Estética Canina $250 mxn', '7am', '8pm', 'true')),
            (new veterinario("true", "8", 'Christian Mendoza', 'josue.chavezlomeli@gmail.com', "Batman33!", "vetOft", '../src/veterinarios/vet9.jpg', 'Veterinario Oftalmólogo', 5, 'Especialista en Medicina y Cirugía en Perros y Gatos', 'Calle Lázaro Cárdenas #204', '33 3852-7890', '33 7865-7890', 390, 'Estética Canina $250 mxn', '7am', '8pm', 'true')),
            (new veterinario("true", "9", 'Stephanie Diaz', 'josue.chavezlomeli@gmail.com', "Batman33!", "vetFis", '../src/veterinarios/vetm12.jpg', 'Veterinario Fisioterapeuta', 4, 'Especialista en Medicina y Cirugía en Perros y Gatos', 'Calle Lázaro Cárdenas #204', '33 3852-7890', '33 7865-7890', 200, 'Estética Canina $250 mxn', '7am', '8pm', 'true')),
            (new veterinario("true", "10", 'Jaime Lopez', 'josue.chavezlomeli@gmail.com', "Batman33!", "vetDer", '../src/veterinarios/vet16.jpg', 'Veterinario Dermatólogo', 4, 'Especialista en Medicina y Cirugía en Perros y Gatos', 'Calle Lázaro Cárdenas #204', '33 3852-7890', '33 7865-7890', 150, 'Estética Canina $250 mxn', '7am', '8pm', 'true')),
            (new veterinario("true", "11", 'Gustavo Reyes', 'josue.chavezlomeli@gmail.com', "Batman33!", "otros", '../src/veterinarios/vet14.jpg', 'Veterinario Animales Exoticos', 3, 'Especialista en Medicina y Cirugía en Perros y Gatos', 'Calle Lázaro Cárdenas #204', '33 3852-7890', '33 7865-7890', 1000, 'Estética Canina $250 mxn', '7am', '8pm', 'true')),
            (new veterinario("true", "12", 'Francisco Sandoval', 'josue.chavezlomeli@gmail.com', "Batman33!", "vetG", '../src/veterinarios/vet13.jpg', 'Veterinario general', 2, 'Especialista en Medicina y Cirugía en Perros y Gatos', 'Calle Lazaro Cardenas #204', '33 3852-7890', '33 7865-7890', 400, 'Estética Canina $250 mxn', '7am', '8pm', 'true')),
            (new veterinario("true", "13", 'Francisco Sandoval', 'pepetoledo@gmail.com', "Superman44!", "vetG", '../src/veterinarios/vet15.jpg', 'Veterinario general', 1, 'Especialista en Medicina y Cirugía en Perros y Gatos', 'Calle Lázaro Cárdenas #204', '33 3852-7890', '33 7865-7890', 400, 'Estetica Canina $250 mxn', '7am', '8pm', 'true')));
    
            localStorage.setItem("users", JSON.stringify(listUsersDir));//llevarlos a localStorage
    
        }//si no tiene nada, inicializar


        for (let i=0; i<listUsersDir.length; i++){        
            let item = listUsersDir[i];  //se inyecta una tarjeta
            
            //letrero patitas
        let contador=item.calificacion;
        console.log(contador)
        let letrero="";
        for(let i=0;i<5;i++){
            
          if(i<contador){ //contador es el número de la estrella a la que le di click
          letrero+=`<i class="fa fa-paw " style="color:orange; text-shadow: 0 0 3px #000;" id="pata1"></i>`
         
          }else{
            letrero+=`<i class="fa fa-paw " style="color:black; text-shadow: 0 0 3px #000;" id="pata1"></i>`
          }}

            if(item.typeVet == "true"){
                itemsContainer.innerHTML += `
                <div class="card ${item.categoria} all col-md-4 m-3">
                    <div class="presentacion">
                         <div class="img">
                            <img id="imagenTest" src="${item.img}" height="300px" class="card-img-top"  alt="...">
                        </div>
                        <div class="producto-info">
                            <div class="producto-texto">
                            
                            <h1 class="card-title">${item.nombre}</h1>
                            <p class="card-text">${letrero}</p>
                            <br>
                            <h2 class="card-text">${item.especialidad}</h2>
                            <p class="card-text">${item.descripcion}</p>
                            <br>
                            <br>
                            <p class="card-text">Consulta General<strong> $${item.costoConsulta}.00 MXN</strong></p>
                            
                            <br>
                        <div class="precio-btn">
                            <a href="../pages/doctorVerMas.html"type="buton" class="btn btn-dark" id="btnVerMas_${i}">Ver más</a>
                        </div>
                    </div>
                </div>
                `;
            }  
          
            
            
        };//sacar todos los elementos del arreglo para mostrar las cards y enviarlas al local storage
});

itemsContainer.addEventListener("click", function (event) {
    //event.preventDefault();
   console.log(event.target.id)  //muestra el lugar donde se hizo click
   if((event.target.id).includes("btnVerMas_")){    
        console.log(event.target.id);
    let posCard = (event.target.id).slice(10);     
    localStorage.setItem("card", posCard);
   }
});//Escuchar cualquier click en el contenedor

btnFiltrar.addEventListener("click", function (event) {
    if (checkFilter[0].checked) {
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

    for (let i = 1; i < checkFilter.length; i++) {
        if (checkFilter[i].checked) {
            checkFilter[i].click();
        }
    }//recorre todos los checkbox y si están activos los desactiva

    let elementos = Array.from(document.getElementsByClassName(event.target.value));
    elementos.forEach((e) => {
        if (event.target.checked) {
            e.classList.remove("d-none");
            e.classList.add("d-block");
            // e.style.display = "block";
        } else {
            e.classList.remove("d-block");
            e.classList.add("d-none");
            //e.style.display = "none";
        }
    })//recorre todas las cards

}//Si presiono el de mostrar todos, deselecciona los demás

function checkStatus(event) {

    let elementos = Array.from(document.getElementsByClassName(event.target.value));
    elementos.forEach((e) => {
        if (event.target.checked) {
            e.classList.remove("d-none");
            e.classList.add("d-block");
            // e.style.display = "block";
        } else {
            e.classList.remove("d-block");
            e.classList.add("d-none");
            //e.style.display = "none";
        }
    })

}//identifica la categoria seleccionada con los checkbox y los muestra u oculta
