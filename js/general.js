let navBar = document.getElementsByClassName("insertNavbar");
console.log("Hay usuario firmado?" + localStorage.getItem("loggedIn"));
let loggedIn = document.getElementById("loggedIn");

if((localStorage.getItem("loggedIn"))== "true"){  
  navBar[0].innerHTML = ` <div class="logo">
     <a href="../pages/index.html"><img src="../src/logoCircular.png" alt="logo" width="60px" height="60px"></a>
     <div >Dr.Lomito</div>  
   </div>         
     <div class="hamburguer">
     <div class="line"></div>
     <div class="line"></div>
     <div class="line"></div>      
     </div>
   <nav class="navbar1 d-block">
     <ul id"listPages">      
       <li>
         <a class="activePage"  href="../pages/nosotros.html" style="text-decoration: none">Nosotros</a>
       </li>
       <li>
         <a class="activePage"  href="../pages/contacto.html" style="text-decoration: none">Contacto</a>
       </li>
       <li>
         <a class="activePage"  href="../pages/directorio.html" style="text-decoration: none">Directorio</a> 
         </a>
       </li>
       <li>
         <a class="activePage" href="../pages/perfilUsuario.html" style="text-decoration: none">Perfil</a>
       </li>
       <li>
         <a class="activePage" href="../pages/ingresarVet.html" style="text-decoration: none">Agregar Vet</a>
       </li>
       <li>
       <a class="activePage" id="loggedIn" href="../pages/index.html" style="text-decoration: none">Cerrar Sesión</a>
       </li>
     </ul>
   </nav>`

  let loggedIn = document.getElementById("loggedIn");

  loggedIn.addEventListener("click", function(e){
    localStorage.setItem("loggedIn", "false");
    localStorage.removeItem("userLogged");
    location.href = "http://127.0.0.1:5501/pages/index.html"
  })//Escuchar cuando cierren sesion

}else{
  navBar[0].innerHTML = ` <div class="logo">
  <a href="./index.html"><img src="../src/logoCircular.png" alt="logo" width="60px" height="60px"></a>
  <div >Dr.Lomito</div>  
</div>         
  <div class="hamburguer">
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>      
  </div>
<nav class="navbar1 d-block">
  <ul id"listPages">   
    <li>
      <a class="activePage" href="../pages/registro.html" style="text-decoration: none">Regístrate</a>
    </li>
    <li>
      <a class="activePage"  href="../pages/nosotros.html" style="text-decoration: none">Nosotros</a>
    </li>
    <li>
      <a class="activePage"  href="../pages/contacto.html" style="text-decoration: none">Contacto</a>
    </li>
    <li>
      <a class="activePage"  href="../pages/directorio.html" style="text-decoration: none">Directorio</a> 
      </a>
    </li>    
    <li>
      <a class="activePage" href="../pages/ingresarVet.html" style="text-decoration: none">Agregar Vet</a>
    </li>
    <li>
      <a class="activePage" id="loggedIn" href="../pages/logIn.html" style="text-decoration: none">Iniciar Sesión</a>
    </li>
  </ul>
</nav>`;
}




window.addEventListener("load", function(e){
  let page = document.getElementsByClassName("activePage");
  let actualPage = (document.location.pathname).slice(6); 

 for (let i = 0; i < page.length; i++) {

  if(page[i].href.includes(actualPage)){
        page[i].classList.add("active");
        break;    
  }
 }
 
  hamburguer = document.querySelector(".hamburguer");
  hamburguer.onclick = function(){
    navBar = document.querySelector(".navbar1");
    navBar.classList.toggle("active");
  }
});//Habilita hamburguesa y añade class active



     
