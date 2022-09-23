function addItem(item){
    const itemHTML = `<div class="card col-sm-7 m-1 d-flex">
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
                    <p class="card-text">${item.servicios}</p>
                    <p class="card-text">Direccion: ${item.direccion}</p>
                    <p class="card-text">Telefono Consultorio: ${item.telLocal1}</p>
                    <p class="card-text">Teléfono Personal: ${item.telPersonal}</p>
                    <p class="card-text">Correo: ${item.correo}</p>
                    <p class="card-text">Lunes - Viernes de: ${item.horAteIni} a ${item.horaAteCierre}</p>
                    <p class="card-text"><strong>Costo Consulta: ${item.consulta}</strong></p>
                    <a href = "#" class="btn btn-dark px-5">Agendar</a>                    
                    </div>
                </div>
                </div>
            </div> 
        <br/>
        <div class="col col-sm-3">
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
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

addItem({'id': '1',
        'servicios': 'Estética Canina $250 mxn',
        'direccion': 'Calle Lazaro Cardenas #204',
        'telLocal1': '33 3852-7890',
        'telPersonal': '33 7865-7890',
        'correo': 'josue.chavezlomeli@gmail.com',
        'horAteIni': '7am',
        'horaAteCierre': '8pm',
        '24/7': 'true',
        'img':'https://media.discordapp.net/attachments/1012849492883681330/1022282035760480296/98902309-ilustracion-de-estilo-de-dibujos-animados-de-vector-de-personaje-de-medico-veterinario-feliz-con-ani.png',
        'calificacion':'5 estrellas', //mostrar con huellas o estrellas
        'nombre':'Juan Pérez',
        'especialidad':'Veterinario general', //¿es el título del médico?
        'categoria':'Cardiología', //tipo de servicio
        'descripcion':'Especialista en Medicina y Cirugía en Perros y Gatos, a lo largo de mi experiencia profesional he tenido la oportunidad de trabajar con felinos de gran tamaño y reptiles exóticos.',
        'consulta':'$300.00',
        'link':'../pages/doctorVerMas.html'
    }); 