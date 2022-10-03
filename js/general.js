let navBar = document.getElementsByClassName("insertNavbar");

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
         <a class="activePage"  href="../pages/logIn.html" style="text-decoration: none">Iniciar Sesión</a>
       </li>
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
         <a class="activePage" href="../pages/perfilUsuario.html" style="text-decoration: none">Perfil</a>
       </li>
       <li>
         <a class="activePage" href="../pages/ingresarVet.html" style="text-decoration: none">Agregar Vet</a>
       </li>
       </li>
     </ul>
   </nav>`


window.addEventListener("load", function(e){
  let page = document.getElementsByClassName("activePage");
  let actualPage = (document.location.pathname).slice(6);
  console.log(page)
  console.log(page[5].href)
  console.log(actualPage);
  console.log(page[5].href.includes(actualPage))

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



     
