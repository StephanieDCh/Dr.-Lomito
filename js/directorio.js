import { veterinario } from "./classes.js";

let listVetsDir = [];//Arreglo de objetos JSON, 1 por cada veterinario
let listUser = [];//Arreglo de objetos JSON, 1 por cada usuario
let itemsContainer = document.getElementById("list-items");
let checkFilter = document.getElementsByClassName("custom-control-input");
let btnFiltrar = document.getElementById("btnFiltrar");
let filter = false;
let indexVetsDir = 0;





window.addEventListener("load", function(){

    if(localStorage.getItem("vets")){

        let savedVetsDir = JSON.parse(localStorage.getItem("vets"));
        listVetsDir = savedVetsDir;
        indexVetsDir = listVetsDir.length;

    }else{

        listVetsDir.push(
            (new veterinario("1","vetG",'../src/8.png','Juan Pérez','Veterinario general','4.8 estrellas','Especialista en Medicina y Cirugía en Perros y Gatos', 'Calle Lazaro Cardenas #204','33 3852-7890', '33 7865-7890', 'josue.chavezlomeli@gmail.com', 600,'Estetica Canina $250 mxn', '7am', '8pm','true')),
            (new veterinario("2","vetRep",'../src/9.png','Josué Chávez','Veterinario Reptiles','5 estrellas','Especialista en Medicina y Cirugía en Perros y Gatos', 'Calle Lazaro Cardenas #204','33 3852-7890', '33 7865-7890', 'josue.chavezlomeli@gmail.com', 550,'Estetica Canina $250 mxn', '7am', '8pm','true')),
            (new veterinario("3","vetAv",'../src/6.png','Juan Carlos Rojas','Veterinario Aviar','4.5 estrellas','Especialista en Medicina y Cirugía en Perros y Gatos', 'Calle Lazaro Cardenas #204','33 3852-7890', '33 7865-7890', 'josue.chavezlomeli@gmail.com', 350,'Estetica Canina $250 mxn', '7am', '8pm','true')),
            (new veterinario("4","vetGan",'../src/7.png','José Toledo','Veterinario Ganadero','3 estrellas','Especialista en Medicina y Cirugía en Perros y Gatos', 'Calle Lazaro Cardenas #204','33 3852-7890', '33 7865-7890', 'josue.chavezlomeli@gmail.com', 370,'Estetica Canina $250 mxn', '7am', '8pm','true')),
            (new veterinario("5","vetOrt",'../src/8.png','Akari Gutierrez','Veterinario Ortopedista','5 estrellas','Especialista en Medicina y Cirugía en Perros y Gatos', 'Calle Lazaro Cardenas #204','33 3852-7890', '33 7865-7890', 'josue.chavezlomeli@gmail.com', 300,'Estetica Canina $250 mxn', '7am', '8pm','true')),
            (new veterinario("6","vetCir",'../src/9.png','Rubí Sandoval','Veterinario Cirujano','5 estrellas','Especialista en Medicina y Cirugía en Perros y Gatos', 'Calle Lazaro Cardenas #204','33 3852-7890', '33 7865-7890', 'josue.chavezlomeli@gmail.com', 600,'Estetica Canina $250 mxn', '7am', '8pm','true')),
            (new veterinario("7","vetOnc",'../src/3.png','Mario Zarate','Veterinario Oncólogo','3 estrellas','Especialista en Medicina y Cirugía en Perros y Gatos', 'Calle Lazaro Cardenas #204','33 3852-7890', '33 7865-7890', 'josue.chavezlomeli@gmail.com', 450,'Estetica Canina $250 mxn', '7am', '8pm','true')),
            (new veterinario("8","vetOft",'../src/4.png','Christian Mendoza','Veterinario Oftalmólogo','5 estrellas','Especialista en Medicina y Cirugía en Perros y Gatos', 'Calle Lazaro Cardenas #204','33 3852-7890', '33 7865-7890', 'josue.chavezlomeli@gmail.com', 390,'Estetica Canina $250 mxn', '7am', '8pm','true')),
            (new veterinario("9","vetFis",'../src/6.png','Stephanie Diaz','Veterinario Fisioterapeuta','5 estrellas','Especialista en Medicina y Cirugía en Perros y Gatos', 'Calle Lazaro Cardenas #204','33 3852-7890', '33 7865-7890', 'josue.chavezlomeli@gmail.com', 200,'Estetica Canina $250 mxn', '7am', '8pm','true')),
            (new veterinario("10","vetDer",'../src/8.png','Jaime Lopez','Veterinario Dermatólogo','5 estrellas','Especialista en Medicina y Cirugía en Perros y Gatos', 'Calle Lazaro Cardenas #204','33 3852-7890', '33 7865-7890', 'josue.chavezlomeli@gmail.com', 150,'Estetica Canina $250 mxn', '7am', '8pm','true')),
            (new veterinario("11","otros",'../src/7.png','Gustavo Reyes','Veterinario Animales Exoticos','5 estrellas','Especialista en Medicina y Cirugía en Perros y Gatos', 'Calle Lazaro Cardenas #204','33 3852-7890', '33 7865-7890', 'josue.chavezlomeli@gmail.com', 1000,'Estetica Canina $250 mxn', '7am', '8pm','true')),
            (new veterinario("12","vetG",'../src/4.png','Francisco Sandoval','Veterinario general','3.8 estrellas','Especialista en Medicina y Cirugía en Perros y Gatos', 'Calle Lazaro Cardenas #204','33 3852-7890', '33 7865-7890', 'josue.chavezlomeli@gmail.com', 400,'Estetica Canina $250 mxn', '7am', '8pm','true')));
    
            localStorage.setItem("vets", JSON.stringify(listVetsDir));//llevarlos a localStorage
    
        }//si no tiene nada, inicializar


        for (let i=0; i<listVetsDir.length; i++){        
            let item = listVetsDir[i];
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
                                <a href="../pages/doctorVerMas.html" type="buton" class="btn btn-dark" id="btnVerMas_${i}">Ver más</a>                                         
                            </div>
                        </div>
                </div>
            </div>  
            <br/>`       
        };//sacar todos los elementos del arreglo para mostrar las cards y enviarlas al local storage
});

itemsContainer.addEventListener("click", function (event){
    //event.preventDefault();
   console.log(event.target.id)
   if((event.target.id).includes("btnVerMas_")){    
    let posCard = (event.target.id).slice(10);    
    localStorage.setItem("card", posCard);
   }
});//Escuchar cualquier click en el contenedor

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



