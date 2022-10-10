let listCards = [];
let cardIndex = document.getElementById("cardIndex");

window.addEventListener("load", function(e){
e.preventDefault();

if(localStorage.getItem("users")){
listCards = JSON.parse(localStorage.getItem("users"));

<<<<<<< HEAD
for (let i = 0; i < 2; i++) {
  let item = listCards[i];
  cardIndex.innerHTML += `
  <div class="card  all col-md-5 m-1">
=======
for (let i = 0; i < 3; i++) {
  let item = listCards[i];
  cardIndex.innerHTML += `
  <div class="card  all col-md-3 m-0">
>>>>>>> 8c55cc03c910e56468e65a1cf7cdd90bd51e698d
      <div class="presentacion">
           <div class="img">
              <img id="imagenTest" src="${item.img}" height="300px" class="card-img-top"  alt="...">
          </div>
          <div class="producto-info">
              <div class="producto-texto">
              
              <h1 class="card-title">${item.nombre}</h1>
              <p class="card-text">
              <i class="fa fa-paw " style="color:orange; text-shadow: 0 0 3px #000;" id="pata">
              <i class="fa fa-paw " style="color:orange; text-shadow: 0 0 3px #000;" id="pata"></i>
              <i class="fa fa-paw " style="color:orange; text-shadow: 0 0 3px #000;" id="pata"></i>
              <i class="fa fa-paw " style="color:orange; text-shadow: 0 0 3px #000;" id="pata"></i>
              <i class="fa fa-paw " style="color:orange; text-shadow: 0 0 3px #000;" id="pata"></i>
              </i></p>
              <br>
              <h2 class="card-text">${item.especialidad}</h2>
              <p class="card-text">${item.descripcion}</p>
              <br>
<<<<<<< HEAD
              <br>
              <br>
=======
>>>>>>> 8c55cc03c910e56468e65a1cf7cdd90bd51e698d
              <p class="card-text">Consulta General<strong> $${item.costoConsulta}.00 MXN</strong></p>
              
              <br>
              <div class="precio-btn">
              <a href="../pages/doctorVerMas.html"type="buton" class="btn btn-dark" id="btnVerMas_${i}">Ver más</a>
          </div>
      </div>
  </div>
  `;
  
}
}
<<<<<<< HEAD
});
=======
});
>>>>>>> 8c55cc03c910e56468e65a1cf7cdd90bd51e698d
