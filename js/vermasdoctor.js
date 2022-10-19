import { opinion } from "../js/classes.js";
let posCardVerMas = "";
let listVet = [];

let itemsContainer = document.getElementById("list-items");
let opinionContainer = document.getElementsByClassName("listOpiniones");
let checkOpiAutor = document.getElementById("checkAnoni");
let autorOpi = document.getElementById("autor");
let califOpi = document.getElementById("selectCalif");
let msgOpi = document.getElementById("Opinion");
let btnOpinar = document.getElementById("btnOpinar");
let btnCerrarModal = document.getElementById("btnCerrarModal");
let cardOpinTmp = document.getElementById("opinionTemporal");;



let estrellas =[document.getElementById("pata1"),document.getElementById("pata2"),document.getElementById("pata3"),document.getElementById("pata4"),document.getElementById("pata5")];



let nameLoggedIn = "";
let userLoggedIn = false;

//clases de patitas  

window.addEventListener("load", function (e){  

     if(localStorage.getItem("card") && localStorage.getItem("users")){
        
        posCardVerMas = localStorage.getItem("card");
        listVet = JSON.parse(localStorage.getItem("users"));

        //letrero patitas
        let contador=listVet[posCardVerMas].calificacion;
       
        let letrero="";
        for(let i=0;i<5;i++){
            
          if(i<contador){ //contador es el número de la estrella a la que le di click
          letrero+=`<i class="fa fa-paw " style="color:orange; text-shadow: 0 0 3px #000;" id="pata1"></i>`
         
          }else{
            letrero+=`<i class="fa fa-paw " style="color:black; text-shadow: 0 0 3px #000;" id="pata1"></i>`
          }
      }//for calificacion

        
        itemsContainer.innerHTML += `<div class="vetCardContainer">
        <div class="cardHeader">
          <a href="#">
            <img src="${listVet[posCardVerMas].img}" alt="">
          </a>
          <h2>${listVet[posCardVerMas].nombre}</h2>
          <h4>${listVet[posCardVerMas].especialidad}</h4>
          <p>${letrero} </p> <!--esta es la parte a modificar-->
        </div>
        <div class="descripcion">
          <p><strong>Descripción: </strong> ${listVet[posCardVerMas].descripcion}</p>
              <p><strong>Servicios: </strong>${listVet[posCardVerMas].servicios}</p>
              <p><strong>Dirección: </strong>${listVet[posCardVerMas].direccion}</p>
              <p><strong>Teléfono: </strong>${listVet[posCardVerMas].telLocal1}</p>
              <p><strong>Teléfono Personal: </strong>${listVet[posCardVerMas].telPersonal}</p>
              <p><strong>Correo: </strong>${listVet[posCardVerMas].correo}</p>
              <p><strong>Horario: </strong>Lunes a viernes de: ${listVet[posCardVerMas].horAteIni} a ${listVet[posCardVerMas].horaAteCierre}</p>
              <p><strong>Disponibilidad Urgencias 24/7: </strong>${((listVet[posCardVerMas].urgencia24_7) == true)?"Disponible": "No disponible"}</p>
              <p><strong>Costo Consulta: </strong>${listVet[posCardVerMas].costoConsulta} mxn</p>
              <div class="botones">                
                <a href="#escribirOpinion" data-toggle="modal" id="btnOpinar">Escribir Opinión</a>
              </div>
        </div>
      </div>`;
      
      

      if((listVet[posCardVerMas]).opiniones.length > 0){
        cardOpinTmp.style.display = "none";        
        ((listVet[posCardVerMas]).opiniones).forEach(element => {
          
            opinionContainer[0].insertAdjacentHTML("beforebegin", `<div class="card_ swiper-slide">
            <div class="image-content">
              <span class="overlay"></span>
  
              <div class="card-image">
                <img src="../src/6.png" alt="" class="card-img">
              </div>
            </div>
              <div class="puntuacion">
                <p>${element.calificacion}</p>
              </div>
              
              <div class="card-content">
                <h2 class="nombre">${element.autor}</h2>
                <p class="opinion">${element.opinion}</p>
              </div>`)
            console.log(typeof(element.calificacion))
          
        });
       
      }

      if(localStorage.getItem("loggedIn") && localStorage.getItem("userLogged") ){
        
        let userLoggedIn = localStorage.getItem("loggedIn");
        autorOpi.value = listVet[localStorage.getItem("userLogged")].nombre;
        
        checkOpiAutor.addEventListener("click", function(e){
          if(checkOpiAutor.checked){
            autorOpi.value = "Usuario Anónimo Verificado";            
          }else{
            autorOpi.value = listVet[localStorage.getItem("userLogged")].nombre;           
          }
        })//Permuta el usuario de solo lectura por si quisiera hacerlo anonimo 

        msgOpi.addEventListener("keyup", function(e){
          e.preventDefault();
          validaOpinion();
        })//Validar que exista opinion
        function validaOpinion() {         
            let flag = false;             
            if(msgOpi.value.length > 20 && msgOpi.value.length<=200 && isNaN(msgOpi.value)){
              msgOpi.classList.remove("is-invalid");
              msgOpi.classList.add("is-valid");
              flag=true;
            }else{
              msgOpi.classList.remove("is-valid");
              msgOpi.classList.add("is-invalid");
            }
            return flag;
        };
        function validarCalif() {
          let flag = false;
          if(califOpi.options[califOpi.selectedIndex].value != 0){
            califOpi.classList.remove("is-invalid");
            califOpi.classList.add("is-valid");
            flag=true;
          }else{
            califOpi.classList.remove("is-valid");
            califOpi.classList.add("is-invalid");
          }
          return flag;
        }
        
        btnOpinar.addEventListener("click", function(e){
          e.preventDefault();
        
          if(validarCalif() && validaOpinion()){    

            let imgcalif=califOpi.options[califOpi.selectedIndex].value;
            console.log(imgcalif);

             //letrero patitas
        let contadoropi=imgcalif;
        console.log(contadoropi)
        let letrero_opi="";
        for(let i=0;i<5;i++){
            
          if(i<contadoropi){ //contador es el número de la estrella a la que le di click
          letrero_opi+=`<i class="fa fa-paw " style="color:orange; text-shadow: 0 0 3px #000;" id="pata1"></i>`
         
          }else{
            letrero_opi+=`<i class="fa fa-paw " style="color:black; text-shadow: 0 0 3px #000;" id="pata1"></i>`
          }
      }//for calificacion
           
            (listVet[posCardVerMas]).opiniones.push(new opinion (autorOpi.value, letrero_opi, msgOpi.value));
            localStorage.setItem("users", JSON.stringify(listVet));

            
            Swal.fire({
              background: '#FFF9E3',
              position: 'center',
              icon: 'success',
              title: 'Se revisará su opinión y si cumple las normas, se publicará en el perfil del usuario',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true
              });
             setTimeout(() => {
              btnCerrarModal.click();
              location.reload();
             }, 3000); 
             

          }else{            
            validarCalif();
            validaOpinion();
          }
               



        })
      }else{
      
        let btnOpinar = document.getElementById("btnOpinar");
       
        btnOpinar.classList.add("d-none");
      }         
    }
    
});//se inserta la card 






var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: false,
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

