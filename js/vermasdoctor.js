let posCardVerMas = "";
let listVet = [];
let itemsContainer = document.getElementById("list-items");

window.addEventListener("load", function (e){
    if(localStorage.getItem("card") && localStorage.getItem("vets")){
        
        posCardVerMas = localStorage.getItem("card");
        listVet = JSON.parse(localStorage.getItem("vets"));

        itemsContainer.innerHTML += `<div class="card col-sm-7 m-1 d-flex">
                <div class="row no-gutters ">
                <div class="col-sm-4" >
                    <img id="imagenTest" src="${listVet[posCardVerMas].img}" class="card-img-top"  alt="..." >
                </div>
                <div class="col-sm-8">
                    <div class="card-body">                    
                    <h5 class="card-title">${listVet[posCardVerMas].nombre}</h5>
                    <p class="card-text">${listVet[posCardVerMas].especialidad}</p> 
                    <p class="card-text">${listVet[posCardVerMas].calificacion}</p>
                    <p class="card-text">${listVet[posCardVerMas].descripcion}</p>
                    <p class="card-text">${listVet[posCardVerMas].servicios}</p>
                    <p class="card-text">Direccion: ${listVet[posCardVerMas].direccion}</p>
                    <p class="card-text">Telefono Consultorio: ${listVet[posCardVerMas].telLocal1}</p>
                    <p class="card-text">Teléfono Personal: ${listVet[posCardVerMas].telPersonal}</p>
                    <p class="card-text">Correo: ${listVet[posCardVerMas].correo}</p>
                    <p class="card-text">Lunes - Viernes de: ${listVet[posCardVerMas].horAteIni} a ${listVet[posCardVerMas].horaAteCierre}</p>
                    <p class="card-text"><strong>Costo Consulta: $${listVet[posCardVerMas].costoConsulta}.00 mxn</strong></p>
                    <a href = "#" class="btn btn-dark px-5">Agendar</a>                    
                    </div>
                </div>
                </div>
            </div> 
            <br/>
            <div class="col col-sm-3">
                <div class"d-flex justify-content-center" style="width: 18rem;">
                <h5>Opiniones</h5>
                </div>
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title">José Luis Toledo</h5>
                    <h6 class="card-subtitle mb-2 text-muted">3 estrellas</h6>
                    <p class="card-text">Es un buen doctor, pero no quedé muy conforme con el diagnóstico de mi hipopotamo</p>   
                </div>
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title">Anónimo</h5>
                    <h6 class="card-subtitle mb-2 text-muted">5 estrellas</h6>
                    <p class="card-text">Excelente Doctor!, quedé muy satisfecho con su consulta, es una persona muy profesional con los animalitos</p>   
                </div>`;
    }
    
});