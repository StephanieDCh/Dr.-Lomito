let posCardVerMas = "";
let listVet = [];
let itemsContainer = document.getElementById("list-items");

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
     pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0:{
            slidesPerView: 1, 
        },
        520:{
            slidesPerView: 2, 
        },
        950:{
            slidesPerView: 3, 
        },
    },
  });//propiedad responsiva del carrusel

window.addEventListener("load", function (e){
    if(localStorage.getItem("card") && localStorage.getItem("users")){
        
        posCardVerMas = localStorage.getItem("card");
        listVet = JSON.parse(localStorage.getItem("users"));
        console.log(listVet[posCardVerMas].urgencia24_7)
        itemsContainer.innerHTML += `<div class="vetCardContainer">
        <div class="cardHeader">
          <a href="#">
            <img src="${listVet[posCardVerMas].img}" alt="">
          </a>
          <h2>${listVet[posCardVerMas].nombre}</h2>
          <h4>${listVet[posCardVerMas].especialidad}</h4>
          <p>${listVet[posCardVerMas].calificacion}</p>
        </div>
        <div class="descripcion">
          <p><strong>Descripcion: </strong> ${listVet[posCardVerMas].descripcion}</p>
              <p><strong>Servicios: </strong>${listVet[posCardVerMas].servicios}</p>
              <p><strong>Direccion: </strong>${listVet[posCardVerMas].direccion}</p>
              <p><strong>Telefono: </strong>${listVet[posCardVerMas].telLocal1}</p>
              <p><strong>Teléfono Personal: </strong>${listVet[posCardVerMas].telPersonal}</p>
              <p><strong>Correo: </strong>${listVet[posCardVerMas].correo}</p>
              <p><strong>Horario: </strong>Lunes a viernes de: ${listVet[posCardVerMas].horAteIni} a ${listVet[posCardVerMas].horaAteCierre}</p>
              <p><strong>Disponibilidad Urgencias 24/7: </strong>${((listVet[posCardVerMas].urgencia24_7) == true)?"Disponible": "No disponible"}</p>
              <p><strong>Costo Consulta: </strong>${listVet[posCardVerMas].costoConsulta} mxn</p>
              <div class="botones">
                <a href="#">Agendar</a>
                <a href="#">Escribir Opinión</a>
              </div>
        </div>
      </div>`;            
    }
});//se inserta la card principal