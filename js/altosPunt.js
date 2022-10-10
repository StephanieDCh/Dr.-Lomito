// let puntajeCard = [
//     {"id":1, puntajes, img:'',nombre:'Juan Pérez',descripcion:'Especialista en Medicina y Cirugía en Perros y Gatos',calificacion:'5 estrellas'},
//     {"id":2, puntajes, img:'',nombre:'Josué Chávez',descripcion:'Especialista en Medicina y Cirugía en Perros y Gatos',calificacion:'5 estrellas'},
//     {"id":3, puntajes, img:'',nombre:'Juan Carlos Rojas',descripcion:'Especialista en Medicina y Cirugía en Perros y Gatos',calificacion:'5 estrellas'}
// ];
// let cards = " ";

// puntajeCard.forEach((item) => {
//     cards += `<div class="card-deck">
//     <div class="card" id="puntaje1">
//       <img class="card-img-top" src="${item.img}" alt="Card image cap">
//       <div class="card-body">
//       <h5 class="card-title">${item.nombre}</h5>
// id        <p class="card-text">${item.descripcion.slice(0, 100)}</p>
//         <p class="card-text"><small class="text-muted">${item.calificacion}</small></p>
//         <a href="#" class="btn btn-dark">Agendar</a>
//       </div>
//     </div>
//     `;
// });

// const cardPuntajes = document.getElementById("cardPuntajes");
// cardPuntajes.innerHTML = cards;
// const vetCard = document.getElementById("vetCard");

// function vetCard(id) {
//     vetCard.innerHTML = " ";
//     vetCard.style.transform = "scale(1)";
//     vetCard.style.opacity = 1;
//     cardPuntajes.style.opacity = 0.5;
    
//     puntajeCard.forEach((item) => {
//     if (item.id == id){
//         let profile_div = `<div class="card-deck">
//         <div class="card" id="puntaje1">
//           <img class="card-img-top" src="${item.img}" alt="Card image cap">
//           <div class="card-body">
//           <h5 class="card-title">${item.nombre}</h5>
//     id        <p class="card-text">${item.descripcion.slice(0, 100)}</p>
//             <p class="card-text"><small class="text-muted">${item.calificacion}</small></p>
//             <a href="#" class="btn btn-dark">Agendar</a>
//           </div>
//         </div>
//         `;
//     }
// }
//     )};

const puntajes = document.querySelector("puntajes");
function createCard (img,nombre,descripcion,calificacion) {
    let puntajeCard = `<div class="card-deck">
    <div class="card" id="puntaje1">
      <img class="card-img-top" src="${img}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${nombre}</h5>
        <p class="card-text">${descripcion}</p>
        <p class="card-text"><small class="text-muted">${calificacion}</small></p>
        <a href="#" class="btn btn-dark">Agendar</a>
      </div>
    </div>
    `;
    puntajes.innerHTML += puntajeCard;
}

    let puntaje1 = ["",
    "Juan Pérez", 
    "Especialista en Medicina y Cirugía en Perros y Gatos",
    "5 estrellas",];

    let puntaje2 = ["",
    "Josué Chávez", 
    "Especialista en Medicina y Cirugía en Perros y Gatos",
    "5 estrellas",];

    let puntaje3 = ["",
    "Juan Carlos Rojas", 
    "Especialista en Medicina y Cirugía en Perros y Gatos",
    "5 estrellas",];

createCard(puntaje2);

createCard(puntaje3);
